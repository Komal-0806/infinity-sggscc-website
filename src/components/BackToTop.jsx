import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (totalScroll / windowHeight) * 100;

      setScrollProgress(scrollPercent);
      setIsVisible(totalScroll > 320);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      type="button"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#10182D]/90 hover:bg-[#1a2444] border border-[#6845F5]/40 text-white shadow-xl shadow-black/50 transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none backdrop-blur-md"
      title="Back to Top"
      aria-label="Back to Top"
    >
      {/* Circular Progress Meter */}
      <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-1">
        <circle
          cx="20"
          cy="20"
          r={radius}
          className="text-slate-800"
          strokeWidth="2.5"
          stroke="currentColor"
          fill="transparent"
        />
        <circle
          cx="20"
          cy="20"
          r={radius}
          stroke="url(#progressGrad)"
          strokeWidth="2.5"
          fill="transparent"
          strokeDasharray={circumference}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#55A6AC" />
            <stop offset="50%" stopColor="#6845F5" />
            <stop offset="100%" stopColor="#E32655" />
          </linearGradient>
        </defs>
      </svg>

      <ArrowUp className="w-4 h-4 text-slate-300 group-hover:text-white group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
}
