"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  disabled?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
  target,
  rel,
  className = "",
  disabled = false,
}: ButtonProps) {
  const baseClass = `rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2`;

  const variantClass = {
    primary: "bg-accent text-dark-950 hover:bg-accent-dark",
    secondary:
      "border border-accent text-accent hover:bg-accent hover:text-dark-950",
  }[variant];

  const sizeClass = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }[size];

  const classes = `${baseClass} ${variantClass} ${sizeClass} ${className}`;

  const buttonContent = (
    <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`${classes} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${classes} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {buttonContent}
    </button>
  );
}
