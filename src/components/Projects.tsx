"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
        "DigiTools Platform is a modern web application built using React, Tailwind CSS, and daisyUI. It allows users to browse digital products add them to a cart and remove items as needed. Product data is fetched from a local JSON file using the Fetch API along with use() hook within a component.",
      image: "/asset/project3.png",
      github: "https://github.com/Kawsar37/digi-tools-platform",
      live: "https://digi-tools-platform-by-kawsar.netlify.app",
      tags: ["React.js", "Tailwind CSS", "daisyUI", "Fetch API", "JSON Data"],
    },
  ];

  return (
    <section
      id="projects"
      className="py-32 px-4 md:px-8 bg-black border-b border-zinc-800 text-white"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Modern Minimalistic Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold block mb-3"></span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Featured Projects.
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-xs font-medium">
            A digital showroom of full-stack systems, fluid interfaces, and
            performance-tuned software architectures.
          </p>
        </div>

        {/* Modern Project Column List */}
        <div className="space-y-32">
          {projectList.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group"
            >
              {/* 1. Cinematic Screen Preview Container */}
              <div className="lg:col-span-7 relative w-full aspect-[16/10] bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800/80 shadow-2xl transition-all duration-500 group-hover:border-zinc-700/50">
                {/* Simulated Window Controls (Adds high-end flair) */}
                <div className="absolute top-3 left-4 flex gap-1.5 z-10 opacity-60">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                </div>

                <div className="w-full h-full pt-8 p-1 md:p-2 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black">
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-inner">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      priority={idx === 0}
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      sizes="(max-width: 1024px) 100vw, 700px"
                    />
                  </div>
                </div>
              </div>

              {/* 2. Text Information Stack */}
              <div className="lg:col-span-5 flex flex-col space-y-5 lg:pl-4">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-md bg-zinc-900 text-zinc-400 border border-zinc-800/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Title */}
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight">
                  {project.title.split(" - ")[0]}
                  <span className="block text-sm font-medium text-zinc-500 mt-1">
                    {project.title.split(" - ")[1]}
                  </span>
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Interactive Modern Actions */}
                <div className="flex items-center gap-4 pt-2">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-white text-black hover:bg-zinc-200 transition-all duration-300 shadow-lg group/btn"
                    >
                      <span>Explore Project</span>
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                      />
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:text-white transition-all duration-300 text-zinc-300"
                  >
                    <FaGithub size={15} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
