import Link from 'next/link';
import { ArrowRight, Calculator, Code, RefreshCw } from 'lucide-react';
import ParallaxAd from '@/components/ParallaxAd';
import { calculatorNiches } from '@/data/niches';

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
        <Link href="/calculators" className="group glass-panel rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20 flex flex-col h-full">
          <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Calculator size={24} />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-3 flex items-center gap-2">
            Calculators <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">{calculatorNiches.length}</span>
          </h2>
          <p className="text-foreground/60 mb-6 flex-grow">Business, finance, and freelance calculators for every specific niche.</p>
          <span className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
            View All <ArrowRight size={16} className="ml-2" />
          </span>
        </Link>

        <Link href="/dev-tools" className="group glass-panel rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20 flex flex-col h-full">
          <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Code size={24} />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-3">Dev Tools</h2>
          <p className="text-foreground/60 mb-6 flex-grow">Modern UI generators, CSS tools, and snippets for modern web development.</p>
          <span className="flex items-center text-purple-400 font-medium group-hover:translate-x-1 transition-transform">
            Explore <ArrowRight size={16} className="ml-2" />
          </span>
        </Link>

        <Link href="/converters" className="group glass-panel rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/20 flex flex-col h-full">
          <div className="w-12 h-12 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <RefreshCw size={24} />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-3">Converters</h2>
          <p className="text-foreground/60 mb-6 flex-grow">Specific data format converters tailored to the software you use.</p>
          <span className="flex items-center text-pink-400 font-medium group-hover:translate-x-1 transition-transform">
            Explore <ArrowRight size={16} className="ml-2" />
          </span>
        </Link>
      </div>

      <ParallaxAd />
      
      <div className="w-full mt-12 glass-panel rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Trending Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mt-8">
          <Link href="/calculators/react-developer" className="flex flex-col items-start p-6 rounded-xl hover:bg-white/5 transition-colors border border-white/5 hover:border-white/20 text-left">
            <span className="text-xs py-1 px-2 bg-blue-500/20 text-blue-400 rounded-full mb-3">Calculator</span>
            <span className="font-bold text-lg mb-1">React Developer Rate</span>
            <span className="text-sm text-foreground/60">Calculate your optimal hourly rate as a React engineer.</span>
          </Link>
          <Link href="/dev-tools/glassmorphism" className="flex flex-col items-start p-6 rounded-xl hover:bg-white/5 transition-colors border border-white/5 hover:border-white/20 text-left">
            <span className="text-xs py-1 px-2 bg-purple-500/20 text-purple-400 rounded-full mb-3">Dev Tool</span>
            <span className="font-bold text-lg mb-1">Glassmorphism Generator</span>
            <span className="text-sm text-foreground/60">Visually generate pure CSS/Tailwind frosted glass UI.</span>
          </Link>
          <Link href="/converters/json-to-ts" className="flex flex-col items-start p-6 rounded-xl hover:bg-white/5 transition-colors border border-white/5 hover:border-white/20 text-left">
            <span className="text-xs py-1 px-2 bg-pink-500/20 text-pink-400 rounded-full mb-3">Converter</span>
            <span className="font-bold text-lg mb-1">JSON to TypeScript</span>
            <span className="text-sm text-foreground/60">Instantly generate TS Interfaces from raw JSON objects.</span>
          </Link>
          <Link href="/calculators/ux-writer" className="flex flex-col items-start p-6 rounded-xl hover:bg-white/5 transition-colors border border-white/5 hover:border-white/20 text-left">
            <span className="text-xs py-1 px-2 bg-blue-500/20 text-blue-400 rounded-full mb-3">Calculator</span>
            <span className="font-bold text-lg mb-1">UX Writer Rate</span>
            <span className="text-sm text-foreground/60">Calculate your optimal hourly rate as a UX Writer.</span>
          </Link>
          <Link href="/calculators/3d-animator" className="flex flex-col items-start p-6 rounded-xl hover:bg-white/5 transition-colors border border-white/5 hover:border-white/20 text-left">
            <span className="text-xs py-1 px-2 bg-blue-500/20 text-blue-400 rounded-full mb-3">Calculator</span>
            <span className="font-bold text-lg mb-1">3D Animator Rate</span>
            <span className="text-sm text-foreground/60">Calculate your optimal hourly rate as a 3D Animator.</span>
          </Link>
          <Link href="/calculators" className="flex flex-col items-center justify-center p-6 rounded-xl hover:bg-white/5 transition-colors border border-white/5 hover:border-white/20 text-center h-full">
            <span className="font-bold text-lg mb-1 text-primary">View All {calculatorNiches.length} Tools <ArrowRight size={16} className="inline ml-1" /></span>
          </Link>
        </div>
      </div>
      
      {/* Add some empty space to allow for scrolling to see the parallax ad clearly */}
      <div className="h-[200px]"></div>
    </div>
  );
}
