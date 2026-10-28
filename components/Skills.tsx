"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Film,
  Code2,
  Search,
  Target,
  Megaphone,
  FileText,
  Key,
  Users,
  BarChart3,
  PieChart,
  Sliders,
  UserPlus,
  Video,
  Sparkles,
  Palette,
  Smartphone,
  Instagram,
  Youtube,
  Tv,
  Layers,
  Scissors,
  Sun,
  Volume2,
  Type,
  Feather,
  Code,
  Cpu,
  FileCode,
  Boxes,
  Globe,
  Wind,
  Server,
  Workflow,
  Database,
  Network,
  GitBranch,
  Monitor,
  Share2,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skillGroups } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";

// Icon mapping helper
const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  Share2,
  Search,
  Target,
  Megaphone,
  FileText,
  Key,
  Users,
  BarChart3,
  PieChart,
  Sliders,
  UserPlus,
  Film,
  Video,
  Sparkles,
  Palette,
  Smartphone,
  Instagram,
  Youtube,
  Tv,
  Layers,
  Scissors,
  Sun,
  Volume2,
  Type,
  Feather,
  Code,
  Cpu,
  FileCode,
  Boxes,
  Globe,
  Wind,
  Server,
  Workflow,
  Database,
  Network,
  GitBranch,
  Monitor,
};

export const Skills: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState<string>("all");

  const filteredGroups =
    activeGroup === "all"
      ? skillGroups
      : skillGroups.filter((g) => g.id === activeGroup);

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Capabilities & Tools"
          title="My Creative &"
          highlight="Technical Toolkit"
          description="A specialized blend of performance marketing acumen, cinematic video editing finesse, and modern full-stack web engineering."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveGroup("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeGroup === "all"
                ? "bg-white text-slate-900 shadow-md shadow-white/10"
                : "bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10"
            }`}
          >
            All Toolkits
          </button>
          {skillGroups.map((group) => (
            <button
              key={group.id}
              onClick={() => setActiveGroup(group.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeGroup === group.id
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/30"
                  : "bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10"
              }`}
            >
              {group.name} ({group.percentage}%)
            </button>
          ))}
        </div>

        {/* Groups Grid */}
        <div className="space-y-12">
          <AnimatePresence mode="wait">
            {filteredGroups.map((group) => {
              const GroupIcon =
                group.id === "marketing"
                  ? TrendingUp
                  : group.id === "video"
                  ? Film
                  : Code2;

              return (
                <motion.div
                  key={group.id}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="rounded-3xl bg-slate-900/60 border border-white/10 p-6 sm:p-8 lg:p-10 backdrop-blur-xl relative overflow-hidden"
                >
                  {/* Subtle top gradient accent */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${group.gradient}`}
                  />

                  {/* Group Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
                    <div className="flex items-center gap-3.5">
                      <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white">
                        <GroupIcon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2.5">
                          <h3 className="text-xl sm:text-2xl font-bold text-white">
                            {group.name}
                          </h3>
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-white/10 text-accent border border-white/10">
                            {group.percentage}%
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-muted mt-1 max-w-xl">
                          {group.description}
                        </p>
                      </div>
                    </div>

                    {/* Progress Bar for Group Overall */}
                    <div className="w-full sm:w-56 space-y-1.5 shrink-0">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-slate-400">Mastery Level</span>
                        <span className="text-white font-bold">{group.percentage}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-950 p-0.5 border border-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${group.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className={`h-full rounded-full bg-gradient-to-r ${group.gradient}`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
                    {group.skills.map((skill) => {
                      const IconComponent = iconMap[skill.icon] || Sparkles;

                      return (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.025] hover:bg-white/[0.07] border border-white/5 hover:border-white/15 transition-all group"
                        >
                          <div className="flex items-center gap-3 overflow-hidden">
                            <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-300 group-hover:text-accent group-hover:border-accent/30 transition-colors shrink-0">
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white transition-colors truncate">
                              {skill.name}
                            </span>
                          </div>

                          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5 shrink-0 ml-2 group-hover:text-accent group-hover:border-accent/20 transition-colors">
                            {skill.level}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
