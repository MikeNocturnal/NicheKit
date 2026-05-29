import GradientClient from './GradientClient';

export const metadata = {
  title: "CSS Gradient Generator | NicheKit",
  description: "Visually generate the perfect CSS background gradients for your modern web designs.",
};

export default function GradientPage() {
  return (
    <div className="max-w-7xl mx-auto py-12">
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
          CSS Gradient Generator
        </h1>
        <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
          Visually build stunning linear and radial gradients. Copy the pure CSS code instantly.
        </p>
      </div>

      <GradientClient />
    </div>
  );
}
