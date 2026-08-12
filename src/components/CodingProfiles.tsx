import React from "react";
import { siteConfig } from "../config/siteConfig";
import { Code2, Award, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export const CodingProfiles: React.FC = () => {
  const profiles = [
    {
      name: "GitHub",
      description: "Projects & open-source code repositories",
      url: siteConfig.githubUrl,
      icon: GithubIcon,
      buttonText: "View GitHub"
    },
    {
      name: "LinkedIn",
      description: "Professional profile & networking",
      url: siteConfig.linkedinUrl,
      icon: LinkedinIcon,
      buttonText: "Connect on LinkedIn"
    },
    {
      name: "LeetCode",
      description: "Data structures & algorithmic problem solving",
      url: siteConfig.leetcodeUrl,
      icon: Code2,
      buttonText: "View LeetCode"
    },
    {
      name: "HackerRank",
      description: "Coding practice & domain skills verification",
      url: siteConfig.hackerrankUrl,
      icon: Award,
      buttonText: "View HackerRank"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FCFAF5] border-t border-[#192841]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-14 space-y-2">
          <span className="text-xs font-bold tracking-[0.08em] text-[#192841] uppercase">
            CODING PROFILES & NETWORK
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#192841]">
            Find me online.
          </h2>
          <p className="text-sm sm:text-base text-[#4B5563]">
            Explore my code repositories, technical practice and professional connections.
          </p>
        </div>

        {/* Profiles Grid with #FBF9F4 cards and #F5F1E8 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, idx) => {
            const Icon = profile.icon;
            return (
              <a
                key={idx}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-[#FBF9F4] border border-[#192841]/14 shadow-[0_4px_18px_rgba(25,40,65,0.04)] hover:border-[#192841]/35 hover:shadow-[0_8px_28px_rgba(25,40,65,0.08)] transition-all duration-200 flex flex-col justify-between space-y-6 group hover:-translate-y-0.5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-[#F5F1E8] text-[#192841] border border-[#192841]/15 shadow-2xs group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#192841]/60 group-hover:text-[#192841] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold text-[#192841] transition-colors">
                      {profile.name}
                    </h3>
                    <p className="text-xs text-[#4B5563] mt-1.5 leading-relaxed">
                      {profile.description}
                    </p>
                  </div>
                </div>

                <div className="pt-2 text-xs font-bold text-[#192841] flex items-center gap-1 link-hover w-fit">
                  <span>{profile.buttonText}</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">↗</span>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};
