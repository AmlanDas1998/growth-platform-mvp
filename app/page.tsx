"use client";
import React from 'react';
import { FileText, Globe, IndianRupee, LayoutDashboard, Settings, User } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  const tools = [
    { 
      title: "CV Builder", 
      desc: "Create a professional resume in minutes.", 
      icon: <FileText className="text-blue-600" />, 
      link: "/cv-builder",
      tag: "Career"
    },
    { 
      title: "Site Builder", 
      desc: "Build your personal brand website.", 
      icon: <Globe className="text-purple-600" />, 
      link: "/site-builder",
      tag: "Brand"
    },
    { 
      title: "SIP & Wealth", 
      desc: "Invest in mutual funds and track growth.", 
      icon: <IndianRupee className="text-emerald-600" />, 
      link: "/investments",
      tag: "Wealth"
    }
  ];

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      
      {/* SIDEBAR: Simple & Clean */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col p-6">
        <div className="font-black text-xl mb-10 flex items-center gap-2">
          <div className="bg-black w-8 h-8 rounded flex items-center justify-center text-white text-xs">G</div>
          GROWTH
        </div>
        
        <nav className="space-y-2 flex-1">
          <button className="w-full flex items-center gap-3 px-4 py-2 bg-slate-100 text-black rounded-lg font-medium text-sm">
            <LayoutDashboard size={18} /> Dashboard
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2 text-slate-500 hover:bg-slate-50 rounded-lg text-sm transition-all">
            <User size={18} /> My Profile
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2 text-slate-500 hover:bg-slate-50 rounded-lg text-sm transition-all">
            <Settings size={18} /> Settings
          </button>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 md:p-12">
        <header className="mb-10 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Welcome, Amlan!</h1>
            <p className="text-slate-500 mt-1">What would you like to build or grow today?</p>
          </div>
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold border border-blue-200">
            AD
          </div>
        </header>

        {/* TOOL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link key={tool.title} href={tool.link}>
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {tool.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-2 py-1 rounded">
                  {tool.tag}
                </span>
                <h2 className="text-xl font-bold mt-4 mb-2 text-slate-900">{tool.title}</h2>
                <p className="text-slate-500 text-sm leading-relaxed">{tool.desc}</p>
                <div className="mt-6 text-sm font-bold text-slate-900 group-hover:text-blue-600 flex items-center gap-1">
                  Launch Tool <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* RECENT ACTIVITY PLACEHOLDER */}
        <div className="mt-12 bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
          <h3 className="font-bold text-lg mb-4">Recent Activity</h3>
          <div className="text-slate-400 text-sm italic text-center py-10 border-2 border-dashed border-slate-50 rounded-xl">
            No recent activity yet. Start building your CV or Portfolio!
          </div>
        </div>
      </main>
    </div>
  );
}