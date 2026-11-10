import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Filter, 
  Sparkles,
  Info
} from 'lucide-react';
import { eventsData } from '../data/societyData';
import EventDetailModal from './EventDetailModal';

export default function Events({ onOpenCommunityModal }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const categories = [
    { id: 'all', label: 'All Experiences' },
    { id: 'flagship', label: 'Verified Flagships' },
    { id: 'Cybersecurity', label: 'Cybersecurity' },
    { id: 'Gaming & Esports', label: 'Gaming & Esports' },
    { id: 'Competitions', label: 'Hackathons & Sprints' },
    { id: 'Workshops', label: 'Workshops' },
  ];

  const filteredEvents = activeCategory === 'all'
    ? eventsData
    : activeCategory === 'flagship'
      ? eventsData.filter(e => e.isVerified)
      : eventsData.filter(e => e.category === activeCategory);

  return (
    <section id="events" className="relative py-24 bg-[#0B1020] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10182D] border border-[#6845F5]/30 text-xs font-mono text-[#55A6AC] tracking-wider uppercase mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Campus Experiences & Tournaments</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight mb-4">
            Events & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55A6AC] via-[#6845F5] to-[#E32655]">Experiences</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans leading-relaxed">
            From university-wide esports showdowns and cybersecurity awareness weeks to collaborative hackathons and coding bootcamps.
          </p>

          {/* Authenticity notice */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#10182D]/80 border border-slate-800 text-[11px] font-mono text-slate-400">
            <Info className="w-3.5 h-3.5 text-[#55A6AC]" />
            <span>Event domains verified from official records. Specific session dates are scheduled alongside college guidelines.</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#3020A5] to-[#6845F5] text-white shadow-lg shadow-[#6845F5]/25 border border-[#6845F5]'
                  : 'bg-[#10182D] text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((evt) => {
            return (
              <div
                key={evt.id}
                className="group relative rounded-2xl bg-[#10182D]/80 border border-slate-800/80 hover:border-[#6845F5]/50 overflow-hidden transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-[#6845F5]/10 hover:-translate-y-1"
              >
                <div>
                  {/* Card Visual / Placeholder Image */}
                  <div className="relative h-48 w-full bg-[#0B1020] overflow-hidden">
                    <img
                      src={evt.image}
                      alt={evt.title}
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
                      {evt.isVerified ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-mono font-semibold rounded-full bg-[#55A6AC]/20 text-[#55A6AC] border border-[#55A6AC]/40 backdrop-blur-md">
                          <ShieldCheck className="w-3 h-3" />
                          <span>Official</span>
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 text-[10px] font-mono font-semibold rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                          Upcoming
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
                      <Calendar className="w-3.5 h-3.5 text-[#55A6AC]" />
                      <span>{evt.date}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white font-display mb-3 group-hover:text-[#55A6AC] transition-colors leading-snug">
                      {evt.title}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-2">
                      {evt.shortDesc}
                    </p>

                    <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-2 border-t border-slate-800">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#6845F5]" />
                        <span>{evt.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#E32655]" />
                        <span>{evt.mode}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={() => setSelectedEvent(evt)}
                    type="button"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-[#6845F5] transition-all duration-200 border border-slate-700/80 hover:border-[#6845F5] shadow-sm"
                  >
                    <span>View Event Details</span>
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
