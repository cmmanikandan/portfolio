import React, { useEffect, useState } from "react";
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-[#192841]/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Background click listener */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-[#FFFEFB] border border-[#192841]/20 shadow-2xl z-10 animate-in zoom-in-95 duration-200 overflow-hidden">
        
        {/* Sticky Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 bg-[#FFFEFB]/95 backdrop-blur-md border-b border-[#192841]/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#F7E7CE] text-[#192841]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#192841]">
                Official Resume
              </h3>
              <p className="text-xs font-medium text-[#6F7885]">
                {siteConfig.name} • B.Tech IT (MKCE)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center bg-[#F5F1E8] p-1 rounded-xl border border-[#192841]/10 text-xs font-semibold mr-1">
              <button
                onClick={() => setViewMode("document")}
                className={`px-3 py-1 rounded-lg transition-all ${
                  viewMode === "document"
                    ? "bg-[#192841] text-white shadow-xs"
                    : "text-[#46546A] hover:text-[#192841]"
                }`}
              >
                Structured View
              </button>
              <button
                onClick={() => setViewMode("pdf")}
                className={`px-3 py-1 rounded-lg transition-all ${
                  viewMode === "pdf"
                    ? "bg-[#192841] text-white shadow-xs"
                    : "text-[#46546A] hover:text-[#192841]"
                }`}
              >
                Original PDF
              </button>
            </div>

            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 px-3 rounded-xl text-xs font-semibold bg-[#F5F1E8] border border-[#192841]/15 text-[#192841] hover:bg-[#F7E7CE] inline-flex items-center gap-1.5 transition-all shadow-2xs"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Open in New Tab</span>
            </a>

            <button
              onClick={handleDownload}
              className="h-9 px-4 rounded-xl text-xs font-semibold bg-[#192841] text-white hover:bg-[#233758] inline-flex items-center gap-1.5 transition-all shadow-2xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#46546A] hover:text-[#192841] hover:bg-[#F5F1E8] transition-colors ml-1"
              aria-label="Close Resume Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6 text-[#192841]">
          
          {viewMode === "pdf" ? (
            <div className="w-full h-[600px] rounded-2xl overflow-hidden border border-[#192841]/15 shadow-inner bg-white">
              <iframe
                src={`${siteConfig.resumeUrl}#toolbar=0`}
                title="Manikandan Prabhu Official Resume PDF"
                className="w-full h-full border-0"
              />
            </div>
          ) : (
            <div className="space-y-6">
              
              {/* Header Identity Block (Exact from PDF) */}
              <div className="pb-5 border-b border-[#192841]/10 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#192841] tracking-tight">
                    Manikandan prabhu C
                  </h2>
                  <p className="text-sm font-semibold text-[#192841]/85">
                    Information Technology Undergraduate • Java & Python Developer
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#6F7885] pt-1">
                    <span>📧 {siteConfig.email}</span>
                    <span>📞 +91 7540006268</span>
                    <a
                      href={siteConfig.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#192841] font-semibold underline hover:text-[#233758]"
                    >
                      github.com/cmmanikandan
                    </a>
                  </div>
                </div>
              </div>

              {/* 1. CAREER OBJECTIVE */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#192841] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#192841]" />
                  <span>Career Objective</span>
                </h4>
                <div className="p-4 rounded-xl bg-[#F5F1E8] border border-[#192841]/10 text-xs sm:text-[13.5px] text-[#46546A] leading-relaxed font-normal">
                  To join a reputed organization that offers career growth and job satisfaction, while allowing me to contribute through continuous learning and add value to the organization. I seek opportunities to enhance my skills and knowledge, driving success for both myself and the company.
                </div>
              </div>

              {/* 2. EDUCATION (Exact from PDF) */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#192841] flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#192841]" />
                  <span>Education</span>
                </h4>
                <div className="space-y-2.5">
                  
                  {/* College */}
                  <div className="p-4 rounded-xl bg-[#F5F1E8] border border-[#192841]/12 space-y-1">
                    <div className="flex justify-between items-start text-xs sm:text-sm font-bold text-[#192841]">
                      <span>Bachelor Of Technology (Information and Technology)</span>
                      <span className="text-xs font-semibold text-[#6F7885] shrink-0 ml-2">2024 – 2028</span>
                    </div>
                    <p className="text-xs text-[#46546A] font-medium">
                      M. Kumarasamy College Of Engineering, Karur
                    </p>
                    <p className="text-xs font-semibold text-[#192841] pt-0.5">
                      CGPA: 7.5 <span className="font-normal text-[#6F7885]">(till 2nd sem)</span>
                    </p>
                  </div>

                  {/* 12th */}
                  <div className="p-4 rounded-xl bg-[#F5F1E8] border border-[#192841]/12 space-y-1">
                    <div className="flex justify-between items-start text-xs sm:text-sm font-bold text-[#192841]">
                      <span>Higher Secondary Certificate (HSC)</span>
                      <span className="text-xs font-semibold text-[#6F7885] shrink-0 ml-2">2023 – 2024</span>
                    </div>
                    <p className="text-xs text-[#46546A] font-medium">
                      Akshaya Academy Matric Higher Secondary School
                    </p>
                    <p className="text-xs font-semibold text-[#192841] pt-0.5">
                      Percentage: 78.83%
                    </p>
                  </div>

                  {/* 10th */}
                  <div className="p-4 rounded-xl bg-[#F5F1E8] border border-[#192841]/12 space-y-1">
                    <div className="flex justify-between items-start text-xs sm:text-sm font-bold text-[#192841]">
                      <span>Secondary School Leaving Certificate (SSLC)</span>
                      <span className="text-xs font-semibold text-[#6F7885] shrink-0 ml-2">2021 – 2022</span>
                    </div>
                    <p className="text-xs text-[#46546A] font-medium">
                      Akshaya Academy Matric Higher Secondary School
                    </p>
                    <p className="text-xs font-semibold text-[#192841] pt-0.5">
                      Percentage: 72%
                    </p>
                  </div>

                </div>
              </div>

              {/* 3. TECHNICAL SKILLS & AREA OF INTEREST (Exact from PDF) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#192841] flex items-center gap-2">
                    <Code className="w-4 h-4 text-[#192841]" />
                    <span>Technical Skills</span>
                  </h4>
                  <div className="p-4 rounded-xl bg-[#F5F1E8] border border-[#192841]/12 space-y-2 text-xs">
                    <div className="font-semibold text-[#192841]">Languages:</div>
                    <ul className="space-y-1 text-[#46546A] pl-4 list-disc font-medium">
                      <li>Python (Intermediate)</li>
                      <li>Java (Beginner)</li>
                      <li>Web Development (HTML, CSS, JS)</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#192841] flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#192841]" />
                    <span>Area of Interest</span>
                  </h4>
                  <div className="p-4 rounded-xl bg-[#F5F1E8] border border-[#192841]/12 space-y-2 text-xs">
                    <div className="font-semibold text-[#192841]">Focus Fields:</div>
                    <ul className="space-y-1 text-[#46546A] pl-4 list-disc font-medium">
                      <li>Computer Networks</li>
                      <li>UI/UX Design</li>
                    </ul>
                  </div>
                </div>

              </div>

              {/* 4. PROJECT DETAILS (Exact from PDF) */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#192841] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#192841]" />
                  <span>Project Details</span>
                </h4>
                <div className="space-y-3 text-xs sm:text-sm">
                  
                  {/* Project 1 */}
                  <div className="p-4 rounded-xl bg-[#F5F1E8] border border-[#192841]/12 space-y-1.5">
                    <span className="font-bold text-[#192841]">
                      Employee Attendance Tracker:
                    </span>
                    <p className="text-[#46546A] leading-relaxed text-xs sm:text-[13px] font-normal">
                      Developed an Employee Attendance Tracker using Python to automate employee check-in and check-out processes. Integrated database support for storing attendance records and generating daily and monthly reports. Improved efficiency by minimizing manual entry errors and ensuring accurate attendance tracking.
                    </p>
                  </div>

                  {/* Project 2 */}
                  <div className="p-4 rounded-xl bg-[#F5F1E8] border border-[#192841]/12 space-y-1.5">
                    <span className="font-bold text-[#192841]">
                      HelpDesk Management System:
                    </span>
                    <p className="text-[#46546A] leading-relaxed text-xs sm:text-[13px] font-normal">
                      Developed a HelpDesk Management System using Java, HTML, CSS, and MySQL to streamline support ticket handling. Implemented separate dashboards for admin, staff, and users to manage queries efficiently. Enhanced workflow with features like ticket tracking, status updates, and automated notifications.
                    </p>
                  </div>

                </div>
              </div>

              {/* 5. COURSES & CERTIFICATIONS (Exact from PDF) */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#192841] flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#192841]" />
                  <span>Courses & Certifications</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-[#F5F1E8] border border-[#192841]/12 font-medium text-[#192841]">
                    • NPTEL Certification in “Introduction to Internet of Things” – 2024
                  </div>
                  <div className="p-3 rounded-xl bg-[#F5F1E8] border border-[#192841]/12 font-medium text-[#192841]">
                    • Coursera Course in “Python for Data Science” – 2024
                  </div>
                  <div className="p-3 rounded-xl bg-[#F5F1E8] border border-[#192841]/12 font-medium text-[#192841]">
                    • Great Learning Course in “Machine Learning Fundamentals” – 2025
                  </div>
                  <div className="p-3 rounded-xl bg-[#F5F1E8] border border-[#192841]/12 font-medium text-[#192841]">
                    • Udemy Course in “Web Development using HTML, CSS & JavaScript” – 2025
                  </div>
                </div>
              </div>

              {/* 6. ACHIEVEMENTS & PARTICIPATION (Exact from PDF) */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#192841] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#192841]" />
                  <span>Achievements & Participation</span>
                </h4>
                <div className="p-4 rounded-xl bg-[#F5F1E8] border border-[#192841]/12 space-y-1.5 text-xs text-[#46546A] font-medium">
                  <div>• Secured the first rank in Mathematics at the school level, demonstrating strong analytical and problem-solving skills.</div>
                  <div>• Attended a Machine Learning Workshop at IIT Chennai – 2024.</div>
                  <div>• Participated in a State-Level Hackathon conducted at SRM College – 2025.</div>
                  <div>• Participated in district level marathon – 2024.</div>
                </div>
              </div>

              {/* 7. SOFT SKILLS & INTERESTS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-[#F5F1E8] border border-[#192841]/12 space-y-1">
                  <span className="font-bold text-[#192841]">Soft Skills:</span>
                  <p className="text-[#46546A] font-medium">Teamwork • Self Motivated • Time Management</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F5F1E8] border border-[#192841]/12 space-y-1">
                  <span className="font-bold text-[#192841]">Interests & Activities:</span>
                  <p className="text-[#46546A] font-medium">Playing Chess • Web Development and UI Design</p>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-6 py-3.5 bg-[#F5F1E8] border-t border-[#192841]/10 flex items-center justify-between shrink-0">
          <span className="text-xs font-semibold text-[#6F7885]">
            Verified Official Resume • Manikandan Prabhu C.
          </span>
          <div className="flex gap-2">
            <button
              onClick={handleDownload}
              className="h-9 px-4 rounded-xl text-xs font-semibold bg-[#192841] text-white hover:bg-[#233758] inline-flex items-center gap-1.5 transition-all shadow-2xs"
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
