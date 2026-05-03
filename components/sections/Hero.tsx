"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Settings } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";
import Image from "next/image";

export function Hero() {
  const roleTypewriter = useTypewriter({
    words: ["Web Developer", "Problem Solver", "CSE Graduate"],
    typingSpeed: 100,
    deletingSpeed: 50,
    delayBetweenWords: 2000,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/Kawsar37", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/kawsar-ali-pramanik/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:kawsarali750@gmail.com", label: "Email" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-0 md:pt-20 bg-dark-950"
    >
      {/* Grid decoration background */}
      <div className="absolute inset-0 -z-20">
        <svg
          className="w-full h-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 100 0 L 0 0 0 100"
                fill="none"
                stroke="#0ea5e9"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent opacity-10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500 opacity-10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </motion.div>

      <motion.div
        className="lg:max-w-[76%] section-container text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Luffy background on mobile - absolute positioned with bottom fade */}
        <div className="md:hidden absolute -top-20 -mt-3 inset-0 opacity-20 -z-50 flex items-center justify-center overflow-hidden">
          <Image
            src="/asset/luffy.png"
            alt="Luffy Background"
            width={500}
            height={500}
            className="object-cover h-auto"
            priority
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, black 0%, black 50%, transparent 100%)",
            }}
          />
        </div>

        {/* Main content with two columns - banner on desktop only */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-8 items-start max-w-7xl mx-auto relative md:items-center md:min-h-96">
          {/* Left side - Text content */}
          <motion.div className="text-left md:text-left relative z-10">
            {/* Greeting badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="text-sm text-accent/70 font-medium tracking-widest">
                Hi, I'm{" "}
                <motion.h1
                  variants={itemVariants}
                  className="text-5xl sm:text-7xl md:text-6xl font-bold mb-6 text-slate-100"
                >
                  Kawsar Ali
                </motion.h1>
              </div>
            </motion.div>

            {/* Main heading */}

            {/* Role typewriter effect */}
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl text-accent font-semibold mb-6 h-12 flex items-center"
            >
              <span className="relative">
                {roleTypewriter}
                <span className="animate-pulse ml-1">|</span>
              </span>
            </motion.h2>

            {/* Subheading description */}
            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-sm text-gray-400">
                Crafting seamless digital experiences with code
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-6 mb-12 relative"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg border border-accent/30 text-accent hover:bg-accent/10 transition-all duration-300 group relative"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.label}
                  >
                    <Icon size={20} />
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 border border-accent/50 text-xs text-accent rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      {social.label}
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-left mb-8 leading-relaxed"
            >
              Full-stack developer specializing in modern web technologies. I
              build beautiful, functional applications with a focus on user
              experience and performance. Always learning, always building.
            </motion.p>
          </motion.div>

          {/* Right side - Banner GIF (background on mobile, right column on desktop) */}
          <motion.div
            variants={itemVariants}
            className="hidden md:flex justify-center items-center relative"
          >
            <div className="relative w-full md:w-full aspect-video rounded-xl overflow-hidden border border-accent/30 shadow-2xl max-w-sm md:max-w-none">
              <Image
                src="/asset/banner.gif"
                alt="Banner"
                fill
                unoptimized
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
