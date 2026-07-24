"use client";

import { useEffect, useRef, useState } from "react";

const DEFAULT_SECTIONS = [
  "hero",
  "projects",
  "experience",
  "skills",
  "blog",
  "contact",
];

export function useActiveSection(sectionIds: string[] = DEFAULT_SECTIONS) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const idSet = new Set(sectionIds);

    // --- Observer-based detection (primary) ---
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the first intersecting entry that is closest to the top
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: null,
        // Trigger when a section crosses into the top 60% of the viewport
        rootMargin: "0px 0px -40% 0px",
        threshold: 0,
      }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    // --- Scroll-based fallback (ensures it works even if observer misses) ---
    const onScroll = () => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY + window.innerHeight * 0.35;
        let current = sectionIds[0];
        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (el && el.offsetTop <= scrollY) {
            current = id;
          }
        }
        setActiveSection(current);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Run once on mount to set the initial state correctly
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, [sectionIds]);

  return activeSection;
}
