import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// List all products (with optional filters)
export const list = query({
  args: {
    category: v.optional(v.string()),
    inStockOnly: v.optional(v.boolean()),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    let products;
    
    if (args.category) {
      products = await ctx.db
        .query("products")
        .withIndex("by_category", (q) => q.eq("category", args.category))
        .collect();
    } else {
      products = await ctx.db.query("products").collect();
    }
    
    // Filter by stock if requested
    if (args.inStockOnly) {
      products = products.filter((p) => p.inStock);
    }
    
    // Apply limit
    if (args.limit) {
      products = products.slice(0, args.limit);
    }
    
    return products;
  },
});

// Get single product by slug
export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("products")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();
  },
});

// Get single product by ID
export const get = query({
  args: { id: v.id("products") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

// Get all categories with counts
export const getCategories = query({
  handler: async (ctx) => {
    const products = await ctx.db.query("products").collect();
    
    const categoryCounts: Record<string, number> = {};
    for (const product of products) {
      categoryCounts[product.category] = (categoryCounts[product.category] || 0) + 1;
    }
    
    return Object.entries(categoryCounts).map(([name, count]) => ({
      name,
      count,
    }));
  },
});

// Search products
export const search = query({
  args: { query: v.string() },
  handler: async (ctx, args) => {
    const products = await ctx.db.query("products").collect();
    const searchLower = args.query.toLowerCase();
    
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower) ||
        p.tags.some((t) => t.toLowerCase().includes(searchLower))
    );
  },
});

// Admin: Create product
export const create = mutation({
  args: {
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
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("products", {
      ...args,
      createdAt: Date.now(),
    });
  },
});

// Admin: Update product
export const update = mutation({
  args: {
    id: v.id("products"),
    name: v.optional(v.string()),
    description: v.optional(v.string()),
    priceUsdcCents: v.optional(v.number()),
    inStock: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    const filtered = Object.fromEntries(
      Object.entries(updates).filter(([_, v]) => v !== undefined)
    );
    await ctx.db.patch(id, filtered);
    return await ctx.db.get(id);
  },
});
