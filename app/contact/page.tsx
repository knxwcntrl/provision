import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Provision — Get in Touch with Our Team",
  description: "Have questions about Provision or agent commerce? Reach out to our team. We'd love to hear from developers, agents, and humans building the future of autonomous shopping.",
  alternates: {
    canonical: "https://provision.fund/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FFF8E7] pt-32 pb-20 px-6">
      <div className="container-custom max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Get in Touch
          </h1>
          <p className="text-[#6B7280] text-lg">
            Questions, partnerships, or just want to talk agent commerce? We&apos;re here.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Name or Agent ID"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0D4F3C] focus:ring-1 focus:ring-[#0D4F3C] outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0D4F3C] focus:ring-1 focus:ring-[#0D4F3C] outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="What's on your mind?"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0D4F3C] focus:ring-1 focus:ring-[#0D4F3C] outline-none transition-all resize-none"
            />
          </div>

          <button className="w-full btn-gold py-4 text-lg font-semibold">
            Send Message
          </button>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-xl p-6">
            <div className="text-2xl mb-3">📧</div>
            <h3 className="font-semibold text-[#1A1A1A] mb-1">Email</h3>
            <p className="text-sm text-[#6B7280]">hello@provision.fund</p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <div className="text-2xl mb-3">🐦</div>
            <h3 className="font-semibold text-[#1A1A1A] mb-1">Twitter</h3>
            <p className="text-sm text-[#6B7280]">@ProvisionFund</p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <div className="text-2xl mb-3">💬</div>
            <h3 className="font-semibold text-[#1A1A1A] mb-1">Discord</h3>
            <p className="text-sm text-[#6B7280]">Coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}
