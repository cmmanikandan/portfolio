import React from "react";
import { Link } from "react-router-dom";
import { siteConfig, navItems } from "../config/siteConfig";
import { Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon, HackerRankIcon } from "./BrandIcons";
import logoImg from "../assets/logo.png";

export const Footer: React.FC = () => {
  const socialProfiles = [
    {
      name: "GitHub",
      url: siteConfig.githubUrl,
      icon: GithubIcon,
    },
    {
      name: "LinkedIn",
      url: siteConfig.linkedinUrl,
      icon: LinkedinIcon,
    },
    {
      name: "LeetCode",
      url: siteConfig.leetcodeUrl,
      icon: LeetCodeIcon,
    },
    {
      name: "HackerRank",
      url: siteConfig.hackerrankUrl,
      icon: HackerRankIcon,
    },
  ];

  return (
    <footer className="mt-auto w-full bg-[#192841] text-[#FCFAF5] border-t border-white/10 py-10 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-white/10">
          
          {/* Left Brand Identity with official MP Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 select-none transition-all duration-200 hover:opacity-90 hover:translate-x-[1px]"
          >
            <img
              src={logoImg}
              alt="MP Logo"
              className="h-[32px] sm:h-[36px] md:h-[38px] w-auto object-contain shrink-0"
            />
            <div className="space-y-0.5">
              <span
                className="text-[18px] md:text-[20px] tracking-[-0.02em] leading-none text-white block font-bold"
                style={{
                  fontFamily: "'Plus Jakarta Sans', 'Manrope', 'Inter', sans-serif"
                }}
              >
                Manikandan Prabhu
              </span>
              <p className="text-[13px] font-medium text-[#F7E7CE]">
                Java Full Stack Developer
              </p>
              <p className="text-[12px] text-[#FCFAF5]/70">
                {siteConfig.collegeShort} • {siteConfig.location}
              </p>
            </div>
          </Link>

          {/* Quick Navigation Links: 2-column on mobile, flex row on desktop */}
          <nav className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-x-6 gap-y-2.5 text-[13.5px] sm:text-[14px] font-medium">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-[#FCFAF5]/90 hover:text-[#F7E7CE] transition-colors py-1"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social Links Icons: 40px x 40px */}
          <div className="flex items-center space-x-2.5">
            {socialProfiles.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.name} Profile`}
                  className="w-[40px] h-[40px] rounded-xl bg-white/10 hover:bg-[#233758] text-white hover:text-[#F7E7CE] border border-white/15 hover:border-white/30 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-2xs"
                >
                  <Icon className="w-[18px] h-[18px]" />
                </a>
              );
            })}
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#FCFAF5]/70 gap-2 sm:gap-4">
          <div>
            © 2026 Manikandan Prabhu. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 font-medium text-[#FCFAF5]">
            <span>Built with curiosity & code.</span>
            <Heart className="w-3.5 h-3.5 text-[#F7E7CE] fill-[#F7E7CE]" />
          </div>
        </div>

      </div>
    </footer>
  );
};
