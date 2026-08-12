export interface SiteConfig {
  name: string;
  shortName: string;
  title: string;
  secondaryTitle: string;
  college: string;
  collegeShort: string;
  degree: string;
  yearOfStudy: string;
  location: string;
  bio: string;
  tagline: string;
  email: string;
  githubUsername: string;
  githubUrl: string;
  linkedinName: string;
  linkedinUrl: string;
  leetcodeUsername: string;
  leetcodeUrl: string;
  hackerrankUsername: string;
  hackerrankUrl: string;
  resumeUrl: string;
  formspreeId: string;
  statusText: string;
  careerGoals: string[];
}

export const siteConfig: SiteConfig = {
  name: "Manikandan Prabhu C.",
  shortName: "Manikandan Prabhu",
  title: "Java Full Stack Developer",
  secondaryTitle: "Java Full Stack Developer focused on building clean, responsive and practical web applications.",
  college: "M. Kumarasamy College of Engineering",
  collegeShort: "MKCE, Karur",
  degree: "B.Tech Information Technology",
  yearOfStudy: "Currently entering 3rd Year",
  location: "Tamil Nadu, India",
  bio: "I'm a B.Tech Information Technology student currently entering my 3rd year at M. Kumarasamy College of Engineering (MKCE), Karur, focused on Java, Spring Boot, SQL and full stack development. I enjoy turning real-world ideas into practical software and building projects that solve everyday problems.",
  tagline: "I turn ideas into practical software.",
  
  // Exact Placement & Professional Profiles
  email: "manikandanprabhu37@gmail.com",
  githubUsername: "cmmanikandan",
  githubUrl: "https://github.com/cmmanikandan",
  linkedinName: "Manikandan Prabhu C.",
  linkedinUrl: "https://www.linkedin.com/in/manikandan-prabhu-66b559371/",
  leetcodeUsername: "cmmanikandan",
  leetcodeUrl: "https://leetcode.com/u/cmmanikandan/",
  hackerrankUsername: "manikandanprabh4",
  hackerrankUrl: "https://www.hackerrank.com/profile/manikandanprabh4",
  resumeUrl: "/Manikandan_Prabhu_Resume.pdf",
  formspreeId: "xvoewyop",
  
  statusText: "OPEN TO PLACEMENT & INTERNSHIP OPPORTUNITIES",
  careerGoals: [
    "Java",
    "Spring Boot",
    "SQL",
    "REST APIs",
    "Full Stack Development",
    "Problem Solving"
  ]
};

export interface NavItem {
  label: string;
  path: string;
}

export const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Experience", path: "/experience" },
  { label: "Education", path: "/education" },
  { label: "Contact", path: "/contact" }
];
