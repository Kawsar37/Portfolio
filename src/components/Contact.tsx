"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Globe, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    hp_field: "",
  });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setServerError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          hp_field: formData.hp_field,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "", hp_field: "" });
        setErrors({});
      } else {
        setStatus("error");
        setServerError(data.error || "Something went wrong. Please try again later.");
      }
    } catch {
      setStatus("error");
      setServerError("Network error. Please try again later.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const followCards = [
    {
      icon: FaLinkedinIn,
      label: "LinkedIn",
      metric: "500+ Connections",
      url: "https://www.linkedin.com/in/kawsar-ali-pramanik",
      color: "#0077B5",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      metric: "30+ repos",
      url: "https://github.com/Kawsar37",
      color: "#ffffff",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      metric: "Available on WhatsApp",
      url: "https://wa.me/8801850560637",
      color: "#25D366",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 md:px-8 bg-background transition-colors"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-text-muted font-bold mb-2">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Let&apos;s Connect
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Left Column: Form - 7 cols */}
          <div className="md:col-span-7">
            <div className="bg-card-bg border border-card-border rounded-3xl p-6 md:p-8">
              <h3 className="text-lg font-bold mb-6 flex items-center space-x-2">
                <Mail size={20} className="text-text-muted" />
                <span>Send Me A Message</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot Anti-Bot Field (Hidden from human users) */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="hp_field"
                    tabIndex={-1}
                    value={formData.hp_field}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className={`w-full bg-background border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors placeholder:text-text-muted/50 ${
                      errors.name ? "border-red-500" : "border-card-border"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1.5">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className={`w-full bg-background border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors placeholder:text-text-muted/50 ${
                      errors.email ? "border-red-500" : "border-card-border"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1.5">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Type your message here..."
                    className={`w-full bg-background border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors placeholder:text-text-muted/50 resize-none ${
                      errors.message ? "border-red-500" : "border-card-border"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 mt-1.5">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting" || status === "success"}
                  className="w-full bg-accent hover:bg-accent-hover text-accent-foreground font-semibold py-3.5 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 hover:scale-[1.01] active:scale-95 cursor-pointer"
                >
                  {status === "idle" && (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                  {status === "submitting" && (
                    <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin" />
                  )}
                  {status === "success" && (
                    <>
                      <CheckCircle2 size={16} className="text-emerald-400" />
                      <span className="text-emerald-400 font-bold">
                        Sent Successfully!
                      </span>
                    </>
                  )}
                </button>

                {status === "error" && (
                  <p className="text-xs text-red-500 text-center mt-2">
                    {serverError || "Something went wrong. Please try again later."}
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Right Column: Connection Cards - 5 cols */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-text-muted uppercase tracking-wider px-1">
                Connect Channels
              </h3>

              {followCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <a
                    key={idx}
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-card-bg border border-card-border hover:border-foreground/20 rounded-2xl group transition-all duration-300 hover:shadow-md hover:scale-[1.02]"
                  >
                    <div className="flex items-center space-x-3.5">
                      <div
                        className="p-2.5 rounded-xl bg-background border border-card-border/50 text-foreground group-hover:scale-105 transition-transform"
                        style={{
                          color:
                            card.color === "#ffffff" ? undefined : card.color,
                        }}
                      >
                        <Icon size={20} />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-text-muted group-hover:text-foreground transition-colors">
                          {card.label}
                        </span>
                        <span className="text-sm font-extrabold block text-foreground leading-tight mt-0.5">
                          {card.metric}
                        </span>
                      </div>
                    </div>
                    <div className="p-1.5 rounded-lg text-text-muted bg-background group-hover:text-foreground group-hover:bg-card-border/50 transition-colors">
                      <ArrowUpRight size={16} />
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="hidden lg:block text-center md:text-left text-xs text-text-muted py-4 border-t border-border/40">
              <p>
                © {new Date().getFullYear()} MD. Kawsar Ali. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
