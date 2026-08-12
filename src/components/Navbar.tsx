import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, FileText } from "lucide-react";
import { navItems, siteConfig } from "../config/siteConfig";
import { GithubIcon, LinkedinIcon, LeetCodeIcon, HackerRankIcon } from "./BrandIcons";
import logoImg from "../assets/logo.png";

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Track scroll position for subtle bottom border
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  // Check if a navigation item is currently active
  const isItemActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-40 transition-all duration-200 bg-[#FCFAF5] ${
        isScrolled
          ? "border-b border-[#192841]/12 shadow-[0_2px_12px_rgba(25,40,65,0.04)]"
          : "border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-[64px] md:h-[72px] flex items-center justify-between gap-4">
          
          {/* LEFT: Official [MP Logo] + Manikandan Prabhu */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 sm:gap-3 select-none shrink-0 transition-all duration-200 hover:opacity-90 hover:translate-x-[1px] group"
          >
            <div className="h-[34px] sm:h-[38px] md:h-[40px] w-[34px] sm:w-[38px] md:w-[40px] flex items-center justify-center shrink-0">
              <img
                src={logoImg}
                alt="MP Official Brand Logo"
                className="h-full w-full object-contain block drop-shadow-2xs"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/logo.png";
                }}
              />
            </div>

            <span
              className="text-[18px] sm:text-[19px] md:text-[20px] tracking-tight leading-none text-[#192841] whitespace-nowrap font-bold"
              style={{
                fontFamily: "'Plus Jakarta Sans', 'Manrope', 'Inter', sans-serif"
              }}
            >
              Manikandan Prabhu
            </span>
          </Link>

          {/* CENTER: Refined Desktop Navigation Pill */}
          <nav className="hidden lg:flex items-center space-x-1 bg-[#F5F1E8]/90 p-1 rounded-full border border-[#192841]/10 shadow-2xs">
            {navItems.map((item) => {
              const active = isItemActive(item.path);

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`px-3.5 py-1.5 rounded-full text-[13.5px] transition-all duration-200 whitespace-nowrap ${
                    active
                      ? "text-white bg-[#192841] font-semibold shadow-xs"
                      : "text-[#46546A] font-medium hover:text-[#192841] hover:bg-white/80"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT: Resume Button (Desktop) */}
          <div className="hidden lg:flex items-center shrink-0">
            <button
              onClick={onOpenResumeModal}
              className="h-[40px] min-w-[110px] inline-flex items-center justify-center gap-2 px-4 text-[13.5px] font-semibold rounded-full bg-[#192841] text-white hover:bg-[#233758] hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(25,40,65,0.12)] transition-all duration-200 active:scale-[0.98] group"
            >
              <FileText className="w-[15px] h-[15px] text-white transition-transform duration-200 group-hover:scale-105" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Hamburger / Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-[44px] h-[44px] rounded-xl bg-[#F7F3EB] border border-[#192841]/15 text-[#192841] hover:bg-[#F7E7CE] transition-colors focus:outline-none flex items-center justify-center shadow-2xs"
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Navigation Menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#192841]" />
              ) : (
                <Menu className="w-5 h-5 text-[#192841]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop & Full Clean Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[64px] bottom-0 z-50 flex flex-col justify-start">
          {/* Backdrop overlay (tap outside to close) */}
          <div
            className="fixed inset-0 top-[64px] bg-[#192841]/25 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Menu Panel */}
          <div className="relative bg-[#FCFAF5] border-b border-[#192841]/15 shadow-xl px-5 py-6 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-64px)] overflow-y-auto">
            <div className="flex flex-col space-y-2 max-w-md mx-auto">
              
              {/* 1. Navigation items */}
              {navItems.map((item) => {
                const active = isItemActive(item.path);

                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`w-full min-h-[46px] px-4 py-3 rounded-xl flex items-center text-[15.5px] transition-all duration-200 ${
                      active
                        ? "bg-[#192841] text-white font-semibold shadow-xs"
                        : "text-[#192841] font-medium hover:bg-[#F5F1E8]"
                    }`}
                  >
                    <span>{item.label}</span>
                  </Link>
                );
              })}

              {/* 2. Resume Button */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResumeModal();
                  }}
                  className="w-full h-12 inline-flex items-center justify-center gap-2 px-4 text-[15px] font-semibold rounded-xl bg-[#192841] text-white hover:bg-[#233758] transition-all shadow-sm active:scale-[0.99]"
                >
                  <FileText className="w-[18px] h-[18px] text-white" />
                  <span>Resume</span>
                </button>
              </div>

              {/* 3. Compact Social Profiles Row */}
              <div className="pt-4 border-t border-[#192841]/10 flex items-center justify-around">
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-[#F5F1E8] text-[#192841] hover:bg-[#F7E7CE] transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-[#F5F1E8] text-[#192841] hover:bg-[#F7E7CE] transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={siteConfig.leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode Profile"
                  className="p-2.5 rounded-xl bg-[#F5F1E8] text-[#192841] hover:bg-[#F7E7CE] transition-colors"
                >
                  <LeetCodeIcon className="w-4 h-4" />
                </a>

                <a
                  href={siteConfig.hackerrankUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="HackerRank Profile"
                  className="p-2.5 rounded-xl bg-[#F5F1E8] text-[#192841] hover:bg-[#F7E7CE] transition-colors"
                >
                  <HackerRankIcon className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>
        </div>
      )}
    </header>
  );
};
