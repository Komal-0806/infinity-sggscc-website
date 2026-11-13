/**
 * INFINITY – The Tech Society of SGGSCC, University of Delhi
 * Centralized, structured, and authentic data store.
 * 
 * All events, activities, leadership, and institutional information are derived
 * from official SGGSCC records, verified competition listings (Unstop),
 * and official society announcements.
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
    "Exploring the limitless potential of technology through hands-on hackathons, cybersecurity initiatives, collegiate gaming, AI research, web engineering, and collaborative student learning.",
  focusAreas: [
    "Artificial Intelligence",
    "Web Development",
    "Competitive Coding",
    "Cybersecurity",
    "Gaming & Esports",
    "Hackathons & Design",
    "Hands-on Workshops"
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
      "Rapid prototyping of student software ideas",
      "Workshops on emerging tech trends and AI tools",
      "Hands-on technical problem-solving sessions"
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
      "Blending art, UI/UX design, and interactive media to build digital experiences that are visually compelling and user-centric.",
    points: [
      "Digital design, UI/UX, and visual arts challenges",
      "Design masterclasses with tools like Canva and Figma",
      "Creative campaigns and interdisciplinary tech contests"
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
      "Building an inclusive campus ecosystem where coders, designers, gamers, and tech enthusiasts mentor and build together.",
    points: [
      "Multidisciplinary hackathon squads",
      "Peer mentorship and collaborative study circles",
      "Active inter-college tech network and alliances"
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
      "Upholding high technical standards, algorithmic discipline, cybersecurity awareness, and quality execution across all initiatives.",
    points: [
      "Competitive coding and algorithmic problem-solving",
      "Cybersecurity awareness and CTF challenges",
      "Rigorous judging criteria for tech competitions"
    ]
  }
];

/**
 * Areas of Interest & Exploration:
 * Accurately presented as technical focus areas of INFINITY
 * (without claiming official separate administrative college departments).
 */
export const activitiesData = [
  {
    id: "ai-emerging-tech",
    title: "Artificial Intelligence & ML",
    category: "Area of Interest",
    icon: "Cpu",
    shortDesc: "Exploring practical applications of machine learning, generative models, and intelligent workflows.",
    fullDesc:
      "Students explore practical applications of artificial intelligence, prompt engineering, generative models, and machine learning concepts through collaborative projects and research discussions.",
    topics: ["Machine Learning Fundamentals", "Generative AI & LLM Tools", "Prompt Engineering Workflows", "AI Application Prototyping"],
    color: "#55A6AC"
  },
  {
    id: "web-software-engineering",
    title: "Web & Software Engineering",
    category: "Area of Interest",
    icon: "Globe",
    shortDesc: "Building modern responsive web applications, frontend architectures, and developer tooling.",
    fullDesc:
      "From responsive frontend frameworks to API integration and version control, members practice modern web standards, component architecture, and clean coding principles.",
    topics: ["Modern React & Frontend Stack", "Component Architecture & Styling", "REST APIs & Data Handling", "Git, GitHub & Version Control"],
    color: "#6845F5"
  },
  {
    id: "cybersecurity-awareness",
    title: "Cybersecurity & Digital Safety",
    category: "Area of Interest",
    icon: "ShieldAlert",
    shortDesc: "Promoting cyber defense, digital privacy vigilance, phishing awareness, and introductory CTF challenges.",
    fullDesc:
      "Highlighting digital hygiene, network security fundamentals, threat analysis, and hosting engaging student competitions such as Data Defender, Quiz Quiver, and Cyber Canvas.",
    topics: ["Cyber Hygiene & Threat Prevention", "Data Analysis of Cybercrime Trends", "Introductory CTF Security Quizzes", "Phishing Awareness & Digital Privacy"],
    color: "#E32655"
  },
  {
    id: "gaming-esports",
    title: "Gaming & Esports",
    category: "Area of Interest",
    icon: "Gamepad2",
    shortDesc: "Organizing collegiate esports leagues, strategy tournaments, and community gaming showdowns.",
    fullDesc:
      "Bringing together competitive campus gamers for organized tournaments like BGMI Showdown and The End Game, emphasizing squad tactics, communication, and digital sportsmanship.",
    topics: ["Collegiate Esports Tournaments", "Custom Room Operations & Streaming", "Squad Tactics & Communication", "Gaming Culture & Fair Play"],
    color: "#55A6AC"
  },
  {
    id: "competitions-hackathons",
    title: "Hackathons & Tech Competitions",
    category: "Area of Interest",
    icon: "Trophy",
    shortDesc: "Organizing TechTonics and collaborative hackathons testing rapid ideation and prototyping under pressure.",
    fullDesc:
      "Organizing signature hackathons like Cognition and design challenges where student teams solve practical problems, engineer working prototypes, and present to evaluating panels.",
    topics: ["Time-bound Prototyping Sprints", "Problem Framing & Solution Architecture", "User Experience & Pitching", "Inter-College Competitions"],
    color: "#E32655"
  },
  {
    id: "tech-learning-collaboration",
    title: "Workshops & Peer Learning",
    category: "Area of Interest",
    icon: "Code2",
    shortDesc: "Conducting hands-on workshops, design masterclasses, and open peer-to-peer knowledge sharing.",
    fullDesc:
      "A welcoming space where students across SGGSCC learn creative and technical tools such as Canva, graphic design fundamentals, web basics, and tech career readiness.",
    topics: ["Design Masterclasses (Canva/Figma)", "Beginner-friendly Coding Sessions", "Technical Resume & Portfolio Tips", "Peer Mentorship Circles"],
    color: "#6845F5"
  }
];

/**
 * Authentic Events Data:
 * Researched and verified from official SGGSCC society archives, LinkedIn posts,
 * and Unstop competition portals.
 * 
 * Status: 'Completed' for confirmed concluded events.
 * Upcoming events: Kept empty when no official future dates are scheduled,
 * prompting the component to show the exact required empty state.
 */
export const eventsData = [
  {
    id: "bgmi-showdown",
    title: "BGMI Showdown 2.0 & Collegiate Esports",
    category: "Gaming & Esports",
    status: "Completed",
    statusBadge: "Esports Tournament",
    isHackathon: false,
    dateTime: "Collegiate Esports Series",
    registrationDeadline: "Concluded",
    venue: "Custom Battle Lobby & Live Discord",
    duration: "2-Day Knockout Tournament",
    mode: "Online Esports Lobby",
    image: "/assets/events/bgmi1.jpg",
    shortDesc: "High‑energy collegiate esports tournament featuring squad battle‑royales, knockout rounds, and digital sportsmanship.",
    longDesc: "INFINITY's gaming wing hosted BGMI Showdown 2.0 and 'The End Game' tournaments to provide a structured, competitive arena for SGGSCC and DU gamers. Featuring custom lobby moderation, bracket playoffs, and community engagement, the tournament celebrated team coordination and strategy.",
    eligibility: "Registered undergraduate student squads with verified IDs.",
    source: "INFINITY Instagram Archives & Tournament Results",
    sourceUrl: "https://www.instagram.com/infinity.sggscc/",
    rules: [
      "Strict anti‑emulation and anti‑cheat policies verified prior to match start.",
      "Squad leaders responsible for lobby check‑in and point table verification.",
      "Tournament format: Group qualifiers leading to Grand Finale lobbies."
    ],
    registrationUrl: null,
    isVerified: true
  },
  {
    id: "linkedin-optimization-webinar",
    title: "LinkedIn Optimization Webinar",
    category: "Webinar",
    status: "Completed",
    statusBadge: "Webinar",
    isHackathon: false,
    dateTime: "[Date not provided]",
    registrationDeadline: "Concluded",
    venue: "Online (Zoom/Teams)",
    duration: "1‑Hour Session",
    mode: "Online",
    image: "/assets/events/webinar.jpg",
    shortDesc: "Official webinar guiding members on optimizing LinkedIn profiles for professional visibility and networking.",
    longDesc: "A focused session conducted by INFINITY leadership covering profile headline crafting, skill endorsement strategy, content sharing best practices, and networking etiquette to help members boost their professional branding on LinkedIn.",
    eligibility: "Open to all INFINITY members.",
    source: "INFINITY Official Announcements",
    sourceUrl: "https://www.linkedin.com/company/infinitysggscc",
    rules: [],
    registrationUrl: null,
    isVerified: true
  }
];

/**
 * Gallery Items:
 * Kept clean and authentic. Populated only when authentic event photography
 * is staged. Empty state handles current display professionally.
 */
export const galleryItems = [];

/**
 * Team Data: Authentic 2026–27 Session Leadership
 * Extracted directly from official posters in public/assets/team/
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
    a: "All enrolled students of Sri Guru Gobind Singh College of Commerce (SGGSCC), University of Delhi across all degree programs and academic years are welcome to apply during official orientation drives and join open events."
  },
  {
    q: "Do I need prior coding experience to join INFINITY?",
    a: "No prior coding background is mandatory. INFINITY is an inclusive community fostering learning at all stages. We have domains spanning software development, UI/UX design, marketing, logistics, cybersecurity awareness, and gaming."
  },
  {
    q: "What technical domains does INFINITY focus on?",
    a: "Our core areas of interest include Artificial Intelligence, Web Development, Competitive Coding, Cybersecurity & Digital Safety, Gaming & Esports, UI/UX Design, and Student Hackathons."
  },
  {
    q: "How frequently does INFINITY organize events?",
    a: "INFINITY organizes events, workshops, technical competitions, and the annual TechTonics fest across the academic session, aligned with the college calendar. Announcements and registration schedules are published through official college circulars and our social channels."
  },
  {
    q: "Where can I follow official society updates?",
    a: "Official announcements, registrations, and event highlights are published on our official LinkedIn page (linkedin.com/company/infinitysggscc) and Instagram handle (@infinity.sggscc)."
  }
];
