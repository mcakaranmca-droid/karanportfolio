"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Linkedin,
  Github,
  Instagram,
  Youtube,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  Copy,
  Check,
  MapPin,
  Clock,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig, contactServices, budgetRanges } from "@/lib/constants";
import { ContactFormData, ValidationErrors, validateContactForm } from "@/lib/validation";
import { fadeInUp } from "@/lib/animations";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    service: contactServices[0],
    budget: budgetRanges[0],
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

    // Validate client-side
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
          text: result.message || "Message sent successfully!",
        });
        setFormData({
          name: "",
          email: "",
          service: contactServices[0],
          budget: budgetRanges[0],
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
      console.error("Submission network error:", err);
      setStatusMessage({
        type: "error",
        text: "Network error occurred. Please check your connection or reach out via direct email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Start a Project"
          title="Let's Build"
          highlight="Something Great."
          description="Have a digital marketing campaign, video editing requirement, or full-stack web project? Send a message and let's bring it to life."
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
              <h3 className="text-xl font-bold text-white mb-2">Send an Inquiry</h3>
              <p className="text-xs sm:text-sm text-muted mb-6">
                Fill out the form below and I'll respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
                {/* Honeypot for bot protection */}
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
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/70 border text-white text-sm focus:outline-none transition-colors ${
                        errors.name
                          ? "border-rose-500/80 focus:border-rose-400"
                          : "border-white/10 focus:border-accent"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/70 border text-white text-sm focus:outline-none transition-colors ${
                        errors.email
                          ? "border-rose-500/80 focus:border-rose-400"
                          : "border-white/10 focus:border-accent"
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

                {/* Service Required Dropdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="service-select"
                      className="block text-xs font-semibold text-slate-300 mb-1.5"
                    >
                      Service Required <span className="text-rose-400">*</span>
                    </label>
                    <select
                      id="service-select"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-white text-sm focus:outline-none focus:border-accent transition-colors"
                    >
                      {contactServices.map((srv) => (
                        <option key={srv} value={srv} className="bg-slate-900 text-white">
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget (Optional) */}
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-xs font-semibold text-slate-300 mb-1.5"
                    >
                      Estimated Budget (Optional)
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-white text-sm focus:outline-none focus:border-accent transition-colors"
                    >
                      {budgetRanges.map((b) => (
                        <option key={b} value={b} className="bg-slate-900 text-white">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Project Overview & Details <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your goals, timeline, and current requirements..."
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/70 border text-white text-sm focus:outline-none transition-colors ${
                      errors.message
                        ? "border-rose-500/80 focus:border-rose-400"
                        : "border-white/10 focus:border-accent"
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

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 text-white shadow-lg shadow-indigo-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Project Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Direct Channels & Availability Card */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Contact & Availability Card */}
            <div className="rounded-3xl bg-slate-900/60 border border-white/10 p-6 sm:p-8 backdrop-blur-xl space-y-5">
              <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold block">
                Direct Contact Channels
              </span>

              {/* Email direct copy */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-accent/10 text-accent shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] text-muted block">Direct Email</span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-accent transition-colors truncate block"
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

              {/* Status and Timezone */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <Clock className="w-4 h-4 text-accent shrink-0" />
                  <span>Response time: Usually within 24 hours</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>{siteConfig.location}</span>
                </div>
              </div>

              {/* Social Channels List */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-muted block mb-3 font-semibold">
                  Professional Networks
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={siteConfig.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={siteConfig.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4 text-slate-200 shrink-0" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={siteConfig.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                    <span>Instagram</span>
                  </a>

                  <a
                    href={siteConfig.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    <Youtube className="w-4 h-4 text-red-400 shrink-0" />
                    <span>YouTube</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Freelance & Partnership Callout */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-indigo-950/40 to-purple-950/40 border border-indigo-500/20 backdrop-blur-xl">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 block mb-1">
                Collaborative Opportunities
              </span>
              <h4 className="text-sm font-bold text-white mb-2">Open for Q1/Q2 Projects</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Whether you need a dedicated performance marketing campaign, viral short-form video reels, or a full-stack Next.js web application, I am available to consult and build.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
