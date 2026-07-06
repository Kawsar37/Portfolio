"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Mail, FileText, ExternalLink } from "lucide-react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stats = [
    { value: "2×", label: "ICPC Regionalist", desc: "Asia Dhaka Regionals" },
    {
      value: "4×",
      label: "Contest Champion",
      desc: "Programming Competitions",
    },
    {
      value: "15+",
      label: "Projects Built",
      desc: "Full Stack & Android Apps",
    },
    {
      value: "2+",
      label: "Years Coding",
      desc: "Problem Solving & MERN Experience",
    },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center py-12 md:py-20 px-4 md:px-8 border-b border-border"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto w-full flex flex-col items-center text-center lg:text-left lg:items-start lg:grid lg:grid-cols-12 lg:gap-12"
      >
        {/* Left Column: Profile Photo — dark bg, image top-centered */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 flex justify-center lg:justify-start mb-8 lg:mb-0 w-full"
        >
          {/* 
            The container keeps its square shape + dark bg.
            We do NOT use overflow-hidden so the transparent PNG renders correctly.
            The image uses object-contain + object-top so the face shows at the top,
            letting the dark bg fill naturally below.
          */}
          <div className="relative max-w-[280px] md:max-w-[320px] w-full aspect-square rounded-2xl border bg-[#0f0f0f] border-card-border shadow-2xl overflow-hidden">
            <Image
              src="/asset/mypic.png"
              alt="MD. Kawsar Ali Profile Photo"
              fill
              className="object-contain object-top mt-8"
              sizes="(max-width: 768px) 280px, 320px"
              priority
            />
          </div>
        </motion.div>

        {/* Right Column: Hero Content */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start space-y-6"
        >
          <div className="inline-flex items-center space-x-2 bg-pill-bg text-pill-text border border-card-border py-1.5 px-4 rounded-full text-sm font-semibold tracking-wide">
            <motion.span
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                repeatDelay: 1.2,
                ease: "easeInOut",
              }}
              className="inline-block origin-[70%_70%] text-base cursor-default"
            >
              👋
            </motion.span>
            <span>Hello I Am</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            MD. Kawsar Ali
          </h1>

          <h2 className="text-lg md:text-xl font-medium text-text-muted">
            Full Stack Developer | React.js | Next.js | TypeScript
          </h2>

          <p className="text-base text-text-muted leading-relaxed max-w-xl">
            Computer Science and Engineering graduate with practical experience
            in Laravel. Passionate about building fast, responsive web systems,
            writing clean code, and integrating smart AI workflows.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
            <a
              href="mailto:kawsarali.cs@email.com"
              className="flex items-center justify-center space-x-2.5 bg-accent hover:bg-accent-hover text-accent-foreground font-semibold px-6 py-3.5 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95"
            >
              <Mail size={18} />
              <span>Email Me</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1gjA65EIcRsOHa3jLcg9l0yi2Xdyd038J/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2.5 bg-card-bg hover:bg-card-border text-foreground font-semibold px-6 py-3.5 rounded-2xl border border-card-border transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              <FileText size={18} />
              <span>View Resume</span>
              <ExternalLink size={14} className="opacity-60" />
            </a>
          </div>

          {/* Tech Stack Pills */}
          <div className="w-full border-t border-border/60 pt-6 mt-2">
            <p className="text-xs uppercase tracking-wider text-text-muted font-bold mb-3.5">
              Key Expertise
            </p>
            <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start">
              {[
                "Next.js",
                "React.js",
                "Node.js",
                "TypeScript",
                "MongoDB",
                "Laravel",
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-card-bg border border-card-border text-foreground/80 hover:border-foreground/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Stats Counter */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto w-full mt-16 md:mt-24 pt-10 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-3 rounded-2xl hover:bg-card-bg/40 transition-colors group"
          >
            <span className="text-3xl md:text-4xl font-extrabold text-foreground">
              {stat.value}
            </span>
            <span className="text-sm font-bold text-foreground mt-1.5">
              {stat.label}
            </span>
            <span className="text-xs text-text-muted mt-0.5">{stat.desc}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
