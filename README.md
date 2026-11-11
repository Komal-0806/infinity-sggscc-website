# INFINITY – The Tech Society of SGGSCC, University of Delhi
### Official Modern Web Platform & Digital Brand Experience

> *"Technology has no limits. Neither does creativity."*

Official responsive website for **INFINITY – The Tech Society of Sri Guru Gobind Singh College of Commerce (SGGSCC), University of Delhi**, built for the competitive hackathon and engineered for immediate institutional adoption.

---

## 🌟 Executive Summary & Brand Identity

**INFINITY** is the premier collegiate technology society of Sri Guru Gobind Singh College of Commerce, University of Delhi (Pitampura, New Delhi).

### Official Verified Description
> *"Infinity is the tech society of SGGSCC, fostering innovation, creativity, and technological excellence among students. It organizes engaging events like gaming tournaments, cybersecurity weeks, and tech-driven competitions, aiming to create a vibrant community that explores the limitless potential of technology."*

### Core Technology Focus Areas
- **Artificial Intelligence & Machine Learning**
- **Web Development & Software Engineering**
- **Competitive Coding & Problem Solving**
- **Cybersecurity & Digital Forensics**
- **Gaming & Esports Championships**
- **Tech-Driven Hackathons & Innovation Sprints**

### Brand Preservation & Design Foundations
- **Official Logo**: Preserved without distortion with interlocking Teal (`#55A6AC`) and Crimson (`#E32655`) infinity loops, 3D typography, and cursive *"The Tech Society"* tagline.
- **Hero & Aesthetic Direction**: Inspired directly by the official LinkedIn banner, featuring deep navy and midnight backgrounds (`#0B1020`, `#10182D`), an interactive 3D perspective cyber grid floor, floating purple/violet fluid ambient orbs, and a real-time parametric Lemniscate of Bernoulli energy loop with mouse parallax.

---

## 👥 Authentic 2026–27 Society Leadership Council

All 14 members have been identified and matched with their original announcement photographs located in `public/assets/team/`:

### 1. Senior Office Bearers (2026–27)
| Member Name | Designation | Official Role Category | Photograph Asset |
| :--- | :--- | :--- | :--- |
| **Parmeet Singh** | President | Office Bearer 26 - 27 | `WhatsApp Image 2026-11-11 at 13.34.29.jpeg` |
| **Divjot Singh** | Vice President | Office Bearer 26 - 27 | `WhatsApp Image 2026-11-11 at 13.34.28 (2).jpeg` |
| **Braham Bir S.** | General Secretary | Office Bearer 26 - 27 | `WhatsApp Image 2026-11-11 at 13.34.28 (1).jpeg` |
| **Krisha Gupta** | Joint Secretary | Office Bearer 26 - 27 | `WhatsApp Image 2026-11-11 at 13.34.28.jpeg` |
| **Keshav Gupta** | Advisory | Office Bearer 26 - 27 | `WhatsApp Image 2026-11-11 at 13.34.27 (1).jpeg` |

### 2. Departmental Heads (2026–27)
| Member Name | Designation | Department / Domain | Photograph Asset |
| :--- | :--- | :--- | :--- |
| **Parth Midha** | Tech Head | Technical Domain | `WhatsApp Image 2026-11-11 at 13.34.27.jpeg` |
| **Prabhasees. S** | Tech Head | Technical Domain | `WhatsApp Image 2026-11-11 at 13.34.26 (2).jpeg` |
| **Hargun Kaur** | Marketing Head | Marketing Domain | `WhatsApp Image 2026-11-11 at 13.34.26 (1).jpeg` |
| **Yuvraj** | Marketing Head | Marketing Domain | `WhatsApp Image 2026-11-11 at 13.34.26.jpeg` |
| **Swayam** | Sponsor & PR Head | Sponsor & PR Domain | `WhatsApp Image 2026-11-11 at 13.34.25.jpeg` |
| **Namanpreet. K** | Sponsor & PR Head | Sponsor & PR Domain | `WhatsApp Image 2026-11-11 at 13.34.23.jpeg` |
| **Dashmeet Kaur** | Logistics Head | Logistics Domain | `WhatsApp Image 2026-11-11 at 13.34.24.jpeg` |

### 3. Senior Executive Members (2026–27)
| Member Name | Designation | Role Category | Photograph Asset |
| :--- | :--- | :--- | :--- |
| **Yajat Kohli** | Sr. Executive Member | Executives 26 - 27 | `WhatsApp Image 2026-11-11 at 13.34.25 (2).jpeg` |
| **Jasreet Kaur** | Sr. Executive Member | Executives 26 - 27 | `WhatsApp Image 2026-11-11 at 13.34.25 (1).jpeg` |

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

## 🚀 Key Improvements & Architectural Highlights

### 1. Hero Section (`Hero.jsx` & `HeroInfinityCanvas.jsx`)
- Clear communication of **INFINITY – The Tech Society**, **SGGSCC, University of Delhi**.
- Focus badge ribbon covering all 8 domains: AI, Web Development, Coding, Cybersecurity, Gaming, Hackathons, Innovation & Design.
- Dual prominent CTAs: **"Explore Events"** and **"Join INFINITY"**.
- Parametric Bernoulli canvas animation and perspective 3D grid floor.

### 2. Team Section (`Team.jsx`)
- Complete integration of all 14 authentic 2026–27 leadership photographs.
- 3 distinct logical tiers: Senior Office Bearers (5) $\rightarrow$ Departmental Heads (7) $\rightarrow$ Senior Executives (2).
- Category filter buttons allowing visitors to filter by tier.
- Interactive modal to inspect full-size uncropped official announcement posters.
- Outdated and placeholder profiles removed.

### 3. Gallery Section (`Gallery.jsx`)
- Generic mock placeholders removed in compliance with authenticity rules.
- Elegant, branded empty state explaining that official event photographs from the upcoming 2026–27 session are being curated.
- Direct link to official Instagram ([@infinity.sggscc](https://www.instagram.com/infinity.sggscc/)) for live tournament reels and stories.
- Data architecture in `societyData.js` ready to immediately receive new photos when added.

### 4. Events System (`Events.jsx` & `EventDetailModal.jsx`)
- Full support for event status (`Upcoming`, `Ongoing`, `Completed`).
- Clean separation of active hackathon tracks from completed workshops.
- Dynamic modal displaying:
  - Event title, category, status
  - Date & Time, Registration Deadline, Venue, Format
  - Eligibility and comprehensive Rules & Guidelines
  - Functional Registration button with external link or Instagram announcement route
  - One-click event link copying for social sharing

### 5. Contact Section (`Contact.jsx`)
- Genuinely functional form with client-side validation for name, email, subject, and message.
- Loading state, duplicate prevention, and clean error handling.
- Environment variable support: `VITE_FORMSPREE_ENDPOINT` or `VITE_CONTACT_ENDPOINT`.
- Honest, transparent client-side fallback: launches default email app via `mailto:` or copies formatted text to clipboard (no fake server submissions).
- Verified social links to LinkedIn, Instagram, and SGGSCC college portal.

### 6. Community / Join INFINITY (`CommunityModal.jsx`)
- Multi-field membership interest form: Full Name, Email, Course & Year, Areas of Interest multi-select, Optional LinkedIn/GitHub URL, and required Privacy Consent checkbox.
- Environment variable integration ready via `VITE_COMMUNITY_ENDPOINT`.
- Honest integration-ready state with direct mail dispatch and summary copying.
- Zero insecure storage of personal data in localStorage.

---

## 💻 Local Development Setup

To run the project locally on your machine:

1. **Navigate to the directory**:
   ```bash
   cd C:\Users\Acer\.gemini\antigravity\scratch\infinity-sggscc
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open **`http://localhost:3000`** in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```
   Builds the minified, production bundle in `/dist`.

5. **Test asset integrity**:
   ```bash
   node scripts/verifyAssets.js
   ```

---

**INFINITY – The Tech Society of Sri Guru Gobind Singh College of Commerce, University of Delhi**
*Where Curiosity Meets Innovation.*
