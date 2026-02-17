"use client";
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Sparkles, TrendingUp, ShieldCheck, Zap, 
  GraduationCap, PlayCircle, BookOpen, ChevronRight, 
  ChevronLeft, LayoutDashboard, Globe, FileText, ExternalLink 
} from 'lucide-react';
import Link from 'next/link';

export default function HomeLanding() {
  const [activeIndex, setActiveIndex] = useState(0);

  const educationTiles = [
    {
      id: 1,
      type: "Professional Growth",
      title: "Upskilling & Certifications",
      subtitle: "NISM, Credit & Tech Courses",
      description: "Access curated links and resources to advance your professional credentials.",
      icon: <AwardIcon size={32} className="text-blue-500" />,
      color: "from-blue-500/10 to-indigo-500/10",
      border: "border-blue-200",
      link: "/upskilling",
      tag: "Career"
    },
    {
      id: 2,
      type: "Investment Education",
      title: "SIP Learning Module",
      subtitle: "Wealth Creation Strategies",
      description: "Master the art of Systematic Investment Plans for long-term growth.",
      icon: <TrendingUp size={32} className="text-emerald-500" />,
      color: "from-emerald-500/10 to-teal-500/10",
      border: "border-emerald-200",
      link: "/sip-education",
      tag: "Wealth"
    },
    {
      id: 3,
      type: "Market Expertise",
      title: "Mutual Fund Essentials",
      subtitle: "Industry Study Material",
      description: "Deep dive into fund types, risk management, and regulatory frameworks.",
      icon: <BookOpen size={32} className="text-purple-500" />,
      color: "from-purple-500/10 to-pink-500/10",
      border: "border-purple-200",
      link: "/mf-education",
      tag: "Finance"
    },
    {
      id: 4,
      type: "Multimedia Learning",
      title: "Certification Academy",
      subtitle: "Video Library",
      description: "Watch in-depth certification videos and brand strategy masterclasses.",
      icon: <PlayCircle size={32} className="text-red-500" />,
      color: "from-red-500/10 to-orange-500/10",
      border: "border-red-200",
      link: "/video-library",
      tag: "Video"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % educationTiles.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [educationTiles.length]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      
      {/* HERO SECTION */}
      <main className="max-w-6xl mx-auto pt-20 pb-24 px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-black text-slate-500 tracking-widest uppercase">
            <Zap size={12} className="text-yellow-500 fill-yellow-500" /> Platform MVP
          </div>
          
          <h1 className="text-6xl md:text-8xl font-medium tracking-tighter max-w-4xl leading-[1]">
            Welcome back, <span className="text-slate-400 font-normal italic">Amlan Das</span>.
          </h1>
          
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            Your central hub for professional branding and wealth management in **Pune**.
          </p>

          <div className="flex gap-4 pt-4">
            <Link href="/dashboard" className="px-10 py-5 bg-black text-white rounded-full font-bold hover:shadow-2xl transition-all flex items-center gap-2 group">
              Dashboard <LayoutDashboard size={18} className="group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>

        {/* KNOWLEDGE HUB SECTION */}
        <section className="mt-40">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-5xl font-medium tracking-tight mb-4">
                Knowledge <span className="text-slate-400">Ecosystem</span>
              </h2>
              <p className="text-lg text-slate-500">
                A dynamic workspace designed for your academic and financial growth.
              </p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setActiveIndex((prev) => (prev - 1 + educationTiles.length) % educationTiles.length)} className="p-4 rounded-full border border-slate-100 hover:bg-slate-50"><ChevronLeft size={20}/></button>
              <button onClick={() => setActiveIndex((prev) => (prev + 1) % educationTiles.length)} className="p-4 rounded-full border border-slate-100 hover:bg-slate-50"><ChevronRight size={20}/></button>
            </div>
          </div>

          <div className="relative h-[480px] w-full flex items-center justify-center overflow-hidden">
            {educationTiles.map((tile, index) => {
              const isCenter = index === activeIndex;
              const isLeft = index === (activeIndex - 1 + educationTiles.length) % educationTiles.length;
              const isRight = index === (activeIndex + 1) % educationTiles.length;

              let pos = "opacity-0 scale-75 translate-x-0 z-0 pointer-events-none";
              if (isCenter) pos = "opacity-100 scale-100 z-30 translate-x-0";
              if (isLeft) pos = "opacity-40 scale-90 -translate-x-[65%] z-10 blur-[2px]";
              if (isRight) pos = "opacity-40 scale-90 translate-x-[65%] z-10 blur-[2px]";

              return (
                <Link 
                  key={tile.id}
                  href={tile.link}
                  className={`absolute w-full max-w-md p-10 rounded-[3.5rem] bg-gradient-to-br ${tile.color} border-2 ${tile.border} shadow-2xl transition-all duration-700 ease-in-out cursor-pointer group ${pos}`}
                >
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-5 bg-white rounded-3xl shadow-sm group-hover:scale-110 transition-transform">
                      {tile.icon}
                    </div>
                    <span className="px-4 py-1.5 bg-white/80 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-400">
                      {tile.tag}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{tile.type}</h4>
                    <h3 className="text-3xl font-bold leading-tight text-slate-900">{tile.title}</h3>
                    <p className="text-slate-600 font-medium">{tile.subtitle}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{tile.description}</p>
                  </div>

                  <div className="mt-10 flex items-center gap-2 text-sm font-black text-slate-900 group-hover:gap-4 transition-all uppercase tracking-widest">
                    Enter Section <ArrowRight size={18} />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-50 py-12 opacity-50 grayscale">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em]">
          <span>Amlan Das</span>
          <span>Pune, India</span>
          <span>© 2026 Growth Platform</span>
        </div>
      </footer>
    </div>
  );
}

function AwardIcon({ size, className }: { size: number; className?: string }) {
  return <Sparkles size={size} className={className} />;
}