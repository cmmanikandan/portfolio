import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { featuredProjects } from "../data/projectsData";
import { ProjectMockupPreview } from "../components/ProjectMockupPreview";
import { ArrowLeft, ArrowRight, ExternalLink, Target, Sparkles, CheckCircle2, Code, ShieldCheck, Cpu, Lock } from "lucide-react";
import { GithubIcon } from "../components/BrandIcons";

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const projectIndex = featuredProjects.findIndex((p) => p.id === id);
  if (projectIndex === -1) {
    return <Navigate to="/projects" replace />;
  }

  const project = featuredProjects[projectIndex];
  const nextProjectIndex = (projectIndex + 1) % featuredProjects.length;
  const nextProject = featuredProjects[nextProjectIndex];

  return (
    <div className="py-10 sm:py-16 md:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
      
      {/* Top Breadcrumb / Back Link */}
      <div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs sm:text-[14px] font-semibold text-[#192841] hover:text-[#233758] transition-colors link-hover group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Case Study Hero Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-xl sm:text-2xl font-mono font-bold text-[#192841]">
            {project.number}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F5F1E8] text-[#192841] border border-[#192841]/12">
            {project.category}
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#192841]">
          {project.title}
        </h1>

        <p className="text-[15px] sm:text-[19px] font-medium text-[#6F7885]">
          {project.subtitle}
        </p>

        <p className="text-[14.5px] sm:text-[16.5px] text-[#46546A] font-normal leading-[1.65] max-w-3xl pt-1">
          {project.description}
        </p>

        {/* Live / Code Action Links */}
        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 px-5 rounded-xl text-[13.5px] font-semibold bg-[#192841] text-white hover:bg-[#233758] inline-flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 shadow-sm w-full sm:w-auto"
            >
              <span>Launch Live Project</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#F7E7CE]" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 px-5 rounded-xl text-[13.5px] font-semibold border border-[#192841]/25 text-[#192841] bg-[#F5F1E8] hover:bg-[#F7E7CE] inline-flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 shadow-2xs w-full sm:w-auto"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View GitHub Repository</span>
            </a>
          )}

          {project.isPrivateRepo && (
            <span className="h-11 px-4 rounded-xl text-[13px] font-medium border border-[#192841]/15 text-[#6F7885] bg-[#F5F1E8] inline-flex items-center justify-center gap-1.5 shadow-2xs w-full sm:w-auto">
              <Lock className="w-3.5 h-3.5 text-[#6F7885]" />
              <span>Private Repository</span>
            </span>
          )}
        </div>
      </div>

      {/* Visual Mockup Showcase Banner */}
      <div className="w-full max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-md border border-[#192841]/15">
        <ProjectMockupPreview project={project} />
      </div>

      {/* Problem vs Solution 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <div className="p-5 sm:p-8 rounded-3xl bg-[#FFFEFB] border border-[#192841]/12 shadow-[0_4px_18px_rgba(25,40,65,0.04)] space-y-3 hover:shadow-[0_8px_24px_rgba(25,40,65,0.08)] hover:border-[#192841]/30 transition-all duration-200">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#192841]">
            <Target className="w-4 h-4 text-[#192841]" />
            <span>The Problem</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-[#192841]">
            What Needed Solving
          </h3>
          <p className="text-[14.5px] sm:text-[15px] text-[#46546A] font-normal leading-[1.65]">
            {project.problem}
          </p>
        </div>

        <div className="p-5 sm:p-8 rounded-3xl bg-[#FFFEFB] border border-[#192841]/12 shadow-[0_4px_18px_rgba(25,40,65,0.04)] space-y-3 hover:shadow-[0_8px_24px_rgba(25,40,65,0.08)] hover:border-[#192841]/30 transition-all duration-200">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#192841]">
            <Sparkles className="w-4 h-4 text-[#192841]" />
            <span>The Solution</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-[#192841]">
            Engineering Approach
          </h3>
          <p className="text-[14.5px] sm:text-[15px] text-[#46546A] font-normal leading-[1.65]">
            {project.solution}
          </p>
        </div>
      </div>

      {/* End-to-End System Workflow Steps */}
      <div className="p-5 sm:p-8 rounded-3xl bg-[#FFFEFB] border border-[#192841]/12 shadow-[0_4px_18px_rgba(25,40,65,0.04)] space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-semibold tracking-wider text-[#6F7885] uppercase">
            ARCHITECTURAL PIPELINE
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#192841]">
            How the System Operates
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {project.workflowSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-[#F5F1E8]/70 border border-[#192841]/10 space-y-2 hover:bg-[#F5F1E8] transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#192841] bg-[#FFFEFB] px-2 py-0.5 rounded border border-[#192841]/15">
                  STEP {step.step}
                </span>
              </div>
              <h4 className="text-[15px] font-bold text-[#192841]">
                {step.title}
              </h4>
              <p className="text-xs text-[#46546A] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Features & Core Capabilities */}
      <div className="p-5 sm:p-8 rounded-3xl bg-[#FFFEFB] border border-[#192841]/12 shadow-[0_4px_18px_rgba(25,40,65,0.04)] space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-semibold tracking-wider text-[#6F7885] uppercase">
            CORE CAPABILITIES
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#192841]">
            Key Features Implemented
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {project.features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F5F1E8]/50 border border-[#192841]/10"
            >
              <CheckCircle2 className="w-4 h-4 text-[#192841] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-[13.5px] font-medium text-[#192841] leading-snug">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Chips */}
      <div className="p-5 sm:p-8 rounded-3xl bg-[#192841] text-white shadow-md space-y-4">
        <div className="space-y-1">
          <span className="text-xs font-semibold tracking-widest text-[#F7E7CE] uppercase">
            TECHNOLOGY STACK
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Tools & Frameworks Used
          </h3>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3.5 py-1.5 rounded-xl text-xs sm:text-[13px] font-semibold bg-white/10 text-[#FCFAF5] border border-white/15"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Role, Engineering Takeaways & Outcome */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="p-5 sm:p-6 rounded-2xl bg-[#FFFEFB] border border-[#192841]/12 shadow-[0_4px_18px_rgba(25,40,65,0.04)] space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#192841]">
            <Cpu className="w-4 h-4" />
            <span>My Contribution</span>
          </div>
          <p className="text-xs sm:text-sm text-[#46546A] leading-relaxed">
            {project.myRole}
          </p>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-[#FFFEFB] border border-[#192841]/12 shadow-[0_4px_18px_rgba(25,40,65,0.04)] space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#192841]">
            <Code className="w-4 h-4" />
            <span>Key Engineering Takeaways</span>
          </div>
          <ul className="text-xs sm:text-sm text-[#46546A] space-y-1.5 list-disc pl-4 leading-relaxed">
            {project.learnings.map((learning, idx) => (
              <li key={idx}>{learning}</li>
            ))}
          </ul>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-[#FFFEFB] border border-[#192841]/12 shadow-[0_4px_18px_rgba(25,40,65,0.04)] space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#192841]">
            <ShieldCheck className="w-4 h-4" />
            <span>Project Impact & Outcome</span>
          </div>
          <p className="text-xs sm:text-sm text-[#46546A] leading-relaxed">
            {project.outcome}
          </p>
        </div>
      </div>

      {/* Next Project Footer Card */}
      <div className="pt-6 border-t border-[#192841]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#6F7885]">
          NEXT CASE STUDY
        </span>
        <Link
          to={`/projects/${nextProject.id}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-[#192841] hover:text-[#233758] link-hover group"
        >
          <span>{nextProject.number} — {nextProject.title}</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>

    </div>
  );
};
