"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const product = useQuery(api.products.getBySlug, { slug });
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  const formatPrice = (cents: number) => {
    return `$${(cents / 100).toFixed(2)}`;
  };

  const getPrice = () => {
    if (!product) return 0;
    let price = product.priceUsdcCents;
    if (selectedVariant) {
      const variant = product.variants.find((v) => v.id === selectedVariant);
      if (variant) price += variant.priceModifier;
    }
    return price * quantity;
  };

  const getCategoryEmoji = (category: string) => {
    switch (category) {
      case "Personal Care": return "🧴";
      case "Basics": return "👕";
      case "Household": return "🏠";
      case "Health": return "💊";
      default: return "📦";
    }
  };

  if (product === undefined) {
    return (
      <main className="min-h-screen bg-[#FFF8E7]">
        <nav className="fixed top-0 left-0 right-0 z-50 glass">
          <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-[#0D4F3C] flex items-center justify-center">
                <span className="text-white font-bold text-lg md:text-xl">P</span>
              </div>
              <span className="text-lg md:text-xl font-bold text-[#0D4F3C]">Provision</span>
            </Link>
          </div>
        </nav>
        <div className="pt-32 flex justify-center">
          <div className="animate-pulse">Loading...</div>
        </div>
      </main>
    );
  }

  if (product === null) {
    return (
      <main className="min-h-screen bg-[#FFF8E7]">
        <nav className="fixed top-0 left-0 right-0 z-50 glass">
          <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-[#0D4F3C] flex items-center justify-center">
                <span className="text-white font-bold text-lg md:text-xl">P</span>
              </div>
              <span className="text-lg md:text-xl font-bold text-[#0D4F3C]">Provision</span>
            </Link>
          </div>
        </nav>
        <div className="pt-32 text-center">
          <h1 className="text-2xl font-bold text-[#1A1A1A] mb-4">Product Not Found</h1>
          <Link href="/products" className="text-[#0D4F3C] hover:underline">
            ← Back to Products
          </Link>
        </div>
      </main>
    );
  }

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

      {/* Breadcrumb */}
      <div className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm text-[#6B7280]">
            <Link href="/products" className="hover:text-[#0D4F3C] whitespace-nowrap">Products</Link>
            <span>/</span>
            <Link href={`/products?category=${product.category}`} className="hover:text-[#0D4F3C] whitespace-nowrap">
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-[#1A1A1A] truncate max-w-[150px] sm:max-w-none">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="aspect-square bg-gradient-to-br from-[#0D4F3C]/10 to-[#F5A623]/10 rounded-xl flex items-center justify-center">
                <span className="text-8xl">{getCategoryEmoji(product.category)}</span>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <span className="text-sm font-medium text-[#0D4F3C] bg-[#0D4F3C]/10 px-3 py-1 rounded-full">
                  {product.category}
                </span>
                {!product.inStock && (
                  <span className="ml-2 text-sm font-medium text-red-600 bg-red-100 px-3 py-1 rounded-full">
                    Out of Stock
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
                {product.name}
              </h1>

              <p className="text-lg text-[#6B7280] mb-6">
                {product.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-[#0D4F3C]">
                    {formatPrice(getPrice())}
                  </span>
                  <span className="text-[#6B7280]">USDC</span>
                </div>
                {quantity > 1 && (
                  <p className="text-sm text-[#6B7280] mt-1">
                    {formatPrice(product.priceUsdcCents)} each
                  </p>
                )}
              </div>

              {/* Variants */}
              {product.variants.length > 0 && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    {product.variants[0].name}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((variant) => (
                      <button
                        key={variant.id}
                        onClick={() => setSelectedVariant(
                          selectedVariant === variant.id ? null : variant.id
                        )}
                        className={`px-4 py-2 rounded-lg border-2 font-medium transition-all ${
                          selectedVariant === variant.id
                            ? "border-[#0D4F3C] bg-[#0D4F3C] text-white"
                            : "border-gray-200 hover:border-[#0D4F3C]"
                        }`}
                      >
                        {variant.value}
                        {variant.priceModifier > 0 && (
                          <span className="ml-1 text-xs opacity-70">
                            +{formatPrice(variant.priceModifier)}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg border-2 border-gray-200 flex items-center justify-center hover:border-[#0D4F3C] transition-colors"
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg border-2 border-gray-200 flex items-center justify-center hover:border-[#0D4F3C] transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Auto-restock */}
              {product.restockIntervalDays && (
                <div className="mb-6 p-4 bg-[#0D4F3C]/5 rounded-xl">
                  <div className="flex items-center gap-2 text-[#0D4F3C]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span className="font-medium">Auto-Restock Available</span>
                  </div>
                  <p className="text-sm text-[#6B7280] mt-1">
                    Your agent can automatically reorder every {product.restockIntervalDays} days
                  </p>
                </div>
              )}

              {/* Actions */}
              <div className="space-y-3">
                <button
                  disabled={!product.inStock}
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all ${
                    product.inStock
                      ? "bg-[#F5A623] text-[#1A1A1A] hover:bg-[#FFD080] shadow-lg hover:shadow-xl"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {product.inStock ? "Add to Order" : "Out of Stock"}
                </button>
                <p className="text-center text-sm text-[#6B7280]">
                  Free shipping on orders over $25
                </p>
              </div>

              {/* Tags */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-[#6B7280] bg-gray-100 px-2 py-1 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Integration CTA */}
      <section className="py-12 px-6 bg-[#0D4F3C]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Want your agent to handle this?</h2>
          <p className="text-white/70 mb-6">
            Integrate your AI agent with Provision and let it order this product automatically.
          </p>
          <Link
            href="/docs"
            className="inline-block bg-[#F5A623] text-[#1A1A1A] px-8 py-3 rounded-xl font-semibold hover:bg-[#FFD080] transition-all"
          >
            View Agent API Docs →
          </Link>
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
