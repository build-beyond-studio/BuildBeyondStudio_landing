"use client";

import { MessageCircle, Mail, ArrowRight, ShieldCheck } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const WHATSAPP_NUMBER = "+917697339962";
const WHATSAPP_MESSAGE =
  "Hi Ankush! I run an agency and would like to discuss a white-label project brief with BBS.";

const EMAIL = "admin@buildbeyondstudio.com";

const SERVICE_OPTIONS = [
  "Custom Website Development (React / Next.js / WordPress)",
  "Online Store Development (Shopify / Headless / WooCommerce)",
  "Tracking & Conversion Setup (GTM / GA4 / Meta CAPI)",
  "Dedicated Development Pod",
  "Website & App Maintenance Retainer",
  "DevOps & Cloud Infrastructure",
  "Other White-Label Engineering Brief",
];

const BUDGET_OPTIONS = [
  "Under ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹2,50,000",
  "₹2,50,000+",
  "Dedicated Monthly Retainer",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    agencyName: "",
    website: "",
    service: SERVICE_OPTIONS[0],
    budget: BUDGET_OPTIONS[1],
    brief: "",
    ndaRequired: true,
    honeypot: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const value = e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      setStatus("success");
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.brief.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields (Name, Email, and Project Brief).");
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
          agencyName: formData.agencyName.trim(),
          agencyWebsite: formData.website.trim(),
          serviceNeeded: `${formData.service} (Budget: ${formData.budget}, NDA requested: ${formData.ndaRequired ? 'Yes' : 'No'})`,
          message: formData.brief.trim(),
        }),
      });

      if (response.ok) {
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "form_submit", {
            page_location: window.location.pathname,
            form_name: "contact_page_brief",
            service_needed: formData.service,
          });
        }
        setStatus("success");
      } else {
        const errorData = await response.json();
        setStatus("error");
        setErrorMessage(
          errorData.message ||
            "Unable to submit right now. Please email us at admin@buildbeyondstudio.com or connect via WhatsApp."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Network error. Please try again or reach out on WhatsApp (+91 76973 39962)."
      );
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* Form Column */}
      <div className="lg:col-span-7 bg-white border border-gray-200/90 rounded-3xl p-6 sm:p-10 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight mb-2">
          Project Brief Submission
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 font-light leading-relaxed mb-6">
          Fill out the details below. We review briefs and respond within 24 hours with a detailed milestone schedule and fixed price quote.
        </p>

        {status === "success" ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
              ✓
            </div>
            <h3 className="text-xl font-bold text-black">Brief Received!</h3>
            <p className="text-sm text-gray-600 font-light max-w-md mx-auto leading-relaxed">
              Thank you for sharing your project brief. Ankush and our technical team will review the requirements. We respond within 24 hours.
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                  "Hi Ankush! I just submitted a project brief on the BBS contact page."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-100/80 px-4 py-2 rounded-lg hover:bg-emerald-200 transition-all"
              >
                Notify on WhatsApp for Fast-Track Review →
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Honeypot hidden input */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Sarthak Sharma"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#C8860A] transition-all bg-[#FAF9F5]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Agency Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. sarthak@agency.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#C8860A] transition-all bg-[#FAF9F5]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Agency Name
                </label>
                <input
                  type="text"
                  name="agencyName"
                  value={formData.agencyName}
                  onChange={handleChange}
                  placeholder="e.g. BrandWave Media"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#C8860A] transition-all bg-[#FAF9F5]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Agency Website
                </label>
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="e.g. brandwave.agency"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#C8860A] transition-all bg-[#FAF9F5]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Primary Service Needed
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-none focus:border-[#C8860A] transition-all bg-[#FAF9F5]"
                >
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Approximate Budget (INR)
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-300 text-xs focus:outline-none focus:border-[#C8860A] transition-all bg-[#FAF9F5]"
                >
                  {BUDGET_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                Project Brief or Requirements *
              </label>
              <textarea
                name="brief"
                required
                rows={4}
                value={formData.brief}
                onChange={handleChange}
                placeholder="Include Figma links, tech requirements, target launch deadline, or current client pain points..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:border-[#C8860A] transition-all bg-[#FAF9F5]"
              />
            </div>

            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="ndaRequired"
                name="ndaRequired"
                checked={formData.ndaRequired}
                onChange={handleChange}
                className="w-4 h-4 text-[#C8860A] rounded border-gray-300 focus:ring-[#C8860A]"
              />
              <label htmlFor="ndaRequired" className="text-xs text-gray-600 font-light">
                Execute a mutual bilateral NDA before sharing sensitive client details.
              </label>
            </div>

            {status === "error" && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-3.5 px-6 rounded-xl font-bold text-white text-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              style={{
                background: "linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)",
                boxShadow: "0 4px 16px rgba(200,134,10,0.30)",
              }}
            >
              {status === "submitting" ? "Submitting Brief..." : "Submit Project Brief →"}
            </button>
          </form>
        )}
      </div>

      {/* Info & Direct Channels Column */}
      <div className="lg:col-span-5 space-y-6">
        {/* Fast Track WhatsApp */}
        <div className="bg-white border border-gray-200/90 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-black text-base">Direct WhatsApp Discussion</h3>
              <p className="text-xs text-gray-500 font-light">Immediate response during business hours</p>
            </div>
          </div>
          <p className="text-xs text-gray-600 font-light leading-relaxed mb-4">
            Prefer a direct message with our technical lead? Message Ankush directly to discuss urgent timelines, brief feasibility, or capacity.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
              WHATSAPP_MESSAGE
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-all shadow-sm"
          >
            <span>Message on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Email Direct */}
        <div className="bg-white border border-gray-200/90 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#C8860A] flex items-center justify-center border border-amber-100">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-black text-base">Verified Partner Email</h3>
              <p className="text-xs text-gray-500 font-light">Send RFPs, documents & NDA files</p>
            </div>
          </div>
          <p className="text-xs text-gray-600 font-light leading-relaxed mb-3">
            Have an existing RFP, slide deck, or bilateral NDA document ready? Email us directly:
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="text-xs sm:text-sm font-semibold text-[#C8860A] hover:underline break-all"
          >
            {EMAIL}
          </a>
        </div>

        {/* What Happens Next Guarantee */}
        <div className="bg-[#FAF9F5] border border-[rgba(200,134,10,0.18)] rounded-3xl p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C8860A] mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>Our Next Steps Commitment</span>
          </div>
          <ol className="space-y-3 text-xs text-gray-600 font-light">
            <li className="flex items-start gap-2">
              <span className="font-bold text-black">1.</span>
              <span><strong>Acknowledge & NDA:</strong> We respond within 24 hours and execute a mutual NDA before receiving sensitive client details.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-black">2.</span>
              <span><strong>Scope & Fixed Quote:</strong> We evaluate requirements, Figma designs, and APIs, providing an itemised quotation with clear scope boundaries.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold text-black">3.</span>
              <span><strong>Zero Pressure:</strong> You review the milestone proposal and decide if and when to proceed.</span>
            </li>
          </ol>
        </div>

        {/* Policy Links */}
        <div className="text-center text-xs text-gray-400 font-light">
          Review our policies: <Link href="/trust" className="text-[#C8860A] underline">Trust Centre</Link> • <Link href="/pricing-model" className="text-[#C8860A] underline">Pricing Model</Link> • <Link href="/privacy" className="text-[#C8860A] underline">Privacy</Link>
        </div>
      </div>
    </div>
  );
}

