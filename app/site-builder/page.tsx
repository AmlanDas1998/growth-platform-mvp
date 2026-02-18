"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, Palette, Save, CheckCircle2, Monitor, Smartphone, 
  Plus, Trash2, Zap, Rocket, Target, Briefcase, GraduationCap, 
  Brain, MessageSquare, Mail, Linkedin, FileText, ExternalLink,
  Globe, User, Quote, ShieldCheck, Download, ChevronRight, Play, Star, Hash
} from 'lucide-react';
import Link from 'next/link';

// --- THEME ENGINE ---
type TemplateId = 'executive' | 'tech' | 'creative';
type PaletteId = 'classic' | 'modern' | 'executive' | 'tech' | 'rose';

const accentColors: Record<PaletteId, string> = {
  classic: 'text-slate-600 border-slate-600 bg-slate-900',
  modern: 'text-emerald-500 border-emerald-500 bg-emerald-500',
  executive: 'text-blue-700 border-blue-700 bg-blue-700',
  tech: 'text-cyan-400 border-cyan-400 bg-cyan-500',
  rose: 'text-rose-500 border-rose-500 bg-rose-500'
};

export default function SiteBuilderPage() {
  const [template, setTemplate] = useState<TemplateId>('executive');
  const [palette, setPalette] = useState<PaletteId>('executive');
  const [view, setView] = useState<'desktop' | 'mobile'>('desktop');
  const [isSaved, setIsSaved] = useState(false);
  const accent = accentColors[palette];

  const [siteData, setSiteData] = useState({
    hero: { name: "Amlan Das", title: "Strategy & Operations Lead", value: "Building scalable financial ecosystems for the next generation." },
    about: { header: "About Me", sub: "Professional Profile", bio: "Experienced professional with a focus on delivering impactful results in NBFC operations and credit strategy." },
    impact: [{ label: "Revenue Managed", val: "$10M+" }, { label: "Growth YoY", val: "35%" }, { label: "Teams Led", val: "4" }],
    skills: [{ cat: "Core", val: "Strategic Planning" }, { cat: "Tech", val: "Financial Modeling" }, { cat: "Tools", val: "Tableau, Excel" }],
    experience: [{ role: "Founder", org: "Avir Toya", time: "2025-Present", desc: "Leading a boutique career platform." }],
    projects: [{ name: "Market Expansion", outcome: "Captured 15% market share in Q3." }],
    insights: [{ title: "The Future of Fintech in Pune", link: "#" }],
    testimonials: [{ quote: "An absolute leader in strategy.", author: "VP, Finance" }],
    education: [{ degree: "MBA Finance", school: "Pune University", year: "2021" }],
    resume: { header: "Resume", sub: "Download CV", cta: "Download PDF" },
    contact: { header: "Contact", sub: "Let's Connect", email: "amlan@avirtoya.com" },
    footer: { tagline: "Building with Precision", social: "LinkedIn" }
  });

  const handleUpdate = (section: string, field: string, value: any) => {
    setSiteData({ ...siteData, [section]: { ...(siteData as any)[section], [field]: value } });
  };
  const addListItem = (section: string, templateObj: any) => {
    setSiteData({ ...siteData, [section]: [...(siteData as any)[section], templateObj] });
  };
  const removeListItem = (section: string, index: number) => {
    const newList = [...(siteData as any)[section]];
    newList.splice(index, 1);
    setSiteData({ ...siteData, [section]: newList });
  };
  const updateListItem = (section: string, index: number, field: string, value: any) => {
    const newList = [...(siteData as any)[section]];
    newList[index] = { ...newList[index], [field]: value };
    setSiteData({ ...siteData, [section]: newList });
  };

  const ExecutiveTemplate = () => (
    <div className="bg-white text-slate-800 font-sans min-h-full">
      <section className="p-12 md:p-24 border-b border-slate-100 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-tight">{siteData.hero.name}</h1>
          <p className={`text-xl font-medium ${accent.split(' ')[0]}`}>{siteData.hero.title}</p>
          <p className="text-slate-500 max-w-md leading-relaxed">{siteData.hero.value}</p>
          <div className="pt-4 flex gap-4">
            <button className={`px-8 py-3 bg-slate-900 text-white text-sm font-bold tracking-widest uppercase`}>View Work</button>
          </div>
        </div>
        <div className="w-32 h-32 md:w-48 md:h-48 bg-slate-100 rounded-full flex items-center justify-center text-slate-300">
          <User size={48} />
        </div>
      </section>
      {/* 2. ABOUT & 3. IMPACT */}
      <section className="p-12 md:p-24 border-b border-slate-100 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-7 space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">{siteData.about.header}</h3>
          <p className="text-lg leading-relaxed text-slate-700">{siteData.about.bio}</p>
        </div>
        <div className="md:col-span-5 grid grid-cols-1 gap-4">
          {siteData.impact.map((i, idx) => (
            <div key={idx} className="p-6 border border-slate-200 bg-slate-50 flex justify-between items-center">
              <span className="text-xs font-bold uppercase text-slate-500">{i.label}</span>
              <span className={`text-2xl font-serif font-bold ${accent.split(' ')[0]}`}>{i.val}</span>
            </div>
          ))}
        </div>
      </section>
      {/* 4. SKILLS & 5. EXPERIENCE */}
      <section className="p-12 md:p-24 border-b border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">Core Competencies</h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {siteData.skills.map((s, i) => (
              <div key={i} className="border-b border-slate-100 pb-2">
                <p className="text-xs text-slate-400 mb-1">{s.cat}</p>
                <p className="font-medium text-slate-800">{s.val}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">Professional History</h3>
          <div className="space-y-8 border-l-2 border-slate-100 pl-8 ml-2">
            {siteData.experience.map((e, i) => (
              <div key={i} className="relative">
                <div className={`absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-white ${accent.split(' ')[2]}`} />
                <h4 className="text-xl font-bold text-slate-900">{e.role}</h4>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mt-1 mb-2">{e.org} | {e.time}</p>
                <p className="text-slate-600 text-sm max-w-sm">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 6. PROJECTS & 7. INSIGHTS */}
      <section className="p-12 md:p-24 border-b border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">Selected Projects</h3>
          <div className="grid gap-6">
            {siteData.projects.map((p, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[3/1] bg-slate-100 mb-3" />
                <h4 className="text-lg font-bold group-hover:underline">{p.name}</h4>
                <p className="text-sm text-slate-500">{p.outcome}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">{siteData.insights.header}</h3>
          <div className="space-y-4">
            {siteData.insights.map((ins, i) => (
              <div key={i} className="flex items-center justify-between py-4 border-b border-slate-100">
                <span className="font-serif font-medium text-lg">{ins.title}</span>
                <ArrowLeft className="rotate-135 text-slate-300" size={16} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 8. TESTIMONIALS & 9. EDUCATION */}
      <section className="p-12 md:p-24 border-b border-slate-100 bg-slate-50/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
           <div className="bg-white p-8 border border-slate-100 shadow-sm">
             <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">{siteData.testimonials.header}</h3>
             {siteData.testimonials.map((t, i) => (
               <div key={i}>
                 <p className="text-xl font-serif italic text-slate-700">"{t.quote}"</p>
                 <p className="text-xs font-bold uppercase mt-4 text-slate-400">— {t.author}</p>
               </div>
             ))}
           </div>
           <div>
             <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Credentials</h3>
             {siteData.education.map((edu, i) => (
               <div key={i} className="flex justify-between items-end border-b border-slate-200 pb-2 mb-4">
                 <div>
                   <h4 className="font-bold text-slate-900">{edu.school}</h4>
                   <p className="text-sm text-slate-500">{edu.degree}</p>
                 </div>
                 <span className="text-xs font-bold text-slate-400">{edu.year}</span>
               </div>
             ))}
           </div>
        </div>
      </section>
      {/* 10. RESUME, 11. CONTACT & 12. FOOTER */}
      <section className="p-12 md:p-24 bg-slate-50 text-center space-y-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-serif font-bold text-slate-900">{siteData.contact.header}</h2>
          <p className="text-slate-500">{siteData.contact.sub}</p>
          <button className={`px-10 py-4 ${accent.split(' ')[2]} text-white font-bold tracking-widest uppercase`}>
            {siteData.contact.email}
          </button>
        </div>
        <footer className="pt-12 border-t border-slate-200 flex justify-between text-xs text-slate-400 uppercase tracking-widest">
          <span>{siteData.footer.tagline}</span>
          <span>© 2026 {siteData.hero.name}</span>
        </footer>
      </section>
    </div>
  );

  const TechTemplate = () => (
    <div className="bg-slate-950 text-white font-sans min-h-full selection:bg-cyan-500 selection:text-black">
      <section className="p-12 md:p-32 text-center min-h-[80vh] flex flex-col justify-center items-center relative overflow-hidden">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-20 blur-[100px] rounded-full ${accent.split(' ')[2]}`} />
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase mb-6 bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent relative z-10">{siteData.hero.name}</h1>
        <p className={`text-xl font-bold tracking-widest uppercase mb-8 ${accent.split(' ')[0]}`}>{siteData.hero.title}</p>
        <p className="text-slate-400 max-w-xl mb-12">{siteData.hero.value}</p>
        <button className={`px-12 py-4 rounded-full border ${accent.split(' ')[1]} ${accent.split(' ')[0]} font-black uppercase hover:bg-white hover:text-black transition-all`}>Initialize</button>
      </section>
      <section className="p-12 md:p-24 border-t border-white/5">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
               <h3 className={`text-2xl font-black uppercase mb-4 ${accent.split(' ')[0]}`}>{siteData.about.header}</h3>
               <p className="text-lg text-slate-300 leading-relaxed">{siteData.about.bio}</p>
            </div>
            <div className="grid grid-cols-1 gap-4">
               {siteData.impact.map((i, idx) => (
                 <div key={idx} className={`p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:border-${accent.split('-')[1]}-400 transition-colors flex items-center justify-between`}>
                   <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{i.label}</span>
                   <h3 className={`text-3xl font-black italic ${accent.split(' ')[0]}`}>{i.val}</h3>
                 </div>
               ))}
            </div>
         </div>
      </section>
      <section className="p-12 md:p-24 grid grid-cols-1 md:grid-cols-2 gap-20 border-t border-white/5">
        <div>
          <h3 className="text-2xl font-black uppercase mb-8 flex items-center gap-3"><Zap size={24} className={accent.split(' ')[0]}/> Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {siteData.skills.map((s, i) => (
              <span key={i} className="px-4 py-2 bg-white/5 rounded-lg border border-white/5 text-sm font-bold hover:bg-white/10 cursor-default">
                {s.val}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-black uppercase mb-8">System Logs</h3>
          <div className="space-y-6">
            {siteData.experience.map((e, i) => (
              <div key={i} className="p-6 bg-white/5 border-l-4 border-slate-700 hover:border-white transition-all">
                <div className="flex justify-between items-end mb-2">
                  <h4 className="text-xl font-bold">{e.role}</h4>
                  <span className={`text-xs font-mono ${accent.split(' ')[0]}`}>{e.time}</span>
                </div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">{e.org}</p>
                <p className="text-sm text-slate-400">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="p-12 md:p-24 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           <div>
              <h3 className="text-4xl font-black uppercase mb-12">Deployments</h3>
              <div className="space-y-6">
                {siteData.projects.map((p, i) => (
                  <div key={i} className="group relative bg-slate-900 rounded-3xl border border-white/5 p-8 hover:bg-white/5 transition-all">
                    <h4 className="text-2xl font-black uppercase italic mb-2 group-hover:text-cyan-400">{p.name}</h4>
                    <p className="text-sm text-slate-300">{p.outcome}</p>
                  </div>
                ))}
              </div>
           </div>
           <div>
              <h3 className="text-4xl font-black uppercase mb-12">Data Stream</h3>
              <div className="space-y-4">
                 {siteData.insights.map((ins, i) => (
                   <div key={i} className="p-6 border border-white/10 rounded-2xl flex justify-between items-center hover:bg-white/5 cursor-pointer">
                      <span className="font-bold text-lg">{ins.title}</span>
                      <ExternalLink size={16} className={accent.split(' ')[0]}/>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>
      <section className="p-12 md:p-24 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-12">
         <div className="p-8 bg-gradient-to-br from-white/10 to-transparent rounded-3xl border border-white/5">
            <Quote size={30} className={`mb-4 ${accent.split(' ')[0]}`}/>
            {siteData.testimonials.map((t, i) => (
               <div key={i}><p className="text-xl font-bold italic mb-4">"{t.quote}"</p><p className="text-xs uppercase tracking-widest text-slate-500">{t.author}</p></div>
            ))}
         </div>
         <div className="space-y-6">
            <h3 className="text-xl font-black uppercase">Credentials</h3>
            {siteData.education.map((edu, i) => (
               <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                  <ShieldCheck size={24} className={accent.split(' ')[0]}/>
                  <div><h4 className="font-bold">{edu.school}</h4><p className="text-xs text-slate-400">{edu.degree} | {edu.year}</p></div>
               </div>
            ))}
         </div>
      </section>
      <section className="p-12 md:p-32 text-center border-t border-white/5 bg-black">
        <div className="max-w-2xl mx-auto p-12 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl">
          <h2 className="text-4xl font-black uppercase mb-6">{siteData.contact.header}</h2>
          <p className="text-slate-400 mb-8">{siteData.contact.sub}</p>
          <div className="flex flex-col gap-4">
            <button className={`w-full py-4 rounded-xl font-black uppercase ${accent.split(' ')[2]} text-black`}>{siteData.contact.email}</button>
            <button className="w-full py-4 rounded-xl font-black uppercase border border-white/20 hover:bg-white/10">{siteData.resume.cta}</button>
          </div>
        </div>
        <footer className="mt-20 pt-8 border-t border-white/10 flex justify-between text-[10px] uppercase tracking-widest text-slate-600">
           <span>{siteData.footer.tagline}</span><span>{siteData.footer.social}</span>
        </footer>
      </section>
    </div>
  );

  const CreativeTemplate = () => (
    <div className="bg-[#fdfbf7] text-stone-800 font-sans min-h-full">
      <section className="p-12 md:p-32 text-center min-h-[70vh] flex flex-col justify-center items-center">
        <h1 className="text-6xl md:text-8xl font-serif font-medium text-stone-900 mb-6">{siteData.hero.name}</h1>
        <div className={`h-1 w-24 ${accent.split(' ')[2]} opacity-40 mb-8`} />
        <p className="text-xl text-stone-600 italic font-serif max-w-2xl">{siteData.hero.title}</p>
        <p className="mt-6 text-stone-500">{siteData.hero.value}</p>
      </section>
      <section className="p-12 md:p-24 bg-white border-y border-stone-100">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-stone-400">{siteData.about.header}</h3>
          <p className="text-2xl md:text-3xl font-serif leading-relaxed text-stone-800">"{siteData.about.bio}"</p>
          <div className="flex flex-wrap justify-center gap-12 pt-8 border-t border-stone-100 mt-8">
            {siteData.impact.map((i, idx) => (
              <div key={idx} className="text-center">
                <span className={`block text-4xl font-serif mb-2 ${accent.split(' ')[0]}`}>{i.val}</span>
                <span className="text-xs uppercase tracking-widest text-stone-400">{i.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="p-12 md:p-24 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
        <div>
           <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-stone-400 mb-8">Expertise</h3>
           <div className="space-y-6">
             {siteData.skills.map((s, i) => (
               <div key={i}><p className="font-serif text-xl italic text-stone-700">{s.val}</p><p className="text-xs text-stone-400 uppercase tracking-wide">{s.cat}</p></div>
             ))}
           </div>
        </div>
        <div>
           <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-stone-400 mb-8">Journey</h3>
           <div className="space-y-12">
             {siteData.experience.map((e, i) => (
               <div key={i}>
                 <h4 className="text-2xl font-serif text-stone-900 mb-1">{e.role}</h4>
                 <p className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">{e.org} | {e.time}</p>
                 <p className="text-stone-600 leading-relaxed text-sm">{e.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>
      <section className="p-12 md:p-24 bg-[#f4f1ea]">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-center text-sm font-bold uppercase tracking-[0.3em] text-stone-400 mb-16">Work & Thoughts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
               {siteData.projects.map((p, i) => (
                 <div key={i} className="bg-white p-8 shadow-sm">
                   <h4 className="text-xl font-serif mb-2">{p.name}</h4>
                   <p className="text-stone-500 text-sm leading-relaxed">{p.outcome}</p>
                 </div>
               ))}
            </div>
            <div className="space-y-8">
               {siteData.insights.map((ins, i) => (
                 <div key={i} className="bg-white p-8 shadow-sm border-l-4 border-stone-300">
                    <h4 className="font-bold text-stone-800 mb-2">{ins.title}</h4>
                    <span className={`text-xs font-bold uppercase tracking-widest ${accent.split(' ')[0]}`}>Read Article</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>
      <section className="p-12 md:p-24 border-b border-stone-200">
         <div className="max-w-4xl mx-auto text-center space-y-12">
            {siteData.testimonials.map((t, i) => (
               <div key={i}><p className="text-3xl font-serif italic text-stone-400">"{t.quote}"</p><p className="mt-4 font-bold text-stone-800">— {t.author}</p></div>
            ))}
            <div className="pt-12 border-t border-stone-200 grid grid-cols-1 gap-4">
               {siteData.education.map((edu, i) => (
                  <div key={i} className="text-stone-500 text-sm uppercase tracking-widest">{edu.degree} • {edu.school} • {edu.year}</div>
               ))}
            </div>
         </div>
      </section>
      <section className="p-12 md:p-32 text-center">
        <h2 className="text-5xl font-serif mb-8 text-stone-900">{siteData.contact.header}</h2>
        <p className="text-stone-500 mb-12">{siteData.contact.sub}</p>
        <div className="flex justify-center gap-6">
           <button className={`px-10 py-4 ${accent.split(' ')[2]} text-white font-bold tracking-widest uppercase rounded`}>{siteData.contact.email}</button>
           <button className="px-10 py-4 border border-stone-300 text-stone-600 font-bold tracking-widest uppercase rounded hover:bg-stone-100">{siteData.resume.cta}</button>
        </div>
        <footer className="mt-32 pt-8 border-t border-stone-200 text-xs text-stone-400 uppercase tracking-widest flex justify-between px-12">
          <span>{siteData.footer.tagline}</span><span>{siteData.footer.social}</span>
        </footer>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-28 pb-10 px-6 font-sans">
      <div className="max-w-[1900px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 h-[calc(100vh-140px)]">
        
        {/* --- LEFT: SCROLLABLE EDITOR SIDEBAR --- */}
        <div className="lg:col-span-4 flex flex-col gap-6 overflow-hidden">
          <div className="flex items-center justify-between bg-zinc-900 p-2 rounded-2xl border border-white/5">
            <Link href="/dashboard" className="flex items-center gap-2 text-[10px] font-black uppercase text-zinc-500 hover:text-white px-4">
              <ArrowLeft size={14} /> Hub
            </Link>
            <div className="flex bg-black p-1 rounded-xl border border-white/10">
              <button onClick={() => setTemplate('executive')} className={`px-4 py-2 rounded-lg text-[9px] font-black uppercase transition-all ${template === 'executive' ? 'bg-white text-black' : 'text-zinc-600'}`}>Exec</button>
              <button onClick={() => setTemplate('tech')} className={`px-4 py-2 rounded-lg text-[9px] font-black uppercase transition-all ${template === 'tech' ? 'bg-white text-black' : 'text-zinc-600'}`}>Tech</button>
              <button onClick={() => setTemplate('creative')} className={`px-4 py-2 rounded-lg text-[9px] font-black uppercase transition-all ${template === 'creative' ? 'bg-white text-black' : 'text-zinc-600'}`}>Soft</button>
            </div>
            <div className="flex bg-black p-1 rounded-xl border border-white/10">
              <button onClick={() => setView('desktop')} className={`p-2 rounded-lg ${view === 'desktop' ? 'bg-zinc-800 text-white' : 'text-zinc-600'}`}><Monitor size={14}/></button>
              <button onClick={() => setView('mobile')} className={`p-2 rounded-lg ${view === 'mobile' ? 'bg-zinc-800 text-white' : 'text-zinc-600'}`}><Smartphone size={14}/></button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto pr-2 space-y-6 custom-scrollbar">
            {/* Color Palette */}
            <div className="bg-zinc-900 border border-white/10 p-6 rounded-[2rem]">
               <p className="text-[9px] font-black uppercase tracking-widest text-zinc-500 mb-4 flex items-center gap-2"><Palette size={12}/> Color Engine</p>
               <div className="flex justify-between">
                 {(Object.keys(accentColors) as PaletteId[]).map((p) => (
                   <button key={p} onClick={() => setPalette(p)} className={`w-10 h-10 rounded-xl border-2 transition-all ${palette === p ? 'border-white scale-110' : 'border-transparent opacity-40 bg-zinc-800'}`}>
                     <div className={`w-5 h-5 rounded-md ${accentColors[p].split(' ')[2]}`} />
                   </button>
                 ))}
               </div>
            </div>

            {/* 12 SECTIONS EDITOR */}
            <div className="bg-zinc-900 border border-white/10 rounded-[2rem] p-8 space-y-10">
              
              {/* 1. HERO */}
              <div className="space-y-4">
                <h3 className="text-xs font-black uppercase text-cyan-400">1. Hero Identity</h3>
                <input value={siteData.hero.name} onChange={(e)=>handleUpdate('hero','name',e.target.value)} placeholder="Full Name" className="w-full bg-black border border-white/10 rounded-xl p-4 text-sm" />
                <input value={siteData.hero.title} onChange={(e)=>handleUpdate('hero','title',e.target.value)} placeholder="Title" className="w-full bg-black border border-white/10 rounded-xl p-4 text-sm" />
                <textarea value={siteData.hero.value} onChange={(e)=>handleUpdate('hero','value',e.target.value)} placeholder="Value Proposition" className="w-full bg-black border border-white/10 rounded-xl p-4 text-sm resize-none h-20" />
              </div>

              {/* 2. ABOUT */}
              <div className="space-y-4 pt-6 border-t border-white/5">
                <h3 className="text-xs font-black uppercase text-cyan-400">2. About</h3>
                <textarea value={siteData.about.bio} onChange={(e)=>handleUpdate('about','bio',e.target.value)} placeholder="Bio" className="w-full bg-black border border-white/10 rounded-xl p-4 text-sm resize-none h-28" />
              </div>

              {/* 3. IMPACT (List) */}
              <div className="space-y-4 pt-6 border-t border-white/5">
                <div className="flex justify-between"><h3 className="text-xs font-black uppercase text-cyan-400">3. Impact</h3><button onClick={()=>addListItem('impact', {label:'', val:''})} className="text-cyan-400"><Plus size={14}/></button></div>
                {siteData.impact.map((i, idx) => (
                  <div key={idx} className="flex gap-2 relative">
                    <input value={i.label} onChange={(e)=>updateListItem('impact',idx,'label',e.target.value)} placeholder="Label" className="w-1/2 bg-black border border-white/10 rounded-xl p-3 text-xs" />
                    <input value={i.val} onChange={(e)=>updateListItem('impact',idx,'val',e.target.value)} placeholder="Val" className="w-1/2 bg-black border border-white/10 rounded-xl p-3 text-xs" />
                    <button onClick={()=>removeListItem('impact',idx)} className="text-zinc-600 hover:text-red-500"><Trash2 size={12}/></button>
                  </div>
                ))}
              </div>

              {/* 4. SKILLS (List) */}
              <div className="space-y-4 pt-6 border-t border-white/5">
                <div className="flex justify-between"><h3 className="text-xs font-black uppercase text-cyan-400">4. Skills</h3><button onClick={()=>addListItem('skills', {cat:'', val:''})} className="text-cyan-400"><Plus size={14}/></button></div>
                {siteData.skills.map((s, idx) => (
                  <div key={idx} className="p-4 bg-black border border-white/10 rounded-xl relative space-y-2">
                    <button onClick={()=>removeListItem('skills',idx)} className="absolute top-2 right-2 text-zinc-600"><Trash2 size={12}/></button>
                    <input value={s.cat} onChange={(e)=>updateListItem('skills',idx,'cat',e.target.value)} placeholder="Category" className="w-full bg-transparent text-xs border-b border-white/5" />
                    <input value={s.val} onChange={(e)=>updateListItem('skills',idx,'val',e.target.value)} placeholder="Skills" className="w-full bg-transparent text-xs font-bold" />
                  </div>
                ))}
              </div>

              {/* 5. EXPERIENCE (List) */}
              <div className="space-y-4 pt-6 border-t border-white/5">
                <div className="flex justify-between"><h3 className="text-xs font-black uppercase text-cyan-400">5. Experience</h3><button onClick={()=>addListItem('experience', {role:'', org:'', time:'', desc:''})} className="text-cyan-400"><Plus size={14}/></button></div>
                {siteData.experience.map((e, idx) => (
                  <div key={idx} className="p-4 bg-black border border-white/10 rounded-xl relative space-y-2">
                    <button onClick={()=>removeListItem('experience',idx)} className="absolute top-2 right-2 text-zinc-600"><Trash2 size={12}/></button>
                    <input value={e.role} onChange={(v)=>updateListItem('experience',idx,'role',v.target.value)} placeholder="Role" className="w-full bg-transparent text-xs font-bold" />
                    <input value={e.org} onChange={(v)=>updateListItem('experience',idx,'org',v.target.value)} placeholder="Org" className="w-full bg-transparent text-xs" />
                    <input value={e.time} onChange={(v)=>updateListItem('experience',idx,'time',v.target.value)} placeholder="Time" className="w-full bg-transparent text-xs" />
                    <textarea value={e.desc} onChange={(v)=>updateListItem('experience',idx,'desc',v.target.value)} placeholder="Description" className="w-full bg-transparent text-xs resize-none" />
                  </div>
                ))}
              </div>

              {/* 6. PROJECTS (List) */}
              <div className="space-y-4 pt-6 border-t border-white/5">
                <div className="flex justify-between"><h3 className="text-xs font-black uppercase text-cyan-400">6. Projects</h3><button onClick={()=>addListItem('projects', {name:'', outcome:''})} className="text-cyan-400"><Plus size={14}/></button></div>
                {siteData.projects.map((p, idx) => (
                  <div key={idx} className="p-4 bg-black border border-white/10 rounded-xl relative space-y-2">
                    <button onClick={()=>removeListItem('projects',idx)} className="absolute top-2 right-2 text-zinc-600"><Trash2 size={12}/></button>
                    <input value={p.name} onChange={(v)=>updateListItem('projects',idx,'name',v.target.value)} placeholder="Project Name" className="w-full bg-transparent text-xs font-bold" />
                    <input value={p.outcome} onChange={(v)=>updateListItem('projects',idx,'outcome',v.target.value)} placeholder="Outcome" className="w-full bg-transparent text-xs" />
                  </div>
                ))}
              </div>

              {/* 7. INSIGHTS (List) */}
              <div className="space-y-4 pt-6 border-t border-white/5">
                <div className="flex justify-between"><h3 className="text-xs font-black uppercase text-cyan-400">7. Insights</h3><button onClick={()=>addListItem('insights', {title:'', link:''})} className="text-cyan-400"><Plus size={14}/></button></div>
                {siteData.insights.map((ins, idx) => (
                  <div key={idx} className="relative p-2 flex gap-2">
                    <input value={ins.title} onChange={(v)=>updateListItem('insights',idx,'title',v.target.value)} className="w-full bg-black p-2 text-xs border border-white/10 rounded" />
                    <button onClick={()=>removeListItem('insights',idx)} className="text-zinc-600"><Trash2 size={12}/></button>
                  </div>
                ))}
              </div>

              {/* 8. TESTIMONIALS (List) */}
              <div className="space-y-4 pt-6 border-t border-white/5">
                <div className="flex justify-between"><h3 className="text-xs font-black uppercase text-cyan-400">8. Testimonials</h3><button onClick={()=>addListItem('testimonials', {quote:'', author:''})} className="text-cyan-400"><Plus size={14}/></button></div>
                {siteData.testimonials.map((t, idx) => (
                  <div key={idx} className="relative p-2 flex gap-2">
                    <input value={t.quote} onChange={(v)=>updateListItem('testimonials',idx,'quote',v.target.value)} placeholder="Quote" className="w-full bg-black p-2 text-xs border border-white/10 rounded" />
                    <button onClick={()=>removeListItem('testimonials',idx)} className="text-zinc-600"><Trash2 size={12}/></button>
                  </div>
                ))}
              </div>

              {/* 9. EDUCATION (List) */}
              <div className="space-y-4 pt-6 border-t border-white/5">
                <div className="flex justify-between"><h3 className="text-xs font-black uppercase text-cyan-400">9. Education</h3><button onClick={()=>addListItem('education', {degree:'', school:'', year:''})} className="text-cyan-400"><Plus size={14}/></button></div>
                {siteData.education.map((edu, idx) => (
                  <div key={idx} className="p-4 bg-black border border-white/10 rounded-xl relative space-y-2">
                    <button onClick={()=>removeListItem('education',idx)} className="absolute top-2 right-2 text-zinc-600"><Trash2 size={12}/></button>
                    <input value={edu.school} onChange={(v)=>updateListItem('education',idx,'school',v.target.value)} placeholder="School" className="w-full bg-transparent text-xs" />
                    <input value={edu.degree} onChange={(v)=>updateListItem('education',idx,'degree',v.target.value)} placeholder="Degree" className="w-full bg-transparent text-xs" />
                    <input value={edu.year} onChange={(v)=>updateListItem('education',idx,'year',v.target.value)} placeholder="Year" className="w-full bg-transparent text-xs" />
                  </div>
                ))}
              </div>

              {/* 10-12. FOOTER ACTIONS */}
              <div className="space-y-4 pt-6 border-t border-white/5">
                <h3 className="text-xs font-black uppercase text-cyan-400">10-12. Final Actions</h3>
                <input value={siteData.resume.cta} onChange={(e)=>handleUpdate('resume','cta',e.target.value)} placeholder="Resume CTA" className="w-full bg-black border border-white/10 rounded-xl p-4 text-xs" />
                <input value={siteData.contact.email} onChange={(e)=>handleUpdate('contact','email',e.target.value)} placeholder="Email" className="w-full bg-black border border-white/10 rounded-xl p-4 text-xs" />
                <input value={siteData.footer.tagline} onChange={(e)=>handleUpdate('footer','tagline',e.target.value)} placeholder="Footer Tagline" className="w-full bg-black border border-white/10 rounded-xl p-4 text-xs" />
              </div>

            </div>
          </div>
          <button className="w-full py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-cyan-500 transition-all shadow-2xl flex items-center justify-center gap-2">
            <Download size={16}/> Launch Live Site
          </button>
        </div>

        {/* --- RIGHT: PREVIEW AREA --- */}
        <div className="lg:col-span-8 bg-zinc-900/40 rounded-[3rem] border border-white/5 p-12 flex justify-center overflow-y-auto relative">
           <div className={`transition-all duration-700 shadow-2xl overflow-y-auto custom-scrollbar relative ${view === 'desktop' ? 'w-full max-w-[1400px] h-full rounded-[3rem]' : 'w-[375px] h-[650px] rounded-[4rem] border-[12px] border-zinc-800'}`}>
             {template === 'executive' ? <ExecutiveTemplate /> : template === 'tech' ? <TechTemplate /> : <CreativeTemplate />}
           </div>
           <div className="absolute top-8 left-12 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.5em] text-zinc-700 pointer-events-none"><Globe size={12}/> Unified Site Engine</div>
        </div>

      </div>
    </div>
  );
}