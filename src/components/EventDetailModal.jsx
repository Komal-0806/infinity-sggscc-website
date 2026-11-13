import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  MapPin, 
  ShieldCheck, 
  Share2, 
  CheckCircle, 
  Info,
  ExternalLink,
  BookOpen,
  Users
} from 'lucide-react';
import { societyInfo } from '../data/societyData';

export default function EventDetailModal({ event, onClose, onOpenCommunityModal }) {
  const [copied, setCopied] = useState(false);

  if (!event) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${window.location.origin}/#events`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const isCompleted = event.status === 'Completed';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-2xl my-8 rounded-2xl bg-[#10182D] border border-[#6845F5]/40 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="event-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Image Banner */}
        <div className="relative h-52 sm:h-60 w-full bg-[#0B1020] overflow-hidden border-b border-slate-800">
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
            <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold backdrop-blur-md border ${
              isCompleted
                ? 'bg-slate-800/90 text-slate-300 border-slate-700'
                : 'bg-[#0B1020]/90 text-[#55A6AC] border-[#55A6AC]/40'
            }`}>
              {event.statusBadge || event.status}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          <div>
            <h3 id="event-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-3">
              {event.title}
            </h3>

            {/* Quick Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-xl bg-[#0B1020] border border-slate-800 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#55A6AC] shrink-0" />
                <span>Session: {event.dateTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E32655] shrink-0" />
                <span>Platform: {event.venue}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Format: {event.mode}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#6845F5] shrink-0" />
                <span>Verification: Verified Initiative</span>
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

          {/* Eligibility */}
          {event.eligibility && (
            <div className="p-3.5 rounded-xl bg-[#0B1020]/70 border border-slate-800 text-xs text-slate-300">
              <span className="font-mono text-[#55A6AC] font-semibold uppercase block mb-1">
                Eligibility & Participation:
              </span>
              <span>{event.eligibility}</span>
            </div>
          )}

          {/* Rules and Requirements */}
          {event.rules && event.rules.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase text-[#E32655] tracking-wider mb-2.5 font-semibold flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                <span>Format & Guidelines</span>
              </h4>
              <div className="space-y-2">
                {event.rules.map((rule, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 p-2.5 rounded-lg bg-[#0B1020]/60 border border-slate-800/80">
                    <span className="font-mono text-[#6845F5] font-bold">Point {idx + 1}:</span>
                    <span>{rule}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Source Attribution */}
          {event.source && (
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2 text-[#55A6AC]">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Official Source: {event.source}</span>
              </div>
              {event.sourceUrl && (
                <a
                  href={event.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-slate-400 hover:text-white"
                >
                  <span>Verify</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          )}

          {/* Modal Footer Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-800">
            <button
              onClick={handleShare}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium text-slate-300 hover:text-white bg-[#0B1020] border border-slate-700 hover:border-slate-600 transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? 'Link Copied!' : 'Share Event'}</span>
            </button>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                onClick={onClose}
                type="button"
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                Close
              </button>

              {/* Functional Action */}
              {isCompleted ? (
                <a
                  href={societyInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#3020A5] to-[#6845F5] hover:opacity-95 shadow-md transition-all"
                >
                  <span>View Highlights on Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <a
                  href={societyInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#3020A5] via-[#6845F5] to-[#E32655] shadow-md shadow-[#6845F5]/30 hover:shadow-lg transition-all"
                >
                  <span>Upcoming Announcements</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
