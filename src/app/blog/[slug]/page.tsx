import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { blogPosts, getPostBySlug } from "@/lib/blog-data";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  // Convert markdown-like bold to HTML and paragraphs
  const formatContent = (text: string) => {
    return text.split("\n\n").map((paragraph, i) => {
      // Handle headings (lines starting with **)
      if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
        const heading = paragraph.replace(/\*\*/g, "");
        return (
          <h2
            key={i}
            className="text-xl md:text-2xl font-extrabold text-foreground mt-10 mb-4"
          >
            {heading}
          </h2>
        );
      }

      // Handle code blocks
      if (paragraph.includes("```")) {
        const code = paragraph.replace(/```\w*\n?/g, "").trim();
        return (
          <pre
            key={i}
            className="bg-card-bg border border-card-border rounded-xl p-4 overflow-x-auto my-6"
          >
            <code className="text-xs text-text-muted font-mono">{code}</code>
          </pre>
        );
      }

      // Handle lists
      if (paragraph.includes("\n- ")) {
        const lines = paragraph.split("\n");
        const listItems = lines
          .filter((l) => l.startsWith("- "))
          .map((l) => l.replace("- ", ""));
        return (
          <ul
            key={i}
            className="list-disc list-inside space-y-2 my-4 text-sm text-text-muted"
          >
            {listItems.map((item, j) => (
              <li key={j}>{formatInlineBold(item)}</li>
            ))}
          </ul>
        );
      }

      // Handle numbered lists
      if (/^\d+\./.test(paragraph)) {
        const items = paragraph.split("\n").filter((l) => l.trim());
        return (
          <ol
            key={i}
            className="list-decimal list-inside space-y-2 my-4 text-sm text-text-muted"
          >
            {items.map((item, j) => (
              <li key={j}>{formatInlineBold(item.replace(/^\d+\.\s*/, ""))}</li>
            ))}
          </ol>
        );
      }

      // Regular paragraph
      return (
        <p
          key={i}
          className="text-sm md:text-base text-text-muted leading-relaxed mb-4"
        >
          {formatInlineBold(paragraph)}
        </p>
      );
    });
  };

  const formatInlineBold = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="text-foreground font-bold">
            {part.replace(/\*\*/g, "")}
          </strong>
        );
      }
      return part;
    });
  };

  // Find prev/next posts
  const currentIndex = blogPosts.findIndex((p) => p.id === post.id);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-text-muted hover:text-foreground transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back</span>
          </Link>
          <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
            {post.readTime}
          </span>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-foreground/5 text-text-muted border border-border"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-text-muted mb-10 pb-8 border-b border-border">
          <span className="flex items-center gap-1.5">
            <Calendar size={12} />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={12} />
            {post.readTime}
          </span>
        </div>

        {/* Images */}
        {post.images.length > 0 && (
          <div className="mb-10">
            {post.images.length === 1 ? (
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-card-border">
                <Image
                  src={post.images[0]}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                  priority
                />
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {post.images.map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-[16/9] rounded-xl overflow-hidden bg-card-border"
                  >
                    <Image
                      src={img}
                      alt={`${post.title} - Image ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 50vw, 384px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Excerpt */}
        <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed mb-8">
          {post.excerpt}
        </p>

        {/* Content */}
        <div className="prose-custom">{formatContent(post.content)}</div>

        {/* External Link */}
        {post.link && (
          <div className="mt-10 pt-8 border-t border-border">
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-foreground text-background hover:opacity-90 transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              <span>View External Link</span>
              <ArrowLeft size={12} className="rotate-180" />
            </a>
          </div>
        )}

        {/* Prev/Next Navigation */}
        <div className="mt-12 pt-8 border-t border-border grid grid-cols-2 gap-4">
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="group p-4 bg-card-bg border border-card-border rounded-xl hover:border-foreground/20 transition-all"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                Previous
              </span>
              <p className="text-sm font-bold text-foreground mt-1 group-hover:text-foreground/70 transition-colors line-clamp-2">
                {prevPost.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="group p-4 bg-card-bg border border-card-border rounded-xl hover:border-foreground/20 transition-all text-right"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                Next
              </span>
              <p className="text-sm font-bold text-foreground mt-1 group-hover:text-foreground/70 transition-colors line-clamp-2">
                {nextPost.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </article>
    </div>
  );
}
