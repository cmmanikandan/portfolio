import React, { useState } from "react";
import { siteConfig } from "../config/siteConfig";
import { Mail, CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon, HackerRankIcon } from "../components/BrandIcons";

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Please specify a subject.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please write your message.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim()
        })
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result?.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitError(
          result?.error || "Something went wrong while sending your message. Please try again."
        );
      }
    } catch (err) {
      console.error("Submission network error:", err);
      setSubmitError("Something went wrong while sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-10 sm:py-16 md:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl space-y-2.5 sm:space-y-3">
        <span className="text-[12px] font-semibold tracking-[0.08em] text-[#192841] uppercase">
          06 — CONTACT & OPPORTUNITIES
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#192841]">
          Let’s connect.
        </h1>
        <p className="text-[15px] sm:text-[16.5px] text-[#46546A] font-normal leading-[1.65]">
          I'm currently preparing for software placement opportunities and interested in Java Full Stack and software engineering roles.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Direct Channels Column (5 Cards) */}
        <div className="lg:col-span-5 w-full space-y-6">
          <div className="p-5 sm:p-7 rounded-3xl bg-[#FFFEFB] border border-[#192841]/12 shadow-[0_4px_18px_rgba(25,40,65,0.04)] space-y-5 hover:shadow-[0_8px_24px_rgba(25,40,65,0.08)] hover:border-[#192841]/30 transition-all duration-200">
            
            <h3 className="text-base font-bold text-[#192841] border-b border-[#192841]/10 pb-3">
              Direct Channels
            </h3>

            <div className="space-y-2.5 text-xs sm:text-sm">
              
              {/* 1. Email */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-start gap-3 p-3 rounded-2xl bg-[#F5F1E8] border border-[#192841]/12 hover:border-[#192841] hover:bg-[#F7E7CE] transition-all duration-200 group"
              >
                <div className="p-2 rounded-xl bg-[#FCFAF5] border border-[#192841]/15 text-[#192841] shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-[#6F7885]">
                    Email
                  </div>
                  <div className="font-semibold text-[#192841] transition-colors mt-0.5 break-all text-xs sm:text-sm">
                    {siteConfig.email}
                  </div>
                </div>
              </a>

              {/* 2. LinkedIn */}
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3 rounded-2xl bg-[#F5F1E8] border border-[#192841]/12 hover:border-[#192841] hover:bg-[#F7E7CE] transition-all duration-200 group"
              >
                <div className="p-2 rounded-xl bg-[#FCFAF5] border border-[#192841]/15 text-[#192841] shrink-0 group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-[#6F7885]">
                    LinkedIn
                  </div>
                  <div className="font-semibold text-[#192841] transition-colors mt-0.5 text-xs sm:text-sm">
                    {siteConfig.linkedinName}
                  </div>
                </div>
              </a>

              {/* 3. GitHub */}
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3 rounded-2xl bg-[#F5F1E8] border border-[#192841]/12 hover:border-[#192841] hover:bg-[#F7E7CE] transition-all duration-200 group"
              >
                <div className="p-2 rounded-xl bg-[#FCFAF5] border border-[#192841]/15 text-[#192841] shrink-0 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-[#6F7885]">
                    GitHub
                  </div>
                  <div className="font-semibold text-[#192841] transition-colors mt-0.5 text-xs sm:text-sm">
                    {siteConfig.githubUsername}
                  </div>
                </div>
              </a>

              {/* 4. LeetCode */}
              <a
                href={siteConfig.leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3 rounded-2xl bg-[#F5F1E8] border border-[#192841]/12 hover:border-[#192841] hover:bg-[#F7E7CE] transition-all duration-200 group"
              >
                <div className="p-2 rounded-xl bg-[#FCFAF5] border border-[#192841]/15 text-[#192841] shrink-0 group-hover:scale-105 transition-transform">
                  <LeetCodeIcon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-[#6F7885]">
                    LeetCode
                  </div>
                  <div className="font-semibold text-[#192841] transition-colors mt-0.5 text-xs sm:text-sm">
                    {siteConfig.leetcodeUsername}
                  </div>
                </div>
              </a>

              {/* 5. HackerRank */}
              <a
                href={siteConfig.hackerrankUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3 rounded-2xl bg-[#F5F1E8] border border-[#192841]/12 hover:border-[#192841] hover:bg-[#F7E7CE] transition-all duration-200 group"
              >
                <div className="p-2 rounded-xl bg-[#FCFAF5] border border-[#192841]/15 text-[#192841] shrink-0 group-hover:scale-105 transition-transform">
                  <HackerRankIcon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-[#6F7885]">
                    HackerRank
                  </div>
                  <div className="font-semibold text-[#192841] transition-colors mt-0.5 text-xs sm:text-sm">
                    {siteConfig.hackerrankUsername}
                  </div>
                </div>
              </a>

            </div>

            {/* Placement Status Box */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#F7E7CE] border border-[#192841]/15 text-xs text-[#192841] leading-relaxed">
              <span className="font-semibold uppercase tracking-wider block text-[10px] text-[#192841]/80 mb-1">
                CURRENT STATUS
              </span>
              <p className="font-medium">
                Open to Java Full Stack internships, software engineering placements, and project opportunities.
              </p>
            </div>

          </div>
        </div>

        {/* Message Form Column */}
        <div className="lg:col-span-7 w-full">
          <div className="p-5 sm:p-8 lg:p-10 rounded-3xl bg-[#FFFEFB] border border-[#192841]/12 shadow-[0_4px_18px_rgba(25,40,65,0.04)]">
            
            {isSubmitted ? (
              <div className="py-10 sm:py-12 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#F7E7CE] text-[#192841] flex items-center justify-center border border-[#192841]/20">
                  <CheckCircle2 className="w-7 h-7 text-[#192841]" />
                </div>
                <h3 className="text-xl font-bold text-[#192841]">
                  Message sent successfully. I'll get back to you soon.
                </h3>
                <p className="text-xs text-[#6F7885]">
                  A notification has been delivered to Manikandan Prabhu via hello@cmmanikandan.in.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="h-11 px-5 rounded-xl text-xs font-semibold bg-[#F5F1E8] border border-[#192841] text-[#192841] hover:bg-[#F7E7CE] transition-colors mt-2 cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
                <h3 className="text-lg font-bold text-[#192841] mb-2">
                  Send a Direct Message
                </h3>

                {submitError && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#192841]">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Recruiter / Engineering Manager"
                    className={`w-full h-[52px] px-4 rounded-xl bg-[#F3EFE7] border ${
                      errors.name
                        ? "border-red-500 focus:ring-red-500"
                        : "border-[#192841]/15 focus:border-[#192841] focus:bg-[#FFFEFB] focus:ring-2 focus:ring-[#192841]/15"
                    } text-[15px] text-[#192841] placeholder:text-[#7A8492] placeholder:font-normal focus:outline-none transition-all`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-600 flex items-center gap-1 mt-1 font-medium">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#192841]">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className={`w-full h-[52px] px-4 rounded-xl bg-[#F3EFE7] border ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500"
                        : "border-[#192841]/15 focus:border-[#192841] focus:bg-[#FFFEFB] focus:ring-2 focus:ring-[#192841]/15"
                    } text-[15px] text-[#192841] placeholder:text-[#7A8492] placeholder:font-normal focus:outline-none transition-all`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600 flex items-center gap-1 mt-1 font-medium">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-[#192841]">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Placement Opportunity / Project Collaboration"
                    className={`w-full h-[52px] px-4 rounded-xl bg-[#F3EFE7] border ${
                      errors.subject
                        ? "border-red-500 focus:ring-red-500"
                        : "border-[#192841]/15 focus:border-[#192841] focus:bg-[#FFFEFB] focus:ring-2 focus:ring-[#192841]/15"
                    } text-[15px] text-[#192841] placeholder:text-[#7A8492] placeholder:font-normal focus:outline-none transition-all`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-red-600 flex items-center gap-1 mt-1 font-medium">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#192841]">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className={`w-full min-h-[150px] p-4 rounded-xl bg-[#F3EFE7] border ${
                      errors.message
                        ? "border-red-500 focus:ring-red-500"
                        : "border-[#192841]/15 focus:border-[#192841] focus:bg-[#FFFEFB] focus:ring-2 focus:ring-[#192841]/15"
                    } text-[15px] text-[#192841] placeholder:text-[#7A8492] placeholder:font-normal focus:outline-none transition-all resize-none`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-600 flex items-center gap-1 mt-1 font-medium">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-[52px] px-6 rounded-xl text-[15px] font-semibold bg-[#192841] text-white hover:bg-[#233758] hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(25,40,65,0.12)] transition-all duration-200 disabled:opacity-50 inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  );
};
