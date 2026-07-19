"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Code2,
  Eye,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const PROJECTS_PER_PAGE = 3;

const projectList = [
  {
    id: 1,
    title: "Intervue",
    subtitle: "AI-Powered Interview Preparation Platform",
    description:
      "Architected a full-stack AI interview platform with text and voice interview modes using Next.js and TypeScript. Developed 25+ RESTful APIs and 8 MongoDB collections, integrating Gemini AI for personalized interview question generation.Engineered resume parsing, PDF text extraction, secure authentication, and Web Speech API–powered voice interviews.",
    image: "/asset/project5.png",
    github: "https://github.com/Kawsar37/Intervue",
    live: "https://intervue-green.vercel.app",
    embed: null,
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "BetterAuth",
      "Google Gemini AI",
      "Tailwind CSS",
      "Web Speech API",
    ],
    color: "#6366f1",
  },
  {
    id: 1,
    title: "SkillSwap",
    subtitle: "Freelance Micro-Task Marketplace",
    description:
      "Full-stack freelance marketplace with 3 role-based dashboards, 25+ REST APIs, Stripe checkout, and BetterAuth JWT. Optimized Vercel middleware to cut cold-start by 40%.",
    image: "/asset/project4.png",
    github: "https://github.com/Kawsar37/skill-swap-frontend",
    live: "https://skill-swap-frontend-by-kawsar.vercel.app/",
    embed: null,
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe", "BetterAuth"],
    color: "#6366f1",
  },
  {
    id: 2,
    title: "IdeaVault",
    subtitle: "Startup Idea Sharing Platform",
    description:
      "Full-stack idea-sharing platform with Google OAuth, BetterAuth sessions, CRUD operations on startup ideas, category filtering, and dark/light mode toggles.",
    image: "/asset/project1.png",
    github: "https://github.com/Kawsar37/idea-vault-frontend",
    live: "https://idea-vault-frontend-eight.vercel.app",
    embed: null,
    tags: ["Next.js", "Express.js", "MongoDB", "BetterAuth", "HeroUI"],
    color: "#8b5cf6",
  },
  {
    id: 3,
    title: "Tiles Gallery",
    subtitle: "Authentication & Access Control",
    description:
      "Secure Next.js app with route-level access control, persistent user profiles, page-protection middleware, and mobile-first UI with Swiper.js sliders.",
    image: "/asset/project2.png",
    github: "https://github.com/Kawsar37/tiles-gallery",
    live: "https://tiles-gallery-by-kawsar.vercel.app",
    embed: null,
    tags: ["Next.js", "Better Auth", "DaisyUI", "Swiper.js"],
    color: "#3b82f6",
  },
  {
    id: 4,
    title: "DigiTools",
    subtitle: "Digital Products Web App",
    description:
      "Modern React app for browsing digital products with add-to-cart functionality. Built with daisyUI components and product data fetched via Fetch API from local JSON.",
    image: "/asset/project3.png",
    github: "https://github.com/Kawsar37/digi-tools-platform",
    live: "https://digi-tools-platform-by-kawsar.netlify.app",
    embed:
      "https://codesandbox.io/embed/digi-tools-platform-hqk4?view=preview&module=%2Fsrc%2FApp.jsx",
    tags: ["React.js", "Tailwind CSS", "daisyUI", "Fetch API"],
    color: "#06b6d4",
  },
];

const totalPages = Math.ceil(projectList.length / PROJECTS_PER_PAGE);

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [previewMode, setPreviewMode] = useState<"image" | "code">("image");

  const trackClick = (projectName: string, type: "live" | "github") => {
    // Log click event (replace with analytics service later)
    console.log(`[Project Click] ${projectName} - ${type}`, {
      timestamp: new Date().toISOString(),
      project: projectName,
      action: type,
    });
  };

  const paginatedProjects = projectList.slice(
    currentPage * PROJECTS_PER_PAGE,
    (currentPage + 1) * PROJECTS_PER_PAGE,
  );

  const goToPage = (page: number) => {
    setDirection(page > currentPage ? 1 : -1);
    setCurrentPage(page);
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setDirection(1);
      setCurrentPage((p) => p + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage((p) => p - 1);
    }
  };

  return (
    <section
      id="projects"
      className="py-20 md:py-28 px-4 md:px-8 bg-background border-b border-border transition-colors"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <span className="text-xs uppercase tracking-widest text-text-muted font-bold block mb-3">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Featured Projects
            </h2>
          </div>
          <p className="text-sm text-text-muted max-w-xs font-medium">
            Full-stack systems, fluid interfaces, and performance-tuned
            software.
          </p>
        </motion.div>

        {/* Project Grid with Pagination */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {paginatedProjects.map((project, idx) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative bg-card-bg border border-card-border rounded-2xl overflow-hidden hover:border-foreground/20 transition-all duration-500 hover:shadow-xl flex flex-col"
                >
                  {/* Project Image */}
                  <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-card-bg to-background overflow-hidden">
                    {previewMode === "image" || !project.embed ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 500px"
                      />
                    ) : (
                      <iframe
                        src={project.embed}
                        className="w-full h-full border-0"
                        title={`${project.title} - Live Preview`}
                        loading="lazy"
                      />
                    )}

                    {/* Preview Toggle */}
                    {project.embed && (
                      <div className="absolute top-3 left-3 z-10 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setPreviewMode("image");
                          }}
                          className={`p-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${
                            previewMode === "image"
                              ? "bg-background/90 text-foreground backdrop-blur-sm"
                              : "bg-background/50 text-text-muted backdrop-blur-sm hover:bg-background/70"
                          }`}
                        >
                          <Eye size={12} />
                        </button>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setPreviewMode("code");
                          }}
                          className={`p-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${
                            previewMode === "code"
                              ? "bg-background/90 text-foreground backdrop-blur-sm"
                              : "bg-background/50 text-text-muted backdrop-blur-sm hover:bg-background/70"
                          }`}
                        >
                          <Code2 size={12} />
                        </button>
                      </div>
                    )}
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Live Preview Badge */}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackClick(project.title, "live")}
                        className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-background/90 backdrop-blur-sm text-foreground border border-border opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105"
                      >
                        Live Preview
                        <ArrowUpRight size={10} />
                      </a>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-4 md:p-5">
                    {/* Project Number */}
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-md"
                        style={{
                          backgroundColor: `${project.color}15`,
                          color: project.color,
                        }}
                      >
                        {String(project.id).padStart(2, "0")}
                      </span>
                      <div className="h-px flex-1 bg-border" />
                    </div>

                    {/* Title */}
                    <h3 className="text-base md:text-lg font-extrabold text-foreground mb-0.5 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-text-muted mb-2">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-xs text-text-muted leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-background border border-border text-text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 pt-3 border-t border-border">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => trackClick(project.title, "live")}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-foreground text-background hover:opacity-90 transition-all duration-300 hover:scale-[1.02] active:scale-95"
                        >
                          <span>Live</span>
                          <ArrowUpRight size={10} />
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackClick(project.title, "github")}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[10px] font-bold uppercase tracking-wider rounded-lg bg-card-bg border border-border text-foreground hover:bg-border transition-all duration-300 hover:scale-[1.02] active:scale-95"
                      >
                        <FaGithub size={11} />
                        <span>Source</span>
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        <div className="mt-10 md:mt-12 flex items-center justify-center gap-5">
          {/* Previous Button */}
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="p-3 rounded-xl border border-border bg-card-bg text-foreground hover:bg-border disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 active:scale-95"
            aria-label="Previous page"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Page Dots */}
          <div className="flex items-center gap-3">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i)}
                className="group relative p-1"
                aria-label={`Go to page ${i + 1}`}
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    currentPage === i
                      ? "w-8 h-2 bg-foreground"
                      : "w-2 h-2 bg-border group-hover:bg-text-muted"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className="p-3 rounded-xl border border-border bg-card-bg text-foreground hover:bg-border disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 active:scale-95"
            aria-label="Next page"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Page Counter */}
        <div className="mt-4 text-center">
          <span className="text-xs font-semibold text-text-muted">
            {currentPage + 1} / {totalPages}
          </span>
        </div>
      </div>
    </section>
  );
}
