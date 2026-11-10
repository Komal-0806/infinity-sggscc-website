import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/assets/placeholders');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function createSvgPlaceholder({ title, category, accentColor, iconSvg, subtitle }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B1020" />
      <stop offset="50%" stop-color="#10182D" />
      <stop offset="100%" stop-color="#0E1428" />
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#6845F5" stop-opacity="0.4" />
    </linearGradient>
    <pattern id="cyberGrid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(104, 69, 245, 0.08)" stroke-width="1"/>
    </pattern>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Background base -->
  <rect width="800" height="500" fill="url(#bg)" />
  <rect width="800" height="500" fill="url(#cyberGrid)" />

  <!-- Ambient Light Orbs -->
  <circle cx="150" cy="120" r="140" fill="${accentColor}" opacity="0.12" filter="url(#glow)" />
  <circle cx="680" cy="380" r="160" fill="#6845F5" opacity="0.1" filter="url(#glow)" />

  <!-- Tech Frame Borders -->
  <rect x="25" y="25" width="750" height="450" rx="16" fill="none" stroke="rgba(104, 69, 245, 0.2)" stroke-width="1.5" />
  <rect x="35" y="35" width="730" height="430" rx="12" fill="rgba(16, 24, 45, 0.4)" stroke="rgba(255, 255, 255, 0.05)" stroke-width="1" />

  <!-- Corner Brackets -->
  <path d="M 25 55 L 25 25 L 55 25" fill="none" stroke="${accentColor}" stroke-width="3" />
  <path d="M 775 55 L 775 25 L 745 25" fill="none" stroke="${accentColor}" stroke-width="3" />
  <path d="M 25 445 L 25 475 L 55 475" fill="none" stroke="${accentColor}" stroke-width="3" />
  <path d="M 775 445 L 775 475 L 745 475" fill="none" stroke="${accentColor}" stroke-width="3" />

  <!-- Infinity Watermark in Background -->
  <path d="M 330 250 C 330 210, 260 210, 260 250 C 260 290, 330 290, 400 250 C 470 210, 540 210, 540 250 C 540 290, 470 290, 400 250 C 350 220, 330 250, 330 250" 
        fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="14" stroke-linecap="round" />

  <!-- Top Badge -->
  <rect x="60" y="55" width="230" height="30" rx="6" fill="rgba(11, 16, 32, 0.9)" stroke="rgba(104, 69, 245, 0.3)" />
  <circle cx="75" cy="70" r="4" fill="${accentColor}" />
  <text x="88" y="74" fill="#F5F4FF" font-family="monospace" font-size="11" letter-spacing="1.5" font-weight="600">${category.toUpperCase()} ARCHIVE</text>

  <!-- Central Graphic Icon -->
  <g transform="translate(360, 140)" filter="url(#glow)">
    <circle cx="40" cy="40" r="45" fill="rgba(16, 24, 45, 0.8)" stroke="${accentColor}" stroke-width="2" />
    ${iconSvg}
  </g>

  <!-- Title & Subtext -->
  <text x="400" y="295" fill="#FFFFFF" font-family="sans-serif" font-weight="800" font-size="28" text-anchor="middle" letter-spacing="-0.5">${title}</text>
  <text x="400" y="330" fill="rgba(245, 244, 255, 0.75)" font-family="sans-serif" font-weight="400" font-size="15" text-anchor="middle">${subtitle}</text>

  <!-- Status / Verification Footer -->
  <rect x="190" y="385" width="420" height="34" rx="17" fill="rgba(11, 16, 32, 0.85)" stroke="rgba(255, 255, 255, 0.1)" />
  <text x="400" y="407" fill="rgba(245, 244, 255, 0.6)" font-family="monospace" font-size="11" text-anchor="middle" letter-spacing="1">
    [ PLACEHOLDER // PENDING EVENT PHOTOGRAPHY ]
  </text>
</svg>`;
}

const icons = {
  shield: `<path d="M 40 20 L 58 28 L 58 44 C 58 56 40 64 40 64 C 40 64 22 56 22 44 L 22 28 Z" fill="none" stroke="#E32655" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`,
  gamepad: `<rect x="22" y="30" width="36" height="24" rx="6" fill="none" stroke="#55A6AC" stroke-width="3"/>
            <path d="M 28 42 L 36 42 M 32 38 L 32 46" stroke="#55A6AC" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="50" cy="39" r="2" fill="#55A6AC"/>
            <circle cx="46" cy="45" r="2" fill="#55A6AC"/>`,
  code: `<path d="M 33 32 L 23 42 L 33 52 M 47 32 L 57 42 L 47 52 M 43 28 L 37 56" fill="none" stroke="#6845F5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`,
  cpu: `<rect x="26" y="26" width="28" height="28" rx="4" fill="none" stroke="#55A6AC" stroke-width="3"/>
        <path d="M 34 20 L 34 26 M 46 20 L 46 26 M 34 54 L 34 60 M 46 54 L 46 60 M 20 34 L 26 34 M 20 46 L 26 46 M 54 34 L 60 34 M 54 46 L 60 46" stroke="#55A6AC" stroke-width="2.5" stroke-linecap="round"/>`,
  camera: `<path d="M 25 32 L 32 24 L 48 24 L 55 32 L 59 32 C 61 32 63 34 63 36 L 63 56 C 63 58 61 60 59 60 L 21 60 C 19 60 17 58 17 56 L 17 36 C 17 34 19 32 21 32 Z" fill="none" stroke="#E32655" stroke-width="3"/>
          <circle cx="40" cy="46" r="8" fill="none" stroke="#E32655" stroke-width="2.5"/>`
};

const items = [
  { name: 'event-cybersecurity', title: 'Cybersecurity Awareness Week', category: 'CYBER DEFENSE', accentColor: '#E32655', icon: icons.shield, subtitle: 'Digital Vigilance, Threat Forensics & CTF Drills' },
  { name: 'event-gaming', title: 'INFINITY Gaming Tournament', category: 'ESPORTS', accentColor: '#55A6AC', icon: icons.gamepad, subtitle: 'Competitive Multiplayer Championship & Knockouts' },
  { name: 'event-hackathon', title: 'Tech-Driven Innovation Sprint', category: 'HACKATHON', accentColor: '#6845F5', icon: icons.code, subtitle: '36-Hour Collaborative Prototyping & Pitching' },
  { name: 'event-webdev', title: 'Modern Web Craft & UI Engineering', category: 'BOOTCAMP', accentColor: '#55A6AC', icon: icons.code, subtitle: 'Modern Full-Stack Architectures & Responsive Systems' },
  { name: 'event-ai', title: 'AI Tools & Developer Productivity', category: 'ARTIFICIAL INTELLIGENCE', accentColor: '#6845F5', icon: icons.cpu, subtitle: 'Exploring LLM Pipelines & Machine Learning Paradigms' },
  { name: 'gallery-1', title: 'Security Workshop Lab', category: 'CAMPUS LAB', accentColor: '#E32655', icon: icons.shield, subtitle: 'Students Analyzing Threat Mitigations & Network Defense' },
  { name: 'gallery-2', title: 'Esports Championship Arena', category: 'GAMING SHOWDOWN', accentColor: '#55A6AC', icon: icons.gamepad, subtitle: 'High Stakes Knockout Matches & Team Strategy' },
  { name: 'gallery-3', title: 'Midnight Hackathon Sprint', category: 'CODE SPRINT', accentColor: '#6845F5', icon: icons.code, subtitle: 'Cross-functional Teams Building Through The Night' },
  { name: 'gallery-4', title: 'Whiteboard Architecture Jam', category: 'IDEATION SESSION', accentColor: '#55A6AC', icon: icons.cpu, subtitle: 'Mapping System Architecture & User Journey Workflows' },
  { name: 'gallery-5', title: 'Jury Pitch & Live Prototype Demo', category: 'HACKATHON DEMO', accentColor: '#E32655', icon: icons.code, subtitle: 'Presenting High-Impact Student Tech Projects' },
  { name: 'gallery-6', title: 'INFINITY Induction & Welcome Meet', category: 'COMMUNITY', accentColor: '#6845F5', icon: icons.camera, subtitle: 'Welcoming The Next Cohort of SGGSCC Innovators' },
];

items.forEach(item => {
  const svg = createSvgPlaceholder({
    title: item.title,
    category: item.category,
    accentColor: item.accentColor,
    iconSvg: item.icon,
    subtitle: item.subtitle
  });
  fs.writeFileSync(path.join(outDir, `${item.name}.svg`), svg);
  // Also provide .jpg fallback alias if referenced
  fs.writeFileSync(path.join(outDir, `${item.name}.jpg`), svg);
});

console.log('Generated placeholder SVGs successfully.');
