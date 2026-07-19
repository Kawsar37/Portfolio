"use client";

import React from "react";
import { User, FolderGit, Briefcase, Zap, BookOpen, Mail } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollToSection } from "@/hooks/useScrollToSection";

const NAV_ITEMS = [
  { id: "hero", icon: User, label: "Home" },
  { id: "projects", icon: FolderGit, label: "Projects" },
  { id: "experience", icon: Briefcase, label: "Work" },
  { id: "skills", icon: Zap, label: "Skills" },
  { id: "blog", icon: BookOpen, label: "Blog" },
  { id: "contact", icon: Mail, label: "Contact" },
];

export default function MobileBottomNav() {
  const activeSection = useActiveSection();
  const scrollTo = useScrollToSection(60);

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-sidebar-bg/80 backdrop-blur-xl border-t border-sidebar-border"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-around px-2 py-2 safe-area-bottom">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              aria-current={isActive ? "true" : undefined}
              className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl transition-all duration-200 min-w-[48px] ${
                isActive
                  ? "text-foreground"
                  : "text-text-muted active:text-foreground"
              }`}
              aria-label={item.label}
            >
              <div
                className={`p-1.5 rounded-lg transition-all duration-200 ${
                  isActive ? "bg-foreground text-background scale-110" : ""
                }`}
              >
                <Icon size={18} />
              </div>
              <span
                className={`text-[10px] font-medium leading-none transition-all duration-200 ${
                  isActive ? "opacity-100" : "opacity-60"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
