import React from "react";
import type { Project } from "../data/projectsData";
import { 
  Printer, 
  TrendingUp, 
  Wrench, 
  Building2, 
  GraduationCap, 
  CheckCircle, 
  Clock, 
  Calendar,
  Layers,
  ArrowUpRight
} from "lucide-react";

interface ProjectMockupPreviewProps {
  project: Project;
}

export const ProjectMockupPreview: React.FC<ProjectMockupPreviewProps> = ({ project }) => {
  const renderMockupContent = () => {
    switch (project.mockupType) {
      case "marketplace":
        return (
          <div className="w-full h-full p-3.5 sm:p-5 flex flex-col justify-between text-[#192841]">
            <div className="flex items-center justify-between border-b border-[#192841]/10 pb-2.5">
              <div className="flex items-center gap-2">
                <Printer className="w-4 h-4 text-[#192841]" />
                <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#192841]">QUBINK PORTAL</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#F7E7CE] text-[#192841] border border-[#192841]/20 whitespace-nowrap">
                FIFO Active
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3 my-3">
              <div className="p-2 sm:p-3 rounded-xl bg-white border border-[#192841]/10 shadow-2xs space-y-0.5">
                <div className="text-[9.5px] sm:text-[10px] text-[#6F7885] uppercase font-semibold">Orders</div>
                <div className="text-xs sm:text-base font-bold text-[#192841]">128 Jobs</div>
              </div>
              <div className="p-2 sm:p-3 rounded-xl bg-white border border-[#192841]/10 shadow-2xs space-y-0.5">
                <div className="text-[9.5px] sm:text-[10px] text-[#6F7885] uppercase font-semibold">Rack</div>
                <div className="text-xs sm:text-base font-bold text-[#192841]">Rack B-04</div>
              </div>
              <div className="p-2 sm:p-3 rounded-xl bg-white border border-[#192841]/10 shadow-2xs space-y-0.5">
                <div className="text-[9.5px] sm:text-[10px] text-[#6F7885] uppercase font-semibold">Verification</div>
                <div className="text-xs sm:text-base font-bold text-[#192841]">QR Ready</div>
              </div>
            </div>

            <div className="p-2.5 sm:p-3 rounded-xl bg-[#192841] text-white text-xs flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 truncate">
                <Clock className="w-3.5 h-3.5 text-[#F7E7CE] shrink-0" />
                <span className="truncate">Assignment_Final.pdf</span>
              </div>
              <span className="text-[10px] font-semibold text-[#F7E7CE] shrink-0">Razorpay Verified</span>
            </div>
          </div>
        );

      case "finance":
        return (
          <div className="w-full h-full p-3.5 sm:p-5 flex flex-col justify-between text-[#192841]">
            <div className="flex items-center justify-between border-b border-[#192841]/10 pb-2.5">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#192841]" />
                <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#192841]">FINOVA DASHBOARD</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#F7E7CE] text-[#192841] border border-[#192841]/20 whitespace-nowrap">
                14-Day Streak 🔥
              </span>
            </div>

            <div className="space-y-2.5 my-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-[#6F7885]">Monthly Budget Cap</span>
                <span className="font-bold text-[#192841]">₹8,500 / ₹12,000</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#192841]/10 overflow-hidden">
                <div className="h-full w-[70%] bg-[#192841] rounded-full" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 sm:p-2.5 rounded-lg bg-white border border-[#192841]/10 flex justify-between items-center">
                <span className="text-[#6F7885] font-medium truncate">Books & Study</span>
                <span className="font-bold text-[#192841] shrink-0 ml-1">₹1,250</span>
              </div>
              <div className="p-2 sm:p-2.5 rounded-lg bg-white border border-[#192841]/10 flex justify-between items-center">
                <span className="text-[#6F7885] font-medium truncate">Project Tools</span>
                <span className="font-bold text-[#192841] shrink-0 ml-1">₹650</span>
              </div>
            </div>
          </div>
        );

      case "service":
        return (
          <div className="w-full h-full p-3.5 sm:p-5 flex flex-col justify-between text-[#192841]">
            <div className="flex items-center justify-between border-b border-[#192841]/10 pb-2.5">
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#192841]" />
                <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#192841]">SERVICEHUB DIRECTORY</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#F7E7CE] text-[#192841] border border-[#192841]/20 whitespace-nowrap">
                OTP Verified
              </span>
            </div>

            <div className="space-y-2 my-2">
              {[
                { name: "Electrical & AC Service", count: "24 Pros", rating: "4.9 ★" },
                { name: "Plumbing & Sanitization", count: "18 Pros", rating: "4.8 ★" },
                { name: "Car Wash & Detailing", count: "12 Pros", rating: "4.7 ★" }
              ].map((serv, idx) => (
                <div key={idx} className="p-2 sm:p-2.5 rounded-xl bg-white border border-[#192841]/10 flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#192841] truncate">{serv.name}</span>
                  <div className="flex items-center gap-2 shrink-0 ml-2">
                    <span className="text-[10px] text-[#6F7885] hidden sm:inline">{serv.count}</span>
                    <span className="font-bold text-[#192841]">{serv.rating}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-[10px] text-[#6F7885] text-right font-medium">
              Instant Dispatch Available
            </div>
          </div>
        );

      case "business":
        return (
          <div className="w-full h-full p-3.5 sm:p-5 flex flex-col justify-between text-[#192841]">
            <div className="flex items-center justify-between border-b border-[#192841]/10 pb-2.5">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#192841]" />
                <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#192841]">MANIKANDAN LATHE</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#F7E7CE] text-[#192841] border border-[#192841]/20 whitespace-nowrap">
                Tamil / English
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-3 my-2.5">
              <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-[#192841]/10 space-y-0.5">
                <div className="text-[9.5px] sm:text-[10px] font-bold text-[#6F7885]">LATHE WORKS</div>
                <div className="text-xs sm:text-sm font-bold text-[#192841]">Precision Milling</div>
                <div className="text-[10px] text-[#192841] font-medium">Daily Updates</div>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-[#192841]/10 space-y-0.5">
                <div className="text-[9.5px] sm:text-[10px] font-bold text-[#6F7885]">WELDING</div>
                <div className="text-xs sm:text-sm font-bold text-[#192841]">Industrial Structural</div>
                <div className="text-[10px] text-[#192841] font-medium">WhatsApp Leads</div>
              </div>
            </div>

            <div className="p-2 sm:p-2.5 rounded-lg bg-[#F7E7CE]/60 border border-[#192841]/15 text-[#192841] text-xs font-semibold flex items-center justify-between">
              <span>Direct WhatsApp Inquiry Enabled</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0 ml-1" />
            </div>
          </div>
        );

      case "productivity":
        return (
          <div className="w-full h-full p-3.5 sm:p-5 flex flex-col justify-between text-[#192841]">
            <div className="flex items-center justify-between border-b border-[#192841]/10 pb-2.5">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#192841]" />
                <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#192841]">PLACEMENTOS SYSTEM</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#F7E7CE] text-[#192841] border border-[#192841]/20 whitespace-nowrap">
                Active Prep
              </span>
            </div>

            <div className="space-y-1.5 sm:space-y-2 my-2">
              <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-[#192841]/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 truncate">
                  <CheckCircle className="w-3.5 h-3.5 text-[#192841] shrink-0" />
                  <span className="font-semibold text-[#192841] truncate">Core Java OOP Concepts</span>
                </div>
                <span className="text-[10px] font-bold text-[#192841] shrink-0 ml-2">Completed</span>
              </div>

              <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-[#192841]/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 truncate">
                  <Clock className="w-3.5 h-3.5 text-[#192841] shrink-0" />
                  <span className="font-semibold text-[#192841] truncate">Spring Boot REST API</span>
                </div>
                <span className="text-[10px] font-bold text-[#192841] shrink-0 ml-2">Focus Session</span>
              </div>

              <div className="p-2 sm:p-2.5 rounded-xl bg-white border border-[#192841]/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 truncate">
                  <Calendar className="w-3.5 h-3.5 text-[#192841] shrink-0" />
                  <span className="font-semibold text-[#192841] truncate">SQL Joins & Indexing</span>
                </div>
                <span className="text-[10px] font-bold text-[#192841] shrink-0 ml-2">Revision</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-[#6F7885] font-semibold">
              <span>Level 4 Developer</span>
              <span>Streak: 21 Days</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="flex items-center justify-center h-full text-[#6F7885] text-xs">
            <Layers className="w-6 h-6 mr-2 text-[#192841]" />
            PROJECT PREVIEW COMPOSITION
          </div>
        );
    }
  };

  return (
    <div className="relative w-full h-full min-h-[190px] sm:min-h-[220px] lg:min-h-[260px] rounded-2xl bg-[#FCFAF5] border border-[#192841]/15 overflow-hidden transition-colors duration-300">
      {/* Interactive Mockup Visual Container */}
      <div className="relative z-10 w-full h-full transform transition-transform duration-300 group-hover:scale-[1.01]">
        {renderMockupContent()}
      </div>

      {/* Floating Preview Badge */}
      <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 z-20 px-2 py-0.5 rounded-md bg-white/95 backdrop-blur-xs border border-[#192841]/15 text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider text-[#192841]">
        Preview
      </div>
    </div>
  );
};
