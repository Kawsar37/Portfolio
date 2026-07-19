"use client";

import { useCallback } from "react";

export function useScrollToSection(offset = 80) {
  return useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      if (!el) return;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    },
    [offset]
  );
}
