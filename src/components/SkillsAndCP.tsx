"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Award,
  Shield,
} from "lucide-react";
import { TbBrandVscode } from "react-icons/tb";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiLaravel,
  SiPhp,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiAndroidstudio,
  SiOpenai,
} from "react-icons/si";

type Skill = {
  name: string;
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  color: string;
  category: "frontend" | "backend" | "tools" | "ai";
};

export default function SkillsAndCP() {
  const [activeTab, setActiveTab] = useState<
    "all" | "frontend" | "backend" | "tools" | "ai"
  >("all");

  const skills: Skill[] = [
    // Frontend
    { name: "React.js", icon: SiReact, color: "#61DAFB", category: "frontend" },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "#FFFFFF",
      category: "frontend",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "#3178C6",
      category: "frontend",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "#F7DF1E",
      category: "frontend",
    },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26", category: "frontend" },
    { name: "CSS3", icon: SiCss, color: "#1572B6", category: "frontend" },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "#06B6D4",
      category: "frontend",
    },

    // Backend
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "#339933",
      category: "backend",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      color: "#888888",
      category: "backend",
    },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "backend" },
    { name: "Laravel", icon: SiLaravel, color: "#FF2D20", category: "backend" },
    { name: "PHP", icon: SiPhp, color: "#777BB4", category: "backend" },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      color: "#4169E1",
      category: "backend",
    },
    { name: "BetterAuth", icon: Shield, color: "#3b82f6", category: "backend" },

    // Tools
    { name: "Git", icon: SiGit, color: "#F05032", category: "tools" },
    { name: "GitHub", icon: SiGithub, color: "#FFFFFF", category: "tools" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37", category: "tools" },
    { name: "Vercel", icon: SiVercel, color: "#FFFFFF", category: "tools" },
    {
      name: "VS Code",
      icon: TbBrandVscode,
      color: "#007ACC",
      category: "tools",
    },
    {
      name: "Android Studio",
      icon: SiAndroidstudio,
      color: "#3DDC84",
      category: "tools",
    },

    // AI Tools
    { name: "ChatGPT", icon: SiOpenai, color: "#10a37f", category: "ai" },
    { name: "Gemini", icon: Brain, color: "#4285F4", category: "ai" },
    { name: "Prompt Eng.", icon: Award, color: "#F59E0B", category: "ai" },
  ];

  const filteredSkills =
    activeTab === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeTab);

  const tabs = [
    { id: "all", label: "All Tech" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend/DB" },
    { id: "tools", label: "Tools" },
    { id: "ai", label: "AI & Prompts" },
  ] as const;

  return (
    <section
      id="skills"
      className="py-20 px-4 md:px-8 border-b border-border bg-background transition-colors"
    >
      <div className="max-w-4xl mx-auto w-full space-y-8">
        <div>
          <p className="text-xs uppercase tracking-widest text-text-muted font-bold mb-2">
            My Toolkit
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight">
            Technical Skills
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-between gap-1.5 p-1 bg-card-bg border border-card-border rounded-xl">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-xs font-semibold px-3 py-2 rounded-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-foreground text-background shadow-md"
                  : "text-text-muted hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid of Logos */}
        <motion.div layout className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  key={skill.name}
                  className="flex flex-col items-center justify-center p-4 rounded-2xl bg-card-bg border border-card-border hover:border-foreground/20 hover:shadow-lg transition-all duration-300 group cursor-default"
                >
                  <div
                    className="text-2xl md:text-3xl mb-2 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: skill.color }}
                  >
                    <IconComponent />
                  </div>
                  <span className="text-[10px] md:text-xs font-bold text-text-muted group-hover:text-foreground transition-colors text-center">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
