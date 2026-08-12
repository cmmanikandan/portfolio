import React from "react";
import { Terminal, Layout, Server, Database, Wrench, Layers, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: string[];
}

export const SkillsPage: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      icon: Terminal,
      skills: ["Java", "Python", "C", "JavaScript (ES6+)"],
    },
    {
      title: "Frontend",
      icon: Layout,
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Web Design"],
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Java", "Spring Boot", "REST APIs", "Flask", "Django"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "Supabase", "Firebase"],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Git", "GitHub", "VS Code", "Vercel", "Render", "Cloudinary"],
    },
    {
      title: "Development Core",
      icon: Layers,
      skills: [
        "Full Stack Development",
        "API Integration",
        "Authentication",
        "Database Design",
        "Problem Solving"
      ],
    }
  ];

  return (
    <div className="py-10 sm:py-16 md:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl space-y-2.5 sm:space-y-3">
        <span className="text-[12px] font-semibold tracking-[0.08em] text-[#192841] uppercase">
          02 — TECHNICAL TOOLKIT
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#192841]">
          Technologies I use to build software.
        </h1>
        <p className="text-[15px] sm:text-[16.5px] text-[#46546A] font-normal leading-[1.65]">
          A disciplined toolkit built through academic study, personal software projects, and daily programming practice.
        </p>
      </div>

      {/* Core Technical Positioning Banner */}
      <div className="p-5 sm:p-8 rounded-3xl bg-[#192841] text-white shadow-md space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/15 pb-4">
          <div className="space-y-1">
            <span className="text-xs font-semibold tracking-widest text-[#F7E7CE] uppercase">
              PRIMARY PLACEMENT FOCUS
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Java Full Stack Development
            </h2>
          </div>
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-[#F7E7CE] text-[#192841] w-fit">
            Core Target
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2">
          {[
            "Java",
            "Spring Boot",
            "SQL (MySQL / Postgres)",
            "REST APIs",
            "HTML & CSS",
            "JavaScript",
            "Database Design",
            "Full Stack Development"
          ].map((coreSkill, idx) => (
            <div
              key={idx}
              className="min-h-[40px] flex items-center gap-2 text-xs sm:text-[12.5px] font-medium text-[#FCFAF5] bg-white/10 hover:bg-white/15 px-3 py-2 rounded-xl border border-white/15 transition-colors"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#F7E7CE] shrink-0" />
              <span className="truncate">{coreSkill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Clean Grid: 1 column mobile, 2 on tablet, 3 on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {skillCategories.map((category, idx) => {
          const Icon = category.icon;

          return (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-[#FFFEFB] border border-[#192841]/12 shadow-[0_4px_18px_rgba(25,40,65,0.04)] hover:border-[#192841]/35 hover:shadow-[0_8px_24px_rgba(25,40,65,0.08)] hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-4 sm:mb-5">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-[#F5F1E8] text-[#192841] border border-[#192841]/15 group-hover:bg-[#192841] group-hover:text-white transition-colors duration-200">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-[16px] font-semibold tracking-wide text-[#192841]">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 sm:px-3 py-1.5 rounded-lg text-[12px] sm:text-[12.5px] font-medium bg-[#F5F1E8] text-[#192841] border border-[#192841]/12 group-hover:border-[#192841]/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation to Projects */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFEFB] border border-[#192841]/12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 hover:border-[#192841]/30 transition-all duration-200">
        <div>
          <h3 className="text-lg font-bold text-[#192841]">
            See These Skills In Action
          </h3>
          <p className="text-xs text-[#6F7885] font-normal mt-0.5">
            Discover the real applications and systems I built with these technologies.
          </p>
        </div>

        <Link
          to="/projects"
          className="h-11 px-6 rounded-xl bg-[#192841] text-white hover:bg-[#233758] font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all shrink-0 shadow-2xs w-full sm:w-auto"
        >
          <span>View Project Case Studies</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
};
