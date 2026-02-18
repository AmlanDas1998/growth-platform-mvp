"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowLeft, Mail, Lock, Phone } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SmartLogin() {
  const router = useRouter();
  const [step, setStep] = useState('email'); 
  const [email, setEmail] = useState('');
  
  const handleEmailCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (['test@gmail.com'].includes(email.toLowerCase())) setStep('password');
    else setStep('signup');
  };

  const handleFinish = () => {
    localStorage.setItem('user_session', 'active');
    router.push('/dashboard');
  };

  return (
    <div className="flex min-h-screen pt-24 bg-white font-sans text-slate-900">
      <div className="flex flex-col w-full lg:w-[45%] p-8 md:p-24 justify-center">
        <AnimatePresence mode="wait">
          {step === 'email' && (
            <motion.div key="email" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
              <h1 className="text-4xl font-black tracking-tighter uppercase italic leading-none">The Future <br /> of Growth.</h1>
              <form onSubmit={handleEmailCheck} className="space-y-4">
                <input required type="email" placeholder="name@university.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none" />
                <button type="submit" className="w-full py-4 bg-black text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-zinc-800 transition-all">Continue</button>
              </form>
            </motion.div>
          )}

          {step === 'signup' && (
            <motion.div key="signup" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <h2 className="text-3xl font-black tracking-tighter italic uppercase">Create Account.</h2>
              <div className="grid grid-cols-2 gap-4">
                <input placeholder="First Name" className="w-full px-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl" />
                <input placeholder="Last Name" className="w-full px-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl" />
              </div>
              <input placeholder="WhatsApp Number" className="w-full px-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl" />
              <select className="w-full px-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl appearance-none">
                <option value="">Select Profession</option>
                <option value="student">Student</option>
                <option value="professional">Professional</option>
              </select>
              <button onClick={handleFinish} className="w-full py-4 bg-black text-white rounded-2xl font-black text-xs uppercase tracking-widest">Create Account</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="hidden lg:flex w-[55%] bg-slate-100 items-center justify-center relative">
        <h3 className="text-4xl font-black italic tracking-tighter text-slate-300 uppercase">Growth Platform.</h3>
      </div>
    </div>
  );
}