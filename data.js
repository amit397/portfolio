const PORTFOLIO_DATA = {

  // ─── HERO ────────────────────────────────────────────────────────────────
  hero: {
    name: "AMIT HOWLADER",
    subtitle: "SOFTWARE ENGINEER · CS @ CITY COLLEGE OF NEW YORK",
    bio: "I'm a Computer Science graduate with experience building backend systems and APIs at companies like Microsoft and Mastercard. I love working on problems at the intersection of performance, reliability, and scale.",
    links: [
      { label: "LINKEDIN", href: "https://www.linkedin.com/in/amitHowlader", hoverClass: "hover:bg-primary-container" },
      { label: "GITHUB", href: "https://github.com/amit397", hoverClass: "hover:bg-secondary-container" },
      { label: "RESUME", href: "#", hoverClass: "hover:bg-tertiary-container" },
      { label: "EMAIL", href: "mailto:amitzxc123@gmail.com", hoverClass: "hover:bg-primary-fixed" }
    ]
  },

  // ─── TICKERS ─────────────────────────────────────────────────────────────
  // Add/edit phrases freely — the site joins them automatically with ✦
  tickers: {
    mint: [
      "99% LATENCY CUT",
      "MY CODE WORKS AND I DON'T KNOW WHY",
      "BUILT IN NYC",
      "HACKATHON WINNER (SOMETIMES)",
      "BORROW CHECKER SURVIVOR",
      "150K+ TEST TRANSACTIONS",
      "ZERO INVARIANT VIOLATIONS",
      "I HEART CCNY",
      "FULLSTACK & SYSTEMS",
      "107M GBS MOVED"
    ],
    yellow: [
      "SHIPPING FAST",
      "C# BY DAY RUST BY NIGHT",
      "3X GRPC SPEEDUP",
      "1M+ FUZZ TESTS",
      "REACT NATIVE DEPLOYED",
      "MICROSOFT INTERN",
      "MASTERCARD INTERN",
      "GIS SYSTEMS",
      "FINTECH FELLOWSHIP",
      "95% TEST COVERAGE"
    ]
  },

  // ─── EXPERIENCE ──────────────────────────────────────────────────────────
  // logoSrc: path inside logos/ folder, e.g. "logos/microsoft.png"
  // logoInitials: shown as text fallback while image is missing
  experience: [
    {
      id: "microsoft-2025",
      company: "MICROSOFT",
      role: "SOFTWARE ENGINEER INTERN",
      division: "ONELAKE, FABRIC",
      period: "MAY 2025 – AUG 2025",
      tags: ["C#", ".NET", "REDIS", "AZURE", "REST"],
      tagColors: ["#6DC8A0", "#F5E642", "#FF6B7A", "#C49FD8", "#6DC8A0"],
      bullets: [
        "DELIVERED A REST API FOR VISIBILITY INTO CUSTOMER DATA BACKUPS ACROSS 151,000+ STORAGE ACCOUNTS (107M GBS OVER 22 REGIONS) USING C# AND .NET",
        "INTEGRATED PRE-EXISTING REDIS CACHING LAYER TO HANDLE INTERNAL API RATE LIMITS — CUT QUERY LATENCY BY 99% (1.5S → 3.35MS)",
        "BUILT UNIT TESTING SUITE ACHIEVING 95% CODE COVERAGE ON ALL COMMITS"
      ],
      logoSrc: "logos/microsoft.png",
      logoInitials: "MS",
      badgeText: null,
      badgeIsReturn: false,
      link: null
    },
    {
      id: "conedison-2025",
      company: "CON EDISON",
      role: "SOFTWARE ENGINEER INTERN",
      division: "IT GIS",
      period: "JAN 2025 – MAY 2025",
      tags: ["GIS", "IT"],
      tagColors: ["#6DC8A0", "#F5E642"],
      bullets: [
        "RETURNED TO THE IT GIS TEAM FOR A SECOND ROTATION — BUILDING ON PRIOR GEOSPATIAL SYSTEMS EXPERIENCE"
      ],
      logoSrc: "logos/conedison.png",
      logoInitials: "CE",
      badgeText: "↩ RETURNED",
      badgeIsReturn: true,
      link: null
    },
    {
      id: "mastercard-2024",
      company: "MASTERCARD",
      role: "FULL-STACK SOFTWARE ENGINEER INTERN",
      division: "CHECKOUT SERVICES",
      period: "JUN 2024 – AUG 2024",
      tags: ["JAVA", "SPRING BOOT", "GRPC", "REST"],
      tagColors: ["#6DC8A0", "#F5E642", "#FF6B7A", "#C49FD8"],
      bullets: [
        "BUILT PROOF OF CONCEPT COMPARING REST VS GRPC ENDPOINTS AND JSON VS PROTOBUF PAYLOADS USING JAVA, SPRING BOOT, AND POSTMAN",
        "PROPOSED GRPC INTEGRATION FOR A LATENCY-HEAVY BACKEND SERVICE AND DEMONSTRATED 3X LOWER LATENCY IN TESTING"
      ],
      logoSrc: "logos/mastercard.png",
      logoInitials: "MC",
      badgeText: null,
      badgeIsReturn: false,
      link: null
    },
    {
      id: "bnpparibas-2024",
      company: "BNP PARIBAS",
      role: "SOFTWARE ENGINEER FELLOW",
      division: "CUNY FELLOWSHIP",
      period: "FEB 2024 – DEC 2024",
      tags: ["FINTECH", "CUNY FELLOWSHIP"],
      tagColors: ["#6DC8A0", "#F5E642"],
      bullets: [
        "CUNY PARTNERSHIP FELLOWSHIP — 11-MONTH PROGRAM FOCUSED ON BANKING TECHNOLOGY CAREER READINESS AND FINANCIAL SYSTEMS EXPOSURE, BRIDGING ACADEMIA AND INDUSTRY"
      ],
      logoSrc: "logos/bnpparibas.png",
      logoInitials: "BNP",
      badgeText: null,
      badgeIsReturn: false,
      link: null
    },
    {
      id: "capitalone-2023",
      company: "CAPITAL ONE",
      role: "FIRST GEN FOCUS FELLOW",
      division: "",
      period: "SEP 2023 – NOV 2023",
      tags: ["FELLOWSHIP", "FINTECH"],
      tagColors: ["#6DC8A0", "#F5E642"],
      bullets: [
        "NAMED FELLOWSHIP RECOGNIZING FIRST-GENERATION COLLEGE STUDENTS IN TECH — MENTORSHIP, NETWORKING, AND CAREER DEVELOPMENT WITH CAPITAL ONE ENGINEERS"
      ],
      logoSrc: "logos/capitalone.png",
      logoInitials: "C1",
      badgeText: null,
      badgeIsReturn: false,
      link: "https://www.capitalone.com/about/newsroom/first-gen-focus/"
    },
    {
      id: "conedison-2023",
      company: "CON EDISON",
      role: "INFORMATION TECHNOLOGY INTERN",
      division: "IT GIS",
      period: "AUG 2023 – JUN 2024",
      tags: ["GIS", "IT"],
      tagColors: ["#6DC8A0", "#F5E642"],
      bullets: [
        "FIRST ROTATION ON THE IT GEOSPATIAL INFORMATION SYSTEMS TEAM — SUPPORTING GEOGRAPHIC DATA INFRASTRUCTURE"
      ],
      logoSrc: "logos/conedison.png",
      logoInitials: "CE",
      badgeText: "FIRST ROTATION →",
      badgeIsReturn: false,
      link: null
    },
    {
      id: "uvii-2023",
      company: "UVII",
      role: "SOFTWARE ENGINEER INTERN",
      division: "",
      period: "JUN 2023 – AUG 2023",
      tags: ["REACT NATIVE", "EXPO", "FRONTEND"],
      tagColors: ["#6DC8A0", "#F5E642", "#FF6B7A"],
      bullets: [
        "DEVELOPED THE FRONT-END OF A VIDEO SURVEY WEB APPLICATION USING REACT NATIVE AND EXPO"
      ],
      logoSrc: "logos/uvii.png",
      logoInitials: "UV",
      badgeText: null,
      badgeIsReturn: false,
      link: null
    },
    {
      id: "barclays-2023",
      company: "BARCLAYS",
      role: "SOFTWARE ENGINEER INTERN",
      division: "RISK FINANCE & TREASURY",
      period: "JAN 2023",
      tags: ["FINTECH", "BANKING"],
      tagColors: ["#6DC8A0", "#F5E642"],
      bullets: [
        "SHORT ROTATION IN THE RISK FINANCE AND TREASURY DIVISION"
      ],
      logoSrc: "logos/barclays.png",
      logoInitials: "B",
      badgeText: null,
      badgeIsReturn: false,
      link: null
    },
    {
      id: "google-cssi-2022",
      company: "GOOGLE",
      role: "SOFTWARE ENGINEER FELLOW",
      division: "CSSI",
      period: "JUL 2022 – AUG 2022",
      tags: ["PRE-COLLEGE", "FELLOWSHIP"],
      tagColors: ["#6DC8A0", "#F5E642"],
      bullets: [
        "PRE-COLLEGE PROGRAM — GOOGLE'S COMPUTER SCIENCE SUMMER INSTITUTE. IMMERSIVE INTRO TO CS AND SOFTWARE ENGINEERING FOR UNDERREPRESENTED STUDENTS"
      ],
      logoSrc: "logos/google.png",
      logoInitials: "G",
      badgeText: null,
      badgeIsReturn: false,
      link: "https://edu.google.co.in/cs/participate/diversityoutreach.html"
    },
    {
      id: "google-codenext-2021",
      company: "GOOGLE",
      role: "CODE NEXT ENGINEER",
      division: "CODE NEXT",
      period: "MAR 2021 – MAY 2022",
      tags: ["PRE-COLLEGE", "FELLOWSHIP"],
      tagColors: ["#6DC8A0", "#F5E642"],
      bullets: [
        "PRE-COLLEGE PROGRAM — GOOGLE'S CODE NEXT INITIATIVE. LONG-TERM CS MENTORSHIP AND PROJECT-BASED LEARNING FOR UNDERREPRESENTED STUDENTS"
      ],
      logoSrc: "logos/google.png",
      logoInitials: "G",
      badgeText: null,
      badgeIsReturn: false,
      link: "https://codenext.withgoogle.com/"
    }
  ],

  // ─── PROJECTS ────────────────────────────────────────────────────────────
  // techStack: array of tech strings (rendered as dark pills)
  // category must match a filter button: "FULLSTACK" | "SYSTEMS" | "ML"
  projects: [
    {
      id: "financial-doc-translator",
      title: "FINANCIAL DOC TRANSLATOR",
      category: "FULLSTACK",
      subtitle: "2024 CAPITAL ONE SUMMIT HACKATHON — 1ST PLACE",
      description: "LED A TEAM OF 5 TO BUILD A FINANCIAL DOCUMENT TRANSLATOR IMPROVING BANKING ACCESSIBILITY FOR ESL CUSTOMERS.",
      techStack: ["NEXTJS", "NODEJS", "GOOGLE CLOUD OCR", "TRANSLATION API"],
      stats: ["24-HOUR MVP", "1ST PLACE AMONG 8 TEAMS"],
      tags: ["NEXTJS", "NODEJS", "GOOGLE CLOUD", "OCR"],
      links: [
        { label: "GITHUB", href: "https://github.com/amit397/findoctranslator" }
      ]
    },
    {
      id: "ledgerguard",
      title: "LEDGERGUARD",
      category: "SYSTEMS",
      subtitle: "CONCURRENT AI AGENT SAFETY FRAMEWORK",
      description: "RUST FINANCIAL LEDGER THAT CATCHES AND REJECTS FAULTY AI AGENT TRANSACTIONS CONCURRENTLY, ENFORCING DOUBLE-ENTRY INVARIANTS AT CONSTRUCTION TIME.",
      techStack: ["RUST", "ARC<MUTEX>", "PROPTEST", "CARGO FUZZ"],
      stats: ["150K+ PROPOSALS — ZERO VIOLATIONS", "1M+ TOTAL FUZZ TEST TRANSACTIONS"],
      tags: ["RUST", "CONCURRENCY", "TESTING", "AI SAFETY"],
      links: [
        { label: "GITHUB", href: "https://github.com/amit397/Rust-Financial-Ledger" }
      ]
    },
    {
      id: "poker-equity-visualizer",
      title: "POKER EQUITY VISUALIZER",
      category: "FULLSTACK",
      subtitle: "Simulate poker hands and understand win probability in real time.",
      description: "BUILT A POKER EQUITY CALCULATOR THAT RUNS 4,000 MONTE CARLO SIMULATIONS PER HAND TO COMPUTE REAL-TIME WIN PROBABILITY FOR UP TO 6 PLAYERS, WITH OUTS TRACKING, AN EQUITY SPARKLINE, AND SHAREABLE HAND URLS.",
      techStack: ["NEXT.JS", "TYPESCRIPT", "WEB WORKERS", "FRAMER MOTION"],
      stats: ["4,000 SIMULATIONS/HAND", "UP TO 6 PLAYERS", "100% CLIENT-SIDE"],
      tags: ["NEXT.JS", "TYPESCRIPT", "REACT", "TAILWIND"],
      links: [
        { label: "GITHUB", href: "https://github.com/amit397/pokersim" },
        { label: "LIVE", href: "https://pokersim-xi.vercel.app" }
      ]
    },
    {
      id: "polymarket-insider-tracker",
      title: "POLYMARKET INSIDER TRACKER",
      category: "FULLSTACK",
      subtitle: "Detect suspicious trading activity on Polymarket prediction markets.",
      description: "BUILT A REAL-TIME INSIDER TRADING DETECTION DASHBOARD THAT ANALYZES BLOCKCHAIN TRADE DATA USING A 6-FACTOR SUSPICION SCORING ENGINE TO FLAG WALLETS WITH ANOMALOUS PATTERNS.",
      techStack: ["NEXTJS", "REACT", "PYTHON", "FASTAPI", "SQLITE", "POLYGONSCAN API"],
      stats: ["6-FACTOR SCORING ENGINE", "4 EXTERNAL API INTEGRATIONS"],
      tags: ["NEXTJS", "FASTAPI", "PYTHON", "BLOCKCHAIN", "DATA ANALYSIS"],
      links: [
        { label: "GITHUB", href: "https://github.com/amit397/PolymarketInsiderTracker" },
        { label: "LIVE", href: "https://polymarketinsider.vercel.app/" }
      ]
    },

    {
      id: "marketlens",
      title: "MARKETLENS",
      category: "ML",
      subtitle: "2025 MICROSOFT INTERN HACKATHON — 3RD PLACE",
      description: "GENERATIVE ENGINE OPTIMIZATION TOOL TO MITIGATE AI RECOMMENDATION BIAS — BUILT IN 48 HOURS. IMPROVES PRODUCT VISIBILITY IN CHATGPT, GEMINI, AND CLAUDE RESULTS.",
      techStack: ["REACTJS", "NODEJS", "OPENAI API"],
      stats: ["40% VISIBILITY IMPROVEMENT IN DEMOS", "TEAM OF 5"],
      tags: ["REACTJS", "NODEJS", "GENAI", "SEO"],
      links: [
      ]
    }
  ],

  // ─── FOOTER ──────────────────────────────────────────────────────────────
  footer: {
    year: "",
    tagline: "",
    socials: [
      { label: "GITHUB", href: "https://github.com/amit397" },
      { label: "LINKEDIN", href: "https://www.linkedin.com/in/amitHowlader" },
      { label: "EMAIL", href: "mailto:amitzxc123@gmail.com" }
    ]
  }
};
