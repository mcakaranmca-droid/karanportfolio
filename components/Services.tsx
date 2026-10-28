"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Film,
  Code2,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { servicesData } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { scrollToSection } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  Film,
  Code2,
};

export const Services: React.FC = () => {
  const handleServiceSelect = (serviceTitle: string) => {
    scrollToSection("contact");
  };

  return (
    <section id="services" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Solutions & Capabilities"
          title="What I"
          highlight="Can Do"
          description="Specialized services combining creative content production, growth-oriented digital marketing, and modern full-stack web engineering."
        />

        {/* 3 Interactive Service Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon] || Sparkles;

            return (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl bg-slate-900/50 border border-white/10 p-7 sm:p-8 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between group hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300"
              >
                {/* Dynamic Gradient Lighting Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />
                <div className="absolute top-0 right-0 w-36 h-36 bg-white/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />

                <div className="relative z-10">
                  {/* Top Bar: Icon & Category Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase bg-white/5 border border-white/10 text-cyan-300">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 mb-8">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Functional CTA */}
                <div className="relative z-10 pt-4 border-t border-white/10">
                  <button
                    onClick={() => handleServiceSelect(service.title)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 border border-white/10 hover:border-transparent text-slate-200 hover:text-white text-xs sm:text-sm font-semibold transition-all group/btn"
                  >
                    <span>Inquire About {service.title}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
