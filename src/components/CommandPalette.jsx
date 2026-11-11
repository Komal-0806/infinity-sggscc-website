import React, { useState, useEffect } from 'react';
import { Search, X, Calendar, Layers, Users, Compass, ChevronRight, Hash } from 'lucide-react';
import { activitiesData, eventsData, allTeamMembers } from '../data/societyData';

export default function CommandPalette({ isOpen, onClose, onSelectEvent }) {
  const [query, setQuery] = useState('');

  // Handle ESC key and Ctrl+K listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Search items database
  const quickLinks = [
    { type: 'section', title: 'Home / Hero', subtitle: 'Where Curiosity Meets Innovation', id: 'hero', icon: Compass },
    { type: 'section', title: 'About INFINITY', subtitle: 'Official Description & 4 Core Pillars', id: 'about', icon: Compass },
    { type: 'section', title: 'What We Do', subtitle: 'Domains, Learning Tracks & Activities', id: 'activities', icon: Layers },
    { type: 'section', title: 'Events & Experiences', subtitle: 'Gaming, Cybersecurity & Hackathons', id: 'events', icon: Calendar },
    { type: 'section', title: 'Gallery Moments', subtitle: 'Campus Visual Archive & Memories', id: 'gallery', icon: Hash },
    { type: 'section', title: 'Our Team', subtitle: 'Official 2026–27 Leadership Council', id: 'team', icon: Users },
    { type: 'section', title: 'Contact & Inquiries', subtitle: 'Campus Location & Direct Message', id: 'contact', icon: Hash },
  ];

  const searchResults = query.trim() === ''
    ? quickLinks
    : [
        ...quickLinks.filter(item => 
          item.title.toLowerCase().includes(query.toLowerCase()) || 
          item.subtitle.toLowerCase().includes(query.toLowerCase())
        ),
        ...activitiesData
          .filter(act => act.title.toLowerCase().includes(query.toLowerCase()) || act.category.toLowerCase().includes(query.toLowerCase()))
          .map(act => ({ type: 'domain', title: act.title, subtitle: act.category, id: 'activities', icon: Layers })),
        ...eventsData
          .filter(evt => evt.title.toLowerCase().includes(query.toLowerCase()) || evt.category.toLowerCase().includes(query.toLowerCase()))
          .map(evt => ({ type: 'event', title: evt.title, subtitle: `${evt.category} • ${evt.dateTime}`, id: 'events', rawEvent: evt, icon: Calendar })),
        ...allTeamMembers
          .filter(member => member.name.toLowerCase().includes(query.toLowerCase()) || member.designation.toLowerCase().includes(query.toLowerCase()) || member.department.toLowerCase().includes(query.toLowerCase()))
          .map(member => ({ type: 'team', title: member.name, subtitle: `${member.designation} (${member.roleCategory})`, id: 'team', icon: Users }))
      ];

  const handleSelect = (item) => {
    onClose();
    if (item.type === 'event' && item.rawEvent && onSelectEvent) {
      onSelectEvent(item.rawEvent);
    }
    const el = document.getElementById(item.id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-xl rounded-2xl bg-[#10182D] border border-[#6845F5]/40 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-800 bg-[#0B1020]">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sections, hackathons, team members, domains..."
            className="w-full bg-transparent text-white text-sm placeholder:text-slate-500 focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] bg-slate-800 text-slate-400 rounded border border-slate-700 font-mono">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-slate-800/40">
          {searchResults.length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-400">
              No matching results found for "{query}".
            </div>
          ) : (
            searchResults.map((item, idx) => {
              const Icon = item.icon || Compass;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(item)}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-[#0B1020] text-left transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-800 group-hover:bg-[#6845F5]/20 text-slate-400 group-hover:text-[#55A6AC] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-[#55A6AC] transition-colors">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-white transition-colors" />
                </button>
              );
            })
          )}
        </div>

        <div className="p-3 bg-[#0B1020] border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>INFINITY SGGSCC Navigation Engine</span>
          <span>Use ↑ ↓ to navigate</span>
        </div>
      </div>
    </div>
  );
}
