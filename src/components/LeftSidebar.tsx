"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import {
  User,
  FolderGit,
  Briefcase,
  Zap,
  BookOpen,
  Mail,
  Sun,
  Moon,
} from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollToSection } from "@/hooks/useScrollToSection";

const NAV_ITEMS = [
  { id: "hero", icon: User, label: "Profile" },
  { id: "projects", icon: FolderGit, label: "Projects" },
  { id: "experience", icon: Briefcase, label: "Experience" },
  { id: "skills", icon: Zap, label: "Skills" },
  { id: "blog", icon: BookOpen, label: "Blog" },
  { id: "contact", icon: Mail, label: "Contact" },
];

export default function LeftSidebar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const activeSection = useActiveSection();
  const scrollTo = useScrollToSection();

  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  return (
    <aside className="w-16 md:w-20 h-screen fixed left-0 top-0 bg-sidebar-bg border-r border-sidebar-border hidden lg:flex flex-col items-center justify-between py-6 z-40 transition-colors">
      {/* Logo */}
      <a
        href="#hero"
        onClick={(e) => {
          e.preventDefault();
          scrollTo("hero");
        }}
        className="relative group"
      >
        <div className="w-10 h-10 md:w-12 md:h-12 overflow-hidden flex items-center justify-center rounded-xl transition-transform duration-300">
          <Image
            src="/asset/kawsar-logo.svg"
            alt="MD. Kawsar Ali Logo"
            width={100}
            height={100}
            className="w-full h-full "
          />
        </div>
        <span className="absolute left-14 md:left-16 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-foreground text-background text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg pointer-events-none z-50">
          Kawsar Ali
        </span>
      </a>

      {/* Nav */}
      <nav
        className="flex flex-col gap-2"
        role="navigation"
        aria-label="Main navigation"
      >
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              aria-current={isActive ? "true" : undefined}
              className={`relative p-3 rounded-xl transition-all duration-200 group ${
                isActive
                  ? "bg-foreground text-background shadow-lg scale-105"
                  : "text-text-muted hover:text-foreground hover:bg-card-bg hover:scale-105"
              }`}
              aria-label={item.label}
            >
              <Icon size={20} />
              <span className="absolute left-14 md:left-16 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-foreground text-background text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg pointer-events-none z-50">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Theme + Scroll to top */}
      <div className="flex flex-col items-center gap-3">
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-3 text-text-muted hover:text-foreground hover:bg-card-bg rounded-xl transition-all duration-200 group"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            <span className="absolute left-14 md:left-16 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-foreground text-background text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg pointer-events-none z-50">
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        )}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="p-3 text-text-muted hover:text-foreground hover:bg-card-bg rounded-xl transition-all duration-200 group"
          aria-label="Scroll to top"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
          <span className="absolute left-14 md:left-16 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-foreground text-background text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg pointer-events-none z-50">
            Back to Top
          </span>
        </button>
      </div>
    </aside>
  );
}
