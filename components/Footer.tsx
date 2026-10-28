"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUp,
  Heart,
  Linkedin,
  Github,
  Instagram,
  Mail,
  Sparkles,
} from "lucide-react";
import { siteConfig, navLinks } from "@/lib/constants";
import { scrollToSection } from "@/lib/utils";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-slate-950/80 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-500/10 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          
          {/* Col 1: Personal Brand & Monogram Logo */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-black text-sm tracking-wider shadow-lg shadow-blue-500/20">
                {siteConfig.initials}
              </div>
              <div>
                <span className="text-lg font-black text-white tracking-tight">
                  {siteConfig.name}
                </span>
                <span className="block text-[11px] font-mono text-cyan-300">
                  {siteConfig.role}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              BCA Graduate from Trichy, Tamil Nadu. Creating digital marketing strategies, creative video
              storytelling, and full stack web solutions. Building NOVIS AI Assistant.
            </p>

            <div className="pt-1">
              <span className="inline-block text-xs font-medium text-cyan-200/90 italic bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                &ldquo;Designed with creativity. Built with technology.&rdquo;
              </span>
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white font-bold block mb-4">
              Quick Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href.replace("#", ""))}
                  className="text-left text-slate-400 hover:text-cyan-300 transition-colors py-1"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Socials & Back to Top */}
          <div className="md:col-span-3 space-y-4 flex flex-col md:items-end">
            <span className="text-xs font-mono uppercase tracking-wider text-white font-bold block mb-2">
              Connect With Me
            </span>

            <div className="flex items-center gap-2">
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-105"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-105"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-105"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.socials.email}
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-105"
                title="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Back to Top Button */}
            <div className="pt-3">
              <button
                onClick={handleBackToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-all group"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-cyan-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p className="font-mono text-[11px] text-slate-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Trichy, Tamil Nadu, India • Ready for Opportunities</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
