"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isConfigured, setIsConfigured] = useState(true);
  
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
      setIsConfigured(false);
    }
  }, []);
  
  const products = useQuery(api.products.list, 
    isConfigured ? {
      category: selectedCategory || undefined,
      inStockOnly: true,
    } : "skip"
  );
  
  const categories = useQuery(api.products.getCategories, isConfigured ? {} : "skip");

  const formatPrice = (cents: number) => {
    return `$${(cents / 100).toFixed(2)}`;
  };

  return (
    <main className="min-h-screen bg-[#FFF8E7]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-[#0D4F3C] flex items-center justify-center">
              <span className="text-white font-bold text-lg md:text-xl">P</span>
            </div>
            <span className="text-lg md:text-xl font-bold text-[#0D4F3C]">Provision</span>
          </Link>
          
          <div className="flex items-center gap-2">
            <Link href="/dashboard" className="text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg border border-[#0D4F3C] text-[#0D4F3C] hover:bg-[#0D4F3C] hover:text-white transition-all font-medium">
              Dashboard
            </Link>
            <Link href="/agents" className="text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg bg-[#0D4F3C] text-white hover:bg-[#1A6B52] transition-all font-medium">
              Agent
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-28 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-2">
            Product Catalog
          </h1>
          <p className="text-[#6B7280]">
            Quality essentials your agent can order with confidence
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === null
                  ? "bg-[#0D4F3C] text-white"
                  : "bg-white text-[#1A1A1A] hover:bg-[#0D4F3C] hover:text-white"
              }`}
            >
              All Products
            </button>
            {categories?.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat.name
                    ? "bg-[#0D4F3C] text-white"
                    : "bg-white text-[#1A1A1A] hover:bg-[#0D4F3C] hover:text-white"
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {products === undefined ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 animate-pulse">
                  <div className="w-full h-40 bg-gray-200 rounded-xl mb-4" />
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                  <div className="h-3 bg-gray-200 rounded w-1/2" />
                </div>
              ))}
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#6B7280] text-lg">No products found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <Link
                  key={product._id}
                  href={`/products/${product.slug}`}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group"
                >
                  {/* Product Image Placeholder */}
                  <div className="w-full h-40 bg-gradient-to-br from-[#0D4F3C]/10 to-[#F5A623]/10 rounded-xl mb-4 flex items-center justify-center">
                    <span className="text-4xl">
                      {product.category === "Personal Care" && "🧴"}
                      {product.category === "Basics" && "👕"}
                      {product.category === "Household" && "🏠"}
                      {product.category === "Health" && "💊"}
                    </span>
                  </div>
                  
                  {/* Category Tag */}
                  <div className="mb-2">
                    <span className="text-xs font-medium text-[#0D4F3C] bg-[#0D4F3C]/10 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  
                  {/* Product Info */}
                  <h3 className="font-semibold text-[#1A1A1A] mb-1 group-hover:text-[#0D4F3C] transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-[#6B7280] mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  
                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-[#0D4F3C]">
                      {formatPrice(product.priceUsdcCents)}
                    </span>
                    <span className="text-xs text-[#6B7280]">USDC</span>
                  </div>
                  
                  {/* Restock Badge */}
                  {product.restockIntervalDays && (
                    <div className="mt-3 text-xs text-[#6B7280] flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Auto-restock every {product.restockIntervalDays} days
                    </div>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-8 h-8 rounded-lg bg-[#0D4F3C] flex items-center justify-center">
              <span className="text-white font-bold">P</span>
            </div>
            <span className="font-bold">Provision</span>
          </div>
          <p className="text-white/40 text-sm">
            © 2026 Provision. Agents provide. Humans thrive.
          </p>
        </div>
      </footer>
    </main>
  );
}
