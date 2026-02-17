"use client";
import React from 'react';
import { FileText, Globe, IndianRupee, ArrowRight, Sparkles, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function ToolDashboard() {
  const tools = [
    { 
      title: "Executive CV Builder", 
      desc: "Create your NBFC-standard finance resume.", 
      icon: <FileText className="text-blue-600" />, 
      link: "/cv-builder",
      color: "hover:border-blue-500",
      tag: "Career"
    },
    { 
      title: "Personal Site Builder", 
      desc: "Build your brand website in Pune.", 
      icon: <Globe className="text-purple-600" />, 
      link: "/site-builder",
      color: "hover:border-purple-500",
      tag: "Branding"
    },
    { 
      title: "SIP Wealth Estimator", 
      desc: "Calculate your 10-year growth projections.", 
      icon: <IndianRupee className="text-emerald-600" />, 
      link: "/investments",
      color: "hover:border-emerald-500",
      tag: "Finance"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        
        {/* WELCOME HEADER */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest mb-3">
            <Sparkles size={14} /> Growth Platform Dashboard
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-2">
            Hello, Amlan Das
          </h1>
          <p className="text-slate-500 text-lg">
            Ready to build your brand or manage your wealth in Pune today?
          </p>
        </header>

        {/* THE TOOL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <Link key={tool.title} href={tool.link}>
              <div className={`bg-white p-8 rounded-[2.5rem] border-2 border-transparent shadow-sm ${tool.color} transition-all cursor-pointer group flex flex-col h-full hover:shadow-2xl`}>
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {tool.icon}
                </div>
                
                <div className="flex-1">
                  <span className="text-[10px] font-black uppercase tracking-tighter text-slate-400 mb-2 block">
                    {tool.tag}
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">
                    {tool.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {tool.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-50 flex justify-between items-center text-sm font-bold text-slate-900 group-hover:text-blue-600">
                  <span>Launch Module</span>
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* PROGRESS CARD */}
        <div className="mt-12 bg-black rounded-[3rem] p-10 text-white flex flex-col md:flex-row justify-between items-center overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">Complete your Profile</h3>
            <p className="text-slate-400 max-w-sm">Users with a completed LinkedIn URL and Pune-based location see 40% more engagement.</p>
          </div>
          <button className="relative z-10 mt-6 md:mt-0 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-slate-100 transition-all flex items-center gap-2">
            Update Now <ArrowRight size={18} />
          </button>
          
          {/* Abstract background shape */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20"></div>
        </div>

      </div>
    </div>
  );
}