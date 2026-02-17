"use client";
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Sparkles, TrendingUp, ShieldCheck, Zap, 
  GraduationCap, PlayCircle, BookOpen, ChevronRight, 
  ChevronLeft, LayoutDashboard, Globe, FileText 
} from 'lucide-react';
import Link from 'next/link';

export default function HomeLanding() {
  const [activeIndex, setActiveIndex] = useState(0);

  // DATA FOR THE DYNAMIC KNOWLEDGE HUB
  const educationTiles = [
    {
      id: 1,
      type: "Academic",
      title: "Bachelor of Commerce",
      subtitle: "XYZ University | Pune",
      description: "Core foundation in Financial Accounting and Business Management.",
      icon: <GraduationCap size={32} className="text-blue-500" />,
      color: "from-blue-500/10 to-indigo-500/10",
      border: "border-blue-200",
      tag: "Degree"
    },
    {
      id: 2,
      type: "Certification",
      title: "NISM Series V-A",
      subtitle: "Mutual Fund Distributors",
      description: "Video course covering regulatory framework and fund analysis.",
      icon: <PlayCircle size={32} className="text-emerald-500" />,
      color: "from-emerald-500/10 to-teal-500/10",
      border: "border-emerald-200",
      tag: "Video Training"
    },
    {
      id: 3,
      type: "Wealth Lab",
      title: "Mutual Fund Mastery",
      subtitle: "Study Materials",
      description: "Comprehensive guides on Equity, Debt, and Hybrid fund growth.",
      icon: <BookOpen size={32} className="text-purple-500" />,
      color: "from-purple-500/10 to-pink-500/10",
      border: "border-purple-200",
      tag: "Study Guide"
    },
    {
      id: 4,
      type: "Strategy",
      title: "Avir Toya Brand",
      subtitle: "Beverage Brand Strategy",
      description: "Materials for scaling a modern cloud kitchen/beverage brand.",
      icon: <Zap size={32} className="text-yellow-500" />,
      color: "from-yellow-500/10 to-orange-500/10",
      border: "border-yellow-200",
      tag: "Venture"
    }
  ];

  // Auto-rotate carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % educationTiles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [educationTiles.length]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      
      {/* --- 1. HERO SECTION --- */}
      <main className="max-w-6xl mx-auto pt-20 pb-32 px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-black text-slate-500 tracking-widest uppercase">
            <Zap size={12} className="text-yellow-500 fill-yellow-500" /> Growth Platform MVP
          </div>
          
          <h1 className="text-6xl md:text-8xl font-medium tracking-tighter max-w-4xl leading-[1]">
            Welcome back, <span className="text-slate-400 font-normal italic">Amlan Das</span>.
          </h1>
          
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            Manage your professional identity, personal brand **Avir Toya**, and wealth growth from your central hub in **Pune**.
          </p>

          <div className="flex flex-col md:flex-row gap-4 pt-4">
            <Link href="/dashboard" className="px-10 py-5 bg-black text-white rounded-full font-bold hover:bg-slate-800 transition-all shadow-2xl flex items-center gap-2 group">
              Open Dashboard <LayoutDashboard size={18} className="group-hover:rotate-12 transition-transform" />
            </Link>
            <Link href="/profile" className="px-10 py-5 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-all">
              Manage Profile
            </Link>
          </div>
        </div>

        {/* --- 2. QUICK STATS / OVERVIEW --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32">
          <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-2xl hover:border-transparent transition-all duration-500">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 transition-transform">
              <FileText size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3">CV Builder</h3>
            <p className="text-slate-500 leading-relaxed text-sm">Craft executive-level resumes optimized for NBFC and Finance sectors.</p>
          </div>

          <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-2xl hover:border-transparent transition-all duration-500">
            <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-8 group-hover:scale-110 transition-transform">
              <Globe size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Site Builder</h3>
            <p className="text-slate-500 leading-relaxed text-sm">Launch your personal brand or beverage portfolio website in minutes.</p>
          </div>

          <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-2xl hover:border-transparent transition-all duration-500">
            <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-8 group-hover:scale-110 transition-transform">
              <TrendingUp size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Wealth Hub</h3>
            <p className="text-slate-500 leading-relaxed text-sm">Calculate 10-year growth and manage Mutual Fund distribution study material.</p>
          </div>
        </div>

        {/* --- 3. DYNAMIC KNOWLEDGE HUB (ROTATING TILES) --- */}
        <section className="mt-48 pb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-4">
                <Sparkles size={16} /> Continuous Learning
              </div>
              <h2 className="text-5xl font-medium tracking-tight mb-4 leading-tight">
                Your Knowledge <span className="text-slate-400">Ecosystem</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                A rotating hub of your **Bachelor of Commerce** degree and ongoing financial expertise.
              </p>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => setActiveIndex((prev) => (prev - 1 + educationTiles.length) % educationTiles.length)}
                className="p-4 rounded-full border border-slate-200 hover:bg-slate-50 transition-all active:scale-90"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => setActiveIndex((prev) => (prev + 1) % educationTiles.length)}
                className="p-4 rounded-full border border-slate-200 hover:bg-slate-50 transition-all active:scale-90"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* THE CAROUSEL CONTAINER */}
          <div className="relative h-[500px] w-full flex items-center justify-center overflow-hidden">
            {educationTiles.map((tile, index) => {
              const isCenter = index === activeIndex;
              const isLeft = index === (activeIndex - 1 + educationTiles.length) % educationTiles.length;
              const isRight = index === (activeIndex + 1) % educationTiles.length;

              let positionClasses = "opacity-0 scale-75 translate-x-0 z-0 pointer-events-none";
              if (isCenter) positionClasses = "opacity-100 scale-100 z-30 translate-x-0";
              if (isLeft) positionClasses = "opacity-40 scale-90 -translate-x-[60%] z-10 blur-[4px] pointer-events-none";
              if (isRight) positionClasses = "opacity-40 scale-90 translate-x-[60%] z-10 blur-[4px] pointer-events-none";

              return (
                <div 
                  key={tile.id}
                  className={`absolute w-full max-w-md p-12 rounded-[4rem] bg-gradient-to-br ${tile.color} border-2 ${tile.border} shadow-2xl backdrop-blur-md transition-all duration-1000 ease-in-out ${positionClasses}`}
                >
                  <div className="flex justify-between items-start mb-10">
                    <div className="p-5 bg-white rounded-3xl shadow-sm">
                      {tile.icon}
                    </div>
                    <span className="px-4 py-2 bg-white/80 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-slate-600 border border-white/50">
                      {tile.tag}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                      {tile.type}
                    </h4>
                    <h3 className="text-4xl font-bold leading-tight text-slate-900">
                      {tile.title}
                    </h3>
                    <p className="text-slate-600 font-bold text-lg">
                      {tile.subtitle}
                    </p>
                    <p className="text-slate-500 text-sm leading-relaxed pt-2">
                      {tile.description}
                    </p>
                  </div>

                  <div className="mt-12 flex items-center gap-2 text-sm font-black text-slate-900 group cursor-pointer hover:gap-4 transition-all uppercase tracking-widest">
                    Access Material <ArrowRight size={18} className="text-blue-600" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* --- 4. FOOTER --- */}
      <footer className="border-t border-slate-100 py-16 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-2 font-black text-xl tracking-tighter opacity-50">
            <div className="bg-black text-white p-1 rounded-md"><Sparkles size={16}/></div>
            GROWTH
          </div>
          <div className="flex gap-12 font-bold text-xs uppercase tracking-widest text-slate-400">
             <Link href="/cv-builder" className="hover:text-black transition-all">CV Builder</Link>
             <Link href="/investments" className="hover:text-black transition-all">Wealth</Link>
             <Link href="/site-builder" className="hover:text-black transition-all">Site Builder</Link>
          </div>
          <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">
            © 2026 AMLAN DAS | PUNE
          </p>
        </div>
      </footer>
    </div>
  );
}