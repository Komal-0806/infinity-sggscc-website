import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Sparkles, ChevronRight, ExternalLink } from 'lucide-react';
import { societyInfo } from '../data/societyData';

export default function Navbar({ onOpenSearch, onOpenCommunityModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Activities', href: '#activities', id: 'activities' },
    { name: 'Events', href: '#events', id: 'events' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Team', href: '#team', id: 'team' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Track scroll position for sticky styling and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'activities', 'events', 'gallery', 'team', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: top >= 0 ? top : 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B1020]/90 backdrop-blur-xl border-b border-[#6845F5]/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & College Identity */}
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, '#hero')}
              className="flex items-center gap-3.5 group focus:outline-none"
              aria-label="INFINITY - Return to homepage"
            >
              <div className="relative flex items-center justify-center p-1 rounded-xl bg-[#10182D]/80 border border-[#6845F5]/30 group-hover:border-[#55A6AC]/60 transition-colors shadow-inner">
                {/* Official Logo */}
                <img
                  src="/assets/infinity-official-logo.png"
                  alt="INFINITY SGGSCC Official Logo"
                  className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to stylized SVG emblem if image load is delayed
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden h-10 w-10 items-center justify-center font-bold text-lg text-[#55A6AC]">
                  ∞
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl font-black tracking-wider text-white font-display group-hover:text-glow-white transition-all">
                    INFINITY
                  </span>
                  <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] uppercase font-mono tracking-wider font-semibold rounded-full bg-[#6845F5]/20 text-[#6845F5] border border-[#6845F5]/40">
                    SGGSCC
                  </span>
                </div>
                <span className="text-[11px] font-medium text-slate-400 tracking-wider uppercase font-sans">
                  The Tech Society • DU
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`relative px-3.5 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-[#55A6AC] via-[#6845F5] to-[#E32655] rounded-full shadow-[0_0_10px_#6845F5]" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              {/* Quick Search Shortcut */}
              <button
                onClick={onOpenSearch}
                type="button"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#10182D] border border-slate-700/60 hover:border-[#6845F5]/50 text-slate-400 hover:text-slate-200 text-xs transition-all shadow-sm"
                title="Quick Search (Ctrl + K)"
                aria-label="Open Command Search"
              >
                <Search className="w-3.5 h-3.5 text-slate-400" />
                <span className="hidden xl:inline">Search</span>
                <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-800 rounded text-slate-400 border border-slate-700 font-mono">
                  ⌘K
                </kbd>
              </button>

              {/* Join the Community Primary CTA */}
              <button
                onClick={onOpenCommunityModal}
                type="button"
                className="relative group overflow-hidden px-4 py-2 rounded-xl text-sm font-semibold text-white shadow-lg shadow-[#6845F5]/25 transition-all duration-300 hover:shadow-[#6845F5]/50 active:scale-[0.98]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#3020A5] via-[#6845F5] to-[#E32655] group-hover:opacity-95 transition-opacity" />
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#55A6AC]" />
                  <span>Join INFINITY</span>
                </span>
              </button>
            </div>

            {/* Mobile Menu & Search Buttons */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={onOpenSearch}
                type="button"
                className="p-2 rounded-lg bg-[#10182D] border border-slate-700/60 text-slate-300"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                className="p-2 rounded-lg bg-[#10182D] border border-[#6845F5]/30 text-white hover:bg-[#6845F5]/10 focus:outline-none"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Sidebar Drawer */}
        <div
          className={`fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-[#0B1020] border-l border-[#6845F5]/20 shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 transform ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/infinity-official-logo.png"
                  alt="INFINITY Logo"
                  className="h-9 w-auto"
                />
                <div>
                  <div className="font-bold text-lg text-white font-display">INFINITY</div>
                  <div className="text-[10px] text-slate-400 font-mono">SGGSCC, DU</div>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links list */}
            <div className="mt-6 flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-[#6845F5]/15 text-[#55A6AC] font-semibold border border-[#6845F5]/30'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommunityModal();
              }}
              type="button"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-white bg-gradient-to-r from-[#3020A5] via-[#6845F5] to-[#E32655] shadow-lg shadow-[#6845F5]/25"
            >
              <Sparkles className="w-4 h-4 text-[#55A6AC]" />
              <span>Join INFINITY</span>
            </button>
            <div className="text-center text-xs text-slate-500 font-mono">
              Official Tech Society of SGGSCC, DU
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
