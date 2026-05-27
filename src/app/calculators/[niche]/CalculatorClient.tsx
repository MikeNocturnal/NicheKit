"use client";

import { useState, useEffect } from 'react';
import ParallaxAd from '@/components/ParallaxAd';

export default function CalculatorClient({ initialData }: { initialData: any }) {
  const [targetIncome, setTargetIncome] = useState(initialData.baseSalary);
  const [annualExpenses, setAnnualExpenses] = useState(5000);
  const [weeksOff, setWeeksOff] = useState(4);
  const [hoursPerWeek, setHoursPerWeek] = useState(30); // Billable hours
  const [taxRate, setTaxRate] = useState(25);
  
  const [hourlyRate, setHourlyRate] = useState(0);

  useEffect(() => {
    const preTaxIncome = targetIncome / (1 - (taxRate / 100));
    const totalGross = preTaxIncome + annualExpenses;
    
    const workingWeeks = 52 - weeksOff;
    const totalBillableHours = workingWeeks * hoursPerWeek;
    
    const rate = totalGross / totalBillableHours;
    setHourlyRate(isNaN(rate) || !isFinite(rate) ? 0 : rate);
  }, [targetIncome, annualExpenses, weeksOff, hoursPerWeek, taxRate]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Inputs */}
      <div className="lg:col-span-2 flex flex-col gap-6">
        <div className="glass-panel p-6 rounded-2xl">
          <h2 className="text-xl font-bold mb-6">Income Goals</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground/80">Target Net Income (Take Home)</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/50">$</span>
                <input 
                  type="number" 
                  value={targetIncome} 
                  onChange={(e) => setTargetIncome(Number(e.target.value))}
                  className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-8 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground/80">Annual Business Expenses</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/50">$</span>
                <input 
                  type="number" 
                  value={annualExpenses} 
                  onChange={(e) => setAnnualExpenses(Number(e.target.value))}
                  className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-8 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <p className="text-xs text-foreground/50 mt-2">
                Typical {initialData.title} expenses: {initialData.expenses.join(', ')}
              </p>
            </div>
          </div>
        </div>
        
        <div className="glass-panel p-6 rounded-2xl">
          <h2 className="text-xl font-bold mb-6">Work Schedule</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground/80">Weeks Off Per Year</label>
              <input 
                type="number" 
                value={weeksOff} 
                onChange={(e) => setWeeksOff(Number(e.target.value))}
                className="w-full bg-black/20 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground/80">Billable Hours / Week</label>
              <input 
                type="number" 
                value={hoursPerWeek} 
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full bg-black/20 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <p className="text-xs text-foreground/50 mt-2">Only count hours you can actually charge for.</p>
            </div>
          </div>
        </div>

        <div className="glass-panel p-6 rounded-2xl">
          <h2 className="text-xl font-bold mb-6">Taxes</h2>
          
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground/80">Estimated Tax Rate (%)</label>
            <div className="relative">
              <input 
                type="number" 
                value={taxRate} 
                onChange={(e) => setTaxRate(Number(e.target.value))}
                className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pr-8 pl-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/50">%</span>
            </div>
          </div>
        </div>
        
        <ParallaxAd />
      </div>

      {/* Results Sticky Sidebar */}
      <div className="lg:col-span-1">
        <div className="sticky top-24 glass-panel p-8 rounded-2xl border border-primary/30 bg-gradient-to-b from-primary/10 to-transparent">
          <h3 className="text-lg font-medium text-foreground/80 mb-2">Your Minimum Hourly Rate</h3>
          <div className="text-6xl font-black text-white mb-8 tracking-tighter">
            ${hourlyRate.toFixed(2)}
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-white/10">
              <span className="text-foreground/60 text-sm">Gross Annual Revenue</span>
              <span className="font-semibold text-white">${((hourlyRate * (52 - weeksOff) * hoursPerWeek)).toFixed(0)}</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-white/10">
              <span className="text-foreground/60 text-sm">Total Taxes</span>
              <span className="font-semibold text-red-400">-${(((targetIncome / (1 - (taxRate / 100))) - targetIncome)).toFixed(0)}</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-white/10">
              <span className="text-foreground/60 text-sm">Total Expenses</span>
              <span className="font-semibold text-red-400">-${annualExpenses}</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-foreground/80 font-medium">Net Take Home</span>
              <span className="font-bold text-green-400">${targetIncome}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
