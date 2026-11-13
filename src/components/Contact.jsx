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
  Info,
  AlertCircle,
  Loader2,
  MessageSquare
} from 'lucide-react';
import { societyInfo, faqs } from '../data/societyData';

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    consent: false,
  });

  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error' | 'ready_to_send'
  const [statusMessage, setStatusMessage] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  // Formspree / external endpoint from environment variables
  const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || import.meta.env.VITE_CONTACT_ENDPOINT;

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Please enter your full name.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) return 'Please provide a valid email address.';
    if (!formData.subject.trim()) return 'Please enter a subject.';
    if (formData.message.trim().length < 10) return 'Message must be at least 10 characters long.';
    if (!formData.consent) return 'Please agree to allow the INFINITY team to respond to your inquiry.';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formStatus === 'loading') return;

    const validationError = validateForm();
    if (validationError) {
      setFormStatus('error');
      setStatusMessage(validationError);
      return;
    }

    if (formEndpoint) {
      setFormStatus('loading');
      setStatusMessage('');

      try {
        const response = await fetch(formEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            subject: formData.subject.trim(),
            message: formData.message.trim(),
            society: "INFINITY SGGSCC",
          })
        });

        if (response.ok) {
          setFormStatus('success');
          setStatusMessage('Your inquiry has been successfully transmitted to the INFINITY team!');
          setFormData({ name: '', email: '', subject: '', message: '', consent: false });
        } else {
          const errData = await response.json().catch(() => ({}));
          setFormStatus('error');
          setStatusMessage(errData.error || 'Failed to dispatch message via API. Please use the direct copy option.');
        }
      } catch (err) {
        setFormStatus('error');
        setStatusMessage('Network error occurred while connecting. Please use the message copy option below.');
      }
    } else {
      // When no external API endpoint is set, transparently provide copy action and direct official channels
      setFormStatus('ready_to_send');
    }
  };

  const handleCopyMessage = () => {
    const formatted = `From: ${formData.name.trim()} (${formData.email.trim()})\nSubject: ${formData.subject.trim()}\n\n${formData.message.trim()}\n\n[Inquiry via INFINITY SGGSCC Website]`;
    navigator.clipboard.writeText(formatted);
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
            Have questions regarding upcoming hackathons, tech workshops, society recruitment, or collaboration proposals?
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Left Column: Official College & Verified Social Handles */}
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
              <h3 className="text-base font-bold text-white mb-2">Official Communication Channels</h3>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Connect directly with the society on LinkedIn and Instagram for the fastest verified updates on events, workshops, and society recruitment.
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
                To uphold privacy standards, personal phone numbers and unverified email addresses are not listed. Official communication is conducted via verified college and society channels.
              </span>
            </div>

          </div>

          {/* Right Column: Contact Form */}
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
                    {formEndpoint ? 'API Direct Connected' : 'Direct Dispatch'}
                  </span>
                </div>

                <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                  Have an event proposal, sponsorship inquiry, or question for INFINITY? Complete the form below.
                </p>

                {/* State 1: Genuine Success (when endpoint configured and API responds 200) */}
                {formStatus === 'success' && (
                  <div className="p-6 rounded-2xl bg-[#0B1020] border border-emerald-500/40 text-center space-y-3 my-4">
                    <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-white">Inquiry Dispatched Successfully!</h4>
                    <p className="text-xs text-slate-300 max-w-md mx-auto">
                      {statusMessage}
                    </p>
                    <button
                      onClick={() => setFormStatus('idle')}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#6845F5]"
                    >
                      Send Another Message
                    </button>
                  </div>
                )}

                {/* State 2: Ready to Send / Verified Fallback (when no backend endpoint configured) */}
                {formStatus === 'ready_to_send' && (
                  <div className="p-6 rounded-2xl bg-[#0B1020] border border-[#6845F5]/40 text-center space-y-4 my-4">
                    <div className="w-12 h-12 mx-auto rounded-full bg-[#6845F5]/20 text-[#6845F5] flex items-center justify-center">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-white">Inquiry Formatted & Ready</h4>
                    <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                      Your inquiry has been formatted. You can copy the text below and send it directly via Instagram DM or LinkedIn to the INFINITY team:
                    </p>

                    <div className="p-3.5 rounded-xl bg-[#10182D] border border-slate-800 text-left text-xs font-mono text-slate-300 space-y-1">
                      <div><span className="text-slate-500">From:</span> {formData.name} ({formData.email})</div>
                      <div><span className="text-slate-500">Subject:</span> {formData.subject}</div>
                      <div className="text-slate-400 pt-1 line-clamp-2">{formData.message}</div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                      <button
                        onClick={handleCopyMessage}
                        type="button"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#3020A5] to-[#6845F5] hover:opacity-95 shadow-md shadow-[#6845F5]/25"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>{isCopied ? 'Copied to Clipboard!' : 'Copy Formatted Inquiry'}</span>
                      </button>

                      <a
                        href={societyInfo.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700"
                      >
                        <Instagram className="w-3.5 h-3.5 text-[#E32655]" />
                        <span>Message on Instagram</span>
                      </a>
                    </div>

                    <button
                      onClick={() => setFormStatus('idle')}
                      className="text-xs text-slate-400 hover:text-white underline block mx-auto pt-1"
                    >
                      ← Back to edit form
                    </button>
                  </div>
                )}

                {/* State 3: Active Form */}
                {(formStatus === 'idle' || formStatus === 'loading' || formStatus === 'error') && (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {formStatus === 'error' && (
                      <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-300">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{statusMessage}</span>
                      </div>
                    )}

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
                        Subject / Topic *
                      </label>
                      <input
                        type="text"
                        required
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

                    {/* Privacy & Response Consent Checkbox */}
                    <div className="pt-1">
                      <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-300">
                        <input
                          type="checkbox"
                          checked={formData.consent}
                          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                          className="mt-0.5 rounded border-slate-700 text-[#6845F5] focus:ring-[#6845F5] bg-[#0B1020]"
                        />
                        <span>
                          I agree that the INFINITY team may use the provided contact details to respond to this inquiry.
                        </span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === 'loading'}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-[#3020A5] via-[#6845F5] to-[#E32655] shadow-lg shadow-[#6845F5]/25 hover:opacity-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {formStatus === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Dispatching Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Inquiry</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
                <span>
                  Backend connection: Set <code>VITE_FORMSPREE_ENDPOINT</code> in <code>.env</code> to route inquiries to an automated endpoint.
                </span>
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
