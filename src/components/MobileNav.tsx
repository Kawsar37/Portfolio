"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { User, FolderGit, Zap, Mail, Sun, Moon } from "lucide-react";

export default function MobileNav() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, observerOptions);
    ["hero", "projects", "skills", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "hero", icon: User, label: "Home" },
    { id: "projects", icon: FolderGit, label: "Projects" },
    { id: "skills", icon: Zap, label: "Skills" },
    { id: "contact", icon: Mail, label: "Contact" },
  ];

  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-sidebar-bg border-b border-sidebar-border">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center"
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <Image
              src="/asset/final_logo.svg"
              alt="Logo"
              width={32}
              height={32}
              className="object-contain bg-black rounded-xl"
              priority
            />
          </div>
        </button>

        {/* Nav items */}
        <nav className="flex items-center space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-foreground text-background"
                    : "text-text-muted hover:text-foreground hover:bg-card-bg"
                }`}
                aria-label={item.label}
              >
                <Icon size={14} />
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Theme toggle */}
        <button
          onClick={() =>
            setTheme((resolvedTheme ?? theme) === "dark" ? "light" : "dark")
          }
          className="p-2 text-text-muted hover:text-foreground hover:bg-card-bg rounded-xl transition-all duration-300"
          aria-label="Toggle Theme"
        >
          {(resolvedTheme ?? theme) === "dark" ? (
            <Sun size={18} />
          ) : (
            <Moon size={18} />
          )}
        </button>
      </div>
    </header>
  );
}
