import React from "react";
import { minorProjects } from "../data/projectsData";
import { FolderGit2 } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

export const MinorProjects: React.FC = () => {
  return (
    <section className="py-16 bg-[#FCFAF5] border-t border-[#192841]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-[#192841]/10 gap-4">
          <div>
            <span className="text-xs font-bold tracking-[0.08em] text-[#192841] uppercase">
              ADDITIONAL CODE & EXPERIMENTS
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#192841] mt-1">
              More Code & Concepts
            </h3>
          </div>
          <p className="text-xs text-[#4B5563] max-w-md">
            Targeted utilities, backend CLI experiments, and coursework algorithms developed during continuous self-study.
          </p>
        </div>

        {/* Compact Grid with #FBF9F4 cards and #F5F1E8 chips */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {minorProjects.map((project) => (
            <div
              key={project.id}
              className="p-5 rounded-2xl bg-[#FBF9F4] border border-[#192841]/14 shadow-[0_4px_18px_rgba(25,40,65,0.04)] hover:border-[#192841]/30 hover:shadow-[0_8px_28px_rgba(25,40,65,0.08)] transition-all duration-200 flex flex-col justify-between space-y-4 group hover:-translate-y-0.5"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="p-2 rounded-lg bg-[#F5F1E8] border border-[#192841]/12 text-[#192841] group-hover:scale-105 transition-transform">
                    <FolderGit2 className="w-4 h-4" />
                  </span>
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-[#F5F1E8] text-[#192841] border border-[#192841]/10">
                    {project.category}
                  </span>
                </div>

                <h4 className="text-base font-extrabold text-[#192841] transition-colors">
                  {project.title}
                </h4>

                <p className="text-xs text-[#4B5563] leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-3 pt-2 border-t border-[#192841]/10">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#F5F1E8] text-[#192841] border border-[#192841]/10"
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
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#192841] hover:text-[#233758] transition-colors pt-1 group/link"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span className="link-hover">View Repository</span>
                    <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
