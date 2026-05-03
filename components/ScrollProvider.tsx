"use client";

import { ReactNode } from "react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export function ScrollProvider({ children }: { children: ReactNode }) {
  useSmoothScroll();

  return <>{children}</>;
}
