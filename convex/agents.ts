import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Register a new agent
export const register = mutation({
  args: {
    name: v.string(),
    publicKey: v.string(), // Solana wallet address
  },
  handler: async (ctx, args) => {
    // Check if agent with this wallet already exists
    const existing = await ctx.db
      .query("agents")
      .withIndex("by_publicKey", (q) => q.eq("publicKey", args.publicKey))
      .first();
    
    if (existing) {
      throw new Error("Agent with this wallet already registered");
    }
    
    // Generate API key (in production, use crypto.randomUUID or similar)
    const apiKey = `prov_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const apiKeyHash = apiKey; // In production: hash this!
    
    const agentId = await ctx.db.insert("agents", {
      name: args.name,
      publicKey: args.publicKey,
      apiKeyHash,
      humanId: undefined,
      spendingLimitDailyUsdcCents: 5000, // $50 default
      spendingLimitMonthlyUsdcCents: 50000, // $500 default
      totalSpentUsdcCents: 0,
      ordersCount: 0,
      isActive: true,
      createdAt: Date.now(),
    });
    
    // Also store the API key reference
    await ctx.db.insert("apiKeys", {
      agentId,
      keyPrefix: apiKey.slice(0, 12),
      keyHash: apiKeyHash,
      createdAt: Date.now(),
      isActive: true,
    });
    
    return {
      agentId,
      apiKey, // Only returned once!
      message: "Save this API key - it won't be shown again!",
    };
  },
});

// Get agent by ID
export const get = query({
  args: { id: v.id("agents") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

// Get agent by wallet address
export const getByWallet = query({
  args: { publicKey: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("agents")
      .withIndex("by_publicKey", (q) => q.eq("publicKey", args.publicKey))
      .first();
  },
});

// Link agent to human
export const linkToHuman = mutation({
  args: {
    agentId: v.id("agents"),
    humanId: v.id("humans"),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.agentId, { humanId: args.humanId });
    return { success: true };
  },
});

// Update spending limits
export const updateLimits = mutation({
  args: {
    agentId: v.id("agents"),
    spendingLimitDailyUsdcCents: v.optional(v.number()),
    spendingLimitMonthlyUsdcCents: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const { agentId, ...limits } = args;
    const filtered = Object.fromEntries(
      Object.entries(limits).filter(([_, v]) => v !== undefined)
    );
    await ctx.db.patch(agentId, filtered);
    return await ctx.db.get(agentId);
  },
});

// Get agent stats
export const getStats = query({
  args: { agentId: v.id("agents") },
  handler: async (ctx, args) => {
    const agent = await ctx.db.get(args.agentId);
    if (!agent) return null;
    
    const orders = await ctx.db
      .query("orders")
      .withIndex("by_agentId", (q) => q.eq("agentId", args.agentId))
      .collect();
    
    const completedOrders = orders.filter((o) => 
      ["paid", "confirmed", "shipped", "delivered"].includes(o.status)
    );
    
    return {
      totalOrders: orders.length,
      completedOrders: completedOrders.length,
      totalSpent: agent.totalSpentUsdcCents,
      dailyLimit: agent.spendingLimitDailyUsdcCents,
      monthlyLimit: agent.spendingLimitMonthlyUsdcCents,
      remainingDaily: agent.spendingLimitDailyUsdcCents - agent.totalSpentUsdcCents,
    };
  },
});
