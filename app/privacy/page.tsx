import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — How Provision Protects Your Data",
  description: "Learn how Provision collects, uses, and protects your personal data. We prioritize privacy with non-custodial wallet design and minimal data collection for our AI agent commerce platform.",
  alternates: {
    canonical: "https://provision.fund/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-[#1A1A1A] mb-4">Privacy Policy</h1>
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
                At Provision (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform at provision.fund. Please read this policy carefully to understand our practices regarding your personal data.
              </p>
            </section>

            {/* Data We Collect */}
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                <span className="text-2xl">📊</span>
                2. Information We Collect
              </h2>
              <div className="text-[#6B7280] leading-relaxed space-y-4">
                <div>
                  <p className="font-semibold text-[#1A1A1A] mb-2">Account Information</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Email address</li>
                    <li>Name (optional)</li>
                    <li>Shipping addresses you provide</li>
                    <li>Phone number (for delivery notifications)</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-[#1A1A1A] mb-2">Wallet & Transaction Data</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Public wallet addresses (for payment verification)</li>
                    <li>Transaction signatures and amounts</li>
                    <li>Order history and purchase details</li>
                  </ul>
                  <p className="text-sm mt-2 italic">Note: We never have access to your private keys or seed phrases.</p>
                </div>

                <div>
                  <p className="font-semibold text-[#1A1A1A] mb-2">Agent Data</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Agent API keys and identifiers</li>
                    <li>Agent activity logs (orders, queries)</li>
                    <li>Spending limits and configurations</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-[#1A1A1A] mb-2">Technical Data</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Device information</li>
                    <li>Usage patterns and interactions with our platform</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Data */}
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                <span className="text-2xl">⚙️</span>
                3. How We Use Your Information
              </h2>
              <div className="text-[#6B7280] leading-relaxed space-y-3">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li><strong className="text-[#1A1A1A]">Process Orders:</strong> Fulfill purchases, process payments, and arrange shipping</li>
                  <li><strong className="text-[#1A1A1A]">Provide Services:</strong> Enable AI agents to interact with our platform on your behalf</li>
                  <li><strong className="text-[#1A1A1A]">Communicate:</strong> Send order confirmations, shipping updates, and important service announcements</li>
                  <li><strong className="text-[#1A1A1A]">Improve Our Platform:</strong> Analyze usage to enhance features and user experience</li>
                  <li><strong className="text-[#1A1A1A]">Security:</strong> Detect and prevent fraud, abuse, and unauthorized access</li>
                  <li><strong className="text-[#1A1A1A]">Legal Compliance:</strong> Meet regulatory requirements and respond to legal requests</li>
                </ul>
              </div>
            </section>

            {/* No Selling Data */}
            <section className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-[#0D4F3C]">
              <h2 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                <span className="text-2xl">🚫</span>
                4. We Do NOT Sell Your Data
              </h2>
              <div className="text-[#6B7280] leading-relaxed space-y-3">
                <p className="text-lg font-semibold text-[#0D4F3C]">
                  We do not sell, rent, or trade your personal information to third parties. Period.
                </p>
                <p>
                  Your data is used solely to provide and improve our services. We will never monetize your personal information by selling it to advertisers, data brokers, or other third parties.
                </p>
              </div>
            </section>

            {/* Data Sharing */}
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                <span className="text-2xl">🤝</span>
                5. When We Share Information
              </h2>
              <div className="text-[#6B7280] leading-relaxed space-y-3">
                <p>We may share your information only in these limited circumstances:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li><strong className="text-[#1A1A1A]">Shipping Partners:</strong> We share shipping addresses with carriers (USPS, UPS, FedEx) to deliver your orders</li>
                  <li><strong className="text-[#1A1A1A]">Payment Verification:</strong> Transaction data is publicly visible on the Solana blockchain by nature of the technology</li>
                  <li><strong className="text-[#1A1A1A]">Service Providers:</strong> Trusted third parties who help us operate (hosting, analytics) under strict confidentiality agreements</li>
                  <li><strong className="text-[#1A1A1A]">Legal Requirements:</strong> When required by law, subpoena, or to protect our rights and safety</li>
                  <li><strong className="text-[#1A1A1A]">Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets (you would be notified)</li>
                </ul>
              </div>
            </section>

            {/* Cookies */}
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                <span className="text-2xl">🍪</span>
                6. Cookies & Tracking
              </h2>
              <div className="text-[#6B7280] leading-relaxed space-y-4">
                <p>We use cookies and similar technologies to:</p>
                
                <div className="bg-[#FFF8E7] rounded-xl p-4">
                  <p className="font-semibold text-[#1A1A1A] mb-2">Essential Cookies</p>
                  <p className="text-sm">Required for the platform to function. These keep you logged in and remember your preferences.</p>
                </div>

                <div className="bg-[#FFF8E7] rounded-xl p-4">
                  <p className="font-semibold text-[#1A1A1A] mb-2">Analytics Cookies</p>
                  <p className="text-sm">Help us understand how visitors use our site so we can improve it. We use privacy-respecting analytics that don&apos;t track you across sites.</p>
                </div>

                <p>
                  You can control cookies through your browser settings. Note that disabling essential cookies may affect platform functionality.
                </p>
                
                <p className="text-sm italic">
                  We do not use advertising cookies or participate in cross-site tracking networks.
                </p>
              </div>
            </section>

            {/* Data Security */}
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                <span className="text-2xl">🔒</span>
                7. Data Security
              </h2>
              <div className="text-[#6B7280] leading-relaxed space-y-3">
                <p>We implement industry-standard security measures to protect your data:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>All data transmitted via HTTPS/TLS encryption</li>
                  <li>Secure, encrypted database storage</li>
                  <li>Regular security audits and monitoring</li>
                  <li>Limited employee access on a need-to-know basis</li>
                  <li>API keys are hashed and never stored in plain text</li>
                </ul>
                <p className="mt-3">
                  While we strive to protect your information, no method of transmission or storage is 100% secure. We cannot guarantee absolute security but will notify you of any breaches as required by law.
                </p>
              </div>
            </section>

            {/* Data Retention */}
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                <span className="text-2xl">📁</span>
                8. Data Retention
              </h2>
              <div className="text-[#6B7280] leading-relaxed space-y-3">
                <p>We retain your information for as long as necessary to:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Provide our services and maintain your account</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Resolve disputes and enforce our agreements</li>
                </ul>
                <p className="mt-3">
                  Order and transaction records are kept for 7 years for tax and legal compliance. You can request deletion of your account and associated data at any time (see Your Rights below).
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-[#F5A623]">
              <h2 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                <span className="text-2xl">✋</span>
                9. Your Rights
              </h2>
              <div className="text-[#6B7280] leading-relaxed space-y-3">
                <p>Depending on your location, you may have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li><strong className="text-[#1A1A1A]">Access:</strong> Request a copy of the personal data we hold about you</li>
                  <li><strong className="text-[#1A1A1A]">Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong className="text-[#1A1A1A]">Deletion:</strong> Request deletion of your data (with some exceptions for legal compliance)</li>
                  <li><strong className="text-[#1A1A1A]">Portability:</strong> Receive your data in a structured, machine-readable format</li>
                  <li><strong className="text-[#1A1A1A]">Opt-Out:</strong> Unsubscribe from marketing communications</li>
                </ul>
                <p className="mt-3">
                  To exercise these rights, contact us at <a href="mailto:privacy@provision.fund" className="text-[#0D4F3C] hover:underline">privacy@provision.fund</a>. We will respond within 30 days.
                </p>
              </div>
            </section>

            {/* International */}
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">10. International Users</h2>
              <p className="text-[#6B7280] leading-relaxed">
                Our services are primarily operated from the United States. If you are accessing our platform from outside the US, please be aware that your information may be transferred to, stored, and processed in the United States where our servers are located. By using our services, you consent to this transfer.
              </p>
            </section>

            {/* Children */}
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">11. Children&apos;s Privacy</h2>
              <p className="text-[#6B7280] leading-relaxed">
                Our platform is not intended for users under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child, we will take steps to delete that information promptly.
              </p>
            </section>

            {/* Changes */}
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">12. Changes to This Policy</h2>
              <p className="text-[#6B7280] leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this policy periodically for any changes.
              </p>
            </section>

            {/* Contact */}
            <section className="bg-[#0D4F3C] rounded-2xl p-8 text-white">
              <h2 className="text-xl font-bold mb-4">Privacy Questions?</h2>
              <p className="text-white/70 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 mb-6">
                <a
                  href="mailto:privacy@provision.fund"
                  className="block text-[#F5A623] hover:underline"
                >
                  privacy@provision.fund
                </a>
              </div>
              <p className="text-white/50 text-sm">
                Provision<br />
                Attn: Privacy<br />
                United States
              </p>
            </section>
          </div>
        </div>
      </div>

      </div>
  );
}
