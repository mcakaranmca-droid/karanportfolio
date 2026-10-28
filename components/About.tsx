"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Film,
  Code2,
  Sparkles,
  Target,
  Compass,
  CheckCircle,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export const About: React.FC = () => {
  const pillars = [
    {
      title: "Digital Marketing Strategy",
      desc: "Creating systematic campaigns, audience targeting models, and search engine optimization frameworks.",
      icon: TrendingUp,
      color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    },
    {
      title: "Creative Video Production",
      desc: "Crafting captivating short-form reels, brand commercials, and dynamic motion edits designed for retention.",
      icon: Film,
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
    {
      title: "Website Development",
      desc: "Engineering modern, responsive web experiences with React, Next.js, and clean software architecture.",
      icon: Code2,
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    },
  ];

  const skillAssessments = [
    {
      label: "Digital Marketing",
      percentage: 80,
      badge: "Core Expertise",
      barColor: "from-indigo-500 to-blue-500",
      description: "Strategy, SEO, Google & Meta Ads, Analytics, Lead Funnels",
    },
    {
      label: "Video Editing",
      percentage: 80,
      badge: "Core Expertise",
      barColor: "from-purple-500 to-pink-500",
      description: "CapCut, Premiere Pro, Motion Graphics, Short-Form Reels",
    },
    {
      label: "Full Stack Development",
      percentage: 60,
      badge: "Modern Engineering",
      barColor: "from-cyan-500 to-teal-500",
      description: "React, Next.js, TypeScript, Tailwind, Node.js, REST APIs",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Philosophy & Background"
          title="Creative Thinking."
          highlight="Strategic Execution."
          description="Connecting the dots between marketing psychology, cinematic storytelling, and clean technical code."
        />

        {/* 2-Column Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column - Detailed About Narrative */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="rounded-2xl bg-slate-900/50 border border-white/10 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent" />
                <span>Bridging Strategy, Creativity & Code</span>
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  In a digital landscape crowded with generic templates and uninspired campaigns, true impact demands a multi-disciplinary mindset. As a{" "}
                  <strong className="text-white font-semibold">Digital Marketer</strong>,{" "}
                  <strong className="text-white font-semibold">Video Editor</strong>, and{" "}
                  <strong className="text-white font-semibold">Full Stack Developer</strong>, I bring together the creative instincts of a content creator with the analytical rigor of a digital marketer and the precision of a software developer.
                </p>

                <p>
                  Rather than treating marketing, video editing, and website design as isolated silos, I view them as interdependent parts of a unified online ecosystem:
                </p>
              </div>

              {/* 3 Pillars List */}
              <div className="mt-6 space-y-3.5">
                {pillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors"
                    >
                      <div className={`p-2 rounded-lg border ${pillar.color} shrink-0 mt-0.5`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{pillar.title}</h4>
                        <p className="text-xs text-muted mt-0.5 leading-relaxed">{pillar.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Focus tags */}
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-2">
                {[
                  "Brand Storytelling",
                  "Performance-Focused Thinking",
                  "Continuous Learning",
                  "Algorithm Awareness",
                  "Modular Architecture",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-300"
                  >
                    <CheckCircle className="w-3 h-3 text-accent" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Expertise Assessment Cards */}
          <motion.div
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Professional Statement Card */}
            <div className="rounded-2xl bg-gradient-to-br from-indigo-950/40 via-purple-950/30 to-slate-900/60 border border-indigo-500/20 p-6 backdrop-blur-xl relative">
              <span className="text-[11px] font-mono uppercase tracking-wider text-accent font-semibold block mb-2">
                Mission & Direction
              </span>
              <p className="text-white text-base sm:text-lg font-medium italic leading-snug">
                "My goal is to combine creativity, marketing strategy, and technology to help businesses strengthen their online presence and connect with their audiences."
              </p>
              <div className="mt-4 flex items-center justify-between text-xs text-muted border-t border-white/10 pt-3">
                <span className="font-semibold text-slate-200">{siteConfig.name}</span>
                <span className="font-mono text-cyan-400">Strategy • Motion • Code</span>
              </div>
            </div>

            {/* Self-Assessed Skill Proficiency Cards */}
            <div className="rounded-2xl bg-slate-900/50 border border-white/10 p-6 backdrop-blur-xl space-y-5">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">
                  Self-Assessed Skill Distribution
                </h4>
                <span className="text-[10px] font-mono text-muted bg-white/5 px-2 py-0.5 rounded border border-white/10">
                  Core Ratios
                </span>
              </div>

              {skillAssessments.map((item) => (
                <div key={item.label} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-bold text-white block">{item.label}</span>
                      <span className="text-[11px] text-muted">{item.description}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-black text-white">{item.percentage}%</span>
                      <span className="text-[10px] text-accent block font-mono">{item.badge}</span>
                    </div>
                  </div>

                  {/* Progress Bar Container */}
                  <div className="w-full h-2.5 rounded-full bg-slate-950/80 p-0.5 border border-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                      className={`h-full rounded-full bg-gradient-to-r ${item.barColor}`}
                    />
                  </div>
                </div>
              ))}

              <p className="text-[11px] text-slate-400 italic pt-2 border-t border-white/5">
                Note: Percentages denote self-assessed relative skill focus and technical depth across each discipline.
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
