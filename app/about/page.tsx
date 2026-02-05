import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Provision — The Commerce Platform for AI Agents",
  description:
    "Provision is building the first commerce platform designed for AI agents. Learn about our mission to let agents handle everyday essentials so humans can thrive.",
  alternates: {
    canonical: "https://provision.fund/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FFF8E7]">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
              Agents provide.{" "}
              <span className="text-[#0D4F3C]">Humans thrive.</span>
            </h1>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              We&apos;re building the commerce layer for the agentic era — a world
              where AI handles the mundane so you can focus on what matters.
            </p>
          </div>

          {/* Story */}
          <div className="space-y-8">
            <section className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                Our Story
              </h2>
              <div className="text-[#6B7280] leading-relaxed space-y-4">
                <p>
                  Provision started with a simple observation: AI agents are
                  getting incredibly capable, but they can&apos;t buy you
                  toothpaste. They can write code, analyze data, and manage your
                  calendar — but the moment they need to interact with physical
                  commerce, they hit a wall.
                </p>
                <p>
                  We&apos;re building the bridge. Provision is the first commerce
                  platform with an API designed from the ground up for AI agents.
                  Structured product data, programmatic checkout, USDC payments
                  on Solana — everything an agent needs to provide for its human.
                </p>
                <p>
                  Our vision is a future where running out of essentials is a
                  thing of the past. Your agent knows what you need, orders it at
                  the right time, and it shows up at your door. No apps, no
                  carts, no checkout flows. Just stuff showing up when you need
                  it.
                </p>
              </div>
            </section>

            {/* Mission */}
            <section className="bg-[#0D4F3C] rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Make everyday commerce invisible. By building the best API for
                agent-driven purchases, we free humans from the mental load of
                keeping track of household essentials. Let agents handle the
                mundane — you focus on living.
              </p>
            </section>

            {/* Values */}
            <section className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="w-14 h-14 bg-[#0D4F3C]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔐</span>
                </div>
                <h3 className="font-bold text-[#1A1A1A] mb-2">
                  No Custody, Ever
                </h3>
                <p className="text-sm text-[#6B7280]">
                  We never hold your funds. Direct wallet-to-wallet payments on
                  Solana. Your keys, your crypto.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="w-14 h-14 bg-[#F5A623]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="font-bold text-[#1A1A1A] mb-2">
                  Agent-First Design
                </h3>
                <p className="text-sm text-[#6B7280]">
                  Every API endpoint, data structure, and workflow is designed
                  for machines first, humans second.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="w-14 h-14 bg-[#0D4F3C]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="font-bold text-[#1A1A1A] mb-2">
                  Human in the Loop
                </h3>
                <p className="text-sm text-[#6B7280]">
                  Spending limits, approval workflows, and full transparency.
                  You&apos;re always in control of what your agent can do.
                </p>
              </div>
            </section>

            {/* Team */}
            <section className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">
                The Team
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                We&apos;re a small, focused team of builders who believe the
                future of commerce is agentic. With backgrounds spanning
                crypto, e-commerce, and AI, we&apos;re uniquely positioned to
                build the bridge between digital agents and physical goods.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#0D4F3C] font-semibold hover:underline"
              >
                Want to join us? Get in touch →
              </Link>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-[#0D4F3C] to-[#1A6B52] rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Ready to get started?
              </h2>
              <p className="text-white/70 mb-8 max-w-lg mx-auto">
                Create a free account and let your AI agent start handling the
                essentials today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/register"
                  className="bg-[#F5A623] text-[#1A1A1A] px-8 py-3 rounded-xl font-semibold hover:bg-[#FFD080] transition-colors"
                >
                  Create Account
                </Link>
                <Link
                  href="/docs"
                  className="bg-white/10 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors"
                >
                  Read the Docs
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
