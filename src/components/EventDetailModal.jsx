import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Share2, 
  CheckCircle, 
  Info,
  ExternalLink 
} from 'lucide-react';

export default function EventDetailModal({ event, onClose, onOpenCommunityModal }) {
  const [copied, setCopied] = useState(false);

  if (!event) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.origin + '#events');
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-2xl my-8 rounded-2xl bg-[#10182D] border border-[#6845F5]/40 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="event-modal-title"
      >
        {/* Top Image Banner */}
        <div className="relative h-56 sm:h-64 w-full bg-[#0B1020] overflow-hidden border-b border-slate-800">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = '/assets/placeholders/event-hackathon.svg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10182D] via-transparent to-black/60" />

          {/* Close button */}
          <button
            onClick={onClose}
            type="button"
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Top Badges */}
          <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-center justify-between gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#6845F5]/90 text-white shadow-md">
              {event.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#0B1020]/90 text-[#55A6AC] border border-[#55A6AC]/40">
              {event.statusBadge}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 id="event-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-3">
              {event.title}
            </h3>

            {/* Quick Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-[#0B1020] border border-slate-800 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#55A6AC]" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#6845F5]" />
                <span>{event.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E32655]" />
                <span>{event.mode}</span>
              </div>
            </div>
          </div>

          {/* Detailed Description */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2 font-semibold">
              Event Overview
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {event.longDesc || event.shortDesc}
            </p>
          </div>

          {/* Agenda / Schedule Outline */}
          {event.agenda && event.agenda.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase text-[#55A6AC] tracking-wider mb-2.5 font-semibold">
                Event Agenda & Session Flow
              </h4>
              <div className="space-y-2">
                {event.agenda.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 p-2.5 rounded-lg bg-[#0B1020]/70 border border-slate-800/80">
                    <span className="font-mono text-[#6845F5] font-bold">Phase 0{idx + 1}:</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Prerequisites */}
          {event.prerequisites && (
            <div className="p-3.5 rounded-xl bg-[#0B1020]/60 border border-slate-800 text-xs text-slate-300">
              <span className="font-mono text-[#E32655] font-semibold uppercase">Eligibility / Requirements: </span>
              <span>{event.prerequisites}</span>
            </div>
          )}

          {/* Authenticity Disclaimer Note */}
          <div className="flex items-start gap-2 p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-400">
            <Info className="w-4 h-4 text-[#55A6AC] shrink-0 mt-0.5" />
            <div>
              {event.isVerified ? (
                <span>Official event domain verified from society records. Registration dates adhere to the academic semester schedule.</span>
              ) : (
                <span>Proposed workshop module awaiting upcoming semester scheduling announcement. No dates are fabricated.</span>
              )}
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-800">
            <button
              onClick={handleShare}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium text-slate-300 hover:text-white bg-[#0B1020] border border-slate-700 hover:border-slate-600 transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? 'Link Copied to Clipboard!' : 'Share Event'}</span>
            </button>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={onClose}
                type="button"
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenCommunityModal();
                }}
                type="button"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#3020A5] via-[#6845F5] to-[#E32655] shadow-md shadow-[#6845F5]/30 hover:shadow-lg transition-all"
              >
                Society Inquiries & Signups
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
