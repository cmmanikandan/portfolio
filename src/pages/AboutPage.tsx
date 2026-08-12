import React from "react";
import { siteConfig } from "../config/siteConfig";
import { Target, BookOpen, Layers, CheckCircle2, ArrowRight, Lightbulb, Code2, ShieldCheck, GitBranch } from "lucide-react";
import { Link } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const approaches = [
    {
      step: "01",
      title: "Understand the Problem",
      desc: "Analyze user pain points, input-output specifications, and real-world edge cases before writing code.",
      icon: Lightbulb
    },
    {
      step: "02",
      title: "Plan the Architecture",
      desc: "Structure relational schemas, define RESTful API endpoints, and sketch responsive UI wireframes.",
      icon: GitBranch
    },
    {
      step: "03",
      title: "Build & Implement",
      desc: "Write modular, readable code across frontend components, backend services, and database controllers.",
      icon: Code2
    },
    {
      step: "04",
      title: "Test & Validate",
      desc: "Verify error states, security validations, responsive layouts, and cross-browser functionality.",
      icon: ShieldCheck
    },
    {
      step: "05",
      title: "Improve & Iterate",
      desc: "Refactor based on real user feedback, performance bottlenecks, and industry best practices.",
      icon: CheckCircle2
    }
  ];

  return (
    <div className="py-10 sm:py-16 md:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl space-y-2.5 sm:space-y-3">
        <span className="text-[12px] font-semibold tracking-[0.08em] text-[#192841] uppercase">
          01 — ABOUT ME
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#192841]">
          Building skills by building practical software.
        </h1>
        <p className="text-[15px] sm:text-[16.5px] text-[#46546A] font-normal leading-[1.65]">
          I’m an Information Technology undergraduate who loves solving real-world challenges through clean engineering.
        </p>
      </div>

      {/* Main Narrative & Bio */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-7 space-y-5 text-[#46546A] text-[15px] sm:text-[16.5px] font-normal leading-[1.65]">
          <p>
            I’m currently pursuing my B.Tech in Information Technology at{" "}
            <strong className="text-[#192841] font-semibold">{siteConfig.college} (MKCE)</strong>, Karur. My passion for software development emerged from a simple desire: to understand how complex digital platforms work from database tables to interactive user interfaces.
          </p>
          <p>
            Rather than limiting myself to textbook concepts, I believe the fastest way to grow is to build functional products. Over the past two years, I’ve engineered campus printing marketplaces, offline-first personal finance systems, local service directories, and industrial web catalogs.
          </p>
          <p>
            My current preparation is geared specifically toward <strong className="text-[#192841] font-semibold">Java Full Stack Development</strong> and <strong className="text-[#192841] font-semibold">Software Engineering</strong> placement drives.
          </p>

          <div className="p-5 sm:p-6 rounded-2xl bg-[#FFFEFB] border border-[#192841]/12 shadow-[0_4px_18px_rgba(25,40,65,0.04)] relative overflow-hidden">
            <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#192841]" />
            <blockquote className="text-[14.5px] sm:text-[16px] font-normal text-[#192841] italic pl-2">
              “Building, learning, and improving — one project at a time.”
            </blockquote>
          </div>
        </div>

        {/* Quick Highlights Card */}
        <div className="lg:col-span-5 w-full space-y-4">
          <div className="p-5 sm:p-7 rounded-3xl bg-[#FFFEFB] border border-[#192841]/12 shadow-[0_4px_18px_rgba(25,40,65,0.04)] space-y-4 sm:space-y-5 hover:shadow-[0_8px_24px_rgba(25,40,65,0.08)] hover:border-[#192841]/30 transition-all duration-200">
            <h3 className="text-sm font-semibold tracking-wider text-[#192841] border-b border-[#192841]/10 pb-3">
              Academic & Placement Status
            </h3>

            <div className="space-y-2.5 sm:space-y-3">
              {[
                {
                  title: "CURRENT STATUS",
                  primary: "B.Tech IT",
                  secondary: "(Entering 3rd Year)",
                  icon: BookOpen
                },
                {
                  title: "INSTITUTION",
                  primary: "M. Kumarasamy College of Engineering",
                  secondary: "Karur, Tamil Nadu",
                  icon: Target
                },
                {
                  title: "CAREER DIRECTION",
                  primary: "Java Full Stack Developer",
                  secondary: "Core Java & Spring Boot",
                  icon: Layers
                },
                {
                  title: "TARGET ROLES",
                  primary: "Software Engineer",
                  secondary: "• Java Developer",
                  icon: CheckCircle2
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-3 sm:p-3.5 rounded-xl bg-[#F5F1E8] border border-[#192841]/10 flex items-start gap-3"
                  >
                    <div className="p-2 rounded-lg bg-[#FCFAF5] border border-[#192841]/15 text-[#192841] shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <div className="text-[10px] font-medium uppercase tracking-wider text-[#6F7885]">
                        {item.title}
                      </div>
                      <div className="text-[13px] sm:text-[13.5px] font-semibold text-[#192841] leading-snug truncate sm:whitespace-normal">
                        {item.primary}{" "}
                        <span className="text-[11.5px] sm:text-xs font-normal text-[#6F7885] italic block sm:inline">
                          {item.secondary}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 5-Step Engineering Approach: 1 column on mobile, 5 on desktop */}
      <div className="space-y-6 sm:space-y-8 pt-6 sm:pt-8 border-t border-[#192841]/10">
        <div>
          <span className="text-[12px] font-semibold tracking-[0.08em] text-[#192841] uppercase">
            MY DEVELOPMENT LIFECYCLE
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#192841] mt-1">
            How I Approach Problems
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5 sm:gap-4">
          {approaches.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-[#FFFEFB] border border-[#192841]/12 shadow-[0_4px_18px_rgba(25,40,65,0.04)] space-y-2.5 flex flex-col justify-between hover:shadow-[0_8px_24px_rgba(25,40,65,0.08)] hover:border-[#192841]/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#192841]">
                      {item.step}
                    </span>
                    <div className="p-1.5 rounded-lg bg-[#F5F1E8] text-[#192841]">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h3 className="text-[15px] font-semibold text-[#192841]">
                    {item.title}
                  </h3>

                  <p className="text-[13px] text-[#46546A] font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Next Action */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFEFB] border border-[#192841]/12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 hover:border-[#192841]/30 transition-all duration-200">
        <div>
          <h3 className="text-lg font-bold text-[#192841]">
            Explore My Technical Stack & Skills
          </h3>
          <p className="text-xs text-[#6F7885] font-normal mt-0.5">
            Take a look at the languages, backend frameworks, and databases I work with.
          </p>
        </div>

        <Link
          to="/skills"
          className="h-11 px-6 rounded-xl bg-[#192841] text-white hover:bg-[#233758] font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all shrink-0 shadow-2xs w-full sm:w-auto"
        >
          <span>View Technical Skills</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
};
