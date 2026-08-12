import React, { useEffect } from "react";
import { X, Download, FileText, CheckCircle2, Briefcase, GraduationCap, Code, ExternalLink } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = siteConfig.resumeUrl;
    link.download = "Manikandan_Prabhu_Resume.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#192841]/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Background click listener */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Content using #FFFEFB */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#FFFEFB] border border-[#192841]/20 shadow-2xl z-10 animate-in zoom-in-95 duration-200">
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#FFFEFB]/95 backdrop-blur-md border-b border-[#192841]/10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#F7E7CE] text-[#192841]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#192841]">
                Official Resume
              </h3>
              <p className="text-xs font-medium text-[#6F7885]">
                {siteConfig.name} • {siteConfig.title}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 px-3.5 rounded-xl text-xs font-semibold bg-[#F5F1E8] border border-[#192841]/15 text-[#192841] hover:bg-[#F7E7CE] inline-flex items-center gap-1.5 transition-all shadow-2xs"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open PDF</span>
            </a>

            <button
              onClick={handleDownload}
              className="h-10 px-4 rounded-xl text-xs font-semibold bg-[#192841] text-white hover:bg-[#233758] inline-flex items-center gap-1.5 transition-all shadow-2xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#46546A] hover:text-[#192841] hover:bg-[#F5F1E8] transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-8 space-y-8 text-[#192841]">
          
          {/* Header Identity Block */}
          <div className="pb-6 border-b border-[#192841]/10 space-y-1.5">
            <h2 className="text-2xl font-bold text-[#192841] tracking-tight">
              {siteConfig.name}
            </h2>
            <p className="text-sm font-semibold text-[#192841]/85">
              {siteConfig.title}
            </p>
            <p className="text-xs text-[#6F7885] font-normal">
              {siteConfig.degree} • {siteConfig.collegeShort} • {siteConfig.location}
            </p>
          </div>

          {/* Education using #F5F1E8 */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#192841] flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#192841]" />
              <span>Education</span>
            </h4>
            <div className="p-4 rounded-xl bg-[#F5F1E8] border border-[#192841]/15 space-y-1">
              <div className="flex justify-between items-center text-sm font-semibold text-[#192841]">
                <span>{siteConfig.degree}</span>
                <span className="text-xs font-medium text-[#6F7885] italic">3rd Year (Entering)</span>
              </div>
              <p className="text-xs text-[#6F7885] font-normal">
                {siteConfig.college}, Karur, Tamil Nadu
              </p>
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#192841] flex items-center gap-2">
              <Code className="w-4 h-4 text-[#192841]" />
              <span>Technical Skills</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-[#F5F1E8] border border-[#192841]/15 space-y-1">
                <span className="font-semibold text-[#192841]">Primary Core Stack:</span>
                <p className="text-[#46546A] font-normal">Java, Spring Boot, REST APIs, SQL, MySQL, PostgreSQL</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F5F1E8] border border-[#192841]/15 space-y-1">
                <span className="font-semibold text-[#192841]">Web & Tools:</span>
                <p className="text-[#46546A] font-normal">HTML5, CSS3, JavaScript, Git, GitHub, VS Code, Cloudinary</p>
              </div>
            </div>
          </div>

          {/* Projects Summary */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#192841] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#192841]" />
              <span>Key Projects</span>
            </h4>
            <div className="space-y-2 text-xs">
              <div className="p-3.5 rounded-xl bg-[#F5F1E8] border border-[#192841]/15">
                <span className="font-semibold text-[#192841]">Qubink — Smart Campus Printing Marketplace</span>
                <p className="text-[#46546A] mt-0.5 font-normal">React, Supabase, Razorpay, Cloudinary, FIFO queue management.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F5F1E8] border border-[#192841]/15">
                <span className="font-semibold text-[#192841]">FINOVA — Personal Finance & Expense Tracker</span>
                <p className="text-[#46546A] mt-0.5 font-normal">React, TypeScript, Supabase, PWA support, budget analytics.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F5F1E8] border border-[#192841]/15">
                <span className="font-semibold text-[#192841]">ServiceHub — Local Services Marketplace</span>
                <p className="text-[#46546A] mt-0.5 font-normal">React, Node.js, Express, PostgreSQL, booking management.</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#192841] flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#192841]" />
              <span>Internship Experience</span>
            </h4>
            <div className="p-4 rounded-xl bg-[#F5F1E8] border border-[#192841]/15 space-y-1">
              <div className="flex justify-between items-center text-sm font-semibold text-[#192841]">
                <span>Software Development Intern</span>
                <span className="text-xs text-[#6F7885] font-medium italic">May 2026 – June 2026</span>
              </div>
              <p className="text-xs font-medium text-[#192841]">Trioticz Technologies — Coimbatore</p>
              <p className="text-xs text-[#46546A] pt-1 font-normal leading-relaxed">
                Gained commercial development exposure, Git workflows, and web application building practices.
              </p>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 z-20 flex items-center justify-between px-6 py-4 bg-[#F5F1E8] border-t border-[#192841]/10">
          <span className="text-xs font-medium text-[#6F7885]">Official Resume • Manikandan Prabhu</span>
          <div className="flex gap-2">
            <button
              onClick={handleDownload}
              className="h-10 px-4 rounded-xl text-xs font-semibold bg-[#192841] text-white hover:bg-[#233758] inline-flex items-center gap-1.5 transition-all shadow-2xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
