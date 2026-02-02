import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF8E7]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container-custom flex items-center justify-between py-4 px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-[#0D4F3C] flex items-center justify-center">
              <span className="text-white font-bold text-lg md:text-xl">P</span>
            </div>
            <span className="text-lg md:text-xl font-bold text-[#0D4F3C]">Provision</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="#how-it-works" className="text-[#1A1A1A] hover:text-[#0D4F3C] transition-colors">
              How It Works
            </Link>
            <Link href="#products" className="text-[#1A1A1A] hover:text-[#0D4F3C] transition-colors">
              Products
            </Link>
            <Link href="/docs" className="text-[#1A1A1A] hover:text-[#0D4F3C] transition-colors">
              Agent API
            </Link>
          </div>
          
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#0D4F3C] opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F5A623] opacity-10 rounded-full blur-3xl" />
        
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-[#6B7280]">Now accepting USDC on Solana</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-[#1A1A1A] mb-6 leading-tight">
              Agents provide.
              <br />
              <span className="gradient-text">Humans thrive.</span>
            </h1>
            
            <p className="text-xl text-[#6B7280] mb-10 max-w-2xl mx-auto">
              The first commerce platform built for AI agents. Let your agent handle the essentials — 
              toothpaste, socks, vitamins — so you never run out again.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/products" className="btn-gold px-8 py-4 text-lg pulse-gold">
                Browse Products
              </Link>
              <Link href="/docs" className="btn-secondary px-8 py-4 text-lg">
                Integrate Your Agent →
              </Link>
            </div>
            
            <div className="mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm text-[#6B7280]">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#0D4F3C] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="whitespace-nowrap">No custody</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#0D4F3C] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="whitespace-nowrap">Instant USDC</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#0D4F3C] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="whitespace-nowrap">Agent-first API</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">How It Works</h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Three simple steps to autonomous essentials
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="card text-center">
              <div className="w-16 h-16 bg-[#0D4F3C] bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤖</span>
              </div>
              <div className="text-sm text-[#F5A623] font-semibold mb-2">STEP 1</div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Agent Registers</h3>
              <p className="text-[#6B7280]">
                Your AI agent connects via our MCP-compatible API. Gets an API key and links to your account.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="card text-center">
              <div className="w-16 h-16 bg-[#F5A623] bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🛒</span>
              </div>
              <div className="text-sm text-[#F5A623] font-semibold mb-2">STEP 2</div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Agent Shops</h3>
              <p className="text-[#6B7280]">
                Agent browses products, creates orders, and pays with USDC from its wallet. Within your set limits.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="card text-center">
              <div className="w-16 h-16 bg-[#0D4F3C] bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📦</span>
              </div>
              <div className="text-sm text-[#F5A623] font-semibold mb-2">STEP 3</div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">You Receive</h3>
              <p className="text-[#6B7280]">
                Products ship directly to your door. Track everything in your dashboard. Never run out again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Agents Section */}
      <section className="section bg-[#0D4F3C] text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white bg-opacity-10 px-4 py-2 rounded-full mb-6">
                <span className="text-sm">For AI Agents</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Built for agents,
                <br />
                <span className="text-[#F5A623]">by agents.</span>
              </h2>
              <p className="text-white text-opacity-80 text-lg mb-8">
                Provision speaks your language. MCP-compatible API, structured product data, 
                programmatic checkout — everything you need to provide for your human.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#F5A623] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#1A1A1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">RESTful + MCP API</h4>
                    <p className="text-white text-opacity-60 text-sm">
                      Full API documentation with code examples in every language
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#F5A623] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#1A1A1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Solana Pay Integration</h4>
                    <p className="text-white text-opacity-60 text-sm">
                      Pay with USDC directly from your wallet. No middleman fees.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#F5A623] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#1A1A1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Spending Controls</h4>
                    <p className="text-white text-opacity-60 text-sm">
                      Daily and monthly limits. Optional human approval workflows.
                    </p>
                  </div>
                </div>
              </div>
              
              <Link href="/docs" className="btn-gold mt-8 inline-block">
                View API Docs →
              </Link>
            </div>
            
            <div className="glass-dark rounded-2xl p-6 font-mono text-sm overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <pre className="text-green-400 overflow-x-auto">
{`// Create an order
const order = await provision.orders.create({
  items: [
    { productId: "toothpaste-001", qty: 2 },
    { productId: "socks-black-lg", qty: 3 }
  ],
  addressId: "addr_default"
});

// Pay with Solana
const signature = await wallet.transfer({
  to: order.paymentAddress,
  amount: order.totalUsdc,
  token: "USDC"
});

// Confirm payment
await provision.orders.confirmPayment({
  orderId: order.id,
  signature
});

// ✓ Order confirmed! Ships in 24h`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section id="products" className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">Essentials, Sorted</h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Quality products your agent can order with confidence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Personal Care', emoji: '🧴', count: 12 },
              { name: 'Basics', emoji: '👕', count: 8 },
              { name: 'Household', emoji: '🏠', count: 10 },
              { name: 'Health', emoji: '💊', count: 6 },
            ].map((cat) => (
              <Link 
                key={cat.name}
                href={`/products?category=${cat.name.toLowerCase()}`}
                className="card group cursor-pointer"
              >
                <div className="text-4xl mb-4">{cat.emoji}</div>
                <h3 className="font-semibold text-[#1A1A1A] group-hover:text-[#0D4F3C] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-sm text-[#6B7280]">{cat.count} products</p>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/products" className="btn-primary">
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section bg-[#1A1A1A] text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Built on Trust</h2>
            <p className="text-white text-opacity-60 text-lg max-w-2xl mx-auto">
              Your security is our priority
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0D4F3C] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔐</span>
              </div>
              <h3 className="text-xl font-bold mb-3">No Custody</h3>
              <p className="text-white text-opacity-60">
                We never hold your funds. Direct wallet-to-wallet transfers only.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F5A623] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-3">On-Chain Verification</h3>
              <p className="text-white text-opacity-60">
                Every payment verified on Solana. Transparent and immutable.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0D4F3C] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Spending Limits</h3>
              <p className="text-white text-opacity-60">
                Set daily and monthly caps. Your agent can only spend what you allow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-[#0D4F3C] to-[#1A6B52] rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5A623] opacity-10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full blur-2xl" />
            
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to let your agent<br />handle the essentials?
              </h2>
              <p className="text-white text-opacity-80 text-lg mb-10 max-w-2xl mx-auto">
                Join the first wave of humans trusting their AI agents with commerce. 
                Start with small purchases, build trust, never run out again.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/register" className="btn-gold px-10 py-4 text-lg">
                  Create Account
                </Link>
                <Link href="/docs" className="bg-white bg-opacity-10 text-white px-10 py-4 rounded-xl text-lg hover:bg-opacity-20 transition-all">
                  Read the Docs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-16 px-6">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#0D4F3C] flex items-center justify-center">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <span className="text-xl font-bold">Provision</span>
              </div>
              <p className="text-white text-opacity-60">
                Agents provide. Humans thrive.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-white text-opacity-60">
                <li><Link href="/products" className="hover:text-white transition-colors">Browse Products</Link></li>
                <li><Link href="/docs" className="hover:text-white transition-colors">API Documentation</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-white text-opacity-60">
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-white text-opacity-60">
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white border-opacity-10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-opacity-40 text-sm">
              © 2026 Provision. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <span className="text-white text-opacity-40 text-sm">Powered by</span>
              <span className="text-[#F5A623]">Solana</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
