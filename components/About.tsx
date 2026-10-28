"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Sparkles,
  Download,
  CheckCircle2,
  TrendingUp,
  Film,
  Code2,
  Bot,
  Brain,
  Lightbulb,
  Workflow,
  ArrowRight,
  FileText,
  X,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { scrollToSection } from "@/lib/utils";

export const About: React.FC = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);

  const pillars = [
    {
      title: "Marketing & Growth",
      desc: "Data-driven marketing, paid ad funnels, and organic search strategies to connect brands with audiences.",
      icon: TrendingUp,
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
    {
      title: "Creative Video Storytelling",
      desc: "Dynamic short-form reels, brand commercials, and kinetic motion edits crafted for high retention.",
      icon: Film,
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
    {
      title: "Technology & AI",
      desc: "Full stack web development and intelligent software exploration through my flagship NOVIS AI project.",
      icon: Bot,
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    },
  ];

  const displayPoints = [
    {
      icon: GraduationCap,
      label: "Education",
      value: "Bachelor of Computer Applications (BCA)",
      sub: "Strong grounding in computational logic, programming & database fundamentals",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Trichy, Tamil Nadu, India",
      sub: "Open for global remote and hybrid collaborations",
    },
    {
      icon: Lightbulb,
      label: "Core Interests",
      value: "Digital Marketing, Video Production, Web Technologies & AI",
      sub: "Constantly building practical projects across all three domains",
    },
    {
      icon: Brain,
      label: "Key Strengths",
      value: "Creativity, Adaptability, Problem-Solving & Continuous Learning",
      sub: "Hands-on implementation and honest technical ambition",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Personal Profile"
          title="A Little"
          highlight="About Me"
          description="Bridging marketing strategy, creative storytelling, and modern software development."
        />

        {/* 2-Column Main Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Narrative Card */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="rounded-3xl bg-slate-900/50 border border-white/10 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-5 flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Creative Mindset. Technical Foundation.</span>
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p className="border-l-2 border-cyan-400 pl-4 italic text-cyan-100 font-medium">
                  &ldquo;{siteConfig.aboutBio}&rdquo;
                </p>

                <p>
                  As a BCA graduate, I approach digital projects with both creative sensibility and technical
                  rigor. Rather than viewing marketing, video production, and coding as separate silos, I
                  combine them into cohesive digital products—from high-converting ad creative to modern,
                  responsive React applications.
                </p>

                <p>
                  I am dedicated to continuous learning, building real-world explorations, and honest execution.
                  My flagship personal project, <strong className="text-white font-semibold">NOVIS</strong>,
                  represents my ongoing journey into artificial intelligence and next-generation conversational interfaces.
                </p>
              </div>

              {/* Action Buttons: Download Resume & Explore NOVIS */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setShowResumeModal(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-xs sm:text-sm shadow-md shadow-blue-600/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </button>

                <button
                  onClick={() => scrollToSection("novis")}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-medium text-xs sm:text-sm transition-all"
                >
                  <Bot className="w-4 h-4 text-cyan-400" />
                  <span>Discover NOVIS AI</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* 3 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur-lg hover:border-white/20 transition-all"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 border ${p.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">{p.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Key Details & Profile Highlights */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-5 space-y-4"
          >
            {displayPoints.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-xl hover:border-cyan-500/30 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        {pt.label}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-white mt-0.5 mb-1 group-hover:text-cyan-300 transition-colors">
                        {pt.value}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {pt.sub}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Quick Status Pill */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-950/40 via-purple-950/40 to-slate-950/40 border border-cyan-500/20 backdrop-blur-xl flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
              <p className="text-xs text-slate-300 font-mono">
                Currently open for collaborative roles, freelance projects & innovative AI explorations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Configurable Resume Modal / Viewer */}
      <AnimatePresence>
        {showResumeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setShowResumeModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-white/15 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">KARAN C — Curriculum Vitae</h3>
                    <p className="text-xs text-slate-400">BCA Graduate • Portfolio 2026</p>
                  </div>
                </div>

                <button
                  onClick={() => setShowResumeModal(false)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>Education:</strong> Bachelor of Computer Applications (BCA) Graduate, Trichy, Tamil Nadu.
                </p>
                <p>
                  <strong>Core Specializations:</strong> Digital Marketing (80%), Video Editing (80%), Full Stack Web Development (60%).
                </p>
                <p>
                  <strong>Active Flagship:</strong> NOVIS Personal AI Assistant (Architecture & Frontend In Dev).
                </p>
                <p className="text-slate-400 text-xs">
                  A direct PDF copy can be linked via <code className="text-cyan-300">siteConfig.resumeUrl</code>.
                </p>

                <div className="pt-4 border-t border-white/10 flex justify-end gap-3">
                  <button
                    onClick={() => setShowResumeModal(false)}
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-slate-300 text-xs font-semibold"
                  >
                    Close
                  </button>
                  <a
                    href="mailto:contact.karanportfolio@gmail.com?subject=Resume%20Request%20-%20Karan%20C"
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"
                  >
                    Request PDF Copy
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
