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
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Smart Hide on Scroll Down & Show on Scroll Up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Shadow border trigger
      setIsScrolled(currentScrollY > 10);

      // Smart show/hide logic
      if (mobileMenuOpen || currentScrollY < 40) {
        setIsNavVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling DOWN -> Hide
        setIsNavVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling UP -> Show
        setIsNavVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  // Lock body scroll when mobile drawer is open
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

  // Close mobile menu on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setIsNavVisible(true);
  }, [location.pathname]);

  // Check if nav item is active
  const isItemActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out bg-[#FCFAF5] ${
        isNavVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "border-b border-[#192841]/12 shadow-[0_2px_14px_rgba(25,40,65,0.06)]"
          : "border-b border-[#192841]/5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-[64px] sm:h-[68px] md:h-[72px] flex items-center justify-between gap-3 sm:gap-4">
          
          {/* LEFT: Official [MP Logo] + Manikandan Prabhu */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 sm:gap-3 select-none shrink-0 transition-all duration-200 hover:opacity-90 active:scale-[0.98] group"
          >
            <div className="h-[36px] sm:h-[40px] md:h-[42px] w-[36px] sm:w-[40px] md:w-[42px] flex items-center justify-center shrink-0">
              <img
                src={logoImg}
                alt="MP Logo"
                className="h-full w-full object-contain block drop-shadow-2xs"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/logo.png";
                }}
              />
            </div>

            <span
              className="text-[17px] sm:text-[19px] md:text-[20px] tracking-tight leading-none text-[#192841] whitespace-nowrap font-bold"
              style={{
                fontFamily: "'Plus Jakarta Sans', 'Manrope', 'Inter', sans-serif"
              }}
            >
              Manikandan Prabhu
            </span>
          </Link>

          {/* CENTER: Desktop Navigation Pill */}
          <nav className="hidden md:flex items-center space-x-1 bg-[#F5F1E8] p-1 rounded-full border border-[#192841]/10 shadow-2xs">
            {navItems.map((item) => {
              const active = isItemActive(item.path);

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`px-3 lg:px-3.5 py-1.5 rounded-full text-[13px] lg:text-[13.5px] transition-all duration-200 whitespace-nowrap ${
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

          {/* RIGHT: Resume Button (Desktop & Tablet) */}
          <div className="hidden md:flex items-center shrink-0">
            <button
              onClick={onOpenResumeModal}
              className="h-[38px] sm:h-[40px] px-4 text-[13px] sm:text-[13.5px] font-semibold rounded-full bg-[#192841] text-white hover:bg-[#233758] hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(25,40,65,0.12)] transition-all duration-200 active:scale-[0.98] inline-flex items-center justify-center gap-1.5 shadow-xs group"
            >
              <FileText className="w-[14px] h-[14px] text-white transition-transform duration-200 group-hover:scale-105" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Hamburger / Menu Button */}
          <div className="flex md:hidden items-center shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-[42px] h-[42px] rounded-xl bg-[#F5F1E8] border border-[#192841]/15 text-[#192841] hover:bg-[#F7E7CE] transition-colors focus:outline-none flex items-center justify-center shadow-2xs active:scale-95"
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

      {/* Solid Full-Screen Mobile Drawer Menu (100% Solid Background — No Overlap) */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[64px] sm:top-[68px] bottom-0 z-50 bg-[#FCFAF5] overflow-y-auto px-5 py-6 border-t border-[#192841]/10 flex flex-col justify-between animate-in fade-in slide-in-from-top-1 duration-200">
          <div className="flex flex-col space-y-2 max-w-md mx-auto w-full">
            
            {/* 1. Navigation items (Full Solid Rows) */}
            {navItems.map((item) => {
              const active = isItemActive(item.path);

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-full min-h-[48px] px-4 py-3 rounded-xl flex items-center text-[16px] transition-all duration-200 ${
                    active
                      ? "bg-[#192841] text-white font-bold shadow-xs"
                      : "text-[#192841] font-semibold bg-[#F5F1E8]/70 hover:bg-[#F5F1E8]"
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}

            {/* 2. Resume Button */}
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full h-12 inline-flex items-center justify-center gap-2 px-4 text-[15px] font-bold rounded-xl bg-[#192841] text-white hover:bg-[#233758] transition-all shadow-sm active:scale-[0.99]"
              >
                <FileText className="w-[18px] h-[18px] text-white" />
                <span>Download / View Resume</span>
              </button>
            </div>

            {/* 3. Compact Social Profiles Row */}
            <div className="pt-5 border-t border-[#192841]/10 flex items-center justify-around w-full">
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-xl bg-[#F5F1E8] text-[#192841] hover:bg-[#F7E7CE] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-xl bg-[#F5F1E8] text-[#192841] hover:bg-[#F7E7CE] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode Profile"
                className="p-3 rounded-xl bg-[#F5F1E8] text-[#192841] hover:bg-[#F7E7CE] transition-colors"
              >
                <LeetCodeIcon className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.hackerrankUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="HackerRank Profile"
                className="p-3 rounded-xl bg-[#F5F1E8] text-[#192841] hover:bg-[#F7E7CE] transition-colors"
              >
                <HackerRankIcon className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
