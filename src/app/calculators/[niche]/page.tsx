import { calculatorNiches } from '@/data/niches';
import { notFound } from 'next/navigation';
import CalculatorClient from './CalculatorClient';

export function generateStaticParams() {
  return calculatorNiches.map((niche) => ({
    niche: niche.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ niche: string }> }) {
  const resolvedParams = await params;
  const nicheData = calculatorNiches.find(n => n.slug === resolvedParams.niche);
  if (!nicheData) return {};
  
  return {
    title: `${nicheData.title} Hourly Rate Calculator | NicheKit`,
    description: `Calculate your optimal freelance hourly rate as a ${nicheData.title}. Account for taxes, expenses, and profit margin.`,
  };
}

export default async function CalculatorPage({ params }: { params: Promise<{ niche: string }> }) {
  const resolvedParams = await params;
  const nicheData = calculatorNiches.find(n => n.slug === resolvedParams.niche);
  
  if (!nicheData) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-4xl">{nicheData.emoji}</span>
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
            {nicheData.title} Rate Calculator
          </h1>
        </div>
        <p className="text-lg text-foreground/70">
          Find out exactly what you need to charge per hour to hit your income goals and cover your business expenses.
        </p>
      </div>

      <CalculatorClient initialData={nicheData} />

      {/* SEO Depth Section */}
      <div className="mt-24 space-y-16 border-t border-white/10 pt-16">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6">Pricing Guide for {nicheData.title}s</h2>
          {nicheData.seoParagraphs.map((para, i) => (
            <p key={i} className="text-foreground/80 leading-relaxed mb-4 text-lg">
              {para}
            </p>
          ))}
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {nicheData.faqs.map((faq, i) => (
              <div key={i} className="glass-panel p-6 rounded-2xl border border-white/5">
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-foreground/70 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
