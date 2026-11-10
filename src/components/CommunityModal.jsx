import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  Linkedin, 
  Instagram, 
  ArrowRight, 
  ExternalLink, 
  GraduationCap, 
  Send,
  AlertCircle 
} from 'lucide-react';
import { societyInfo } from '../data/societyData';

export default function CommunityModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    courseYear: '',
    domainInterest: 'web-software',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setError('Please provide your name and college/personal email address.');
      return;
    }
    setError('');
    // Authentic client-side success state
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-xl my-8 rounded-2xl bg-[#10182D] border border-[#6845F5]/40 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-br from-[#10182D] via-[#1a1c3d] to-[#0B1020] border-b border-slate-800">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-slate-400 hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 rounded-xl bg-[#6845F5]/20 text-[#6845F5] border border-[#6845F5]/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#55A6AC]">
              SGGSCC Tech Community
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55A6AC] via-[#6845F5] to-[#E32655]">INFINITY</span> Network
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Connect with peer developers, cybersecurity analysts, designers, and competitive gamers at SGGSCC.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white font-display">
                Interest Received!
              </h4>
              <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="text-white font-semibold">{formData.name}</span>! Make sure to follow our official LinkedIn and Instagram handles below for recruitment drive announcements and orientation dates.
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#6845F5] hover:bg-[#5835E5] transition-all"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Official Social Links (Direct Connection) */}
              <div className="space-y-2.5">
                <div className="text-xs font-mono uppercase text-slate-400 font-semibold">
                  Official Channels:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={societyInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-[#0B1020] border border-slate-800 hover:border-[#6845F5]/60 group transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <Linkedin className="w-5 h-5 text-[#55A6AC]" />
                      <div className="text-left">
                        <div className="text-xs font-bold text-white">LinkedIn</div>
                        <div className="text-[10px] text-slate-400">@infinitysggscc</div>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                  </a>

                  <a
                    href={societyInfo.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-[#0B1020] border border-slate-800 hover:border-[#E32655]/60 group transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <Instagram className="w-5 h-5 text-[#E32655]" />
                      <div className="text-left">
                        <div className="text-xs font-bold text-white">Instagram</div>
                        <div className="text-[10px] text-slate-400">@infinity.sggscc</div>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>

              {/* Society Recruitment Roadmaps */}
              <div className="p-4 rounded-xl bg-[#0B1020] border border-slate-800/90 space-y-2.5">
                <div className="text-xs font-mono uppercase text-[#55A6AC] font-semibold flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" />
                  <span>Onboarding & Induction Journey</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-mono">
                  <div className="p-2 rounded bg-[#10182D] border border-slate-800">
                    <div className="text-[#6845F5] font-bold">Phase 1</div>
                    <div className="text-slate-300">College Fair</div>
                  </div>
                  <div className="p-2 rounded bg-[#10182D] border border-slate-800">
                    <div className="text-[#55A6AC] font-bold">Phase 2</div>
                    <div className="text-slate-300">Audition / Tasks</div>
                  </div>
                  <div className="p-2 rounded bg-[#10182D] border border-slate-800">
                    <div className="text-[#E32655] font-bold">Phase 3</div>
                    <div className="text-slate-300">Induction</div>
                  </div>
                </div>
              </div>

              {/* Interactive Interest Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-xs font-mono uppercase text-slate-400 font-semibold">
                  Get Drive Notifications:
                </div>

                {error && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-xs text-red-300">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jasleen Kaur"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1020] border border-slate-800 focus:border-[#6845F5] text-white text-xs placeholder:text-slate-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. student@sggscc.du.ac.in"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1020] border border-slate-800 focus:border-[#6845F5] text-white text-xs placeholder:text-slate-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Degree & Year
                    </label>
                    <input
                      type="text"
                      value={formData.courseYear}
                      onChange={(e) => setFormData({ ...formData, courseYear: e.target.value })}
                      placeholder="e.g. B.Sc (H) CS, 1st Year"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1020] border border-slate-800 focus:border-[#6845F5] text-white text-xs placeholder:text-slate-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Preferred Tech Domain
                    </label>
                    <select
                      value={formData.domainInterest}
                      onChange={(e) => setFormData({ ...formData, domainInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1020] border border-slate-800 focus:border-[#6845F5] text-white text-xs focus:outline-none"
                    >
                      <option value="web-software">Web & Software Dev</option>
                      <option value="cybersecurity">Cybersecurity & Forensics</option>
                      <option value="gaming">Gaming & Esports</option>
                      <option value="ai">AI & Machine Learning</option>
                      <option value="design">UI/UX & Creative Media</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#3020A5] via-[#6845F5] to-[#E32655] shadow-lg shadow-[#6845F5]/30 hover:opacity-95 transition-all active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>Notify Me for Society Drives</span>
                </button>
              </form>
            </>
          )}

          <div className="text-[11px] text-slate-500 font-mono text-center pt-2">
            Official Technology Society • Sri Guru Gobind Singh College of Commerce, University of Delhi
          </div>
        </div>
      </div>
    </div>
  );
}
