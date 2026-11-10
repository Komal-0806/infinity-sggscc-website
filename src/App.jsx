import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Activities from './components/Activities';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import CommunityModal from './components/CommunityModal';
import CommandPalette from './components/CommandPalette';
import EventDetailModal from './components/EventDetailModal';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCommunityModalOpen, setIsCommunityModalOpen] = useState(false);
  const [activeModalEvent, setActiveModalEvent] = useState(null);

  // Global keyboard shortcut for Command Palette (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1020] text-[#F5F4FF] relative flex flex-col font-sans selection:bg-[#6845F5]/40 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCommunityModal={() => setIsCommunityModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenCommunityModal={() => setIsCommunityModalOpen(true)}
        />

        {/* About INFINITY */}
        <About />

        {/* Activities & Domains */}
        <Activities
          onOpenCommunityModal={() => setIsCommunityModalOpen(true)}
        />

        {/* Events & Experiences */}
        <Events
          onOpenCommunityModal={() => setIsCommunityModalOpen(true)}
        />

        {/* Gallery — Moments at INFINITY */}
        <Gallery />

        {/* Our Team */}
        <Team
          onOpenCommunityModal={() => setIsCommunityModalOpen(true)}
        />

        {/* Contact & Community Connections */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top Floating Action Button */}
      <BackToTop />

      {/* Join Community Modal */}
      <CommunityModal
        isOpen={isCommunityModalOpen}
        onClose={() => setIsCommunityModalOpen(false)}
      />

      {/* Command Palette (Ctrl+K Quick Search) */}
      <CommandPalette
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectEvent={(evt) => setActiveModalEvent(evt)}
      />

      {/* Direct Event Detail Modal (triggered from Search) */}
      {activeModalEvent && (
        <EventDetailModal
          event={activeModalEvent}
          onClose={() => setActiveModalEvent(null)}
          onOpenCommunityModal={() => setIsCommunityModalOpen(true)}
        />
      )}
    </div>
  );
}
