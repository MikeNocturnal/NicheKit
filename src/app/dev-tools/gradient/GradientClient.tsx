"use client";

import { useState } from 'react';
import { Copy, CheckCircle2 } from 'lucide-react';
import ParallaxAd from '@/components/ParallaxAd';

export default function GradientClient() {
  const [type, setType] = useState<'linear' | 'radial'>('linear');
  const [angle, setAngle] = useState(135);
  const [color1, setColor1] = useState('#4f46e5');
  const [color2, setColor2] = useState('#ec4899');
  
  const [copiedCss, setCopiedCss] = useState(false);

  const cssValue = type === 'linear' 
    ? `linear-gradient(${angle}deg, ${color1}, ${color2})`
    : `radial-gradient(circle, ${color1}, ${color2})`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCss(true);
    setTimeout(() => setCopiedCss(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Controls */}
      <div className="glass-panel p-8 rounded-3xl flex flex-col gap-6">
        <h2 className="text-2xl font-bold mb-4">Gradient Settings</h2>
        
        {/* Type Selector */}
        <div className="flex gap-4 p-1 bg-black/20 rounded-xl border border-white/5">
          <button 
            onClick={() => setType('linear')}
            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-colors ${type === 'linear' ? 'bg-primary text-white' : 'text-foreground/50 hover:text-white'}`}
          >
            Linear
          </button>
          <button 
            onClick={() => setType('radial')}
            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-colors ${type === 'radial' ? 'bg-primary text-white' : 'text-foreground/50 hover:text-white'}`}
          >
            Radial
          </button>
        </div>
        
        <div className="space-y-6">
          {/* Angle (Only for linear) */}
          {type === 'linear' && (
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-foreground/80">Angle (Degrees)</label>
                <span className="text-sm text-foreground/50">{angle}°</span>
              </div>
              <input type="range" min="0" max="360" value={angle} onChange={(e) => setAngle(Number(e.target.value))} className="w-full accent-blue-500" />
            </div>
          )}

          {/* Color 1 */}
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground/80">Start Color</label>
            <div className="flex gap-3">
              <input 
                type="color" 
                value={color1} 
                onChange={(e) => setColor1(e.target.value)} 
                className="h-12 w-16 rounded-xl border border-white/10 bg-transparent cursor-pointer"
              />
              <input 
                type="text" 
                value={color1} 
                onChange={(e) => setColor1(e.target.value)} 
                className="flex-1 bg-black/20 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 uppercase"
              />
            </div>
          </div>

          {/* Color 2 */}
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground/80">End Color</label>
            <div className="flex gap-3">
              <input 
                type="color" 
                value={color2} 
                onChange={(e) => setColor2(e.target.value)} 
                className="h-12 w-16 rounded-xl border border-white/10 bg-transparent cursor-pointer"
              />
              <input 
                type="text" 
                value={color2} 
                onChange={(e) => setColor2(e.target.value)} 
                className="flex-1 bg-black/20 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 uppercase"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Preview and Code */}
      <div className="flex flex-col gap-8">
        <div className="glass-panel p-2 rounded-3xl min-h-[300px] flex items-center justify-center border border-white/5 relative group">
          <div 
            className="absolute inset-0 rounded-[1.4rem] transition-all duration-300"
            style={{ background: cssValue }}
          ></div>
        </div>

        {/* Code Output */}
        <div className="glass-panel p-6 rounded-2xl space-y-4">
          <div>
            <div className="flex justify-between items-end mb-2">
              <label className="text-xs font-bold text-foreground/50 uppercase tracking-wider">CSS Background</label>
              <button 
                onClick={() => copyToClipboard(`background: ${cssValue};`)}
                className="text-xs flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
              >
                {copiedCss ? <CheckCircle2 size={14} /> : <Copy size={14} />}
                {copiedCss ? 'Copied' : 'Copy'}
              </button>
            </div>
            <pre className="bg-black/50 p-4 rounded-xl text-sm font-mono text-green-400 overflow-x-auto border border-white/5">
              background: {cssValue};
            </pre>
          </div>
        </div>
        
        <ParallaxAd />
      </div>
    </div>
  );
}
