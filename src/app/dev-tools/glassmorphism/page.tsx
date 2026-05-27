import { Metadata } from 'next';
import GlassGeneratorClient from './GlassGeneratorClient';

export const metadata: Metadata = {
  title: "Free Glassmorphism CSS & Tailwind Generator | NicheKit",
  description: "Visually create beautiful frosted-glass UI components and instantly copy the CSS or Tailwind code. 100% free developer tool.",
};

export default function GlassmorphismPage() {
  return (
    <div className="max-w-6xl mx-auto py-8">
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 mb-4 tracking-tight">
          Glassmorphism Generator
        </h1>
        <p className="text-lg text-foreground/70">
          Adjust the sliders to craft the perfect frosted-glass effect. Instantly grab the CSS or Tailwind code for your project.
        </p>
      </div>

      <GlassGeneratorClient />
    </div>
  );
}
