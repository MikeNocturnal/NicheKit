import { Metadata } from 'next';
import JsonToTsClient from './JsonToTsClient';

export const metadata: Metadata = {
  title: "JSON to TypeScript Interface Converter | NicheKit",
  description: "Instantly convert raw JSON data into perfectly formatted TypeScript interfaces. 100% free developer tool.",
};

export default function JsonToTsPage() {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-orange-500 mb-4 tracking-tight">
          JSON to TypeScript Converter
        </h1>
        <p className="text-lg text-foreground/70">
          Paste your raw JSON object below to instantly generate strongly-typed TypeScript interfaces. All processing happens safely in your browser.
        </p>
      </div>

      <JsonToTsClient />
    </div>
  );
}
