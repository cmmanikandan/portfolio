import React, { useState } from "react";
import { Server, Database, Code2, Cpu, Layers } from "lucide-react";

export const TechRadarOrbit: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[270px] xs:max-w-[295px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[440px] aspect-square mx-auto flex items-center justify-center select-none p-2 sm:p-4 my-1 overflow-hidden sm:overflow-visible"
      style={{
        perspective: "1000px"
      }}
    >
      {/* 3D Container with dynamic tilt */}
      <div
        className="relative w-full h-full flex items-center justify-center transition-transform duration-200"
        style={{
          transform: `rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`
        }}
      >
        {/* Background Ambient Glow & Blur */}
        <div className="absolute w-36 h-36 sm:w-56 sm:h-56 rounded-full bg-[#F7E7CE]/60 blur-3xl -z-10 pointer-events-none" />
        <div className="absolute w-28 h-28 sm:w-40 sm:h-40 rounded-full bg-[#192841]/5 blur-2xl -z-10 pointer-events-none" />

        {/* Outer Orbital Ring 1 */}
        <div className="absolute inset-2 sm:inset-4 rounded-full border border-dashed border-[#192841]/15 animate-[spin_40s_linear_infinite] pointer-events-none" />

        {/* Middle Orbital Ring 2 (Tilted) */}
        <div
          className="absolute inset-7 sm:inset-12 rounded-full border border-[#192841]/20 animate-[spin_25s_linear_infinite_reverse] pointer-events-none"
          style={{
            transform: "rotate(45deg)"
          }}
        >
          {/* Orbiting Satellite Node 1 */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#192841]" />
          {/* Orbiting Satellite Node 2 */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#F7E7CE] border border-[#192841]/30" />
        </div>

        {/* Inner Orbital Ring 3 */}
        <div className="absolute inset-12 sm:inset-18 rounded-full border border-[#192841]/10 pointer-events-none" />

        {/* Center 3D Core Sphere */}
        <div className="relative z-10 w-18 h-18 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#192841] via-[#233758] to-[#192841] text-white p-1 shadow-[0_8px_24px_rgba(25,40,65,0.25)] flex flex-col items-center justify-center text-center group cursor-pointer hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 rounded-full border border-white/20 animate-pulse pointer-events-none" />
          <div className="p-1 sm:p-1.5 rounded-full bg-white/10 mb-0.5">
            <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F7E7CE]" />
          </div>
          <span className="text-[9.5px] sm:text-[11px] font-bold tracking-wider uppercase text-[#F7E7CE]">
            Java Core
          </span>
          <span className="text-[7.5px] sm:text-[9px] text-white/70 font-mono">
            v21 • Spring
          </span>
        </div>

        {/* Floating 3D Badge 1: Spring Boot (Top Left) */}
        <div
          className="absolute top-1 left-1 sm:top-2 sm:left-2 z-20 px-2 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-[#FFFEFB]/95 backdrop-blur-md border border-[#192841]/15 shadow-[0_4px_14px_rgba(25,40,65,0.08)] flex items-center gap-1.5 sm:gap-2 hover:border-[#192841]/35 transition-all duration-200 max-w-[130px] sm:max-w-none"
          style={{
            animation: "float 6s ease-in-out infinite"
          }}
        >
          <div className="p-1 rounded-md bg-[#F5F1E8] text-[#192841] shrink-0">
            <Server className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </div>
          <div className="min-w-0">
            <div className="text-[9.5px] sm:text-[11px] font-bold text-[#192841] leading-none truncate">Spring Boot</div>
            <div className="text-[7.5px] sm:text-[9px] text-[#6F7885] font-medium hidden sm:block">REST & Services</div>
          </div>
        </div>

        {/* Floating 3D Badge 2: SQL / Database (Top Right) */}
        <div
          className="absolute top-1 right-1 sm:top-2 sm:right-2 z-20 px-2 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-[#FFFEFB]/95 backdrop-blur-md border border-[#192841]/15 shadow-[0_4px_14px_rgba(25,40,65,0.08)] flex items-center gap-1.5 sm:gap-2 hover:border-[#192841]/35 transition-all duration-200 max-w-[130px] sm:max-w-none"
          style={{
            animation: "float 7s ease-in-out infinite 1s"
          }}
        >
          <div className="p-1 rounded-md bg-[#F5F1E8] text-[#192841] shrink-0">
            <Database className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </div>
          <div className="min-w-0">
            <div className="text-[9.5px] sm:text-[11px] font-bold text-[#192841] leading-none truncate">SQL / Postgres</div>
            <div className="text-[7.5px] sm:text-[9px] text-[#6F7885] font-medium hidden sm:block">Database Design</div>
          </div>
        </div>

        {/* Floating 3D Badge 3: RESTful APIs (Bottom Left) */}
        <div
          className="absolute bottom-3 left-1 sm:bottom-4 sm:left-2 z-20 px-2 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-[#FFFEFB]/95 backdrop-blur-md border border-[#192841]/15 shadow-[0_4px_14px_rgba(25,40,65,0.08)] flex items-center gap-1.5 sm:gap-2 hover:border-[#192841]/35 transition-all duration-200 max-w-[130px] sm:max-w-none"
          style={{
            animation: "float 8s ease-in-out infinite 2s"
          }}
        >
          <div className="p-1 rounded-md bg-[#F5F1E8] text-[#192841] shrink-0">
            <Code2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </div>
          <div className="min-w-0">
            <div className="text-[9.5px] sm:text-[11px] font-bold text-[#192841] leading-none truncate">RESTful APIs</div>
            <div className="text-[7.5px] sm:text-[9px] text-[#6F7885] font-medium hidden sm:block">Backend Sync</div>
          </div>
        </div>

        {/* Floating 3D Badge 4: Full Stack Architecture (Bottom Right) */}
        <div
          className="absolute bottom-3 right-1 sm:bottom-4 sm:right-2 z-20 px-2 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-[#FFFEFB]/95 backdrop-blur-md border border-[#192841]/15 shadow-[0_4px_14px_rgba(25,40,65,0.08)] flex items-center gap-1.5 sm:gap-2 hover:border-[#192841]/35 transition-all duration-200 max-w-[130px] sm:max-w-none"
          style={{
            animation: "float 6.5s ease-in-out infinite 1.5s"
          }}
        >
          <div className="p-1 rounded-md bg-[#F5F1E8] text-[#192841] shrink-0">
            <Layers className="w-3.5 h-3.5" />
          </div>
          <div className="min-w-0">
            <div className="text-[9.5px] sm:text-[11px] font-bold text-[#192841] leading-none truncate">Full Stack</div>
            <div className="text-[7.5px] sm:text-[9px] text-[#6F7885] font-medium hidden sm:block">React + Backend</div>
          </div>
        </div>

        {/* Bottom Center Status Pill */}
        <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 -translate-x-1/2 z-30 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#192841] text-[#FCFAF5] border border-white/20 shadow-md flex items-center gap-1.5 text-[8.5px] sm:text-[10px] font-semibold whitespace-nowrap">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          <span>Placement Ready • 2026</span>
        </div>

      </div>
    </div>
  );
};
