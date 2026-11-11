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
  Loader2
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
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formStatus === 'loading') return; // Prevent duplicate submissions

    const validationError = validateForm();
    if (validationError) {
      setFormStatus('error');
      setStatusMessage(validationError);
      return;
    }

    // If a genuine endpoint is configured in environment variables
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
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          const errData = await response.json().catch(() => ({}));
          setFormStatus('error');
          setStatusMessage(errData.error || 'Failed to dispatch message. Please use the direct email fallback.');
        }
      } catch (err) {
        setFormStatus('error');
        setStatusMessage('Network error occurred while sending. Please use the email client fallback below.');
      }
    } else {
      // If endpoint is not configured, avoid fake claims.
      // Transition to genuine client-side dispatch state with mailto / copy options.
      setFormStatus('ready_to_send');
    }
  };

  const handleCopyMessage = () => {
    const formatted = `From: ${formData.name.trim()} (${formData.email.trim()})\nSubject: ${formData.subject.trim()}\n\n${formData.message.trim()}\n\n[Inquiry via INFINITY SGGSCC Website]`;
    navigator.clipboard.writeText(formatted);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const mailtoUrl = `mailto:?subject=${encodeURIComponent(
    `[INFINITY SGGSCC Inquiry] ${formData.subject || 'Collaboration'}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n(Sent via INFINITY Official Website)`
  )}`;

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
            Have questions regarding upcoming hackathons, tech workshops, society recruitment or sponsorship collaborations?
          </p>
        </div>

        {/* Content Layout: Contact Information & Functional Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Left Column: Official College & Verified Social Handles (5 cols) */}
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
              <h3 className="text-base font-bold text-white mb-2">Verified Social Channels</h3>
              <p className="text-xs text-slate-400 mb-4">
                Connect directly with the society on LinkedIn and Instagram for the fastest response on events and recruitment.
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
                To maintain institutional authenticity, unverified personal phone numbers or private email accounts are not published.
              </span>
            </div>

          </div>

          {/* Right Column: Contact Form & Integration Handlers (7 cols) */}
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
                  Have an event proposal, sponsorship inquiry or technical question? Fill out the details below.
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
                      <Mail className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-white">Inquiry Formatted & Ready</h4>
                    <p className="text-xs text-slate-300 max-w-md mx-auto">
                      Choose how you would like to transmit your inquiry to the INFINITY team:
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                      <a
                        href={mailtoUrl}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#3020A5] to-[#6845F5] hover:opacity-95 shadow-md shadow-[#6845F5]/25"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Launch in Default Email App</span>
                      </a>

                      <button
                        onClick={handleCopyMessage}
                        type="button"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>{isCopied ? 'Copied to Clipboard!' : 'Copy Formatted Text'}</span>
                      </button>
                    </div>

                    <div className="text-[11px] font-mono text-slate-400 pt-2">
                      <span>Pro-tip: You can also paste the copied text directly to our Instagram DM or LinkedIn page.</span>
                    </div>

                    <button
                      onClick={() => setFormStatus('idle')}
                      className="text-xs text-slate-400 hover:text-white underline block mx-auto"
                    >
                      ← Back to form editor
                    </button>
                  </div>
                )}

                {/* State 3: Active Form (when idle, loading, or error) */}
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
                  Environment configuration: To connect Formspree/EmailJS, provide <code>VITE_FORMSPREE_ENDPOINT</code> in <code>.env</code>.
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
