import React from "react";
import { Calendar, MapPin, CheckCircle2, ArrowRight, Building, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

export const ExperiencePage: React.FC = () => {
  const experiences = [
    {
      role: "Software Development Intern",
      company: "Trioticz Technologies",
      location: "Coimbatore, Tamil Nadu",
      period: "28 May 2026 — 28 June 2026",
      type: "Internship",
      description:
        "Completed a focused one-month software development internship gaining practical, hands-on exposure to commercial development workflows, programming standards, and web application architecture.",
      technologies: ["Java", "Web Development", "Git", "GitHub", "REST APIs", "SQL"],
      highlights: [
        "Exposure to commercial software development lifecycles, sprint planning, and code review standards.",
        "Hands-on practice with version control workflows using Git and collaborative GitHub repositories.",
        "Gained practical understanding of frontend and backend integration principles for web applications.",
        "Strengthened object-oriented programming concepts and relational database connectivity."
      ],
      learnings: [
        "Writing clean, modular code structured for team readability.",
        "Understanding API contracts between client and server architectures.",
        "Best practices for debugging, error logging, and deployment pipelines."
      ]
    }
  ];

  return (
    <div className="py-10 sm:py-16 md:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl space-y-2.5 sm:space-y-3">
        <span className="text-[12px] font-semibold tracking-[0.08em] text-[#192841] uppercase">
          04 — WORK EXPERIENCE
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#192841]">
          Learning through real-world work.
        </h1>
        <p className="text-[15px] sm:text-[16.5px] text-[#46546A] font-normal leading-[1.65]">
          Practical exposure gained through commercial internships and industry software training.
        </p>
      </div>

      {/* Experience Timeline Card */}
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="p-5 sm:p-8 md:p-10 rounded-3xl bg-[#FFFEFB] border border-[#192841]/12 shadow-[0_4px_18px_rgba(25,40,65,0.04)] hover:shadow-[0_8px_24px_rgba(25,40,65,0.08)] hover:border-[#192841]/30 transition-all duration-200 space-y-6"
          >
            {/* Role Header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-[#192841]/10 pb-5 sm:pb-6">
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-2xl bg-[#F7E7CE] text-[#192841] border border-[#192841]/20 shrink-0">
                  <Building className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase bg-[#F5F1E8] text-[#192841] border border-[#192841]/15">
                    {exp.type}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#192841] mt-1">
                    {exp.role}
                  </h2>
                  <p className="text-[14.5px] sm:text-base font-semibold text-[#192841]/85">
                    {exp.company}
                  </p>
                </div>
              </div>

              <div className="space-y-1 text-xs text-[#6F7885] sm:text-right font-normal">
                <div className="flex items-center sm:justify-end gap-1.5 font-semibold text-[#192841]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5 italic">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#192841]">
                Overview & Responsibilities
              </h3>
              <p className="text-[14.5px] sm:text-[15px] text-[#46546A] font-normal leading-[1.65]">
                {exp.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#192841] flex items-center gap-1.5">
                <Code2 className="w-4 h-4" />
                <span>Technologies & Tools Applied</span>
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-[#F5F1E8] text-[#192841] border border-[#192841]/12"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Contributions & Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#192841]/10">
              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#192841]">
                  What I Worked On
                </h3>
                <div className="space-y-2.5">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-[13.5px] text-[#192841] font-medium leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#192841] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#192841]">
                  Key Takeaways
                </h3>
                <div className="space-y-2.5">
                  {exp.learnings.map((item, lIdx) => (
                    <div key={lIdx} className="flex items-start gap-2.5 text-xs text-[#46546A] font-normal leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#192841] shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Next Step Link */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFEFB] border border-[#192841]/12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 hover:border-[#192841]/30 transition-all duration-200">
        <div>
          <h3 className="text-lg font-bold text-[#192841]">
            View Academic Background & Education
          </h3>
          <p className="text-xs text-[#6F7885] font-normal mt-0.5">
            Learn more about my degree coursework at M. Kumarasamy College of Engineering.
          </p>
        </div>

        <Link
          to="/education"
          className="h-11 px-6 rounded-xl bg-[#192841] text-white hover:bg-[#233758] font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all shrink-0 shadow-2xs w-full sm:w-auto"
        >
          <span>View Education</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
};
