"use client";
import React from 'react';
import { ArrowLeft, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function SipEducation() {
  return (
    <div className="min-h-screen bg-white p-8 md:p-16">
      <div className="max-w-4xl mx-auto text-center py-20">
        <TrendingUp size={64} className="mx-auto text-emerald-500 mb-8" />
        <h1 className="text-5xl font-medium tracking-tight mb-4">SIP Learning Module</h1>
        <p className="text-slate-500 text-lg mb-10">Master the mathematics of long-term wealth creation.</p>
        <Link href="/" className="px-8 py-3 bg-black text-white rounded-full font-bold uppercase text-xs">Return Home</Link>
      </div>
    </div>
  );
}