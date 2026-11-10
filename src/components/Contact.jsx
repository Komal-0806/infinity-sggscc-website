import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Linkedin, 
  Instagram, 
  ExternalLink, 
  Send, 
  ChevronDown, 
  CheckCircle2, 
  Copy, 
  Sparkles, 
  GraduationCap,
  Info 
} from 'lucide-react';
import { societyInfo, faqs } from '../data/societyData';

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isCopied, setIsCopied] = useState(false);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFeedbackSent(true);
  };

  const handleCopyMessage = () => {
    const textToCopy = `From: ${formData.name} (${formData.email})\nSubject: ${formData.subject}\n\n${formData.message}`;
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0E1428] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10182D] border border-[#6845F5]/30 text-xs font-mono text-[#55A6AC] tracking-wider uppercase mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Inquire</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight mb-4">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55A6AC] via-[#6845F5] to-[#E32655]">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans leading-relaxed">
            Have questions regarding upcoming hackathons, tech workshops, or society collaboration? Reach out to INFINITY.
          </p>
        </div>

        {/* Content Layout: Contact Cards & Interactive Inquiry Composer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Left Column: Official College & Social Connect Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* College & Campus Card */}
            <div className="p-6 rounded-2xl bg-[#10182D]/90 border border-slate-800 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-[#6845F5]/20 text-[#6845F5] border border-[#6845F5]/30">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Campus Location</h3>
                  <div className="text-xs font-mono text-slate-400">Institutional Affiliation</div>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#E32655] shrink-0 mt-1" />
                  <div>
                    <strong className="text-white">Sri Guru Gobind Singh College of Commerce</strong>
                    <div className="text-xs text-slate-400">University of Delhi</div>
                    <div className="text-xs text-slate-400">{societyInfo.location}</div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Official College Website:</span>
                  <a
                    href={societyInfo.socials.collegeWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[#55A6AC] hover:underline"
                  >
                    <span>sggscc.ac.in</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Official Social Media Hub */}
            <div className="p-6 rounded-2xl bg-[#10182D]/90 border border-slate-800 shadow-xl">
              <h3 className="text-base font-bold text-white mb-2">Official Social Handles</h3>
              <p className="text-xs text-slate-400 mb-4">
                Follow our verified social accounts for instant event updates, registration deadlines, and live announcements.
              </p>

              <div className="space-y-3">
                {/* LinkedIn */}
                <a
                  href={societyInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#0B1020] border border-slate-800 hover:border-[#6845F5]/60 group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#55A6AC]/15 text-[#55A6AC]">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-[#55A6AC] transition-colors">
                        LinkedIn Official Page
                      </div>
                      <div className="text-[11px] font-mono text-slate-400">linkedin.com/company/infinitysggscc</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </a>

                {/* Instagram */}
                <a
                  href={societyInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#0B1020] border border-slate-800 hover:border-[#E32655]/60 group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#E32655]/15 text-[#E32655]">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-[#E32655] transition-colors">
                        Instagram Profile
                      </div>
                      <div className="text-[11px] font-mono text-slate-400">@infinity.sggscc</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Authenticity notice */}
            <div className="p-4 rounded-xl bg-[#0B1020] border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-[#55A6AC] shrink-0 mt-0.5" />
              <span>
                To protect institutional authenticity, personal contact numbers and unverified email inboxes are not published. Inquiries are directed via official channels.
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Inquiry Composer (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#10182D]/90 border border-slate-800 shadow-xl h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#55A6AC]" />
                    <h3 className="text-lg font-bold text-white font-display">
                      Send an Inquiry or Proposal
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    Client-Side Direct Dispatch
                  </span>
                </div>

                <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                  Draft your message below. You can send it directly through your system's default email client, or copy the formatted text to send via LinkedIn or Instagram.
                </p>

                {feedbackSent ? (
                  <div className="p-6 rounded-xl bg-[#0B1020] border border-emerald-500/30 text-center space-y-3 my-4">
                    <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-white">Draft Ready for Transmission</h4>
                    <p className="text-xs text-slate-300 max-w-md mx-auto">
                      Your inquiry has been formatted. Choose how you would like to deliver it:
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                      <button
                        onClick={handleCopyMessage}
                        type="button"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>{isCopied ? 'Copied to Clipboard!' : 'Copy Formatted Text'}</span>
                      </button>

                      <a
                        href={`mailto:infinity@sggscc.du.ac.in?subject=${encodeURIComponent(formData.subject || 'INFINITY Tech Society Inquiry')}&body=${encodeURIComponent(formData.message + '\n\nSender: ' + formData.name + ' (' + formData.email + ')')}`}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#3020A5] to-[#6845F5]"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Open in Email App</span>
                      </a>
                    </div>
                    <div className="pt-2">
                      <button
                        onClick={() => setFeedbackSent(false)}
                        className="text-xs text-slate-400 hover:text-white underline"
                      >
                        Edit Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          Your Name *
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
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
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

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Subject / Topic
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Hackathon Partnership / Workshop Inquiry"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1020] border border-slate-800 focus:border-[#6845F5] text-white text-xs placeholder:text-slate-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Message Details *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Type your message, query or collaboration proposal..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1020] border border-slate-800 focus:border-[#6845F5] text-white text-xs placeholder:text-slate-500 focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-[#3020A5] via-[#6845F5] to-[#E32655] shadow-lg shadow-[#6845F5]/25 hover:opacity-95 transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>Prepare Inquiry Draft</span>
                    </button>
                  </form>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
                <span>Note: No mock data is sent to arbitrary servers. We prioritize privacy and transparent communication.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Frequently Asked Questions Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white font-display mb-2">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Clear answers regarding memberships, prerequisites, and society activities.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-[#10182D]/80 border border-slate-800/90 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    type="button"
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm font-semibold text-white hover:text-[#55A6AC] transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ml-4 ${
                        isOpen ? 'rotate-180 text-[#55A6AC]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
