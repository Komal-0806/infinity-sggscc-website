import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  Info,
  Trophy,
  CheckCircle2,
  ExternalLink,
  Bell,
  Instagram,
  Linkedin
} from 'lucide-react';
import { eventsData, societyInfo } from '../data/societyData';
import EventDetailModal from './EventDetailModal';

export default function Events({ onOpenCommunityModal }) {
  // Main view toggle: 'upcoming' | 'past'
  const [activeTab, setActiveTab] = useState('past');
  // Secondary filter for past events: 'all' | 'hackathons' | 'design' | 'cybersecurity' | 'gaming' | 'workshops'
  const [pastFilter, setPastFilter] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const upcomingEvents = eventsData.filter(e => e.status === 'Upcoming' || e.status === 'Ongoing');
  const pastEvents = eventsData.filter(e => e.status === 'Completed');

  const filteredPastEvents = pastEvents.filter(e => {
    if (pastFilter === 'hackathons') return e.isHackathon || e.category === 'Hackathons';
    if (pastFilter === 'design') return e.category.includes('Design') || e.category.includes('Interdisciplinary');
    if (pastFilter === 'cybersecurity') return e.category === 'Cybersecurity';
    if (pastFilter === 'gaming') return e.category === 'Gaming & Esports';
    if (pastFilter === 'workshops') return e.category === 'Workshops';
    return true;
  });

  return (
    <section id="events" className="relative py-24 bg-[#0B1020] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10182D] border border-[#6845F5]/30 text-xs font-mono text-[#55A6AC] tracking-wider uppercase mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Campus Competitions & Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight mb-4">
            Events & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55A6AC] via-[#6845F5] to-[#E32655]">Initiatives</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans leading-relaxed">
            From the flagship TechTonics festival and Cognition AI Hackathon to cybersecurity awareness initiatives, collegiate esports, and hands-on workshops at SGGSCC.
          </p>

          {/* Authenticity notice */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[#10182D]/90 border border-slate-800 text-[11px] font-mono text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-[#55A6AC]" />
            <span>All initiatives are verified from official college archives, Unstop listings, and society announcements.</span>
          </div>
        </div>

        {/* Primary View Toggle: Upcoming vs Past & Flagship */}
        <div className="flex items-center justify-center mb-10">
          <div className="p-1 rounded-2xl bg-[#10182D] border border-slate-800 flex items-center gap-1 shadow-lg">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'upcoming'
                  ? 'bg-gradient-to-r from-[#3020A5] to-[#6845F5] text-white shadow-md shadow-[#6845F5]/30 border border-[#6845F5]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Bell className="w-4 h-4" />
              <span>Upcoming Events</span>
              {upcomingEvents.length > 0 && (
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('past')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'past'
                  ? 'bg-gradient-to-r from-[#3020A5] to-[#6845F5] text-white shadow-md shadow-[#6845F5]/30 border border-[#6845F5]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Trophy className="w-4 h-4" />
              <span>Past Events & Flagship Initiatives</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-slate-800 text-slate-300">
                {pastEvents.length}
              </span>
            </button>
          </div>
        </div>

        {/* VIEW 1: Upcoming Events */}
        {activeTab === 'upcoming' && (
          <div>
            {upcomingEvents.length === 0 ? (
              /* Exact Required Empty State */
              <div className="max-w-2xl mx-auto p-8 sm:p-12 rounded-3xl bg-[#10182D]/90 border border-slate-800 text-center relative overflow-hidden shadow-2xl">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-[#3020A5]/20 via-[#6845F5]/15 to-[#55A6AC]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#0B1020] border border-[#6845F5]/40 flex items-center justify-center mb-5 text-[#55A6AC] shadow-inner">
                    <Calendar className="w-8 h-8" />
                  </div>

                  <span className="px-3 py-1 rounded-full text-[11px] font-mono text-[#55A6AC] bg-[#55A6AC]/10 border border-[#55A6AC]/30 mb-4">
                    2026–27 Academic Session Calendar
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-3 max-w-lg">
                    New events and exciting opportunities are coming soon. Stay connected with INFINITY for updates.
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto mb-8 leading-relaxed">
                    Official schedule announcements, hackathon registrations, and tournament brackets are released in coordination with the SGGSCC semester calendar.
                  </p>

                  {/* Connect for updates */}
                  <div className="flex flex-wrap items-center justify-center gap-3 w-full">
                    <a
                      href={societyInfo.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#E32655] to-[#6845F5] hover:opacity-95 shadow-md shadow-[#E32655]/20 transition-all"
                    >
                      <Instagram className="w-4 h-4" />
                      <span>Follow on Instagram (@infinity.sggscc)</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={societyInfo.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-[#0B1020] hover:text-white border border-slate-700 transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-[#55A6AC]" />
                      <span>LinkedIn Updates</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.map((evt) => (
                  <EventCard key={evt.id} evt={evt} onSelect={() => setSelectedEvent(evt)} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* VIEW 2: Past Events & Flagship Initiatives */}
        {activeTab === 'past' && (
          <div>
            {/* Filter Sub-Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {[
                { id: 'all', label: 'All Flagships & Events' },
                { id: 'hackathons', label: 'Hackathons (Cognition & TechTonics)' },
                { id: 'design', label: 'Design & AI Marketing' },
                { id: 'cybersecurity', label: 'Cybersecurity Initiatives' },
                { id: 'gaming', label: 'Esports & Gaming' },
                { id: 'workshops', label: 'Skill Workshops' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setPastFilter(opt.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    pastFilter === opt.id
                      ? 'bg-[#6845F5] text-white shadow-md shadow-[#6845F5]/30 border border-[#6845F5]'
                      : 'bg-[#10182D] text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPastEvents.map((evt) => (
                <EventCard key={evt.id} evt={evt} onSelect={() => setSelectedEvent(evt)} />
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Render Event Details Modal if open */}
      {selectedEvent && (
        <EventDetailModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          onOpenCommunityModal={onOpenCommunityModal}
        />
      )}
    </section>
  );
}

/**
 * Reusable Event Card
 */
function EventCard({ evt, onSelect }) {
  const isCompleted = evt.status === 'Completed';

  return (
    <div
      className={`group relative rounded-2xl bg-[#10182D]/90 border transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 ${
        isCompleted 
          ? 'border-slate-800/90 hover:border-[#6845F5]/50 hover:shadow-[#6845F5]/10' 
          : 'border-slate-800/90 hover:border-[#6845F5]/50 hover:shadow-[#6845F5]/10'
      }`}
    >
      <div>
        {/* Card Visual Header */}
        <div className="relative h-48 w-full bg-[#0B1020] overflow-hidden rounded-t-2xl">
          <img
            src={evt.image}
            alt={evt.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.target.src = '/assets/placeholders/event-hackathon.svg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10182D] via-transparent to-black/40" />

          {/* Top Status & Category Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
            <span className="px-2.5 py-1 text-[11px] font-mono font-semibold rounded-full bg-[#0B1020]/90 text-white border border-white/10 shadow-sm backdrop-blur-md">
              {evt.category}
            </span>

            {/* Status indicator badge */}
            {evt.status === 'Upcoming' && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono font-semibold rounded-full bg-[#6845F5]/20 text-[#6845F5] border border-[#6845F5]/40 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6845F5] animate-pulse" />
                <span>Upcoming</span>
              </span>
            )}
            {evt.status === 'Completed' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-mono font-semibold rounded-full bg-slate-800/90 text-slate-300 border border-slate-700 backdrop-blur-md">
                <CheckCircle2 className="w-3 h-3 text-[#55A6AC]" />
                <span>{evt.statusBadge || 'Concluded'}</span>
              </span>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
            <Calendar className="w-3.5 h-3.5 text-[#55A6AC]" />
            <span>{evt.dateTime}</span>
          </div>

          <h3 className="text-lg font-bold text-white font-display mb-2.5 group-hover:text-[#55A6AC] transition-colors leading-snug">
            {evt.title}
          </h3>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
            {evt.shortDesc}
          </p>

          <div className="space-y-1.5 pt-3 border-t border-slate-800 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#E32655] shrink-0" />
              <span className="truncate">{evt.venue}</span>
            </div>
            {evt.source && (
              <div className="flex items-center gap-1.5 text-[11px] text-[#55A6AC]">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{evt.source}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Card Action Button */}
      <div className="px-6 pb-6 pt-2">
        <button
          onClick={onSelect}
          type="button"
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-[#6845F5] transition-all duration-200 border border-slate-700/80 hover:border-[#6845F5] shadow-sm"
        >
          <span>View Initiative Details & Archive</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
