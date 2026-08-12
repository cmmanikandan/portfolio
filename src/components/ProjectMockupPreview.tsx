import React from "react";
import type { Project } from "../data/projectsData";
import { 
  Layers,
  ExternalLink,
  Globe
} from "lucide-react";

interface ProjectMockupPreviewProps {
  project: Project;
  variant?: "card" | "detail";
}

export const ProjectMockupPreview: React.FC<ProjectMockupPreviewProps> = ({ 
  project, 
  variant = "card" 
}) => {
  if (project.image) {
    const domainText = project.liveDemoUrl 
      ? project.liveDemoUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
      : `${project.id}.vercel.app`;

    // Full Uncropped Detail View for Project Case Study Page
    if (variant === "detail") {
      return (
        <div className="w-full rounded-2xl sm:rounded-3xl bg-[#192841] border border-[#192841]/20 overflow-hidden flex flex-col shadow-xl">
          
          {/* Top Browser Chrome Bar */}
          <div className="h-9 sm:h-10 bg-[#192841] px-4 flex items-center justify-between border-b border-white/10 shrink-0 select-none">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
            </div>

            <div className="flex items-center gap-2 px-3.5 py-1 rounded-md bg-white/10 border border-white/10 text-xs text-[#FCFAF5]/90 font-mono max-w-sm truncate">
              <Globe className="w-3.5 h-3.5 text-[#F7E7CE] shrink-0" />
              <span className="truncate">{domainText}</span>
            </div>

            {project.liveDemoUrl ? (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#F7E7CE] hover:text-white transition-colors uppercase tracking-wider flex items-center gap-1.5"
              >
                <span>Visit Live App</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <div className="text-xs font-bold text-[#F7E7CE] uppercase tracking-wider flex items-center gap-1">
                <span>Production</span>
              </div>
            )}
          </div>

          {/* Full Screen High-Res Uncropped Screenshot */}
          <div className="w-full bg-[#0e1726] overflow-hidden flex items-center justify-center">
            <img
              src={project.image}
              alt={`${project.title} Full Production Screenshot`}
              className="w-full h-auto block object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `/${project.id}.jpeg`;
              }}
            />
          </div>
        </div>
      );
    }

    // Card View (Home & Projects listing page)
    return (
      <div className="relative w-full h-full min-h-[220px] sm:min-h-[260px] lg:min-h-[280px] rounded-2xl bg-[#192841] border border-[#192841]/15 overflow-hidden flex flex-col group/preview shadow-md">
        
        {/* Browser Top Chrome Bar */}
        <div className="h-8 sm:h-9 bg-[#192841] px-3.5 flex items-center justify-between border-b border-white/10 shrink-0 select-none">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
          </div>

          <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white/10 border border-white/10 text-[10.5px] text-[#FCFAF5]/90 font-mono max-w-[180px] sm:max-w-xs truncate">
            <Globe className="w-3 h-3 text-[#F7E7CE] shrink-0" />
            <span className="truncate">{domainText}</span>
          </div>

          <div className="text-[10px] font-bold text-[#F7E7CE] uppercase tracking-wider flex items-center gap-1">
            <span className="hidden sm:inline">Live</span>
            <ExternalLink className="w-3 h-3" />
          </div>
        </div>

        {/* Screenshot Image Container */}
        <div className="relative flex-1 w-full overflow-hidden bg-[#0e1726] min-h-[180px] sm:min-h-[220px]">
          <img
            src={project.image}
            alt={`${project.title} Screenshot`}
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover/preview:scale-[1.03]"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `/${project.id}.jpeg`;
            }}
          />
          
          {/* Subtle overlay gradient on bottom */}
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#192841]/60 to-transparent pointer-events-none" />

          {/* Quick pill tag */}
          <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-[#192841]/90 backdrop-blur-md border border-white/20 text-[10px] font-semibold text-[#FCFAF5] flex items-center gap-1.5 shadow-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span>{project.title} Live App</span>
          </div>
        </div>
      </div>
    );
  }

  // Fallback if no image provided
  return (
    <div className="relative w-full h-full min-h-[190px] sm:min-h-[220px] lg:min-h-[260px] rounded-2xl bg-[#FCFAF5] border border-[#192841]/15 overflow-hidden flex items-center justify-center text-[#6F7885] text-xs">
      <Layers className="w-6 h-6 mr-2 text-[#192841]" />
      <span>{project.title} Preview</span>
    </div>
  );
};
