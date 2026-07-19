"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, BookOpen } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

const featuredPost = blogPosts[0];
const gridPosts = blogPosts.slice(1);

export default function Blog() {
  return (
    <section
      id="blog"
      className="py-16 md:py-24 px-4 md:px-8 bg-background border-b border-border transition-colors"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <span className="text-xs uppercase tracking-widest text-text-muted font-bold block mb-3">
              Writings
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Latest Posts
            </h2>
          </div>
          <p className="text-sm text-text-muted max-w-xs font-medium">
            Stories, tutorials, and thoughts on development and technology.
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="group bg-card-bg border border-card-border rounded-2xl p-6 md:p-8 hover:border-foreground/20 transition-all duration-500 relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 text-foreground/[0.03] pointer-events-none">
              <BookOpen size={200} />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-foreground/5 border border-border rounded-full mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                  Featured
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {featuredPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-foreground/5 text-text-muted border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl md:text-2xl font-extrabold text-foreground mb-2 tracking-tight max-w-2xl">
                {featuredPost.title}
              </h3>

              <p className="text-xs md:text-sm text-text-muted leading-relaxed mb-4 max-w-2xl line-clamp-2">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-[11px] text-text-muted">
                  <span>{featuredPost.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={10} />
                    {featuredPost.readTime}
                  </span>
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-foreground hover:text-text-muted transition-colors"
                >
                  <span>Read More</span>
                  <ArrowUpRight size={10} />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {gridPosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="group bg-card-bg border border-card-border rounded-xl p-4 md:p-5 hover:border-foreground/20 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 opacity-[0.03] pointer-events-none">
                <BookOpen size={96} />
              </div>

              <div className="relative z-10">
                <div className="flex flex-wrap gap-1 mb-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-foreground/5 text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-sm md:text-base font-extrabold text-foreground mb-1.5 tracking-tight group-hover:text-foreground/80 transition-colors">
                  {post.title}
                </h3>

                <p className="text-xs text-text-muted leading-relaxed mb-3 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <div className="flex items-center gap-3 text-[10px] text-text-muted">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={10} />
                      {post.readTime}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-foreground hover:text-text-muted transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowUpRight size={10} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
