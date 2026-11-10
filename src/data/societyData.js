/**
 * INFINITY – The Tech Society of SGGSCC, University of Delhi
 * Centralized, structured, and easily editable data store.
 */

export const societyInfo = {
  name: "INFINITY",
  fullName: "INFINITY – The Tech Society",
  tagline: "The Tech Society",
  college: "Sri Guru Gobind Singh College of Commerce",
  university: "University of Delhi",
  location: "Opposite TV Tower, Pitampura, Delhi, 110034",
  officialDescription:
    "Infinity is the tech society of SGGSCC, fostering innovation, creativity, and technological excellence among students. It organizes engaging events like gaming tournaments, cybersecurity weeks, and tech-driven competitions, aiming to create a vibrant community that explores the limitless potential of technology.",
  shortDescription:
    "Fostering innovation, creativity, and technological excellence among students at SGGSCC, University of Delhi.",
  headline: "Where Curiosity Meets Innovation.",
  subheadline:
    "Exploring the limitless potential of technology through hands-on hackathons, cybersecurity challenges, gaming tournaments, and collaborative innovation.",
  socials: {
    linkedin: "https://www.linkedin.com/company/infinitysggscc",
    instagram: "https://www.instagram.com/infinity.sggscc/",
    collegeWebsite: "https://www.sggscc.ac.in",
  },
  establishedContext: "Official Technology Society of SGGSCC, University of Delhi",
  motto: "Technology has no limits. Neither does creativity.",
};

export const corePillars = [
  {
    id: "innovation",
    title: "Innovation",
    color: "#55A6AC", // Teal
    accentBorder: "border-[#55A6AC]/30",
    glowColor: "rgba(85, 166, 172, 0.2)",
    icon: "Lightbulb",
    tagline: "Pioneering Ideas",
    description:
      "Transforming creative curiosity into practical solutions through cutting-edge technologies, prototyping, and modern software paradigms.",
    points: [
      "Rapid prototyping of student ideas",
      "Workshops on emerging tech trends",
      "Hands-on project development labs"
    ]
  },
  {
    id: "creativity",
    title: "Creativity",
    color: "#E32655", // Crimson
    accentBorder: "border-[#E32655]/30",
    glowColor: "rgba(227, 38, 85, 0.2)",
    icon: "Sparkles",
    tagline: "Limitless Expression",
    description:
      "Blending art, design, and interactive experiences to build digital solutions that are visually captivating and intuitive to use.",
    points: [
      "UI/UX design challenges and critiques",
      "Game development and 3D modeling",
      "Creative coding & generative media"
    ]
  },
  {
    id: "collaboration",
    title: "Collaboration",
    color: "#6845F5", // Electric Violet
    accentBorder: "border-[#6845F5]/30",
    glowColor: "rgba(104, 69, 245, 0.2)",
    icon: "Users",
    tagline: "Community & Teamwork",
    description:
      "Building a peer-to-peer ecosystem where tech enthusiasts, coders, gamers, and designers inspire, mentor, and build together.",
    points: [
      "Cross-discipline team hackathons",
      "Peer mentorship and coding circles",
      "Inter-college society alliances"
    ]
  },
  {
    id: "excellence",
    title: "Technological Excellence",
    color: "#3020A5", // Purple
    accentBorder: "border-[#3020A5]/40",
    glowColor: "rgba(48, 32, 165, 0.25)",
    icon: "Award",
    tagline: "Mastery & Standards",
    description:
      "Striving for technical rigor, algorithmic problem solving, code quality, and cybersecurity vigilance across all societal initiatives.",
    points: [
      "Competitive programming and CTF drills",
      "Industry-standard code practices",
      "Expert tech talks & masterclasses"
    ]
  }
];

export const activitiesData = [
  {
    id: "ai-emerging-tech",
    title: "AI & Emerging Technologies",
    category: "Intelligent Systems",
    icon: "Cpu",
    badge: "Focus Track",
    shortDesc: "Exploring machine learning, generative models, neural architectures, and future-forward computing paradigms.",
    fullDesc:
      "Students explore practical applications of artificial intelligence, computer vision, natural language processing, and prompt engineering through collaborative experiments and research discussions.",
    topics: ["Machine Learning Fundamentals", "Deep Learning & NLP", "Generative AI & LLMs", "Edge AI & IoT Prototyping"],
    color: "#55A6AC"
  },
  {
    id: "web-software-engineering",
    title: "Web & Software Engineering",
    category: "Full-Stack Development",
    icon: "Globe",
    badge: "Active Domain",
    shortDesc: "Architecting modern web apps, scalable APIs, reactive interfaces, and developer-friendly platforms.",
    fullDesc:
      "From responsive single-page applications to resilient server architectures, members master modern frameworks, state management, containerization, and clean code principles.",
    topics: ["Modern React & Next.js", "RESTful & GraphQL APIs", "Cloud & Microservices", "Version Control & CI/CD"],
    color: "#6845F5"
  },
  {
    id: "cybersecurity-awareness",
    title: "Cybersecurity & Digital Defense",
    category: "Information Security",
    icon: "ShieldAlert",
    badge: "Specialized Track",
    shortDesc: "Defending digital infrastructure, mastering ethical hacking, cryptography, and digital safety vigilance.",
    fullDesc:
      "Highlighting digital awareness, penetration testing concepts, network security protocols, and hosting capture-the-flag (CTF) security drills for college students.",
    topics: ["Ethical Hacking & Penetration Testing", "Capture The Flag (CTF) Challenges", "Network Defense & Cryptography", "Digital Footprint & Privacy"],
    color: "#E32655"
  },
  {
    id: "gaming-esports",
    title: "Gaming & Esports Tournaments",
    category: "Competitive Gaming",
    icon: "Gamepad2",
    badge: "Community Favorite",
    shortDesc: "Hosting esports leagues, game design discussions, strategic tournaments, and community gaming sessions.",
    fullDesc:
      "Bringing together competitive gamers and aspiring game developers. We organize LAN & online tournaments, analyze game engines, and celebrate gaming culture.",
    topics: ["Competitive Esports Leagues", "Game Engine Exploration (Unity/Godot)", "Strategy & Team Dynamics", "Streaming & Tournament Ops"],
    color: "#55A6AC"
  },
  {
    id: "competitions-hackathons",
    title: "Tech-Driven Competitions",
    category: "Hackathons & Challenges",
    icon: "Trophy",
    badge: "Flagship Events",
    shortDesc: "Testing algorithmic grit, problem-solving agility, and rapid product development under pressure.",
    fullDesc:
      "Intense coding sprints, hackathons, and web-design competitions challenging students to solve real-world problems in timed environments.",
    topics: ["24h-36h Coding Hackathons", "Algorithm & Speed Coding", "Product Design Sprints", "Pitching to Tech Panels"],
    color: "#E32655"
  },
  {
    id: "tech-learning-collaboration",
    title: "Tech Learning & Mentorship",
    category: "Community & Peer Learning",
    icon: "Code2",
    badge: "Open To All",
    shortDesc: "Hands-on bootcamps, peer-led coding sessions, open-source workshops, and student mentorship.",
    fullDesc:
      "A supportive, inclusive environment where beginners learn fundamentals and advanced developers sharpen their mentorship and public speaking capabilities.",
    topics: ["Beginner-to-Intermediate Bootcamps", "Open Source Contribution Drives", "Resume & Portfolio Reviews", "Tech Talks & Alumni AMA"],
    color: "#6845F5"
  }
];

export const eventsData = [
  {
    id: "cyber-sentinel-week",
    title: "Cybersecurity Awareness Week",
    category: "Cybersecurity",
    statusBadge: "Verified Society Event",
    statusType: "flagship",
    date: "Annual Society Initiative",
    duration: "Week-long Series",
    mode: "Hybrid / Campus & Online",
    image: "/assets/placeholders/event-cybersecurity.jpg",
    shortDesc: "A week-long immersion into ethical hacking, digital hygiene, system forensics, and student security challenges.",
    longDesc: "As highlighted in the official society overview, Cybersecurity Week is one of INFINITY's signature engagements. The event equips students across SGGSCC with crucial awareness on threat mitigation, passwords and authentication security, social engineering defenses, and introductory CTF challenges.",
    agenda: [
      "Keynote on Modern Cyber Threat Landscape",
      "Workshop: Ethical Hacking Tools & Environment Setup",
      "Hands-on Defense: Spotting Phishing & Social Engineering",
      "Campus Capture-The-Flag (CTF) Challenge"
    ],
    prerequisites: "Open to all students. No prior cybersecurity expertise required.",
    isVerified: true
  },
  {
    id: "infinity-gaming-showdown",
    title: "INFINITY Gaming Tournament",
    category: "Gaming & Esports",
    statusBadge: "Verified Society Event",
    statusType: "flagship",
    date: "Annual Tournament",
    duration: "2-Day Championship",
    mode: "Campus Arena / LAN",
    image: "/assets/placeholders/event-gaming.jpg",
    shortDesc: "High-adrenaline gaming tournament bringing together SGGSCC's top esports players in competitive team matches.",
    longDesc: "Official gaming showdown organized by INFINITY to celebrate strategic esports, multiplayer teamwork, and digital sportsmanship. Features knockout rounds, custom lobby shoutcasting, and community viewership.",
    agenda: [
      "Registration & Knockout Bracket Reveal",
      "Group Stage & Quarter-Final Matches",
      "Live Streamed Semi-Finals with Shoutcasting",
      "Grand Finale & Championship Crowning"
    ],
    prerequisites: "Registered team or solo entry according to tournament title rules.",
    isVerified: true
  },
  {
    id: "tech-driven-hackathon",
    title: "Tech-Driven Innovation Sprint",
    category: "Competitions",
    statusBadge: "Verified Society Event",
    statusType: "flagship",
    date: "Flagship Hackathon",
    duration: "36-Hour Hackathon",
    mode: "SGGSCC Campus & Virtual",
    image: "/assets/placeholders/event-hackathon.jpg",
    shortDesc: "Collaborative tech hackathon challenging participants to engineer creative software solutions for real-world issues.",
    longDesc: "A core pillar of INFINITY's vision: an engaging tech competition where multidisciplinary student squads ideate, prototype, and pitch functional software, web platforms, or hardware solutions.",
    agenda: [
      "Problem Statement Releases & Squad Formation",
      "Mentorship Checkpoints & Architecture Review",
      "Midnight Code Push & Progress Demos",
      "Final Jury Showcase, Pitching, and Awards"
    ],
    prerequisites: "Teams of 2 to 4 members with laptops and Git/GitHub readiness.",
    isVerified: true
  },
  {
    id: "web-craft-workshop",
    title: "Modern Web Craft & UI Engineering",
    category: "Workshops",
    statusBadge: "Upcoming Workshop Series",
    statusType: "upcoming",
    date: "Upcoming Academic Session",
    duration: "3-Hour Intensive Workshop",
    mode: "Computer Lab / SGGSCC",
    image: "/assets/placeholders/event-webdev.jpg",
    shortDesc: "Deep-dive session into building responsive, accessible, and high-performance modern web experiences.",
    longDesc: "An educational bootcamp track focusing on reactive component architectures, CSS grid/flexbox mastery, state synchronization, and deploying projects directly to cloud hosting providers.",
    agenda: [
      "Semantic HTML & Component-First Thinking",
      "Responsive Layouts with Tailwind CSS",
      "Handling State & Interactions cleanly",
      "Live Deployment & GitHub Showcase"
    ],
    prerequisites: "Basic familiarity with HTML, CSS, and JavaScript fundamentals.",
    isVerified: false,
    placeholderNote: "Dates & registrations subject to upcoming semester calendar announcement."
  },
  {
    id: "ai-prompt-code-masterclass",
    title: "AI Tools & Developer Productivity",
    category: "AI & Emerging Tech",
    statusBadge: "Upcoming Masterclass",
    statusType: "upcoming",
    date: "Upcoming Academic Session",
    duration: "2-Hour Masterclass",
    mode: "Seminar Hall / Online",
    image: "/assets/placeholders/event-ai.jpg",
    shortDesc: "Learn how to leverage developer copilots, prompt engineering, and LLM APIs to build smarter software faster.",
    longDesc: "A practical guide to incorporating modern AI workflows in college projects, from prompt engineering and code review assistance to building AI-assisted web utilities.",
    agenda: [
      "Overview of LLM Architectures for Developers",
      "Effective Prompt Engineering Strategies",
      "Integrating APIs into Web Applications",
      "Ethics, Bias & Safeguards in AI"
    ],
    prerequisites: "Open to all SGGSCC students interested in AI.",
    isVerified: false,
    placeholderNote: "Speaker lineup & session schedule to be announced on official social handles."
  }
];

export const galleryItems = [
  {
    id: "gallery-1",
    title: "Cybersecurity Workshop & Hands-on Lab",
    category: "Cybersecurity",
    aspect: "landscape",
    caption: "Students analyzing network security protocols and practicing safe digital defenses in campus lab.",
    dateTag: "Society Archives",
    isPlaceholder: true
  },
  {
    id: "gallery-2",
    title: "Esports Arena & Tournament Battle",
    category: "Gaming",
    aspect: "square",
    caption: "Intense competitive gaming matches during the annual INFINITY gaming tournament.",
    dateTag: "Society Archives",
    isPlaceholder: true
  },
  {
    id: "gallery-3",
    title: "Hackathon Midnight Hacking Session",
    category: "Hackathons",
    aspect: "tall",
    caption: "Teams collaborating, debugging code, and building prototypes through the night.",
    dateTag: "Society Archives",
    isPlaceholder: true
  },
  {
    id: "gallery-4",
    title: "Tech Ideation & Whiteboard Architecture",
    category: "Bootcamps",
    aspect: "square",
    caption: "Brainstorming session mapping out user journey and microservice flow for a student project.",
    dateTag: "Society Archives",
    isPlaceholder: true
  },
  {
    id: "gallery-5",
    title: "Final Project Pitch to Faculty & Mentors",
    category: "Hackathons",
    aspect: "landscape",
    caption: "Student squads presenting their functional prototypes during competition demo hour.",
    dateTag: "Society Archives",
    isPlaceholder: true
  },
  {
    id: "gallery-6",
    title: "INFINITY Community Meetup & Onboarding",
    category: "Community",
    aspect: "landscape",
    caption: "Welcoming enthusiastic new tech talent into the INFINITY family at SGGSCC.",
    dateTag: "Society Archives",
    isPlaceholder: true
  }
];

export const teamData = {
  historicalTenure: "2025–2026 Academic Session (Historical Council)",
  note: "The council details below reflect the verified historical record for the 2025–26 session. They are distinctly preserved for institutional continuity and are not automatically claimed as the current 2026–27 executive body.",
  councilMembers: [
    {
      name: "Kulsehaj Singh",
      role: "President",
      tenure: "2025–26 Session",
      badge: "Historical Executive",
      bio: "Spearheaded society vision, inter-college partnerships, and flagship tech initiatives across SGGSCC.",
      avatarColor: "from-[#55A6AC] to-[#3020A5]",
      initials: "KS",
      linkedin: "https://www.linkedin.com/company/infinitysggscc",
      verified: true
    },
    {
      name: "Advay Nagpal",
      role: "Vice-President",
      tenure: "2025–26 Session",
      badge: "Historical Executive",
      bio: "Directed internal operations, technical domain roadmaps, and student competition logistics.",
      avatarColor: "from-[#6845F5] to-[#E32655]",
      initials: "AN",
      linkedin: "https://www.linkedin.com/company/infinitysggscc",
      verified: true
    },
    {
      name: "Harshmohan Singh",
      role: "General Secretary",
      tenure: "2025–26 Session",
      badge: "Historical Executive",
      bio: "Managed executive administration, institutional relations, and society documentation.",
      avatarColor: "from-[#3020A5] to-[#55A6AC]",
      initials: "HS",
      linkedin: "https://www.linkedin.com/company/infinitysggscc",
      verified: true
    },
    {
      name: "Harnoor Kaur",
      role: "Joint Secretary",
      tenure: "2025–26 Session",
      badge: "Historical Executive",
      bio: "Coordinated cross-departmental communications, event scheduling, and member engagements.",
      avatarColor: "from-[#E32655] to-[#6845F5]",
      initials: "HK",
      linkedin: "https://www.linkedin.com/company/infinitysggscc",
      verified: true
    },
    {
      name: "Prabhleen Kaur",
      role: "Advisory",
      tenure: "2025–26 Session",
      badge: "Advisory Council",
      bio: "Provided strategic guidance, society governance counsel, and mentorship to incoming leads.",
      avatarColor: "from-[#55A6AC] to-[#E32655]",
      initials: "PK",
      linkedin: "https://www.linkedin.com/company/infinitysggscc",
      verified: true
    }
  ],
  upcomingSessionNotice: {
    title: "Executive Council 2026–27",
    subtitle: "Upcoming Session Announcements & Recruitment",
    description:
      "Applications, interview rounds, and appointment notices for the new 2026–27 session executive council and departmental heads will be posted across official channels following college guidelines.",
    status: "Upcoming Announcement"
  }
};

export const faqs = [
  {
    q: "Who is eligible to join INFINITY?",
    a: "All enrolled students of Sri Guru Gobind Singh College of Commerce (SGGSCC), University of Delhi across all years and degree programs are welcome to apply during official recruitment drives and attend open workshops."
  },
  {
    q: "Do I need prior coding experience to be a part of the society?",
    a: "Not at all! INFINITY is built on curiosity and growth. While we have specialized tracks for competitive coding, we also have domains dedicated to UI/UX design, cybersecurity awareness, gaming, event management, and beginner learning bootcamps."
  },
  {
    q: "How frequently does INFINITY organize events?",
    a: "We host regular monthly workshops, coding drills, and gaming scrims, along with our flagship annual events including Cybersecurity Awareness Week, Gaming Tournaments, and Inter-College Hackathons."
  },
  {
    q: "Where can I follow official society updates?",
    a: "Official announcements, registrations, and event highlights are published directly to our LinkedIn page (linkedin.com/company/infinitysggscc) and Instagram handle (@infinity.sggscc)."
  }
];
