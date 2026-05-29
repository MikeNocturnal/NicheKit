import SvgWavesClient from './SvgWavesClient';

export const metadata = {
  title: "SVG Wave Divider Generator | NicheKit",
  description: "Visually generate the perfect SVG curved waves to divide sections on modern websites.",
};

export default function SvgWavesPage() {
  return (
    <div className="max-w-7xl mx-auto py-12">
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">
          SVG Wave Generator
        </h1>
        <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
          Generate beautiful curved SVG section dividers for modern landing pages.
        </p>
      </div>

      <SvgWavesClient />
    </div>
  );
}
