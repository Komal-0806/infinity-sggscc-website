import React, { useState } from 'react';
import { 
  Cpu, 
  Globe, 
  ShieldAlert, 
  Gamepad2, 
  Trophy, 
  Code2, 
  ArrowUpRight, 
  Terminal, 
  Layers,
  Sparkles,
  Info,
  X
} from 'lucide-react';
import { activitiesData } from '../data/societyData';

export default function Activities({ onOpenCommunityModal }) {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedDomain, setSelectedDomain] = useState(null);

  const iconMap = {
    Cpu: Cpu,
    Globe: Globe,
    ShieldAlert: ShieldAlert,
    Gamepad2: Gamepad2,
    Trophy: Trophy,
    Code2: Code2,
  };

  const filteredActivities = activeTab === 'all'
    ? activitiesData
    : activitiesData.filter(act => {
        if (activeTab === 'dev') return act.id.includes('web') || act.id.includes('learning');
        if (activeTab === 'security') return act.id.includes('cyber');
        if (activeTab === 'gaming') return act.id.includes('gaming');
        if (activeTab === 'ai') return act.id.includes('ai');
        if (activeTab === 'competitions') return act.id.includes('competitions');
        return true;
      });

  return (
    <section id="activities" className="relative py-24 bg-[#0E1428] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10182D] border border-[#6845F5]/30 text-xs font-mono text-[#55A6AC] tracking-wider uppercase mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Tech Domains & Exploration</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight mb-4">
            What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55A6AC] via-[#6845F5] to-[#E32655]">Explore</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans leading-relaxed">
            Hands-on learning tracks, technical domains, and creative problem-solving explored through collegiate hackathons, workshops, and student collaborations.
          </p>

          {/* Authenticity Notice */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#10182D]/80 border border-slate-800 text-[11px] font-mono text-slate-400">
            <Info className="w-3.5 h-3.5 text-[#55A6AC]" />
            <span>Focus areas of technological interest — not separate administrative college departments.</span>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Focus Areas' },
            { id: 'ai', label: 'AI & Machine Learning' },
            { id: 'dev', label: 'Web & Software' },
            { id: 'security', label: 'Cybersecurity' },
            { id: 'gaming', label: 'Gaming & Esports' },
            { id: 'competitions', label: 'Hackathons & Contests' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-[#6845F5] text-white shadow-lg shadow-[#6845F5]/30 border border-[#6845F5]'
                  : 'bg-[#10182D] text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Activity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.map((act) => {
            const IconComponent = iconMap[act.icon] || Code2;

            return (
              <div
                key={act.id}
                className="group relative p-7 rounded-2xl bg-[#10182D]/80 border border-slate-800/80 hover:border-[#6845F5]/40 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-[#6845F5]/10 hover:-translate-y-1"
              >
                <div>
                  {/* Top Row: Icon & Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="p-3.5 rounded-xl transition-all duration-300 group-hover:scale-105"
                      style={{
                        backgroundColor: `${act.color}15`,
                        border: `1px solid ${act.color}35`,
                        color: act.color,
                      }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-full bg-[#0B1020] text-slate-400 border border-slate-800">
                      {act.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white font-display mb-3 group-hover:text-[#55A6AC] transition-colors">
                    {act.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {act.shortDesc}
                  </p>

                  {/* Topic Tags */}
                  <div className="space-y-2 mb-6">
                    {act.topics.map((topic, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-mono text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: act.color }} />
                        <span className="truncate">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedDomain(act)}
                    className="text-xs font-semibold text-slate-300 group-hover:text-white flex items-center gap-1.5 transition-colors focus:outline-none"
                  >
                    <span>Read Details</span>
                    <ArrowUpRight className="w-4 h-4 text-[#55A6AC] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                  <span className="text-[10px] font-mono text-slate-400">
                    INFINITY Focus
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Community Prompt Banner */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-[#10182D] via-[#1a1c3d] to-[#10182D] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-[#55A6AC]/15 text-[#55A6AC] shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1">
                Have a project or domain you want to explore?
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                INFINITY supports peer study jams, project collaborations, and interdisciplinary hackathon teams.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenCommunityModal}
            className="shrink-0 px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-[#3020A5] to-[#6845F5] hover:opacity-95 shadow-md transition-all"
          >
            Connect With Us
          </button>
        </div>

      </div>

      {/* Domain Detail Modal */}
      {selectedDomain && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedDomain(null)}
        >
          <div 
            className="relative max-w-lg w-full p-6 sm:p-8 rounded-2xl bg-[#10182D] border border-[#6845F5]/40 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedDomain(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div 
                className="p-3 rounded-xl"
                style={{ backgroundColor: `${selectedDomain.color}20`, color: selectedDomain.color }}
              >
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#55A6AC] uppercase tracking-wider">
                  {selectedDomain.category}
                </span>
                <h3 className="text-xl font-bold text-white font-display">
                  {selectedDomain.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {selectedDomain.fullDesc}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase text-slate-400 mb-2 font-semibold">
                Exploration Topics:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedDomain.topics.map((t, i) => (
                  <div key={i} className="p-2 rounded-lg bg-[#0B1020] border border-slate-800 text-xs text-slate-300 font-mono">
                    • {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <span className="text-xs text-slate-400 font-mono">INFINITY SGGSCC Focus Track</span>
              <button
                onClick={() => setSelectedDomain(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
