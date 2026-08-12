import React from "react";
import { Download, FileText, ArrowRight } from "lucide-react";

interface ResumeCTAProps {
  onOpenResumeModal: () => void;
}

export const ResumeCTA: React.FC<ResumeCTAProps> = ({ onOpenResumeModal }) => {
  return (
    <section className="py-16 md:py-24 bg-[#FCFAF5] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 p-8 sm:p-12 rounded-3xl bg-[#192841] text-white border border-[#192841] shadow-xl">
          
          {/* Left Text */}
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-extrabold tracking-widest text-[#F7E7CE] uppercase">
              RESUME & QUALIFICATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Want the full picture?
            </h2>
            <p className="text-sm sm:text-base text-[#FCFAF5] leading-relaxed">
              Take a closer look at my education, skills, projects and experience.
            </p>
          </div>

          {/* Right Action Buttons with Standardized Button System */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* Primary Button */}
            <button
              onClick={onOpenResumeModal}
              className="h-11 sm:h-12 px-6 rounded-xl text-xs sm:text-sm font-bold bg-[#F7E7CE] text-[#192841] hover:bg-[#FAF0E2] transition-all shadow-sm group hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
              <span>Download Resume</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            {/* Secondary Button */}
            <button
              onClick={onOpenResumeModal}
              className="h-11 sm:h-12 px-5 rounded-xl text-xs sm:text-sm font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
