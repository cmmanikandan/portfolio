import React from "react";
import type { Project } from "../data/projectsData";
import { 
  Layers,
  ExternalLink,
  Globe
} from "lucide-react";

interface ProjectMockupPreviewProps {
  project: Project;
}

export const ProjectMockupPreview: React.FC<ProjectMockupPreviewProps> = ({ project }) => {
  if (project.image) {
    const domainText = project.liveDemoUrl 
      ? project.liveDemoUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
      : `${project.id}.vercel.app`;

    return (
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] max-h-[240px] sm:max-h-[280px] rounded-2xl bg-[#192841] border border-[#192841]/15 overflow-hidden flex flex-col group/preview shadow-sm">
        
        {/* Browser Top Chrome Bar */}
        <div className="h-7 sm:h-8 bg-[#192841] px-3 flex items-center justify-between border-b border-white/10 shrink-0 select-none">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-400/80" />
            <div className="w-2 h-2 rounded-full bg-amber-400/80" />
            <div className="w-2 h-2 rounded-full bg-emerald-400/80" />
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white/10 border border-white/10 text-[10px] text-[#FCFAF5]/90 font-mono max-w-[180px] sm:max-w-xs truncate">
            <Globe className="w-2.5 h-2.5 text-[#F7E7CE] shrink-0" />
            <span className="truncate">{domainText}</span>
          </div>

          <div className="text-[9.5px] font-bold text-[#F7E7CE] uppercase tracking-wider flex items-center gap-1">
            <span className="hidden sm:inline">Live</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </div>
        </div>

        {/* Screenshot Image Container */}
        <div className="relative flex-1 w-full overflow-hidden bg-[#0e1726]">
          <img
            src={project.image}
            alt={`${project.title} Screenshot`}
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover/preview:scale-[1.03]"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `/${project.id}.jpeg`;
            }}
          />
          
          {/* Subtle overlay gradient on bottom */}
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#192841]/60 to-transparent pointer-events-none" />

          {/* Quick pill tag */}
          <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-[#192841]/90 backdrop-blur-md border border-white/20 text-[9.5px] font-semibold text-[#FCFAF5] flex items-center gap-1.5 shadow-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span>{project.title}</span>
          </div>
        </div>
      </div>
    );
  }

  // Fallback if no image provided
  return (
    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] max-h-[240px] sm:max-h-[280px] rounded-2xl bg-[#FCFAF5] border border-[#192841]/15 overflow-hidden flex items-center justify-center text-[#6F7885] text-xs">
      <Layers className="w-6 h-6 mr-2 text-[#192841]" />
      <span>{project.title} Preview</span>
    </div>
  );
};
