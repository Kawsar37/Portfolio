"use client";

import React, { useEffect, useState } from "react";
import { Globe, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const SOCIALS = [
  {
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/kawsar-ali-pramanik",
    label: "LinkedIn",
  },
  { icon: FaGithub, url: "https://github.com/Kawsar37", label: "GitHub" },
  { icon: Globe, url: "https://www.kawsar.engineer", label: "Website" },
  { icon: FaXTwitter, url: "https://x.com/kawsarali1037", label: "X" },
];

export default function MobileBottomBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const dhakaTime = new Date(utc + 3600000 * 6);
      const hours = String(dhakaTime.getHours()).padStart(2, "0");
      const minutes = String(dhakaTime.getMinutes()).padStart(2, "0");
      const seconds = String(dhakaTime.getSeconds()).padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="lg:hidden border-t border-border bg-sidebar-bg py-8 px-4 pb-24">
      {/* Socials */}
      <div className="flex justify-center gap-4 mb-6">
        {SOCIALS.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-text-muted hover:text-foreground hover:bg-card-bg rounded-xl transition-all duration-200 border border-transparent hover:border-card-border hover:scale-105"
              aria-label={social.label}
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>

      {/* Local Time */}
      <div className="flex flex-col items-center mb-6">
        <span className="text-xs font-semibold text-text-muted mb-2 tracking-wider">
          Local Time (Dhaka)
        </span>
        <span className="font-mono text-lg font-bold text-foreground bg-card-bg border border-card-border px-5 py-2 rounded-xl">
          {time || "00:00:00"}
        </span>
      </div>

      {/* Back to Top */}
      <div className="flex justify-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-text-muted hover:text-foreground bg-card-bg border border-border rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
          aria-label="Back to top"
        >
          <ArrowUp size={14} />
          <span>Back to Top</span>
        </button>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-text-muted mt-6">
        <p>&copy; {new Date().getFullYear()} MD. Kawsar Ali. All rights reserved.</p>
      </div>
    </footer>
  );
}
