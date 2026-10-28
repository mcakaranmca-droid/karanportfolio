"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Target,
  Megaphone,
  Search,
  BarChart3,
  Film,
  Video,
  Sparkles,
  Palette,
  Code,
  Cpu,
  Boxes,
  Globe,
  Wind,
  Server,
  Workflow,
  Database,
  GitBranch,
  Bot,
  Terminal,
  MessageSquare,
  Mic,
  CheckCircle2,
  Compass,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { toolsData, ToolItem } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

// Icon mapping helper
const toolIconMap: Record<string, React.ElementType> = {
  Target,
  Megaphone,
  Search,
  BarChart3,
  Film,
  Video,
  Sparkles,
  Palette,
  Code,
  Cpu,
  Boxes,
  Globe,
  Wind,
  Server,
  Workflow,
  Database,
  GitBranch,
  Bot,
  Terminal,
  MessageSquare,
  Mic,
};

export const Tools: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Digital Marketing",
    "Video Editing",
    "Development",
    "Artificial Intelligence",
  ];

  const filteredTools =
    activeCategory === "All"
      ? toolsData
      : toolsData.filter((tool) => tool.category === activeCategory);

  return (
    <section id="tools" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Stack & Toolkit"
          title="Tools &"
          highlight="Technologies"
          description="A categorized overview of the platforms, production software, and development technologies I work with."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/30 scale-105"
                  : "bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredTools.map((tool) => {
              const IconComponent = toolIconMap[tool.icon] || Code;
              const isCurrentlyUsed = tool.experience === "Currently Used";

              return (
                <motion.div
                  key={tool.name}
                  layout
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl bg-slate-900/50 border border-white/10 p-5 backdrop-blur-xl hover:border-white/20 hover:bg-slate-900/70 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform text-cyan-400">
                        <IconComponent className="w-5 h-5" />
                      </div>

                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-mono uppercase font-semibold ${
                          isCurrentlyUsed
                            ? "bg-blue-500/10 text-blue-300 border border-blue-500/25"
                            : "bg-purple-500/10 text-purple-300 border border-purple-500/25"
                        }`}
                      >
                        {tool.experience}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                      {tool.name}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed mb-3">
                      {tool.purpose}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-500">
                      {tool.category}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Legend Notice */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
            <span>Currently Used in Active Workflow</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
            <span>Learning / Exploring in Depth</span>
          </div>
        </div>
      </div>
    </section>
  );
};
