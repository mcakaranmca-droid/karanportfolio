"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  glowColor?: "indigo" | "purple" | "cyan" | "default";
}

export const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = "",
  glowColor = "default",
  ...props
}) => {
  const glowStyles = {
    indigo: "hover:border-indigo-500/40 hover:shadow-[0_0_30px_-5px_rgba(79,70,229,0.25)]",
    purple: "hover:border-purple-500/40 hover:shadow-[0_0_30px_-5px_rgba(124,58,237,0.25)]",
    cyan: "hover:border-cyan-500/40 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.25)]",
    default: "hover:border-white/20 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.08)]",
  };

  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className={cn(
        "relative rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 transition-all duration-300 p-6 md:p-8",
        glowStyles[glowColor],
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
