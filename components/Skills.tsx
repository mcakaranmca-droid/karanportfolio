"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Film,
  Code2,
  Search,
  Target,
  Megaphone,
  Share2,
  FileText,
  UserPlus,
  Play,
  Volume2,
  Layers,
  Scissors,
  Sparkles,
  Terminal,
  Cpu,
  Database,
  Globe,
  CheckCircle2,
  Sliders,
  Info,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skillsData, skillAssessmentDisclaimer } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export const Skills: React.FC = () => {
  // Animated counters state
  const [animatedMarketing, setAnimatedMarketing] = useState(0);
  const [animatedVideo, setAnimatedVideo] = useState(0);
  const [animatedDev, setAnimatedDev] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!inView) return;

    const duration = 1500;
    const steps = 40;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      setAnimatedMarketing(Math.round(80 * eased));
      setAnimatedVideo(Math.round(80 * eased));
      setAnimatedDev(Math.round(60 * eased));

      if (progress >= 1) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView]);

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Proficiency & Craft"
          title="My Creative &"
          highlight="Technical Skills"
          description="Interactive breakdown of my self-assessed capabilities across digital marketing, video editing, and full stack web engineering."
        />

        {/* 3 Interactive Cards Grid */}
        <motion.div
          onViewportEnter={() => setInView(true)}
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10"
        >
          {/* ========================================================
              SKILL 01: DIGITAL MARKETING (80%)
              - Animated circular progress ring
              - Upward animating counter
              - Subtle floating icons
              - Gradient stroke around indicator
             ======================================================== */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -6 }}
            className="rounded-3xl bg-slate-900/50 border border-blue-500/20 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden shadow-xl hover:border-blue-500/40 transition-all flex flex-col justify-between group"
          >
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/15 transition-colors pointer-events-none" />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-md">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400">
                      Skill 01
                    </span>
                    <h3 className="text-xl font-bold text-white">Digital Marketing</h3>
                  </div>
                </div>
              </div>

              {/* Circular Progress Ring with Floating Marketing Icons */}
              <div className="flex items-center justify-center my-6 relative">
                {/* SVG Circular Ring */}
                <div className="relative w-40 h-40 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                    {/* Background Track */}
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      className="stroke-slate-800"
                      strokeWidth="10"
                      fill="none"
                    />
                    {/* Animated Progress Gradient Ring (Circumference ~314) */}
                    <motion.circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke="url(#marketingGrad)"
                      strokeWidth="10"
                      strokeLinecap="round"
                      fill="none"
                      strokeDasharray={314.16}
                      initial={{ strokeDashoffset: 314.16 }}
                      animate={inView ? { strokeDashoffset: 314.16 * (1 - 0.8) } : {}}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                    <defs>
                      <linearGradient id="marketingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#60a5fa" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Percentage Counter in Center */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-black text-white font-mono">
                      {animatedMarketing}%
                    </span>
                    <span className="text-[10px] font-mono text-blue-300 uppercase tracking-wider mt-0.5">
                      Proficiency
                    </span>
                  </div>

                  {/* Subtle Floating Marketing Icons */}
                  <motion.div
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-1 -right-1 p-1.5 rounded-lg bg-blue-900/60 border border-blue-400/40 text-blue-300 shadow-md"
                  >
                    <Search className="w-3.5 h-3.5" />
                  </motion.div>
                  <motion.div
                    animate={{ y: [3, -3, 3] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-1 -left-1 p-1.5 rounded-lg bg-indigo-900/60 border border-indigo-400/40 text-indigo-300 shadow-md"
                  >
                    <Target className="w-3.5 h-3.5" />
                  </motion.div>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-2 mt-4">
                {skillsData[0].items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Audience & Conversion</span>
              <span className="text-blue-400">80% Self-Assessed</span>
            </div>
          </motion.div>

          {/* ========================================================
              SKILL 02: VIDEO EDITING (80%)
              - Moving video timeline across card
              - Audio waveform graphics animation
              - Progress bar fills to 80%
              - Hover-reactive editing icons
             ======================================================== */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -6 }}
            className="rounded-3xl bg-slate-900/50 border border-purple-500/20 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden shadow-xl hover:border-purple-500/40 transition-all flex flex-col justify-between group"
          >
            <div className="absolute top-0 right-0 w-44 h-44 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/15 transition-colors pointer-events-none" />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-md">
                    <Film className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400">
                      Skill 02
                    </span>
                    <h3 className="text-xl font-bold text-white">Video Editing</h3>
                  </div>
                </div>
              </div>

              {/* Animated Timeline & Audio Waveform Visual */}
              <div className="my-5 p-4 rounded-2xl bg-black/40 border border-purple-500/20 space-y-3">
                {/* Simulated Moving Video Playhead & Timeline Tracks */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] font-mono text-purple-300">
                    <span className="flex items-center gap-1">
                      <Play className="w-3 h-3 text-purple-400 fill-purple-400" />
                      TIMELINE
                    </span>
                    <span>00:02:18 / 00:03:00</span>
                  </div>

                  {/* Video Track with scrubbing playhead */}
                  <div className="relative h-6 w-full rounded-md bg-purple-950/40 border border-purple-500/30 overflow-hidden flex items-center">
                    <div className="h-full bg-gradient-to-r from-purple-600/40 via-pink-600/30 to-purple-600/40 w-full" />
                    {/* Dynamic Moving Playhead */}
                    <motion.div
                      animate={{ left: ["5%", "95%", "5%"] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                      className="absolute top-0 bottom-0 w-0.5 bg-cyan-400 shadow-[0_0_8px_#22d3ee]"
                    />
                  </div>
                </div>

                {/* Animated Audio Waveform Graphic */}
                <div className="flex items-end justify-between h-8 px-2 gap-1">
                  {[40, 75, 55, 90, 60, 85, 45, 100, 70, 80, 50, 95, 65, 85, 40, 70, 90, 60].map(
                    (val, i) => (
                      <motion.div
                        key={i}
                        animate={{ height: inView ? [`${val * 0.4}%`, `${val}%`, `${val * 0.3}%`] : "20%" }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.05,
                        }}
                        className="w-1.5 rounded-full bg-gradient-to-t from-purple-500 to-pink-400 opacity-80"
                      />
                    )
                  )}
                </div>

                {/* Progress Bar Fills to 80% */}
                <div className="space-y-1 pt-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-400">Assessed Skill</span>
                    <span className="text-purple-300 font-bold">{animatedVideo}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: "80%" } : {}}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-2 mt-4">
                {skillsData[1].items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>CapCut & Premiere</span>
              <span className="text-purple-400">80% Self-Assessed</span>
            </div>
          </motion.div>

          {/* ========================================================
              SKILL 03: FULL STACK DEVELOPMENT (60%)
              - Code snippet typing effect
              - Connected nodes & programming symbols floating
              - Progress ring animates to 60%
              - Subtle terminal-inspired visual in background
             ======================================================== */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -6 }}
            className="rounded-3xl bg-slate-900/50 border border-cyan-500/20 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden shadow-xl hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
          >
            <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/15 transition-colors pointer-events-none" />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-md">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">
                      Skill 03
                    </span>
                    <h3 className="text-xl font-bold text-white">Full Stack Dev</h3>
                  </div>
                </div>
              </div>

              {/* Terminal Code Snippet Visual with Progress Ring */}
              <div className="my-5 p-4 rounded-2xl bg-black/50 border border-cyan-500/20 font-mono relative overflow-hidden">
                {/* Terminal top bar */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500/80" />
                    <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-cyan-300">stack.ts</span>
                </div>

                {/* Animated Code Typing Simulation */}
                <div className="text-[11px] text-slate-300 space-y-1">
                  <div>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-300">developer</span> = &#123;
                  </div>
                  <div className="pl-3">
                    <span className="text-slate-400">frontend:</span>{" "}
                    <span className="text-emerald-300">&quot;React.js&quot;</span>,
                  </div>
                  <div className="pl-3">
                    <span className="text-slate-400">backend:</span>{" "}
                    <span className="text-cyan-300">&quot;Node & Express&quot;</span>,
                  </div>
                  <div className="pl-3">
                    <span className="text-slate-400">database:</span>{" "}
                    <span className="text-amber-300">&quot;MongoDB&quot;</span>
                  </div>
                  <div>&#125;;</div>
                </div>

                {/* Circular indicator 60% */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs text-slate-300 font-mono">Proficiency</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: "60%" } : {}}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                      />
                    </div>
                    <span className="text-xs font-bold text-cyan-300 font-mono">
                      {animatedDev}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-2 mt-4">
                {skillsData[2].items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>React & Node.js</span>
              <span className="text-cyan-400">60% Self-Assessed</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Mandatory Self-Assessment Disclaimer Notice */}
        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 max-w-xl mx-auto text-center flex items-center justify-center gap-2.5 text-xs text-slate-400">
          <Info className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>{skillAssessmentDisclaimer}</span>
        </div>
      </div>
    </section>
  );
};
