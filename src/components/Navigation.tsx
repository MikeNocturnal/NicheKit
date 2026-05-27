"use client";
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-t-0 border-l-0 border-r-0 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-foreground flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 shadow-lg shadow-primary/20 flex items-center justify-center">
                <span className="text-white text-sm font-black">NK</span>
              </div>
              NicheKit
            </Link>
          </div>
          <div className="hidden sm:flex sm:space-x-8">
            <Link href="/calculators/freelance-rate" className="text-foreground/80 hover:text-foreground px-3 py-2 text-sm font-medium transition-colors">
              Calculators
            </Link>
            <Link href="/dev-tools" className="text-foreground/80 hover:text-foreground px-3 py-2 text-sm font-medium transition-colors">
              Dev Tools
            </Link>
            <Link href="/converters" className="text-foreground/80 hover:text-foreground px-3 py-2 text-sm font-medium transition-colors">
              Converters
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
