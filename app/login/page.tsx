"use client";
import React, { useState } from 'react';
import { Sparkles, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SmartLogin() {
  const router = useRouter();
  
  // These are the "Memory" states for the robot
  const [step, setStep] = useState('email'); // 'email', 'password', or 'signup'
  const [email, setEmail] = useState('');
  
  // A fake list of users we already know
  const existingUsers = ['test@gmail.com', 'amlan@avirtoya.com'];

  const handleEmailCheck = () => {
    if (existingUsers.includes(email.toLowerCase())) {
      setStep('password');
    } else {
      setStep('signup');
    }
  };

  const handleFinish = () => {
    router.push('/'); // Go to dashboard
  };

  return (
    <div className="flex min-h-screen bg-white font-sans text-slate-900">
      
      {/* LEFT SIDE: Dynamic Form */}
      <div className="flex flex-col w-full lg:w-[45%] p-8 md:p-24 justify-center">
        
        {/* Back Button for Password/Signup steps */}
        {step !== 'email' && (
          <button onClick={() => setStep('email')} className="flex items-center gap-2 text-slate-400 hover:text-black mb-8 transition-all">
            <ArrowLeft size={18} /> Back
          </button>
        )}

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-8">
            <div className="bg-black p-1 rounded-lg text-white"><Sparkles size={20} /></div>
            <span className="font-bold tracking-tighter">GROWTH PLATFORM</span>
          </div>
          
          <h1 className="text-4xl font-medium tracking-tight mb-2">
            {step === 'email' && "Welcome"}
            {step === 'password' && "Welcome back"}
            {step === 'signup' && "Create your account"}
          </h1>
          <p className="text-slate-500">
            {step === 'email' && "Enter your email to get started."}
            {step === 'password' && `Enter password for ${email}`}
            {step === 'signup' && "Let's get to know you better."}
          </p>
        </div>

        <div className="space-y-4 max-w-sm">
          
          {/* STEP 1: JUST EMAIL */}
          {step === 'email' && (
            <>
              <input 
                type="email" 
                placeholder="name@example.com" 
                className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={handleEmailCheck} className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-slate-800 transition-all">
                Continue
              </button>
            </>
          )}

          {/* STEP 2: EXISTING USER (Password) */}
          {step === 'password' && (
            <>
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button onClick={handleFinish} className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-slate-800 transition-all">
                Sign In
              </button>
              <button className="text-sm text-blue-600 font-medium hover:underline w-full text-center">
                Forgot password?
              </button>
            </>
          )}

          {/* STEP 3: NEW USER (Full Details) */}
          {step === 'signup' && (
            <div className="space-y-3">
              <div className="flex gap-2">
                <input type="text" placeholder="First Name" className="w-1/2 px-5 py-3 rounded-xl border border-slate-200 outline-none" />
                <input type="text" placeholder="Last Name" className="w-1/2 px-5 py-3 rounded-xl border border-slate-200 outline-none" />
              </div>
              <input type="tel" placeholder="WhatsApp Number" className="w-full px-5 py-3 rounded-xl border border-slate-200 outline-none" />
              <select className="w-full px-5 py-3 rounded-xl border border-slate-200 outline-none bg-white text-slate-500">
                <option value="">Select Profession</option>
                <option value="student">Student</option>
                <option value="salaried">Salaried</option>
                <option value="professional">Professional</option>
                <option value="self-employed">Self-employed</option>
              </select>
              <button onClick={handleFinish} className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg">
                Create Account
              </button>
            </div>
          )}
        </div>
      </div>

      {/* RIGHT SIDE (Stayed the same for beauty) */}
      <div className="hidden lg:flex w-[55%] bg-[#fcfcfc] p-12 items-center justify-center border-l border-slate-100">
        <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" className="object-cover w-full h-full" alt="UI" />
        </div>
      </div>
    </div>
  );
}