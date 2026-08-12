import React from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "../config/siteConfig";
import { featuredProjects } from "../data/projectsData";
import { AnimatedRoleText } from "../components/AnimatedRoleText";
import { ProjectMockupPreview } from "../components/ProjectMockupPreview";
import { Download, ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon, HackerRankIcon } from "../components/BrandIcons";

interface HomePageProps {
  onOpenResumeModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenResumeModal }) => {
  const topProjects = featuredProjects.slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24 md:space-y-28 pb-16 sm:pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="pt-8 pb-12 sm:pt-14 sm:pb-16 md:pt-18 md:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            
            {/* Personal Brand Typography */}
            <div className="space-y-2">
              <div className="text-[12px] font-bold tracking-[0.08em] text-[#192841] uppercase">
                HELLO, I'M
              </div>

              {/* 1. Big Personal Name Headline */}
              <h1 className="text-[40px] sm:text-[54px] md:text-[64px] lg:text-[76px] font-bold tracking-tight text-[#192841] leading-none">
                MANIKANDAN PRABHU
              </h1>

              {/* 2. Developer Terminal Animated Role */}
              <div className="pt-1.5 pb-1">
                <AnimatedRoleText />
              </div>

              {/* 3. Headline Statement */}
              <h2 className="text-[20px] sm:text-[26px] md:text-[34px] font-bold text-[#192841] leading-tight pt-1">
                I turn ideas into practical software.
              </h2>
            </div>

            {/* Placement Description: 15–17px, line-height 1.65, #46546A */}
            <p className="text-[15px] sm:text-[16.5px] text-[#46546A] font-normal leading-[1.65] max-w-3xl">
              I'm a B.Tech Information Technology student currently entering my 3rd year at <strong className="text-[#192841] font-semibold">M. Kumarasamy College of Engineering (MKCE), Karur</strong>, focused on Java, Spring Boot, SQL and full stack development. I enjoy turning real-world ideas into practical software and building projects that solve everyday problems.
            </p>

            {/* Actions: Full-width stack on mobile */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                to="/projects"
                className="h-12 px-6 rounded-xl bg-[#192841] text-white hover:bg-[#233758] font-bold text-[15px] inline-flex items-center justify-center gap-2.5 transition-all duration-200 hover:-translate-y-0.5 shadow-sm group w-full sm:w-auto text-center"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <button
                onClick={onOpenResumeModal}
                className="h-12 px-6 rounded-xl border border-[#192841]/25 bg-[#F5F1E8] text-[#192841] hover:bg-[#F7E7CE] font-bold text-[15px] inline-flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 shadow-2xs group w-full sm:w-auto text-center"
              >
                <Download className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
                <span>Download Resume</span>
              </button>

              <Link
                to="/contact"
                className="h-12 px-4 inline-flex items-center justify-center gap-1.5 text-[14px] font-bold text-[#192841] hover:text-[#233758] transition-colors link-hover group w-full sm:w-auto text-center"
              >
                <span>Connect With Me</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUICK SNAPSHOT METRICS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {[
            { label: "ACADEMIC", primary: "B.Tech IT", note: "(3rd Year)" },
            { label: "CORE FOCUS", primary: "Java Full Stack", note: "Spring & SQL" },
            { label: "PROJECTS", primary: "5+ Built", note: "& Live Online" },
            { label: "COLLEGE", primary: "MKCE", note: "Karur, TN" }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 sm:p-5 rounded-2xl bg-[#FFFEFB] border border-[#192841]/12 shadow-[0_4px_18px_rgba(25,40,65,0.04)] space-y-1 hover:border-[#192841]/30 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
            >
              <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.08em] text-[#192841] uppercase">
                {item.label}
              </span>
              <div className="text-[14.5px] sm:text-[17px] font-bold text-[#192841] leading-tight">
                {item.primary}{" "}
                <span className="text-[11.5px] sm:text-xs font-normal text-[#6F7885] italic block sm:inline">
                  {item.note}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEATURED PROJECTS SNAPSHOT */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-[#192841]/10">
          <div>
            <span className="text-[12px] font-semibold tracking-[0.08em] text-[#192841] uppercase">
              03 — SELECTED WORK
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#192841] mt-1">
              Featured Software Projects
            </h2>
          </div>
          <Link
            to="/projects"
            className="text-xs sm:text-[14px] font-bold text-[#192841] hover:text-[#233758] link-hover inline-flex items-center gap-1.5 w-fit"
          >
            <span>View All Projects</span>
            <span>→</span>
          </Link>
        </div>

        <div className="space-y-8">
          {topProjects.map((project) => (
            <div
              key={project.id}
              className="p-5 sm:p-8 rounded-3xl bg-[#FFFEFB] border border-[#192841]/12 shadow-[0_4px_18px_rgba(25,40,65,0.04)] hover:shadow-[0_8px_24px_rgba(25,40,65,0.08)] hover:border-[#192841]/35 hover:-translate-y-0.5 transition-all duration-200 flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch lg:items-center"
            >
              {/* Text Area */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xl sm:text-2xl font-mono font-bold text-[#192841]">
                    {project.number}
                  </span>
                  <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-[#F5F1E8] text-[#192841] border border-[#192841]/12">
                    {project.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#192841] tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] font-medium text-[#6F7885] mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-[14px] sm:text-[15px] text-[#46546A] font-normal leading-[1.6]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                  {project.technologies.slice(0, 5).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11.5px] sm:text-[12px] font-medium bg-[#F5F1E8] text-[#192841] border border-[#192841]/12"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    to={`/projects/${project.id}`}
                    className="h-11 px-5 rounded-xl text-[14px] font-bold bg-[#192841] text-white hover:bg-[#233758] inline-flex items-center gap-2 transition-all hover:-translate-y-0.5 shadow-2xs group w-full sm:w-auto justify-center"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Project Preview */}
              <div className="lg:col-span-5 w-full rounded-2xl overflow-hidden border border-[#192841]/15 mt-2 lg:mt-0 min-h-[190px] sm:min-h-[220px]">
                <ProjectMockupPreview project={project} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <Link
            to="/projects"
            className="h-12 px-8 rounded-xl border border-[#192841] bg-[#F5F1E8] text-[#192841] hover:bg-[#F7E7CE] font-bold text-[15px] inline-flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 shadow-2xs w-full sm:w-auto"
          >
            <span>Explore All 5+ Projects & Code</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* 4. WHY I BUILD PHILOSOPHY */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-3xl bg-[#FFFEFB] border border-[#192841]/12 shadow-[0_4px_18px_rgba(25,40,65,0.04)] relative overflow-hidden space-y-4 hover:border-[#192841]/30 transition-all duration-200">
          <div className="absolute top-0 left-0 bottom-0 w-2 bg-[#192841]" />
          <span className="text-[12px] font-semibold tracking-[0.08em] text-[#192841] uppercase">
            DEVELOPMENT PHILOSOPHY
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#192841] tracking-tight">
            Why I Build Software
          </h3>
          <p className="text-[15px] sm:text-[16.5px] text-[#46546A] font-normal leading-[1.65] max-w-3xl">
            I enjoy turning real-world ideas into reliable software that simplifies workflows and solves practical problems. For me, engineering is about understanding the core requirement, planning clean data structures, and delivering resilient applications.
          </p>
          <blockquote className="text-[14.5px] sm:text-[16px] font-normal text-[#192841] italic pt-1">
            “Building, learning, and improving — one project at a time.”
          </blockquote>
        </div>
      </section>

      {/* 5. PLACEMENT & RESUME CTA (Midnight Blue Dark Section) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 md:p-12 rounded-3xl bg-[#192841] text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-semibold tracking-widest text-[#F7E7CE] uppercase">
              CURRENT PLACEMENT STATUS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Open to Java Full Stack & Software Roles
            </h2>
            <p className="text-[14.5px] sm:text-[15px] text-[#FCFAF5]/90 font-normal leading-[1.65]">
              Available for software engineering placement drives, internships, and technical opportunities starting 2026.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              onClick={onOpenResumeModal}
              className="h-12 px-6 rounded-xl text-[14px] sm:text-[15px] font-bold bg-[#F7E7CE] text-[#192841] hover:bg-[#FAF0E2] transition-all shadow-sm hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 group w-full sm:w-auto"
            >
              <Download className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
              <span>Download Resume</span>
            </button>

            <Link
              to="/contact"
              className="h-12 px-5 rounded-xl text-[14px] sm:text-[15px] font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Mail className="w-4 h-4" />
              <span>Get In Touch</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. LET'S CONNECT */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFEFB] border border-[#192841]/12 shadow-[0_4px_18px_rgba(25,40,65,0.04)] flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:border-[#192841]/30 transition-all duration-200">
          <div>
            <h3 className="text-lg font-bold text-[#192841]">
              Let's Connect Directly
            </h3>
            <p className="text-xs text-[#6F7885] font-normal mt-0.5">
              Available across professional coding networks and via direct email.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 px-3.5 rounded-xl text-xs font-bold bg-[#F5F1E8] border border-[#192841]/15 text-[#192841] hover:bg-[#F7E7CE] inline-flex items-center justify-center gap-1.5 transition-all shadow-2xs"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 px-3.5 rounded-xl text-xs font-bold bg-[#F5F1E8] border border-[#192841]/15 text-[#192841] hover:bg-[#F7E7CE] inline-flex items-center justify-center gap-1.5 transition-all shadow-2xs"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href={siteConfig.leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 px-3.5 rounded-xl text-xs font-bold bg-[#F5F1E8] border border-[#192841]/15 text-[#192841] hover:bg-[#F7E7CE] inline-flex items-center justify-center gap-1.5 transition-all shadow-2xs"
            >
              <LeetCodeIcon className="w-3.5 h-3.5" />
              <span>LeetCode</span>
            </a>

            <a
              href={siteConfig.hackerrankUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 px-3.5 rounded-xl text-xs font-bold bg-[#F5F1E8] border border-[#192841]/15 text-[#192841] hover:bg-[#F7E7CE] inline-flex items-center justify-center gap-1.5 transition-all shadow-2xs"
            >
              <HackerRankIcon className="w-3.5 h-3.5" />
              <span>HackerRank</span>
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="h-10 px-4 rounded-xl text-xs font-bold bg-[#192841] text-white hover:bg-[#233758] inline-flex items-center justify-center gap-1.5 transition-all shadow-2xs"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email Me</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
