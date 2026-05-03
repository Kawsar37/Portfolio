"use client";

import { useEffect } from "react";

export function useSmoothScroll() {
  useEffect(() => {
    // Import Lenis dynamically to avoid SSR issues
    const initLenis = async () => {
      try {
        const Lenis = (await import("lenis")).default;
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: "vertical",
          gestureDirection: "vertical",
          smooth: true,
          mouseMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 2,
          infinite: false,
        });

        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return lenis;
      } catch (error) {
        console.warn("Lenis not available, using default scroll behavior");
        return null;
      }
    };

    let lenis: any = null;

    initLenis().then((lenisInstance) => {
      lenis = lenisInstance;
    });

    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);
}
