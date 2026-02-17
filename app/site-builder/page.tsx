"use client";
import React, { useState } from 'react';
import { Globe, Palette, Layout, ArrowLeft, ExternalLink, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function SiteBuilder() {
  const [siteData, setSiteData] = useState({
    title: "Amlan's Portfolio",
    bio: "Building the future of finance and personal branding.",
    theme: "blue",
    github: "",
    linkedin: ""
  });

  const themes = {
    blue: "from-blue-600 to-indigo-700",
    dark: "from-slate-800 to-black",
    rose: "from-rose-500 to-pink-600",
    emerald: "from-emerald-500 to-teal-700"
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row">
      
      {/* LEFT: The Editor Panel */}
      <div className="w-full lg:w-[400px] bg-white border-r border-slate-200 p-8 overflow-y-auto h-screen">
        <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-black mb-10 transition-all text-sm font-bold">
          <ArrowLeft size={16} /> BACK TO DASHBOARD
        </Link>

        <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
          <Layout className="text-blue-600" /> Site Editor
        </h2>

        <div className="space-y-6">
          <div>
            <label className="text-xs font-black uppercase text-slate-400 mb-2 block">Website Title</label>
            <input 
              type="text" 
              value={siteData.title}
              onChange={(e) => setSiteData({...siteData, title: e.target.value})}
              className="w-full p-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-black uppercase text-slate-400 mb-2 block">Your Bio</label>
            <textarea 
              value={siteData.bio}
              onChange={(e) => setSiteData({...siteData, bio: e.target.value})}
              className="w-full p-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-blue-500 outline-none h-32"
            />
          </div>

          <div>
            <label className="text-xs font-black uppercase text-slate-400 mb-2 block">Choose Theme</label>
            <div className="grid grid-cols-4 gap-2">
              {Object.keys(themes).map((t) => (
                <button 
                  key={t}
                  onClick={() => setSiteData({...siteData, theme: t})}
                  className={`h-10 rounded-lg border-2 ${siteData.theme === t ? 'border-blue-600' : 'border-transparent'} transition-all`}
                  style={{ background: t === 'dark' ? '#000' : t }}
                />
              ))}
            </div>
          </div>

          <div className="pt-6 border-t">
            <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold hover:shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
              <Globe size={18} /> Publish Website
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT: Live Preview (What the world sees) */}
      <div className="flex-1 bg-slate-200 p-4 md:p-12 flex items-center justify-center overflow-y-auto h-screen">
        <div className="w-full max-w-[800px] bg-white rounded-[2rem] shadow-2xl overflow-hidden min-h-[600px] flex flex-col">
          {/* Header/Hero Section of the Preview */}
          <div className={`h-64 bg-gradient-to-br ${themes[siteData.theme]} p-12 flex flex-col justify-end text-white`}>
            <h1 className="text-5xl font-black tracking-tight">{siteData.title}</h1>
            <p className="opacity-80 text-lg mt-2 font-medium">Personal Brand Website</p>
          </div>

          {/* Content of the Preview */}
          <div className="p-12 space-y-8 flex-1">
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">About Me</h3>
              <p className="text-2xl text-slate-800 leading-snug font-medium">
                {siteData.bio}
              </p>
            </div>

            <div className="flex gap-4">
              <div className="p-4 bg-slate-50 rounded-2xl flex items-center gap-3 border border-slate-100 flex-1">
                <Github size={20} /> <span className="text-sm font-bold">GitHub</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl flex items-center gap-3 border border-slate-100 flex-1">
                <Linkedin size={20} /> <span className="text-sm font-bold">LinkedIn</span>
              </div>
            </div>
          </div>

          <div className="p-8 border-t border-slate-50 text-center text-slate-300 text-xs font-bold uppercase tracking-widest">
            Built with Growth Platform
          </div>
        </div>
      </div>

    </div>
  );
}