"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import myimg from "../../public/asset/myimage.jpg";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="about" className="section-container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Image */}
        <motion.div variants={itemVariants} className="relative">
          <div className="relative aspect-square rounded-xl overflow-hidden max-h-96 mx-auto">
            <Image
              src={myimg}
              alt="Md Kawsar Ali"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div variants={itemVariants} className="space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm a Computer Science graduate passionate about building beautiful,
            functional web applications. With expertise in both frontend and
            backend technologies, I create seamless digital experiences that
            users love.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            My journey in web development started with a curiosity about how
            things work on the internet. Now, I specialize in modern JavaScript
            frameworks and have a deep understanding of the entire development
            stack.
          </p>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-white">What I Do:</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Full-stack web application development
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Interactive UI with smooth animations
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                Performance optimization and best practices
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                API design and database architecture
              </li>
            </ul>
          </div>

          <motion.a
            href="#contact"
            className="btn-primary inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Work Together
          </motion.a>

          {/* Banner GIF - Mobile only */}
          <motion.div variants={itemVariants} className="mt-8 md:hidden">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-accent/30 shadow-2xl">
              <Image
                src="/asset/banner.gif"
                alt="Banner"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
