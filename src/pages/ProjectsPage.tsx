import React from "react";
import { Link } from "react-router-dom";
import { featuredProjects, minorProjects } from "../data/projectsData";
import { ProjectMockupPreview } from "../components/ProjectMockupPreview";
import { ArrowRight, ExternalLink, Sparkles, FolderGit2 } from "lucide-react";
import { GithubIcon } from "../components/BrandIcons";

export const ProjectsPage: React.FC = () => {
  return (
    <div className="py-10 sm:py-16 md:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
      
      {/* Header */}
      <div className="max-w-3xl space-y-2.5 sm:space-y-3">
        <span className="text-[12px] font-semibold tracking-[0.08em] text-[#192841] uppercase">
          03 — SELECTED WORK
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#192841]">
          Projects I’ve built to solve practical problems.
        </h1>
        <p className="text-[15px] sm:text-[16.5px] text-[#46546A] font-normal leading-[1.65]">
          Detailed case studies demonstrating full stack architecture, problem breakdown, database modeling, and live software delivery.
        </p>
      </div>

      {/* Featured Projects Directory */}
      <div className="space-y-8 sm:space-y-12">
        {featuredProjects.map((project, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={project.id}
              className="p-5 sm:p-8 lg:p-10 rounded-3xl bg-[#FFFEFB] border border-[#192841]/12 shadow-[0_4px_18px_rgba(25,40,65,0.04)] hover:shadow-[0_8px_24px_rgba(25,40,65,0.08)] hover:border-[#192841]/35 hover:-translate-y-0.5 transition-all duration-200 flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch lg:items-center group"
            >
              {/* Text Column */}
              <div className={`lg:col-span-6 space-y-4 ${isEven ? "" : "lg:order-2"}`}>
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl font-mono font-bold text-[#192841]">
                    {project.number}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F5F1E8] text-[#192841] border border-[#192841]/12">
                    {project.category}
                  </span>
                </div>

                <div className="space-y-0.5">
                  <Link to={`/projects/${project.id}`}>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#192841] tracking-tight hover:text-[#233758] transition-colors">
                      {project.title}
                    </h2>
                  </Link>
                  <p className="text-[13px] sm:text-[14px] font-medium text-[#6F7885]">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-[14px] sm:text-[15px] text-[#46546A] font-normal leading-[1.6]">
                  {project.description}
                </p>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#F7E7CE]/70 border border-[#192841]/15 text-xs text-[#192841]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="italic font-medium">{project.highlight}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                  {project.technologies.slice(0, 5).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11.5px] sm:text-[12px] font-medium bg-[#F5F1E8] text-[#192841] border border-[#192841]/12"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-2 py-1 rounded-md text-[11px] font-normal text-[#6F7885] italic">
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                  <Link
                    to={`/projects/${project.id}`}
                    className="h-11 px-5 rounded-xl text-[14px] font-semibold bg-[#192841] text-white hover:bg-[#233758] inline-flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 shadow-2xs group w-full sm:w-auto"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-11 px-4 rounded-xl text-[13.5px] font-semibold border border-[#192841]/25 text-[#192841] bg-[#F5F1E8] hover:bg-[#F7E7CE] hover:-translate-y-0.5 inline-flex items-center justify-center gap-1.5 transition-all shadow-2xs w-full sm:w-auto"
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
                      className="h-11 px-3 inline-flex items-center justify-center gap-1.5 text-[13.5px] font-semibold text-[#192841] hover:text-[#233758] transition-colors link-hover w-full sm:w-auto"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Visual Preview Column */}
              <div className={`lg:col-span-6 w-full rounded-2xl overflow-hidden border border-[#192841]/15 transition-transform duration-200 group-hover:scale-[1.01] min-h-[190px] sm:min-h-[220px] ${isEven ? "" : "lg:order-1"}`}>
                <Link to={`/projects/${project.id}`}>
                  <ProjectMockupPreview project={project} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Experiments Section */}
      <div className="pt-10 sm:pt-12 border-t border-[#192841]/10 space-y-6 sm:space-y-8">
        <div>
          <span className="text-[12px] font-semibold tracking-[0.08em] text-[#192841] uppercase">
            ADDITIONAL EXPERIMENTS & CLI UTILITIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#192841] mt-1">
            More Code & Concepts
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {minorProjects.map((project) => (
            <div
              key={project.id}
              className="p-5 rounded-2xl bg-[#FFFEFB] border border-[#192841]/12 shadow-[0_4px_18px_rgba(25,40,65,0.04)] hover:shadow-[0_8px_24px_rgba(25,40,65,0.08)] hover:border-[#192841]/30 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="p-2 rounded-lg bg-[#F5F1E8] text-[#192841]">
                    <FolderGit2 className="w-4 h-4" />
                  </span>
                  <span className="text-[10.5px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[#F5F1E8] text-[#192841]">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-[16px] font-bold text-[#192841]">
                  {project.title}
                </h3>

                <p className="text-[13px] text-[#46546A] font-normal leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-3 pt-2 border-t border-[#192841]/10">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-[#F5F1E8] text-[#192841] border border-[#192841]/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#192841] hover:text-[#233758] transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                    <span>→</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
