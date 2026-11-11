import React, { useState } from 'react';
import { Camera, ExternalLink, Sparkles, Eye, Info, Clock } from 'lucide-react';
import { galleryItems, societyInfo } from '../data/societyData';
import GalleryLightboxModal from './GalleryLightboxModal';

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Moments' },
    { id: 'Hackathons', label: 'Hackathons' },
    { id: 'Cybersecurity', label: 'Cybersecurity' },
    { id: 'Gaming', label: 'Gaming & Esports' },
    { id: 'Workshops', label: 'Workshops' },
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
            <span>Visual Archive & Moments</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight mb-4">
            Moments at <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55A6AC] via-[#6845F5] to-[#E32655]">INFINITY</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans leading-relaxed">
            Capturing the competitive drive, student camaraderie, and technical triumphs across SGGSCC campus events.
          </p>
        </div>

        {/* Dynamic Display: Empty State OR Populated Grid */}
        {galleryItems.length === 0 ? (
          /* Elegant Branded Empty State */
          <div className="max-w-2xl mx-auto p-8 sm:p-12 rounded-3xl bg-[#10182D]/80 border border-slate-800/90 text-center relative overflow-hidden shadow-2xl">
            {/* Ambient Background Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-[#3020A5]/20 via-[#6845F5]/15 to-[#55A6AC]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              {/* Emblem / Camera Visual */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#10182D] to-[#0B1020] border border-[#6845F5]/40 flex items-center justify-center shadow-xl">
                  <Camera className="w-9 h-9 text-[#55A6AC]" />
                </div>
                <div className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-[#E32655] text-white">
                  <Clock className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-slate-800 text-[11px] font-mono text-slate-300 mb-3">
                Archival Photo Gallery
              </div>

              <h3 className="text-2xl font-bold text-white font-display mb-3">
                Event Photographs Being Curated
              </h3>

              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed mb-8">
                In strict adherence to authenticity, mock stock photos have been removed. Genuine event photographs from our upcoming hackathons, gaming tournaments, and cybersecurity sessions will be uploaded here.
              </p>

              {/* Instagram Direct Link Card */}
              <div className="w-full p-4 sm:p-5 rounded-2xl bg-[#0B1020] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
                <div>
                  <div className="text-xs font-mono uppercase text-[#E32655] font-semibold">
                    Live Event Coverage
                  </div>
                  <div className="text-sm font-bold text-white">
                    Explore event stories on Instagram
                  </div>
                  <div className="text-xs text-slate-400">
                    Follow @infinity.sggscc for active tournament reels and highlights.
                  </div>
                </div>

                <a
                  href={societyInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-[#E32655] via-[#6845F5] to-[#3020A5] shadow-md shadow-[#E32655]/20 hover:opacity-95 transition-all"
                >
                  <span>Visit Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        ) : (
          /* Populated Responsive Grid */
          <div>
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

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="group relative rounded-2xl overflow-hidden bg-[#10182D] border border-slate-800 hover:border-[#6845F5]/60 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#6845F5]/20 hover:-translate-y-1"
                >
                  <div className="relative aspect-[16/10] w-full bg-[#0B1020] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title || "INFINITY SGGSCC Event"}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#10182D] via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2.5 py-1 text-[10px] font-mono font-semibold rounded-full bg-[#0B1020]/90 text-slate-200 border border-white/10 backdrop-blur-md">
                        {item.category}
                      </span>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="p-3 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20 transform scale-75 group-hover:scale-100 transition-transform">
                        <Eye className="w-5 h-5 text-[#55A6AC]" />
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-bold text-white font-display mb-1.5 group-hover:text-[#55A6AC] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {item.caption}
                    </p>
                    <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>{item.date}</span>
                      <span className="text-[#6845F5] group-hover:underline">View Photo</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Instagram Profile CTA Card at the bottom */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#10182D] via-[#1c183d] to-[#10182D] border border-[#E32655]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-[#E32655] to-[#6845F5] text-white shadow-lg shadow-[#E32655]/20 shrink-0">
              <Camera className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase text-[#E32655] font-semibold tracking-wider">
                Official Media Stream
              </div>
              <h4 className="text-lg font-bold text-white">
                Follow @infinity.sggscc for active society stories and reels
              </h4>
              <p className="text-xs text-slate-400">
                Tournament shoutcasts, workshop clips, and team highlights are broadcasted on our Instagram page.
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
