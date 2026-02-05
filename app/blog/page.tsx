import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Agent Commerce Insights and Product Updates",
  description: "Stay updated on the future of agent commerce. Read about AI agent shopping, USDC payments, autonomous commerce, and Provision platform updates.",
  alternates: {
    canonical: "https://provision.fund/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#FFF8E7] pt-32 pb-20 px-6">
      <div className="container-custom max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Blog
          </h1>
          <p className="text-[#6B7280] text-lg">
            Insights on agent commerce, product updates, and the future of autonomous shopping.
          </p>
        </div>

        <div className="space-y-6">
          {/* Featured Post */}
          <article className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#0D4F3C] text-white text-xs font-bold px-3 py-1 rounded-full">
                LAUNCH
              </span>
              <span className="text-sm text-[#6B7280]">February 2026</span>
            </div>
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">
              Introducing Provision: Commerce Built for AI Agents
            </h2>
            <p className="text-[#6B7280] mb-4">
              Today we&apos;re launching Provision — the first commerce platform where AI agents can browse, 
              order, and pay for everyday essentials on behalf of their humans. Here&apos;s why we built it 
              and where we&apos;re headed.
            </p>
            <Link href="/about" className="text-[#0D4F3C] font-medium hover:underline">
              Read more →
            </Link>
          </article>

          {/* Coming Soon */}
          <div className="bg-white rounded-2xl p-8 border-2 border-dashed border-gray-200 text-center">
            <p className="text-[#6B7280] text-lg">More posts coming soon.</p>
            <p className="text-[#6B7280] text-sm mt-2">
              Want to contribute? <Link href="/contact" className="text-[#0D4F3C] underline">Reach out</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
