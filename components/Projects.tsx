"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Layers,
  Sparkles,
  TrendingUp,
  Film,
  Code2,
  Bot,
  Github,
  X,
  Info,
  CheckCircle,
  Eye,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projectsData, ProjectItem } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { scrollToSection } from "@/lib/utils";

const categoryIconMap: Record<string, React.ElementType> = {
  "Artificial Intelligence": Bot,
  "Digital Marketing": TrendingUp,
  "Video Editing": Film,
  "Web Development": Code2,
};

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = [
    "All",
    "Artificial Intelligence",
    "Digital Marketing",
    "Video Editing",
    "Web Development",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  const flagshipProject = projectsData.find((p) => p.isFlagship) || projectsData[0];

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Selected Works & Engineering"
          title="Things I'm"
          highlight="Building & Creating"
          description="A curated gallery of personal software projects, AI explorations, cinematic video edits, and digital marketing systems."
        />

        {/* ========================================================
            FLAGSHIP FEATURED BANNER — NOVIS AI (Visually Prominent)
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 rounded-3xl bg-gradient-to-r from-blue-950/40 via-purple-950/30 to-slate-900/60 border-2 border-cyan-500/30 p-6 sm:p-10 backdrop-blur-2xl relative overflow-hidden shadow-2xl group"
        >
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  FLAGSHIP PROJECT
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  Status: Currently in Development
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                {flagshipProject.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                {flagshipProject.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {flagshipProject.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={() => scrollToSection("novis")}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-sm shadow-xl shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Bot className="w-4 h-4" />
                <span>Open NOVIS Showcase</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveModalProject(flagshipProject)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold text-sm transition-all"
              >
                <Eye className="w-4 h-4" />
                <span>View Full Details</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30 scale-105"
                  : "bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const CategoryIcon = categoryIconMap[project.category] || Code2;

              return (
                <motion.div
                  key={project.id}
                  layout
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="rounded-3xl bg-slate-900/60 border border-white/10 overflow-hidden backdrop-blur-xl hover:border-white/20 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-2xl"
                >
                  {/* Visual Preview / Header Thumbnail */}
                  <div
                    className={`relative h-48 w-full bg-gradient-to-br ${project.accent} p-5 flex flex-col justify-between overflow-hidden border-b border-white/10`}
                  >
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,#ffffff_1px,transparent_1px)] bg-[size:16px_16px]" />
                    <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-white/10 blur-xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

                    {/* Top Row Badges */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-slate-950/70 border border-white/15 text-slate-200 backdrop-blur-md">
                        <CategoryIcon className="w-3.5 h-3.5 text-cyan-400" />
                        {project.category}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-white/10 text-cyan-300 border border-white/10 backdrop-blur-md">
                        {project.status}
                      </span>
                    </div>

                    {/* Bottom Preview Overlay */}
                    <div className="relative z-10 flex items-end justify-between">
                      <div className="text-white">
                        <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-widest">
                          PROJECT
                        </span>
                        <h4 className="text-lg font-black tracking-tight leading-snug drop-shadow-md">
                          {project.title}
                        </h4>
                      </div>

                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="p-2 rounded-xl bg-black/40 hover:bg-black/60 border border-white/20 text-white backdrop-blur-md transition-all"
                        title="View Detailed Spec"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Tools Tag Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Metrics or Highlights */}
                    <div className="pt-3 border-t border-white/5 space-y-2">
                      <p className="text-[11px] text-cyan-300/90 font-mono flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-cyan-400 shrink-0" />
                        <span>{project.highlight}</span>
                      </p>

                      <div className="flex items-center justify-between pt-2">
                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-cyan-300 transition-colors"
                        >
                          <span>Explore Details</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Preview</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Detail Modal / Drawer */}
      <AnimatePresence>
        {activeModalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setActiveModalProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-white/15 rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest">
                    {activeModalProject.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">{activeModalProject.title}</h3>
                </div>

                <button
                  onClick={() => setActiveModalProject(null)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-5 text-sm text-slate-300">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs font-mono text-slate-400 mb-1">Status & Classification</div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-white font-semibold">{activeModalProject.status}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white mb-2">Project Overview</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeModalProject.description}
                  </p>
                </div>

                {activeModalProject.features && (
                  <div>
                    <h4 className="text-sm font-bold text-white mb-2">Key Features & Scope</h4>
                    <div className="space-y-1.5">
                      {activeModalProject.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="text-sm font-bold text-white mb-2">Architecture & Implementation Notes</h4>
                  <p className="text-xs text-slate-400 leading-relaxed bg-black/40 p-3.5 rounded-xl border border-white/5 font-mono">
                    {activeModalProject.detailNotes}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex gap-2">
                    {activeModalProject.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-slate-400"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setActiveModalProject(null)}
                      className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold"
                    >
                      Close
                    </button>
                    {activeModalProject.id === "novis-ai" && (
                      <button
                        onClick={() => {
                          setActiveModalProject(null);
                          scrollToSection("novis");
                        }}
                        className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold"
                      >
                        Go to NOVIS Interactive Core
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
