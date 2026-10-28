"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Film,
  Code2,
  Sparkles,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { journeyTimeline, JourneyItem } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Growth & Milestones"
          title="My Journey"
          highlight="So Far"
          description="A continuous progression of technical learning, creative video production, and performance marketing execution."
        />

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line on Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 -translate-x-1/2 opacity-30" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {journeyTimeline.map((item, index) => {
              const isEven = index % 2 === 0;
              const DomainIcon =
                item.domain === "Digital Marketing"
                  ? TrendingUp
                  : item.domain === "Video Editing"
                  ? Film
                  : item.domain === "Web Development"
                  ? Code2
                  : Sparkles;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node Center Badge */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-10 h-10 rounded-full bg-slate-900 border-2 border-accent text-accent shadow-lg shadow-accent/20 z-10">
                    <DomainIcon className="w-4 h-4" />
                  </div>

                  {/* Left or Right Card Content */}
                  <div className="w-full md:w-1/2 px-0 md:px-8">
                    <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-6 sm:p-7 backdrop-blur-xl hover:border-white/20 transition-all shadow-xl group">
                      
                      {/* Top Meta info */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                          {item.domain}
                        </span>
                        <span className="text-[11px] font-mono text-muted flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Key highlights bullet points */}
                      <div className="space-y-2 pt-3 border-t border-white/10">
                        {item.highlights.map((h) => (
                          <div key={h} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
