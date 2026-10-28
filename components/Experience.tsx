"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  TrendingUp,
  Film,
  Code2,
  Bot,
  Sparkles,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { journeyTimeline, JourneyMilestone } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const categoryIconMap: Record<string, React.ElementType> = {
  Education: GraduationCap,
  "Digital Marketing": TrendingUp,
  "Video Production": Film,
  "Web Development": Code2,
  "AI Exploration": Bot,
};

export const Experience: React.FC = () => {
  return (
    <section id="journey" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Milestones & Evolution"
          title="My"
          highlight="Journey"
          description="A chronological roadmap detailing my computer applications education, continuous practical learning, and active project developments."
        />

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Central Glowing Connecting Line (visible on desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500/40 via-purple-500/40 to-cyan-500/40" />

          {/* Timeline Nodes */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-12"
          >
            {journeyTimeline.map((item, index) => {
              const Icon = categoryIconMap[item.category] || Sparkles;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content Card (Half width on desktop) */}
                  <div className="w-full md:w-1/2 md:px-8">
                    <div className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl hover:border-cyan-500/30 transition-all duration-300 shadow-xl group relative overflow-hidden">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-white/5 border border-white/10 text-cyan-300 font-semibold">
                          {item.period}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${
                            item.status === "Completed"
                              ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/30"
                              : item.status === "In Active Development"
                              ? "bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
                              : "bg-blue-500/10 text-blue-300 border border-blue-500/30"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h4>

                      {item.location && (
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono mb-2">
                          <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{item.location}</span>
                        </div>
                      )}

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div className="space-y-1.5 pt-2 border-t border-white/5">
                        {item.highlights.map((hl, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Node / Dot Icon */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-2xl bg-slate-900 border-2 border-cyan-400/50 items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)] z-10">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Empty Spacer on other side */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
