import React from 'react';
import { X, ExternalLink, Camera, Tag, Calendar, Info } from 'lucide-react';
import { societyInfo } from '../data/societyData';

export default function GalleryLightboxModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <div 
        className="relative w-full max-w-3xl rounded-2xl bg-[#10182D] border border-[#6845F5]/40 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Top visual */}
        <div className="relative h-72 sm:h-96 w-full bg-[#0B1020] flex items-center justify-center overflow-hidden border-b border-slate-800">
          <img
            src={`/assets/placeholders/${item.id}.svg`}
            alt={item.title}
            className="w-full h-full object-contain"
            onError={(e) => {
              e.target.src = '/assets/placeholders/gallery-1.svg';
            }}
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/70 text-white hover:bg-black transition-colors focus:outline-none"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Info */}
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#6845F5]/20 text-[#6845F5] border border-[#6845F5]/40">
              {item.category}
            </span>
            <span className="px-2.5 py-1 rounded text-xs font-mono bg-amber-500/10 text-amber-300 border border-amber-500/30">
              [ Official Placeholder // Awaiting Upload ]
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-2">
            {item.title}
          </h3>

          <p className="text-sm text-slate-300 mb-6 leading-relaxed">
            {item.caption}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <Camera className="w-4 h-4 text-[#55A6AC]" />
              <span>INFINITY SGGSCC Media Archive</span>
            </div>

            <a
              href={societyInfo.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#3020A5] via-[#6845F5] to-[#E32655] shadow hover:shadow-lg transition-all"
            >
              <span>View On Official Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
