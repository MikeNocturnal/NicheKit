"use client";

import { useState, useEffect } from 'react';
import { Copy, CheckCircle2 } from 'lucide-react';
import ParallaxAd from '@/components/ParallaxAd';

export default function SvgWavesClient() {
  const [complexity, setComplexity] = useState(2);
  const [height, setHeight] = useState(100);
  const [color, setColor] = useState('#ffffff');
  const [invert, setInvert] = useState(false);
  const [seed, setSeed] = useState(1);
  
  const [svgCode, setSvgCode] = useState('');
  const [copiedSvg, setCopiedSvg] = useState(false);

  // Simple pseudo-random generator
  const random = (s: number) => {
    const x = Math.sin(s++) * 10000;
    return x - Math.floor(x);
  };

  useEffect(() => {
    // Generate a smooth SVG path based on complexity
    const points = [];
    const step = 1000 / complexity;
    
    // Start point
    points.push(`M 0 ${height / 2}`);
    
    let currentSeed = seed;
    
    for (let i = 1; i <= complexity; i++) {
      const x = i * step;
      const prevX = (i - 1) * step;
      
      const cp1x = prevX + (step * 0.5);
      const cp2x = prevX + (step * 0.5);
      
      // Randomize Y but keep it somewhat anchored
      const yOffset = (random(currentSeed++) * height) - (height / 2);
      const cp1y = (height / 2) + yOffset;
      
      const yOffset2 = (random(currentSeed++) * height) - (height / 2);
      const cp2y = (height / 2) + yOffset2;
      
      const y = i === complexity ? height / 2 : (height / 2) + ((random(currentSeed++) * height * 0.5) - (height * 0.25));
      
      points.push(`C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x} ${y}`);
    }

    // Close the path to form a solid shape
    if (invert) {
      points.push(`L 1000 0 L 0 0 Z`);
    } else {
      points.push(`L 1000 ${height * 2} L 0 ${height * 2} Z`);
    }

    const path = points.join(' ');
    
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 ${height}" preserveAspectRatio="none" style="width: 100%; height: 100%;"><path d="${path}" fill="${color}" /></svg>`;
    setSvgCode(svg);
  }, [complexity, height, color, invert, seed]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(svgCode);
    setCopiedSvg(true);
    setTimeout(() => setCopiedSvg(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Controls */}
      <div className="glass-panel p-8 rounded-3xl flex flex-col gap-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-bold">Wave Settings</h2>
          <button 
            onClick={() => setSeed(Date.now())}
            className="text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg transition-colors border border-white/10"
          >
            Randomize Shape
          </button>
        </div>
        
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-foreground/80">Complexity (Peaks/Valleys)</label>
              <span className="text-sm text-foreground/50">{complexity}</span>
            </div>
            <input type="range" min="1" max="10" value={complexity} onChange={(e) => setComplexity(Number(e.target.value))} className="w-full accent-orange-500" />
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-foreground/80">Wave Height</label>
              <span className="text-sm text-foreground/50">{height}px</span>
            </div>
            <input type="range" min="20" max="250" value={height} onChange={(e) => setHeight(Number(e.target.value))} className="w-full accent-orange-500" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-foreground/80">Fill Color</label>
            <div className="flex gap-3">
              <input 
                type="color" 
                value={color} 
                onChange={(e) => setColor(e.target.value)} 
                className="h-12 w-16 rounded-xl border border-white/10 bg-transparent cursor-pointer"
              />
              <input 
                type="text" 
                value={color} 
                onChange={(e) => setColor(e.target.value)} 
                className="flex-1 bg-black/20 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 uppercase"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-white/10">
            <input 
              type="checkbox" 
              id="invert-check"
              checked={invert}
              onChange={(e) => setInvert(e.target.checked)}
              className="w-5 h-5 accent-orange-500 rounded"
            />
            <label htmlFor="invert-check" className="text-sm font-medium cursor-pointer">Invert Shape (Top / Bottom)</label>
          </div>
        </div>
      </div>

      {/* Preview and Code */}
      <div className="flex flex-col gap-8">
        <div className="glass-panel p-0 rounded-3xl min-h-[250px] flex items-center justify-center border border-white/5 relative overflow-hidden bg-zinc-900">
          <div 
            className={`absolute inset-x-0 ${invert ? 'top-0' : 'bottom-0'} transition-all duration-300`}
            style={{ height: `${height}px` }}
            dangerouslySetInnerHTML={{ __html: svgCode }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50">
            <span className="text-zinc-600 font-bold uppercase tracking-[0.2em]">Website Section</span>
          </div>
        </div>

        {/* Code Output */}
        <div className="glass-panel p-6 rounded-2xl space-y-4">
          <div>
            <div className="flex justify-between items-end mb-2">
              <label className="text-xs font-bold text-foreground/50 uppercase tracking-wider">Raw SVG Code</label>
              <button 
                onClick={copyToClipboard}
                className="text-xs flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors"
              >
                {copiedSvg ? <CheckCircle2 size={14} /> : <Copy size={14} />}
                {copiedSvg ? 'Copied' : 'Copy'}
              </button>
            </div>
            <pre className="bg-black/50 p-4 rounded-xl text-sm font-mono text-green-400 overflow-x-auto border border-white/5 max-h-48 overflow-y-auto">
              {svgCode}
            </pre>
          </div>
        </div>
        
        <ParallaxAd />
      </div>
    </div>
  );
}
