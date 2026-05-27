import Link from 'next/link';
import { RefreshCw, Code2 } from 'lucide-react';
import ParallaxAd from '@/components/ParallaxAd';

export const metadata = {
  title: "Data Converters | NicheKit",
  description: "Free tools to instantly convert messy data formats into structured code.",
};

export default function ConvertersPage() {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-orange-500">
          Data Converters
        </h1>
        <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
          Instantly convert and format raw data strings into structured code ready for production.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <Link href="/converters/json-to-ts" className="group glass-panel p-8 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/20">
          <div className="w-12 h-12 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Code2 size={24} />
          </div>
          <h2 className="text-2xl font-bold mb-3">JSON to TypeScript</h2>
          <p className="text-foreground/60">Paste messy JSON data and instantly generate strongly-typed TypeScript interfaces.</p>
        </Link>
      </div>
      
      <ParallaxAd />
    </div>
  );
}
