"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Sparkles,
  TrendingUp,
  Film,
  Code2,
  CheckCircle2,
  Layers,
  Sliders,
  Eye,
  BarChart2,
} from "lucide-react";
import { siteConfig, heroTypingRoles } from "@/lib/constants";
import { scrollToSection } from "@/lib/utils";

export const Hero: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Active workspace tab on the right side: 'all' | 'marketing' | 'video' | 'code'
  const [activeTab, setActiveTab] = useState<"marketing" | "video" | "code">("marketing");

  // Typing animation loop
  useEffect(() => {
    const fullText = heroTypingRoles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < fullText.length) {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(fullText.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % heroTypingRoles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN - Brand Message & Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start z-10"
          >
            {/* Small introduction badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-white/[0.04] border border-white/10 text-cyan-400 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span>HELLO, I'M A CREATIVE DIGITAL PROFESSIONAL</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.1] mb-4">
              Turning Ideas Into{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent underline decoration-indigo-500/40 decoration-wavy decoration-2">
                Digital Growth.
              </span>
            </h1>

            {/* Professional Title */}
            <p className="text-base sm:text-lg font-semibold text-slate-300 tracking-wide mb-3 flex items-center gap-2 flex-wrap">
              <span className="text-indigo-400">Digital Marketer</span>
              <span className="text-slate-600">•</span>
              <span className="text-purple-400">Video Editor</span>
              <span className="text-slate-600">•</span>
              <span className="text-cyan-400">Full Stack Developer</span>
            </p>

            {/* Animated Typing Text */}
            <div className="h-8 sm:h-9 flex items-center mb-6">
              <span className="text-sm sm:text-base font-mono text-muted mr-2">
                Specializing in:
              </span>
              <span className="text-sm sm:text-base font-mono font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-md border border-accent/20">
                {displayedText}
                <span className="animate-pulse ml-0.5 inline-block text-white">|</span>
              </span>
            </div>

            {/* Hero Bio (Exact required wording) */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              {siteConfig.heroBio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              {/* Primary: Explore My Work */}
              <button
                onClick={() => scrollToSection("projects")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary: View Showreel */}
              <button
                onClick={() => scrollToSection("showreel")}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/15 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all group focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white transition-colors">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>View Showreel</span>
              </button>

              {/* Ghost: Let's Collaborate */}
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-white hover:bg-white/[0.03] transition-colors focus:outline-none focus:ring-1 focus:ring-accent"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Let's Collaborate</span>
              </button>
            </div>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 text-xs text-muted">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{siteConfig.availability}</span>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Premium Interactive Creative Workspace */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Subtle glow backdrop behind workspace */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 blur-2xl opacity-70 pointer-events-none" />

            {/* Main Interactive Studio Glass Card */}
            <div className="relative rounded-2xl bg-slate-900/80 border border-white/15 shadow-2xl backdrop-blur-xl overflow-hidden">
              
              {/* Studio Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-slate-950/60">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">
                    creative-studio.workspace
                  </span>
                </div>
                
                {/* Switcher Tabs */}
                <div className="flex items-center gap-1 bg-white/[0.06] p-1 rounded-lg border border-white/10 text-xs font-medium">
                  <button
                    onClick={() => setActiveTab("marketing")}
                    className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 ${
                      activeTab === "marketing"
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <TrendingUp className="w-3 h-3" />
                    <span>Ads</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("video")}
                    className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 ${
                      activeTab === "video"
                        ? "bg-purple-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Film className="w-3 h-3" />
                    <span>Video</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("code")}
                    className={`px-2.5 py-1 rounded-md transition-all flex items-center gap-1.5 ${
                      activeTab === "code"
                        ? "bg-cyan-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Code2 className="w-3 h-3" />
                    <span>Code</span>
                  </button>
                </div>
              </div>

              {/* Dynamic Content Panel */}
              <div className="p-5 sm:p-6 min-h-[360px] flex flex-col justify-between">
                {activeTab === "marketing" && (
                  <motion.div
                    key="marketing"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {/* Header stat */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-muted">
                          Omnichannel Ad Performance
                        </span>
                        <div className="flex items-baseline gap-2 mt-0.5">
                          <span className="text-2xl font-extrabold text-white">3.8x ROAS</span>
                          <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                            +42.6% vs target
                          </span>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                        <BarChart2 className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Chart Simulation */}
                    <div className="rounded-xl bg-slate-950/50 p-3.5 border border-white/5 space-y-2">
                      <div className="flex justify-between text-xs text-slate-400">
                        <span>Campaign Trajectory</span>
                        <span className="text-accent font-mono">148.2k Impressions</span>
                      </div>
                      <div className="h-16 flex items-end gap-1.5 pt-2">
                        {[35, 48, 62, 55, 78, 92, 85, 110, 95, 125, 140, 160].map((val, idx) => (
                          <div
                            key={idx}
                            style={{ height: `${(val / 160) * 100}%` }}
                            className="flex-1 rounded-t bg-gradient-to-t from-indigo-600 to-cyan-400 opacity-80 hover:opacity-100 transition-opacity"
                          />
                        ))}
                      </div>
                      <div className="flex justify-between text-[10px] font-mono text-slate-500 pt-1">
                        <span>Day 1</span>
                        <span>Audience Opt</span>
                        <span>Peak Conversion</span>
                      </div>
                    </div>

                    {/* Channel Badges */}
                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                        <span className="text-[11px] text-muted block">Meta Ads Funnel</span>
                        <span className="text-sm font-bold text-white">3.12% CTR</span>
                        <span className="text-[10px] text-indigo-400 block mt-0.5 font-mono">
                          Reels + Feed
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                        <span className="text-[11px] text-muted block">Google Search SEO</span>
                        <span className="text-sm font-bold text-white">Top 3 Rank</span>
                        <span className="text-[10px] text-cyan-400 block mt-0.5 font-mono">
                          High-Intent Keywords
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "video" && (
                  <motion.div
                    key="video"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-muted">
                          Cinematic Timeline & Motion
                        </span>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-lg font-bold text-white">CapCut & Premiere Pro</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                            4K 60FPS
                          </span>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                        <Film className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Timeline Preview */}
                    <div className="rounded-xl bg-slate-950/60 p-3 border border-white/10 space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-white/5 pb-1.5">
                        <span className="text-cyan-400">00:00:14:28</span>
                        <span className="text-muted">9:16 Vertical Cut</span>
                      </div>

                      {/* Video Track */}
                      <div className="space-y-1.5 pt-1">
                        <div className="flex items-center gap-1 text-[11px]">
                          <span className="w-8 text-[10px] font-mono text-slate-500">V1</span>
                          <div className="flex-1 h-6 rounded bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-800 border border-purple-400/30 flex items-center px-2 text-[10px] text-white font-medium justify-between">
                            <span>A-Roll [Hook Scene]</span>
                            <span className="text-[9px] opacity-75">Speed Ramp</span>
                          </div>
                        </div>

                        {/* B-Roll Track */}
                        <div className="flex items-center gap-1 text-[11px]">
                          <span className="w-8 text-[10px] font-mono text-slate-500">V2</span>
                          <div className="w-1/3 h-6 rounded bg-cyan-600/60 border border-cyan-400/30 flex items-center px-2 text-[10px] text-cyan-200">
                            <span>Kinetic Title</span>
                          </div>
                          <div className="flex-1 h-6 rounded bg-violet-600/60 border border-violet-400/30 flex items-center px-2 text-[10px] text-violet-200">
                            <span>B-Roll Overlay</span>
                          </div>
                        </div>

                        {/* Audio Track */}
                        <div className="flex items-center gap-1 text-[11px]">
                          <span className="w-8 text-[10px] font-mono text-slate-500">A1</span>
                          <div className="flex-1 h-5 rounded bg-emerald-950/60 border border-emerald-500/20 flex items-center px-2 text-[9px] text-emerald-300">
                            <span>Voiceover + Rhythmic SFX Ducking</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                      <span className="flex items-center gap-1.5">
                        <Sliders className="w-3.5 h-3.5 text-accent" />
                        Color Grade: Teal & Orange Custom LUT
                      </span>
                      <span className="text-purple-400 font-mono">100% Synced</span>
                    </div>
                  </motion.div>
                )}

                {activeTab === "code" && (
                  <motion.div
                    key="code"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-muted">
                          Full Stack Architecture
                        </span>
                        <div className="text-lg font-bold text-white mt-0.5">
                          Next.js & TypeScript
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                        <Code2 className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Code Snippet */}
                    <div className="rounded-xl bg-slate-950/90 p-3.5 border border-white/10 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto">
                      <div className="text-slate-500 text-[11px] mb-1">
                        // Clean, Modular Full-Stack Component
                      </div>
                      <p>
                        <span className="text-purple-400">export default async function</span>{" "}
                        <span className="text-blue-400">Portfolio</span>() &#123;
                      </p>
                      <p className="pl-4">
                        <span className="text-purple-400">const</span> clientGrowth ={" "}
                        <span className="text-cyan-400">await</span>{" "}
                        <span className="text-yellow-300">integrateStrategy</span>(&#123;
                      </p>
                      <p className="pl-8 text-emerald-300">
                        marketing: <span className="text-white">"Omnichannel Ads"</span>,
                      </p>
                      <p className="pl-8 text-emerald-300">
                        video: <span className="text-white">"High-Retention Reels"</span>,
                      </p>
                      <p className="pl-8 text-emerald-300">
                        code: <span className="text-white">"Next.js App Router"</span>
                      </p>
                      <p className="pl-4">&#125;);</p>
                      <p className="pl-4">
                        <span className="text-purple-400">return</span> &lt;
                        <span className="text-cyan-400">ImpactScreen</span> stats=&#123;
                        <span className="text-accent">clientGrowth</span>&#125; /&gt;;
                      </p>
                      <p>&#125;</p>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 px-1">
                      <span className="text-emerald-400">✔ Ready for Production</span>
                      <span>TypeScript Strict: Pass</span>
                    </div>
                  </motion.div>
                )}

                {/* Footer Tools Bar */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-muted flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-accent" />
                    Toolkit Integrated
                  </span>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
                      CapCut
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
                      Meta Ads
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
                      Next.js
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Floating Mini Badges for 3D feel */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:flex absolute -bottom-5 -left-4 items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/15 backdrop-blur-xl shadow-xl z-20"
            >
              <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-xs">
                80%
              </div>
              <div className="text-left">
                <span className="text-[11px] text-muted block leading-none">Proficiency</span>
                <span className="text-xs font-bold text-white">Digital Marketing</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="hidden sm:flex absolute -top-5 -right-3 items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/15 backdrop-blur-xl shadow-xl z-20"
            >
              <div className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs">
                80%
              </div>
              <div className="text-left">
                <span className="text-[11px] text-muted block leading-none">Proficiency</span>
                <span className="text-xs font-bold text-white">Video Editing</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
