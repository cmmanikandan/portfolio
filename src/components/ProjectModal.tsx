import React, { useEffect } from "react";
import type { Project } from "../data/projectsData";
import { X, ExternalLink, CheckCircle2, Code, Target, Sparkles } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { ProjectMockupPreview } from "./ProjectMockupPreview";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto bg-[#192841]/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Background overlay click trigger */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Card Content Container using #FBF9F4 */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#FBF9F4] border border-[#192841]/20 shadow-2xl z-10 animate-in zoom-in-95 duration-200">
        
        {/* Modal Sticky Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#FBF9F4]/95 backdrop-blur-md border-b border-[#192841]/10">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-[#F7E7CE] text-[#192841]">
              {project.number}
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-[#192841]">
                {project.title}
              </h3>
              <p className="text-xs font-bold text-[#192841]/85">
                {project.subtitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full text-[#4B5563] hover:text-[#192841] hover:bg-[#F5F1E8] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Main Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Visual Mockup Banner */}
          <div className="rounded-2xl overflow-hidden border border-[#192841]/15 shadow-2xs">
            <ProjectMockupPreview project={project} />
          </div>

          {/* Action CTAs & Highlights using #F5F1E8 */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#F5F1E8] border border-[#192841]/15">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F7E7CE] text-[#192841]">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FCFAF5] text-[#192841] border border-[#192841]/15">
                {project.highlight}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 px-4 rounded-xl text-xs font-bold bg-[#FCFAF5] border border-[#192841] text-[#192841] hover:bg-[#F7E7CE] inline-flex items-center gap-1.5 transition-all shadow-2xs"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              )}
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 px-4 rounded-xl text-xs font-bold bg-[#192841] text-white hover:bg-[#233758] inline-flex items-center gap-1.5 transition-all shadow-2xs"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Overview Grid: Problem & Solution using #F5F1E8 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-[#F5F1E8] border border-[#192841]/15 space-y-2">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#192841]">
                <Target className="w-4 h-4 text-[#192841]" />
                <span>The Problem</span>
              </div>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F5F1E8] border border-[#192841]/15 space-y-2">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#192841]">
                <Sparkles className="w-4 h-4 text-[#192841]" />
                <span>The Solution</span>
              </div>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features List */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#192841] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#192841]" />
              <span>Key Features & Functionality</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[#F5F1E8] border border-[#192841]/15 text-xs font-semibold text-[#192841] flex items-start gap-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#192841] shrink-0 mt-1.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#192841] flex items-center gap-2">
              <Code className="w-4 h-4 text-[#192841]" />
              <span>Technology Stack</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#F5F1E8] text-[#192841] border border-[#192841]/15"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Role, Challenges & Outcome */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#192841]/10 text-xs">
            <div className="space-y-1.5">
              <div className="font-extrabold uppercase tracking-wider text-[#192841]">My Role</div>
              <p className="text-[#4B5563] leading-relaxed">{project.myRole}</p>
            </div>
            <div className="space-y-1.5">
              <div className="font-extrabold uppercase tracking-wider text-[#192841]">Technical Challenges</div>
              <p className="text-[#4B5563] leading-relaxed">{project.challenges}</p>
            </div>
            <div className="space-y-1.5">
              <div className="font-extrabold uppercase tracking-wider text-[#192841]">Project Outcome</div>
              <p className="text-[#4B5563] leading-relaxed">{project.outcome}</p>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 z-20 flex items-center justify-between px-6 py-4 bg-[#F5F1E8] border-t border-[#192841]/10">
          <span className="text-xs font-bold text-[#4B5563]">Case Study Detail • {project.title}</span>
          <button
            onClick={onClose}
            className="h-10 px-4 rounded-xl text-xs font-bold bg-[#192841] text-white hover:bg-[#233758] transition-colors"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
};
