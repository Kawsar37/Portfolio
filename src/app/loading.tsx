"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center gap-4"
      >
        {/* Animated logo placeholder */}
        <div className="relative w-12 h-12">
          <motion.div
            className="absolute inset-0 rounded-xl bg-foreground"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{ opacity: 0.2 }}
          />
          <motion.div
            className="absolute inset-1 rounded-lg bg-foreground"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            style={{ opacity: 0.4 }}
          />
          <div className="absolute inset-2 rounded-md bg-background flex items-center justify-center">
            <span className="text-sm font-bold text-foreground">KA</span>
          </div>
        </div>

        {/* Loading bar */}
        <div className="w-32 h-1 bg-card-border rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-foreground rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
}
