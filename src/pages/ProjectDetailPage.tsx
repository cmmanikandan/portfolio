import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { featuredProjects } from "../data/projectsData";
import { ProjectMockupPreview } from "../components/ProjectMockupPreview";
import { ArrowLeft, ArrowRight, ExternalLink, Target, Sparkles, CheckCircle2, Code, ShieldCheck, Cpu } from "lucide-react";
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

          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 px-5 rounded-xl text-[13.5px] font-semibold bg-[#192841] text-white hover:bg-[#233758] inline-flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 shadow-sm w-full sm:w-auto"
            >
              <span>Launch Live Project</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Visual Mockup Showcase Banner */}
      <div className="rounded-3xl overflow-hidden border border-[#192841]/15 shadow-md">
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
            Engineering the Answer
          </h3>
          <p className="text-[14.5px] sm:text-[15px] text-[#46546A] font-normal leading-[1.65]">
            {project.solution}
          </p>
        </div>
      </div>

      {/* Workflow & Architecture Flow: 1 col mobile, 5 col desktop */}
      <div className="space-y-4 sm:space-y-6">
        <div>
          <span className="text-[12px] font-semibold tracking-[0.08em] text-[#192841] uppercase">
            APPLICATION WORKFLOW & LIFECYCLE
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#192841] mt-1">
            How {project.title} Operates
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5 sm:gap-4">
          {project.workflowSteps.map((item, wIdx) => (
            <div
              key={wIdx}
              className="p-4 sm:p-5 rounded-2xl bg-[#FFFEFB] border border-[#192841]/12 shadow-[0_4px_18px_rgba(25,40,65,0.04)] space-y-2 flex flex-col justify-between hover:shadow-[0_8px_24px_rgba(25,40,65,0.08)] hover:border-[#192841]/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-[#192841]">
                  Step {item.step}
                </span>
                <h4 className="text-[14px] font-semibold text-[#192841]">
                  {item.title}
                </h4>
                <p className="text-xs text-[#46546A] font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Features & Tech Stack Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        
        {/* Features Card */}
        <div className="p-5 sm:p-8 rounded-3xl bg-[#FFFEFB] border border-[#192841]/12 shadow-[0_4px_18px_rgba(25,40,65,0.04)] space-y-4">
          <h3 className="text-lg font-bold text-[#192841] flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#192841]" />
            <span>Key Features & Capabilities</span>
          </h3>

          <div className="space-y-2">
            {project.features.map((feature, fIdx) => (
              <div
                key={fIdx}
                className="p-3 rounded-xl bg-[#F5F1E8] border border-[#192841]/10 text-xs sm:text-[13.5px] font-medium text-[#192841] flex items-start gap-2.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#192841] shrink-0 mt-2" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack & Role Card */}
        <div className="space-y-6">
          <div className="p-5 sm:p-8 rounded-3xl bg-[#FFFEFB] border border-[#192841]/12 shadow-[0_4px_18px_rgba(25,40,65,0.04)] space-y-4">
            <h3 className="text-lg font-bold text-[#192841] flex items-center gap-2">
              <Code className="w-5 h-5 text-[#192841]" />
              <span>Technology Stack</span>
            </h3>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1.5 rounded-xl text-xs font-medium bg-[#F5F1E8] text-[#192841] border border-[#192841]/15"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="p-5 sm:p-8 rounded-3xl bg-[#FFFEFB] border border-[#192841]/12 shadow-[0_4px_18px_rgba(25,40,65,0.04)] space-y-2">
            <h3 className="text-base font-bold text-[#192841]">
              My Engineering Role
            </h3>
            <p className="text-xs sm:text-[14px] text-[#46546A] font-normal leading-[1.65]">
              {project.myRole}
            </p>
          </div>
        </div>

      </div>

      {/* Challenges & Key Learnings 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        
        {/* Challenges */}
        <div className="p-5 sm:p-8 rounded-3xl bg-[#FFFEFB] border border-[#192841]/12 space-y-2.5">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#192841]">
            <ShieldCheck className="w-4 h-4" />
            <span>Technical Challenges Overcome</span>
          </div>
          <p className="text-[13.5px] sm:text-[14px] text-[#46546A] font-normal leading-[1.65]">
            {project.challenges}
          </p>
        </div>

        {/* Learnings */}
        <div className="p-5 sm:p-8 rounded-3xl bg-[#FFFEFB] border border-[#192841]/12 space-y-2.5">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#192841]">
            <Cpu className="w-4 h-4" />
            <span>Key Engineering Takeaways</span>
          </div>
          <div className="space-y-2">
            {project.learnings.map((learning, lIdx) => (
              <div key={lIdx} className="flex items-start gap-2 text-xs sm:text-[13px] text-[#192841] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#192841] shrink-0 mt-0.5" />
                <span>{learning}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Next Project Footer Card */}
      <div className="p-6 sm:p-10 rounded-3xl bg-[#192841] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1">
          <span className="text-xs font-semibold tracking-widest text-[#F7E7CE] uppercase">
            NEXT CASE STUDY
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            {nextProject.title} — <span className="text-[#F7E7CE] font-medium italic">{nextProject.subtitle}</span>
          </h3>
        </div>

        <Link
          to={`/projects/${nextProject.id}`}
          className="h-12 px-6 rounded-xl bg-[#F7E7CE] text-[#192841] hover:bg-[#FAF0E2] font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 shadow-sm shrink-0 w-full sm:w-auto"
        >
          <span>Read Next Case Study</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
};
