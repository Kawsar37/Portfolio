"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Tiles Gallery",
    description:
      "This project was built to implement authentication using Better Auth in a Next.js application. It also serves as a learning project to understand Next.js routing, protected/public routes, and modern UI integration.",
    tech: ["Next.js", "JavaScript", "Tailwind CSS", "Better Auth"],
    github: "https://github.com/Kawsar37/tiles-gallery",
    live: "https://tiles-gallery-by-kawsar.vercel.app/",
    image: "/project1.png",
  },
  {
    id: 2,
    title: "KeenKeeper",
    description:
      "KeenKeeper is a modern web application built with Next.js that helps users track and visualize their communication history, including calls, texts and video interactions. It provides an organized timeline view and insightful statistics for better understanding of communication patterns.",
    tech: ["Next.js", "JavaScript", "Tailwind CSS", "Rechart", "DaisyUI"],
    github: "https://github.com/Kawsar37/keen-keeper",
    live: "https://keen-keeper-by-kawsar.vercel.app/",
    image: "/project2.png",
  },
  {
    id: 3,
    title: "Project Three",
    description:
      "DigiTools Platform is a modern web application built using React, Tailwind CSS, and daisyUI. It allows users to browse digital products add them to a cart and remove items as needed. Product data is fetched from a local JSON file /public/data.json using the Fetch API along with use() hook within a component. The application is fully responsive across devices and focuses on clean UI and core React functionality for state management and user interaction.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "DaisyUI",
      "JavaScript (ES6+)",
      "React-Toastify",
    ],
    github: "https://github.com/Kawsar37/digi-tools-platform",
    live: "https://digi-tools-platform-by-kawsar.netlify.app/",
    image: "/project3.png",
  },
];

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    hover: { y: -10, transition: { duration: 0.3 } },
  };

  return (
    <section
      id="projects"
      className="py-20 bg-dark-950 border-t border-accent/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Projects
          </h2>
          <p className="text-gray-400">
            Check out some of my recent work and projects
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              className="glass-card group cursor-pointer overflow-hidden"
            >
              {/* Project Image */}
              <div className="w-full h-48 rounded-lg mb-6 overflow-hidden relative group-hover:scale-105 transition-transform duration-500">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-6 border-t border-gray-800">
                <motion.a
                  target="_blank"
                  href={project.github}
                  className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Github size={18} />
                  <span className="text-sm">Code</span>
                </motion.a>
                <motion.a
                  target="_blank"
                  href={project.live}
                  className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <ExternalLink size={18} />
                  <span className="text-sm">Live</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
