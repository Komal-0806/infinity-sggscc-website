import React, { useState } from 'react';
import { 
  Users, 
  ShieldCheck, 
  Sparkles, 
  Maximize2, 
  X, 
  Award,
  Crown
} from 'lucide-react';
import { teamData, allTeamMembers } from '../data/societyData';

export default function Team({ onOpenCommunityModal }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const filterOptions = [
    { id: 'all', label: 'All Team Members (14)' },
    { id: 'office-bearers', label: 'Senior Office Bearers (5)' },
    { id: 'departmental-heads', label: 'Departmental Heads (7)' },
    { id: 'executives', label: 'Senior Executives (2)' },
  ];

  const getFilteredList = () => {
    switch (activeFilter) {
      case 'office-bearers':
        return teamData.officeBearers;
      case 'departmental-heads':
        return teamData.departmentalHeads;
      case 'executives':
        return teamData.seniorExecutives;
      default:
        return allTeamMembers;
    }
  };

  const membersToDisplay = getFilteredList();

  return (
    <section id="team" className="relative py-24 bg-[#0B1020] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10182D] border border-[#6845F5]/30 text-xs font-mono text-[#55A6AC] tracking-wider uppercase mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Official Society Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight mb-4">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55A6AC] via-[#6845F5] to-[#E32655]">Team</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans leading-relaxed">
            The official executive council, departmental heads, and senior leadership steering INFINITY at Sri Guru Gobind Singh College of Commerce for the <span className="text-white font-semibold">2026–27 session</span>.
          </p>

          {/* Authenticity verification note */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#10182D]/90 border border-[#55A6AC]/30 text-xs text-[#55A6AC] font-mono">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>Official 2026–27 council posters verified directly from society announcements.</span>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setActiveFilter(opt.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeFilter === opt.id
                  ? 'bg-gradient-to-r from-[#3020A5] to-[#6845F5] text-white shadow-lg shadow-[#6845F5]/25 border border-[#6845F5]'
                  : 'bg-[#10182D] text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Logical Tiered Layout when 'All' is active: Office Bearers -> Departmental Heads -> Senior Executives */}
        {activeFilter === 'all' ? (
          <div className="space-y-16">
            
            {/* TIER 1: Senior Office Bearers 2026-27 */}
            <div>
              <div className="flex items-center gap-2.5 mb-8 pb-3 border-b border-slate-800">
                <Crown className="w-5 h-5 text-[#E32655]" />
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  Senior Office Bearers <span className="text-xs font-mono font-normal text-slate-400">({teamData.currentSession})</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {teamData.officeBearers.map((member) => (
                  <TeamCard 
                    key={member.id} 
                    member={member} 
                    onInspect={() => setSelectedPhoto(member)} 
                  />
                ))}
              </div>
            </div>

            {/* TIER 2: Departmental Heads 2026-27 */}
            <div>
              <div className="flex items-center gap-2.5 mb-8 pb-3 border-b border-slate-800">
                <Award className="w-5 h-5 text-[#55A6AC]" />
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  Departmental Heads <span className="text-xs font-mono font-normal text-slate-400">(Technical, Marketing, PR, Logistics)</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {teamData.departmentalHeads.map((member) => (
                  <TeamCard 
                    key={member.id} 
                    member={member} 
                    onInspect={() => setSelectedPhoto(member)} 
                  />
                ))}
              </div>
            </div>

            {/* TIER 3: Senior Executives 2026-27 */}
            <div>
              <div className="flex items-center gap-2.5 mb-8 pb-3 border-b border-slate-800">
                <Users className="w-5 h-5 text-[#6845F5]" />
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  Senior Executive Members
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {teamData.seniorExecutives.map((member) => (
                  <TeamCard 
                    key={member.id} 
                    member={member} 
                    onInspect={() => setSelectedPhoto(member)} 
                  />
                ))}
              </div>
            </div>

          </div>
        ) : (
          /* Filtered Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {membersToDisplay.map((member) => (
              <TeamCard 
                key={member.id} 
                member={member} 
                onInspect={() => setSelectedPhoto(member)} 
              />
            ))}
          </div>
        )}

        {/* Join the Team / Community CTA Bar */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#10182D] via-[#1c183d] to-[#10182D] border border-[#6845F5]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-[#6845F5]/20 text-[#6845F5] border border-[#6845F5]/40 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">
                Aspire to be a part of the INFINITY team?
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Departmental recruitment drives and junior executive auditions open at the beginning of each academic semester at SGGSCC.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenCommunityModal}
            type="button"
            className="shrink-0 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-[#3020A5] via-[#6845F5] to-[#E32655] shadow-md shadow-[#6845F5]/25 hover:shadow-lg transition-all"
          >
            Join INFINITY
          </button>
        </div>

      </div>

      {/* Full Photo Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative max-w-lg w-full rounded-2xl bg-[#10182D] border border-[#6845F5]/40 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[3/4] w-full bg-[#070B16] flex items-center justify-center p-2">
              <img
                src={selectedPhoto.image}
                alt={`${selectedPhoto.name} - ${selectedPhoto.designation}`}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/70 text-white hover:bg-black transition-colors"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5 flex items-center justify-between border-t border-slate-800 bg-[#10182D]">
              <div>
                <h4 className="text-lg font-bold text-white">{selectedPhoto.name}</h4>
                <div className="text-xs font-mono text-[#55A6AC]">{selectedPhoto.designation}</div>
              </div>
              <span className="px-2.5 py-1 text-[10px] font-mono rounded bg-slate-800 text-slate-300 border border-slate-700">
                {selectedPhoto.roleCategory}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/**
 * Reusable Team Member Card
 * Accurately fits and displays the official announcement photograph with object-contain
 * so no text or names are cropped, and removes individual LinkedIn redirect icons.
 */
function TeamCard({ member, onInspect }) {
  return (
    <div className="group relative rounded-2xl bg-[#10182D]/90 border border-slate-800/90 hover:border-[#6845F5]/50 overflow-hidden transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-[#6845F5]/10 hover:-translate-y-1.5">
      {/* Photograph Container with object-contain */}
      <div 
        onClick={onInspect}
        className="relative aspect-[3/4] w-full bg-gradient-to-b from-[#111827] to-[#0B1020] p-2 flex items-center justify-center overflow-hidden cursor-pointer"
        title="Click to view full photograph"
      >
        <img
          src={member.image}
          alt={`${member.name} - ${member.designation} of INFINITY SGGSCC`}
          loading="lazy"
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
        />

        {/* Quick View Pill */}
        <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/70 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm shadow-md">
          <Maximize2 className="w-3.5 h-3.5" />
        </div>

        {/* Verification Tag */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold bg-[#0B1020]/95 text-[#55A6AC] border border-[#55A6AC]/30 backdrop-blur-md shadow-sm">
            <ShieldCheck className="w-2.5 h-2.5" />
            <span>26–27</span>
          </span>
        </div>
      </div>

      {/* Member Details */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow">
        <div>
          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
            {member.department}
          </div>
          <h4 className="text-base font-bold text-white font-display group-hover:text-[#55A6AC] transition-colors leading-snug">
            {member.name}
          </h4>
          <div className="text-xs font-semibold text-[#6845F5] font-sans mt-0.5">
            {member.designation}
          </div>
        </div>

        <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>{member.roleCategory}</span>
          <span className="text-[10px] text-slate-400">SGGSCC</span>
        </div>
      </div>
    </div>
  );
}
