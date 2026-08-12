import React from "react";
import { CheckCircle2 } from "lucide-react";

export const CurrentFocus: React.FC = () => {
  const learningItems = [
    {
      title: "Java",
      subtitle: "Core Language & OOP",
      description: "Strengthening core Java, OOP concepts, collections framework and problem-solving skills."
    },
    {
      title: "Spring Boot",
      subtitle: "Backend & REST APIs",
      description: "Building production-grade backend services, RESTful APIs and MVC application architecture."
    },
    {
      title: "SQL",
      subtitle: "Database Design & Queries",
      description: "Designing relational schemas, optimizing SQL queries, and handling structured relational data."
    },
    {
      title: "Data Structures & Algorithms",
      subtitle: "Problem Solving & Interview Prep",
      description: "Practicing algorithmic problem solving on LeetCode and HackerRank for placement drives."
    },
    {
      title: "Full Stack Development",
      subtitle: "End-to-End Application Delivery",
      description: "Connecting frontend interfaces with Spring Boot backends, secure APIs and relational databases."
    }
  ];

  const focusAreas = ["Java", "Spring Boot", "SQL", "DSA", "Full Stack Development"];

  return (
    <div className="bg-[#FCFAF5]">
      {/* Placement Preparation Roadmap */}
      <section className="py-20 border-t border-[#192841]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-2xl mb-14 space-y-2">
            <span className="text-xs font-bold tracking-[0.08em] text-[#192841] uppercase">
              PLACEMENT PREPARATION & GROWTH
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#192841]">
              Continuous learning through projects.
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563]">
              Strengthening core computer science fundamentals and practical engineering concepts for technical roles.
            </p>
          </div>

          {/* Learning Cards Grid with #FBF9F4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningItems.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FBF9F4] border border-[#192841]/14 shadow-[0_4px_18px_rgba(25,40,65,0.04)] hover:border-[#192841]/30 hover:shadow-[0_8px_28px_rgba(25,40,65,0.08)] transition-all duration-200 space-y-3 group hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#192841]">
                    0{idx + 1}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#4B5563] px-2 py-0.5 rounded bg-[#F5F1E8]">
                    Active Study
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-[#192841] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-bold text-[#192841]/85 mt-0.5">
                    {item.subtitle}
                  </p>
                </div>

                <p className="text-xs text-[#4B5563] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Target Focus Area */}
      <section className="py-16 bg-[#FCFAF5] border-t border-[#192841]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-10 rounded-3xl bg-[#192841] text-white border border-[#192841] space-y-6 shadow-md">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-extrabold tracking-widest text-[#F7E7CE] uppercase">
                TARGET FOCUS
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                Building toward software engineering roles.
              </h3>
              <p className="text-xs sm:text-sm text-[#FCFAF5] leading-relaxed">
                Preparing for Java Full Stack Developer and software engineering roles through daily problem solving and project building.
              </p>
            </div>

            <div className="pt-2 border-t border-white/15">
              <div className="text-xs font-extrabold tracking-wider text-[#F7E7CE] uppercase mb-3">
                PRIMARY COMPETENCIES
              </div>
              <div className="flex flex-wrap gap-3">
                {focusAreas.map((area, fIdx) => (
                  <div
                    key={fIdx}
                    className="flex items-center gap-2 text-xs font-bold text-[#192841] bg-[#F7E7CE] px-4 py-2.5 rounded-xl border border-[#F7E7CE] shadow-2xs hover:bg-[#FAF0E2] transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#192841] shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
