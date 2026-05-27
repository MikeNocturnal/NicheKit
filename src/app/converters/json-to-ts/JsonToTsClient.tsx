"use client";

import { useState, useEffect } from 'react';
import { Copy, Check, AlertCircle } from 'lucide-react';
import ParallaxAd from '@/components/ParallaxAd';

export default function JsonToTsClient() {
  const [inputJson, setInputJson] = useState('{\n  "user": {\n    "id": 1,\n    "name": "Alex",\n    "isActive": true,\n    "roles": ["admin", "editor"]\n  }\n}');
  const [outputTs, setOutputTs] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Basic JSON to TS engine
  const convertToTs = (jsonString: string) => {
    try {
      if (!jsonString.trim()) {
        setOutputTs('');
        setError(null);
        return;
      }
      const parsed = JSON.parse(jsonString);
      let interfaces = '';
      
      const generateInterface = (obj: any, name: string = 'RootObject') => {
        let ts = `export interface ${name} {\n`;
        for (const key in obj) {
          const val = obj[key];
          let type = 'any';
          if (val === null) {
            type = 'null';
          } else if (Array.isArray(val)) {
            if (val.length > 0) {
              const firstElemType = typeof val[0];
              if (firstElemType === 'object' && val[0] !== null) {
                const subName = key.charAt(0).toUpperCase() + key.slice(1) + 'Item';
                generateInterface(val[0], subName);
                type = `${subName}[]`;
              } else {
                type = `${firstElemType}[]`;
              }
            } else {
              type = 'any[]';
            }
          } else if (typeof val === 'object') {
            const subName = key.charAt(0).toUpperCase() + key.slice(1);
            generateInterface(val, subName);
            type = subName;
          } else {
            type = typeof val;
          }
          ts += `  ${key}: ${type};\n`;
        }
        ts += '}\n\n';
        interfaces = ts + interfaces;
      };

      generateInterface(parsed);
      setOutputTs(interfaces.trim());
      setError(null);
    } catch (e) {
      setError('Invalid JSON format. Please check your syntax.');
    }
  };

  useEffect(() => {
    convertToTs(inputJson);
  }, [inputJson]);

  const handleCopy = () => {
    navigator.clipboard.writeText(outputTs);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Input Panel */}
        <div className="glass-panel rounded-2xl overflow-hidden flex flex-col h-[600px]">
          <div className="flex items-center px-6 py-4 border-b border-white/10 bg-black/40">
            <h3 className="font-semibold text-foreground/90">Input JSON</h3>
          </div>
          <textarea
            value={inputJson}
            onChange={(e) => setInputJson(e.target.value)}
            className="flex-grow w-full bg-transparent text-sm font-mono text-blue-300 p-6 focus:outline-none resize-none"
            spellCheck="false"
            placeholder="Paste your JSON here..."
          />
        </div>

        {/* Output Panel */}
        <div className="glass-panel rounded-2xl overflow-hidden flex flex-col h-[600px] relative">
          <div className="flex justify-between items-center px-6 py-4 border-b border-white/10 bg-black/40">
            <div className="flex items-center gap-3">
              <h3 className="font-semibold text-foreground/90">TypeScript Interfaces</h3>
              {error && (
                <span className="flex items-center gap-1 text-xs text-red-400 bg-red-400/10 px-2 py-1 rounded">
                  <AlertCircle size={12} /> {error}
                </span>
              )}
            </div>
            <button 
              onClick={handleCopy}
              disabled={!!error || !outputTs}
              className="flex items-center gap-2 text-xs font-medium bg-white/10 hover:bg-white/20 disabled:opacity-50 px-3 py-1.5 rounded-lg transition-colors"
            >
              {copied ? <><Check size={14} className="text-green-400" /> Copied!</> : <><Copy size={14} /> Copy</>}
            </button>
          </div>
          <div className="flex-grow p-6 overflow-auto">
            <pre className={`text-sm font-mono ${error ? 'text-foreground/30' : 'text-purple-300'}`}>
              <code>{outputTs || '// Awaiting valid JSON...'}</code>
            </pre>
          </div>
        </div>
      </div>

      <ParallaxAd />
    </div>
  );
}
