import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export const Experience: React.FC = () => {
  const experiences = [
    {
      role: "Software Development Intern",
      company: "Trioticz Technologies",
      location: "Coimbatore, Tamil Nadu",
      period: "May 2026 — June 2026",
      type: "Internship",
      description:
        "Completed a one-month internship gaining practical exposure to software development workflows, programming concepts and project implementation.",
      highlights: [
        "Practical exposure to commercial software development workflows.",
        "Version control standards and code reviews with Git & GitHub.",
        "Frontend and backend integration principles for web applications."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-28 bg-[#FCFAF5] scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-14 space-y-2">
          <span className="text-xs font-bold tracking-[0.08em] text-[#192841] uppercase">
            04 — EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#192841]">
            Learning through real work.
          </h2>
        </div>

        {/* Timeline List */}
        <div className="relative ml-4 sm:ml-6 space-y-12">
          
          {/* Timeline Line in Midnight Blue */}
          <div className="absolute left-0 top-3 bottom-0 w-0.5 bg-[#192841]/25" />

          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 group">
              
              {/* Timeline Node Dot */}
              <div className="absolute -left-[15px] top-1.5 w-8 h-8 rounded-full bg-[#F7E7CE] border-2 border-[#192841] flex items-center justify-center text-[#192841] shadow-2xs group-hover:scale-110 transition-transform">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Experience Content Card using #FBF9F4 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#FBF9F4] border border-[#192841]/14 shadow-[0_4px_18px_rgba(25,40,65,0.04)] space-y-4 hover:border-[#192841]/30 hover:shadow-[0_8px_28px_rgba(25,40,65,0.08)] transition-all duration-200">
                
                {/* Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#192841]/10 pb-4">
                  <div>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-extrabold tracking-wider uppercase bg-[#F7E7CE] text-[#192841] border border-[#192841]/20">
                      {exp.type}
                    </span>
                    <h3 className="text-xl font-extrabold text-[#192841] mt-1">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-bold text-[#192841]/85">
                      {exp.company}
                    </p>
                  </div>

                  <div className="space-y-1 text-xs text-[#4B5563] sm:text-right font-semibold">
                    <div className="flex items-center sm:justify-end gap-1.5 font-bold text-[#192841]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center sm:justify-end gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Takeaways */}
                <div className="space-y-2 pt-2">
                  {exp.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-[#192841] font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#192841] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
