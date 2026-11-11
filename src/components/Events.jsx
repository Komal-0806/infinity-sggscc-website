import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Filter, 
  Sparkles,
  Info,
  Trophy,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { eventsData } from '../data/societyData';
import EventDetailModal from './EventDetailModal';

export default function Events({ onOpenCommunityModal }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filterOptions = [
    { id: 'all', label: 'All Experiences' },
    { id: 'upcoming', label: 'Upcoming / Active' },
    { id: 'hackathons', label: 'Hackathon Tracks' },
    { id: 'gaming', label: 'Gaming & Esports' },
    { id: 'cybersecurity', label: 'Cybersecurity' },
    { id: 'completed', label: 'Completed' },
  ];

  const getFilteredEvents = () => {
    switch (activeFilter) {
      case 'upcoming':
        return eventsData.filter(e => e.status === 'Upcoming' || e.status === 'Ongoing');
      case 'hackathons':
        return eventsData.filter(e => e.isHackathon || e.category === 'Hackathons');
      case 'gaming':
        return eventsData.filter(e => e.category === 'Gaming & Esports');
      case 'cybersecurity':
        return eventsData.filter(e => e.category === 'Cybersecurity');
      case 'completed':
        return eventsData.filter(e => e.status === 'Completed');
      default:
        return eventsData;
    }
  };

  const filteredEvents = getFilteredEvents();

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
            Events & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55A6AC] via-[#6845F5] to-[#E32655]">Competitions</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans leading-relaxed">
            From collegiate esports showdowns and cybersecurity awareness weeks to collaborative hackathons and coding bootcamps at SGGSCC.
          </p>

          {/* Authenticity notice */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#10182D]/80 border border-slate-800 text-[11px] font-mono text-slate-400">
            <Info className="w-3.5 h-3.5 text-[#55A6AC]" />
            <span>All initiatives are verified society domains. Specific semester dates are announced via official college circulars.</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
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

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((evt) => {
            const isCompleted = evt.status === 'Completed';

            return (
              <div
                key={evt.id}
                className={`group relative rounded-2xl bg-[#10182D]/90 border transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 ${
                  isCompleted 
                    ? 'border-slate-800 opacity-90 hover:border-slate-700' 
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
                    <div className="absolute inset-0 bg-gradient-to-t from-[#10182D] via-transparent to-black/30" />

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
                      {evt.status === 'Ongoing' && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono font-semibold rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 backdrop-blur-md">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                          <span>Active Now</span>
                        </span>
                      )}
                      {evt.status === 'Completed' && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-mono font-semibold rounded-full bg-slate-800 text-slate-400 border border-slate-700 backdrop-blur-md">
                          <CheckCircle2 className="w-3 h-3 text-slate-400" />
                          <span>Completed</span>
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

                    <h3 className="text-xl font-bold text-white font-display mb-3 group-hover:text-[#55A6AC] transition-colors leading-snug">
                      {evt.title}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-2">
                      {evt.shortDesc}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-slate-800 text-xs font-mono text-slate-400">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#E32655] shrink-0" />
                        <span className="truncate">{evt.venue}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#6845F5] shrink-0" />
                        <span>Deadline: {evt.registrationDeadline}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={() => setSelectedEvent(evt)}
                    type="button"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-[#6845F5] transition-all duration-200 border border-slate-700/80 hover:border-[#6845F5] shadow-sm"
                  >
                    <span>View Full Details & Rules</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

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
