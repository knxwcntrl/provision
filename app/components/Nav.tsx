'use client';

import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container-custom flex items-center justify-between py-4 px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-[#0D4F3C] flex items-center justify-center">
            <span className="text-white font-bold text-lg md:text-xl">P</span>
          </div>
          <span className="text-lg md:text-xl font-bold text-[#0D4F3C]">Provision</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#how-it-works" className="text-[#1A1A1A] hover:text-[#0D4F3C] transition-colors">
            How It Works
          </Link>
          <Link href="/products" className="text-[#1A1A1A] hover:text-[#0D4F3C] transition-colors">
            Products
          </Link>
          <Link href="/docs" className="text-[#1A1A1A] hover:text-[#0D4F3C] transition-colors">
            Agent API
          </Link>
          <Link href="/pricing" className="text-[#1A1A1A] hover:text-[#0D4F3C] transition-colors">
            Pricing
          </Link>
        </div>
        
        <div className="flex items-center gap-2">
          <Link href="/dashboard" className="text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg border border-[#0D4F3C] text-[#0D4F3C] hover:bg-[#0D4F3C] hover:text-white transition-all font-medium">
            Dashboard
          </Link>
          <Link href="/register" className="text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg bg-[#0D4F3C] text-white hover:bg-[#1A6B52] transition-all font-medium">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
