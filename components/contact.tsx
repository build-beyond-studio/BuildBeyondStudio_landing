"use client";

import { MessageCircle, Mail } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const WHATSAPP_NUMBER = "+919301579493";
const WHATSAPP_MESSAGE =
  "Hi! I would like to discuss partnership opportunities with your agency.";

const EMAIL = "buildbeyondstudio@gmail.com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in-up");
          }
        });
      },
      { threshold: 0.1 },
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (formRef.current) observer.observe(formRef.current);

    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Thank you! We'll be in touch shortly.");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("Something went wrong. Please try again.");
        setTimeout(() => setStatus(""), 5000);
      }
    } catch (error) {
      setStatus("Error sending message. Please try again.");
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#050505] py-20 md:py-32 px-4 sm:px-6"
      ref={sectionRef}
    >
      <div className="max-w-5xl mx-auto">
        <div ref={titleRef} className="opacity-0 text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">
            Partner with Build Beyond Studio
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            Get in touch to discuss your web development project and how we can
            help scale your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <div>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="opacity-0 space-y-6"
            >
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0c0c0e] border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-gray-600"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0c0c0e] border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-gray-600"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-[#0c0c0e] border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-gray-600 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold"
              >
                Send Message
              </button>

              {status && (
                <p
                  className={`text-sm text-center ${
                    status.includes("Thank you")
                      ? "text-green-600"
                      : "text-blue-600"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>

          {/* WhatsApp + Email Contact */}
          <div className="flex items-center justify-center">
            <div className="bg-[#0c0c0e] p-8 sm:p-10 rounded-xl border border-white/10 hover:border-green-400 transition-all h-full flex flex-col items-center justify-center text-center">
              <MessageCircle className="w-14 h-14 text-green-500 mb-6" />

              <h3 className="font-bold text-white text-xl sm:text-2xl mb-3">
                Chat with us on WhatsApp
              </h3>

              <p className="text-gray-400 text-sm sm:text-base mb-6">
                Connect with us directly for quick responses
              </p>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block cursor-pointer bg-green-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-green-700 transition-all font-semibold text-base mb-6"
              >
                Start WhatsApp Chat
              </a>

              {/* Email Contact */}
              <div className="flex items-center gap-2 text-gray-400 text-sm sm:text-base">
                <Mail className="w-5 h-5 text-blue-500" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:text-blue-600 transition-colors font-medium"
                >
                  {EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
