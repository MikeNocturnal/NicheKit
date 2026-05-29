import Link from 'next/link';
import ParallaxAd from '@/components/ParallaxAd';

export const metadata = {
  title: "Developer Tools | NicheKit",
  description: "Free visual UI generators and code snippets for modern web development.",
};

export default function DevToolsPage() {
  return (
    <div className="max-w-7xl mx-auto py-12">
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Dev Tools
        </h1>
        <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
          Interactive visual UI generators for modern web development. Tweak the UI and instantly copy the CSS/SVG code.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
        <Link 
          href="/dev-tools/glassmorphism" 
          className="group glass-panel p-8 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-white/5 border border-white/5"
        >
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">Glassmorphism UI</h2>
            <span className="bg-purple-500/20 text-purple-400 text-xs px-3 py-1 rounded-full font-medium">CSS</span>
          </div>
          <p className="text-foreground/60">
            Visually construct frosted glass interfaces. Adjust blur, opacity, and coloring to generate pure CSS and Tailwind classes.
          </p>
        </Link>

        <Link 
          href="/dev-tools/box-shadow" 
          className="group glass-panel p-8 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-white/5 border border-white/5"
        >
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">Box Shadow Generator</h2>
            <span className="bg-purple-500/20 text-purple-400 text-xs px-3 py-1 rounded-full font-medium">CSS</span>
          </div>
          <p className="text-foreground/60">
            Craft the perfect, soft, modern drop-shadows and inner-shadows. Instantly copy the pure CSS or Tailwind utility classes.
          </p>
        </Link>

        <Link 
          href="/dev-tools/gradient" 
          className="group glass-panel p-8 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-white/5 border border-white/5"
        >
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">Gradient Backgrounds</h2>
            <span className="bg-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full font-medium">CSS</span>
          </div>
          <p className="text-foreground/60">
            Visually build stunning linear and radial background gradients. Copy the pure CSS code instantly.
          </p>
        </Link>

        <Link 
          href="/dev-tools/svg-waves" 
          className="group glass-panel p-8 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-white/5 border border-white/5"
        >
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">SVG Wave Dividers</h2>
            <span className="bg-orange-500/20 text-orange-400 text-xs px-3 py-1 rounded-full font-medium">SVG</span>
          </div>
          <p className="text-foreground/60">
            Generate beautiful curved SVG section dividers for modern landing pages. Customize complexity, height, and color.
          </p>
        </Link>
      </div>
      
      <ParallaxAd />
    </div>
  );
}
