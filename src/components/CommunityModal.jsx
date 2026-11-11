import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  Linkedin, 
  Instagram, 
  ExternalLink, 
  GraduationCap, 
  Send,
  AlertCircle,
  Copy,
  Loader2,
  ShieldCheck
} from 'lucide-react';
import { societyInfo } from '../data/societyData';

export default function CommunityModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    courseYear: '',
    areasOfInterest: ['Web Development & Software'],
    profileUrl: '',
    privacyConsent: false,
  });

  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'ready_to_send'
  const [errorMessage, setErrorMessage] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  // Check for genuine configured endpoint in environment
  const communityEndpoint = import.meta.env.VITE_COMMUNITY_ENDPOINT || import.meta.env.VITE_FORMSPREE_ENDPOINT;

  if (!isOpen) return null;

  const domainOptions = [
    'Artificial Intelligence & ML',
    'Web Development & Software',
    'Cybersecurity & Forensics',
    'Competitive Coding & Algorithms',
    'Gaming & Esports',
    'UI/UX Design & Creative Media',
  ];

  const handleInterestToggle = (domain) => {
    setFormData(prev => {
      const exists = prev.areasOfInterest.includes(domain);
      if (exists) {
        return { ...prev, areasOfInterest: prev.areasOfInterest.filter(d => d !== domain) };
      } else {
        return { ...prev, areasOfInterest: [...prev.areasOfInterest, domain] };
      }
    });
  };

  const validate = () => {
    if (!formData.name.trim()) return 'Please enter your full name.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) return 'Please provide a valid email address.';
    if (!formData.courseYear.trim()) return 'Please specify your degree course and academic year.';
    if (formData.areasOfInterest.length === 0) return 'Please select at least one area of interest.';
    if (!formData.privacyConsent) return 'Please confirm the privacy consent checkbox to proceed.';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formStatus === 'loading') return;

    const error = validate();
    if (error) {
      setErrorMessage(error);
      return;
    }
    setErrorMessage('');

    if (communityEndpoint) {
      setFormStatus('loading');
      try {
        const response = await fetch(communityEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            formType: 'INFINITY_COMMUNITY_MEMBERSHIP',
            name: formData.name.trim(),
            email: formData.email.trim(),
            courseYear: formData.courseYear.trim(),
            areasOfInterest: formData.areasOfInterest,
            profileUrl: formData.profileUrl.trim(),
            society: 'INFINITY SGGSCC',
            submittedAt: new Date().toISOString()
          })
        });

        if (response.ok) {
          setFormStatus('success');
        } else {
          setErrorMessage('Submission failed. Please use the direct email fallback.');
          setFormStatus('idle');
        }
      } catch (err) {
        setErrorMessage('Network error connecting to registration server. Please use the direct email fallback.');
        setFormStatus('idle');
      }
    } else {
      // Endpoint is not configured: display transparent, functional client-side dispatch options
      setFormStatus('ready_to_send');
    }
  };

  const handleCopy = () => {
    const summary = `INFINITY SGGSCC Community Membership Application\nName: ${formData.name}\nEmail: ${formData.email}\nCourse & Year: ${formData.courseYear}\nInterests: ${formData.areasOfInterest.join(', ')}\nProfile Link: ${formData.profileUrl || 'N/A'}`;
    navigator.clipboard.writeText(summary);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const mailtoApplication = `mailto:?subject=${encodeURIComponent(
    `[INFINITY SGGSCC Membership Interest] ${formData.name} - ${formData.courseYear}`
  )}&body=${encodeURIComponent(
    `Hello INFINITY Team,\n\nI would like to apply/express interest for the society:\n\nName: ${formData.name}\nEmail: ${formData.email}\nCourse & Year: ${formData.courseYear}\nAreas of Interest: ${formData.areasOfInterest.join(', ')}\nProfile Link: ${formData.profileUrl || 'None provided'}\n\nLooking forward to the upcoming orientation and recruitment drive!`
  )}`;

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
            Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#55A6AC] via-[#6845F5] to-[#E32655]">INFINITY</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Connect with peer developers, cybersecurity analysts, designers, and competitive gamers at SGGSCC.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* State 1: Genuine API Endpoint Success */}
          {formStatus === 'success' && (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white font-display">
                Application Received!
              </h4>
              <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="text-white font-semibold">{formData.name}</span>! Your details have been transmitted. Stay tuned on our official channels for session interview and orientation dates.
              </p>
              <div className="pt-4 flex justify-center">
                <button
                  onClick={() => {
                    setFormStatus('idle');
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#6845F5] hover:bg-[#5835E5] transition-all"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}

          {/* State 2: Ready to Send / Transparent Integration State */}
          {formStatus === 'ready_to_send' && (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#55A6AC]/20 text-[#55A6AC] border border-[#55A6AC]/30 flex items-center justify-center">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-white font-display">
                Profile Formatted & Ready
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Official society recruitments for the 2026–27 session are conducted via college orientation drives. You can dispatch your prepared application directly via your email client or copy the formatted summary:
              </p>

              <div className="p-4 rounded-xl bg-[#0B1020] border border-slate-800 text-left text-xs font-mono text-slate-300 space-y-1.5">
                <div><span className="text-slate-500">Applicant:</span> {formData.name}</div>
                <div><span className="text-slate-500">Course & Year:</span> {formData.courseYear}</div>
                <div><span className="text-slate-500">Interests:</span> {formData.areasOfInterest.join(', ')}</div>
                {formData.profileUrl && <div><span className="text-slate-500">Profile:</span> {formData.profileUrl}</div>}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={mailtoApplication}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#3020A5] to-[#6845F5] hover:opacity-95 shadow-md shadow-[#6845F5]/25"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send via Email Client</span>
                </a>

                <button
                  onClick={handleCopy}
                  type="button"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{isCopied ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
                </button>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setFormStatus('idle')}
                  className="text-xs text-slate-400 hover:text-white underline"
                >
                  ← Edit details
                </button>
              </div>
            </div>
          )}

          {/* State 3: Active Form */}
          {(formStatus === 'idle' || formStatus === 'loading') && (
            <>
              {/* Official Social Links (Direct Connection) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={societyInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#0B1020] border border-slate-800 hover:border-[#6845F5]/60 group transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-[#55A6AC]" />
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
                  className="flex items-center justify-between p-3 rounded-xl bg-[#0B1020] border border-slate-800 hover:border-[#E32655]/60 group transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <Instagram className="w-4 h-4 text-[#E32655]" />
                    <div className="text-left">
                      <div className="text-xs font-bold text-white">Instagram</div>
                      <div className="text-[10px] text-slate-400">@infinity.sggscc</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                </a>
              </div>

              {/* Interactive Interest Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-300">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Course & Year *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.courseYear}
                      onChange={(e) => setFormData({ ...formData, courseYear: e.target.value })}
                      placeholder="e.g. B.Sc (H) Computer Science, 1st Year"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1020] border border-slate-800 focus:border-[#6845F5] text-white text-xs placeholder:text-slate-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      LinkedIn / GitHub Profile <span className="text-slate-500">(Optional)</span>
                    </label>
                    <input
                      type="url"
                      value={formData.profileUrl}
                      onChange={(e) => setFormData({ ...formData, profileUrl: e.target.value })}
                      placeholder="https://linkedin.com/in/username"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1020] border border-slate-800 focus:border-[#6845F5] text-white text-xs placeholder:text-slate-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Areas of Interest Multi-select */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">
                    Areas of Interest * <span className="text-slate-500">(Select all that apply)</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {domainOptions.map((domain) => {
                      const isSelected = formData.areasOfInterest.includes(domain);
                      return (
                        <button
                          key={domain}
                          type="button"
                          onClick={() => handleInterestToggle(domain)}
                          className={`p-2.5 rounded-xl text-left text-xs font-medium transition-all border flex items-center justify-between ${
                            isSelected
                              ? 'bg-[#6845F5]/20 text-[#55A6AC] border-[#6845F5]/50'
                              : 'bg-[#0B1020] text-slate-400 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          <span>{domain}</span>
                          {isSelected && <span className="text-xs text-[#55A6AC]">✓</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Privacy Consent Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-300">
                    <input
                      type="checkbox"
                      checked={formData.privacyConsent}
                      onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                      className="mt-0.5 rounded border-slate-700 text-[#6845F5] focus:ring-[#6845F5] bg-[#0B1020]"
                    />
                    <span>
                      I consent to INFINITY (SGGSCC) contacting me regarding recruitment rounds, auditions, and technology workshops.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#3020A5] via-[#6845F5] to-[#E32655] shadow-lg shadow-[#6845F5]/30 hover:opacity-95 transition-all active:scale-[0.98] disabled:opacity-50"
                >
                  {formStatus === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Registration...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Membership Interest</span>
                    </>
                  )}
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
