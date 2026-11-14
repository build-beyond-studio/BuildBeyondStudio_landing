"use client";

import { MessageCircle, Mail, ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import Link from "next/link";

const WHATSAPP_NUMBER = "+917697339962";
const WHATSAPP_MESSAGE =
  "Hi! I run a marketing agency and I would like to discuss a white-label web project with BBS.";

const EMAIL = "admin@buildbeyondstudio.com";

const SERVICE_OPTIONS = [
  "White-Label Web & Web App Development",
  "E-commerce & Headless Stores",
  "Tracking & Conversion Setup",
  "Dedicated Development Pod",
  "Website & App Maintenance",
  "Other Engineering Needs",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    service: SERVICE_OPTIONS[0],
    brief: "",
    honeypot: "", // anti-spam honeypot
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) {
      // Silently succeed for bots
      setStatus("success");
      return;
    }

    if (!formData.name.trim() || !formData.email.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          agencyWebsite: formData.website.trim(),
          serviceNeeded: formData.service,
          message: formData.brief.trim() || "No detailed brief provided.",
        }),
      });

      if (response.ok) {
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "form_submit", {
            page_location: window.location.pathname,
            form_name: "homepage_final_cta",
            service_needed: formData.service,
          });
        }
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          website: "",
          service: SERVICE_OPTIONS[0],
          brief: "",
          honeypot: "",
        });
      } else {
        setStatus("error");
        setErrorMessage("Something went wrong. Please try again or message us on WhatsApp.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again or reach out on WhatsApp.");
    }
  };

  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "whatsapp_click", {
        page_location: window.location.pathname,
        cta_label: "Final CTA WhatsApp",
      });
    }
  };

  const handleEmailClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "email_click", {
        page_location: window.location.pathname,
        cta_label: "Final CTA Email",
      });
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#F5F2EC] py-20 sm:py-24 px-5 sm:px-8 border-t border-black/5"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#C8860A] bg-[#FDF8F0] px-4 py-1.5 rounded-full border border-[rgba(200,134,10,0.2)] inline-block mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-4">
            Ready to discuss your next project?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Share your project requirements with BBS. We will review your brief and respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-9 rounded-2xl border border-[rgba(200,134,10,0.18)] shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-5"
              noValidate
            >
              {/* Anti-spam honeypot (hidden) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="hp_field">Do not fill this out</label>
                <input
                  type="text"
                  id="hp_field"
                  name="honeypot"
                  tabIndex={-1}
                  value={formData.honeypot}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>

              {/* Field 1: Name */}
              <div>
                <label htmlFor="contact_name" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact_name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#FFFDF8] border border-[rgba(200,134,10,0.2)] rounded-xl focus:outline-none focus:border-[#C8860A] focus:ring-2 focus:ring-[rgba(200,134,10,0.15)] text-black placeholder-gray-400 text-sm"
                  placeholder="Your full name"
                />
              </div>

              {/* Field 2: Work Email */}
              <div>
                <label htmlFor="contact_email" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Work Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact_email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#FFFDF8] border border-[rgba(200,134,10,0.2)] rounded-xl focus:outline-none focus:border-[#C8860A] focus:ring-2 focus:ring-[rgba(200,134,10,0.15)] text-black placeholder-gray-400 text-sm"
                  placeholder="name@agency.com"
                />
              </div>

              {/* Field 3: Agency Website */}
              <div>
                <label htmlFor="contact_website" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Agency Website
                </label>
                <input
                  id="contact_website"
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#FFFDF8] border border-[rgba(200,134,10,0.2)] rounded-xl focus:outline-none focus:border-[#C8860A] focus:ring-2 focus:ring-[rgba(200,134,10,0.15)] text-black placeholder-gray-400 text-sm"
                  placeholder="https://youragency.com"
                />
              </div>

              {/* Field 4: What you need (select) */}
              <div>
                <label htmlFor="contact_service" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  What you need <span className="text-red-500">*</span>
                </label>
                <select
                  id="contact_service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#FFFDF8] border border-[rgba(200,134,10,0.2)] rounded-xl focus:outline-none focus:border-[#C8860A] focus:ring-2 focus:ring-[rgba(200,134,10,0.15)] text-black text-sm"
                >
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Field 5: Project Brief (optional) */}
              <div>
                <label htmlFor="contact_brief" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Project Brief <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  id="contact_brief"
                  name="brief"
                  value={formData.brief}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#FFFDF8] border border-[rgba(200,134,10,0.2)] rounded-xl focus:outline-none focus:border-[#C8860A] focus:ring-2 focus:ring-[rgba(200,134,10,0.15)] text-black placeholder-gray-400 resize-none text-sm"
                  placeholder="Tell us about the project requirements, desired timeline or scope..."
                />
              </div>

              {/* Consent Line */}
              <p className="text-xs text-gray-500 leading-relaxed">
                By submitting this brief, you agree that your details are handled under our confidentiality policy and NDA. We never contact your client.
              </p>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full cursor-pointer text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 disabled:opacity-60 flex items-center justify-center gap-2"
                style={{
                  background: "linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)",
                  boxShadow: "0 4px 18px rgba(200,134,10,0.32)",
                }}
              >
                <span>{status === "submitting" ? "Sending Brief..." : "Send a Project Brief"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {status === "success" && (
                <div className="p-3.5 bg-green-50 border border-green-200 rounded-xl text-green-800 text-sm font-medium text-center">
                  Thank you! We received your brief and will respond within 24 hours.
                </div>
              )}

              {status === "error" && (
                <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-sm font-medium text-center">
                  {errorMessage}
                </div>
              )}
            </form>
          </div>

          {/* Direct WhatsApp & Contact Channels */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white p-7 sm:p-8 rounded-2xl border border-[rgba(200,134,10,0.18)] shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              <div className="w-12 h-12 rounded-xl bg-green-50 border border-green-200 flex items-center justify-center text-green-600 mb-5">
                <MessageCircle className="w-6 h-6" />
              </div>

              <h3 className="font-bold text-black text-xl mb-2">
                Prefer WhatsApp?
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Start a direct conversation with our engineering team for immediate scoping and timeline checks.
              </p>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="w-full inline-flex items-center justify-center gap-2 cursor-pointer bg-green-600 hover:bg-green-700 text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-[0_4px_16px_rgba(34,197,94,0.25)]"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Direct Verified Email */}
              <div className="mt-6 pt-6 border-t border-black/5 flex items-center gap-3 text-sm text-gray-700">
                <Mail className="w-5 h-5 text-[#C8860A] shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Direct Email</p>
                  <a
                    href={`mailto:${EMAIL}`}
                    onClick={handleEmailClick}
                    className="font-bold text-black hover:text-[#C8860A] transition-colors"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>
            </div>

            {/* Link to /contact page as primary homepage CTA destination */}
            <div className="bg-[#FAF8F4] p-6 rounded-2xl border border-[rgba(200,134,10,0.14)] text-center">
              <p className="text-xs text-gray-600 mb-3">
                Need our comprehensive briefing worksheet or preferred booking time?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#C8860A] hover:text-[#A06A00] transition-colors"
              >
                Visit full contact page
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
