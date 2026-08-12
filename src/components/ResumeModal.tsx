import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, Download, FileText, CheckCircle2, GraduationCap, Code, ExternalLink, Award, Sparkles, BookOpen } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<"document" | "pdf">("document");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
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

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-2.5 sm:p-4 md:p-6 overflow-y-auto bg-[#192841]/80 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Background click listener */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] sm:max-h-[90vh] my-auto flex flex-col rounded-3xl bg-[#FFFEFB] border border-[#192841]/20 shadow-2xl z-10 animate-in zoom-in-95 duration-200 overflow-hidden">
        
        {/* Sticky Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 sm:px-6 py-3.5 sm:py-4 bg-[#FFFEFB]/95 backdrop-blur-md border-b border-[#192841]/10 shrink-0">
          <div className="flex items-center justify-between sm:justify-start gap-3">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="p-2 rounded-xl bg-[#F7E7CE] text-[#192841] shrink-0">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h3 className="text-[15px] sm:text-base font-bold text-[#192841] leading-tight">
                  Official Resume
                </h3>
                <p className="text-[11px] sm:text-xs font-medium text-[#6F7885]">
                  {siteConfig.name} • B.Tech IT (MKCE)
                </p>
              </div>
            </div>

            {/* Mobile close button on top right */}
            <button
              onClick={onClose}
              className="sm:hidden p-2 rounded-full text-[#46546A] hover:text-[#192841] hover:bg-[#F5F1E8] transition-colors cursor-pointer"
              aria-label="Close Resume Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-2">
            {/* View Mode Toggle */}
            <div className="flex items-center bg-[#F5F1E8] p-0.5 sm:p-1 rounded-xl border border-[#192841]/10 text-[11px] sm:text-xs font-semibold">
              <button
                onClick={() => setViewMode("document")}
                className={`px-2.5 sm:px-3 py-1 rounded-lg transition-all cursor-pointer ${
                  viewMode === "document"
                    ? "bg-[#192841] text-white shadow-xs"
                    : "text-[#46546A] hover:text-[#192841]"
                }`}
              >
                Structured
              </button>
              <button
                onClick={() => setViewMode("pdf")}
                className={`px-2.5 sm:px-3 py-1 rounded-lg transition-all cursor-pointer ${
                  viewMode === "pdf"
                    ? "bg-[#192841] text-white shadow-xs"
                    : "text-[#46546A] hover:text-[#192841]"
                }`}
              >
                Original PDF
              </button>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 sm:h-9 px-2.5 sm:px-3 rounded-xl text-[11px] sm:text-xs font-semibold bg-[#F5F1E8] border border-[#192841]/15 text-[#192841] hover:bg-[#F7E7CE] inline-flex items-center gap-1 sm:gap-1.5 transition-all shadow-2xs"
              >
                <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span className="hidden md:inline">Open in Tab</span>
              </a>

              <button
                onClick={handleDownload}
                className="h-8 sm:h-9 px-3 sm:px-4 rounded-xl text-[11px] sm:text-xs font-semibold bg-[#192841] text-white hover:bg-[#233758] inline-flex items-center gap-1 sm:gap-1.5 transition-all shadow-2xs cursor-pointer"
              >
                <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>Download</span>
              </button>

              <button
                onClick={onClose}
                className="hidden sm:inline-flex p-2 rounded-full text-[#46546A] hover:text-[#192841] hover:bg-[#F5F1E8] transition-colors ml-1 cursor-pointer"
                aria-label="Close Resume Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-8 bg-[#FCFAF5]/50">
          {viewMode === "pdf" ? (
            <div className="w-full h-[65vh] sm:h-[70vh] rounded-2xl overflow-hidden border border-[#192841]/15 bg-white shadow-inner">
              <iframe
                src={`${siteConfig.resumeUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                title="Manikandan Prabhu C. Resume PDF"
                className="w-full h-full border-none"
              />
            </div>
          ) : (
            <div className="space-y-8 max-w-3xl mx-auto">
              
              {/* Header Info */}
              <div className="p-6 rounded-3xl bg-[#FFFEFB] border border-[#192841]/12 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#192841]/10 pb-5">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#192841]">
                      Manikandan Prabhu C.
                    </h2>
                    <p className="text-base font-semibold text-[#192841] mt-0.5">
                      B.Tech Information Technology Student
                    </p>
                    <p className="text-xs text-[#6F7885] mt-1">
                      M. Kumarasamy College of Engineering, Karur • TN, India
                    </p>
                  </div>

                  <div className="space-y-1 text-xs text-[#46546A] sm:text-right font-mono">
                    <div>
                      <strong className="text-[#192841] font-sans">Email:</strong> manikandanprabhu37@gmail.com
                    </div>
                    <div>
                      <strong className="text-[#192841] font-sans">GitHub:</strong> github.com/cmmanikandan
                    </div>
                    <div>
                      <strong className="text-[#192841] font-sans">LinkedIn:</strong> Manikandan Prabhu C.
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#6F7885]">
                    PROFESSIONAL SUMMARY
                  </span>
                  <p className="text-[14.5px] text-[#46546A] leading-relaxed">
                    Motivated Information Technology undergraduate with solid foundations in Java, Python, and Object-Oriented Programming. Experienced in building full-stack web platforms and backend services with a disciplined focus on database modeling, RESTful integrations, and production readiness.
                  </p>
                </div>
              </div>

              {/* 1. Education */}
              <div className="p-6 rounded-3xl bg-[#FFFEFB] border border-[#192841]/12 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#192841] border-b border-[#192841]/10 pb-3">
                  <GraduationCap className="w-4 h-4" />
                  <span>Education</span>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-4">
                    <div>
                      <h4 className="text-base font-bold text-[#192841]">
                        B.Tech in Information Technology
                      </h4>
                      <p className="text-xs font-medium text-[#46546A]">
                        M. Kumarasamy College of Engineering, Karur
                      </p>
                    </div>
                    <div className="text-left sm:text-right">
                      <span className="text-xs font-mono font-semibold text-[#192841]">
                        2024 – 2028 (Expected)
                      </span>
                      <span className="block text-[11px] font-bold text-[#192841] bg-[#F7E7CE] px-2 py-0.5 rounded mt-0.5 sm:inline-block sm:ml-2">
                        CGPA: 7.5 / 10
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Technical Skills */}
              <div className="p-6 rounded-3xl bg-[#FFFEFB] border border-[#192841]/12 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#192841] border-b border-[#192841]/10 pb-3">
                  <Code className="w-4 h-4" />
                  <span>Technical Skills</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-2xl bg-[#F5F1E8] space-y-1">
                    <span className="font-bold text-[#192841] block text-[11px] uppercase tracking-wider">
                      Programming Languages
                    </span>
                    <p className="text-[#46546A] font-medium">
                      Java, Python, C, JavaScript (ES6+)
                    </p>
                  </div>

                  <div className="p-3 rounded-2xl bg-[#F5F1E8] space-y-1">
                    <span className="font-bold text-[#192841] block text-[11px] uppercase tracking-wider">
                      Frameworks & Backend
                    </span>
                    <p className="text-[#46546A] font-medium">
                      Spring Boot, REST APIs, React, HTML5, CSS3
                    </p>
                  </div>

                  <div className="p-3 rounded-2xl bg-[#F5F1E8] space-y-1">
                    <span className="font-bold text-[#192841] block text-[11px] uppercase tracking-wider">
                      Databases & Cloud
                    </span>
                    <p className="text-[#46546A] font-medium">
                      MySQL, PostgreSQL, Supabase, Firebase
                    </p>
                  </div>

                  <div className="p-3 rounded-2xl bg-[#F5F1E8] space-y-1">
                    <span className="font-bold text-[#192841] block text-[11px] uppercase tracking-wider">
                      Tools & Platforms
                    </span>
                    <p className="text-[#46546A] font-medium">
                      Git, GitHub, VS Code, Vercel, Vite
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Core Placement Projects */}
              <div className="p-6 rounded-3xl bg-[#FFFEFB] border border-[#192841]/12 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#192841] border-b border-[#192841]/10 pb-3">
                  <BookOpen className="w-4 h-4" />
                  <span>Key Software Projects</span>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-2xl bg-[#F5F1E8]/70 border border-[#192841]/10 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-[#192841] text-sm sm:text-base">
                        Qubink — Smart Campus Printing Marketplace
                      </h4>
                      <span className="text-[11px] font-mono bg-white px-2 py-0.5 rounded border border-[#192841]/15 font-semibold text-[#192841]">
                        Full Stack
                      </span>
                    </div>
                    <p className="text-[#46546A] text-xs leading-relaxed">
                      End-to-end printing service marketplace for college campuses featuring multi-format file uploads, dynamic pricing calculation, FIFO vendor queue, and QR code pickup handoff.
                    </p>
                    <div className="text-[11px] text-[#6F7885] font-medium pt-1">
                      <strong>Technologies:</strong> React, TypeScript, Supabase, Firebase, Cloudinary, Razorpay
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F5F1E8]/70 border border-[#192841]/10 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-[#192841] text-sm sm:text-base">
                        FINOVA — Personal Finance & Expense Tracker
                      </h4>
                      <span className="text-[11px] font-mono bg-white px-2 py-0.5 rounded border border-[#192841]/15 font-semibold text-[#192841]">
                        PWA / Finance
                      </span>
                    </div>
                    <p className="text-[#46546A] text-xs leading-relaxed">
                      Gamified personal budget tracker with category breakdown analytics, velocity spend monitoring, streak badges, and offline PWA capability.
                    </p>
                    <div className="text-[11px] text-[#6F7885] font-medium pt-1">
                      <strong>Technologies:</strong> React, TypeScript, Vite, Tailwind CSS, Supabase, Service Workers
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F5F1E8]/70 border border-[#192841]/10 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-[#192841] text-sm sm:text-base">
                        Employee Attendance Tracker & HelpDesk System
                      </h4>
                      <span className="text-[11px] font-mono bg-white px-2 py-0.5 rounded border border-[#192841]/15 font-semibold text-[#192841]">
                        Java & Python
                      </span>
                    </div>
                    <p className="text-[#46546A] text-xs leading-relaxed">
                      Desktop and backend service applications for automated attendance recording, leave workflows, and ticket-based IT service resolution with MySQL database backend.
                    </p>
                    <div className="text-[11px] text-[#6F7885] font-medium pt-1">
                      <strong>Technologies:</strong> Java, Python, MySQL, SQLite, JDBC, Tkinter
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Certifications & Academic Honors */}
              <div className="p-6 rounded-3xl bg-[#FFFEFB] border border-[#192841]/12 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#192841] border-b border-[#192841]/10 pb-3">
                  <Award className="w-4 h-4" />
                  <span>Certifications & Online Learning</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {[
                    { name: "Programming in Java", org: "NPTEL / SWAYAM" },
                    { name: "Python for Everybody", org: "Coursera" },
                    { name: "Java Programming Fundamentals", org: "Great Learning" },
                    { name: "SQL & Relational Database Design", org: "Udemy" }
                  ].map((cert, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-[#F5F1E8] flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#192841] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-[#192841] block">
                          {cert.name}
                        </span>
                        <span className="text-[11px] text-[#6F7885]">
                          {cert.org}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Sticky Footer Action */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 sm:py-4 bg-[#FFFEFB] border-t border-[#192841]/10 shrink-0 text-xs">
          <div className="flex items-center gap-1.5 text-[#6F7885] font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#192841]" />
            <span>Placement Profile • Verified</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold border border-[#192841]/20 text-[#192841] hover:bg-[#F5F1E8] transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#192841] text-white hover:bg-[#233758] transition-colors shadow-2xs inline-flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );

  return typeof document !== "undefined"
    ? createPortal(modalContent, document.body)
    : null;
};
