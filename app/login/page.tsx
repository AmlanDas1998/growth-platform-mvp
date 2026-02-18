"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowLeft, ShieldCheck, Mail, Lock, UserPlus, Phone } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SmartLogin() {
  const router = useRouter();
  
  // Logic States: 'email', 'password', or 'signup'
  const [step, setStep] = useState('email'); 
  const [email, setEmail] = useState('');
  
  // Mock database for the "Smart" check
  const existingUsers = ['test@gmail.com', 'amlan@avirtoya.com'];

  const handleEmailCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (existingUsers.includes(email.toLowerCase())) {
      setStep('password');
    } else {
      setStep('signup');
    }
  };

  const handleFinish = () => {
    router.push('/'); // Redirect to the Student/Recruiter Hub
  };

  return (
    <div className="flex min-h-screen bg-white font-sans text-slate-900">
      
      {/* --- LEFT SIDE: THE INTERACTIVE FORM --- */}
      <div className="flex flex-col w-full lg:w-[45%] p-8 md:p-24 justify-center bg-white z-10">
        
        <AnimatePresence mode="wait">
          {/* STEP 1: EMAIL ENTRY */}
          {step === 'email' && (
            <motion.div 
              key="email"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-2 mb-12">
                <div className="bg-black p-1.5 rounded-lg text-white"><Sparkles size={18} /></div>
                <span className="font-black tracking-tighter text-xl italic">AMLAN DAS.</span>
              </div>
              
              <div className="space-y-2">
                <h1 className="text-4xl font-black tracking-tighter italic uppercase leading-none">The Future <br /> of Growth.</h1>
                <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">Enter your email to get started</p>
              </div>

              <form onSubmit={handleEmailCheck} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    required
                    type="email" 
                    placeholder="name@university.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:border-black outline-none transition-all font-medium"
                  />
                </div>
                <button type="submit" className="w-full py-4 bg-black text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-xl">
                  Continue
                </button>
              </form>
            </motion.div>
          )}

          {/* STEP 2: PASSWORD (EXISTING USER) */}
          {step === 'password' && (
            <motion.div 
              key="password"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-8"
            >
              <button onClick={() => setStep('email')} className="flex items-center gap-2 text-slate-400 hover:text-black mb-8 transition-all font-bold text-xs uppercase tracking-widest">
                <ArrowLeft size={16} /> Back
              </button>
              <h2 className="text-3xl font-black tracking-tighter italic uppercase">Welcome Back.</h2>
              <p className="text-slate-500 text-sm">Enter the password associated with **{email}**</p>
              
              <div className="space-y-4">
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input type="password" placeholder="••••••••" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:border-black outline-none transition-all" />
                </div>
                <button onClick={handleFinish} className="w-full py-4 bg-black text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-zinc-800 transition-all">
                  Sign In
                </button>
                <button className="w-full text-center text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-black transition-colors">Forgot Password?</button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: SIGNUP (NEW USER) */}
          {step === 'signup' && (
            <motion.div 
              key="signup"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-6"
            >
              <button onClick={() => setStep('email')} className="flex items-center gap-2 text-slate-400 hover:text-black mb-4 transition-all font-bold text-xs uppercase tracking-widest">
                <ArrowLeft size={16} /> Change Email
              </button>
              <h2 className="text-3xl font-black tracking-tighter italic uppercase">Create Account.</h2>
              <p className="text-slate-500 text-sm font-medium">New around here? Tell us about yourself.</p>
              
              <div className="grid grid-cols-2 gap-4">
                <input placeholder="First Name" className="w-full px-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-black transition-all" />
                <input placeholder="Last Name" className="w-full px-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-black transition-all" />
              </div>

              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input placeholder="WhatsApp Number" className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-black transition-all" />
              </div>

              <select className="w-full px-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-black transition-all font-medium text-slate-600 appearance-none cursor-pointer">
                <option value="">Select Profession</option>
                <option value="student">Student</option>
                <option value="salaried">Salaried</option>
                <option value="professional">Professional</option>
                <option value="self-employed">Self-Employed</option>
              </select>

              <button onClick={handleFinish} className="w-full py-4 bg-black text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-xl">
                Create Account
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-auto pt-12 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.4em] text-slate-300">
          <ShieldCheck size={14} /> Secured Boutique Gateway
        </div>
      </div>

      {/* --- RIGHT SIDE: CINEMATIC VISUAL --- */}
      <div className="hidden lg:flex w-[55%] bg-slate-50 items-center justify-center relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-20"
          alt="Boutique Environment"
        />
        <div className="relative z-10 text-center space-y-4 max-w-md">
          <h3 className="text-4xl font-black italic tracking-tighter text-slate-900 uppercase">Growth Platform.</h3>
          <p className="text-slate-400 text-sm leading-relaxed font-medium">Empowering the students of **Pune** with elite financial tools and career branding.</p>
        </div>
      </div>

    </div>
  );
}