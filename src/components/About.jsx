import React, { useState } from 'react';
import { 
  Lightbulb, 
  Sparkles, 
  Users, 
  Award, 
  CheckCircle2, 
  Compass, 
  ShieldAlert, 
  Target, 
  Eye, 
  GraduationCap,
  ExternalLink 
} from 'lucide-react';
import { societyInfo, corePillars } from '../data/societyData';

export default function About() {
  const [selectedPillar, setSelectedPillar] = useState('innovation');

  const iconMap = {
    Lightbulb: Lightbulb,
    Sparkles: Sparkles,
    Users: Users,
    Award: Award,
  };

  return (
    <section id="about" className="relative py-24 bg-[#0B1020] border-t border-slate-800/80">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#55A6AC]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#E32655]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10182D] border border-[#6845F5]/30 text-xs font-mono text-[#55A6AC] tracking-wider uppercase mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Discover Our Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55A6AC] via-[#6845F5] to-[#E32655]">INFINITY</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans leading-relaxed">
            The official student technology society of Sri Guru Gobind Singh College of Commerce, University of Delhi.
          </p>
        </div>

        {/* Verified Society Description Block */}
        <div className="relative mb-20">
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#55A6AC]/40 via-[#6845F5]/30 to-[#E32655]/40 opacity-70 blur-md" />
          <div className="relative p-6 sm:p-10 rounded-2xl bg-[#10182D]/90 border border-[#6845F5]/30 backdrop-blur-xl">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              
              {/* Left Quote & College Heritage */}
              <div className="flex-1">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#55A6AC] tracking-wider mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#55A6AC]" />
                  <span>Official Verified Description</span>
                </div>
                <blockquote className="text-lg sm:text-2xl text-slate-100 font-medium leading-relaxed italic mb-6">
                  "{societyInfo.officialDescription}"
                </blockquote>
                
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/30 border border-white/5">
                    <GraduationCap className="w-4 h-4 text-[#6845F5]" />
                    <span>SGGSCC, University of Delhi</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/30 border border-white/5">
                    <span className="text-[#55A6AC]">●</span>
                    <span>Pitampura, New Delhi</span>
                  </div>
                  <a
                    href="https://www.sggscc.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-slate-300 hover:text-[#55A6AC] transition-colors"
                  >
                    <span>sggscc.ac.in</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Right Emblem Card */}
              <div className="w-full md:w-72 p-5 rounded-xl bg-[#0B1020]/90 border border-white/10 flex flex-col items-center text-center">
                <div className="p-3 rounded-xl bg-[#10182D] border border-[#6845F5]/20 mb-3 shadow-inner">
                  <img
                    src="/assets/infinity-official-logo.png"
                    alt="INFINITY Emblem"
                    className="h-14 w-auto object-contain"
                  />
                </div>
                <h3 className="text-base font-bold text-white mb-1">INFINITY</h3>
                <p className="text-xs text-slate-400 font-script-society text-base text-[#55A6AC] mb-3">
                  The Tech Society
                </p>
                <div className="w-full py-2 px-3 rounded-lg bg-[#10182D] border border-slate-800 text-[11px] font-mono text-slate-300">
                  Fostering limitlessness in tech since inception.
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 4 Core Highlight Cards (Innovation, Creativity, Collaboration, Excellence) */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-2">
              Our Core Pillars
            </h3>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Four fundamental values driving every workshop, hackathon, and technical competition we host.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePillars.map((pillar) => {
              const IconComponent = iconMap[pillar.icon] || Lightbulb;
              const isSelected = selectedPillar === pillar.id;

              return (
                <div
                  key={pillar.id}
                  onClick={() => setSelectedPillar(pillar.id)}
                  className={`group relative p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-[#10182D] border-2 shadow-xl'
                      : 'bg-[#10182D]/60 hover:bg-[#10182D] border border-slate-800/80 hover:border-slate-700'
                  }`}
                  style={{
                    borderColor: isSelected ? pillar.color : undefined,
                    boxShadow: isSelected ? `0 10px 30px -10px ${pillar.glowColor}` : undefined,
                  }}
                >
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="p-3 rounded-xl transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: `${pillar.color}15`,
                        border: `1px solid ${pillar.color}35`,
                        color: pillar.color,
                      }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400">
                      {pillar.tagline}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h4 className="text-xl font-bold text-white mb-2 font-display">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {pillar.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2 pt-3 border-t border-slate-800/80">
                    {pillar.points.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2
                          className="w-3.5 h-3.5 mt-0.5 shrink-0"
                          style={{ color: pillar.color }}
                        />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Proposed Editorial Copy: Mission & Vision (With strict authenticity disclaimer) */}
        <div className="p-8 rounded-2xl bg-[#0E1428] border border-slate-800/90 relative overflow-hidden">
          <div className="flex items-center gap-2 mb-6">
            <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-medium">
              Proposed Society Ethos & Direction
            </span>
            <span className="text-xs text-slate-500 font-mono">
              (Editorial copy formulated in alignment with official objectives)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Proposed Mission */}
            <div className="p-6 rounded-xl bg-[#10182D]/70 border border-slate-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-[#55A6AC]/15 text-[#55A6AC]">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white">Proposed Mission</h4>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                To build an active, student-first innovation laboratory where curiosity is translated into technical capability through hands-on hackathons, cybersecurity learning, and collaborative software development.
              </p>
            </div>

            {/* Proposed Vision */}
            <div className="p-6 rounded-xl bg-[#10182D]/70 border border-slate-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-[#E32655]/15 text-[#E32655]">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white">Proposed Vision</h4>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                To establish SGGSCC as a premiere collegiate tech hub across Delhi University, known for graduating technically fearless thinkers who master modern tooling, champion cybersecurity vigilance, and build meaningful community.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
