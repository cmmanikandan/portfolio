export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  workflowSteps: { step: string; title: string; desc: string }[];
  features: string[];
  technologies: string[];
  category: string;
  highlight: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  myRole: string;
  challenges: string;
  learnings: string[];
  outcome: string;
  accentColor: string;
  mockupType: "marketplace" | "finance" | "service" | "business" | "productivity";
}

export const featuredProjects: Project[] = [
  {
    id: "qubink",
    number: "01",
    title: "Qubink",
    subtitle: "Smart Campus Printing Marketplace",
    description: "Qubink is a smart campus printing platform designed to simplify document printing for college students. It connects students with campus printing vendors and provides a streamlined workflow from document upload to automated QR pickup.",
    problem: "Campus students faced long physical queues at printing shops before classes, disorganized document queues during peak project submission hours, and total lack of transparency regarding order status and pickup readiness.",
    solution: "Architected an end-to-end digital marketplace that enables students to upload files, configure print specifications (B&W/Color, single/double sided, binding), track live FIFO order queues, pay digitally, and scan QR codes for rapid pickup from automated vendor racks.",
    workflowSteps: [
      { step: "01", title: "Upload & Configure", desc: "Student uploads PDF/DOCX and selects custom page ranges, color mode, and binding." },
      { step: "02", title: "Digital Payment", desc: "Instant transparent calculation and secure payment processing via Razorpay." },
      { step: "03", title: "FIFO Order Queue", desc: "Print shop receives real-time queued jobs with prioritized FIFO processing." },
      { step: "04", title: "Smart Rack Storage", desc: "Completed documents are placed into numbered physical cubby racks." },
      { step: "05", title: "QR Code Pickup", desc: "Student receives pickup notification with unique QR verification for zero-wait handoff." }
    ],
    features: [
      "Multi-format Document Upload (PDF, Word)",
      "Granular Print Customization (Color, GSM, Binding)",
      "Real-time Live Order Status Tracking",
      "Automated FIFO Vendor Print Queue",
      "Dynamic QR Code Pickup Verification",
      "Physical Rack & Slot Assignment",
      "Integrated Digital Payment Gateway",
      "Offline-Capable Mobile-First PWA"
    ],
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Firebase", "Supabase", "Cloudinary", "Razorpay"],
    category: "Full Stack Web Application",
    highlight: "Making campus printing simpler.",
    githubUrl: "https://github.com/cmmanikandan/qubink",
    liveDemoUrl: "https://qubink-demo.vercel.app",
    myRole: "Lead Full Stack Developer & System Designer — architected the document processing pipeline, payment gateway integration, and real-time order queue data structures.",
    challenges: "Handling large multi-file uploads cleanly with Cloudinary without browser freezing, and building a real-time FIFO order queue synchronized between vendor and student dashboards.",
    learnings: [
      "Designed resilient asynchronous state syncing for live order statuses.",
      "Integrated secure webhook-verified digital payments with Razorpay.",
      "Optimized document upload pipelines with client-side compression."
    ],
    outcome: "Built a functional production-grade application that proves how campus print shop operations can be digitized and wait times reduced by over 70%.",
    accentColor: "from-indigo-500/20 to-violet-500/10",
    mockupType: "marketplace"
  },
  {
    id: "finova",
    number: "02",
    title: "FINOVA",
    subtitle: "Personal Finance & Expense Tracker",
    description: "FINOVA is a personal finance and expense tracking application designed to help students and early professionals understand their spending, manage monthly budgets, and build disciplined financial habits.",
    problem: "Young professionals and college students frequently lose track of micro-expenses, fail to stick to monthly budgets, and find traditional accounting software tedious and uninspiring.",
    solution: "Created an intuitive, gamified finance tracker with daily expense logs, budget velocity indicators, category breakdown analytics, streak rewards, and customizable push reminders.",
    workflowSteps: [
      { step: "01", title: "Fast Expense Logging", desc: "Quick 2-click expense input with category tagging and receipt attachment." },
      { step: "02", title: "Budget Velocity", desc: "Real-time calculation showing daily burn rate vs monthly allowance." },
      { step: "03", title: "Visual Analytics", desc: "Interactive charts breaking down spend distribution across categories." },
      { step: "04", title: "Streak & XP System", desc: "Gamified reward badges for consistent daily logging and staying under budget." },
      { step: "05", title: "Cloud & PWA Sync", desc: "Instant offline local caching with seamless cloud sync to Supabase." }
    ],
    features: [
      "Instant 2-Click Expense Logging",
      "Dynamic Monthly & Category Budgets",
      "Daily Planner & Expense Calendar",
      "Interactive Financial Breakdown Charts",
      "Gamified Streaks, XP & Achievement Badges",
      "Customizable Budget Alert Reminders",
      "Full Offline Support via Service Workers",
      "PWA Installation on iOS and Android"
    ],
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "Firebase", "PWA"],
    category: "Finance & Productivity Web Application",
    highlight: "Track. Plan. Improve.",
    githubUrl: "https://github.com/cmmanikandan/finova",
    liveDemoUrl: "https://finova-app.vercel.app",
    myRole: "Full Stack Developer — implemented client-side state persistence, Supabase schema design, offline caching, and responsive UI components.",
    challenges: "Ensuring zero latency when adding expenses offline via PWA Service Workers and merging conflict-free state upon reconnecting to network.",
    learnings: [
      "Mastered offline-first PWA caching strategies using Service Workers.",
      "Implemented relational queries and Row Level Security in Supabase.",
      "Engineered gamification mechanics that increase daily user engagement."
    ],
    outcome: "Delivered a lightweight, highly responsive financial tracking application with smooth micro-animations and zero-latency offline performance.",
    accentColor: "from-emerald-500/20 to-teal-500/10",
    mockupType: "finance"
  },
  {
    id: "servicehub",
    number: "03",
    title: "ServiceHub",
    subtitle: "Local Services Marketplace",
    description: "ServiceHub is a marketplace platform connecting customers with verified local service technicians such as electricians, plumbers, appliance repair specialists, and cleaning providers.",
    problem: "Finding trustworthy local service technicians in tier-2 and tier-3 towns often relies on informal word-of-mouth with zero upfront pricing transparency or verified customer reviews.",
    solution: "Built a centralized service discovery platform where customers can browse service categories, compare verified provider ratings, schedule convenient time slots, and verify jobs via OTP.",
    workflowSteps: [
      { step: "01", title: "Browse Categories", desc: "Customer selects required service (Electrical, Plumbing, Appliance, Cleaning)." },
      { step: "02", title: "Compare Providers", desc: "View nearby technician profiles, verified ratings, pricing, and distance." },
      { step: "03", title: "Book Appointment", desc: "Select date/time slot and submit request with problem description." },
      { step: "04", title: "OTP Job Start", desc: "Technician arrives and verifies identity with customer via secure one-time passcode." },
      { step: "05", title: "Rating & Payment", desc: "Complete digital payment and submit transparent public review." }
    ],
    features: [
      "Categorized Service Discovery",
      "Verified Provider Public Profiles",
      "Flexible Date & Time Slot Booking",
      "Secure OTP Job Verification",
      "Real-Time Booking Status Updates",
      "Customer Review & Rating System",
      "Provider Management Dashboard",
      "Modular REST API Backend"
    ],
    technologies: ["React", "JavaScript", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    category: "Marketplace Platform",
    highlight: "Local services, simplified.",
    githubUrl: "https://github.com/cmmanikandan/servicehub",
    liveDemoUrl: "https://servicehub-marketplace.vercel.app",
    myRole: "Full Stack Developer — architected backend REST APIs with Node/Express, structured PostgreSQL schemas, and developed client booking flows.",
    challenges: "Designing multi-role authorization (Customer vs Service Provider) and managing asynchronous state transitions during booking lifecycle.",
    learnings: [
      "Designed relational database schemas with foreign keys and indexes.",
      "Implemented JWT authentication and role-based endpoint authorization.",
      "Built resilient error handling and request validation middleware in Express."
    ],
    outcome: "Constructed an end-to-end service booking platform with robust backend routes, scalable SQL relations, and clean user experience.",
    accentColor: "from-blue-500/20 to-indigo-500/10",
    mockupType: "service"
  },
  {
    id: "manikandan-lathe",
    number: "04",
    title: "Manikandan Lathe",
    subtitle: "Digital Presence & Product Showcase",
    description: "A digital business website developed to establish an online presence for an industrial lathe and welding workshop, featuring bilingual content, product showcases, and direct customer inquiry channels.",
    problem: "Traditional manufacturing and lathe workshops rely almost exclusively on offline walk-in traffic, leaving industrial clients unable to view machinery specs or product samples online.",
    solution: "Developed a modern, bilingual (Tamil & English) digital catalog with status updates, detailed product specifications, customer verification, and direct WhatsApp/call inquiry triggers.",
    workflowSteps: [
      { step: "01", title: "Bilingual Landing", desc: "Visitor explores company capabilities in Tamil or English with instant toggle." },
      { step: "02", title: "Product Showcase", desc: "Browse high-resolution lathe components, fabricated metal parts, and tools." },
      { step: "03", title: "Specification Sheet", desc: "View detailed material dimensions, tolerances, and pricing tiers." },
      { step: "04", title: "Direct WhatsApp CTA", desc: "1-click pre-filled WhatsApp message connects customer directly to owner." },
      { step: "05", title: "Quote & Delivery", desc: "Owner receives formatted inquiry and coordinates production timeline." }
    ],
    features: [
      "Bilingual Content Switcher (Tamil & English)",
      "Categorized Industrial Product Catalog",
      "High-Resolution Multi-Angle Photo Gallery",
      "Live Workshop Announcements & Updates",
      "1-Click WhatsApp Lead Generation",
      "Direct Call & Location Mapping",
      "Cloudinary Optimized Image Delivery",
      "Lightweight Zero-Lag Static Architecture"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express", "Supabase", "Cloudinary"],
    category: "Business Web Platform",
    highlight: "Bringing a local business online.",
    githubUrl: "https://github.com/cmmanikandan/manikandan-lathe",
    liveDemoUrl: "https://manikandan-lathe.vercel.app",
    myRole: "Frontend Developer & Project Lead — collaborated directly with business stakeholders to photograph inventory, write bilingual copy, and deploy the live site.",
    challenges: "Implementing instant multi-language text swapping without bloated libraries or SEO performance degradation.",
    learnings: [
      "Gained real-world client collaboration and requirement-gathering experience.",
      "Optimized media asset loading using Cloudinary responsive image delivery.",
      "Created conversion-focused CTAs that drive direct business leads via WhatsApp."
    ],
    outcome: "Successfully transitioned an offline industrial workshop into a modern digital brand with recurring customer inquiries received directly through the website.",
    accentColor: "from-amber-500/20 to-orange-500/10",
    mockupType: "business"
  },
  {
    id: "placementos",
    number: "05",
    title: "PlacementOS",
    subtitle: "Personal Placement Preparation System",
    description: "PlacementOS is a specialized preparation operating system built to structure and track my daily coding practice, core computer science revision, and algorithmic milestones for software placement drives.",
    problem: "Managing complex placement preparation across DSA, Core Java, Spring Boot, SQL, and Web projects without a structured system leads to inconsistent study and lost tracking.",
    solution: "Designed a dedicated preparation dashboard featuring Pomodoro focus blocks, spaced repetition study reminders, automated task rescheduling, and topic mastery logs.",
    workflowSteps: [
      { step: "01", title: "Daily Target Setting", desc: "Set daily DSA problem quotas and core CS revision milestones." },
      { step: "02", title: "Focus Timer Session", desc: "25-minute Pomodoro study block with background audio and distraction block." },
      { step: "03", title: "Solution Note Logging", desc: "Document time/space complexities and key pattern takeaways." },
      { step: "04", title: "Spaced Repetition", desc: "Automated schedule prompts revision at 1, 3, 7, and 14 day intervals." },
      { step: "05", title: "Streak & Mastery Log", desc: "Track consecutive day streaks, topic coverage percentages, and readiness." }
    ],
    features: [
      "Daily Preparation Task Planner",
      "Built-in Pomodoro Focus Timer",
      "Automated Spaced Repetition Scheduling",
      "Technical Notes & Code Snippet Library",
      "Topic Mastery & Progress Analytics",
      "Study Streak & Gamified XP Tracking",
      "Persistent Local Storage State Sync",
      "Keyboard Shortcut Productivity Controls"
    ],
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    category: "Productivity System",
    highlight: "Preparing with purpose.",
    githubUrl: "https://github.com/cmmanikandan/placement-os",
    liveDemoUrl: "https://placement-os.vercel.app",
    myRole: "Creator & Lead Developer — designed and built this tool for personal placement prep, actively using it daily.",
    challenges: "Building robust persistent local storage sync with automatic dynamic date rolling and streak calculation logic.",
    learnings: [
      "Engineered client-side time management algorithms and interval loops.",
      "Implemented state persistence with schema migrations in localStorage.",
      "Created keyboard-accessible user interfaces optimized for rapid task entry."
    ],
    outcome: "Built an indispensable daily productivity application that maintains study discipline and tracks placement milestones.",
    accentColor: "from-purple-500/20 to-pink-500/10",
    mockupType: "productivity"
  }
];

export interface MinorProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  githubUrl?: string;
}

export const minorProjects: MinorProject[] = [
  {
    id: "helpdesk",
    title: "HelpDesk Management System",
    description: "Java-based ticket management system concept for tracking IT support requests, assigning priorities, and managing user inquiries.",
    technologies: ["Java", "OOP", "MySQL", "JDBC"],
    category: "Java Desktop / Backend",
    githubUrl: "https://github.com/cmmanikandan/helpdesk-system"
  },
  {
    id: "attendance-tracker",
    title: "Employee Attendance Tracker",
    description: "Python application for managing daily employee check-ins, leave requests, shift assignments, and automated monthly attendance reports.",
    technologies: ["Python", "SQLite", "Tkinter"],
    category: "Python Application",
    githubUrl: "https://github.com/cmmanikandan/attendance-tracker"
  },
  {
    id: "resume-generator",
    title: "Automatic Resume Generator",
    description: "CLI utility written in Python to parse structured JSON/YAML candidate data into clean, formatted ATS-friendly PDF documents.",
    technologies: ["Python", "Fpdf", "JSON"],
    category: "CLI / Tool",
    githubUrl: "https://github.com/cmmanikandan/resume-generator"
  },
  {
    id: "bus-tracking",
    title: "Smart Bus Live Tracking",
    description: "Concept web interface for real-time campus shuttle tracking, estimated time of arrival (ETA), and route mapping.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Leaflet JS"],
    category: "Web Prototype",
    githubUrl: "https://github.com/cmmanikandan/smart-bus-tracking"
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Web Platform",
    description: "Full stack e-commerce prototype featuring dynamic product filtering, cart state management, and mock checkout workflows.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    category: "Full Stack Prototype",
    githubUrl: "https://github.com/cmmanikandan/ecommerce-platform"
  }
];
