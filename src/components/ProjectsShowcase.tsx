import React from "react";
import { featuredProjects } from "../data/projectsData";
import type { Project } from "../data/projectsData";
import { ProjectMockupPreview } from "./ProjectMockupPreview";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

interface ProjectsShowcaseProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-[#FCFAF5] scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-2">
          <span className="text-xs font-bold tracking-[0.08em] text-[#192841] uppercase">
            03 — SELECTED WORK
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#192841]">
            Things I’ve built.
          </h2>
          <p className="text-sm sm:text-base text-[#4B5563] pt-1">
            A selection of practical software projects built to solve problems, explore full stack architecture, and build end-to-end applications.
          </p>
        </div>

        {/* Featured Projects List */}
        <div className="space-y-16 lg:space-y-24">
          {featuredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={project.id}
                className="group relative p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#FBF9F4] border border-[#192841]/14 shadow-[0_4px_18px_rgba(25,40,65,0.04)] hover:shadow-[0_8px_28px_rgba(25,40,65,0.08)] hover:border-[#192841]/30 transition-all duration-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
                  
                  {/* Text Column */}
                  <div className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    
                    {/* Top Row: Project Number & Category */}
                    <div className="flex items-center justify-between">
                      <span className="text-2xl sm:text-3xl font-mono font-black text-[#192841]">
                        {project.number}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F5F1E8] text-[#192841] border border-[#192841]/12">
                        {project.category}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="space-y-1 cursor-pointer" onClick={() => onSelectProject(project)}>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#192841] tracking-tight group-hover:translate-x-1 transition-transform duration-200">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-bold text-[#192841]/85">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#4B5563] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlight pill using #F7E7CE */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#F7E7CE]/70 border border-[#192841]/15 text-xs font-bold text-[#192841]">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{project.highlight}</span>
                    </div>

                    {/* Technology tags using #F5F1E8 */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.technologies.slice(0, 5).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#F5F1E8] text-[#192841] border border-[#192841]/12 hover:bg-[#F7E7CE] transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2 py-1 rounded-md text-[10px] font-bold text-[#4B5563]">
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>

                    {/* Standardized Placement Action Buttons */}
                    <div className="pt-3 flex flex-wrap items-center gap-3">
                      {/* Primary: View Case Study */}
                      <button
                        onClick={() => onSelectProject(project)}
                        className="h-11 px-5 rounded-xl text-xs font-bold bg-[#192841] text-white hover:bg-[#233758] hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 transition-all shadow-2xs group/btn"
                      >
                        <span>View Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </button>

                      {/* Secondary: GitHub */}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-11 px-4.5 rounded-xl text-xs font-bold border border-[#192841]/25 text-[#192841] bg-[#F5F1E8] hover:bg-[#F7E7CE] hover:-translate-y-0.5 inline-flex items-center justify-center gap-1.5 transition-all shadow-2xs"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>GitHub</span>
                        </a>
                      )}

                      {/* Text link: Live Demo */}
                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-11 px-3 inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#192841] hover:text-[#233758] transition-colors link-hover"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>

                  </div>

                  {/* Interactive Visual Mockup Preview */}
                  <div
                    className={`lg:col-span-6 cursor-pointer overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-[1.01] ${isEven ? "lg:order-2" : "lg:order-1"}`}
                    onClick={() => onSelectProject(project)}
                  >
                    <ProjectMockupPreview project={project} />
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
