"use client";
import React from 'react';
import { ArrowLeft, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function MfEducation() {
  return (
    <div className="min-h-screen bg-white p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-medium tracking-tight mb-8">Mutual Fund Essentials</h1>
        <p className="text-slate-500 leading-relaxed italic mb-12 border-l-4 pl-6 border-purple-200">
          "The best investment you can make is in yourself." - Warren Buffett
        </p>
        {/* Add your study links here */}
      </div>
    </div>
  );
}