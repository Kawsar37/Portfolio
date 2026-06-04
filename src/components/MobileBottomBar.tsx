"use client";

import React, { useEffect, useState } from "react";
import { Globe } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

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

  const socials = [
    {
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/in/kawsar-ali-pramanik",
      label: "LinkedIn",
    },
    { icon: FaGithub, url: "https://github.com/Kawsar37", label: "GitHub" },
    { icon: Globe, url: "https://www.kawsar.engineer", label: "Website" },
    { icon: FaXTwitter, url: "#", label: "X" },
  ];

  return (
    <footer className="lg:hidden border-t border-border bg-sidebar-bg py-6 px-4">
      {/* Local Time */}
      <div className="flex flex-col items-center mb-6">
        <span className="text-xs font-semibold text-text-muted mb-2 tracking-wider">
          Local Time ( Dhaka )
        </span>
        <span className="font-mono text-lg font-bold text-foreground bg-card-bg border border-card-border px-5 py-2 rounded-xl">
          {time || "00:00:00"}
        </span>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-text-muted mt-6">
        <p>© {new Date().getFullYear()} MD. Kawsar Ali. All rights reserved.</p>
      </div>
    </footer>
  );
}
