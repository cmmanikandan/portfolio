import React from "react";
import { Code2, Download, Terminal, Database, Server, ArrowRight } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { AnimatedRoleText } from "./AnimatedRoleText";

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  return (
    <section
      id="hero"
      className="relative pt-12 pb-16 md:pt-20 md:pb-24 bg-[#FCFAF5] scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column: Personal Brand & Placement Identity */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Availability Badge */}
            <div className="inline-flex">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F1E8] border border-[#192841]/15 text-xs font-bold tracking-wider text-[#192841] uppercase shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                </span>
                <span>{siteConfig.statusText}</span>
              </div>
            </div>

            {/* 2. Personal Brand Typography */}
            <div className="space-y-1.5">
              <div className="text-xs sm:text-sm font-extrabold tracking-widest text-[#192841] uppercase">
                HELLO, I'M MANIKANDAN PRABHU
              </div>

              {/* Headline Statement */}
              <h1 className="text-[34px] sm:text-[44px] md:text-[54px] lg:text-[62px] font-extrabold tracking-tight text-[#192841] leading-[1.08]">
                I turn ideas into practical software.
              </h1>

              {/* 3. Developer Terminal Animated Role Line */}
              <div className="pt-1">
                <AnimatedRoleText />
              </div>
            </div>

            {/* 4. Placement Summary Description */}
            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-2xl">
              I'm a B.Tech Information Technology student currently entering my 3rd year at <strong className="text-[#192841] font-bold">M. Kumarasamy College of Engineering (MKCE), Karur</strong>, focused on Java, Spring Boot, SQL and full stack development. I enjoy turning real-world ideas into practical software and building projects that solve everyday problems.
            </p>

            {/* 5. Action Buttons with Standardized Placement Button System */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              {/* Primary Button */}
              <a
                href="#projects"
                className="h-11 sm:h-12 px-6 rounded-xl bg-[#192841] text-white hover:bg-[#233758] font-bold text-sm inline-flex items-center justify-center gap-2.5 transition-all duration-200 hover:-translate-y-0.5 shadow-sm group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              {/* Secondary Button */}
              <button
                onClick={onOpenResumeModal}
                className="h-11 sm:h-12 px-6 rounded-xl border border-[#192841]/25 bg-[#F5F1E8] text-[#192841] hover:bg-[#F7E7CE] font-bold text-sm inline-flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 shadow-2xs group"
              >
                <Download className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
                <span>Download Resume</span>
              </button>

              {/* Text Link */}
              <a
                href="#contact"
                className="h-11 sm:h-12 px-2 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#192841] hover:text-[#233758] transition-colors link-hover group"
              >
                <span>Connect With Me</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>

          {/* 6. Right Hero Column: Refined Developer Card using Layered Surface System */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Card Frame using #FBF9F4 */}
              <div className="relative p-6 sm:p-8 rounded-2xl bg-[#FBF9F4] border border-[#192841]/14 shadow-[0_4px_18px_rgba(25,40,65,0.04)] space-y-6 hover:shadow-[0_8px_28px_rgba(25,40,65,0.08)] hover:border-[#192841]/30 transition-all duration-250">
                
                {/* Header of developer card */}
                <div className="flex items-center justify-between pb-5 border-b border-[#192841]/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F1E8] border border-[#192841]/15 flex items-center justify-center text-[#192841] shrink-0">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-extrabold text-[#192841] tracking-wide">
                        Manikandan Prabhu
                      </h3>
                      <p className="text-xs text-[#4B5563] font-semibold">
                        Java Full Stack Developer
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#192841]/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F7E7CE] border border-[#192841]/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600/80" />
                  </div>
                </div>

                {/* Primary Tech Stack using #F5F1E8 chips */}
                <div className="space-y-3">
                  <div className="text-[11px] font-extrabold tracking-wider text-[#192841] uppercase">
                    PRIMARY STACK
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F5F1E8] text-xs font-bold text-[#192841] border border-[#192841]/15 hover:bg-[#F7E7CE] transition-colors">
                      <Terminal className="w-3.5 h-3.5 text-[#192841]" />
                      Java
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F5F1E8] text-xs font-bold text-[#192841] border border-[#192841]/15 hover:bg-[#F7E7CE] transition-colors">
                      <Server className="w-3.5 h-3.5 text-[#192841]" />
                      Spring Boot
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F5F1E8] text-xs font-bold text-[#192841] border border-[#192841]/15 hover:bg-[#F7E7CE] transition-colors">
                      <Database className="w-3.5 h-3.5 text-[#192841]" />
                      SQL
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F5F1E8] text-xs font-bold text-[#192841] border border-[#192841]/15 hover:bg-[#F7E7CE] transition-colors">
                      <Code2 className="w-3.5 h-3.5 text-[#192841]" />
                      Web & REST APIs
                    </span>
                  </div>
                </div>

                {/* Minimal Editorial snippet using #F5F1E8 */}
                <div className="p-4 rounded-xl bg-[#F5F1E8] border border-[#192841]/10 font-mono text-xs text-[#192841] space-y-1.5 leading-relaxed">
                  <div className="text-[#4B5563]">// Placement Target</div>
                  <div><span className="text-[#192841] font-bold">class</span> <span className="text-[#192841] font-extrabold">Candidate</span> &#123;</div>
                  <div className="pl-4"><span className="text-[#4B5563] font-semibold">String</span> target = <span className="text-[#192841] font-bold">"Java Full Stack Developer"</span>;</div>
                  <div className="pl-4"><span className="text-[#4B5563] font-semibold">String</span> motto = <span className="text-[#192841] font-bold">"Learn. Build. Solve."</span>;</div>
                  <div>&#125;</div>
                </div>

                {/* Bottom Details */}
                <div className="pt-1 flex flex-col space-y-1 text-xs text-[#4B5563]">
                  <div className="flex items-center justify-between">
                    <span>B.Tech Information Technology</span>
                    <span className="font-bold text-[#192841]">MKCE, Karur</span>
                  </div>
                  <div className="text-[11px] text-[#192841] font-bold">
                    Currently entering 3rd Year
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
