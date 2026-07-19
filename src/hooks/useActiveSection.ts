"use client";

import { useEffect, useState } from "react";

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            break;
          }
        }
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
