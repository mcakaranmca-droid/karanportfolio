"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Target,
  Sparkles,
  Zap,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { processSteps } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const processIcons: Record<string, React.ElementType> = {
  Compass,
  Target,
  Sparkles,
  Zap,
};

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Methodology & Workflow"
          title="From Idea"
          highlight="to Impact"
          description="A structured four-step methodology ensuring every campaign, video, and web application achieves its intended purpose."
        />

        {/* 4 Steps Container */}
        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {processSteps.map((step, index) => {
            const Icon = processIcons[step.icon] || Sparkles;

            return (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                className="relative rounded-2xl bg-slate-900/60 border border-white/10 p-6 backdrop-blur-xl hover:border-white/20 transition-all duration-300 flex flex-col justify-between group h-full shadow-lg"
              >
                {/* Step Number & Connector */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black font-mono bg-gradient-to-br from-white to-slate-500 bg-clip-text text-transparent group-hover:from-accent group-hover:to-indigo-400 transition-colors">
                      {step.number}
                    </span>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-accent group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Step Title & Phase */}
                  <span className="text-[11px] font-mono uppercase tracking-wider text-muted font-semibold block mb-1">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Outputs List */}
                <div className="pt-4 border-t border-white/10 space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted block mb-2 font-medium">
                    Key Deliverables:
                  </span>
                  {step.outputs.map((out) => (
                    <div key={out} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3 h-3 text-accent shrink-0" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
