import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Provision | Free During Early Access",
  description:
    "Provision is free during early access. No platform fees, no subscription. You only pay for products and shipping. See our future plans and what's included.",
  alternates: {
    canonical: "https://provision.fund/pricing",
  },
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#FFF8E7]">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-[#6B7280]">Early Access — Free</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              During early access, Provision charges zero platform fees. You only
              pay for the products you order and shipping.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Free Tier */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-[#0D4F3C] relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0D4F3C] text-white text-xs font-bold px-4 py-1 rounded-full">
                CURRENT
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                Early Access
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[#0D4F3C]">$0</span>
                <span className="text-[#6B7280]">/mo</span>
              </div>
              <ul className="space-y-3 text-[#6B7280] mb-8">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#0D4F3C] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Unlimited orders
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#0D4F3C] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  1 linked agent
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#0D4F3C] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Full API access
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#0D4F3C] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Free shipping over $25
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#0D4F3C] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Dashboard &amp; analytics
                </li>
              </ul>
              <Link
                href="/register"
                className="block text-center py-3 bg-[#0D4F3C] text-white rounded-xl font-semibold hover:bg-[#1A6B52] transition-colors"
              >
                Get Started Free
              </Link>
            </div>

            {/* Pro Tier */}
            <div className="bg-white rounded-2xl p-8 shadow-sm opacity-75">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Pro</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[#1A1A1A]">$9</span>
                <span className="text-[#6B7280]">/mo</span>
              </div>
              <ul className="space-y-3 text-[#6B7280] mb-8">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#6B7280] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Everything in Free
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#6B7280] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Up to 5 linked agents
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#6B7280] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Priority shipping
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#6B7280] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Advanced spending rules
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#6B7280] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Restock scheduling
                </li>
              </ul>
              <div className="block text-center py-3 border-2 border-gray-200 text-[#6B7280] rounded-xl font-semibold cursor-not-allowed">
                Coming Soon
              </div>
            </div>

            {/* Team Tier */}
            <div className="bg-white rounded-2xl p-8 shadow-sm opacity-75">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Team</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[#1A1A1A]">$29</span>
                <span className="text-[#6B7280]">/mo</span>
              </div>
              <ul className="space-y-3 text-[#6B7280] mb-8">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#6B7280] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Everything in Pro
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#6B7280] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Unlimited agents
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#6B7280] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Multi-user accounts
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#6B7280] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Bulk ordering &amp; discounts
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#6B7280] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Dedicated support
                </li>
              </ul>
              <div className="block text-center py-3 border-2 border-gray-200 text-[#6B7280] rounded-xl font-semibold cursor-not-allowed">
                Coming Soon
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-[#1A1A1A] mb-2">
                  Is Provision really free?
                </h3>
                <p className="text-[#6B7280]">
                  Yes! During early access, we charge no platform fees. You only
                  pay for the products themselves plus shipping ($4.99 flat rate,
                  free over $25). We want to grow the ecosystem first.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-[#1A1A1A] mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-[#6B7280]">
                  We currently accept USDC on the Solana blockchain. All
                  payments are direct wallet-to-wallet transfers — we never hold
                  your funds.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-[#1A1A1A] mb-2">
                  Will early access users get locked in at the free price?
                </h3>
                <p className="text-[#6B7280]">
                  Early access users will receive significant discounts when paid
                  plans launch. We&apos;ll always give plenty of notice before any
                  pricing changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
