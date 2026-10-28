"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Share2,
  Target,
  Film,
  Layout,
  Terminal,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { services } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { scrollToSection } from "@/lib/utils";

const serviceIcons: Record<string, React.ElementType> = {
  TrendingUp,
  Share2,
  Target,
  Film,
  Layout,
  Terminal,
};

export const Services: React.FC = () => {
  const handleSelectService = (serviceTitle: string) => {
    // Set service in form if available
    const serviceSelect = document.getElementById("service-select") as HTMLSelectElement | null;
    if (serviceSelect) {
      for (let i = 0; i < serviceSelect.options.length; i++) {
        if (serviceSelect.options[i].text.toLowerCase().includes(serviceTitle.toLowerCase()) ||
            serviceTitle.toLowerCase().includes(serviceSelect.options[i].text.toLowerCase())) {
          serviceSelect.selectedIndex = i;
          serviceSelect.dispatchEvent(new Event("change", { bubbles: true }));
          break;
        }
      }
    }
    scrollToSection("contact");
  };

  return (
    <section id="services" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Solutions & Offerings"
          title="What I Can Do"
          highlight="for Your Business"
          description="High-converting digital services tailored for modern brands, content creators, and growth-oriented companies."
        />

        {/* 6 Services Grid */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon] || TrendingUp;

            return (
              <GlowCard
                key={service.id}
                variants={fadeInUp}
                className="flex flex-col justify-between group h-full"
                glowColor={index % 3 === 0 ? "indigo" : index % 3 === 1 ? "purple" : "cyan"}
              >
                <div>
                  {/* Category Pill & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-white group-hover:scale-110 group-hover:bg-accent/10 group-hover:border-accent/30 group-hover:text-accent transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-muted bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 mb-8 pt-4 border-t border-white/10">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-muted font-semibold block mb-2">
                      Key Deliverables:
                    </span>
                    {service.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inquiry CTA Link */}
                <button
                  type="button"
                  onClick={() => handleSelectService(service.title)}
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-white/10 text-xs font-semibold text-slate-300 group-hover:text-white transition-colors focus:outline-none"
                >
                  <span className="flex items-center gap-1.5 text-accent font-medium">
                    Request This Service
                  </span>
                  <div className="p-1.5 rounded-full bg-white/5 group-hover:bg-accent group-hover:text-slate-900 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              </GlowCard>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
