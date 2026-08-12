import React, { useState } from "react";
import { Terminal, Layout, Server, Database, Wrench, Layers, CheckCircle2 } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: string[];
}

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      icon: Terminal,
      skills: ["Java", "Python", "C", "JavaScript"],
    },
    {
      title: "Frontend",
      icon: Layout,
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Web Design"],
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

  const toggleCategory = (title: string) => {
    setSelectedCategory((prev) => (prev === title ? null : title));
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#FCFAF5] border-y border-[#192841]/10 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-14 space-y-2">
          <span className="text-xs font-bold tracking-[0.08em] text-[#192841] uppercase">
            02 — SKILLS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#192841]">
            Tools I use to turn ideas into software.
          </h2>
          <p className="text-sm sm:text-base text-[#4B5563]">
            A growing toolkit built through coursework, hands-on projects, and continuous problem-solving practice.
          </p>
        </div>

        {/* Primary Stack Highlight Box - Midnight Blue Background with Champagne White Accents */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-[#192841] text-white shadow-md space-y-4 border border-[#192841]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/15 pb-4">
            <div className="space-y-1">
              <span className="text-xs font-extrabold tracking-widest text-[#F7E7CE] uppercase">
                CORE TECHNICAL POSITIONING
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-white">
                Java Full Stack Development Stack
              </h3>
            </div>
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#F7E7CE] text-[#192841] w-fit">
              Primary Career Focus
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
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
                className="flex items-center gap-2 text-xs font-semibold text-[#FCFAF5] bg-white/10 hover:bg-white/15 px-3 py-2 rounded-xl border border-white/15 transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F7E7CE] shrink-0" />
                <span>{coreSkill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills 6-Card Grid using Layered Surface System (#FBF9F4 cards, #F5F1E8 chips) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.title;

            return (
              <div
                key={idx}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                onClick={() => toggleCategory(category.title)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleCategory(category.title);
                  }
                }}
                className={`p-6 rounded-2xl cursor-pointer select-none transition-all duration-250 flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-[#192841]/30 ${
                  isSelected
                    ? "bg-[#F7E7CE]/50 border-2 border-[#192841] shadow-[0_8px_28px_rgba(25,40,65,0.08)] -translate-y-0.5"
                    : "bg-[#FBF9F4] border border-[#192841]/14 shadow-[0_4px_18px_rgba(25,40,65,0.04)] hover:border-[#192841]/35 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(25,40,65,0.08)]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2.5 rounded-xl transition-colors duration-200 ${
                          isSelected
                            ? "bg-[#192841] text-white shadow-2xs"
                            : "bg-[#F5F1E8] text-[#192841] border border-[#192841]/15"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-extrabold tracking-wide text-[#192841]">
                        {category.title}
                      </h3>
                    </div>

                    {isSelected && (
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-[#192841] text-white">
                        Selected
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => {
                      return (
                        <span
                          key={sIdx}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                            isSelected
                              ? "bg-white text-[#192841] border border-[#192841] shadow-2xs"
                              : "bg-[#F5F1E8] text-[#192841] border border-[#192841]/12 hover:bg-[#F7E7CE] hover:border-[#192841]/25"
                          }`}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
