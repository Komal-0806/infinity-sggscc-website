# INFINITY – The Tech Society of SGGSCC, University of Delhi
### Official Modern Web Platform & Digital Brand Experience

> *"Technology has no limits. Neither does creativity."*

Official responsive website for **INFINITY – The Tech Society of Sri Guru Gobind Singh College of Commerce (SGGSCC), University of Delhi**, built for the competitive hackathon and engineered for immediate institutional adoption.

---

## 🌟 Executive Summary & Brand Identity

**INFINITY** is the premier collegiate technology society of Sri Guru Gobind Singh College of Commerce, University of Delhi (Pitampura, New Delhi).

### Official Verified Description
> *"Infinity is the tech society of SGGSCC, fostering innovation, creativity, and technological excellence among students. It organizes engaging events like gaming tournaments, cybersecurity weeks, and tech-driven competitions, aiming to create a vibrant community that explores the limitless potential of technology."*

### Brand Reference Preservation
- **Official Logo**: Preserved with the interlocking Teal (`#55A6AC`) and Crimson (`#E32655`) infinity loops, bold lettering, and cursive *"The Tech Society"* tagline.
- **Hero & Aesthetic Direction**: Inspired directly by the official LinkedIn banner, featuring deep navy and midnight backgrounds (`#0B1020`, `#10182D`), an interactive 3D perspective cyber grid floor, floating purple/violet fluid ambient orbs, and a real-time parametric Lemniscate of Bernoulli energy loop with mouse parallax.

---

## 🎨 Design System & Color Palette

| Token | Hex Value | Role & Usage |
| :--- | :--- | :--- |
| **Midnight Blue** | `#0B1020` | Primary deep cosmic backdrop, high contrast surface |
| **Deep Navy** | `#10182D` | Structural cards, navigation surfaces, elevated containers |
| **Purple** | `#3020A5` | Depth gradients, accent shadows, secondary brand tone |
| **Electric Violet** | `#6845F5` | Primary action glow, focus states, interactive borders |
| **Teal** | `#55A6AC` | Official logo left loop, technical domain accents, badges |
| **Crimson** | `#E32655` | Official logo right loop, alerts, high-energy highlights |
| **Off-White** | `#F5F4FF` | Crisp high-contrast typography and icon treatments |

---

## 🚀 Key Features & Architectural Highlights

### 1. Navigation System (`Navbar.jsx`)
- Sticky frosted glass with dynamic border & backdrop blur on scroll.
- Active section highlighting connected with scroll position.
- Keyboard-accessible search button (`⌘K` / `Ctrl+K`) triggering the Command Palette.
- Working "Join Community" modal launcher.
- Responsive mobile menu drawer with smooth animation and backdrop lock.

### 2. Immersive Hero Section (`Hero.jsx` & `HeroInfinityCanvas.jsx`)
- **Parametric Infinity Canvas**: Real-time mathematical simulation of the Lemniscate of Bernoulli \( (x^2 + y^2)^2 = 2a^2(x^2 - y^2) \) with dual glowing energy pulses in brand Teal and Crimson.
- **Cyber Grid Floor**: Perspective 3D grid with animated depth matching the LinkedIn banner.
- **Fluid 3D Orbs**: Floating violet and purple ambient gradients.
- Working CTAs to **"Explore Events"** and **"Discover INFINITY"**.
- Verified quick domain tags (Gaming Tournaments, Cybersecurity Weeks, Tech Competitions).

### 3. About INFINITY (`About.jsx`)
- Prominent display of verified society description.
- 4 interactive core pillars with custom themes:
  - **Innovation** (Teal)
  - **Creativity** (Crimson)
  - **Collaboration** (Violet)
  - **Technological Excellence** (Purple)
- Proposed Mission & Vision statements clearly disclaimed as proposed editorial copy.
- Institutional affiliation to SGGSCC, University of Delhi.

### 4. Activities & Tech Domains (`Activities.jsx`)
- 6 interactive tracks:
  1. *AI & Emerging Technologies*
  2. *Web & Software Engineering*
  3. *Cybersecurity & Digital Defense*
  4. *Gaming & Esports Tournaments*
  5. *Tech-Driven Competitions & Hackathons*
  6. *Tech Learning & Peer Mentorship*
- Filter by category + detailed curriculum outline modal for each domain.
- Clear disclaimer: suggested technological exploration tracks, not administrative departments.

### 5. Events & Experiences (`Events.jsx` & `EventDetailModal.jsx`)
- Centered on verified society activities: Gaming Tournaments, Cybersecurity Awareness Weeks, and Hackathons.
- Modal popup with complete agenda breakdown, eligibility prerequisites, share link generator, and inquiry triggers.
- Modular data architecture (`src/data/societyData.js`) allowing quick addition or modification of events.

### 6. Archival Gallery (`Gallery.jsx` & `GalleryLightboxModal.jsx`)
- High-fidelity SVG placeholders clearly marked `[ PLACEHOLDER // PENDING EVENT PHOTOGRAPHY ]`.
- Lightbox popup with full image inspect view and captions.
- Verified official Instagram CTA linking to [`@infinity.sggscc`](https://www.instagram.com/infinity.sggscc/).

### 7. Leadership & Continuity (`Team.jsx`)
- Historical 2025–26 Executive Council distinctly preserved:
  - **Kulsehaj Singh** — President
  - **Advay Nagpal** — Vice-President
  - **Harshmohan Singh** — General Secretary
  - **Harnoor Kaur** — Joint Secretary
  - **Prabhleen Kaur** — Advisory
- Prominent authenticity disclaimer: Historical 2025–26 tenure is not conflated with the upcoming 2026–27 session.
- Tab for 2026–27 recruitment notice with open track previews.

### 8. Contact & Inquiry System (`Contact.jsx` & `CommunityModal.jsx`)
- Official SGGSCC college address and verified external links:
  - **LinkedIn**: [linkedin.com/company/infinitysggscc](https://www.linkedin.com/company/infinitysggscc)
  - **Instagram**: [instagram.com/infinity.sggscc](https://www.instagram.com/infinity.sggscc/)
  - **College Portal**: [sggscc.ac.in](https://www.sggscc.ac.in)
- Client-side inquiry composer with copy-to-clipboard and mailto actions (no fake server submissions).
- Interactive FAQ accordion for student questions.

### 9. Command Palette & Micro-Interactions (`CommandPalette.jsx` & `BackToTop.jsx`)
- Global `⌘K` / `Ctrl+K` shortcut to search and jump to any section, event, or domain.
- Circular scroll-progress floating button for instant back-to-top navigation.
- Full `prefers-reduced-motion` compliance.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS + Custom CSS3 Gradients & Animations
- **Icons**: Lucide React
- **Canvas Rendering**: HTML5 Canvas (Parametric Lemniscate particle physics)
- **Typography**: Space Grotesk, Outfit, Plus Jakarta Sans, Caveat, JetBrains Mono

---

## 💻 Local Development Setup

To run the project locally on your machine:

1. **Clone or Navigate to the directory**:
   ```bash
   cd infinity-sggscc
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the Vite development server**:
   ```bash
   npm run dev
   ```

4. **Open in your browser**:
   Navigate to `http://localhost:3000` (or the port indicated in your terminal).

---

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

This outputs clean, minified, production-ready assets to the `/dist` directory.

To test the production build locally:
```bash
npm run preview
```

---

## ☁️ Deployment Instructions

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel` or link your repository on [vercel.com](https://vercel.com).
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`

### Deploy to Netlify
1. Drag and drop the `dist` folder into [app.netlify.com/drop](https://app.netlify.com/drop) or connect your repository.
2. Build Command: `npm run build`
3. Publish Directory: `dist`

---

## 📁 Project Directory Structure

```
infinity-sggscc/
├── public/
│   └── assets/
│       ├── infinity-official-logo.png      # Official verified society logo
│       ├── infinity-official-banner.jpg    # Official LinkedIn banner reference
│       └── placeholders/                   # High-res themed SVG placeholders
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                      # Sticky navbar with search & mobile drawer
│   │   ├── Hero.jsx                        # Hero presentation & CTAs
│   │   ├── HeroInfinityCanvas.jsx          # Parametric Bernoulli infinity loop canvas
│   │   ├── About.jsx                       # Official description, 4 pillars, ethos
│   │   ├── Activities.jsx                  # 6 technical domains & curriculum modal
│   │   ├── Events.jsx                      # Filterable event cards & schedules
│   │   ├── EventDetailModal.jsx            # Deep-dive event agenda & modal
│   │   ├── Gallery.jsx                     # Photo gallery grid with archive badges
│   │   ├── GalleryLightboxModal.jsx        # Image lightbox modal
│   │   ├── Team.jsx                        # 2025-26 council & recruitment tabs
│   │   ├── CommunityModal.jsx              # "Join Community" & drive alerts modal
│   │   ├── Contact.jsx                     # Campus address, inquiry composer & FAQ
│   │   ├── Footer.jsx                      # Footer branding, links & DU attribution
│   │   ├── BackToTop.jsx                   # Circular scroll progress button
│   │   └── CommandPalette.jsx              # Cmd+K quick search palette
│   ├── data/
│   │   └── societyData.js                  # Centralized, editable data source
│   ├── App.jsx                             # Root React application
│   ├── index.css                           # Tailwind directives & cyber aesthetics
│   └── main.jsx                            # React entry point
├── scripts/
│   └── generatePlaceholders.js             # SVG placeholder generation tool
├── index.html                              # Base HTML with fonts & meta tags
├── tailwind.config.js                      # Custom brand color & animation config
├── vite.config.js                          # Vite bundler configuration
└── package.json                            # Scripts & dependencies
```

---

## 🛡️ Content Authenticity & Editorial Standards

- **Logo Integrity**: The official logo was preserved without distortion or color tampering.
- **Zero Hallucination**: No false sponsors, fake participant numbers, or fabricated current 2026–27 council designations are presented.
- **Maintainability**: When genuine session photographs become available, simply update the URLs in `src/data/societyData.js` without touching component code.

---

**INFINITY – The Tech Society of Sri Guru Gobind Singh College of Commerce, University of Delhi**
*Where Curiosity Meets Innovation.*
