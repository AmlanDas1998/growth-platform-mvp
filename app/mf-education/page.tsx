"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Library, Milestone, BarChart3, ShieldCheck, 
  Wallet, PieChart, Users, ArrowRight, Info,
  TrendingUp, Activity, Boxes
} from 'lucide-react';

export default function MFEducationPage() {
  const [riskProfile, setRiskProfile] = useState<'conservative' | 'balanced' | 'aggressive'>('balanced');

  const fundTypes = [
    { 
      title: "Equity Funds", 
      desc: "Invest primarily in stocks. High growth potential, higher volatility.", 
      icon: <TrendingUp size={24} />, 
      tag: "Growth" 
    },
    { 
      title: "Debt Funds", 
      desc: "Invest in fixed-income securities like bonds. Stable and lower risk.", 
      icon: <ShieldCheck size={24} />, 
      tag: "Stability" 
    },
    { 
      title: "Hybrid Funds", 
      desc: "A mix of equity and debt to balance risk and reward.", 
      icon: <Boxes size={24} />, 
      tag: "Balanced" 
    },
    { 
      title: "Index Funds", 
      desc: "Passively track a market index like the Nifty 50 for low-cost diversification.", 
      icon: <Activity size={24} />, 
      tag: "Passive" 
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-emerald-500/30 pb-32">
      
      {/* --- ACT I: THE POOLED CONCEPT --- */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-white/5 text-[10px] font-black tracking-[0.4em] uppercase text-emerald-400 mb-8">
              <Library size={14} /> The Concept
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none italic uppercase">
              Mutual <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-600">Funds.</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed font-light mt-8 max-w-lg">
              A **Mutual Fund** is a professional investment vehicle that pools money from multiple investors to invest in a diversified portfolio of securities. 
              It allows students in **Pune** to access institutional-grade assets with retail capital.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-8 bg-zinc-900/50 backdrop-blur-3xl rounded-[2.5rem] border border-white/5 space-y-4">
              <Users className="text-emerald-400" size={28} />
              <h3 className="font-black text-xs uppercase tracking-widest">Collective Power</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Small contributions from thousands create a massive investment force.</p>
            </div>
            <div className="p-8 bg-zinc-900/50 backdrop-blur-3xl rounded-[2.5rem] border border-white/5 space-y-4 mt-8">
              <PieChart className="text-cyan-400" size={28} />
              <h3 className="font-black text-xs uppercase tracking-widest">Instant Diversity</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Your single investment is spread across 30-50 different companies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- ACT II: HOW IT WORKS (THE NAV) --- */}
      <section className="py-24 px-6 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-black tracking-tighter italic uppercase">The Anatomy of a Fund</h2>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em]">From NAV to Fund Management</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400"><Wallet size={24} /></div>
              <h3 className="text-xl font-black italic uppercase">1. The Asset Pool</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Investors contribute capital, which is converted into 'units' based on the current **Net Asset Value (NAV)**.</p>
            </div>
            <div className="space-y-6">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400"><Milestone size={24} /></div>
              <h3 className="text-xl font-black italic uppercase">2. Professional Mgmt</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Expert fund managers analyze market data to buy and sell securities, aiming for alpha (market-beating) returns.</p>
            </div>
            <div className="space-y-6">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400"><BarChart3 size={24} /></div>
              <h3 className="text-xl font-black italic uppercase">3. Proportional Gains</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Any dividends or capital gains earned by the fund are distributed back to you based on your units held.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- ACT III: INTERACTIVE RISK LAB --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-emerald-500">
                <ShieldCheck size={20} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Asset Allocation</span>
              </div>
              <h2 className="text-6xl font-black tracking-tighter italic uppercase">Risk Lab.</h2>
            </div>
            <p className="max-w-md text-slate-500 text-sm leading-relaxed font-medium">
              Determine your investment style. Choose a profile to see the ideal boutique portfolio mix for your career stage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Controls */}
            <div className="lg:col-span-4 space-y-4">
              {[
                { id: 'conservative', label: 'Conservative', sub: 'Low risk, steady debt focus' },
                { id: 'balanced', label: 'Balanced', sub: 'The middle path for students' },
                { id: 'aggressive', label: 'Aggressive', sub: 'High equity, long-term wealth' },
              ].map((style) => (
                <button
                  key={style.id}
                  onClick={() => setRiskProfile(style.id as any)}
                  className={`w-full p-8 rounded-[2.5rem] border text-left transition-all ${riskProfile === style.id ? 'bg-white text-black border-white' : 'bg-white/5 text-white border-white/10 hover:border-emerald-500/50'}`}
                >
                  <h4 className="font-black text-sm uppercase tracking-widest">{style.label}</h4>
                  <p className={`text-[10px] mt-1 ${riskProfile === style.id ? 'text-black/60' : 'text-slate-500'}`}>{style.sub}</p>
                </button>
              ))}
            </div>

            {/* Visual Breakdown */}
            <div className="lg:col-span-8 p-12 bg-zinc-900 rounded-[4rem] border border-white/10 min-h-[400px] flex flex-col justify-between">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.5em] text-slate-500 mb-12">
                <Info size={14} /> Portfolio Visualization
              </div>
              
              <div className="space-y-12">
                {/* Equity Bar */}
                <div className="space-y-4">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                    <span>Equity Allocation</span>
                    <span className="text-emerald-400">{riskProfile === 'aggressive' ? '80%' : riskProfile === 'balanced' ? '50%' : '20%'}</span>
                  </div>
                  <div className="h-4 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: riskProfile === 'aggressive' ? '80%' : riskProfile === 'balanced' ? '50%' : '20%' }}
                      className="h-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                    />
                  </div>
                </div>

                {/* Debt Bar */}
                <div className="space-y-4">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                    <span>Debt Allocation</span>
                    <span className="text-cyan-400">{riskProfile === 'aggressive' ? '20%' : riskProfile === 'balanced' ? '50%' : '80%'}</span>
                  </div>
                  <div className="h-4 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: riskProfile === 'aggressive' ? '20%' : riskProfile === 'balanced' ? '50%' : '80%' }}
                      className="h-full bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-white/5 flex items-center justify-between">
                <p className="text-xs text-slate-500 italic">"Based on standard modern portfolio theory."</p>
                <button className="px-10 py-4 bg-emerald-500 text-black rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all">
                  Compare Funds
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ACT IV: FUND TYPES GRID --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fundTypes.map((type) => (
            <div key={type.title} className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all group">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-emerald-400 mb-8 group-hover:scale-110 transition-transform">
                {type.icon}
              </div>
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-500 mb-2 block">{type.tag}</span>
              <h4 className="text-2xl font-black tracking-tighter italic uppercase mb-4">{type.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{type.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}