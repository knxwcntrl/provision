"use client";

import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import Link from "next/link";
import { useState } from "react";

export default function AgentRegistrationPage() {
  const [step, setStep] = useState<"register" | "success">("register");
  const [agentName, setAgentName] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const registerAgent = useMutation(api.agents.register);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Validate Solana address (basic check)
      if (!walletAddress.match(/^[1-9A-HJ-NP-Za-km-z]{32,44}$/)) {
        throw new Error("Invalid Solana wallet address");
      }

      const result = await registerAgent({
        name: agentName,
        publicKey: walletAddress,
      });

      setApiKey(result.apiKey);
      setStep("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  const copyApiKey = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#FFF8E7]">
      
      {/* Content */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-xl mx-auto">
          {step === "register" ? (
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-[#0D4F3C]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🤖</span>
                </div>
                <h1 className="text-3xl font-bold text-[#1A1A1A] mb-2">
                  Agent Registration
                </h1>
                <p className="text-[#6B7280]">
                  Register your AI agent to start shopping on Provision
                </p>
              </div>

              {/* Registration Form */}
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm">
                    {error}
                  </div>
                )}

                <div className="mb-6">
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Agent Name
                  </label>
                  <input
                    type="text"
                    value={agentName}
                    onChange={(e) => setAgentName(e.target.value)}
                    placeholder="e.g., Seven, Scout, Claude"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0D4F3C] focus:outline-none transition-colors"
                    required
                  />
                  <p className="text-xs text-[#6B7280] mt-1">
                    This is how your agent will be identified in orders
                  </p>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Solana Wallet Address
                  </label>
                  <input
                    type="text"
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    placeholder="Your agent's Solana wallet address"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0D4F3C] focus:outline-none transition-colors font-mono text-sm"
                    required
                  />
                  <p className="text-xs text-[#6B7280] mt-1">
                    This wallet will be used for USDC payments
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all ${
                    isLoading
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-[#0D4F3C] text-white hover:bg-[#1A6B52]"
                  }`}
                >
                  {isLoading ? "Registering..." : "Register Agent"}
                </button>
              </form>

              {/* Info Cards */}
              <div className="mt-8 grid gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="font-semibold text-[#1A1A1A] mb-2">📋 What happens next?</h3>
                  <ul className="text-sm text-[#6B7280] space-y-1">
                    <li>• You&apos;ll receive an API key for your agent</li>
                    <li>• Link your agent to a human account for shipping</li>
                    <li>• Start browsing and ordering products</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="font-semibold text-[#1A1A1A] mb-2">🔒 Security</h3>
                  <ul className="text-sm text-[#6B7280] space-y-1">
                    <li>• Default spending limit: $50/day</li>
                    <li>• Your human can adjust limits anytime</li>
                    <li>• All transactions are on-chain verifiable</li>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Success State */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">✅</span>
                </div>
                <h1 className="text-3xl font-bold text-[#1A1A1A] mb-2">
                  Agent Registered!
                </h1>
                <p className="text-[#6B7280]">
                  Welcome to Provision, {agentName}
                </p>
              </div>

              {/* API Key Display */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
                <div className="mb-6">
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">
                    Your API Key
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={apiKey}
                      readOnly
                      className="w-full px-4 py-3 pr-24 bg-gray-50 border-2 border-gray-200 rounded-xl font-mono text-sm"
                    />
                    <button
                      onClick={copyApiKey}
                      className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-[#0D4F3C] text-white text-sm rounded-lg hover:bg-[#1A6B52] transition-colors"
                    >
                      {copied ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>

                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">⚠️</span>
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-1">Save this key!</h4>
                      <p className="text-sm text-yellow-700">
                        This API key will only be shown once. Store it securely — 
                        you&apos;ll need it to authenticate API requests.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">Next Steps</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#0D4F3C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-[#0D4F3C] font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1A1A1A]">Link to a Human</h3>
                      <p className="text-sm text-[#6B7280]">
                        Have your human create an account and add a shipping address
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#0D4F3C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-[#0D4F3C] font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1A1A1A]">Read the API Docs</h3>
                      <p className="text-sm text-[#6B7280]">
                        Learn how to browse products and create orders
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#0D4F3C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-[#0D4F3C] font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1A1A1A]">Start Shopping!</h3>
                      <p className="text-sm text-[#6B7280]">
                        Browse products and place your first order
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link
                    href="/docs"
                    className="flex-1 py-3 bg-[#0D4F3C] text-white text-center rounded-xl font-semibold hover:bg-[#1A6B52] transition-colors"
                  >
                    View API Docs
                  </Link>
                  <Link
                    href="/products"
                    className="flex-1 py-3 border-2 border-[#0D4F3C] text-[#0D4F3C] text-center rounded-xl font-semibold hover:bg-[#0D4F3C] hover:text-white transition-colors"
                  >
                    Browse Products
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

          </main>
  );
}
