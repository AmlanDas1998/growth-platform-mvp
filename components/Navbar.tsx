"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Menu, X, GraduationCap, Briefcase } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "The Hub", href: "/" },
    { name: "SIP Academy", href: "/sip-education" }, //
    { name: "Mutual Funds", href: "/mf-education" }, //
    { name: "CV Builder", href: "/cv-builder" }, //
    { name: "Site Builder", href: "/site-builder" }, //
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-black/10 backdrop-blur-2xl border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          
          {/* Brand Identity */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-cyan-500 text-black p-1.5 rounded-lg group-hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all">
              <Zap size={16} className="fill-black" />
            </div>
            <span className="font-black text-sm tracking-tighter uppercase italic text-white">
              AMLAN <span className="text-cyan-400">DAS.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Access Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="px-6 py-2.5 bg-white text-black rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-cyan-400 hover:text-white transition-all">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 bg-zinc-900/95 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-10 flex flex-col gap-8 lg:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-2xl font-black italic tracking-tighter text-white hover:text-cyan-400 flex items-center justify-between"
              >
                {link.name} <Zap size={16} className="text-cyan-400 opacity-0 group-hover:opacity-100" />
              </Link>
            ))}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
              <Link href="/login" className="py-4 bg-white text-black text-center rounded-2xl font-black text-[10px] uppercase tracking-widest">Student</Link>
              <Link href="/login" className="py-4 border border-white/20 text-white text-center rounded-2xl font-black text-[10px] uppercase tracking-widest">Recruiter</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}