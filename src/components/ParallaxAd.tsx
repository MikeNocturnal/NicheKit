"use client";
import React from 'react';
import Link from 'next/link';

export default function ParallaxAd() {
  // Replace this with your actual affiliate link (e.g. Impact, ShareASale, PartnerStack)
  const affiliateLink = "https://example.com/affiliate-link-here";
  const sponsorName = "Bonsai"; 
  const adHeadline = "Scale Your Freelance Business";
  const adCopy = "Automate your invoicing, contracts, and taxes. Try the #1 toolkit for independent professionals free for 30 days.";

  return (
    <Link 
      href={affiliateLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative w-full h-[250px] my-16 rounded-2xl overflow-hidden glass-panel border border-white/10 shadow-2xl group transition-transform hover:scale-[1.01]"
    >
      {/* Fixed background creates the reveal effect as the user scrolls past the container */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900"
        style={{
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
      </div>
      
      {/* Content stays centered */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-8 text-center bg-black/40 backdrop-blur-sm group-hover:bg-black/50 transition-colors">
        <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-indigo-300 mb-3 border border-white/10 uppercase tracking-widest">
          Sponsored by {sponsorName}
        </span>
        <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-300 transition-colors">{adHeadline}</h3>
        <p className="text-indigo-200 max-w-md text-sm mb-5">{adCopy}</p>
        <span className="px-6 py-2 bg-primary group-hover:bg-blue-400 text-white text-sm font-semibold rounded-lg transition-colors shadow-lg shadow-primary/30">
          Start Free Trial
        </span>
      </div>
    </Link>
  );
}
