import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Register a new human
export const register = mutation({
  args: {
    email: v.optional(v.string()),
    walletAddress: v.optional(v.string()),
    name: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Check for existing by wallet or email
    if (args.walletAddress) {
      const existing = await ctx.db
        .query("humans")
        .withIndex("by_walletAddress", (q) => q.eq("walletAddress", args.walletAddress))
        .first();
      if (existing) {
        return { humanId: existing._id, existing: true };
      }
    }
    
    if (args.email) {
      const existing = await ctx.db
        .query("humans")
        .withIndex("by_email", (q) => q.eq("email", args.email))
        .first();
      if (existing) {
        return { humanId: existing._id, existing: true };
      }
    }
    
    const humanId = await ctx.db.insert("humans", {
      email: args.email,
      walletAddress: args.walletAddress,
      name: args.name,
      addresses: [],
      approvalMode: "auto",
      approvalThresholdUsdcCents: 5000, // $50 default
      createdAt: Date.now(),
    });
    
    return { humanId, existing: false };
  },
});

// Get human by ID
export const get = query({
  args: { id: v.id("humans") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

// Get human by wallet
export const getByWallet = query({
  args: { walletAddress: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("humans")
      .withIndex("by_walletAddress", (q) => q.eq("walletAddress", args.walletAddress))
      .first();
  },
});

// Get human by email
export const getByEmail = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("humans")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();
  },
});

// Add shipping address
export const addAddress = mutation({
  args: {
    humanId: v.id("humans"),
    address: v.object({
      label: v.string(),
      line1: v.string(),
      line2: v.optional(v.string()),
      city: v.string(),
      state: v.string(),
      zip: v.string(),
      country: v.string(),
      isDefault: v.boolean(),
    }),
  },
  handler: async (ctx, args) => {
    const human = await ctx.db.get(args.humanId);
    if (!human) throw new Error("Human not found");
    
    const newAddress = {
      ...args.address,
      id: `addr_${Date.now()}`,
    };
    
    let addresses = [...human.addresses];
    
    // If this is default, unset other defaults
    if (args.address.isDefault) {
      addresses = addresses.map((a) => ({ ...a, isDefault: false }));
    }
    
    // If this is first address, make it default
    if (addresses.length === 0) {
      newAddress.isDefault = true;
    }
    
    addresses.push(newAddress);
    
    await ctx.db.patch(args.humanId, { addresses });
    return newAddress;
  },
});

// Update address
export const updateAddress = mutation({
  args: {
    humanId: v.id("humans"),
    addressId: v.string(),
    updates: v.object({
      label: v.optional(v.string()),
      line1: v.optional(v.string()),
      line2: v.optional(v.string()),
      city: v.optional(v.string()),
      state: v.optional(v.string()),
      zip: v.optional(v.string()),
      country: v.optional(v.string()),
      isDefault: v.optional(v.boolean()),
    }),
  },
  handler: async (ctx, args) => {
    const human = await ctx.db.get(args.humanId);
    if (!human) throw new Error("Human not found");
    
    let addresses = human.addresses.map((a) => {
      if (a.id === args.addressId) {
        return { ...a, ...args.updates };
      }
      // If setting new default, unset others
      if (args.updates.isDefault && a.id !== args.addressId) {
        return { ...a, isDefault: false };
      }
      return a;
    });
    
    await ctx.db.patch(args.humanId, { addresses });
    return addresses.find((a) => a.id === args.addressId);
  },
});

// Delete address
export const deleteAddress = mutation({
  args: {
    humanId: v.id("humans"),
    addressId: v.string(),
  },
  handler: async (ctx, args) => {
    const human = await ctx.db.get(args.humanId);
    if (!human) throw new Error("Human not found");
    
    const addresses = human.addresses.filter((a) => a.id !== args.addressId);
    
    // If we deleted the default, make first one default
    if (addresses.length > 0 && !addresses.some((a) => a.isDefault)) {
      addresses[0].isDefault = true;
    }
    
    await ctx.db.patch(args.humanId, { addresses });
    return { success: true };
  },
});

// Update approval settings
export const updateApprovalSettings = mutation({
  args: {
    humanId: v.id("humans"),
    approvalMode: v.optional(v.union(v.literal("auto"), v.literal("manual"), v.literal("threshold"))),
    approvalThresholdUsdcCents: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const { humanId, ...updates } = args;
    const filtered = Object.fromEntries(
      Object.entries(updates).filter(([_, v]) => v !== undefined)
    );
    await ctx.db.patch(humanId, filtered);
    return await ctx.db.get(humanId);
  },
});

// Get linked agents
export const getLinkedAgents = query({
  args: { humanId: v.id("humans") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("agents")
      .withIndex("by_humanId", (q) => q.eq("humanId", args.humanId))
      .collect();
  },
});

// Get orders for human
export const getOrders = query({
  args: { humanId: v.id("humans") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("orders")
      .withIndex("by_humanId", (q) => q.eq("humanId", args.humanId))
      .order("desc")
      .collect();
  },
});

// Get dashboard stats
export const getDashboardStats = query({
  args: { humanId: v.id("humans") },
  handler: async (ctx, args) => {
    const orders = await ctx.db
      .query("orders")
      .withIndex("by_humanId", (q) => q.eq("humanId", args.humanId))
      .collect();
    
    const agents = await ctx.db
      .query("agents")
      .withIndex("by_humanId", (q) => q.eq("humanId", args.humanId))
      .collect();
    
    const totalSpent = orders
      .filter((o) => ["paid", "confirmed", "shipped", "delivered"].includes(o.status))
      .reduce((sum, o) => sum + o.totalUsdcCents, 0);
    
    const pendingOrders = orders.filter((o) => 
      ["pending", "awaiting_payment", "paid", "confirmed"].includes(o.status)
    ).length;
    
    return {
      totalOrders: orders.length,
      pendingOrders,
      totalSpentUsdcCents: totalSpent,
      linkedAgents: agents.length,
    };
  },
});
