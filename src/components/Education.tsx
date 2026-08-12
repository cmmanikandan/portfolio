import React from "react";
import { GraduationCap, Calendar, MapPin, BookCheck } from "lucide-react";

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 bg-[#FCFAF5] border-t border-[#192841]/10 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-14 space-y-2">
          <span className="text-xs font-bold tracking-[0.08em] text-[#192841] uppercase">
            05 — EDUCATION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#192841]">
            My learning journey.
          </h2>
        </div>

        {/* Education Card using #FBF9F4 */}
        <div className="max-w-3xl">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FBF9F4] border border-[#192841]/14 shadow-[0_4px_18px_rgba(25,40,65,0.04)] space-y-6 hover:border-[#192841]/30 hover:shadow-[0_8px_28px_rgba(25,40,65,0.08)] transition-all duration-200 group">
            
            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#192841]/10 pb-5">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#F7E7CE] text-[#192841] border border-[#192841]/20 shrink-0 group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#192841]">
                    B.Tech Information Technology
                  </h3>
                  <p className="text-sm font-bold text-[#192841]/85">
                    M. Kumarasamy College of Engineering (MKCE)
                  </p>
                </div>
              </div>

              <div className="space-y-1 text-xs text-[#4B5563] font-semibold shrink-0">
                <div className="flex items-center gap-1.5 font-bold text-[#192841]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Currently entering 3rd Year</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#4B5563]" />
                  <span>Karur, Tamil Nadu</span>
                </div>
              </div>
            </div>

            {/* Description note statement using #F5F1E8 */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F5F1E8] border border-[#192841]/10 text-xs text-[#192841] font-semibold leading-relaxed">
              <BookCheck className="w-4 h-4 text-[#192841] shrink-0 mt-0.5" />
              <div>
                Building a strong foundation in core computer science, software engineering principles, database systems, web technologies and algorithmic problem solving.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
