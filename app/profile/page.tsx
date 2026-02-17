"use client";
import React, { useState } from 'react';
import { Camera, MapPin, Mail, Phone, Linkedin, Instagram, Youtube, Sparkles, ArrowLeft, Save, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function MyProfile() {
  // 1. STATE MANAGEMENT: The central "Memory" for all your fields
  const [profile, setProfile] = useState({
    fullName: "Amlan Das", //
    title: "Embedded Finance Strategist | NBFC Partnerships",
    location: "Pune, India", //
    email: "amlan@avirtoya.com",
    phone: "+91 83349 12345",
    linkedin: "linkedin.com/in/amlandas",
    instagram: "@avirtoya",
    youtube: "youtube.com/@avirtoya",
    photo: null as string | null
  });

  const [isSaved, setIsSaved] = useState(false);

  // 2. LOGIC: Handling input changes and simulated saving
  const handleInputChange = (field: string, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
    setIsSaved(false); // Reset saved status when typing
  };

  const handleSave = () => {
    // This is where we will eventually add the Supabase/Database "Save" call
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000); // Hide success message after 3 seconds
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-4 md:p-12">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER & GLOBAL ACTIONS */}
        <div className="flex justify-between items-center mb-10">
          <Link href="/dashboard" className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-widest hover:text-black transition-all">
            <ArrowLeft size={14} /> Back to Dashboard
          </Link>
          
          <div className="flex items-center gap-4">
            {isSaved && (
              <span className="text-emerald-600 text-xs font-bold flex items-center gap-1 animate-fade-in">
                <CheckCircle size={14} /> Changes Saved Successfully
              </span>
            )}
            <button 
              onClick={handleSave}
              className="bg-black text-white px-10 py-3 rounded-full font-bold text-sm hover:shadow-xl flex items-center gap-2 transition-all active:scale-95"
            >
              <Save size={16} /> Save Profile
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT: THE INPUT FORM (THE EDITOR) */}
          <div className="lg:col-span-7 bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm space-y-8">
            <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
              Edit Profile Info
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Profile Photo Placeholder Logic */}
              <div className="md:col-span-2 flex items-center gap-6 pb-6 border-b border-slate-50">
                <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 border-2 border-dashed border-slate-200 relative group overflow-hidden">
                  <Camera size={32} />
                  <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Profile Photo</h4>
                  <p className="text-xs text-slate-400">Upload a professional headshot for your CV.</p>
                </div>
              </div>

              {/* Identity Fields */}
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-1">Full Name</label>
                <input 
                  type="text" 
                  value={profile.fullName} 
                  onChange={(e) => handleInputChange('fullName', e.target.value)} 
                  className="w-full p-4 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium" 
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-1">Professional Title</label>
                <input 
                  type="text" 
                  value={profile.title} 
                  onChange={(e) => handleInputChange('title', e.target.value)} 
                  className="w-full p-4 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium" 
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-1">Location (City, Country)</label>
                <input 
                  type="text" 
                  value={profile.location} 
                  onChange={(e) => handleInputChange('location', e.target.value)} 
                  className="w-full p-4 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium" 
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-1">Email (Professional)</label>
                <input 
                  type="email" 
                  value={profile.email} 
                  onChange={(e) => handleInputChange('email', e.target.value)} 
                  className="w-full p-4 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium" 
                />
              </div>

              <div className="md:col-span-2 space-y-1">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-1">Phone Number (Optional)</label>
                <input 
                  type="text" 
                  value={profile.phone} 
                  onChange={(e) => handleInputChange('phone', e.target.value)} 
                  className="w-full p-4 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium" 
                />
              </div>
            </div>

            {/* Social Links Section */}
            <div className="pt-6 border-t border-slate-50 space-y-4">
              <p className="text-[10px] font-black uppercase text-slate-400 ml-1">Social Ecosystem</p>
              
              <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-2xl group focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                <div className="bg-white p-3 rounded-xl shadow-sm text-blue-600"><Linkedin size={20} /></div>
                <input 
                  type="text" 
                  value={profile.linkedin} 
                  onChange={(e) => handleInputChange('linkedin', e.target.value)} 
                  className="flex-1 bg-transparent border-none outline-none text-sm font-medium" 
                  placeholder="LinkedIn Profile URL"
                />
              </div>

              <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-2xl group focus-within:ring-2 focus-within:ring-pink-100 transition-all">
                <div className="bg-white p-3 rounded-xl shadow-sm text-pink-600"><Instagram size={20} /></div>
                <input 
                  type="text" 
                  value={profile.instagram} 
                  onChange={(e) => handleInputChange('instagram', e.target.value)} 
                  className="flex-1 bg-transparent border-none outline-none text-sm font-medium" 
                  placeholder="Instagram Handle"
                />
              </div>

              <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-2xl group focus-within:ring-2 focus-within:ring-red-100 transition-all">
                <div className="bg-white p-3 rounded-xl shadow-sm text-red-600"><Youtube size={20} /></div>
                <input 
                  type="text" 
                  value={profile.youtube} 
                  onChange={(e) => handleInputChange('youtube', e.target.value)} 
                  className="flex-1 bg-transparent border-none outline-none text-sm font-medium" 
                  placeholder="YouTube Channel URL"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: LIVE CARD PREVIEW (Matches your Screenshot) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-[4rem] p-1 shadow-2xl overflow-hidden sticky top-32 border border-slate-100 transition-all">
              {/* Card Banner */}
              <div className="bg-slate-900 h-40 relative">
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
                  <div className="w-40 h-40 rounded-full border-[6px] border-white bg-blue-600 flex items-center justify-center text-white text-4xl font-black shadow-lg">
                    {profile.fullName.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="pt-24 pb-16 px-10 text-center space-y-6">
                <div>
                  <h3 className="text-3xl font-black text-slate-900 mb-2 flex items-center justify-center gap-2">
                    {profile.fullName} <Sparkles size={20} className="text-yellow-500 fill-yellow-500" />
                  </h3>
                  <p className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em]">
                    {profile.title}
                  </p>
                </div>

                <div className="flex flex-col items-center gap-3 text-slate-400 font-medium text-sm">
                  <span className="flex items-center gap-2"><MapPin size={16} className="text-slate-300" /> {profile.location}</span>
                  <span className="flex items-center gap-2"><Mail size={16} className="text-slate-300" /> {profile.email}</span>
                  {profile.phone && <span className="flex items-center gap-2"><Phone size={16} className="text-slate-300" /> {profile.phone}</span>}
                </div>

                {/* Social Icon Pills */}
                <div className="flex justify-center gap-4 pt-4">
                  <div className="w-12 h-12 rounded-2xl border border-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-100 transition-all cursor-pointer shadow-sm">
                    <Linkedin size={22} />
                  </div>
                  <div className="w-12 h-12 rounded-2xl border border-slate-100 flex items-center justify-center text-slate-400 hover:text-pink-600 hover:bg-pink-50 hover:border-pink-100 transition-all cursor-pointer shadow-sm">
                    <Instagram size={22} />
                  </div>
                  <div className="w-12 h-12 rounded-2xl border border-slate-100 flex items-center justify-center text-slate-400 hover:text-red-600 hover:bg-red-50 hover:border-red-100 transition-all cursor-pointer shadow-sm">
                    <Youtube size={22} />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}