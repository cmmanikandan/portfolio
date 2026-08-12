import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (scrollTop > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // SVG Circle calculation for scroll progress border
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40"
        >
          {/* Animated Glow Aura */}
          <div className="absolute inset-0 rounded-full bg-[#F7E7CE]/80 blur-md -z-10 animate-pulse" />

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#192841] text-[#FCFAF5] shadow-[0_6px_20px_rgba(25,40,65,0.25)] hover:bg-[#233758] hover:shadow-[0_8px_25px_rgba(25,40,65,0.35)] flex items-center justify-center transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[#192841]/40 active:scale-95"
          >
            {/* Circular Scroll Progress Ring */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5"
              viewBox="0 0 48 48"
            >
              <circle
                cx="24"
                cy="24"
                r={radius}
                className="text-white/15"
                strokeWidth="2.5"
                stroke="currentColor"
                fill="transparent"
              />
              <circle
                cx="24"
                cy="24"
                r={radius}
                className="text-[#F7E7CE] transition-all duration-150"
                strokeWidth="2.5"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
              />
            </svg>

            {/* Bouncing Arrow with hover animation */}
            <div className="relative z-10 transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110">
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#FCFAF5]" />
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
