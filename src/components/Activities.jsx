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
  Info
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
            <span>Tech Domains & Student Tracks</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight mb-4">
            What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55A6AC] via-[#6845F5] to-[#E32655]">Explore</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans leading-relaxed">
            Hands-on learning tracks, competitive arenas, and technical domains explored through workshops, student projects, and collegiate events.
          </p>

          {/* Authenticity Notice */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#10182D]/80 border border-slate-800 text-[11px] font-mono text-slate-400">
            <Info className="w-3.5 h-3.5 text-[#55A6AC]" />
            <span>Suggested areas of technological interest — not separate administrative departments.</span>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Domains' },
            { id: 'ai', label: 'AI & Emerging Tech' },
            { id: 'dev', label: 'Web & Software' },
            { id: 'security', label: 'Cybersecurity' },
            { id: 'gaming', label: 'Gaming & Esports' },
            { id: 'competitions', label: 'Competitions' },
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
                  {/* Top Row: Icon & Badge */}
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
                    <span className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-full bg-[#0B1020] text-slate-300 border border-slate-800">
                      {act.badge}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    {act.category}
                  </div>
                  <h3 className="text-xl font-bold text-white font-display mb-3 group-hover:text-[#55A6AC] transition-colors">
                    {act.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
                    {act.shortDesc}
                  </p>

                  {/* Learning topics pills */}
                  <div className="space-y-1.5 mb-6">
                    <div className="text-[11px] font-mono uppercase text-slate-500 font-semibold">
                      Key Highlights & Modules:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {act.topics.map((topic, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-[11px] rounded bg-[#0B1020] text-slate-300 border border-slate-800/80"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedDomain(act)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#55A6AC] hover:text-white transition-colors group/btn"
                  >
                    <span>View Curriculum Outline</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: act.color }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Community Callout Ribbon */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#10182D] via-[#151d38] to-[#10182D] border border-[#6845F5]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-[#6845F5]/20 text-[#6845F5] border border-[#6845F5]/40 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">
                Want to propose a tech topic or lead a peer session?
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                INFINITY empowers students to propose workshops, share repositories, and lead hands-on study jams.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenCommunityModal}
            type="button"
            className="shrink-0 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-[#3020A5] via-[#6845F5] to-[#E32655] shadow-md shadow-[#6845F5]/30 hover:shadow-lg transition-all"
          >
            Connect With The Society
          </button>
        </div>

      </div>

      {/* Domain Detail Modal */}
      {selectedDomain && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-2xl bg-[#10182D] border border-[#6845F5]/40 shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div
                  className="p-3 rounded-xl"
                  style={{
                    backgroundColor: `${selectedDomain.color}20`,
                    border: `1px solid ${selectedDomain.color}40`,
                    color: selectedDomain.color,
                  }}
                >
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase">
                    {selectedDomain.category}
                  </span>
                  <h3 className="text-xl font-bold text-white font-display">
                    {selectedDomain.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedDomain(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-5">
              {selectedDomain.fullDesc}
            </p>

            <div className="mb-6">
              <div className="text-xs font-mono uppercase text-[#55A6AC] font-semibold mb-2">
                Exploration Roadmap & Topics
              </div>
              <ul className="space-y-2">
                {selectedDomain.topics.map((t, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-slate-300 p-2 rounded-lg bg-[#0B1020] border border-slate-800">
                    <span className="text-[#6845F5] font-mono">0{idx + 1}.</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <span className="text-[11px] font-mono text-slate-400">
                Suggested exploration track
              </span>
              <button
                onClick={() => setSelectedDomain(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#6845F5] hover:bg-[#5835E5]"
              >
                Close Overview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
