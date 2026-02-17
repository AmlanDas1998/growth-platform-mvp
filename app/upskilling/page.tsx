"use client";
import React from 'react';
import { ArrowLeft, ExternalLink, Award } from 'lucide-react';
import Link from 'next/link';

export default function UpskillingPage() {
  return (
    <div className="min-h-screen bg-white p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase mb-10"><ArrowLeft size={14}/> Home</Link>
        <h1 className="text-5xl font-medium tracking-tight mb-8">Upskilling & Certifications</h1>
        <div className="grid gap-4">
          <a href="#" className="p-8 border rounded-[2rem] hover:bg-slate-50 transition-all flex justify-between items-center group">
            <div>
              <h3 className="text-xl font-bold">NISM Series V-A</h3>
              <p className="text-slate-500">Mutual Fund Distributors Certification</p>
            </div>
            <ExternalLink className="opacity-0 group-hover:opacity-100 transition-all" />
          </a>
        </div>
      </div>
    </div>
  );
}