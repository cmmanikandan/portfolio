import React from "react";
import { BookOpen, Code, Cpu, Target } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export const About: React.FC = () => {
  const highlights = [
    {
      title: "CURRENTLY",
      detail: "B.Tech Information Technology (3rd Year)",
      icon: BookOpen,
    },
    {
      title: "FOCUS",
      detail: "Java Full Stack Development",
      icon: Target,
    },
    {
      title: "CORE STACK",
      detail: "Java · Spring Boot · SQL · REST APIs",
      icon: Code,
    },
    {
      title: "TARGET ROLES",
      detail: "Java Developer · Software Engineer",
      icon: Cpu,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#FCFAF5] scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <span className="text-xs font-bold tracking-[0.08em] text-[#192841] uppercase">
            01 — ABOUT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#192841]">
            Building skills by building things.
          </h2>
        </div>

        {/* 2-Column Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6 text-[#4B5563] text-base sm:text-lg leading-relaxed">
            <p>
              I’m currently pursuing my B.Tech in Information Technology at{" "}
              <strong className="text-[#192841] font-bold">
                {siteConfig.college} (MKCE)
              </strong>
              , Karur. My interest in software engineering has grown through building practical projects and understanding how real applications operate from frontend to backend.
            </p>
            <p>
              I enjoy turning ideas into useful software — from designing clean, responsive web interfaces to creating secure REST APIs with Spring Boot, structuring SQL databases, and implementing authentication and business workflows.
            </p>
            <p>
              My primary career focus is Java Full Stack Development, with ongoing preparation in Java fundamentals, Spring Boot architecture, SQL querying, Data Structures & Algorithms, and full stack web development.
            </p>

            {/* Editorial Highlight Quote with Accent Line using #FBF9F4 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#FBF9F4] border border-[#192841]/14 shadow-[0_4px_18px_rgba(25,40,65,0.04)] my-6 relative overflow-hidden group hover:border-[#192841]/30 transition-colors">
              <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#192841]" />
              <blockquote className="text-base sm:text-lg font-bold text-[#192841] italic pl-2">
                “Building, learning, and improving — one project at a time.”
              </blockquote>
              <p className="text-xs text-[#4B5563] mt-2 font-semibold pl-2">
                The core mindset driving my daily coding practice and placement preparation.
              </p>
            </div>
          </div>

          {/* Right Column: Highlights Card using #FBF9F4 and nested #F5F1E8 */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FBF9F4] border border-[#192841]/14 shadow-[0_4px_18px_rgba(25,40,65,0.04)] space-y-6">
              <h3 className="text-sm font-extrabold tracking-wider text-[#192841] border-b border-[#192841]/10 pb-4">
                At A Glance
              </h3>

              <div className="space-y-4">
                {highlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#F5F1E8] border border-[#192841]/10 flex items-start gap-4 transition-transform duration-200 hover:translate-x-1"
                    >
                      <div className="p-2 rounded-lg bg-[#FCFAF5] border border-[#192841]/15 text-[#192841] shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#4B5563]">
                          {item.title}
                        </div>
                        <div className="text-sm font-bold text-[#192841] mt-0.5">
                          {item.detail}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
