import React, { useState, useEffect } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";

const ROLES = [
  "Java Full Stack Developer",
  "Java Developer",
  "Software Developer",
  "Backend Developer",
  "Full Stack Developer"
];

export const AnimatedRoleText: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayText(ROLES[0]);
      return;
    }

    const currentRole = ROLES[roleIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentRole) {
      // Completed typing the full role -> hold for 2.6 seconds
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2600);
    } else if (isDeleting && displayText === "") {
      // Completed deleting -> move to next role
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
      timer = setTimeout(() => {}, 300);
    } else {
      // Typing or deleting characters
      const speed = isDeleting ? 30 : 50;
      timer = setTimeout(() => {
        if (!isDeleting) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        }
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <div className="flex items-center gap-2 text-base sm:text-lg md:text-xl font-bold text-[#192841] select-none py-1">
        <span className="font-mono text-[#192841] text-lg font-black">&gt;</span>
        <span>{ROLES[0]}</span>
      </div>
    );
  }

  return (
    <div
      className="flex items-center gap-2 min-h-[32px] sm:min-h-[36px] text-base sm:text-lg md:text-xl font-bold text-[#192841] select-none py-1"
      aria-label={`Role: ${ROLES[roleIndex]}`}
    >
      {/* Terminal Prefix > in Midnight Blue */}
      <span className="font-mono text-[#192841] text-lg sm:text-xl font-black shrink-0">
        &gt;
      </span>

      {/* Dynamic Role Text */}
      <span className="tracking-tight text-[#192841]">
        {displayText}
      </span>

      {/* Subtle Blinking Terminal Cursor */}
      <span
        aria-hidden="true"
        className="inline-block w-[2px] h-[18px] sm:h-[22px] bg-[#192841] animate-pulse -ml-0.5 align-middle"
        style={{ animationDuration: "750ms" }}
      />
    </div>
  );
};
