"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Zap,
  Cpu,
  Database,
  GitBranch,
  Package,
  Layers,
  Terminal,
  Workflow,
  Briefcase,
  FileCode,
  Network,
} from "lucide-react";
import React from "react";

// Change the interface definition at the top of the file:

interface TechItem {
  name: string;
  icon: React.ComponentType<{ size?: string | number; className?: string }>;
  color: string;
}

// Custom palette icon - must be defined BEFORE techStack array
const Palette = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="7" cy="7" r="1.5" fill="currentColor" />
    <circle cx="17" cy="7" r="1.5" fill="currentColor" />
    <circle cx="7" cy="17" r="1.5" fill="currentColor" />
    <circle cx="17" cy="17" r="1.5" fill="currentColor" />
  </svg>
);

const techStack: TechItem[] = [
  {
    name: "JavaScript",
    icon: Code2,
    color: "bg-yellow-500/20 text-yellow-400",
  },
  { name: "TypeScript", icon: FileCode, color: "bg-blue-500/20 text-blue-400" },
  { name: "React", icon: Zap, color: "bg-cyan-500/20 text-cyan-400" },
  { name: "Next.js", icon: Package, color: "bg-gray-500/20 text-gray-300" },
  { name: "Node.js", icon: Terminal, color: "bg-green-500/20 text-green-400" },
  { name: "Express", icon: Workflow, color: "bg-gray-500/20 text-gray-300" },
  { name: "MongoDB", icon: Database, color: "bg-green-500/20 text-green-400" },
  { name: "PostgreSQL", icon: Database, color: "bg-blue-500/20 text-blue-400" },
  { name: "GSAP", icon: Layers, color: "bg-purple-500/20 text-purple-400" },
  { name: "Framer Motion", icon: Cpu, color: "bg-pink-500/20 text-pink-400" },
  {
    name: "Tailwind CSS",
    icon: Palette,
    color: "bg-cyan-500/20 text-cyan-400",
  },
  { name: "Git", icon: GitBranch, color: "bg-orange-500/20 text-orange-400" },
  { name: "PHP", icon: Code2, color: "bg-indigo-500/20 text-indigo-400" },
  { name: "Laravel", icon: Briefcase, color: "bg-red-500/20 text-red-400" },
  { name: "MySQL", icon: Database, color: "bg-blue-500/20 text-blue-400" },
  { name: "REST APIs", icon: Network, color: "bg-cyan-500/20 text-cyan-400" },
];

export function TechStack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <section className="py-20 bg-dark-950 border-t border-accent/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Tech Stack
          </h2>
          <p className="text-gray-400">
            Technologies and tools I use to build amazing projects
          </p>
        </motion.div>

        {/* Tech icons grid */}
        <motion.div
          className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {techStack.map((tech) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                className={`group relative flex items-center justify-center p-4 rounded-lg border border-accent/20 ${tech.color} cursor-pointer transition-all duration-300 hover:border-accent/60 hover:scale-110`}
                whileHover={{ y: -5 }}
              >
                <Icon size={24} />

                {/* Tooltip */}
                <div className="absolute bottom-full mb-2 px-3 py-1 bg-gray-900 border border-accent/50 text-xs text-accent rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                  {tech.name}
                </div>

                {/* Tooltip arrow */}
                <div className="absolute bottom-full mb-1 w-2 h-2 bg-gray-900 border-b border-r border-accent/50 transform rotate-45 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
