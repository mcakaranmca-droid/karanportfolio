"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Sparkles,
  Cpu,
  Layers,
  ArrowRight,
  Github,
  ExternalLink,
  Code2,
  Server,
  Database,
  Mic,
  MessageSquare,
  CheckCircle2,
  Clock,
  Terminal,
  Volume2,
  Play,
  RotateCcw,
  CheckSquare,
  Info,
  X,
} from "lucide-react";
import { NovisOrb } from "./NovisOrb";
import {
  novisRoadmap,
  novisTechStack,
  novisTimelinePhases,
  siteConfig,
} from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export const NovisShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"features" | "tech" | "timeline">("features");
  const [showArchModal, setShowArchModal] = useState(false);

  // Interactive simulated prompts
  const samplePrompts = [
    {
      label: "Ask about NOVIS Vision",
      prompt: "What is NOVIS and what problem does it solve?",
      response:
        "NOVIS is KARAN C's flagship personal AI assistant project. It bridges full-stack engineering and intelligent conversation to assist with daily workflows, content ideation, and context-aware task management.",
    },
    {
      label: "Marketing Automation",
      prompt: "How can NOVIS assist in digital marketing campaigns?",
      response:
        "NOVIS explores automated SEO keyword suggestions, ad copy generation concepts for Meta/Google Ads, and campaign data analysis into actionable creative strategies.",
    },
    {
      label: "Full Stack Architecture",
      prompt: "What powers NOVIS under the hood?",
      response:
        "Built on a modular React.js frontend interface with high-performance animations, connected to a Node.js/Express.js backend orchestrating secure AI model API queries.",
    },
    {
      label: "Voice AI Simulation",
      prompt: "Simulate natural speech response workflow",
      response:
        "[Audio Synthesizer: Active] 'Hello Karan. NOVIS core online. Audio input parsed with 98% confidence. Ready to execute your scheduled tasks.'",
    },
  ];

  const [activePromptIndex, setActivePromptIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [streamedText, setStreamedText] = useState(samplePrompts[0].response);

  const handleSelectPrompt = (index: number) => {
    setActivePromptIndex(index);
    setIsTyping(true);
    setStreamedText("");

    const fullText = samplePrompts[index].response;
    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx < fullText.length) {
        setStreamedText(fullText.slice(0, currentIdx + 1));
        currentIdx++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 18);
  };

  return (
    <section id="novis" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-blue-600/15 via-purple-600/15 to-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Flagship Project Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 border border-cyan-500/30 text-cyan-300 backdrop-blur-md mb-4 shadow-lg shadow-cyan-500/10"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
            <span>FLAGSHIP PROJECT • IN ACTIVE DEVELOPMENT</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] mb-4"
          >
            MEET{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
              NOVIS.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl font-medium text-slate-300 mb-3"
          >
            Your Personal AI Assistant. Built for What&apos;s Next.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="text-sm sm:text-base text-slate-400 leading-relaxed"
          >
            &ldquo;NOVIS is my personal AI assistant currently in development. Driven by my passion
            for artificial intelligence, full stack development, and innovative digital experiences,
            I&apos;m building NOVIS as a journey from concept to a working AI-powered application.&rdquo;
          </motion.p>
        </div>

        {/* Hero Interactive Orb Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-20">
          
          {/* Left Column: Interactive Orb Core */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center justify-center p-6 sm:p-10 rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-2xl relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400" />
            <NovisOrb
              statusText="NOVIS INTELLIGENCE CORE"
              onOrbClick={() => handleSelectPrompt((activePromptIndex + 1) % samplePrompts.length)}
            />

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 border border-blue-500/30 text-blue-300">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
                Context Memory: Ready
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 border border-purple-500/30 text-purple-300">
                <Cpu className="w-3.5 h-3.5 text-purple-400" />
                LLM Pipeline: Modular
              </span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Chat & Simulation Sandbox */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
          >
            <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                    NOVIS Interaction Sandbox
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      v0.4-dev
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400">Interactive conversational preview prototype</p>
                </div>
              </div>

              <button
                onClick={() => handleSelectPrompt(activePromptIndex)}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
                title="Re-run prompt stream"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Prompt Selector Chips */}
            <div className="mb-5">
              <p className="text-xs font-mono text-slate-400 mb-2.5">
                Select a simulated dialogue query to test NOVIS reasoning:
              </p>
              <div className="flex flex-wrap gap-2">
                {samplePrompts.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectPrompt(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                      activePromptIndex === idx
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30 border border-blue-400/40"
                        : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated Chat Dialogue Bubble */}
            <div className="rounded-2xl bg-black/40 border border-white/10 p-5 space-y-4 font-sans min-h-[170px] flex flex-col justify-center">
              {/* User Prompt */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center text-xs font-mono font-bold text-indigo-300 shrink-0 mt-0.5">
                  YOU
                </div>
                <p className="text-xs sm:text-sm text-slate-200 font-mono bg-white/5 px-3 py-2 rounded-xl border border-white/10 w-full">
                  {samplePrompts[activePromptIndex].prompt}
                </p>
              </div>

              {/* NOVIS Streamed Response */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-xs font-mono font-bold text-cyan-300 shrink-0 mt-0.5">
                  <Bot className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="w-full">
                  <p className="text-xs sm:text-sm text-cyan-100/90 leading-relaxed bg-cyan-950/30 border border-cyan-500/20 p-3.5 rounded-xl">
                    {streamedText}
                    {isTyping && <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse ml-1 align-middle" />}
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs & Modal Triggers */}
            <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => setShowArchModal(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-indigo-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Layers className="w-4 h-4" />
                <span>Explore NOVIS Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-medium text-xs sm:text-sm transition-all"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code (In Dev)</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Interactive Tabs: Roadmap | Tech Stack | Timeline */}
        <div className="mb-12">
          <div className="flex justify-center border-b border-white/10">
            <div className="flex gap-2 sm:gap-6">
              {[
                { id: "features", label: "01. Feature Roadmap", icon: Sparkles },
                { id: "tech", label: "02. Technology Stack", icon: Code2 },
                { id: "timeline", label: "03. Development Timeline", icon: Clock },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold border-b-2 transition-all ${
                      isActive
                        ? "border-cyan-400 text-cyan-300 bg-white/[0.02]"
                        : "border-transparent text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tab 1: Feature Roadmap */}
        {activeTab === "features" && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {novisRoadmap.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="rounded-2xl bg-slate-900/50 border border-white/10 p-6 backdrop-blur-xl hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />
                
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xl font-black text-cyan-400/60">
                    {item.phase}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase font-semibold ${
                      item.status === "In Progress"
                        ? "bg-amber-500/10 text-amber-300 border border-amber-500/30"
                        : item.status === "In Development"
                        ? "bg-blue-500/10 text-blue-300 border border-blue-500/30"
                        : "bg-slate-800 text-slate-400 border border-white/10"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Tab 2: Technology Stack */}
        {activeTab === "tech" && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {novisTechStack.map((stack, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="rounded-2xl bg-slate-900/50 border border-white/10 p-6 backdrop-blur-xl relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-base font-bold text-white">{stack.category}</h4>
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono uppercase ${stack.color}`}>
                    {stack.status}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {stack.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Tab 3: Development Timeline */}
        {activeTab === "timeline" && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {novisTimelinePhases.map((phase, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="rounded-2xl bg-slate-900/50 border border-white/10 p-6 backdrop-blur-xl relative"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-semibold text-cyan-400">{phase.phase}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-mono uppercase ${
                      phase.status === "Completed"
                        ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/30"
                        : phase.status === "In Progress"
                        ? "bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
                        : "bg-slate-800 text-slate-400 border border-white/10"
                    }`}
                  >
                    {phase.status}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">{phase.title}</h4>
                <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed mb-3">
                  {phase.description}
                </p>
                <span className="text-[11px] font-mono text-slate-400">{phase.date}</span>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* NOVIS Closing Statement */}
        <div className="mt-16 text-center">
          <div className="inline-block p-px rounded-2xl bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30">
            <div className="px-6 py-4 rounded-2xl bg-slate-950/80 backdrop-blur-xl">
              <p className="text-sm sm:text-base font-semibold text-slate-200 italic">
                &ldquo;NOVIS is more than a project. It&apos;s my journey into building intelligent digital experiences.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Deep Dive Architecture Modal */}
      <AnimatePresence>
        {showArchModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setShowArchModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-white/15 rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">NOVIS System Architecture</h3>
                    <p className="text-xs text-slate-400">Under the Hood & Technical Blueprint</p>
                  </div>
                </div>

                <button
                  onClick={() => setShowArchModal(false)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6 text-sm text-slate-300">
                <div className="p-4 rounded-xl bg-black/40 border border-white/10 font-mono text-xs">
                  <div className="text-cyan-400 mb-2 font-bold">[ARCHITECTURE DATA FLOW]</div>
                  <div className="text-slate-400 space-y-1">
                    <div>1. User Input (Text Query / Speech Capture)</div>
                    <div>↓ Forwarded via WebSocket / REST endpoints</div>
                    <div>2. Node.js & Express API Gateway (Validation & Rate Limiting)</div>
                    <div>↓ Context Enrichment with Session Memory</div>
                    <div>3. Intelligent Model Orchestration (Generative AI Pipeline)</div>
                    <div>↓ Streaming Tokenized Response Output</div>
                    <div>4. React Interface Canvas (Orb Waveform Reaction & UI Display)</div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white mb-2">Development Philosophy</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    NOVIS is designed with strict modularity. The conversational intelligence layer is
                    decoupled from the client presentation, allowing continuous upgrades as new LLM
                    models and speech synthesis technologies evolve.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white mb-2">Honest Development Status</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    The frontend interface, interactive core, and simulated intelligence playground are
                    functional. Backend API pipelines and LLM model hooks are currently in active
                    development.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex justify-end">
                  <button
                    onClick={() => setShowArchModal(false)}
                    className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold"
                  >
                    Close Architecture View
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
