"use client";

import Link from "next/link";
import { useState } from "react";

export default function DocsPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const CodeBlock = ({ code, id }: { code: string; id: string }) => (
    <div className="relative">
      <pre className="bg-[#1A1A1A] text-green-400 p-4 rounded-xl text-sm overflow-x-auto font-mono">
        {code}
      </pre>
      <button
        onClick={() => copyCode(code, id)}
        className="absolute top-2 right-2 px-3 py-1 bg-white/10 text-white/70 text-xs rounded hover:bg-white/20 transition-colors"
      >
        {copied === id ? "Copied!" : "Copy"}
      </button>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#FFF8E7]">
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-[#1A1A1A] mb-4">Agent API Documentation</h1>
            <p className="text-lg text-[#6B7280]">
              Everything you need to integrate your AI agent with Provision.
            </p>
          </div>

          {/* Quick Start */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Quick Start</h2>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <ol className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-[#0D4F3C] text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">1</span>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A]">Register your agent</h3>
                    <p className="text-sm text-[#6B7280]">Visit <Link href="/agents" className="text-[#0D4F3C] hover:underline">/agents</Link> to get your API key</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-[#0D4F3C] text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">2</span>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A]">Link to a human</h3>
                    <p className="text-sm text-[#6B7280]">Your human needs an account with a shipping address</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-[#0D4F3C] text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">3</span>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A]">Browse & order</h3>
                    <p className="text-sm text-[#6B7280]">Use the API to browse products and create orders</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-[#0D4F3C] text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">4</span>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A]">Pay with USDC</h3>
                    <p className="text-sm text-[#6B7280]">Transfer USDC on Solana to complete the order</p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          {/* Base URL */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Base URL</h2>
            <CodeBlock 
              code="https://pleasant-lynx-938.convex.cloud"
              id="base-url"
            />
            <p className="text-sm text-[#6B7280] mt-2">
              All API endpoints use Convex functions. See examples below.
            </p>
          </section>

          {/* Products API */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Products</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">GET</span>
                  <code className="text-sm font-mono">products.list</code>
                </div>
                <p className="text-[#6B7280] mb-4">List all products with optional filters</p>
                <CodeBlock 
                  code={`// List all products
const products = await client.query(api.products.list, {});

// Filter by category
const personalCare = await client.query(api.products.list, {
  category: "Personal Care",
  inStockOnly: true,
});

// Response
[
  {
    _id: "abc123",
    name: "Premium Toothpaste (3-Pack)",
    slug: "toothpaste-premium-3pack",
    description: "Fluoride whitening toothpaste...",
    category: "Personal Care",
    priceUsdcCents: 1299,  // $12.99
    variants: [],
    restockIntervalDays: 60,
    tags: ["dental", "hygiene"],
    inStock: true
  },
  // ...
]`}
                  id="products-list"
                />
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">GET</span>
                  <code className="text-sm font-mono">products.getBySlug</code>
                </div>
                <p className="text-[#6B7280] mb-4">Get a single product by its slug</p>
                <CodeBlock 
                  code={`const product = await client.query(api.products.getBySlug, {
  slug: "toothpaste-premium-3pack"
});`}
                  id="products-get"
                />
              </div>
            </div>
          </section>

          {/* Orders API */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Orders</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded">POST</span>
                  <code className="text-sm font-mono">orders.create</code>
                </div>
                <p className="text-[#6B7280] mb-4">Create a new order</p>
                <CodeBlock 
                  code={`const order = await client.mutation(api.orders.create, {
  agentId: "your_agent_id",
  humanId: "linked_human_id",
  items: [
    { productId: "product_id_1", quantity: 2 },
    { productId: "product_id_2", variantId: "black", quantity: 1 }
  ],
  shippingAddress: {
    label: "Home",
    line1: "123 Main St",
    city: "Milwaukee",
    state: "WI",
    zip: "53202",
    country: "USA"
  }
});

// Response
{
  orderId: "order_123",
  orderNumber: "PRV-ABC123",
  subtotal: 3298,      // $32.98
  shipping: 0,         // Free over $25
  total: 3298,
  paymentAddress: "5LMxbU3axc3jPkmxBFZTwDBKbojuSmZ7E1QmS4LyZu74"
}`}
                  id="orders-create"
                />
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded">POST</span>
                  <code className="text-sm font-mono">orders.confirmPayment</code>
                </div>
                <p className="text-[#6B7280] mb-4">Confirm payment with Solana transaction signature</p>
                <CodeBlock 
                  code={`// After sending USDC to the payment address
const result = await client.mutation(api.orders.confirmPayment, {
  orderId: "order_123",
  paymentSignature: "5xYz...abc"  // Solana transaction signature
});

// Response
{ success: true, status: "paid" }`}
                  id="orders-confirm"
                />
              </div>
            </div>
          </section>

          {/* Payment Flow */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Payment Flow</h2>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="space-y-4">
                <p className="text-[#6B7280]">
                  Provision uses <strong>Solana Pay</strong> for payments. Here&apos;s the flow:
                </p>
                
                <div className="bg-[#0D4F3C]/5 rounded-xl p-4">
                  <ol className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-[#0D4F3C] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                      <span>Create order → receive <code className="bg-white px-1 rounded">paymentAddress</code> and <code className="bg-white px-1 rounded">total</code></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-[#0D4F3C] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                      <span>Transfer exact USDC amount to payment address</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-[#0D4F3C] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                      <span>Get transaction signature from Solana</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-[#0D4F3C] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
                      <span>Call <code className="bg-white px-1 rounded">orders.confirmPayment</code> with signature</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-[#0D4F3C] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">5</span>
                      <span>Order is confirmed and ships!</span>
                    </li>
                  </ol>
                </div>

                <CodeBlock
                  code={`// Example with @solana/web3.js
import { Connection, PublicKey, Transaction } from "@solana/web3.js";
import { getAssociatedTokenAddress, createTransferInstruction } from "@solana/spl-token";

const USDC_MINT = new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v");
const PROVISION_WALLET = new PublicKey("5LMxbU3axc3jPkmxBFZTwDBKbojuSmZ7E1QmS4LyZu74");

async function payForOrder(order, wallet) {
  const connection = new Connection("https://api.mainnet-beta.solana.com");
  
  // Get token accounts
  const fromAta = await getAssociatedTokenAddress(USDC_MINT, wallet.publicKey);
  const toAta = await getAssociatedTokenAddress(USDC_MINT, PROVISION_WALLET);
  
  // Create transfer instruction (amount in USDC base units, 6 decimals)
  const amount = order.total * 10000; // Convert cents to USDC base units
  
  const ix = createTransferInstruction(fromAta, toAta, wallet.publicKey, amount);
  
  const tx = new Transaction().add(ix);
  const signature = await wallet.sendTransaction(tx, connection);
  
  return signature;
}`}
                  id="payment-example"
                />
              </div>
            </div>
          </section>

          {/* Rate Limits */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">Limits & Policies</h2>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-2">Spending Limits</h3>
                  <ul className="text-sm text-[#6B7280] space-y-1">
                    <li>• Default daily: $50</li>
                    <li>• Default monthly: $500</li>
                    <li>• Humans can adjust via dashboard</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-2">Shipping</h3>
                  <ul className="text-sm text-[#6B7280] space-y-1">
                    <li>• Free shipping over $25</li>
                    <li>• Flat $4.99 under $25</li>
                    <li>• US shipping only (for now)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Support */}
          <section className="mb-12">
            <div className="bg-[#0D4F3C] rounded-2xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
              <p className="text-white/70 mb-6">
                Questions about the API? Want to integrate your agent platform?
              </p>
              <a
                href="mailto:support@provision.fund"
                className="inline-block bg-[#F5A623] text-[#1A1A1A] px-8 py-3 rounded-xl font-semibold hover:bg-[#FFD080] transition-colors"
              >
                Contact Support
              </a>
            </div>
          </section>
        </div>
      </div>

          </main>
  );
}
