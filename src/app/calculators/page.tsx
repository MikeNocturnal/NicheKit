import Link from 'next/link';
import { calculatorNiches } from '@/data/niches';
import ParallaxAd from '@/components/ParallaxAd';

export const metadata = {
  title: "Freelance Rate Calculators | NicheKit",
  description: "Find the perfect hourly rate calculator for your specific freelance profession.",
};

export default function CalculatorsPage() {
  return (
    <div className="max-w-7xl mx-auto py-12">
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
          Freelance Rate Calculators
        </h1>
        <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
          Choose your specific profession below to calculate exactly what you need to charge to hit your income goals.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
        {calculatorNiches.map((niche) => (
          <Link 
            key={niche.slug} 
            href={`/calculators/${niche.slug}`} 
            className="group glass-panel p-4 rounded-xl transition-all hover:-translate-y-1 hover:shadow-lg hover:border-white/20 border border-white/5 flex flex-col items-center text-center"
          >
            <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">{niche.emoji}</span>
            <h2 className="text-sm font-bold">{niche.title}</h2>
          </Link>
        ))}
      </div>
      
      <ParallaxAd />
    </div>
  );
}
