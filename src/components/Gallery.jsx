import React, { useState } from 'react';
import { Camera, ExternalLink, Sparkles, Eye, Info, Tag } from 'lucide-react';
import { galleryItems, societyInfo } from '../data/societyData';
import GalleryLightboxModal from './GalleryLightboxModal';

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Moments' },
    { id: 'Hackathons', label: 'Hackathons' },
    { id: 'Cybersecurity', label: 'Cybersecurity' },
    { id: 'Gaming', label: 'Gaming' },
    { id: 'Community', label: 'Community' },
  ];

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="relative py-24 bg-[#0E1428] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10182D] border border-[#6845F5]/30 text-xs font-mono text-[#55A6AC] tracking-wider uppercase mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Archive & Memory Log</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight mb-4">
            Moments at <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55A6AC] via-[#6845F5] to-[#E32655]">INFINITY</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans leading-relaxed">
            Capturing the competitive drive, student camaraderie, and technical triumphs across SGGSCC campus events.
          </p>

          {/* Explicit Authenticity Disclosure as required */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#10182D]/90 border border-amber-500/30 text-xs text-amber-300 font-mono text-left max-w-xl">
            <Info className="w-4 h-4 shrink-0 text-amber-400" />
            <span>
              <strong>Authenticity Notice:</strong> Photographs below use structured society placeholders until official session media is curated. Real photos are posted to Instagram.
            </span>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === c.id
                  ? 'bg-[#6845F5] text-white shadow-lg shadow-[#6845F5]/30 border border-[#6845F5]'
                  : 'bg-[#10182D] text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative rounded-2xl overflow-hidden bg-[#10182D] border border-slate-800 hover:border-[#6845F5]/60 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#6845F5]/20 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] w-full bg-[#0B1020] overflow-hidden">
                  <img
                    src={`/assets/placeholders/${item.id}.svg`}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = '/assets/placeholders/gallery-1.svg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10182D] via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 text-[10px] font-mono font-semibold rounded-full bg-[#0B1020]/90 text-slate-200 border border-white/10 backdrop-blur-md">
                      {item.category}
                    </span>
                    <span className="px-2 py-0.5 text-[9px] font-mono rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      Placeholder
                    </span>
                  </div>

                  {/* Hover icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="p-3 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20 transform scale-75 group-hover:scale-100 transition-transform">
                      <Eye className="w-5 h-5 text-[#55A6AC]" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-white font-display mb-1.5 group-hover:text-[#55A6AC] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                  <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>{item.dateTag}</span>
                    <span className="text-[#6845F5] group-hover:underline">Tap to inspect</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Instagram Profile CTA Card */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#10182D] via-[#1c183d] to-[#10182D] border border-[#E32655]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-[#E32655] to-[#6845F5] text-white shadow-lg shadow-[#E32655]/20 shrink-0">
              <Camera className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase text-[#E32655] font-semibold tracking-wider">
                Live Instagram Updates
              </div>
              <h4 className="text-lg font-bold text-white">
                Follow @infinity.sggscc for real event stories and reels
              </h4>
              <p className="text-xs text-slate-400">
                Official handles feature tournament live streams, member spotlights, and behind-the-scenes coverage.
              </p>
            </div>
          </div>

          <a
            href={societyInfo.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#E32655] via-[#6845F5] to-[#3020A5] hover:opacity-95 shadow-lg shadow-[#E32655]/25 transition-all"
          >
            <span>Visit @infinity.sggscc</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Render Lightbox Modal */}
      {selectedItem && (
        <GalleryLightboxModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </section>
  );
}
