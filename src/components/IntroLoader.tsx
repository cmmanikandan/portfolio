import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";
import logoImg from "../assets/logo.png";

interface IntroLoaderProps {
  onComplete?: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // If user prefers reduced motion, finish immediately
    if (shouldReduceMotion) {
      setIsVisible(false);
      if (onComplete) onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 750);

    return () => clearTimeout(timer);
  }, [onComplete, shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FCFAF5] text-[#192841] select-none"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="flex flex-col items-center gap-4"
          >
            {/* Official MP Logo (80–96px) */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center overflow-hidden">
              <img
                src={logoImg}
                alt="MP Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/logo.png";
                }}
              />
            </div>

            {/* Typography brand label */}
            <motion.div
              initial={{ y: 6, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.35 }}
              className="text-center space-y-0.5"
            >
              <span
                className="text-base sm:text-lg tracking-[-0.02em] text-[#192841] block font-bold"
                style={{
                  fontFamily: "'Plus Jakarta Sans', 'Manrope', 'Inter', sans-serif"
                }}
              >
                Manikandan Prabhu
              </span>
              <span className="block text-[11px] font-semibold tracking-wider text-[#6B7280] uppercase">
                Java Full Stack Developer
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
