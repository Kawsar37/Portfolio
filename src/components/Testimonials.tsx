"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rakibul Hasan",
    role: "Senior Software Engineer, Braincraft",
    text: "Kawsar is one of the most dedicated developers I've worked with. His understanding of full-stack architecture and clean code practices is exceptional. He consistently delivers high-quality work under tight deadlines.",
    rating: 5,
  },
  {
    name: "Tamim Irfan",
    role: "CTO, SkillSwap",
    text: "Working with Kawsar on SkillSwap was a great experience. He architected the entire backend and implemented complex payment workflows with Stripe. His problem-solving skills and attention to detail are impressive.",
    rating: 5,
  },
  {
    name: "Md. Rafiqul Islam",
    role: "Professor, BAUET",
    text: "Kawsar was an outstanding student and a natural leader. As Vice President of the Computer Society, he organized bootcamps that inspired many students. His ICPC regional qualification speaks to his strong algorithmic foundations.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 px-4 md:px-8 bg-background border-b border-border transition-colors">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs uppercase tracking-widest text-text-muted font-bold block mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            What People Say
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative bg-card-bg border border-card-border rounded-3xl p-8 md:p-12"
        >
          {/* Quote Icon */}
          <div className="absolute top-6 right-6 md:top-8 md:right-8 text-foreground/5">
            <Quote size={80} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-base md:text-lg text-foreground leading-relaxed mb-8 relative z-10">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center text-foreground font-bold text-lg">
                  {testimonials[current].name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-foreground">
                    {testimonials[current].name}
                  </p>
                  <p className="text-xs text-text-muted">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-foreground" : "w-1.5 bg-border hover:bg-text-muted"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={prev}
                className="p-2 rounded-lg border border-border bg-card-bg text-foreground hover:bg-border transition-all duration-300 hover:scale-105 active:scale-95"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="p-2 rounded-lg border border-border bg-card-bg text-foreground hover:bg-border transition-all duration-300 hover:scale-105 active:scale-95"
                aria-label="Next testimonial"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
