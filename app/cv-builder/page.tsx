"use client";
import React, { useState } from 'react';
import { Printer, ArrowLeft, Mail, Phone, MapPin, Linkedin, Briefcase, GraduationCap, Award, FolderGit2, Lightbulb, CheckCircle2, Sparkles, User, Globe } from 'lucide-react';
import Link from 'next/link';

export default function MasterExecutiveCvBuilder() {
  const [activeTemplate, setActiveTemplate] = useState(1);
  const [activeField, setActiveField] = useState("summary");

  const [formData, setFormData] = useState({
    name: "AMLAN DAS",
    location: "Pune, Maharashtra",
    phone: "+91 XXXXX XXXX",
    email: "amlaan.das2014@gmail.com",
    linkedin: "linkedin.com/in/amlandas",
    summary: "Finance professional with 4+ years of experience in NBFC operations, collection reconciliation, and process automation. Skilled in SOP development and credit operations.",
    skills: "Collection Reconciliation, LOS, Credit Operations, Process Automation, Tally, Stakeholder Management",
    experience: "Senior Operations Executive | XYZ NBFC | Jan 2022 – Present\n• Managed reconciliation of daily collection data across partner systems.\n• Developed a master SOP consolidating six operational workflows.",
    projects: "Loan Origination Automation Model\n• Designed workflow structure for automated reconciliation.\n• Defined stakeholder touchpoints across collections and finance teams.",
    education: "Bachelor of Commerce | XYZ University | 2020",
    certifications: "Advanced Excel for Financial Modeling, Credit Risk Fundamentals"
  });

  // SMART COACH TIPS FOR ALL 11 SECTIONS
  const tips: Record<string, { title: string; advice: string; keywords: string[] }> = {
    header: {
      title: "Header Tips",
      advice: "Ensure your LinkedIn and Phone Number are professional and reachable.",
      keywords: ["Professional Profile", "Pune-based", "Contactable"]
    },
    summary: {
      title: "Summary Tips",
      advice: "Mention your total years of experience and core industry (e.g., NBFC).",
      keywords: ["Operations", "Reconciliation", "Automation", "SOPs"]
    },
    skills: {
      title: "Skills Tips",
      advice: "List technical tools first (LOS, Tally, Excel) followed by soft skills.",
      keywords: ["LOS", "Compliance", "Bureau Reporting", "Excel"]
    },
    experience: {
      title: "Experience Tips",
      advice: "Use bullet points starting with action verbs. Focus on results.",
      keywords: ["Optimized", "Spearheaded", "Reconciled", "Reduced TAT"]
    },
    projects: {
      title: "Project Tips",
      advice: "Highlight projects where you solved a specific business problem.",
      keywords: ["Automation", "Workflow", "Implementation"]
    },
    education: {
      title: "Education Tips",
      advice: "List your highest degree first.",
      keywords: ["B.Com", "Finance", "University"]
    },
    certifications: {
      title: "Certifications Tips",
      advice: "Include industry-recognized certifications like NISM or Credit Risk.",
      keywords: ["NISM", "Credit Risk", "Financial Modeling"]
    }
  };

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-100 font-serif">
      {/* 1. TOP CONTROL BAR */}
      <div className="print:hidden bg-white border-b border-slate-200 p-4 sticky top-0 z-50 shadow-sm font-sans">
        <div className="max-w-[1500px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-widest">
              <ArrowLeft size={14} /> Dashboard
            </Link>
            <div className="flex bg-slate-100 p-1 rounded-lg gap-1 border border-slate-200">
              <button onClick={() => setActiveTemplate(1)} className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${activeTemplate === 1 ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-slate-800'}`}>EXECUTIVE</button>
              <button onClick={() => setActiveTemplate(2)} className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${activeTemplate === 2 ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-slate-800'}`}>CLASSIC NBFC</button>
            </div>
          </div>
          <button onClick={handlePrint} className="bg-black text-white px-8 py-2 rounded-full font-bold text-sm hover:shadow-lg flex items-center gap-2 transition-all">
            <Printer size={16} /> DOWNLOAD PDF
          </button>
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[calc(100vh-73px)]">
        
        {/* 2. LEFT PANEL: ALL 11 EDITABLE SECTIONS + SMART TIPS */}
        <div className="print:hidden lg:col-span-4 bg-white border-r border-slate-200 p-6 space-y-6 overflow-y-auto h-[calc(100vh-73px)] font-sans">
          
          {/* SMART TIP COMPONENT */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-5 rounded-2xl mb-4">
            <h3 className="flex items-center gap-2 text-blue-700 font-black text-[10px] uppercase tracking-wider mb-2">
              <Lightbulb size={14} /> {tips[activeField]?.title || "Pro Tip"}
            </h3>
            <p className="text-slate-600 text-xs mb-3 leading-relaxed font-medium">{tips[activeField]?.advice}</p>
            <div className="flex flex-wrap gap-1.5">
              {tips[activeField]?.keywords.map((word) => (
                <span key={word} className="bg-white/80 px-2.5 py-1 rounded-md text-[9px] font-bold text-blue-600 border border-blue-100 shadow-sm">
                  {word}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6 pb-20">
            {/* Header Data (1-5: Name, Location, Phone, Email, LinkedIn) */}
            <div className="p-4 bg-slate-50 rounded-2xl space-y-3 border border-slate-100">
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Contact Info</p>
              <input type="text" placeholder="Full Name" value={formData.name} onFocus={() => setActiveField('header')} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full p-2 text-sm border-b bg-transparent outline-none focus:border-blue-500 transition-colors" />
              <input type="text" placeholder="Location" value={formData.location} onFocus={() => setActiveField('header')} onChange={(e) => setFormData({...formData, location: e.target.value})} className="w-full p-2 text-sm border-b bg-transparent outline-none focus:border-blue-500 transition-colors" />
              <input type="text" placeholder="Phone Number" value={formData.phone} onFocus={() => setActiveField('header')} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full p-2 text-sm border-b bg-transparent outline-none focus:border-blue-500 transition-colors" />
              <input type="text" placeholder="Email" value={formData.email} onFocus={() => setActiveField('header')} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full p-2 text-sm border-b bg-transparent outline-none focus:border-blue-500 transition-colors" />
              <input type="text" placeholder="LinkedIn URL" value={formData.linkedin} onFocus={() => setActiveField('header')} onChange={(e) => setFormData({...formData, linkedin: e.target.value})} className="w-full p-2 text-sm border-b bg-transparent outline-none focus:border-blue-500 transition-colors" />
            </div>

            {/* Content Data (6-11: Summary, Skills, Exp, Projects, Edu, Certs) */}
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">6. Professional Summary</label>
                <textarea rows={3} onFocus={() => setActiveField('summary')} value={formData.summary} onChange={(e) => setFormData({...formData, summary: e.target.value})} className="w-full p-3 text-sm border rounded-xl bg-slate-50 outline-none focus:ring-2 focus:ring-blue-100" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">7. Core Skills</label>
                <textarea rows={2} onFocus={() => setActiveField('skills')} value={formData.skills} onChange={(e) => setFormData({...formData, skills: e.target.value})} className="w-full p-3 text-sm border rounded-xl bg-slate-50 outline-none focus:ring-2 focus:ring-blue-100" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">8. Work Experience</label>
                <textarea rows={5} onFocus={() => setActiveField('experience')} value={formData.experience} onChange={(e) => setFormData({...formData, experience: e.target.value})} className="w-full p-3 text-sm border rounded-xl bg-slate-50 outline-none focus:ring-2 focus:ring-blue-100" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">9. Projects</label>
                <textarea rows={3} onFocus={() => setActiveField('projects')} value={formData.projects} onChange={(e) => setFormData({...formData, projects: e.target.value})} className="w-full p-3 text-sm border rounded-xl bg-slate-50 outline-none focus:ring-2 focus:ring-blue-100" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">10. Education</label>
                <input type="text" onFocus={() => setActiveField('education')} value={formData.education} onChange={(e) => setFormData({...formData, education: e.target.value})} className="w-full p-3 text-sm border rounded-xl bg-slate-50 outline-none focus:ring-2 focus:ring-blue-100" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">11. Certifications</label>
                <textarea rows={2} onFocus={() => setActiveField('certifications')} value={formData.certifications} onChange={(e) => setFormData({...formData, certifications: e.target.value})} className="w-full p-3 text-sm border rounded-xl bg-slate-50 outline-none focus:ring-2 focus:ring-blue-100" />
              </div>
            </div>
          </div>
        </div>

        {/* 3. RIGHT PANEL: THE PROFESSIONAL PREVIEW */}
        <div className="lg:col-span-8 bg-slate-200 p-8 flex justify-center overflow-y-auto h-[calc(100vh-73px)] print:h-auto print:bg-white print:p-0">
          <div id="cv-preview" className="bg-white w-full max-w-[8.27in] min-h-[11.69in] p-[0.75in] shadow-2xl print:shadow-none print:w-full print:p-0 text-[#111] transition-all">
            
            {/* COMMON HEADER */}
            <header className="text-center border-b-[1.5px] border-black pb-4 mb-6">
              <h1 className="text-4xl font-normal tracking-[0.1em] mb-3 text-black uppercase">{formData.name}</h1>
              <div className="flex justify-center flex-wrap gap-x-3 text-[10pt] font-medium text-slate-700">
                <span>{formData.location}</span>
                <span>|</span>
                <span>{formData.phone}</span>
                <span>|</span>
                <span>{formData.email}</span>
                <span>|</span>
                <span className="italic">{formData.linkedin}</span>
              </div>
            </header>

            {/* TEMPLATE 1: CENTERED EXECUTIVE */}
            {activeTemplate === 1 && (
              <div className="space-y-6">
                <section>
                  <h3 className="text-center font-bold uppercase tracking-widest text-[11pt] border-b border-slate-300 pb-1 mb-3">Professional Summary</h3>
                  <p className="text-[11pt] text-justify leading-relaxed">{formData.summary}</p>
                </section>
                <section>
                  <h3 className="text-center font-bold uppercase tracking-widest text-[11pt] border-b border-slate-300 pb-1 mb-3">Core Skills</h3>
                  <div className="grid grid-cols-2 gap-x-12 text-[10.5pt]">
                    {formData.skills.split(',').map((skill, i) => (
                      <div key={i} className="flex items-start gap-2 text-justify italic">• {skill.trim()}</div>
                    ))}
                  </div>
                </section>
                <section>
                  <h3 className="text-center font-bold uppercase tracking-widest text-[11pt] border-b border-slate-300 pb-1 mb-3">Work Experience</h3>
                  <div className="whitespace-pre-line text-[11pt] space-y-4">{formData.experience}</div>
                </section>
                <section>
                  <h3 className="text-center font-bold uppercase tracking-widest text-[11pt] border-b border-slate-300 pb-1 mb-3">Project Experience</h3>
                  <div className="whitespace-pre-line text-[11pt] italic">{formData.projects}</div>
                </section>
                <section className="grid grid-cols-2 gap-8 border-t border-slate-300 pt-4">
                  <div>
                    <h3 className="font-bold uppercase tracking-wider text-[10pt] mb-2">Education</h3>
                    <p className="text-[10pt]">{formData.education}</p>
                  </div>
                  <div>
                    <h3 className="font-bold uppercase tracking-wider text-[10pt] mb-2">Certifications</h3>
                    <div className="text-[10pt] space-y-1">
                      {formData.certifications.split(',').map((cert, i) => (
                        <div key={i}>• {cert.trim()}</div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            )}

            {/* TEMPLATE 2: LEFT-ALIGNED CLASSIC NBFC */}
            {activeTemplate === 2 && (
              <div className="space-y-7">
                <section>
                  <h2 className="font-bold uppercase tracking-wider text-[11pt] border-b border-black pb-1 mb-2">Professional Summary</h2>
                  <p className="text-[10.5pt] text-justify leading-relaxed">{formData.summary}</p>
                </section>
                <section>
                  <h2 className="font-bold uppercase tracking-wider text-[11pt] border-b border-black pb-1 mb-2">Core Competencies</h2>
                  <p className="text-[10.5pt] leading-relaxed italic">{formData.skills}</p>
                </section>
                <section>
                  <h2 className="font-bold uppercase tracking-wider text-[11pt] border-b border-black pb-1 mb-2">Professional Experience</h2>
                  <div className="whitespace-pre-line text-[10.5pt] leading-relaxed">{formData.experience}</div>
                </section>
                <section>
                  <h2 className="font-bold uppercase tracking-wider text-[11pt] border-b border-black pb-1 mb-2">Projects</h2>
                  <div className="whitespace-pre-line text-[10.5pt] italic">{formData.projects}</div>
                </section>
                <section>
                  <h2 className="font-bold uppercase tracking-wider text-[11pt] border-b border-black pb-1 mb-2">Education & Certifications</h2>
                  <div className="grid grid-cols-1 gap-2 text-[10.5pt]">
                    <p><strong>Education:</strong> {formData.education}</p>
                    <p><strong>Certifications:</strong> {formData.certifications}</p>
                  </div>
                </section>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}