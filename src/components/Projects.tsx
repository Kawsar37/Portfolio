"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export default function Projects() {
  const projectList = [
    {
      title: "SkillSwap - Freelance Micro-Task Marketplace",
      description:
        "Architected a full-stack freelance marketplace featuring 3 role-based dashboards (client, freelancer, and admin) with secure transactional workflows. Developed 25+ REST APIs and optimized serverless database middleware on Vercel to completely eliminate cold-start timeouts and reduce data-fetching latency by 40%. Integrated Stripe checkout and BetterAuth JWT for end-to-end payment processing and robust session management.",
      image: "/asset/project4.png",
      github: "https://github.com/Kawsar37/skill-swap-frontend",
      live: "https://skill-swap-frontend-by-kawsar.vercel.app/",
      tags: [
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Stripe",
        "BetterAuth",
        "Tailwind CSS",
        "JWT",
      ],
    },
    {
      title: "IdeaVault - Startup Idea Sharing Platform",
      description:
        "Developed a full-stack idea-sharing platform featuring JWT-based authentication, Google OAuth sign-in, and persistent session management backed by BetterAuth. Users can perform CRUD operations on startup ideas and comments, filter content by category, and search across submissions. Built dynamic, responsive UI pages with dark/light mode toggles.",
      image: "/asset/project1.png",
      github: "https://github.com/Kawsar37/idea-vault-frontend",
      live: "https://idea-vault-frontend-eight.vercel.app",
      tags: [
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "BetterAuth",
        "HeroUI",
        "Tailwind CSS",
        "JWT",
      ],
    },
    {
      title: "Tiles Gallery - Authentication & Access Control",
      description:
        "A Next.js web application implementing secure, route-level access control. Managed persistent user profile states and implemented strict page-protection policies using Next.js routing middleware. Styled with a mobile-first philosophy using modern UI components, React Toastify logs, and dynamic sliders powered by Swiper.js.",
      image: "/asset/project2.png",
      github: "https://github.com/Kawsar37/tiles-gallery",
      live: "https://tiles-gallery-by-kawsar.vercel.app",
      tags: [
        "Next.js",
        "Better Auth",
        "HeroUI",
        "DaisyUI",
        "React Toastify",
        "Swiper.js",
        "Tailwind CSS",
      ],
    },
    {
      title: "DigiTools Platform - React Web App with Local JSON Data",
      description:
        "DigiTools Platform is a modern web application built using React, Tailwind CSS, and daisyUI. It allows users to browse digital products add them to a cart and remove items as needed. Product data is fetched from a local JSON file /public/data.json using the Fetch API along with use() hook within a component. The application is fully responsive across devices and focuses on clean UI and core React functionality for state management and user interaction.",
      image: "/asset/project3.png",
      github: "https://github.com/Kawsar37/digi-tools-platform",
      live: "https://digi-tools-platform-by-kawsar.netlify.app", // No live site for native Android, only GitHub
      tags: [
        "React.js",
        "Tailwind CSS",
        "daisyUI",
        "Fetch API",
        "JSON Data",
        "Responsive Design",
        "State Management",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 md:px-8 border-b border-border bg-background transition-colors"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-text-muted font-bold mb-2">
            Featured Work
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Projects
          </h2>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {projectList.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-card-bg border border-card-border rounded-3xl p-6 md:p-8 flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-8 hover:border-foreground/20 transition-all duration-300 group hover:shadow-xl"
            >
              {/* Left Column: Image wrapper */}
              <div className="md:col-span-5 relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-background border border-card-border/50">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>

              {/* Right Column: Information */}
              <div className="md:col-span-7 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Links */}
                <div className="flex flex-wrap items-center gap-4 text-sm font-semibold">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 text-text-muted hover:text-foreground transition-colors group/link"
                  >
                    <FaGithub size={16} />
                    <span>GitHub Code</span>
                    <ExternalLink
                      size={12}
                      className="opacity-0 group-hover/link:opacity-100 transition-opacity"
                    />
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1.5 text-text-muted hover:text-foreground transition-colors group/link"
                    >
                      <Globe size={16} />
                      <span>Live Site</span>
                      <ExternalLink
                        size={12}
                        className="opacity-0 group-hover/link:opacity-100 transition-opacity"
                      />
                    </a>
                  )}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-pill-bg text-pill-text border border-card-border hover:border-foreground/10 transition-colors"
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
    </section>
  );
}
