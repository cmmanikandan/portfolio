import React from "react";
import { GraduationCap, Calendar, MapPin, BookCheck, ArrowRight, Award, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export const EducationPage: React.FC = () => {
  const academicRoadmap = [
    {
      phase: "FOUNDATION",
      title: "Higher Secondary Education (12th)",
      desc: "Built strong foundations in mathematics, physical sciences, and analytical problem-solving."
    },
    {
      phase: "YEAR 1 & 2",
      title: "Core Computer Science & Programming",
      desc: "Studied C, Python, Data Structures, OOP, Database Management Systems, and Web Fundamentals."
    },
    {
      phase: "3RD YEAR (CURRENT)",
      title: "Java Full Stack & Application Engineering",
      desc: "Advanced Java, Spring Boot microservices, SQL query optimization, REST APIs, and software development."
    },
    {
      phase: "PLACEMENT PREP",
      title: "Placement Drives & Industry Readiness",
      desc: "Practicing algorithmic problem solving, full stack projects, mock interviews, and system architecture."
    }
  ];

  const coreCourses = [
    "Object-Oriented Programming (Java)",
    "Data Structures & Algorithms",
    "Database Management Systems (SQL)",
    "Web Application Technologies",
    "Computer Networks",
    "Operating Systems & Architecture",
    "Software Engineering Methodologies",
    "Full Stack Development"
  ];

  return (
    <div className="py-10 sm:py-16 md:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl space-y-2.5 sm:space-y-3">
        <span className="text-[12px] font-semibold tracking-[0.08em] text-[#192841] uppercase">
          05 — EDUCATION & ACADEMICS
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#192841]">
          Academic journey & foundations.
        </h1>
        <p className="text-[15px] sm:text-[16.5px] text-[#46546A] font-normal leading-[1.65]">
          Pursuing a Bachelor of Technology degree in Information Technology with a strong focus on practical engineering.
        </p>
      </div>

      {/* Main Degree Card */}
      <div className="p-5 sm:p-8 md:p-10 rounded-3xl bg-[#FFFEFB] border border-[#192841]/12 shadow-[0_4px_18px_rgba(25,40,65,0.04)] space-y-5 sm:space-y-6 hover:shadow-[0_8px_24px_rgba(25,40,65,0.08)] hover:border-[#192841]/30 transition-all duration-200">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-[#192841]/10 pb-5 sm:pb-6">
          <div className="flex items-start gap-3.5 sm:gap-4">
            <div className="p-2.5 sm:p-3.5 rounded-2xl bg-[#F7E7CE] text-[#192841] border border-[#192841]/20 shrink-0">
              <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase bg-[#F5F1E8] text-[#192841] border border-[#192841]/15">
                Undergraduate Degree
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#192841] mt-1">
                B.Tech Information Technology
              </h2>
              <p className="text-[14.5px] sm:text-base font-semibold text-[#192841]/85">
                M. Kumarasamy College of Engineering (MKCE)
              </p>
            </div>
          </div>

          <div className="space-y-1 text-xs text-[#6F7885] sm:text-right font-normal">
            <div className="flex items-center sm:justify-end gap-1.5 font-semibold text-[#192841]">
              <Calendar className="w-3.5 h-3.5" />
              <span className="italic font-medium">Currently entering 3rd Year</span>
            </div>
            <div className="flex items-center sm:justify-end gap-1.5 italic">
              <MapPin className="w-3.5 h-3.5" />
              <span>Karur, Tamil Nadu</span>
            </div>
          </div>
        </div>

        <div className="p-3.5 sm:p-4 rounded-xl bg-[#F5F1E8] border border-[#192841]/10 text-xs sm:text-[14px] text-[#192841] font-normal leading-relaxed flex items-start gap-3">
          <BookCheck className="w-5 h-5 text-[#192841] shrink-0 mt-0.5" />
          <div>
            Building a rigorous foundation in core computer science, software engineering principles, database systems, web technologies, and algorithmic problem solving.
          </div>
        </div>
      </div>

      {/* Academic Roadmap: 1 col on mobile, 2 on tablet, 4 on desktop */}
      <div className="space-y-4 sm:space-y-6">
        <div>
          <span className="text-[12px] font-semibold tracking-[0.08em] text-[#192841] uppercase">
            LEARNING PROGRESSION
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#192841] mt-1">
            Academic & Skills Roadmap
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4">
          {academicRoadmap.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-[#FFFEFB] border border-[#192841]/12 shadow-[0_4px_18px_rgba(25,40,65,0.04)] space-y-2 flex flex-col justify-between hover:shadow-[0_8px_24px_rgba(25,40,65,0.08)] hover:border-[#192841]/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="space-y-1.5">
                <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-[#F5F1E8] text-[#192841]">
                  {item.phase}
                </span>
                <h3 className="text-[14px] sm:text-sm font-semibold text-[#192841]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#46546A] font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Relevant Coursework */}
      <div className="p-5 sm:p-8 rounded-3xl bg-[#FFFEFB] border border-[#192841]/12 shadow-[0_4px_18px_rgba(25,40,65,0.04)] space-y-4">
        <h3 className="text-base font-bold text-[#192841] flex items-center gap-2">
          <Award className="w-5 h-5 text-[#192841]" />
          <span>Relevant Academic Coursework</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
          {coreCourses.map((course, cIdx) => (
            <div
              key={cIdx}
              className="p-3 rounded-xl bg-[#F5F1E8] border border-[#192841]/10 text-xs sm:text-[13px] font-medium text-[#192841] flex items-center gap-2.5"
            >
              <CheckCircle2 className="w-4 h-4 text-[#192841] shrink-0" />
              <span>{course}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Connect Link */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFEFB] border border-[#192841]/12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 hover:border-[#192841]/30 transition-all duration-200">
        <div>
          <h3 className="text-lg font-bold text-[#192841]">
            Ready to Connect?
          </h3>
          <p className="text-xs text-[#6F7885] font-normal mt-0.5">
            Feel free to reach out regarding placement drives, internships, or engineering projects.
          </p>
        </div>

        <Link
          to="/contact"
          className="h-11 px-6 rounded-xl bg-[#192841] text-white hover:bg-[#233758] font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all shrink-0 shadow-2xs w-full sm:w-auto"
        >
          <span>Get In Touch</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
};
