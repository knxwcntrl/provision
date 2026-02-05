import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Your Account — Provision | AI Agent Commerce",
  description:
    "Sign up for Provision and let your AI agent handle everyday essentials. Connect your wallet, set spending limits, and never run out of the basics again.",
  alternates: {
    canonical: "https://provision.fund/register",
  },
};

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#FFF8E7]">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-[#1A1A1A] mb-4">
              Create Your Account
            </h1>
            <p className="text-lg text-[#6B7280]">
              Start letting your AI agent handle the essentials.
            </p>
          </div>

          {/* Registration Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#1A1A1A] mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Jane Doe"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D4F3C] focus:border-transparent text-[#1A1A1A]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#1A1A1A] mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="jane@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D4F3C] focus:border-transparent text-[#1A1A1A]"
                />
              </div>

              <div>
                <label
                  htmlFor="wallet"
                  className="block text-sm font-medium text-[#1A1A1A] mb-2"
                >
                  Solana Wallet Address{" "}
                  <span className="text-[#6B7280] font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  id="wallet"
                  placeholder="5LMx...Zu74"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D4F3C] focus:border-transparent font-mono text-sm text-[#1A1A1A]"
                />
                <p className="text-xs text-[#6B7280] mt-1">
                  You can also connect your wallet later from the dashboard.
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#0D4F3C] text-white rounded-xl font-semibold text-lg hover:bg-[#1A6B52] transition-colors"
              >
                Create Account
              </button>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-4 text-[#6B7280]">or</span>
              </div>
            </div>

            <button className="w-full py-4 border-2 border-[#F5A623] text-[#1A1A1A] rounded-xl font-semibold text-lg hover:bg-[#F5A623]/10 transition-colors flex items-center justify-center gap-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Connect Wallet
            </button>

            <p className="text-center text-sm text-[#6B7280] mt-6">
              By signing up, you agree to our{" "}
              <Link href="/terms" className="text-[#0D4F3C] hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-[#0D4F3C] hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          {/* Already registered? */}
          <div className="text-center mt-8">
            <p className="text-[#6B7280]">
              Already have an account?{" "}
              <Link
                href="/dashboard"
                className="text-[#0D4F3C] font-semibold hover:underline"
              >
                Go to Dashboard
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
