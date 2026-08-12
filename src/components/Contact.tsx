import React, { useState } from "react";
import { siteConfig } from "../config/siteConfig";
import { Mail, CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export const Contact: React.FC = () => {
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
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Please specify a subject.";
    if (!formData.message.trim()) newErrors.message = "Please write your message.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulated message handler
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#FCFAF5] relative scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header in Midnight Blue */}
        <div className="max-w-2xl mb-16 space-y-2">
          <span className="text-xs font-bold tracking-[0.08em] text-[#192841] uppercase">
            06 — CONTACT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#192841]">
            Let’s build something useful.
          </h2>
          <p className="text-sm sm:text-base text-[#4B5563]">
            Whether it's a placement opportunity, internship, collaboration, project idea or simply a conversation about technology, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Contact Info Card using #FBF9F4 surface */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FBF9F4] border border-[#192841]/14 shadow-[0_4px_18px_rgba(25,40,65,0.04)] space-y-6">
              
              <h3 className="text-base font-extrabold text-[#192841] border-b border-[#192841]/10 pb-4">
                Direct Communication
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Email Item using #F5F1E8 */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#F5F1E8] border border-[#192841]/12 hover:border-[#192841] hover:bg-[#F7E7CE] transition-all duration-200 group"
                >
                  <div className="p-2.5 rounded-xl bg-[#FCFAF5] border border-[#192841]/15 text-[#192841] shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#4B5563]">
                      Email
                    </div>
                    <div className="font-bold text-[#192841] transition-colors mt-0.5 break-all">
                      {siteConfig.email}
                    </div>
                  </div>
                </a>

                {/* LinkedIn Item using #F5F1E8 */}
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#F5F1E8] border border-[#192841]/12 hover:border-[#192841] hover:bg-[#F7E7CE] transition-all duration-200 group"
                >
                  <div className="p-2.5 rounded-xl bg-[#FCFAF5] border border-[#192841]/15 text-[#192841] shrink-0 group-hover:scale-105 transition-transform">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#4B5563]">
                      LinkedIn
                    </div>
                    <div className="font-bold text-[#192841] transition-colors mt-0.5">
                      Manikandan Prabhu C.
                    </div>
                  </div>
                </a>

                {/* GitHub Item using #F5F1E8 */}
                <a
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#F5F1E8] border border-[#192841]/12 hover:border-[#192841] hover:bg-[#F7E7CE] transition-all duration-200 group"
                >
                  <div className="p-2.5 rounded-xl bg-[#FCFAF5] border border-[#192841]/15 text-[#192841] shrink-0 group-hover:scale-105 transition-transform">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#4B5563]">
                      GitHub
                    </div>
                    <div className="font-bold text-[#192841] transition-colors mt-0.5">
                      manikandanprabhu-dev
                    </div>
                  </div>
                </a>

              </div>

              {/* Placement Status Box using #F7E7CE */}
              <div className="p-4 rounded-xl bg-[#F7E7CE] border border-[#192841]/15 text-xs text-[#192841] leading-relaxed">
                <span className="font-extrabold uppercase tracking-wider block text-[10px] text-[#192841]/80 mb-1">
                  CURRENT STATUS
                </span>
                <p className="font-semibold">
                  Open to Java Full Stack internships, software engineering placements, and project opportunities.
                </p>
              </div>

            </div>
          </div>

          {/* Contact Form using #FBF9F4 card and #F3EFE7 inputs */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#FBF9F4] border border-[#192841]/14 shadow-[0_4px_18px_rgba(25,40,65,0.04)]">
              
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#F7E7CE] text-[#192841] flex items-center justify-center border border-[#192841]/20">
                    <CheckCircle2 className="w-7 h-7 text-[#192841]" />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#192841]">
                    Thanks for reaching out. I’ll get back to you soon.
                  </h3>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="h-11 px-5 rounded-xl text-xs font-bold bg-[#F5F1E8] border border-[#192841] text-[#192841] hover:bg-[#F7E7CE] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <h3 className="text-lg font-extrabold text-[#192841] mb-2">
                    Send a Direct Message
                  </h3>

                  {submitError && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="block text-xs font-extrabold uppercase tracking-wider text-[#192841]">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Recruiter / Engineering Manager"
                      className={`w-full h-[50px] px-4 rounded-xl bg-[#F3EFE7] border ${
                        errors.name
                          ? "border-red-500 focus:ring-red-500"
                          : "border-[#192841]/16 focus:border-[#192841] focus:bg-[#FCFAF5] focus:ring-3 focus:ring-[#192841]/8"
                      } text-sm text-[#192841] placeholder:text-[#7A8190] focus:outline-none transition-all`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-600 flex items-center gap-1 mt-1 font-medium">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="block text-xs font-extrabold uppercase tracking-wider text-[#192841]">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className={`w-full h-[50px] px-4 rounded-xl bg-[#F3EFE7] border ${
                        errors.email
                          ? "border-red-500 focus:ring-red-500"
                          : "border-[#192841]/16 focus:border-[#192841] focus:bg-[#FCFAF5] focus:ring-3 focus:ring-[#192841]/8"
                      } text-sm text-[#192841] placeholder:text-[#7A8190] focus:outline-none transition-all`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 flex items-center gap-1 mt-1 font-medium">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="block text-xs font-extrabold uppercase tracking-wider text-[#192841]">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Placement Drive / Internship Opportunity"
                      className={`w-full h-[50px] px-4 rounded-xl bg-[#F3EFE7] border ${
                        errors.subject
                          ? "border-red-500 focus:ring-red-500"
                          : "border-[#192841]/16 focus:border-[#192841] focus:bg-[#FCFAF5] focus:ring-3 focus:ring-[#192841]/8"
                      } text-sm text-[#192841] placeholder:text-[#7A8190] focus:outline-none transition-all`}
                    />
                    {errors.subject && (
                      <p className="text-xs text-red-600 flex items-center gap-1 mt-1 font-medium">
                        <AlertCircle className="w-3 h-3" /> {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="block text-xs font-extrabold uppercase tracking-wider text-[#192841]">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message or inquiry here..."
                      className={`w-full min-h-[140px] p-4 rounded-xl bg-[#F3EFE7] border ${
                        errors.message
                          ? "border-red-500 focus:ring-red-500"
                          : "border-[#192841]/16 focus:border-[#192841] focus:bg-[#FCFAF5] focus:ring-3 focus:ring-[#192841]/8"
                      } text-sm text-[#192841] placeholder:text-[#7A8190] focus:outline-none transition-all resize-none`}
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
                    className="w-full h-[52px] px-6 rounded-xl text-sm font-bold bg-[#192841] text-white hover:bg-[#233758] hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(25,40,65,0.12)] transition-all duration-200 disabled:opacity-50 inline-flex items-center justify-center gap-2"
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
    </section>
  );
};
