"use client";

import { useState } from 'react';
import { Copy, CheckCircle2 } from 'lucide-react';
import ParallaxAd from '@/components/ParallaxAd';

export default function BoxShadowClient() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(10);
  const [blur, setBlur] = useState(15);
  const [spread, setSpread] = useState(-3);
  const [color, setColor] = useState('rgba(0, 0, 0, 0.3)');
  const [inset, setInset] = useState(false);
  
  const [copiedCss, setCopiedCss] = useState(false);
  const [copiedTailwind, setCopiedTailwind] = useState(false);

  const cssValue = `${inset ? 'inset ' : ''}${x}px ${y}px ${blur}px ${spread}px ${color}`;
  
  const generateTailwind = () => {
    return `shadow-[${cssValue.replace(/ /g, '_')}]`;
  };

  const copyToClipboard = (text: string, isTailwind: boolean) => {
    navigator.clipboard.writeText(text);
    if (isTailwind) {
      setCopiedTailwind(true);
      setTimeout(() => setCopiedTailwind(false), 2000);
    } else {
      setCopiedCss(true);
      setTimeout(() => setCopiedCss(false), 2000);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Controls */}
      <div className="glass-panel p-8 rounded-3xl flex flex-col gap-6">
        <h2 className="text-2xl font-bold mb-4">Shadow Settings</h2>
        
        {/* Sliders */}
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-foreground/80">X Offset</label>
              <span className="text-sm text-foreground/50">{x}px</span>
            </div>
            <input type="range" min="-50" max="50" value={x} onChange={(e) => setX(Number(e.target.value))} className="w-full accent-purple-500" />
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-foreground/80">Y Offset</label>
              <span className="text-sm text-foreground/50">{y}px</span>
            </div>
            <input type="range" min="-50" max="50" value={y} onChange={(e) => setY(Number(e.target.value))} className="w-full accent-purple-500" />
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-foreground/80">Blur Radius</label>
              <span className="text-sm text-foreground/50">{blur}px</span>
            </div>
            <input type="range" min="0" max="100" value={blur} onChange={(e) => setBlur(Number(e.target.value))} className="w-full accent-purple-500" />
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-foreground/80">Spread Radius</label>
              <span className="text-sm text-foreground/50">{spread}px</span>
            </div>
            <input type="range" min="-50" max="50" value={spread} onChange={(e) => setSpread(Number(e.target.value))} className="w-full accent-purple-500" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-foreground/80">Shadow Color (RGBA)</label>
            <input 
              type="text" 
              value={color} 
              onChange={(e) => setColor(e.target.value)} 
              className="w-full bg-black/20 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            />
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-white/10">
            <input 
              type="checkbox" 
              id="inset-check"
              checked={inset}
              onChange={(e) => setInset(e.target.checked)}
              className="w-5 h-5 accent-purple-500 rounded"
            />
            <label htmlFor="inset-check" className="text-sm font-medium cursor-pointer">Inset (Inner Shadow)</label>
          </div>
        </div>
      </div>

      {/* Preview and Code */}
      <div className="flex flex-col gap-8">
        <div className="glass-panel p-8 rounded-3xl min-h-[300px] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-white/5">
          {/* Target Element */}
          <div 
            className="w-48 h-48 bg-white dark:bg-zinc-800 rounded-2xl flex items-center justify-center text-zinc-900 dark:text-white font-bold transition-shadow duration-200"
            style={{ boxShadow: cssValue }}
          >
            Preview
          </div>
        </div>

        {/* Code Output */}
        <div className="glass-panel p-6 rounded-2xl space-y-4">
          <div>
            <div className="flex justify-between items-end mb-2">
              <label className="text-xs font-bold text-foreground/50 uppercase tracking-wider">CSS</label>
              <button 
                onClick={() => copyToClipboard(`box-shadow: ${cssValue};`, false)}
                className="text-xs flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors"
              >
                {copiedCss ? <CheckCircle2 size={14} /> : <Copy size={14} />}
                {copiedCss ? 'Copied' : 'Copy'}
              </button>
            </div>
            <pre className="bg-black/50 p-4 rounded-xl text-sm font-mono text-green-400 overflow-x-auto border border-white/5">
              box-shadow: {cssValue};
            </pre>
          </div>

          <div>
            <div className="flex justify-between items-end mb-2">
              <label className="text-xs font-bold text-foreground/50 uppercase tracking-wider">Tailwind</label>
              <button 
                onClick={() => copyToClipboard(generateTailwind(), true)}
                className="text-xs flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors"
              >
                {copiedTailwind ? <CheckCircle2 size={14} /> : <Copy size={14} />}
                {copiedTailwind ? 'Copied' : 'Copy'}
              </button>
            </div>
            <pre className="bg-black/50 p-4 rounded-xl text-sm font-mono text-cyan-400 overflow-x-auto border border-white/5">
              {generateTailwind()}
            </pre>
          </div>
        </div>
        
        <ParallaxAd />
      </div>
    </div>
  );
}
