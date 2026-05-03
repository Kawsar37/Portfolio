"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Firebase",
      "REST APIs",
    ],
  },
  {
    category: "Other",
    skills: ["PHP", "Laravel", "MySQL", "Git", "Docker", "AWS"],
  },
];

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="section-container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Technical Skills
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.category}
            variants={itemVariants}
            className="glass-card"
          >
            <h3 className="text-xl font-bold text-accent mb-6 pb-4 border-b border-gray-800">
              {category.category}
            </h3>

            <div className="space-y-3">
              {category.skills.map((skill) => (
                <motion.div
                  key={skill}
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                >
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span className="text-gray-300">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats */}
      <motion.div
        className="grid grid-cols-3 gap-4 mt-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          { label: "Projects Completed", value: "20+" },
          { label: "Happy Clients", value: "15+" },
          { label: "Years Experience", value: "3+" },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            variants={itemVariants}
            className="glass-card text-center"
          >
            <div className="text-3xl font-bold text-accent mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
