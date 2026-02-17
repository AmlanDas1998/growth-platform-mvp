"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Sparkles, Globe, Layout, 
  Palette, Type, Save, CheckCircle2 
} from 'lucide-react';
import Link from 'next/link';

// 1. TYPESAFE THEME DEFINITIONS
type ThemeKey = 'blue' | 'dark' | 'rose' | 'emerald';

const themes: Record<ThemeKey, string> = {
  blue: "from-blue-600 to-indigo-700 shadow-blue-500/20",
  dark: "from-slate-800 to-black shadow-slate-500/20",
  rose: "from-rose-500 to-orange-500 shadow-rose-500/20",
  emerald: "from-emerald-500 to-teal-600 shadow-emerald-500/20"
};

export default function SiteBuilderPage() {
  const [siteData, setSiteData] = useState({
    title: "Amlan Das | Professional Profile",
    theme: 'dark' as ThemeKey,
    bio: "Building the future of student finance and professional growth in Pune.",
  });

  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col md:flex-row">
      
      {/* --- SIDEBAR: BOUTIQUE CONTROLS --- */}
      <aside className="w-full md:w-80 bg-zinc-900/50 border-r border-white/10 p-8 flex flex-col gap-10 z-20">
        <Link href="/" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors">
          <ArrowLeft size={14} /> Back to Hub
        </Link>

        <div className="space-y-2">
          <h2 className="text-2xl font-black tracking-tighter italic">SITE BUILDER</h2>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest text-white/50">Student Career Branding</p>
        </div>

        <div className="space-y-6">
          <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-indigo-400">
            <Type size={14} /> Site Title
          </label>
          <input 
            type="text" 
            value={siteData.title}
            onChange={(e) => setSiteData({...siteData, title: e.target.value})}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-cyan-500 outline-none transition-all"
          />
        </div>

        <div className="space-y-6">
          <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-fuchsia-400">
            <Palette size={14} /> Color Palette
          </label>
          <div className="grid grid-cols-2 gap-3">
            {(Object.keys(themes) as ThemeKey[]).map((t) => (
              <button
                key={t}
                onClick={() => setSiteData({...siteData, theme: t})}
                className={`h-12 rounded-xl bg-gradient-to-br ${themes[t]} border-2 transition-all ${siteData.theme === t ? 'border-white scale-105' : 'border-transparent opacity-50 hover:opacity-100'}`}
              />
            ))}
          </div>
        </div>

        <button 
          onClick={handleSave}
          className="mt-auto w-full py-4 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-cyan-500 hover:text-white transition-all"
        >
          {isSaved ? <><CheckCircle2 size={16} /> Saved</> : <><Save size={16} /> Save Changes</>}
        </button>
      </aside>

      {/* --- PREVIEW AREA --- */}
      <main className="flex-1 bg-black relative flex items-center justify-center p-6 md:p-12 overflow-hidden">
        <div className={`absolute inset-0 opacity-20 blur-[150px] bg-gradient-to-br ${themes[siteData.theme]} pointer-events-none`} />

        <motion.div 
          layout
          className="w-full max-w-4xl aspect-video md:aspect-[16/10] bg-zinc-900 rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden flex flex-col relative z-10"
        >
          <div className={`h-1/2 bg-gradient-to-br ${themes[siteData.theme]} p-12 md:p-20 flex flex-col justify-end text-white relative overflow-hidden`}>
            <div className="absolute top-8 right-8 text-[10px] font-black uppercase tracking-[0.4em] opacity-50 flex items-center gap-2">
              <Globe size={12} /> Live Preview
            </div>
            <motion.h1 
              key={siteData.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-5xl md:text-7xl font-black tracking-tighter leading-none"
            >
              {siteData.title}
            </h1>
            <p className="opacity-70 text-sm md:text-lg mt-4 font-medium tracking-wide">Personal Brand Identity</p>
          </div>

          <div className="flex-1 p-12 md:p-20 bg-white text-black flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <Layout size={14} /> Student Biography
              </div>
              <p className="text-xl md:text-3xl font-bold tracking-tight text-slate-800 leading-tight">
                {siteData.bio}
              </p>
            </div>

            <div className="flex items-center gap-6 pt-10 border-t border-slate-100">
              <div className="h-10 w-32 bg-slate-900 rounded-full flex items-center justify-center text-[9px] font-black text-white tracking-widest uppercase shadow-lg shadow-black/20 cursor-pointer">
                Connect
              </div>
              <div className="h-10 w-32 bg-white border border-slate-200 rounded-full flex items-center justify-center text-[9px] font-black text-slate-400 tracking-widest uppercase cursor-pointer">
                Portfolio
              </div>
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-8 right-12 flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
          <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.6em]">Pune Student Ecosystem</span>
        </div>
      </main>
    </div>
  );
}