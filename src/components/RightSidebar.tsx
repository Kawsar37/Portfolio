"use client";

import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

export default function RightSidebar() {
  const socials = [
    {
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/in/kawsar-ali-pramanik",
      label: "LinkedIn",
    },
    { icon: FaGithub, url: "https://github.com/Kawsar37", label: "GitHub" },
    { icon: FaWhatsapp, url: "https://wa.me/8801850560637", label: "WhatsApp" },
    {
      icon: FaXTwitter,
      url: "https://x.com/kawsarali1037",
      label: "Twitter / X",
    },
  ];

  return (
    <aside className="w-16 md:w-20 h-screen fixed right-0 top-0 bg-sidebar-bg border-l border-sidebar-border hidden lg:flex flex-col items-center justify-center py-6 z-40 transition-colors">
      <div className="flex flex-col space-y-6">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-text-muted hover:text-foreground hover:bg-card-bg rounded-full transition-all duration-300 group relative hover:scale-110 hover:-translate-y-0.5 border border-transparent hover:border-card-border"
              aria-label={social.label}
            >
              <Icon size={20} className="w-5 h-5" />
              <span className="absolute right-16 px-2 py-1 bg-foreground text-background text-xs font-semibold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md pointer-events-none">
                {social.label}
              </span>
            </a>
          );
        })}
      </div>
    </aside>
  );
}
