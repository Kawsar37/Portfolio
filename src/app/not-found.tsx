"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        {/* Large 404 */}
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-8xl md:text-9xl font-extrabold text-foreground mb-4"
        >
          404
        </motion.h1>

        {/* Subtitle */}
        <p className="text-lg font-semibold text-foreground mb-2">
          Page Not Found
        </p>
        <p className="text-sm text-text-muted mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-xl bg-foreground text-background hover:opacity-90 transition-all duration-300 hover:scale-[1.02] active:scale-95"
          >
            <Home size={16} />
            <span>Go Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-xl bg-card-bg border border-border text-foreground hover:bg-border transition-all duration-300 hover:scale-[1.02] active:scale-95"
          >
            <ArrowLeft size={16} />
            <span>Go Back</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
