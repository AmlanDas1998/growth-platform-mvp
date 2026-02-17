import Link from 'next/link';
import { Sparkles, User, Home, LayoutDashboard } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-slate-100 py-4 px-8 flex justify-between items-center sticky top-0 z-50 font-sans">
      {/* Brand Identity - Returns to the landing page */}
      <Link href="/" className="flex items-center gap-2 font-black text-xl tracking-tighter">
        <div className="bg-black text-white p-1 rounded-md">
          <Sparkles size={18}/>
        </div>
        GROWTH
      </Link>
      
      {/* Main Navigation Menu */}
      <div className="flex items-center gap-6 text-sm font-bold text-slate-500">
        {/* Core Navigation */}
        <Link href="/" className="flex items-center gap-1 hover:text-black transition-all">
          <Home size={16} /> Home
        </Link>
        
        <Link href="/dashboard" className="flex items-center gap-1 hover:text-black transition-all">
          <LayoutDashboard size={16} /> Dashboard
        </Link>
        
        {/* Divider */}
        <span className="w-[1px] h-4 bg-slate-200 mx-2"></span>

        {/* Specialized Building Tools */}
        <Link href="/cv-builder" className="hover:text-blue-600 transition-all">
          CV Builder
        </Link>
        
        <Link href="/site-builder" className="hover:text-purple-600 transition-all">
          Site Builder
        </Link>
        
        <Link href="/investments" className="hover:text-emerald-600 transition-all">
          Wealth
        </Link>
        
        {/* Personal Profile Management */}
        <Link 
          href="/profile" 
          className="bg-slate-100 text-slate-900 px-4 py-2 rounded-full hover:bg-slate-200 transition-all flex items-center gap-2 border border-slate-200"
        >
          <User size={16} /> My Profile
        </Link>
      </div>
    </nav>
  );
}