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
  X,
  Info,
  CheckCircle,
  BarChart,
  Eye,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects, ProjectItem } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ["All", "Digital Marketing", "Video Editing", "Web Development"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Featured Portfolio"
          title="Selected Work &"
          highlight="Creative Experiments"
          description="A curated collection of strategic marketing campaigns, cinematic video edits, and modern full-stack web applications."
        />

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/30 scale-105"
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
              const CategoryIcon =
                project.category === "Digital Marketing"
                  ? TrendingUp
                  : project.category === "Video Editing"
                  ? Film
                  : Code2;

              return (
                <motion.div
                  key={project.id}
                  layout
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="rounded-2xl bg-slate-900/60 border border-white/10 overflow-hidden backdrop-blur-xl hover:border-white/20 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-2xl"
                >
                  {/* Visual Preview / Local Graphic Card */}
                  <div
                    className={`relative h-48 w-full bg-gradient-to-br ${project.accent} p-5 flex flex-col justify-between overflow-hidden border-b border-white/10`}
                  >
                    {/* Background abstract art */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,#ffffff_1px,transparent_1px)] bg-[size:16px_16px]" />
                    <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-white/10 blur-xl group-hover:scale-125 transition-transform duration-500" />

                    {/* Top row badges */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-slate-950/70 border border-white/15 text-slate-200 backdrop-blur-md">
                        <CategoryIcon className="w-3.5 h-3.5 text-accent" />
                        {project.category}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-white/10 text-cyan-300 border border-white/10 backdrop-blur-md">
                        {project.type}
                      </span>
                    </div>

                    {/* Bottom tagline inside card graphic */}
                    <div className="relative z-10">
                      <span className="text-[11px] font-mono text-slate-300/80 block">
                        Featured Concept
                      </span>
                      <p className="text-white text-base font-bold tracking-tight drop-shadow-sm">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tools Tags */}
                    <div className="pt-2">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tools.slice(0, 4).map((tool) => (
                          <span
                            key={tool}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/5"
                          >
                            {tool}
                          </span>
                        ))}
                        {project.tools.length > 4 && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-white/5 text-muted">
                            +{project.tools.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Action trigger button */}
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-accent/40 transition-all focus:outline-none focus:ring-1 focus:ring-accent"
                      >
                        <Eye className="w-3.5 h-3.5 text-accent" />
                        <span>Inspect Concept Details</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Informational Disclosure regarding Portfolio Work */}
        <div className="mt-12 p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3 text-xs text-muted max-w-3xl mx-auto">
          <Info className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>
            Concept and prototype showcases demonstrate architectural workflows, ad funnels, and creative editing capabilities. Client assets and production URLs are available upon direct request or consultation.
          </span>
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {activeModalProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-white/20 p-6 sm:p-8 shadow-2xl overflow-hidden my-8"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors focus:outline-none"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Header */}
                <div className="mb-6 pr-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-accent/10 text-accent border border-accent/20">
                      {activeModalProject.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-white/10 text-slate-300 border border-white/10">
                      {activeModalProject.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{activeModalProject.title}</h3>
                  <p className="text-sm font-medium text-slate-400 mt-1">
                    {activeModalProject.tagline}
                  </p>
                </div>

                {/* Description */}
                <div className="space-y-4 text-sm text-slate-300 leading-relaxed mb-6">
                  <p>{activeModalProject.description}</p>
                  
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold block mb-1">
                      Key Highlights & Architecture:
                    </span>
                    <p className="text-xs text-slate-200">{activeModalProject.highlight}</p>
                  </div>
                </div>

                {/* Metrics Grid */}
                {activeModalProject.metrics && (
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {activeModalProject.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="p-3 rounded-xl bg-slate-950/60 border border-white/5 text-center"
                      >
                        <span className="text-[10px] font-mono uppercase tracking-wider text-muted block">
                          {metric.label}
                        </span>
                        <span className="text-sm font-bold text-white mt-0.5 block">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tools & Tech Stack */}
                <div className="mb-8">
                  <span className="text-xs font-mono uppercase tracking-wider text-muted block mb-2.5">
                    Technologies & Applied Skills:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.tools.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
                  >
                    Close Preview
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setActiveModalProject(null)}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/30 hover:scale-105 transition-all"
                  >
                    Inquire About This Workflow
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
