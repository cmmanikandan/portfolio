import qubinkImg from "../assets/qubink.jpeg";
import finovaImg from "../assets/finova.jpeg";

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
  image?: string;
  githubUrl?: string;
  isPrivateRepo?: boolean;
  liveDemoUrl?: string;
  myRole: string;
  challenges: string;
  learnings: string[];
  outcome: string;
  accentColor: string;
  mockupType: "marketplace" | "finance" | "service" | "business" | "productivity";
}

// 2 Core Featured Full-Stack Projects with Verified Live Links & Screenshots
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
    image: qubinkImg,
    isPrivateRepo: true,
    liveDemoUrl: "https://qubink.vercel.app/",
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
    image: finovaImg,
    isPrivateRepo: true,
    liveDemoUrl: "https://cmfinova.vercel.app/",
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
  }
];

export interface MinorProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  githubUrl?: string;
  liveDemoUrl?: string;
}

// Minor Projects & Utilities (Easily extensible for any future projects)
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
  }
];
