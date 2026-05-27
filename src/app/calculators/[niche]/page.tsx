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
    </div>
  );
}
