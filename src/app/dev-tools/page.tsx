import Link from 'next/link';
import { Layers } from 'lucide-react';
import ParallaxAd from '@/components/ParallaxAd';

export const metadata = {
  title: "Developer Tools | NicheKit",
  description: "Free modern developer tools including UI generators and code snippets.",
};

export default function DevToolsPage() {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Developer Tools
        </h1>
        <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
          Speed up your workflow with our collection of free, modern code generators and utilities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <Link href="/dev-tools/glassmorphism" className="group glass-panel p-8 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20">
          <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Layers size={24} />
          </div>
          <h2 className="text-2xl font-bold mb-3">Glassmorphism Generator</h2>
          <p className="text-foreground/60">Visually craft frosted-glass UI elements and export pure CSS or Tailwind code instantly.</p>
        </Link>
      </div>
      
      <ParallaxAd />
    </div>
  );
}
