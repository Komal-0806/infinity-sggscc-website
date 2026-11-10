import React, { useState } from 'react';
import { 
  Users, 
  Linkedin, 
  ShieldCheck, 
  Info, 
  Calendar, 
  Award, 
  Sparkles,
  ArrowRight,
  ExternalLink 
} from 'lucide-react';
import { teamData, societyInfo } from '../data/societyData';

export default function Team({ onOpenCommunityModal }) {
  const [activeTab, setActiveTab] = useState('2025-26');

  return (
    <section id="team" className="relative py-24 bg-[#0B1020] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10182D] border border-[#6845F5]/30 text-xs font-mono text-[#55A6AC] tracking-wider uppercase mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Leadership & Continuity</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55A6AC] via-[#6845F5] to-[#E32655]">Team</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans leading-relaxed">
            The visionary minds steering initiatives, organizing university competitions, and nurturing tech talent at SGGSCC.
          </p>

          {/* Historical Integrity Alert */}
          <div className="mt-4 inline-flex items-start gap-2.5 p-3.5 rounded-xl bg-[#10182D]/90 border border-[#6845F5]/30 text-xs text-left max-w-2xl text-slate-300">
            <Info className="w-4 h-4 text-[#55A6AC] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white">Historical Record Integrity: </span>
              <span>
                The council roster below documents the verified <strong>2025–26 session leadership</strong>. In compliance with strict college accuracy standards, details are clearly distinguished from upcoming 2026–27 session appointments.
              </span>
            </div>
          </div>
        </div>

        {/* Session Selector Tabs */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('2025-26')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === '2025-26'
                ? 'bg-gradient-to-r from-[#3020A5] to-[#6845F5] text-white shadow-lg shadow-[#6845F5]/30 border border-[#6845F5]'
                : 'bg-[#10182D] text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            2025–26 Executive Council (Verified)
          </button>
          <button
            onClick={() => setActiveTab('2026-27')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === '2026-27'
                ? 'bg-gradient-to-r from-[#3020A5] to-[#6845F5] text-white shadow-lg shadow-[#6845F5]/30 border border-[#6845F5]'
                : 'bg-[#10182D] text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            2026–27 Council Announcements
          </button>
        </div>

        {/* Tab 1: Historical Council (2025–26) */}
        {activeTab === '2025-26' && (
          <div>
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#55A6AC]" />
                <h3 className="text-lg font-bold text-white font-display">
                  {teamData.historicalTenure}
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">
                Archival Record • University of Delhi
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {teamData.councilMembers.map((member, idx) => {
                return (
                  <div
                    key={idx}
                    className="group relative p-6 rounded-2xl bg-[#10182D]/80 border border-slate-800/90 hover:border-[#6845F5]/50 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-[#6845F5]/10 hover:-translate-y-1.5"
                  >
                    <div>
                      {/* Avatar / Initials representation with gradient halo */}
                      <div className="relative mb-5 flex justify-center">
                        <div
                          className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.avatarColor} p-0.5 shadow-lg shadow-[#6845F5]/20 group-hover:scale-105 transition-transform duration-300`}
                        >
                          <div className="w-full h-full rounded-2xl bg-[#0B1020] flex items-center justify-center font-display font-black text-2xl text-white">
                            {member.initials}
                          </div>
                        </div>
                        <div className="absolute -bottom-2 px-2 py-0.5 rounded-full bg-[#10182D] border border-[#55A6AC]/40 text-[10px] font-mono font-semibold text-[#55A6AC]">
                          Verified
                        </div>
                      </div>

                      {/* Info */}
                      <div className="text-center">
                        <h4 className="text-lg font-bold text-white font-display group-hover:text-[#55A6AC] transition-colors">
                          {member.name}
                        </h4>
                        <div className="text-xs font-mono text-[#6845F5] font-semibold mb-1">
                          {member.role}
                        </div>
                        <div className="text-[11px] font-mono text-slate-400 mb-3">
                          {member.tenure}
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed mb-4">
                          {member.bio}
                        </p>
                      </div>
                    </div>

                    {/* Social connection link */}
                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-center">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-[#55A6AC] font-mono transition-colors"
                        aria-label={`View ${member.name} on LinkedIn`}
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                        <span>Society Profile</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 2: 2026–27 Session Recruitment Announcements */}
        {activeTab === '2026-27' && (
          <div className="p-8 sm:p-12 rounded-2xl bg-[#10182D]/90 border border-slate-800 shadow-xl max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-[#6845F5]/20 text-[#6845F5] border border-[#6845F5]/40 flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8" />
            </div>

            <div className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs mb-3">
              Upcoming Academic Session
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-3">
              {teamData.upcomingSessionNotice.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed mb-8">
              {teamData.upcomingSessionNotice.description}
            </p>

            {/* Department Lead Placeholders */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-left">
              {[
                { title: 'Technical & Development', desc: 'Full-stack, hackathons & code repos' },
                { title: 'Cybersecurity & CTF', desc: 'Security workshops & defensive drills' },
                { title: 'Design & Media', desc: 'UI/UX, visual branding & creative media' }
              ].map((pos, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#0B1020] border border-slate-800">
                  <div className="text-[11px] font-mono text-[#55A6AC] uppercase mb-1">
                    Open Track
                  </div>
                  <div className="text-sm font-bold text-white mb-1">{pos.title}</div>
                  <div className="text-xs text-slate-400">{pos.desc}</div>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenCommunityModal}
              type="button"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#3020A5] via-[#6845F5] to-[#E32655] shadow-lg shadow-[#6845F5]/30 hover:opacity-95 transition-all"
            >
              <span>Express Interest for Upcoming Recruitment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
