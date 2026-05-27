"use client";

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import ParallaxAd from '@/components/ParallaxAd';

export default function GlassGeneratorClient() {
  const [blur, setBlur] = useState(12);
  const [opacity, setOpacity] = useState(0.2);
  const [borderOpacity, setBorderOpacity] = useState(0.3);
  const [color, setColor] = useState('#ffffff');
  
  const [copiedCSS, setCopiedCSS] = useState(false);
  const [copiedTailwind, setCopiedTailwind] = useState(false);

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '255, 255, 255';
  };

  const rgbColor = hexToRgb(color);

  const cssCode = `.glass-card {
  background: rgba(${rgbColor}, ${opacity});
  backdrop-filter: blur(${blur}px);
  -webkit-backdrop-filter: blur(${blur}px);
  border: 1px solid rgba(255, 255, 255, ${borderOpacity});
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
}`;

  const getTailwindBlur = (b: number) => {
    if (b <= 4) return 'backdrop-blur-sm';
    if (b <= 8) return 'backdrop-blur-md';
    if (b <= 12) return 'backdrop-blur-lg';
    if (b <= 16) return 'backdrop-blur-xl';
    if (b <= 24) return 'backdrop-blur-2xl';
    return 'backdrop-blur-3xl';
  };

  const getTailwindOpacity = (o: number) => {
    return Math.round(o * 100);
  };

  const tailwindCode = `<div className="bg-[${color}]/${getTailwindOpacity(opacity)} ${getTailwindBlur(blur)} border border-white/${getTailwindOpacity(borderOpacity)} shadow-lg rounded-2xl">
  {/* Content */}
</div>`;

  const handleCopy = (text: string, type: 'css' | 'tailwind') => {
    navigator.clipboard.writeText(text);
    if (type === 'css') {
      setCopiedCSS(true);
      setTimeout(() => setCopiedCSS(false), 2000);
    } else {
      setCopiedTailwind(true);
      setTimeout(() => setCopiedTailwind(false), 2000);
    }
  };

  return (
    <div className="flex flex-col gap-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Controls Panel */}
        <div className="glass-panel p-8 rounded-2xl flex flex-col gap-8 order-2 lg:order-1">
          <h2 className="text-2xl font-bold">Effect Controls</h2>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-foreground/80">Blur Value</label>
                <span className="text-sm font-mono text-primary">{blur}px</span>
              </div>
              <input 
                type="range" min="0" max="40" step="1" 
                value={blur} onChange={(e) => setBlur(Number(e.target.value))}
                className="w-full h-2 bg-black/30 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-foreground/80">Background Opacity</label>
                <span className="text-sm font-mono text-primary">{opacity}</span>
              </div>
              <input 
                type="range" min="0" max="1" step="0.05" 
                value={opacity} onChange={(e) => setOpacity(Number(e.target.value))}
                className="w-full h-2 bg-black/30 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-foreground/80">Border Opacity</label>
                <span className="text-sm font-mono text-primary">{borderOpacity}</span>
              </div>
              <input 
                type="range" min="0" max="1" step="0.05" 
                value={borderOpacity} onChange={(e) => setBorderOpacity(Number(e.target.value))}
                className="w-full h-2 bg-black/30 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-foreground/80">Glass Color (Hex)</label>
                <span className="text-sm font-mono text-primary">{color}</span>
              </div>
              <div className="flex gap-4 items-center">
                <input 
                  type="color" 
                  value={color} 
                  onChange={(e) => setColor(e.target.value)}
                  className="w-12 h-12 rounded bg-transparent border-0 cursor-pointer p-0"
                />
                <div className="flex gap-2">
                  <button onClick={() => setColor('#ffffff')} className="w-8 h-8 rounded-full bg-white border border-white/20"></button>
                  <button onClick={() => setColor('#000000')} className="w-8 h-8 rounded-full bg-black border border-white/20"></button>
                  <button onClick={() => setColor('#3b82f6')} className="w-8 h-8 rounded-full bg-blue-500 border border-white/20"></button>
                  <button onClick={() => setColor('#ec4899')} className="w-8 h-8 rounded-full bg-pink-500 border border-white/20"></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Preview Panel */}
        <div className="relative rounded-2xl overflow-hidden min-h-[400px] flex items-center justify-center order-1 lg:order-2 border border-white/10 bg-slate-900">
          {/* Colorful abstract background directly behind the glass */}
          <div className="absolute top-10 left-10 w-48 h-48 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-70"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-70"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-60"></div>
          
          {/* Target Glass Card */}
          <div 
            className="relative z-10 w-3/4 max-w-sm aspect-[4/3] rounded-2xl flex flex-col items-center justify-center p-6 text-center shadow-2xl transition-all"
            style={{
              background: `rgba(${rgbColor}, ${opacity})`,
              backdropFilter: `blur(${blur}px)`,
              WebkitBackdropFilter: `blur(${blur}px)`,
              border: `1px solid rgba(255, 255, 255, ${borderOpacity})`,
            }}
          >
            <div className="w-16 h-16 rounded-full bg-white/20 mb-4 flex items-center justify-center border border-white/30">
              <div className="w-8 h-8 rounded-full bg-white/40"></div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>Glassmorphism</h3>
            <p className="text-white/90 text-sm font-medium">This is how your UI component will look.</p>
          </div>
        </div>
      </div>

      {/* Code Output Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* CSS Code */}
        <div className="glass-panel rounded-2xl overflow-hidden flex flex-col">
          <div className="flex justify-between items-center px-6 py-4 border-b border-white/10 bg-black/20">
            <h3 className="font-semibold text-foreground/90">Vanilla CSS</h3>
            <button 
              onClick={() => handleCopy(cssCode, 'css')}
              className="flex items-center gap-2 text-xs font-medium bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition-colors"
            >
              {copiedCSS ? <><Check size={14} className="text-green-400" /> Copied!</> : <><Copy size={14} /> Copy</>}
            </button>
          </div>
          <div className="p-6 overflow-x-auto">
            <pre className="text-sm font-mono text-blue-300">
              <code>{cssCode}</code>
            </pre>
          </div>
        </div>

        {/* Tailwind Code */}
        <div className="glass-panel rounded-2xl overflow-hidden flex flex-col">
          <div className="flex justify-between items-center px-6 py-4 border-b border-white/10 bg-black/20">
            <h3 className="font-semibold text-foreground/90">Tailwind CSS</h3>
            <button 
              onClick={() => handleCopy(tailwindCode, 'tailwind')}
              className="flex items-center gap-2 text-xs font-medium bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition-colors"
            >
              {copiedTailwind ? <><Check size={14} className="text-green-400" /> Copied!</> : <><Copy size={14} /> Copy</>}
            </button>
          </div>
          <div className="p-6 overflow-x-auto">
            <pre className="text-sm font-mono text-purple-300">
              <code>{tailwindCode}</code>
            </pre>
          </div>
        </div>
      </div>

      <ParallaxAd />
    </div>
  );
}
