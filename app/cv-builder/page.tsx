"use client";
import { useState } from 'react';
import { Printer, Sparkles, User, Mail, Briefcase } from 'lucide-react';

export default function BeautifulCvBuilder() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    experience: "",
  });

  const handlePrint = () => {
    window.print(); // This is the magic spell for the printer!
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans">
      {/* Header Area */}
      <div className="max-w-6xl mx-auto mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-slate-800 flex items-center gap-2">
            <Sparkles className="text-blue-500" /> PRO-BUILDER
          </h1>
          <p className="text-slate-500">Create a beautiful CV in seconds.</p>
        </div>
        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold shadow-lg transition-all transform hover:scale-105"
        >
          <Printer size={20} /> Download PDF
        </button>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT: The Input Dashboard */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold mb-6 text-slate-800 border-b pb-2">Your Info</h2>
            
            <div className="space-y-4">
              <div>
                <label className="text-xs font-black uppercase text-slate-400 flex items-center gap-2">
                  <User size={14} /> Full Name
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. Amlan Das"
                  className="w-full p-3 bg-slate-50 border-none rounded-xl mt-1 focus:ring-2 focus:ring-blue-400 outline-none transition-all" 
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label className="text-xs font-black uppercase text-slate-400 flex items-center gap-2">
                  <Mail size={14} /> Email
                </label>
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full p-3 bg-slate-50 border-none rounded-xl mt-1 focus:ring-2 focus:ring-blue-400 outline-none transition-all" 
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="text-xs font-black uppercase text-slate-400 flex items-center gap-2">
                  <Briefcase size={14} /> Experience
                </label>
                <textarea 
                  placeholder="What have you built lately?"
                  className="w-full p-3 bg-slate-50 border-none rounded-xl mt-1 h-48 focus:ring-2 focus:ring-blue-400 outline-none transition-all" 
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: The Premium Preview */}
        <div className="lg:col-span-8">
          <div id="cv-preview" className="bg-white min-h-[800px] p-12 shadow-2xl rounded-sm border-t-[12px] border-blue-600 print:shadow-none print:p-0">
            <header className="border-b-2 border-slate-100 pb-8 mb-8">
              <h1 className="text-5xl font-black text-slate-900 tracking-tight mb-2">
                {formData.name || "YOUR NAME"}
              </h1>
              <div className="flex gap-4 text-blue-600 font-medium">
                <span>{formData.email || "hello@domain.com"}</span>
                <span>•</span>
                <span>Pune, India</span>
              </div>
            </header>

            <section>
              <h3 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-4">Professional Summary</h3>
              <p className="text-slate-700 leading-relaxed text-lg whitespace-pre-line">
                {formData.experience || "Your amazing journey starts here... describe your skills and projects."}
              </p>
            </section>
          </div>
        </div>

      </div>
    </div>
  );
}