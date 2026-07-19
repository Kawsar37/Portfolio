"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { User, FolderGit, Briefcase, Zap, BookOpen, Mail, Sun, Moon, ArrowUp } from "lucide-react";

export default function LeftSidebar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = ["hero", "projects", "experience", "skills", "blog", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // schedule mounted state update to avoid synchronous setState within effect
    const mountTimeout = window.setTimeout(() => setMounted(true), 0);
    return () => {
      clearTimeout(mountTimeout);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "hero", icon: User, label: "Profile" },
    { id: "projects", icon: FolderGit, label: "Projects" },
    { id: "experience", icon: Briefcase, label: "Experience" },
    { id: "skills", icon: Zap, label: "Skills" },
    { id: "blog", icon: BookOpen, label: "Blog" },
    { id: "contact", icon: Mail, label: "Contact" },
  ];

  return (
    <aside className="w-16 md:w-20 h-screen fixed left-0 top-0 bg-sidebar-bg border-r border-sidebar-border hidden lg:flex flex-col items-center justify-between py-6 z-40 transition-colors">
      {/* Top: Custom SVG Logo */}
      <div className="flex flex-col items-center">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
          className="relative group"
        >
          <div className="w-10 h-10 md:w-12 md:h-12 overflow-hidden flex items-center justify-center transition-all duration-300">
            <Image
              src="/asset/final_logo.svg"
              alt="MD. Kawsar Ali Logo"
              width={40}
              height={40}
              className="w-full h-full object-contain filter bg-black rounded-xl"
              priority
            />
          </div>
          <span className="absolute left-16 md:left-20 top-2 px-2 py-1 bg-foreground text-background text-xs font-semibold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md pointer-events-none">
            Kawsar Ali
          </span>
        </a>
      </div>

      {/* Middle: Navigation */}
      <nav className="flex flex-col space-y-6">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative p-3 rounded-xl transition-all duration-300 group ${
                isActive
                  ? "bg-foreground text-background scale-110 shadow-lg"
                  : "text-text-muted hover:text-foreground hover:bg-card-bg hover:scale-105"
              }`}
              aria-label={item.label}
            >
              <Icon size={20} className="md:w-5 md:h-5 w-4 h-4" />
              <span className="absolute left-16 md:left-20 top-2 px-2 py-1 bg-foreground text-background text-xs font-semibold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md pointer-events-none">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Bottom: Theme Toggle & Scroll To Top */}
      <div className="flex flex-col items-center space-y-4">
        {/* Theme toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-3 text-text-muted hover:text-foreground hover:bg-card-bg rounded-xl transition-all duration-300 group"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            <span className="absolute left-16 md:left-20 p-1 px-2 bg-foreground text-background text-xs font-semibold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md pointer-events-none">
              Toggle Theme
            </span>
          </button>
        )}

        {/* Scroll to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="p-3 text-text-muted hover:text-foreground hover:bg-card-bg rounded-xl transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
          <span className="absolute left-16 md:left-20 p-1 px-2 bg-foreground text-background text-xs font-semibold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-md pointer-events-none">
            Back to Top
          </span>
        </button>
      </div>
    </aside>
  );
}
