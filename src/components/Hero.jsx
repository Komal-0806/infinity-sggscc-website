import React from 'react';
import { ArrowRight, Sparkles, Terminal, Calendar, Compass, ShieldCheck, Gamepad2, Cpu } from 'lucide-react';
import HeroInfinityCanvas from './HeroInfinityCanvas';
import { societyInfo } from '../data/societyData';

export default function Hero({ onOpenCommunityModal }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0B1020]"
    >
      {/* 1. Perspective 3D Grid Floor inspired by LinkedIn Banner */}
      <div className="absolute inset-x-0 bottom-0 h-96 perspective-grid-floor pointer-events-none opacity-40 z-0" />

      {/* 2. Abstract Purple 3D Fluid Blobs inspired by LinkedIn Banner */}
      {/* Left Fluid Orb */}
      <div 
        className="absolute -left-28 top-1/4 w-80 h-96 rounded-full bg-gradient-to-tr from-[#3020A5]/40 via-[#6845F5]/30 to-[#55A6AC]/20 blur-3xl pointer-events-none animate-float-slow z-0" 
        aria-hidden="true" 
      />
      {/* Right Fluid Orb */}
      <div 
        className="absolute -right-28 top-1/3 w-96 h-96 rounded-full bg-gradient-to-bl from-[#6845F5]/40 via-[#E32655]/30 to-[#3020A5]/20 blur-3xl pointer-events-none animate-float-medium z-0" 
        aria-hidden="true" 
      />
      {/* Center Ambient Radial Aura */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-gradient-to-b from-[#6845F5]/15 via-[#3020A5]/10 to-transparent blur-3xl pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* 3. Interactive Parametric Infinity Canvas (Teal & Crimson energy loops) */}
      <HeroInfinityCanvas />

      {/* 4. Foreground Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Verification & College Affiliation Ribbon */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#10182D]/90 border border-[#6845F5]/30 shadow-lg backdrop-blur-md mb-6 animate-pulse-slow">
          <div className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#55A6AC] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#55A6AC]"></span>
          </div>
          <span className="text-xs sm:text-sm font-mono tracking-wide text-slate-300">
            Official Tech Society of SGGSCC • University of Delhi
          </span>
        </div>

        {/* Central Society Emblem & Title Group */}
        <div className="flex flex-col items-center mb-6">
          {/* Logo Brand Frame */}
          <div className="relative mb-4 group cursor-pointer" onClick={() => scrollTo('about')}>
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#55A6AC] via-[#6845F5] to-[#E32655] opacity-50 blur-lg group-hover:opacity-85 transition duration-500" />
            <div className="relative p-3 rounded-2xl bg-[#0B1020]/90 border border-white/10 flex items-center justify-center">
              <img
                src="/assets/infinity-official-logo.png"
                alt="INFINITY – The Tech Society Official Logo"
                className="h-16 sm:h-20 w-auto object-contain drop-shadow-md"
              />
            </div>
          </div>

          {/* Tagline */}
          <div className="flex items-center gap-2 mb-3">
            <div className="h-px w-8 bg-[#55A6AC]" />
            <span className="text-base sm:text-lg font-script-society tracking-widest text-[#55A6AC] font-bold">
              {societyInfo.tagline}
            </span>
            <div className="h-px w-8 bg-[#E32655]" />
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white font-display leading-[1.08] mb-6">
            Where Curiosity{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55A6AC] via-[#F5F4FF] to-[#E32655] drop-shadow-[0_0_35px_rgba(104,69,245,0.4)]">
              Meets Innovation.
            </span>
          </h1>

          {/* Short Verified Descriptive Statement */}
          <p className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-300 font-sans font-normal leading-relaxed mb-8">
            Fostering innovation, creativity, and technological excellence among students at{' '}
            <span className="text-white font-semibold">Sri Guru Gobind Singh College of Commerce</span>, University of Delhi.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
          {/* CTA 1: Explore Events */}
          <button
            onClick={() => scrollTo('events')}
            type="button"
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl font-semibold text-white text-base shadow-xl shadow-[#6845F5]/30 hover:shadow-[#6845F5]/60 transition-all duration-300 bg-gradient-to-r from-[#3020A5] via-[#6845F5] to-[#E32655] active:scale-[0.98]"
          >
            <Calendar className="w-5 h-5 text-[#55A6AC] group-hover:scale-110 transition-transform" />
            <span>Explore Events</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* CTA 2: Discover INFINITY */}
          <button
            onClick={() => scrollTo('about')}
            type="button"
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl font-semibold text-slate-200 hover:text-white text-base bg-[#10182D]/80 hover:bg-[#10182D] border border-slate-700/70 hover:border-[#55A6AC]/60 transition-all duration-300 shadow-lg active:scale-[0.98]"
          >
            <Compass className="w-5 h-5 text-slate-400 group-hover:text-[#55A6AC] transition-colors" />
            <span>Discover INFINITY</span>
          </button>
        </div>

        {/* Distinctive Verified Society Activity Highlights (Directly from verified overview) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full max-w-3xl pt-6 border-t border-slate-800/80">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-[#10182D]/60 border border-slate-800/80 text-left backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-[#55A6AC]/10 text-[#55A6AC] border border-[#55A6AC]/20">
              <Gamepad2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Official Domain</div>
              <div className="text-sm font-bold text-white">Gaming Tournaments</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-[#10182D]/60 border border-slate-800/80 text-left backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-[#E32655]/10 text-[#E32655] border border-[#E32655]/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Official Domain</div>
              <div className="text-sm font-bold text-white">Cybersecurity Weeks</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-[#10182D]/60 border border-slate-800/80 text-left backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-[#6845F5]/10 text-[#6845F5] border border-[#6845F5]/20">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Official Domain</div>
              <div className="text-sm font-bold text-white">Tech Competitions</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
