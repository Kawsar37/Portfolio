"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Code2,
  Brain,
  Star,
  ExternalLink,
  Calendar,
  Users,
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
      <div className="max-w-4xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Skills (Grid) - 7 cols */}
        <div className="lg:col-span-7 space-y-8">
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
          <motion.div layout className="grid grid-cols-3 sm:grid-cols-4 gap-4">
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

        {/* Right Column: Competitive Programming & Achievements - 5 cols */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-text-muted font-bold mb-2">
              Problem Solving
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight">
              Achievements
            </h2>
          </div>

          <div className="flex flex-col space-y-6">
            {/* Competitive Programming Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card-bg border border-card-border rounded-3xl p-6 relative overflow-hidden group hover:border-foreground/20 transition-all duration-300"
            >
              {/* Soft visual detail */}
              <div className="absolute -right-10 -bottom-10 text-foreground/5 opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
                <Trophy size={160} />
              </div>

              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 bg-yellow-500/10 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 rounded-2xl border border-yellow-500/20">
                  <Trophy size={22} />
                </div>
                <h3 className="text-lg font-bold">Competitive Programming</h3>
              </div>

              <ul className="space-y-3.5 text-sm text-text-muted">
                <li className="flex items-start space-x-2.5">
                  <span className="text-foreground font-bold text-xs mt-1">
                    •
                  </span>
                  <div>
                    <span className="text-foreground font-bold">
                      2× ICPC Asia Dhaka Regional Contest
                    </span>
                    <p className="text-xs text-text-muted">
                      Qualified and competed in prestigious regional finals.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="text-foreground font-bold text-xs mt-1">
                    •
                  </span>
                  <div>
                    <span className="text-foreground font-bold">
                      3× Team Programming Champion
                    </span>
                    <p className="text-xs text-text-muted">
                      Intra-University Programming Contests (Team division).
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-2.5">
                  <span className="text-foreground font-bold text-xs mt-1">
                    •
                  </span>
                  <div>
                    <span className="text-foreground font-bold">
                      1× Solo Contest Champion
                    </span>
                    <p className="text-xs text-text-muted">
                      Ranked 1st in University individual algorithms battle.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                <a
                  href="https://icpc.global/ICPCID/992DOU25IVCQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-foreground hover:text-text-muted transition-colors group/link"
                >
                  <span>ICPC Global Profile</span>
                  <ExternalLink
                    size={12}
                    className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                  />
                </a>
                <span className="text-[10px] uppercase font-extrabold text-foreground bg-pill-bg border border-card-border px-2.5 py-1 rounded">
                  ID: 992DOU25IVCQ
                </span>
              </div>
            </motion.div>

            {/* Leadership & Education Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-card-bg border border-card-border rounded-3xl p-6 relative overflow-hidden group hover:border-foreground/20 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 bg-blue-500/10 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl border border-blue-500/20">
                  <Users size={22} />
                </div>
                <h3 className="text-lg font-bold">Leadership & Education</h3>
              </div>

              <div className="space-y-4">
                <div className="text-sm">
                  <span className="text-foreground font-bold block">
                    Vice President, BAUET Computer Society
                  </span>
                  <span className="text-xs text-text-muted block mt-0.5">
                    Former Student Leader
                  </span>
                  <p className="text-xs text-text-muted mt-1">
                    Coordinated national programming bootcamps and university
                    tech symposiums.
                  </p>
                </div>

                <div className="text-sm border-t border-border/60 pt-3">
                  <span className="text-foreground font-bold block">
                    B.Sc. in Computer Science & Engineering
                  </span>
                  <span className="text-xs text-foreground/80 block mt-0.5">
                    BAUET | GPA 3.40 / 4.00
                  </span>
                  <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider block mt-1">
                    Jan 2022 – Jan 2026
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
