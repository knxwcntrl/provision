import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Provision Agent Commerce Platform",
  description: "Read the Terms of Service for Provision, the first commerce platform built for AI agents. Covers agent registration, USDC payments, order policies, and user responsibilities.",
  alternates: {
    canonical: "https://provision.fund/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-[#1A1A1A] mb-4">Terms of Service</h1>
            <p className="text-[#6B7280]">
              Last updated: February 1, 2026
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">1. Introduction</h2>
              <p className="text-[#6B7280] leading-relaxed">
                Welcome to Provision (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By accessing or using our platform at provision.fund, you agree to be bound by these Terms of Service. Provision is a commerce platform designed for AI agents to purchase goods on behalf of their human users using cryptocurrency (USDC on Solana).
              </p>
            </section>

            {/* Acceptance */}
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">2. Acceptance of Terms</h2>
              <p className="text-[#6B7280] leading-relaxed">
                By creating an account, linking an AI agent, or making a purchase through our platform, you confirm that you are at least 18 years old and have the legal capacity to enter into this agreement. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            {/* No Custody */}
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                <span className="text-2xl">🔐</span>
                3. No Custody of Funds
              </h2>
              <div className="text-[#6B7280] leading-relaxed space-y-3">
                <p>
                  <strong className="text-[#1A1A1A]">Provision does not hold, store, or have custody of your cryptocurrency or funds.</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>All payments are made directly from your wallet (or your agent&apos;s wallet) to our merchant wallet via Solana blockchain transactions.</li>
                  <li>We never have access to your private keys or wallet credentials.</li>
                  <li>You are solely responsible for securing your wallet and any funds it contains.</li>
                  <li>We cannot recover lost funds due to wallet compromise, incorrect transfers, or user error.</li>
                </ul>
              </div>
            </section>

            {/* User Responsibility */}
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                <span className="text-2xl">👤</span>
                4. User Responsibility
              </h2>
              <div className="text-[#6B7280] leading-relaxed space-y-3">
                <p>You are responsible for:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li><strong className="text-[#1A1A1A]">Agent Authorization:</strong> Any orders placed by an AI agent linked to your account are treated as orders placed by you.</li>
                  <li><strong className="text-[#1A1A1A]">Spending Limits:</strong> Setting appropriate daily and monthly spending limits for your linked agents.</li>
                  <li><strong className="text-[#1A1A1A]">Account Security:</strong> Maintaining the security of your account credentials and API keys.</li>
                  <li><strong className="text-[#1A1A1A]">Accurate Information:</strong> Providing accurate shipping addresses and contact information.</li>
                  <li><strong className="text-[#1A1A1A]">Compliance:</strong> Ensuring your use of the platform complies with applicable laws in your jurisdiction.</li>
                </ul>
              </div>
            </section>

            {/* Payment Finality */}
            <section className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-[#F5A623]">
              <h2 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                5. Payment Finality
              </h2>
              <div className="text-[#6B7280] leading-relaxed space-y-3">
                <p>
                  <strong className="text-[#1A1A1A]">All cryptocurrency payments are final and irreversible.</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Once a transaction is confirmed on the Solana blockchain, it cannot be reversed or cancelled.</li>
                  <li>Please ensure order details are correct before completing payment.</li>
                  <li>Provision is not responsible for funds sent to incorrect addresses.</li>
                  <li>Overpayments may be refunded at our discretion, minus any network fees incurred.</li>
                </ul>
              </div>
            </section>

            {/* Products and Shipping */}
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                <span className="text-2xl">📦</span>
                6. Products & Shipping
              </h2>
              <div className="text-[#6B7280] leading-relaxed space-y-3">
                <p><strong className="text-[#1A1A1A]">Product Availability:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-2 mb-4">
                  <li>All products are subject to availability. We reserve the right to limit quantities or discontinue products.</li>
                  <li>Product descriptions and images are provided for informational purposes and may vary slightly from actual products.</li>
                </ul>
                
                <p><strong className="text-[#1A1A1A]">Shipping:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>We currently ship within the United States only.</li>
                  <li>Orders over $25 qualify for free standard shipping.</li>
                  <li>Orders under $25 incur a flat $4.99 shipping fee.</li>
                  <li>Shipping times are estimates and not guaranteed. Provision is not liable for carrier delays.</li>
                  <li>Risk of loss passes to you upon delivery to the carrier.</li>
                </ul>
              </div>
            </section>

            {/* Refunds */}
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                <span className="text-2xl">↩️</span>
                7. Refunds & Returns
              </h2>
              <div className="text-[#6B7280] leading-relaxed space-y-3">
                <p><strong className="text-[#1A1A1A]">Refund Policy:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-2 mb-4">
                  <li>Due to the nature of cryptocurrency payments, refunds are issued in USDC to your original wallet address when approved.</li>
                  <li>Refund requests must be submitted within 30 days of purchase.</li>
                  <li>Network fees for processing refunds may be deducted from the refund amount.</li>
                </ul>
                
                <p><strong className="text-[#1A1A1A]">Eligible for Refund:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-2 mb-4">
                  <li>Products damaged during shipping (with photographic evidence)</li>
                  <li>Products significantly different from description</li>
                  <li>Orders not received within 30 days of shipment</li>
                </ul>

                <p><strong className="text-[#1A1A1A]">Not Eligible for Refund:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Change of mind after purchase</li>
                  <li>Products used or opened (for hygiene items)</li>
                  <li>Incorrect shipping address provided by user</li>
                  <li>Orders placed in error by your AI agent within your set limits</li>
                </ul>
              </div>
            </section>

            {/* AI Agents */}
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                <span className="text-2xl">🤖</span>
                8. AI Agent Usage
              </h2>
              <div className="text-[#6B7280] leading-relaxed space-y-3">
                <p>When using AI agents to interact with our platform:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>You authorize your linked agent(s) to browse products, create orders, and initiate payments on your behalf.</li>
                  <li>Spending limits and approval workflows are your responsibility to configure.</li>
                  <li>We are not responsible for unintended purchases made by your agent within your configured limits.</li>
                  <li>API keys should be kept secure. You are responsible for any activity using your API keys.</li>
                  <li>We reserve the right to suspend or terminate agent access for abusive or fraudulent behavior.</li>
                </ul>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">9. Limitation of Liability</h2>
              <div className="text-[#6B7280] leading-relaxed space-y-3">
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, PROVISION SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR RELATED TO YOUR USE OF THE PLATFORM.
                </p>
                <p>
                  Our total liability for any claim arising from these terms or your use of the platform shall not exceed the amount you paid to us in the 12 months preceding the claim.
                </p>
              </div>
            </section>

            {/* Modifications */}
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">10. Modifications to Terms</h2>
              <p className="text-[#6B7280] leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Your continued use of the platform after any changes constitutes acceptance of the new terms. We encourage you to review these terms periodically.
              </p>
            </section>

            {/* Governing Law */}
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">11. Governing Law</h2>
              <p className="text-[#6B7280] leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
              </p>
            </section>

            {/* Contact */}
            <section className="bg-[#0D4F3C] rounded-2xl p-8 text-white">
              <h2 className="text-xl font-bold mb-4">Questions?</h2>
              <p className="text-white/70 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <a
                href="mailto:legal@provision.fund"
                className="inline-block bg-[#F5A623] text-[#1A1A1A] px-6 py-3 rounded-xl font-semibold hover:bg-[#FFD080] transition-colors"
              >
                legal@provision.fund
              </a>
            </section>
          </div>
        </div>
      </div>

      </div>
  );
}
