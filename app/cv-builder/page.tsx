"use client";
import React from 'react';
import { ArrowLeft, Download, FileText, Settings } from 'lucide-react';
import Link from 'next/link';

// 1. Import the Central Brain
import { useUser } from '../context/UserContext';

export default function CVBuilderPage() {
  // 2. Pull all the Master Data to auto-populate the CV
  const { userData } = useUser();
  const { personal, experience, education, projects, certifications, socials } = userData;

  // 3. The PDF Export Logic
  const handleExportPDF = async () => {
    const element = document.getElementById('cv-document');
    if (!element) return;

    // Dynamically import html2pdf to prevent Next.js SSR errors
    const html2pdf = (await import('html2pdf.js')).default;
    
    const opt = {
      margin:       0,
      filename:     `${personal.name.replace(/\s+/g, '_') || 'Executive'}_CV.pdf`,
      image:        { type: 'jpeg', quality: 1 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-28 pb-10 px-6 font-sans">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 h-[calc(100vh-120px)]">
        
        {/* --- CONTROLS SIDEBAR (Unchanged UI) --- */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <div className="flex items-center justify-between bg-zinc-900 p-4 rounded-2xl border border-white/5">
            <Link href="/dashboard" className="flex items-center gap-2 text-xs font-black uppercase text-zinc-500 hover:text-white transition-colors">
              <ArrowLeft size={14} /> Hub
            </Link>
            <Settings size={16} className="text-zinc-500" />
          </div>

          <div className="p-8 bg-zinc-900 border border-white/5 rounded-3xl space-y-6 shadow-2xl">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
              <FileText size={24} />
            </div>
            <h2 className="text-2xl font-black uppercase tracking-widest text-white">Document Engine</h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Your CV is automatically rendering data from your Master Profile. To edit your Experience, Education, or Name, use the <strong>Profile Builder</strong>.
            </p>
            
            <div className="pt-6 border-t border-white/10 space-y-3">
              <div className="flex justify-between text-xs text-zinc-500">
                <span>Template</span>
                <span className="text-white font-bold">Executive A4</span>
              </div>
              <div className="flex justify-between text-xs text-zinc-500">
                <span>Data Source</span>
                <span className="text-emerald-400 font-bold tracking-widest uppercase flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Master Sync
                </span>
              </div>
            </div>
          </div>

          <button 
            onClick={handleExportPDF}
            className="mt-auto w-full py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
          >
            <Download size={16} /> Export PDF
          </button>
        </div>

        {/* --- A4 DOCUMENT PREVIEW --- */}
        <div className="lg:col-span-9 bg-zinc-900/50 rounded-[3rem] border border-white/5 p-8 flex justify-center overflow-y-auto custom-scrollbar">
          
          {/* The Actual A4 Paper Rendering (ID added for PDF export) */}
          <div id="cv-document" className="bg-white w-[800px] min-h-[1131px] rounded-lg shadow-2xl p-16 text-slate-900 font-serif shrink-0">
            
            {/* Header */}
            <header className="border-b-2 border-slate-900 pb-8 mb-8 text-center">
              <h1 className="text-5xl font-black uppercase tracking-tight mb-2">{personal.name || "YOUR NAME"}</h1>
              <p className="text-xl text-slate-600 tracking-widest uppercase font-sans mb-4">{personal.title || "YOUR PROFESSIONAL TITLE"}</p>
              
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm font-sans text-slate-500">
                {personal.email && <span>{personal.email}</span>}
                {personal.phone && <span>• {personal.phone}</span>}
                {personal.location && <span>• {personal.location}</span>}
                {socials.linkedin && <span>• {socials.linkedin}</span>}
                {socials.github && <span>• {socials.github}</span>}
              </div>
            </header>

            {/* Experience */}
            <section className="mb-10">
              <h2 className="text-lg font-black uppercase tracking-widest border-b border-slate-300 pb-2 mb-6 font-sans">Professional Experience</h2>
              <div className="space-y-6">
                {experience.length > 0 ? experience.map((exp, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                      <span className="text-sm font-sans font-bold text-slate-500">{exp.time}</span>
                    </div>
                    <p className="text-slate-700 italic mb-2">{exp.org}</p>
                    <p className="text-slate-600 leading-relaxed text-sm whitespace-pre-wrap">{exp.desc}</p>
                  </div>
                )) : (
                  <p className="text-slate-400 italic text-sm font-sans">Add experience via the Profile Builder to populate this section.</p>
                )}
              </div>
            </section>

            {/* Education */}
            <section className="mb-10">
              <h2 className="text-lg font-black uppercase tracking-widest border-b border-slate-300 pb-2 mb-6 font-sans">Education & Credentials</h2>
              <div className="space-y-4">
                {education.length > 0 ? education.map((edu, idx) => (
                  <div key={idx} className="flex justify-between items-baseline">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{edu.school}</h3>
                      <p className="text-slate-700">{edu.degree}</p>
                    </div>
                    <span className="text-sm font-sans font-bold text-slate-500">{edu.year}</span>
                  </div>
                )) : (
                  <p className="text-slate-400 italic text-sm font-sans">Add education via the Profile Builder to populate this section.</p>
                )}
              </div>
            </section>

            {/* Projects & Certifications Grid */}
            <div className="grid grid-cols-2 gap-8">
              {/* Projects */}
              {projects.length > 0 && (
                <section>
                  <h2 className="text-lg font-black uppercase tracking-widest border-b border-slate-300 pb-2 mb-6 font-sans">Key Projects</h2>
                  <ul className="list-disc pl-5 space-y-3 text-slate-600 text-sm">
                    {projects.map((proj, idx) => (
                      <li key={idx}>
                        <strong className="text-slate-900 block font-sans">{proj.name}</strong> 
                        <span className="leading-relaxed">{proj.outcome}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Certifications */}
              {certifications.length > 0 && (
                <section>
                  <h2 className="text-lg font-black uppercase tracking-widest border-b border-slate-300 pb-2 mb-6 font-sans">Certifications</h2>
                  <div className="space-y-3">
                    {certifications.map((cert, idx) => (
                      <div key={idx} className="text-sm text-slate-600">
                        <strong className="text-slate-900 block font-sans">{cert.name}</strong>
                        {cert.issuer} <span className="text-slate-400 font-sans ml-1">• {cert.year}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}