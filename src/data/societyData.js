/**
 * INFINITY – The Tech Society of SGGSCC, University of Delhi
 * Centralized, structured, and authentic data store.
 */

export const societyInfo = {
  name: "INFINITY",
  fullName: "INFINITY – The Tech Society",
  tagline: "The Tech Society",
  college: "Sri Guru Gobind Singh College of Commerce",
  collegeShort: "SGGSCC",
  university: "University of Delhi",
  location: "Opposite TV Tower, Pitampura, Delhi, 110034",
  officialDescription:
    "Infinity is the tech society of SGGSCC, fostering innovation, creativity, and technological excellence among students. It organizes engaging events like gaming tournaments, cybersecurity weeks, and tech-driven competitions, aiming to create a vibrant community that explores the limitless potential of technology.",
  shortDescription:
    "Fostering innovation, creativity, and technological excellence among students at SGGSCC, University of Delhi.",
  headline: "Where Curiosity Meets Innovation.",
  subheadline:
    "Exploring the limitless potential of technology through hands-on hackathons, cybersecurity challenges, gaming tournaments, AI research, web engineering, and collaborative problem-solving.",
  focusAreas: [
    "Artificial Intelligence",
    "Web Development",
    "Competitive Coding",
    "Cybersecurity",
    "Gaming & Esports",
    "Hackathons",
    "Innovation & Design"
  ],
  socials: {
    linkedin: "https://www.linkedin.com/company/infinitysggscc",
    instagram: "https://www.instagram.com/infinity.sggscc/",
    collegeWebsite: "https://www.sggscc.ac.in/",
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
      "Workshops on emerging tech trends & AI",
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
      "UI/UX design critiques and workshops",
      "Game development and 3D modeling",
      "Creative coding & interactive media"
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
      "Inter-college technical alliances"
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
      "Industry-standard software practices",
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
    badge: "Focus Area",
    shortDesc: "Exploring machine learning, generative models, neural architectures, and intelligent systems.",
    fullDesc:
      "Students explore practical applications of artificial intelligence, computer vision, natural language processing, and prompt engineering through collaborative experiments and research discussions.",
    topics: ["Machine Learning Fundamentals", "Deep Learning & NLP", "Generative AI & LLMs", "Edge AI & Prototyping"],
    color: "#55A6AC"
  },
  {
    id: "web-software-engineering",
    title: "Web Development & Software",
    category: "Full-Stack Development",
    icon: "Globe",
    badge: "Active Domain",
    shortDesc: "Architecting modern web apps, scalable APIs, responsive interfaces, and developer-friendly platforms.",
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
    title: "Gaming & Esports",
    category: "Competitive Gaming",
    icon: "Gamepad2",
    badge: "Community Favorite",
    shortDesc: "Hosting esports leagues, game design discussions, strategic tournaments, and community gaming sessions.",
    fullDesc:
      "Bringing together competitive gamers and aspiring game developers. We organize LAN & online tournaments, analyze game engines, and celebrate gaming culture.",
    topics: ["Competitive Esports Leagues", "Game Engine Exploration (Unity/Godot)", "Strategy & Team Dynamics", "Tournament Operations"],
    color: "#55A6AC"
  },
  {
    id: "competitions-hackathons",
    title: "Hackathons & Coding Competitions",
    category: "Hackathons & Challenges",
    icon: "Trophy",
    badge: "Flagship Track",
    shortDesc: "Testing algorithmic grit, problem-solving agility, and rapid product development under pressure.",
    fullDesc:
      "Intense coding sprints, hackathons, and web-design competitions challenging students to solve real-world problems in timed environments.",
    topics: ["24h-36h Coding Hackathons", "Algorithm & Speed Coding", "Product Design Sprints", "Pitching to Tech Panels"],
    color: "#E32655"
  },
  {
    id: "tech-learning-collaboration",
    title: "Coding Learning & Peer Mentorship",
    category: "Community & Peer Learning",
    icon: "Code2",
    badge: "Open To All",
    shortDesc: "Hands-on bootcamps, peer-led coding sessions, open-source workshops, and student mentorship.",
    fullDesc:
      "A supportive, inclusive environment where beginners learn fundamentals and advanced developers sharpen their mentorship and public speaking capabilities.",
    topics: ["Beginner-to-Intermediate Bootcamps", "Open Source Contribution Drives", "Resume & Portfolio Reviews", "Tech Talks & Study Jams"],
    color: "#6845F5"
  }
];

export const eventsData = [
  {
    id: "infinity-gaming-showdown-2027",
    title: "INFINITY Gaming Tournament",
    category: "Gaming & Esports",
    status: "Upcoming", // 'Upcoming' | 'Ongoing' | 'Completed'
    statusBadge: "Upcoming Tournament",
    isHackathon: false,
    dateTime: "Annual 2026–27 Session • Dates to be announced",
    registrationDeadline: "To be announced alongside official bracket release",
    venue: "SGGSCC Campus & Online Arena",
    duration: "2-Day Championship",
    mode: "Hybrid / Campus LAN & Online",
    image: "/assets/placeholders/event-gaming.svg",
    shortDesc: "High-adrenaline gaming tournament bringing together SGGSCC's top esports players in competitive team matches.",
    longDesc: "Official gaming showdown organized by INFINITY to celebrate strategic esports, multiplayer teamwork, and digital sportsmanship. Features knockout rounds, custom lobby shoutcasting, and community viewership.",
    eligibility: "Open to all enrolled college students. Valid college ID required during check-in.",
    rules: [
      "Fair play and anti-cheat policies are strictly enforced.",
      "Team rosters must be finalized prior to bracket announcement.",
      "Tournament format: Best-of-3 knockout matches leading to the Grand Finale.",
      "Official title-specific rulebooks provided upon registration."
    ],
    registrationUrl: null, // Null indicates details to be announced
    isVerified: true
  },
  {
    id: "cyber-security-week-2027",
    title: "Cybersecurity Awareness Week",
    category: "Cybersecurity",
    status: "Upcoming",
    statusBadge: "Upcoming Initiative",
    isHackathon: false,
    dateTime: "Upcoming 2026–27 Academic Session",
    registrationDeadline: "To be announced with official session schedule",
    venue: "SGGSCC Seminar Hall & Virtual Labs",
    duration: "Week-long Series",
    mode: "Hybrid / Campus & Online",
    image: "/assets/placeholders/event-cybersecurity.svg",
    shortDesc: "A week-long immersion into ethical hacking, digital hygiene, system forensics, and student security challenges.",
    longDesc: "As highlighted in the official society overview, Cybersecurity Week is one of INFINITY's signature engagements. The event equips students across SGGSCC with crucial awareness on threat mitigation, authentication security, social engineering defenses, and introductory CTF challenges.",
    eligibility: "Open to all SGGSCC students and University of Delhi tech enthusiasts. No prior cybersecurity expertise required.",
    rules: [
      "All demonstrations and CTF challenges are held in sandboxed learning environments.",
      "Attendees must follow the college code of conduct and ethical computing standards.",
      "Participation certificates awarded upon completion of workshop tracks."
    ],
    registrationUrl: null,
    isVerified: true
  },
  {
    id: "tech-driven-hackathon-2027",
    title: "INFINITY Tech Innovation Hackathon",
    category: "Hackathons",
    status: "Upcoming",
    statusBadge: "Active Hackathon Track",
    isHackathon: true,
    dateTime: "Upcoming 2026–27 Session • Schedule to be announced",
    registrationDeadline: "To be announced with problem statement reveal",
    venue: "SGGSCC Campus Labs & Virtual Hub",
    duration: "36-Hour Hackathon",
    mode: "Hybrid / SGGSCC & Online",
    image: "/assets/placeholders/event-hackathon.svg",
    shortDesc: "Collaborative tech hackathon challenging participants to engineer creative software solutions for real-world issues.",
    longDesc: "A core pillar of INFINITY's vision: an engaging tech competition where multidisciplinary student squads ideate, prototype, and pitch functional software, web platforms, or hardware solutions.",
    eligibility: "Undergraduate student teams of 2 to 4 members with active college IDs.",
    rules: [
      "All code and prototypes must be developed during the hackathon timeframe.",
      "Projects must be submitted with a public Git repository and a demonstrable working prototype.",
      "Pre-built projects and plagiarism will result in immediate disqualification.",
      "Judging criteria: Innovation, Technical Rigor, Usability, and Pitch Presentation."
    ],
    registrationUrl: null,
    isVerified: true
  },
  {
    id: "web-craft-workshop-archival",
    title: "Web Engineering & Modern Frameworks Bootcamp",
    category: "Workshops",
    status: "Completed",
    statusBadge: "Completed Workshop",
    isHackathon: false,
    dateTime: "Previous Academic Session",
    registrationDeadline: "Concluded",
    venue: "Computer Lab 2, SGGSCC",
    duration: "3-Hour Hands-on Session",
    mode: "In-Person",
    image: "/assets/placeholders/event-webdev.svg",
    shortDesc: "Hands-on bootcamp on modern component architectures, state management, and deploying applications.",
    longDesc: "An educational bootcamp track focusing on reactive component architectures, CSS grid/flexbox mastery, state synchronization, and deploying projects directly to cloud hosting providers.",
    eligibility: "Attended by SGGSCC students across diverse degree programs.",
    rules: [
      "Concluded academic session workshop series.",
      "Resources and code repositories archived for community reference."
    ],
    registrationUrl: null,
    isVerified: true
  }
];

/**
 * Gallery Items:
 * Kept clean and modular. When genuine event photographs become available,
 * simply populate this array with { id, title, category, image, caption, date }.
 * When empty, the Gallery component automatically presents an elegant empty state.
 */
export const galleryItems = [];

/**
 * Team Data: Authentic 2026–27 Session Leadership
 * Extracted directly from the official photographs supplied in public/assets/team/
 */
export const teamData = {
  currentSession: "2026–27 Academic Session",
  sessionBadge: "Executive Council & Departmental Leads 2026–27",
  officeBearers: [
    {
      id: "parmeet-singh",
      name: "Parmeet Singh",
      designation: "President",
      roleCategory: "Office Bearer 26 - 27",
      tier: "senior",
      department: "Executive Leadership",
      image: "/assets/team/WhatsApp Image 2026-11-11 at 13.34.29.jpeg",
      verified: true
    },
    {
      id: "divjot-singh",
      name: "Divjot Singh",
      designation: "Vice President",
      roleCategory: "Office Bearer 26 - 27",
      tier: "senior",
      department: "Executive Leadership",
      image: "/assets/team/WhatsApp Image 2026-11-11 at 13.34.28 (2).jpeg",
      verified: true
    },
    {
      id: "braham-bir-s",
      name: "Braham Bir S.",
      designation: "General Secretary",
      roleCategory: "Office Bearer 26 - 27",
      tier: "senior",
      department: "Administration",
      image: "/assets/team/WhatsApp Image 2026-11-11 at 13.34.28 (1).jpeg",
      verified: true
    },
    {
      id: "krisha-gupta",
      name: "Krisha Gupta",
      designation: "Joint Secretary",
      roleCategory: "Office Bearer 26 - 27",
      tier: "senior",
      department: "Coordination",
      image: "/assets/team/WhatsApp Image 2026-11-11 at 13.34.28.jpeg",
      verified: true
    },
    {
      id: "keshav-gupta",
      name: "Keshav Gupta",
      designation: "Advisory",
      roleCategory: "Office Bearer 26 - 27",
      tier: "senior",
      department: "Advisory Council",
      image: "/assets/team/WhatsApp Image 2026-11-11 at 13.34.27 (1).jpeg",
      verified: true
    }
  ],
  departmentalHeads: [
    {
      id: "parth-midha",
      name: "Parth Midha",
      designation: "Tech Head",
      roleCategory: "Departmental Head 26 - 27",
      tier: "head",
      department: "Technical",
      image: "/assets/team/WhatsApp Image 2026-11-11 at 13.34.27.jpeg",
      verified: true
    },
    {
      id: "prabhasees-s",
      name: "Prabhasees. S",
      designation: "Tech Head",
      roleCategory: "Departmental Head 26 - 27",
      tier: "head",
      department: "Technical",
      image: "/assets/team/WhatsApp Image 2026-11-11 at 13.34.26 (2).jpeg",
      verified: true
    },
    {
      id: "hargun-kaur",
      name: "Hargun Kaur",
      designation: "Marketing Head",
      roleCategory: "Departmental Head 26 - 27",
      tier: "head",
      department: "Marketing",
      image: "/assets/team/WhatsApp Image 2026-11-11 at 13.34.26 (1).jpeg",
      verified: true
    },
    {
      id: "yuvraj",
      name: "Yuvraj",
      designation: "Marketing Head",
      roleCategory: "Departmental Head 26 - 27",
      tier: "head",
      department: "Marketing",
      image: "/assets/team/WhatsApp Image 2026-11-11 at 13.34.26.jpeg",
      verified: true
    },
    {
      id: "swayam",
      name: "Swayam",
      designation: "Sponsor & PR Head",
      roleCategory: "Departmental Head 26 - 27",
      tier: "head",
      department: "Sponsor & PR",
      image: "/assets/team/WhatsApp Image 2026-11-11 at 13.34.25.jpeg",
      verified: true
    },
    {
      id: "namanpreet-k",
      name: "Namanpreet. K",
      designation: "Sponsor & PR Head",
      roleCategory: "Departmental Head 26 - 27",
      tier: "head",
      department: "Sponsor & PR",
      image: "/assets/team/WhatsApp Image 2026-11-11 at 13.34.23.jpeg",
      verified: true
    },
    {
      id: "dashmeet-kaur",
      name: "Dashmeet Kaur",
      designation: "Logistics Head",
      roleCategory: "Departmental Head 26 - 27",
      tier: "head",
      department: "Logistics",
      image: "/assets/team/WhatsApp Image 2026-11-11 at 13.34.24.jpeg",
      verified: true
    }
  ],
  seniorExecutives: [
    {
      id: "yajat-kohli",
      name: "Yajat Kohli",
      designation: "Sr. Executive Member",
      roleCategory: "Executives 26 - 27",
      tier: "executive",
      department: "Executive Committee",
      image: "/assets/team/WhatsApp Image 2026-11-11 at 13.34.25 (2).jpeg",
      verified: true
    },
    {
      id: "jasreet-kaur",
      name: "Jasreet Kaur",
      designation: "Sr. Executive Member",
      roleCategory: "Executives 26 - 27",
      tier: "executive",
      department: "Executive Committee",
      image: "/assets/team/WhatsApp Image 2026-11-11 at 13.34.25 (1).jpeg",
      verified: true
    }
  ]
};

// Flattened array helper for easy filtering
export const allTeamMembers = [
  ...teamData.officeBearers,
  ...teamData.departmentalHeads,
  ...teamData.seniorExecutives,
];

export const faqs = [
  {
    q: "Who is eligible to join INFINITY?",
    a: "All enrolled students of Sri Guru Gobind Singh College of Commerce (SGGSCC), University of Delhi across all years and degree programs are welcome to apply during official recruitment drives and attend open workshops."
  },
  {
    q: "Do I need prior coding experience to join INFINITY?",
    a: "Not at all! INFINITY is built on curiosity and growth. While we have specialized tracks for competitive coding and full-stack development, we also have domains dedicated to UI/UX design, marketing, logistics, cybersecurity awareness, and beginner study jams."
  },
  {
    q: "What technical domains does INFINITY focus on?",
    a: "Our core areas of interest include Artificial Intelligence, Web Development, Competitive Coding, Cybersecurity, Gaming & Esports, Hackathons, and Technical Workshops."
  },
  {
    q: "How frequently does INFINITY organize events?",
    a: "We host regular workshops, coding drills, and gaming scrims throughout the academic semester, along with our flagship annual events including Cybersecurity Awareness Week, Gaming Tournaments, and Inter-College Hackathons."
  },
  {
    q: "Where can I follow official society updates?",
    a: "Official announcements, registrations, and event highlights are published directly to our LinkedIn page (linkedin.com/company/infinitysggscc) and Instagram handle (@infinity.sggscc)."
  }
];
