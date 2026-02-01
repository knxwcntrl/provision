import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Create a new order
export const create = mutation({
  args: {
    agentId: v.id("agents"),
    humanId: v.id("humans"),
    items: v.array(v.object({
      productId: v.id("products"),
      variantId: v.optional(v.string()),
      quantity: v.number(),
    })),
    shippingAddress: v.object({
      label: v.string(),
      line1: v.string(),
      line2: v.optional(v.string()),
      city: v.string(),
      state: v.string(),
      zip: v.string(),
      country: v.string(),
    }),
  },
  handler: async (ctx, args) => {
    // Verify agent exists and is active
    const agent = await ctx.db.get(args.agentId);
    if (!agent || !agent.isActive) {
      throw new Error("Agent not found or inactive");
    }
    
    // Build order items with prices
    const orderItems = [];
    let subtotal = 0;
    
    for (const item of args.items) {
      const product = await ctx.db.get(item.productId);
      if (!product) {
        throw new Error(`Product ${item.productId} not found`);
      }
      if (!product.inStock) {
        throw new Error(`Product ${product.name} is out of stock`);
      }
      
      let price = product.priceUsdcCents;
      
      // Apply variant price modifier if applicable
      if (item.variantId) {
        const variant = product.variants.find((v) => v.id === item.variantId);
        if (variant) {
          price += variant.priceModifier;
        }
      }
      
      const lineTotal = price * item.quantity;
      subtotal += lineTotal;
      
      orderItems.push({
        productId: item.productId,
        variantId: item.variantId,
        name: product.name,
        quantity: item.quantity,
        priceUsdcCents: price,
      });
    }
    
    // Check spending limits
    if (subtotal > agent.spendingLimitDailyUsdcCents) {
      throw new Error("Order exceeds daily spending limit");
    }
    
    // Calculate shipping (free over $25)
    const shippingCents = subtotal >= 2500 ? 0 : 499;
    const total = subtotal + shippingCents;
    
    // Generate order number
    const orderNumber = `PRV-${Date.now().toString(36).toUpperCase()}`;
    
    // Create order
    const orderId = await ctx.db.insert("orders", {
      orderNumber,
      agentId: args.agentId,
      humanId: args.humanId,
      items: orderItems,
      subtotalUsdcCents: subtotal,
      shippingUsdcCents: shippingCents,
      totalUsdcCents: total,
      shippingAddress: args.shippingAddress,
      status: "awaiting_payment",
      createdAt: Date.now(),
    });
    
    return {
      orderId,
      orderNumber,
      subtotal,
      shipping: shippingCents,
      total,
      paymentAddress: process.env.PROVISION_WALLET || "5LMxbU3axc3jPkmxBFZTwDBKbojuSmZ7E1QmS4LyZu74",
    };
  },
});

// Confirm payment with Solana signature
export const confirmPayment = mutation({
  args: {
    orderId: v.id("orders"),
    paymentSignature: v.string(),
  },
  handler: async (ctx, args) => {
    const order = await ctx.db.get(args.orderId);
    if (!order) {
      throw new Error("Order not found");
    }
    if (order.status !== "awaiting_payment") {
      throw new Error("Order is not awaiting payment");
    }
    
    // TODO: In production, verify the signature on-chain
    // For now, we trust the signature
    
    await ctx.db.patch(args.orderId, {
      status: "paid",
      paymentSignature: args.paymentSignature,
      paymentVerifiedAt: Date.now(),
    });
    
    // Update agent stats
    const agent = await ctx.db.get(order.agentId);
    if (agent) {
      await ctx.db.patch(order.agentId, {
        totalSpentUsdcCents: agent.totalSpentUsdcCents + order.totalUsdcCents,
        ordersCount: agent.ordersCount + 1,
      });
    }
    
    return { success: true, status: "paid" };
  },
});

// Get order by ID
export const get = query({
  args: { id: v.id("orders") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

// Get order by order number
export const getByNumber = query({
  args: { orderNumber: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("orders")
      .withIndex("by_orderNumber", (q) => q.eq("orderNumber", args.orderNumber))
      .first();
  },
});

// List orders for an agent
export const listByAgent = query({
  args: { agentId: v.id("agents") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("orders")
      .withIndex("by_agentId", (q) => q.eq("agentId", args.agentId))
      .order("desc")
      .collect();
  },
});

// List orders for a human
export const listByHuman = query({
  args: { humanId: v.id("humans") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("orders")
      .withIndex("by_humanId", (q) => q.eq("humanId", args.humanId))
      .order("desc")
      .collect();
  },
});

// Update order status (admin)
export const updateStatus = mutation({
  args: {
    orderId: v.id("orders"),
    status: v.union(
      v.literal("confirmed"),
      v.literal("shipped"),
      v.literal("delivered"),
      v.literal("refunded"),
      v.literal("cancelled")
    ),
    trackingNumber: v.optional(v.string()),
    trackingUrl: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const updates: Record<string, unknown> = { status: args.status };
    
    if (args.status === "shipped") {
      updates.shippedAt = Date.now();
      if (args.trackingNumber) updates.trackingNumber = args.trackingNumber;
      if (args.trackingUrl) updates.trackingUrl = args.trackingUrl;
    }
    
    if (args.status === "delivered") {
      updates.deliveredAt = Date.now();
    }
    
    await ctx.db.patch(args.orderId, updates);
    return await ctx.db.get(args.orderId);
  },
});
