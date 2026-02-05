import Link from 'next/link';

export default function Footer() {
  return (
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
  );
}
