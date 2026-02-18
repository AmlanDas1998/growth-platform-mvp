"use client";
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, Download, User, MapPin, Phone, Mail, 
  Linkedin, Rocket, Briefcase, GraduationCap, 
  Award, Plus, Trash2, PenTool, Eye, Palette
} from 'lucide-react';
import Link from 'next/link';

// --- THEME & PALETTE DEFINITIONS ---
type TemplateId = 'template1' | 'template2' | 'template3';
type PaletteId = 'classic' | 'modern' | 'executive' | 'tech' | 'rose';

interface PaletteColors {
  primary: string; // Background of sidebar or headers
  secondary: string; // Text color for subheaders
  accent: string; // Borders or small icons
  text: string; // Main body text
  heading: string; // Name/Section titles
  bg: string; // Main CV background
}

const colorPalettes: Record<PaletteId, PaletteColors> = {
  classic: { primary: 'bg-slate-900', secondary: 'text-slate-600', accent: 'border-slate-200', text: 'text-slate-700', heading: 'text-slate-900', bg: 'bg-white' },
  modern: { primary: 'bg-emerald-800', secondary: 'text-emerald-700', accent: 'border-emerald-200', text: 'text-slate-800', heading: 'text-emerald-950', bg: 'bg-emerald-50/20' },
  executive: { primary: 'bg-blue-900', secondary: 'text-blue-800', accent: 'border-blue-200', text: 'text-slate-900', heading: 'text-black', bg: 'bg-white' },
  tech: { primary: 'bg-cyan-700', secondary: 'text-cyan-700', accent: 'border-cyan-200', text: 'text-slate-800', heading: 'text-slate-900', bg: 'bg-slate-50' },
  rose: { primary: 'bg-rose-700', secondary: 'text-rose-700', accent: 'border-rose-200', text: 'text-slate-800', heading: 'text-slate-900', bg: 'bg-white' }
};

export default function CVBuilderPage() {
  const [template, setTemplate] = useState<TemplateId>('template3');
  const [palette, setPalette] = useState<PaletteId>('classic');
  const cvPrintRef = useRef<HTMLDivElement>(null);
  
  // --- 11 STANDARDIZED SECTIONS ---
  const [cvData, setCvData] = useState({
    name: "Amlan Das",
    location: "Pune, Maharashtra",
    phone: "+91 98765 43210",
    email: "amlan@avirtoya.com",
    linkedin: "linkedin.com/in/amlandas",
    summary: "Dedicated professional focusing on the Pune student workforce ecosystem. Specialized in scaling boutique career platforms and financial education modules.",
    skills: ["SIP Strategy", "Mutual Fund Analysis", "Credit Risk", "Web Architecture"],
    experience: [{ company: "Avir Toya", role: "Founder", date: "2025 - Present", desc: "Leading a boutique platform for growth." }],
    projects: [{ name: "Growth MVP", tech: "Next.js", desc: "A career hub for students to master finance." }],
    education: [{ school: "Pune University", degree: "B.Com", date: "2016 - 2019" }],
    certifications: [{ title: "NISM Series V-A", issuer: "NISM", date: "2024" }]
  });

  const colors = colorPalettes[palette];

  // --- PDF DOWNLOAD LOGIC ---
  const handleDownloadPDF = () => {
    window.print(); // Using native print for the highest quality PDF generation
  };

  // --- LIST HANDLERS ---
  const updateList = (key: string, index: number, field: string, value: string) => {
    const newList = [...(cvData as any)[key]];
    newList[index][field] = value;
    setCvData({ ...cvData, [key]: newList });
  };

  const addListItem = (key: string, itemTemplate: any) => {
    setCvData({ ...cvData, [key]: [...(cvData as any)[key], itemTemplate] });
  };

  const removeListItem = (key: string, index: number) => {
    const newList = [...(cvData as any)[key]];
    newList.splice(index, 1);
    setCvData({ ...cvData, [key]: newList });
  };

  // --- UNIVERSAL 11-SECTION RENDERER ---
  const SectionContent = ({ id, title }: { id: string, title: string }) => (
    <section className="mb-6">
      <h2 className={`text-[11px] font-black uppercase border-b-2 mb-3 tracking-widest ${colors.secondary} ${colors.accent}`}>{title}</h2>
      {(cvData as any)[id].map((item: any, i: number) => (
        <div key={i} className="mb-3">
          <div className="flex justify-between font-bold text-[10px] uppercase">
            <span>{item.company || item.name || item.school || item.title}</span>
            <span className="opacity-60">{item.date}</span>
          </div>
          {item.role && <p className="text-[9px] font-bold opacity-80">{item.role}</p>}
          {item.desc && <p className={`text-[9px] leading-relaxed mt-1 ${colors.text}`}>{item.desc}</p>}
          {item.issuer && <p className="text-[9px] opacity-70 italic">{item.issuer}</p>}
        </div>
      ))}
    </section>
  );

  // --- TEMPLATE 1: MODERN SIDEBAR ---
  const Template1 = () => (
    <div className={`flex min-h-[1100px] shadow-2xl ${colors.bg}`}>
      <div className={`w-1/3 p-8 text-white space-y-8 ${colors.primary}`}>
        <div className="space-y-4">
          <h2 className="text-[10px] font-black uppercase tracking-widest opacity-60">Contact</h2>
          <div className="text-[9px] space-y-1">
            <p>{cvData.location}</p><p>{cvData.phone}</p><p>{cvData.email}</p><p>{cvData.linkedin}</p>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-[10px] font-black uppercase tracking-widest opacity-60">Core Skills</h2>
          <div className="flex flex-wrap gap-1">
            {cvData.skills.map((s, i) => <span key={i} className="bg-white/10 px-2 py-1 rounded text-[8px]">{s}</span>)}
          </div>
        </div>
        <div className="space-y-4 pt-4 border-t border-white/10">
          <h2 className="text-[10px] font-black uppercase tracking-widest opacity-60">Certifications</h2>
          {cvData.certifications.map((c, i) => <p key={i} className="text-[8px]">{c.title}</p>)}
        </div>
      </div>
      <div className="w-2/3 p-12 space-y-8">
        <h1 className={`text-4xl font-black uppercase tracking-tighter ${colors.heading}`}>{cvData.name}</h1>
        <div className="space-y-2">
          <h3 className={`text-[10px] font-black uppercase border-b pb-1 ${colors.accent} ${colors.secondary}`}>Summary</h3>
          <p className={`text-[10px] leading-relaxed ${colors.text}`}>{cvData.summary}</p>
        </div>
        <SectionContent id="experience" title="Work Experience" />
        <SectionContent id="projects" title="Key Projects" />
        <SectionContent id="education" title="Education" />
      </div>
    </div>
  );

  // --- TEMPLATE 2: SPLIT PROFESSIONAL ---
  const Template2 = () => (
    <div className={`p-12 shadow-2xl min-h-[1100px] border-t-[12px] ${colors.bg} ${colors.primary.replace('bg-', 'border-')}`}>
      <div className="flex justify-between items-end border-b pb-8 mb-8 border-slate-100">
        <div><h1 className={`text-5xl font-black tracking-tighter ${colors.heading}`}>{cvData.name}</h1><p className={`text-[10px] font-bold uppercase tracking-[0.3em] mt-2 ${colors.secondary}`}>Boutique Executive</p></div>
        <div className="text-right text-[9px] space-y-1 font-bold text-slate-400 uppercase">
          <p>{cvData.location}</p><p>{cvData.phone}</p><p>{cvData.email}</p>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-7 space-y-8">
          <SectionContent id="experience" title="Experience" />
          <SectionContent id="projects" title="Projects" />
        </div>
        <div className="col-span-5 space-y-8">
          <section><h2 className={`text-[10px] font-black uppercase border-b pb-1 mb-4 ${colors.secondary} ${colors.accent}`}>Expertise</h2>
            <div className="flex flex-wrap gap-2">{cvData.skills.map((s, i) => <span key={i} className={`text-[9px] font-bold border px-2 py-1 rounded-lg ${colors.accent}`}>{s}</span>)}</div>
          </section>
          <SectionContent id="education" title="Education" />
          <SectionContent id="certifications" title="Certs" />
        </div>
      </div>
    </div>
  );

  // --- TEMPLATE 3: EXECUTIVE MINIMALIST ---
  const Template3 = () => (
    <div className={`p-16 shadow-2xl min-h-[1100px] font-serif border-x-[16px] ${colors.bg} ${colors.accent.replace('border-', 'border-x-')}`}>
      <div className="text-center border-b-2 border-black pb-8 mb-10">
        <h1 className={`text-5xl font-bold uppercase tracking-tight mb-2 ${colors.heading}`}>{cvData.name}</h1>
        <div className={`text-[10px] font-bold flex justify-center flex-wrap gap-4 uppercase tracking-widest text-slate-500`}>
          <span>{cvData.location}</span>|<span>{cvData.phone}</span>|<span>{cvData.email}</span>|<span>{cvData.linkedin}</span>
        </div>
      </div>
      <div className="space-y-10">
        <p className={`text-sm leading-relaxed text-center italic px-12 ${colors.text}`}>"{cvData.summary}"</p>
        <section><h2 className="text-xs font-black uppercase border-b-2 border-black mb-4 tracking-widest italic">Core Skills</h2>
          <div className="grid grid-cols-3 gap-y-2 text-[11px] font-bold text-slate-800">{cvData.skills.map((s, i) => <div key={i}>• {s}</div>)}</div>
        </section>
        <SectionContent id="experience" title="Professional Experience" />
        <SectionContent id="projects" title="Strategic Projects" />
        <SectionContent id="education" title="Education" />
        <SectionContent id="certifications" title="Certifications" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-28 pb-20 px-6 font-sans">
      <style>{`@media print { .no-print { display: none !important; } .print-area { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 9999; background: white; } }`}</style>
      
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 h-[calc(100vh-140px)]">
        
        {/* --- LEFT: THE 11-SECTION EDITOR --- */}
        <div className="lg:col-span-5 flex flex-col gap-6 overflow-hidden no-print">
          <div className="flex items-center justify-between bg-zinc-900/50 p-4 rounded-3xl border border-white/5">
            <Link href="/dashboard" className="text-[10px] font-black uppercase text-zinc-500 hover:text-cyan-400">Back</Link>
            
            {/* TEMPLATE SELECTOR */}
            <div className="flex bg-black p-1 rounded-xl border border-white/10">
              {(['template1', 'template2', 'template3'] as TemplateId[]).map((t) => (
                <button key={t} onClick={() => setTemplate(t)} className={`px-4 py-2 rounded-lg text-[9px] font-black uppercase transition-all ${template === t ? 'bg-white text-black' : 'text-zinc-600'}`}>
                  {t.slice(-1)}
                </button>
              ))}
            </div>
          </div>

          {/* PALETTE SELECTOR */}
          <div className="bg-zinc-900 border border-white/10 p-6 rounded-[2rem] flex flex-col gap-4">
             <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-zinc-500"><Palette size={14}/> Color Palette</div>
             <div className="flex justify-between">
               {(Object.keys(colorPalettes) as PaletteId[]).map((p) => (
                 <button key={p} onClick={() => setPalette(p)} className={`w-12 h-12 rounded-2xl border-2 transition-all flex items-center justify-center ${palette === p ? 'border-cyan-400 scale-110 shadow-lg' : 'border-white/5 opacity-40'}`}>
                   <div className={`w-8 h-8 rounded-lg ${colorPalettes[p].primary}`} />
                 </button>
               ))}
             </div>
          </div>

          <div className="flex-1 overflow-y-auto pr-4 space-y-6 custom-scrollbar pb-10">
            <div className="bg-zinc-900 border border-white/10 rounded-[2.5rem] p-8 space-y-10">
              {/* Personal (1-5) */}
              <div className="space-y-4">
                <h3 className="text-xs font-black uppercase text-cyan-400">1-5. Identity</h3>
                <input value={cvData.name} onChange={(e)=>setCvData({...cvData, name: e.target.value})} placeholder="Full Name" className="w-full bg-black border border-white/10 rounded-xl p-4 text-sm" />
                <div className="grid grid-cols-2 gap-4">
                  <input value={cvData.location} onChange={(e)=>setCvData({...cvData, location: e.target.value})} placeholder="Pune" className="bg-black border border-white/10 rounded-xl p-4 text-sm" />
                  <input value={cvData.phone} onChange={(e)=>setCvData({...cvData, phone: e.target.value})} placeholder="Phone" className="bg-black border border-white/10 rounded-xl p-4 text-sm" />
                </div>
                <input value={cvData.email} onChange={(e)=>setCvData({...cvData, email: e.target.value})} placeholder="Email" className="w-full bg-black border border-white/10 rounded-xl p-4 text-sm" />
                <input value={cvData.linkedin} onChange={(e)=>setCvData({...cvData, linkedin: e.target.value})} placeholder="LinkedIn URL" className="w-full bg-black border border-white/10 rounded-xl p-4 text-sm" />
              </div>

              {/* Summary (6) & Skills (7) */}
              <div className="space-y-4 pt-8 border-t border-white/5">
                <h3 className="text-xs font-black uppercase text-cyan-400">6-7. Summary & Skills</h3>
                <textarea value={cvData.summary} onChange={(e)=>setCvData({...cvData, summary: e.target.value})} rows={3} className="w-full bg-black border border-white/10 rounded-xl p-4 text-sm resize-none" />
                <input value={cvData.skills.join(', ')} onChange={(e)=>setCvData({...cvData, skills: e.target.value.split(', ')})} placeholder="Skills (comma separated)" className="w-full bg-black border border-white/10 rounded-xl p-4 text-sm" />
              </div>

              {/* Dynamic Lists (8-11) */}
              {[
                { id: 'experience', label: '8. Experience', template: { company: '', role: '', date: '', desc: '' } },
                { id: 'projects', label: '9. Projects', template: { name: '', tech: '', desc: '' } },
                { id: 'education', label: '10. Education', template: { school: '', degree: '', date: '' } },
                { id: 'certifications', label: '11. Certs', template: { title: '', issuer: '', date: '' } }
              ].map((section) => (
                <div key={section.id} className="space-y-6 pt-8 border-t border-white/5">
                  <div className="flex justify-between items-center"><h3 className="text-xs font-black uppercase text-cyan-400">{section.label}</h3><button onClick={()=>addListItem(section.id, section.template)} className="p-2 bg-white/5 rounded-lg text-cyan-400"><Plus size={16}/></button></div>
                  {(cvData as any)[section.id].map((item: any, i: number) => (
                    <div key={i} className="p-6 bg-black rounded-2xl border border-white/5 space-y-4 relative">
                      <button onClick={()=>removeListItem(section.id, i)} className="absolute top-4 right-4 text-zinc-700 hover:text-red-500"><Trash2 size={14}/></button>
                      {Object.keys(section.template).map((field) => (
                        <input key={field} value={item[field]} onChange={(e)=>updateList(section.id, i, field, e.target.value)} placeholder={field.charAt(0).toUpperCase() + field.slice(1)} className="w-full bg-transparent border-b border-white/10 pb-2 text-sm outline-none" />
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <button onClick={handleDownloadPDF} className="w-full py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-cyan-500 transition-all shadow-2xl flex items-center justify-center gap-2"><Download size={18} /> Download Portfolio PDF</button>
        </div>

        {/* --- RIGHT: THE PREVIEW CANVAS --- */}
        <div className="lg:col-span-7 bg-zinc-900/40 rounded-[4rem] border border-white/5 p-16 flex justify-center overflow-y-auto relative print-area">
           <AnimatePresence mode="wait">
             <motion.div key={`${template}-${palette}`} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-[850px] h-fit origin-top">
               {template === 'template1' ? <Template1 /> : template === 'template2' ? <Template2 /> : <Template3 />}
             </motion.div>
           </AnimatePresence>
           <div className="absolute top-10 left-16 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.5em] text-zinc-700 no-print"><Eye size={12}/> Unified Career Engine</div>
        </div>
      </div>
    </div>
  );
}