import React from "react";

export const QuickStats: React.FC = () => {
  const stats = [
    { number: "01", value: "B.Tech IT", label: "Currently entering 3rd Year" },
    { number: "02", value: "Java Full Stack", label: "Current Career Focus" },
    { number: "03", value: "5+ Projects", label: "Practical Development" },
    { number: "04", value: "2026", label: "Building & Learning" },
  ];

  return (
    <section className="py-8 bg-[#F5F2EA] border-y border-[#192841]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col space-y-1 sm:space-y-1.5 p-2 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <span className="text-xs font-mono font-bold text-[#192841]">
                {stat.number}
              </span>
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#192841]">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-[#4B5563]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
