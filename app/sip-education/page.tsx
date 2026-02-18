"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  History, Target, Layers, Zap, 
  TrendingUp, Clock, ShieldCheck, PieChart,
  Calculator, Info, Landmark
} from 'lucide-react';

// --- TYPES & DATA ---
type ThemeKey = 'blue' | 'dark' | 'rose' | 'emerald';

const themes: Record<ThemeKey, string> = {
  blue: "from-blue-600 to-indigo-700 shadow-blue-500/20",
  dark: "from-slate-800 to-black shadow-slate-500/20",
  rose: "from-rose-500 to-orange-500 shadow-rose-500/20",
  emerald: "from-emerald-500 to-teal-600 shadow-emerald-500/20"
};

export default function SIPEducationPage() {
  // Calculator States
  const [monthlyInvest, setMonthlyInvest] = useState(5000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);
  const [results, setResults] = useState({ totalInvest: 0, estReturns: 0, totalValue: 0 });

  // Calculation Logic: FV = P × [({1 + i}^n - 1) / i] × (1 + i)
  useEffect(() => {
    const i = rate / 12 / 100; // monthly rate
    const n = years * 12; // total months
    const totalValue = monthlyInvest * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    const totalInvest = monthlyInvest * n;
    
    setResults({
      totalInvest: Math.round(totalInvest),
      estReturns: Math.round(totalValue - totalInvest),
      totalValue: Math.round(totalValue)
    });
  }, [monthlyInvest, rate, years]);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-cyan-500/30 pb-32">
      
      {/* --- ACT I: ORIGIN & PHILOSOPHY --- */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-white/5 text-[10px] font-black tracking-[0.4em] uppercase text-cyan-400 mb-8">
              <History size={14} /> The Origin
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none italic uppercase">
              SIP <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Mechanics.</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed font-light mt-8 max-w-lg">
              A **Systematic Investment Plan (SIP)** is a disciplined method of investing a fixed amount regularly into a mutual fund scheme. 
              It is the primary tool for building multi-generational wealth in **Pune**.
            </p>
          </motion.div>
          <div className="bg-zinc-900/50 backdrop-blur-3xl rounded-[3rem] p-12 border border-white/5">
             <div className="flex items-center gap-4 text-cyan-400 mb-6"><Target size={32} /><h3 className="text-2xl font-black italic">Core Goal</h3></div>
             <p className="text-slate-400 leading-relaxed italic text-lg mb-8">"Consistency beats timing every single time."</p>
             <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                <div><h4 className="text-[10px] font-black uppercase text-slate-500 mb-2">Technique</h4><p className="font-bold">Rupee Cost Averaging</p></div>
                <div><h4 className="text-[10px] font-black uppercase text-slate-500 mb-2">Engine</h4><p className="font-bold">Exponential Compounding</p></div>
             </div>
          </div>
        </div>
      </section>

      {/* --- ACT II: HOW IT WORKS --- */}
      <section className="py-24 px-6 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-black tracking-tighter italic uppercase italic">The Growth Engine</h2>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em]">Strategic Wealth Building</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Monthly Discipline", detail: "Automatic deductions ensure your investment happens before your lifestyle expenses." },
              { step: "02", title: "Cost Averaging", detail: "Buy more units when prices dip, lowering your average cost per unit over time." },
              { step: "03", title: "Wealth Snowball", detail: "Reinvested returns begin earning their own returns, creating exponential growth." }
            ].map((item) => (
              <div key={item.step} className="p-10 rounded-[3rem] bg-black border border-white/10 hover:border-cyan-500/50 transition-all group">
                <span className="text-6xl font-black text-white/5 group-hover:text-cyan-500/20 transition-colors block mb-6 italic">{item.step}</span>
                <h3 className="text-xl font-black mb-4 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ACT III: INTERACTIVE CALCULATOR --- */}
      <section id="calculator" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-fuchsia-500">
                <Calculator size={20} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Precision Tools</span>
              </div>
              <h2 className="text-6xl font-black tracking-tighter italic uppercase italic">Wealth Lab.</h2>
            </div>
            <p className="max-w-md text-slate-500 text-sm leading-relaxed font-medium">
              Project your financial future. Adjust the parameters to see how small monthly changes impact your terminal value.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Input Controls */}
            <div className="lg:col-span-5 space-y-12 bg-white/5 backdrop-blur-3xl p-10 md:p-14 rounded-[4rem] border border-white/10">
              {/* Slider: Monthly Investment */}
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Monthly Investment</label>
                  <span className="text-2xl font-black text-cyan-400 italic">₹{monthlyInvest.toLocaleString()}</span>
                </div>
                <input 
                  type="range" min="500" max="100000" step="500" 
                  value={monthlyInvest} onChange={(e) => setMonthlyInvest(Number(e.target.value))}
                  className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
              </div>

              {/* Slider: Return Rate */}
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Expected Return (p.a.)</label>
                  <span className="text-2xl font-black text-fuchsia-500 italic">{rate}%</span>
                </div>
                <input 
                  type="range" min="1" max="30" step="0.5" 
                  value={rate} onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-fuchsia-500"
                />
              </div>

              {/* Slider: Time Period */}
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Time Period</label>
                  <span className="text-2xl font-black text-indigo-400 italic">{years} Years</span>
                </div>
                <input 
                  type="range" min="1" max="40" 
                  value={years} onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
              </div>
            </div>

            {/* Visual Results */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-10 rounded-[3.5rem] bg-zinc-900 border border-white/5 flex flex-col justify-between">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Total Invested</h4>
                  <p className="text-4xl font-black tracking-tight italic">₹{results.totalInvest.toLocaleString()}</p>
                </div>
                <div className="pt-8 border-t border-white/5 mt-8">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Est. Returns</h4>
                  <p className="text-4xl font-black tracking-tight text-emerald-400 italic">+ ₹{results.estReturns.toLocaleString()}</p>
                </div>
              </div>

              <div className="p-10 rounded-[3.5rem] bg-gradient-to-br from-cyan-600 to-blue-800 border border-white/10 flex flex-col justify-center items-center text-center space-y-6 shadow-2xl">
                 <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md mb-4">
                    <TrendingUp size={32} className="text-white" />
                 </div>
                 <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-100">Total Value</h4>
                 <p className="text-5xl font-black tracking-tighter italic">₹{results.totalValue.toLocaleString()}</p>
                 <button className="px-8 py-3 bg-white text-black rounded-full font-black text-[9px] uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                    Start Investing
                 </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ACT IV: BOUTIQUE FOOTER --- */}
      <footer className="max-w-7xl mx-auto px-6 pt-32 grid grid-cols-1 md:grid-cols-3 gap-20 border-t border-white/5 opacity-60">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xl font-black tracking-tighter italic uppercase">
            <Zap size={18} className="text-cyan-400" /> Amlan Das Platform
          </div>
          <p className="text-xs text-slate-500 leading-relaxed font-medium">Boutique wealth engineering and professional growth for the modern student in Pune.</p>
        </div>
        <div className="space-y-6">
          <h5 className="text-[10px] font-black uppercase tracking-widest text-indigo-400">The Mission</h5>
          <p className="text-xs text-slate-500 leading-relaxed">Bridging the gap between institutional education and professional financial mastery.</p>
        </div>
        <div className="space-y-6">
           <h5 className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Support</h5>
           <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Calculations based on 100% equity model. Actual returns may vary.</p>
        </div>
      </footer>

    </div>
  );
}