import React from 'react';
import { Linkedin, Instagram, ExternalLink, Heart, Sparkles, GraduationCap } from 'lucide-react';
import { societyInfo } from '../data/societyData';

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#070B16] border-t border-slate-800 text-slate-400 text-sm overflow-hidden">
      {/* Decorative Top Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#55A6AC] via-[#6845F5] to-[#E32655]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand & Overview (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-1 rounded-xl bg-[#10182D] border border-[#6845F5]/30">
                <img
                  src="/assets/infinity-official-logo.png"
                  alt="INFINITY Logo"
                  className="h-10 w-auto"
                />
              </div>
              <div>
                <span className="text-xl font-black text-white font-display tracking-wider">
                  INFINITY
                </span>
                <span className="block text-[11px] font-script-society text-base text-[#55A6AC] -mt-1 font-bold">
                  {societyInfo.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {societyInfo.shortDescription}
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <GraduationCap className="w-4 h-4 text-[#6845F5]" />
              <span>Sri Guru Gobind Singh College of Commerce, DU</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={societyInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#10182D] border border-slate-800 hover:border-[#55A6AC] text-slate-300 hover:text-[#55A6AC] transition-colors"
                aria-label="INFINITY on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={societyInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#10182D] border border-slate-800 hover:border-[#E32655] text-slate-300 hover:text-[#E32655] transition-colors"
                aria-label="INFINITY on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={societyInfo.socials.collegeWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#10182D] border border-slate-800 hover:border-[#6845F5] text-slate-300 hover:text-[#6845F5] transition-colors"
                aria-label="SGGSCC College Portal"
                title="SGGSCC Official Website"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase text-white font-bold tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: 'Home', id: 'hero' },
                { name: 'About INFINITY', id: 'about' },
                { name: 'Activities & Domains', id: 'activities' },
                { name: 'Events & Hackathons', id: 'events' },
                { name: 'Photo Gallery', id: 'gallery' },
                { name: 'Executive Team', id: 'team' },
                { name: 'Contact Us', id: 'contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-slate-400 hover:text-[#55A6AC] transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* College Attribution & Institutional Note (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase text-white font-bold tracking-wider">
              College & Affiliation
            </h4>
            <div className="p-4 rounded-xl bg-[#10182D]/70 border border-slate-800/80 text-xs space-y-2">
              <div className="font-semibold text-white">
                Sri Guru Gobind Singh College of Commerce
              </div>
              <div className="text-slate-400">
                University of Delhi, Opposite TV Tower, Pitampura, New Delhi – 110034
              </div>
              <div className="pt-2 border-t border-slate-800 text-[11px] font-mono text-[#55A6AC]">
                {societyInfo.motto}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} INFINITY – The Tech Society of SGGSCC. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Crafted with</span>
            <span className="text-[#E32655]">❤</span>
            <span>for SGGSCC Hackathon</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
