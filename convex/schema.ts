import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Product catalog
  products: defineTable({
    name: v.string(),
    slug: v.string(),
    description: v.string(),
    category: v.string(),
    priceUsdcCents: v.number(),
    images: v.array(v.string()),
    variants: v.array(v.object({
      id: v.string(),
      name: v.string(),
      value: v.string(),
      priceModifier: v.number(),
    })),
    restockIntervalDays: v.optional(v.number()),
    tags: v.array(v.string()),
    inStock: v.boolean(),
    supplierId: v.optional(v.string()),
    createdAt: v.number(),
  })
    .index("by_slug", ["slug"])
    .index("by_category", ["category"])
    .index("by_inStock", ["inStock"]),

  // AI Agents
  agents: defineTable({
    name: v.string(),
    publicKey: v.string(), // Solana wallet address
    apiKeyHash: v.string(), // Hashed API key
    humanId: v.optional(v.id("humans")),
    spendingLimitDailyUsdcCents: v.number(),
    spendingLimitMonthlyUsdcCents: v.number(),
    totalSpentUsdcCents: v.number(),
    ordersCount: v.number(),
    isActive: v.boolean(),
    createdAt: v.number(),
  })
    .index("by_publicKey", ["publicKey"])
    .index("by_humanId", ["humanId"]),

  // Human users
  humans: defineTable({
    walletAddress: v.optional(v.string()),
    email: v.optional(v.string()),
    name: v.optional(v.string()),
    addresses: v.array(v.object({
      id: v.string(),
      label: v.string(),
      line1: v.string(),
      line2: v.optional(v.string()),
      city: v.string(),
      state: v.string(),
      zip: v.string(),
      country: v.string(),
      isDefault: v.boolean(),
    })),
    approvalMode: v.union(v.literal("auto"), v.literal("manual"), v.literal("threshold")),
    approvalThresholdUsdcCents: v.number(),
    createdAt: v.number(),
  })
    .index("by_walletAddress", ["walletAddress"])
    .index("by_email", ["email"]),

  // Orders
  orders: defineTable({
    orderNumber: v.string(),
    agentId: v.id("agents"),
    humanId: v.id("humans"),
    items: v.array(v.object({
      productId: v.id("products"),
      variantId: v.optional(v.string()),
      name: v.string(),
      quantity: v.number(),
      priceUsdcCents: v.number(),
    })),
    subtotalUsdcCents: v.number(),
    shippingUsdcCents: v.number(),
    totalUsdcCents: v.number(),
    shippingAddress: v.object({
      label: v.string(),
      line1: v.string(),
      line2: v.optional(v.string()),
      city: v.string(),
      state: v.string(),
      zip: v.string(),
      country: v.string(),
    }),
    status: v.union(
      v.literal("pending"),
      v.literal("awaiting_payment"),
      v.literal("paid"),
      v.literal("confirmed"),
      v.literal("shipped"),
      v.literal("delivered"),
      v.literal("refunded"),
      v.literal("cancelled")
    ),
    paymentSignature: v.optional(v.string()),
    paymentVerifiedAt: v.optional(v.number()),
    shippedAt: v.optional(v.number()),
    trackingNumber: v.optional(v.string()),
    trackingUrl: v.optional(v.string()),
    deliveredAt: v.optional(v.number()),
    notes: v.optional(v.string()),
    createdAt: v.number(),
  })
    .index("by_orderNumber", ["orderNumber"])
    .index("by_agentId", ["agentId"])
    .index("by_humanId", ["humanId"])
    .index("by_status", ["status"]),

  // Restock schedules
  schedules: defineTable({
    agentId: v.id("agents"),
    humanId: v.id("humans"),
    productId: v.id("products"),
    variantId: v.optional(v.string()),
    intervalDays: v.number(),
    quantity: v.number(),
    nextRunAt: v.number(),
    lastOrderId: v.optional(v.id("orders")),
    isActive: v.boolean(),
    createdAt: v.number(),
  })
    .index("by_agentId", ["agentId"])
    .index("by_nextRunAt", ["nextRunAt"])
    .index("by_isActive", ["isActive"]),

  // API keys (separate for security)
  apiKeys: defineTable({
    agentId: v.id("agents"),
    keyPrefix: v.string(), // First 8 chars for identification
    keyHash: v.string(),
    lastUsedAt: v.optional(v.number()),
    createdAt: v.number(),
    expiresAt: v.optional(v.number()),
    isActive: v.boolean(),
  })
    .index("by_keyPrefix", ["keyPrefix"])
    .index("by_agentId", ["agentId"]),
});
