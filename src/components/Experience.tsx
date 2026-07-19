"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Full Stack Developer",
    company: "Freelance",
    period: "2023 - Present",
    description:
      "Building full-stack web applications using Next.js, Node.js, and MongoDB. Delivered 10+ projects including e-commerce platforms, SaaS dashboards, and real-time collaboration tools.",
    tags: ["Next.js", "React", "Node.js", "MongoDB"],
  },
  {
    type: "work",
    title: "Vice President",
    company: "BAUET Computer Society",
    period: "2023 - 2024",
    description:
      "Led a team of 20+ members to organize national programming bootcamps, tech symposiums, and coding competitions. Increased society membership by 40%.",
    tags: ["Leadership", "Event Management", "Public Speaking"],
  },
  {
    type: "education",
    title: "B.Sc. in Computer Science & Engineering",
    company: "BAUET",
    period: "Jan 2022 - Jan 2026",
    description:
      "GPA 3.40 / 4.00. Coursework: Data Structures, Algorithms, Database Systems, Web Engineering, Software Engineering, Machine Learning.",
    tags: ["GPA 3.40", "Dean's List", "ICPC Regionalist"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 md:py-28 px-4 md:px-8 bg-background border-b border-border transition-colors"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-text-muted font-bold block mb-3">
            Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Experience & Education
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-4 top-1 w-4 h-4 rounded-full border-2 border-card-border bg-card-bg">
                  <div className="absolute inset-1 rounded-full bg-foreground" />
                </div>

                {/* Card */}
                <div className="bg-card-bg border border-card-border rounded-2xl p-5 md:p-6 hover:border-foreground/20 transition-all duration-300">
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-foreground/5">
                        {exp.type === "work" ? (
                          <Briefcase size={14} className="text-foreground" />
                        ) : (
                          <GraduationCap size={14} className="text-foreground" />
                        )}
                      </div>
                      <h3 className="text-sm md:text-base font-bold text-foreground">
                        {exp.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-semibold text-text-muted">
                      <Calendar size={10} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Company */}
                  <p className="text-xs font-semibold text-text-muted mb-2">
                    {exp.company}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-text-muted leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-background border border-border text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
