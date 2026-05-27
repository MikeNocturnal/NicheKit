import Link from 'next/link';
import { ArrowRight, Calculator, Code, RefreshCw } from 'lucide-react';
import ParallaxAd from '@/components/ParallaxAd';

export default function Home() {
  return (
    <div className="flex flex-col items-center py-12">
      <div className="text-center max-w-3xl mb-16">
        <h1 className="text-5xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500 tracking-tighter">
          NicheKit.
        </h1>
        <p className="text-xl md:text-2xl text-foreground/70 font-medium">
          The ultimate collection of hyper-niche micro-tools for professionals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
        <Link href="/calculators/freelance-photographer" className="group glass-panel rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20">
          <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Calculator size={24} />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-3">Calculators</h2>
          <p className="text-foreground/60 mb-6 line-clamp-2">Business, finance, and freelance calculators for every specific niche.</p>
          <span className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
            Explore <ArrowRight size={16} className="ml-2" />
          </span>
        </Link>

        <Link href="/dev-tools" className="group glass-panel rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20">
          <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Code size={24} />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-3">Dev Tools</h2>
          <p className="text-foreground/60 mb-6 line-clamp-2">Modern UI generators, CSS tools, and snippets for modern web development.</p>
          <span className="flex items-center text-purple-400 font-medium group-hover:translate-x-1 transition-transform">
            Explore <ArrowRight size={16} className="ml-2" />
          </span>
        </Link>

        <Link href="/converters" className="group glass-panel rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/20">
          <div className="w-12 h-12 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <RefreshCw size={24} />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-3">Converters</h2>
          <p className="text-foreground/60 mb-6 line-clamp-2">Specific data format converters tailored to the software you use.</p>
          <span className="flex items-center text-pink-400 font-medium group-hover:translate-x-1 transition-transform">
            Explore <ArrowRight size={16} className="ml-2" />
          </span>
        </Link>
      </div>

      <ParallaxAd />
      
      <div className="w-full mt-12 glass-panel rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Trending Tools</h2>
        <div className="flex flex-col gap-4 max-w-md mx-auto mt-8">
          <Link href="/calculators/freelance-photographer" className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
            <span className="font-medium">Freelance Photographer Rate Calculator</span>
            <span className="text-xs py-1 px-2 bg-primary/20 text-primary rounded-full">Hot</span>
          </Link>
          <Link href="/calculators/react-developer" className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
            <span className="font-medium">React Dev Rate Calculator</span>
            <span className="text-xs py-1 px-2 bg-primary/20 text-primary rounded-full">Trending</span>
          </Link>
          <div className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 opacity-50 cursor-not-allowed">
            <span className="font-medium">Glassmorphism Generator</span>
            <span className="text-xs py-1 px-2 bg-foreground/10 text-foreground/50 rounded-full">Coming Soon</span>
          </div>
        </div>
      </div>
      
      {/* Add some empty space to allow for scrolling to see the parallax ad clearly */}
      <div className="h-[200px]"></div>
    </div>
  );
}
