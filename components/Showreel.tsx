"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Film,
  Sparkles,
  Layers,
  Sliders,
  CheckCircle,
  Video,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { showreelCategories, ShowreelCategory } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";

export const Showreel: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<ShowreelCategory>(
    showreelCategories[0]
  );
  const [progress, setProgress] = useState(25);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="showreel" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Cinematic Showcase"
          title="Watch Creativity"
          highlight="in Motion."
          description="A demonstration of pacing, kinetic typography, color grading, and dynamic short-form video editing designed to stop the scroll."
        />

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {showreelCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat);
                setIsPlaying(false);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory.id === cat.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md shadow-purple-600/30 scale-105"
                  : "bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Cinematic Video Showcase Container */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Ambient Glow Aura */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-600/30 via-pink-600/20 to-indigo-600/30 blur-2xl opacity-60 pointer-events-none" />

          {/* Main 16:9 Frame */}
          <div className="relative rounded-2xl sm:rounded-3xl bg-slate-950 border border-white/20 shadow-2xl overflow-hidden aspect-video flex flex-col justify-between">
            
            {/* Top Overlay Bar */}
            <div className="relative z-20 flex items-center justify-between p-4 sm:p-6 bg-gradient-to-b from-black/80 to-transparent">
              <div className="flex items-center gap-3">
                <span className="flex h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs sm:text-sm font-mono font-bold text-white uppercase tracking-wider">
                  {selectedCategory.title} Showcase
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-slate-300">
                  {selectedCategory.badge}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-slate-400 bg-black/40 px-2.5 py-1 rounded-lg border border-white/10">
                  Ratio: {selectedCategory.aspectRatio}
                </span>
              </div>
            </div>

            {/* Center Stage - Cinematic Backdrop & Play Trigger */}
            <div className="relative flex-1 flex items-center justify-center p-6 text-center">
              {/* Dynamic Animated Motion Art Backdrop */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 opacity-40 scale-105"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.4) 0%, rgba(15, 23, 42, 0.95) 80%)",
                }}
              />

              {/* Grid lines overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

              <div className="relative z-20 max-w-md mx-auto space-y-4">
                {/* Center Play Button */}
                <button
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  className="mx-auto flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-gradient-to-tr from-purple-600 via-pink-600 to-indigo-600 text-white shadow-xl shadow-purple-600/50 hover:scale-110 active:scale-95 transition-all group focus:outline-none focus:ring-4 focus:ring-purple-400/40"
                >
                  {isPlaying ? (
                    <Pause className="w-7 h-7 sm:w-8 sm:h-8" />
                  ) : (
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                  )}
                </button>

                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {selectedCategory.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-sm mx-auto">
                    {selectedCategory.description}
                  </p>
                </div>

                {/* Status notice */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono bg-purple-950/60 border border-purple-500/30 text-purple-300">
                  <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                  <span>Cinematic Reel Preview System</span>
                </div>
              </div>
            </div>

            {/* Bottom Custom Video Player Controls Bar */}
            <div className="relative z-20 p-4 sm:p-5 bg-gradient-to-t from-black/95 via-black/80 to-transparent space-y-3">
              {/* Progress Scrubber Bar */}
              <div className="space-y-1">
                <div className="w-full h-1.5 rounded-full bg-white/20 overflow-hidden cursor-pointer">
                  <div
                    style={{ width: `${isPlaying ? 68 : progress}%` }}
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300"
                  />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-slate-400">
                  <span>{isPlaying ? "00:09" : "00:03"}</span>
                  <span>00:30 (Reel Cut)</span>
                </div>
              </div>

              {/* Controls Row */}
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="p-1.5 rounded-lg hover:bg-white/10 text-white transition-colors"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-1.5 rounded-lg hover:bg-white/10 text-white transition-colors"
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-rose-400" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </button>

                  <span className="text-xs font-mono text-slate-300 hidden sm:inline">
                    4K UHD • 60FPS
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {selectedCategory.tags.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="hidden md:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                  <button
                    aria-label="Fullscreen"
                    className="p-1.5 rounded-lg hover:bg-white/10 text-white transition-colors"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Subtitle / Callout below video */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted px-2">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>
                Need custom video edits for your brand? Ready for CapCut, Premiere Pro & Reels.
              </span>
            </div>
            <a
              href="#contact"
              className="text-accent hover:underline font-semibold flex items-center gap-1"
            >
              Request a Video Edit &rarr;
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
