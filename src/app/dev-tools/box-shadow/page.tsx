import BoxShadowClient from './BoxShadowClient';

export const metadata = {
  title: "CSS Box Shadow Generator | NicheKit",
  description: "Visually generate the perfect CSS and Tailwind box-shadows for your UI components.",
};

export default function BoxShadowPage() {
  return (
    <div className="max-w-7xl mx-auto py-12">
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          CSS Box Shadow Generator
        </h1>
        <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
          Craft the perfect, soft, modern drop-shadows and instantly copy the pure CSS or Tailwind utility classes.
        </p>
      </div>

      <BoxShadowClient />
    </div>
  );
}
