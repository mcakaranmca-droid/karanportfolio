"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Film,
  Code2,
  Sparkles,
  ChevronDown,
  Terminal,
  Play,
  Layers,
  Activity,
  Bot,
} from "lucide-react";
import { siteConfig, heroTypingRoles } from "@/lib/constants";
import { scrollToSection } from "@/lib/utils";

export const Hero: React.FC = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation loop
  useEffect(() => {
    const fullText = heroTypingRoles[currentRoleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < fullText.length) {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1900);
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
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 lg:py-32 overflow-hidden"
    >
      {/* Cinematic Ambient Grid & Glow Trails */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.18),rgba(255,255,255,0))] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Floating Gradient Light Trails */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.28, 0.15],
          x: [-20, 20, -20],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.25, 0.15],
          y: [-20, 20, -20],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-purple-600/25 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN - Personal Brand & Cinematic Entrance */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Personal Brand & Location Pill */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full text-xs font-mono font-semibold tracking-wider uppercase mb-6 bg-white/[0.04] border border-white/10 text-cyan-300 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span className="text-white font-bold tracking-widest">{siteConfig.name}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">BCA Graduate</span>
              <span className="text-slate-500">•</span>
              <span className="text-cyan-400 font-normal">Trichy, TN</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.08] mb-4">
              CREATIVITY MEETS{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
                TECHNOLOGY.
              </span>
            </h1>

            {/* Supporting Headline */}
            <h2 className="text-lg sm:text-2xl font-bold text-slate-200 tracking-wide mb-4">
              <span className="text-blue-400">Digital Marketing</span>
              <span className="text-slate-600 mx-2">•</span>
              <span className="text-purple-400">Video Editing</span>
              <span className="text-slate-600 mx-2">•</span>
              <span className="text-cyan-400">Full Stack Development</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-5">
              Turning ideas into digital experiences through creative storytelling, smart marketing,
              and modern web development.
            </p>

            {/* Typing specializations */}
            <div className="h-8 flex items-center mb-8">
              <span className="text-xs sm:text-sm font-mono text-slate-400 mr-2 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                Focus:
              </span>
              <span className="text-xs sm:text-sm font-mono font-semibold text-cyan-300">
                {displayedText}
              </span>
              <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse ml-1" />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-sm shadow-xl shadow-blue-600/25 hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-slate-200 hover:text-white font-semibold text-sm backdrop-blur-md hover:border-white/30 transition-all"
              >
                <span>Let&apos;s Collaborate</span>
              </button>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Floating Glassmorphic 3D Visual Cards & Orbit */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center min-h-[420px]"
          >
            {/* Glowing Orbital Ring */}
            <div className="relative w-72 sm:w-80 h-72 sm:h-80 flex items-center justify-center">
              {/* Spinning geometric ring 1 */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-cyan-400/20"
              />
              {/* Spinning geometric ring 2 */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border border-purple-500/20"
              />

              {/* Central 3D-inspired Avatar / Monogram Badge */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative z-10 w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 border border-white/20 p-2 shadow-2xl flex flex-col items-center justify-center text-center backdrop-blur-xl group cursor-pointer"
                onClick={() => scrollToSection("about")}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative z-10 w-full h-full rounded-full bg-slate-900/80 border border-white/10 flex flex-col items-center justify-center p-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-black text-xl tracking-wider shadow-lg shadow-blue-500/30 mb-2">
                    KC
                  </div>
                  <span className="text-white font-bold text-sm tracking-wide">KARAN C</span>
                  <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-widest mt-0.5">
                    Portfolio 2026
                  </span>
                </div>
              </motion.div>

              {/* Floating Card 1: Digital Marketing */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-6 sm:-left-10 z-20 p-3 sm:p-3.5 rounded-2xl bg-slate-900/80 border border-blue-500/30 backdrop-blur-xl shadow-xl flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400">MARKETING</div>
                  <div className="text-xs font-bold text-white">80% Proficiency</div>
                </div>
              </motion.div>

              {/* Floating Card 2: Video Editing */}
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -right-4 sm:-right-8 z-20 p-3 sm:p-3.5 rounded-2xl bg-slate-900/80 border border-purple-500/30 backdrop-blur-xl shadow-xl flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Film className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400">VIDEO EDITING</div>
                  <div className="text-xs font-bold text-white">80% Pacing & SFX</div>
                </div>
              </motion.div>

              {/* Floating Card 3: NOVIS AI Preview */}
              <motion.div
                animate={{ x: [-6, 6, -6] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                onClick={() => scrollToSection("novis")}
                className="absolute -bottom-6 -left-4 sm:-left-8 z-20 p-3 rounded-2xl bg-slate-900/80 border border-cyan-500/30 backdrop-blur-xl shadow-xl flex items-center gap-3 cursor-pointer hover:border-cyan-400 transition-all"
              >
                <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-cyan-300">FLAGSHIP</div>
                  <div className="text-xs font-bold text-white">NOVIS AI Core</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer select-none text-slate-400 hover:text-white transition-colors"
        onClick={() => scrollToSection("about")}
      >
        <span className="text-[11px] font-mono tracking-widest uppercase">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};
