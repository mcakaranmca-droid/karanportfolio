"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Linkedin,
  Github,
  Instagram,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  Copy,
  Check,
  MapPin,
  Clock,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig, contactPresetSubjects } from "@/lib/constants";
import { ContactFormData, ValidationErrors, validateContactForm } from "@/lib/validation";
import { fadeInUp } from "@/lib/animations";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    service: contactPresetSubjects[0],
    budget: "Flexible / Discussion",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    // Validate
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatusMessage({
          type: "success",
          text: result.message || "Message sent successfully! I will respond promptly.",
        });
        setFormData({
          name: "",
          email: "",
          service: contactPresetSubjects[0],
          budget: "Flexible / Discussion",
          message: "",
          honeypot: "",
        });
        setErrors({});
      } else {
        setStatusMessage({
          type: "error",
          text: result.message || "Failed to send message. Please try again or email directly.",
        });
        if (result.errors) {
          setErrors(result.errors);
        }
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatusMessage({
        type: "error",
        text: "Network error occurred. Please reach out via direct email at contact.karanportfolio@gmail.com.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with exact master prompt title */}
        <SectionHeader
          badge="Get In Touch"
          title="Have an Idea?"
          highlight="Let's Build Something Great."
          description="Whether you need a creative promotional video, a digital marketing strategy, a modern website, or a conversation about an innovative project, let's connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN - Contact Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl bg-slate-900/60 border border-white/10 p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-2xl relative">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span>Send a Direct Message</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the form below or select a project inquiry topic.
              </p>

              {/* Quick Preset Selector */}
              <div className="mb-6">
                <span className="text-xs font-mono text-slate-400 block mb-2">
                  Quick Inquiry Topic:
                </span>
                <div className="flex flex-wrap gap-2">
                  {contactPresetSubjects.map((subject, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, service: subject }))}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                        formData.service === subject
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30 border border-blue-400/40"
                          : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
                      }`}
                    >
                      {subject}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
                {/* Honeypot for spam bots */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex"
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/70 border text-white text-sm focus:outline-none transition-colors ${
                        errors.name
                          ? "border-rose-500/80 focus:border-rose-400"
                          : "border-white/10 focus:border-cyan-400"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@domain.com"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/70 border text-white text-sm focus:outline-none transition-colors ${
                        errors.email
                          ? "border-rose-500/80 focus:border-rose-400"
                          : "border-white/10 focus:border-cyan-400"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Selected Subject */}
                <div>
                  <label htmlFor="service-select" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Subject / Project Area <span className="text-cyan-400">*</span>
                  </label>
                  <select
                    id="service-select"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    {contactPresetSubjects.map((srv) => (
                      <option key={srv} value={srv} className="bg-slate-900 text-white">
                        {srv}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your vision, goals, and what you would like to build..."
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/70 border text-white text-sm focus:outline-none transition-colors ${
                      errors.message
                        ? "border-rose-500/80 focus:border-rose-400"
                        : "border-white/10 focus:border-cyan-400"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submission Status Alerts */}
                {statusMessage && (
                  <div
                    className={`p-4 rounded-xl text-xs sm:text-sm flex items-start gap-2.5 ${
                      statusMessage.type === "success"
                        ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-300"
                        : "bg-rose-500/10 border border-rose-500/20 text-rose-300"
                    }`}
                  >
                    {statusMessage.type === "success" ? (
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    )}
                    <span>{statusMessage.text}</span>
                  </div>
                )}

                {/* Submit Button with Loading State */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-xl shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:pointer-events-none"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Direct Channels, Socials & Location */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="rounded-3xl bg-slate-900/60 border border-white/10 p-6 sm:p-8 backdrop-blur-xl space-y-6">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold block">
                Direct Contact & Channels
              </span>

              {/* Email direct copy box */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] text-slate-400 block font-mono">Email Address</span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-300 transition-colors truncate block"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  aria-label="Copy Email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location & Response Info */}
              <div className="space-y-3 pt-1">
                <div className="flex items-center gap-2.5 text-xs text-slate-300 font-mono">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Prompt Response: Within 24 hours</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300 font-mono">
                  <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>{siteConfig.location}</span>
                </div>
              </div>

              {/* Configurable Social Links */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3 font-semibold">
                  Connect on Social Media
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={siteConfig.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-xs text-slate-200 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={siteConfig.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-xs text-slate-200 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4 text-slate-200 shrink-0" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={siteConfig.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-xs text-slate-200 hover:text-white transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                    <span>Instagram</span>
                  </a>

                  <a
                    href={siteConfig.socials.email}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-xs text-slate-200 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Direct Mail</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Pitch Callout */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-950/40 via-purple-950/40 to-slate-950/40 border border-cyan-500/20 backdrop-blur-xl">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 block mb-1">
                Collaborative Ambition
              </span>
              <h4 className="text-sm font-bold text-white mb-2">Ready to Build Value</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Whether you need a dedicated performance marketing campaign, viral short-form video reels,
                or modern web engineering, I am ready to collaborate and deliver high-impact digital experiences.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
