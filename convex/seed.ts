import { mutation } from "./_generated/server";

// Seed initial products
export const seedProducts = mutation({
  handler: async (ctx) => {
    // Check if already seeded
    const existing = await ctx.db.query("products").first();
    if (existing) {
      return { message: "Products already seeded", count: 0 };
    }
    
    const products = [
      // Personal Care
      {
        name: "Premium Toothpaste (3-Pack)",
        slug: "toothpaste-premium-3pack",
        description: "Fluoride whitening toothpaste. Fresh mint flavor. 3 tubes, 6oz each.",
        category: "Personal Care",
        priceUsdcCents: 1299,
        images: ["/products/toothpaste.jpg"],
        variants: [],
        restockIntervalDays: 60,
        tags: ["dental", "hygiene", "mint", "whitening"],
        inStock: true,
      },
      {
        name: "Natural Deodorant",
        slug: "deodorant-natural",
        description: "Aluminum-free natural deodorant. 48-hour protection. Fresh scent.",
        category: "Personal Care",
        priceUsdcCents: 899,
        images: ["/products/deodorant.jpg"],
        variants: [
          { id: "unscented", name: "Scent", value: "Unscented", priceModifier: 0 },
          { id: "cedar", name: "Scent", value: "Cedar", priceModifier: 100 },
        ],
        restockIntervalDays: 45,
        tags: ["natural", "hygiene", "aluminum-free"],
        inStock: true,
      },
      {
        name: "Moisturizing Body Wash",
        slug: "body-wash-moisturizing",
        description: "Gentle, pH-balanced body wash. Great for sensitive skin. 16oz bottle.",
        category: "Personal Care",
        priceUsdcCents: 749,
        images: ["/products/bodywash.jpg"],
        variants: [],
        restockIntervalDays: 30,
        tags: ["shower", "hygiene", "sensitive-skin"],
        inStock: true,
      },
      {
        name: "Shampoo & Conditioner Set",
        slug: "shampoo-conditioner-set",
        description: "Sulfate-free shampoo and conditioner. For all hair types. 12oz each.",
        category: "Personal Care",
        priceUsdcCents: 1599,
        images: ["/products/shampoo.jpg"],
        variants: [],
        restockIntervalDays: 45,
        tags: ["hair", "hygiene", "sulfate-free"],
        inStock: true,
      },
      {
        name: "Electric Razor Replacement Heads",
        slug: "razor-heads-electric",
        description: "Compatible with most electric razors. Pack of 4 replacement heads.",
        category: "Personal Care",
        priceUsdcCents: 2499,
        images: ["/products/razor.jpg"],
        variants: [],
        restockIntervalDays: 90,
        tags: ["shaving", "grooming"],
        inStock: true,
      },
      
      // Basics
      {
        name: "Cotton Crew Socks (6-Pack)",
        slug: "socks-cotton-crew-6pack",
        description: "Comfortable cotton blend crew socks. Reinforced heel and toe.",
        category: "Basics",
        priceUsdcCents: 1899,
        images: ["/products/socks.jpg"],
        variants: [
          { id: "black", name: "Color", value: "Black", priceModifier: 0 },
          { id: "white", name: "Color", value: "White", priceModifier: 0 },
          { id: "gray", name: "Color", value: "Gray", priceModifier: 0 },
        ],
        restockIntervalDays: 90,
        tags: ["clothing", "comfort", "cotton"],
        inStock: true,
      },
      {
        name: "Cotton Boxer Briefs (4-Pack)",
        slug: "boxer-briefs-cotton-4pack",
        description: "Breathable cotton boxer briefs. Tagless comfort. Sizes S-XXL.",
        category: "Basics",
        priceUsdcCents: 2499,
        images: ["/products/boxers.jpg"],
        variants: [
          { id: "s", name: "Size", value: "Small", priceModifier: 0 },
          { id: "m", name: "Size", value: "Medium", priceModifier: 0 },
          { id: "l", name: "Size", value: "Large", priceModifier: 0 },
          { id: "xl", name: "Size", value: "X-Large", priceModifier: 0 },
          { id: "xxl", name: "Size", value: "XX-Large", priceModifier: 200 },
        ],
        restockIntervalDays: 120,
        tags: ["clothing", "comfort", "underwear"],
        inStock: true,
      },
      {
        name: "Basic White T-Shirts (3-Pack)",
        slug: "tshirts-white-basic-3pack",
        description: "100% cotton crew neck tees. Pre-shrunk. Classic fit.",
        category: "Basics",
        priceUsdcCents: 2199,
        images: ["/products/tshirts.jpg"],
        variants: [
          { id: "s", name: "Size", value: "Small", priceModifier: 0 },
          { id: "m", name: "Size", value: "Medium", priceModifier: 0 },
          { id: "l", name: "Size", value: "Large", priceModifier: 0 },
          { id: "xl", name: "Size", value: "X-Large", priceModifier: 0 },
        ],
        restockIntervalDays: 180,
        tags: ["clothing", "basics", "cotton"],
        inStock: true,
      },
      
      // Household
      {
        name: "Toilet Paper (12 Mega Rolls)",
        slug: "toilet-paper-mega-12",
        description: "Ultra-soft 2-ply toilet paper. 12 mega rolls = 48 regular rolls.",
        category: "Household",
        priceUsdcCents: 1899,
        images: ["/products/toiletpaper.jpg"],
        variants: [],
        restockIntervalDays: 45,
        tags: ["bathroom", "essential", "paper"],
        inStock: true,
      },
      {
        name: "Paper Towels (8 Rolls)",
        slug: "paper-towels-8pack",
        description: "Extra absorbent paper towels. Select-a-size sheets. 8 double rolls.",
        category: "Household",
        priceUsdcCents: 1599,
        images: ["/products/papertowels.jpg"],
        variants: [],
        restockIntervalDays: 30,
        tags: ["kitchen", "cleaning", "paper"],
        inStock: true,
      },
      {
        name: "All-Purpose Cleaner (2-Pack)",
        slug: "cleaner-allpurpose-2pack",
        description: "Multi-surface cleaning spray. Cuts grease and grime. 32oz each.",
        category: "Household",
        priceUsdcCents: 999,
        images: ["/products/cleaner.jpg"],
        variants: [],
        restockIntervalDays: 60,
        tags: ["cleaning", "spray", "kitchen"],
        inStock: true,
      },
      {
        name: "Dish Soap (3-Pack)",
        slug: "dish-soap-3pack",
        description: "Grease-fighting dish soap. Gentle on hands. 24oz bottles.",
        category: "Household",
        priceUsdcCents: 1199,
        images: ["/products/dishsoap.jpg"],
        variants: [],
        restockIntervalDays: 45,
        tags: ["kitchen", "cleaning", "dishes"],
        inStock: true,
      },
      {
        name: "Laundry Detergent Pods (42ct)",
        slug: "laundry-pods-42ct",
        description: "3-in-1 laundry pods. Cleans, brightens, protects. HE compatible.",
        category: "Household",
        priceUsdcCents: 1699,
        images: ["/products/laundrypods.jpg"],
        variants: [],
        restockIntervalDays: 60,
        tags: ["laundry", "cleaning", "detergent"],
        inStock: true,
      },
      {
        name: "Trash Bags (50ct)",
        slug: "trash-bags-50ct",
        description: "13-gallon kitchen trash bags. Drawstring closure. Odor control.",
        category: "Household",
        priceUsdcCents: 1299,
        images: ["/products/trashbags.jpg"],
        variants: [],
        restockIntervalDays: 45,
        tags: ["kitchen", "trash", "bags"],
        inStock: true,
      },
      
      // Health
      {
        name: "Daily Multivitamin (90ct)",
        slug: "multivitamin-daily-90ct",
        description: "Complete daily multivitamin. Essential vitamins and minerals. 90-day supply.",
        category: "Health",
        priceUsdcCents: 1899,
        images: ["/products/multivitamin.jpg"],
        variants: [],
        restockIntervalDays: 90,
        tags: ["vitamins", "supplements", "daily"],
        inStock: true,
      },
      {
        name: "Vitamin D3 (120ct)",
        slug: "vitamin-d3-120ct",
        description: "High-potency Vitamin D3 2000 IU. Supports bone and immune health.",
        category: "Health",
        priceUsdcCents: 1299,
        images: ["/products/vitamind.jpg"],
        variants: [],
        restockIntervalDays: 120,
        tags: ["vitamins", "supplements", "immunity"],
        inStock: true,
      },
      {
        name: "First Aid Kit",
        slug: "first-aid-kit-basic",
        description: "100-piece first aid kit. Bandages, antiseptic, pain relief. Travel-ready.",
        category: "Health",
        priceUsdcCents: 2499,
        images: ["/products/firstaid.jpg"],
        variants: [],
        restockIntervalDays: undefined,
        tags: ["safety", "emergency", "bandages"],
        inStock: true,
      },
      {
        name: "Pain Relief (200ct)",
        slug: "pain-relief-ibuprofen-200ct",
        description: "Ibuprofen 200mg tablets. Pain and fever relief. 200 count bottle.",
        category: "Health",
        priceUsdcCents: 1199,
        images: ["/products/painrelief.jpg"],
        variants: [],
        restockIntervalDays: 180,
        tags: ["medicine", "pain", "fever"],
        inStock: true,
      },
      {
        name: "Allergy Relief (90ct)",
        slug: "allergy-relief-90ct",
        description: "24-hour non-drowsy allergy relief. Loratadine 10mg. 90-day supply.",
        category: "Health",
        priceUsdcCents: 1499,
        images: ["/products/allergy.jpg"],
        variants: [],
        restockIntervalDays: 90,
        tags: ["medicine", "allergy", "antihistamine"],
        inStock: true,
      },
      {
        name: "Hand Sanitizer (3-Pack)",
        slug: "hand-sanitizer-3pack",
        description: "70% alcohol hand sanitizer. Moisturizing formula. 8oz bottles.",
        category: "Health",
        priceUsdcCents: 999,
        images: ["/products/sanitizer.jpg"],
        variants: [],
        restockIntervalDays: 60,
        tags: ["hygiene", "sanitizer", "alcohol"],
        inStock: true,
      },
    ];
    
    let count = 0;
    for (const product of products) {
      await ctx.db.insert("products", {
        ...product,
        createdAt: Date.now(),
      });
      count++;
    }
    
    return { message: "Products seeded successfully", count };
  },
});

// Clear all products (for testing)
export const clearProducts = mutation({
  handler: async (ctx) => {
    const products = await ctx.db.query("products").collect();
    for (const product of products) {
      await ctx.db.delete(product._id);
    }
    return { message: "All products deleted", count: products.length };
  },
});
