import React, { useState } from "react";
import { Server, Database, Code2, Cpu, Layers } from "lucide-react";

export const TechRadarOrbit: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[420px] aspect-square mx-auto flex items-center justify-center select-none transition-transform duration-300 ease-out py-2"
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
        <div className="absolute w-64 h-64 rounded-full bg-[#F7E7CE]/60 blur-3xl -z-10 pointer-events-none" />
        <div className="absolute w-44 h-44 rounded-full bg-[#192841]/5 blur-2xl -z-10 pointer-events-none" />

        {/* Outer Orbital Ring 1 */}
        <div className="absolute inset-3 rounded-full border border-dashed border-[#192841]/15 animate-[spin_40s_linear_infinite]" />

        {/* Middle Orbital Ring 2 (Tilted) */}
        <div
          className="absolute inset-10 rounded-full border border-[#192841]/20 animate-[spin_25s_linear_infinite_reverse]"
          style={{
            transform: "rotate(45deg)"
          }}
        >
          {/* Orbiting Satellite Node 1 */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#192841] shadow-[0_0_10px_rgba(25,40,65,0.4)]" />
          {/* Orbiting Satellite Node 2 */}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#F7E7CE] border border-[#192841]/30" />
        </div>

        {/* Inner Orbital Ring 3 */}
        <div className="absolute inset-20 rounded-full border border-[#192841]/10" />

        {/* Center 3D Core Sphere */}
        <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#192841] via-[#233758] to-[#192841] text-white p-1 shadow-[0_12px_32px_rgba(25,40,65,0.25)] flex flex-col items-center justify-center text-center group cursor-pointer hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 rounded-full border border-white/20 animate-pulse" />
          <div className="p-2 rounded-full bg-white/10 mb-1">
            <Cpu className="w-5 h-5 text-[#F7E7CE]" />
          </div>
          <span className="text-[11px] font-bold tracking-wider uppercase text-[#F7E7CE]">
            Java Core
          </span>
          <span className="text-[9px] text-white/70 font-mono">
            v21 • Spring
          </span>
        </div>

        {/* Floating 3D Badge 1: Spring Boot (Top Left) */}
        <div
          className="absolute top-2 left-2 sm:top-4 sm:left-4 z-20 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-[#FFFEFB]/95 backdrop-blur-md border border-[#192841]/15 shadow-[0_8px_20px_rgba(25,40,65,0.08)] flex items-center gap-2 hover:-translate-y-1 hover:border-[#192841]/35 transition-all duration-200"
          style={{
            animation: "float 6s ease-in-out infinite"
          }}
        >
          <div className="p-1.5 rounded-lg bg-[#F5F1E8] text-[#192841]">
            <Server className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-[#192841] leading-none">Spring Boot</div>
            <div className="text-[9px] text-[#6F7885] font-medium">REST & Services</div>
          </div>
        </div>

        {/* Floating 3D Badge 2: SQL / Database (Top Right) */}
        <div
          className="absolute top-4 right-2 sm:top-6 sm:right-3 z-20 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-[#FFFEFB]/95 backdrop-blur-md border border-[#192841]/15 shadow-[0_8px_20px_rgba(25,40,65,0.08)] flex items-center gap-2 hover:-translate-y-1 hover:border-[#192841]/35 transition-all duration-200"
          style={{
            animation: "float 7s ease-in-out infinite 1s"
          }}
        >
          <div className="p-1.5 rounded-lg bg-[#F5F1E8] text-[#192841]">
            <Database className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-[#192841] leading-none">SQL / Postgres</div>
            <div className="text-[9px] text-[#6F7885] font-medium">Database Design</div>
          </div>
        </div>

        {/* Floating 3D Badge 3: RESTful APIs (Bottom Left) */}
        <div
          className="absolute bottom-5 left-1 sm:bottom-7 sm:left-2 z-20 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-[#FFFEFB]/95 backdrop-blur-md border border-[#192841]/15 shadow-[0_8px_20px_rgba(25,40,65,0.08)] flex items-center gap-2 hover:-translate-y-1 hover:border-[#192841]/35 transition-all duration-200"
          style={{
            animation: "float 8s ease-in-out infinite 2s"
          }}
        >
          <div className="p-1.5 rounded-lg bg-[#F5F1E8] text-[#192841]">
            <Code2 className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-[#192841] leading-none">RESTful APIs</div>
            <div className="text-[9px] text-[#6F7885] font-medium">Backend Sync</div>
          </div>
        </div>

        {/* Floating 3D Badge 4: Full Stack Architecture (Bottom Right) */}
        <div
          className="absolute bottom-4 right-1 sm:bottom-5 sm:right-3 z-20 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-[#FFFEFB]/95 backdrop-blur-md border border-[#192841]/15 shadow-[0_8px_20px_rgba(25,40,65,0.08)] flex items-center gap-2 hover:-translate-y-1 hover:border-[#192841]/35 transition-all duration-200"
          style={{
            animation: "float 6.5s ease-in-out infinite 1.5s"
          }}
        >
          <div className="p-1.5 rounded-lg bg-[#F5F1E8] text-[#192841]">
            <Layers className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-[#192841] leading-none">Full Stack</div>
            <div className="text-[9px] text-[#6F7885] font-medium">React + Backend</div>
          </div>
        </div>

        {/* Bottom Center Status Pill */}
        <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 z-30 px-3.5 py-1.5 rounded-full bg-[#192841] text-[#FCFAF5] border border-white/20 shadow-md flex items-center gap-2 text-[10px] sm:text-[10.5px] font-semibold whitespace-nowrap">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Placement Ready • 2026</span>
        </div>

      </div>
    </div>
  );
};
