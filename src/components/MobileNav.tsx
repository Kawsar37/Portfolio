"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useScrollToSection } from "@/hooks/useScrollToSection";

export default function MobileNav() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const scrollTo = useScrollToSection(60);

  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-sidebar-bg/80 backdrop-blur-xl border-b border-sidebar-border">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2.5"
          aria-label="Scroll to top"
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <Image
              src="/asset/kawsar-logo.svg"
              alt="Logo"
              width={32}
              height={32}
              className="object-contain "
              priority
            />
          </div>
          <span className="text-sm font-semibold text-foreground tracking-tight">
            Kawsar Ali
          </span>
        </button>

        {/* Theme toggle */}
        {mounted && (
          <button
            onClick={() =>
              setTheme((resolvedTheme ?? theme) === "dark" ? "light" : "dark")
            }
            className="p-2.5 text-text-muted hover:text-foreground hover:bg-card-bg rounded-xl transition-all duration-200"
            aria-label="Toggle theme"
          >
            {(resolvedTheme ?? theme) === "dark" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>
        )}
      </div>
    </header>
  );
}
