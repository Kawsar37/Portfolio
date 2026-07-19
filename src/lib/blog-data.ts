export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  images: string[];
  content: string;
  link?: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "icpc-journey",
    title: "From Campus to Regionals: My ICPC Journey",
    excerpt:
      "How a team of three from BAUET prepared for and competed in the ICPC Asia Dhaka Regional Contest — the late nights, the algorithm grind, and what it taught me about teamwork.",
    date: "Dec 2024",
    readTime: "8 min read",
    tags: ["ICPC", "Competitive Programming", "Story"],
    images: [],
    content: `The journey started six months before Regionals. Our team — me, Rafiq, and Tanvir — would meet every evening at the computer lab, solving 3-4 problems daily. We divided responsibilities: I focused on graph algorithms and dynamic programming, Rafiq handled data structures, and Tanvir specialized on geometry and string problems.

The real breakthrough came when we stopped solving problems individually and started thinking as a unit. We developed a system: one person would read the problem statement aloud while the other two brainstormed approaches. This cut our problem-reading time in half and helped us catch edge cases we'd each miss alone.

**The Preparation Grind**

We followed a strict schedule. Monday through Thursday was problem solving — we'd rotate through Codeforces, AtCoder, and past ICPC regionals. Friday was mock contests: full 5-hour simulations under real conditions. Saturday was review day — we'd revisit problems we couldn't solve and write up solutions.

The hardest part wasn't the algorithms — it was managing burnout. By month four, we were exhausted. Our breakthrough came when we started taking one full rest day per week. Counterintuitively, our solve rate went up.

**The Actual Contest**

During the actual contest, we solved 5 problems in the first 3 hours, then hit a wall. The 6th problem took us 2 hours of combined brainpower. I was working on the graph component while Tanvir optimized the geometry part. Rafiq kept checking our edge cases.

Crossing that threshold felt like breaking through a ceiling. When we finally AC'd that problem, the whole team erupted. We didn't win a medal that year, but the experience taught me more about collaboration and pressure management than any project ever could.

**What I Learned**

1. **Team chemistry matters more than individual skill.** Three average programmers who communicate well will beat three geniuses who can't coordinate.
2. **Rest is productive.** Burning out before regionals helps nobody.
3. **Review everything.** The problems we solved fastest were the ones we'd practiced in similar forms before.

Would I do it again? In a heartbeat. ICPC taught me how to think under pressure, how to collaborate on hard problems, and how to fail gracefully — skills I use every day as a developer.`,
    link: "https://icpc.global/ICPCID/992DOU25IVCQ",
  },
  {
    id: 2,
    slug: "ai-automation-workflow",
    title: "How I Use AI to Automate My Development Workflow",
    excerpt:
      "A practical look at the AI tools, prompts, and automations I use daily — from code generation to testing to documentation.",
    date: "Jan 2025",
    readTime: "5 min read",
    tags: ["AI", "Automation", "Productivity"],
    images: ["/asset/project1.png"],
    content: `AI didn't replace my workflow — it amplified it. Here's exactly how I use AI tools every day as a full-stack developer.

**My AI Stack**

- **ChatGPT** — Boilerplate generation, API documentation, regex patterns
- **Gemini** — Code review suggestions, explaining legacy code
- **Custom Prompts** — Test case generation, commit messages, PR descriptions

**The Biggest Win: Automated Testing**

The biggest productivity gain came from automating test generation. I wrote a prompt template that takes a function signature and generates test cases:

\`\`\`
Given this function signature: [function]
Generate Jest test cases covering:
- Happy path
- Edge cases
- Error handling
- Boundary conditions
\`\`\`

This saves me roughly 2 hours per sprint. But here's the catch — you still need to review every test. AI generates reasonable tests, but it misses business logic edge cases that only a human who understands the domain would catch.

**Code Review Automation**

I use Gemini to do a first pass on my own PRs before requesting team reviews. It catches:
- Unused imports
- Inconsistent naming
- Potential null pointer issues
- Missing error handling

This means my team reviews focus on architecture and logic, not formatting.

**Documentation Generation**

Writing docs is my least favorite task. Now I use AI to generate first drafts:
1. Write the code
2. Feed it to ChatGPT with "Write developer documentation for this function"
3. Edit the output for accuracy and tone

What used to take 30 minutes now takes 5.

**The Rules I Follow**

1. **Never commit AI-generated code without reviewing it.** It will look right and be subtly wrong.
2. **Use AI for first drafts, not final products.** The 80/20 rule applies — AI gets you 80% there, you finish the last 20%.
3. **Treat AI like a junior developer.** It's fast and eager, but it needs supervision.

**The Future**

I'm experimenting with building custom AI agents that integrate into our CI/CD pipeline — automatically suggesting fixes for failed tests, generating deployment notes, and even preparing rollback plans. The potential is enormous.`,
  },
  {
    id: 3,
    slug: "geo-vs-seo",
    title: "GEO vs SEO: What Every Developer Should Know in 2025",
    excerpt:
      "Search is evolving. Generative Engine Optimization is reshaping how content gets discovered. Here's what matters and what to do about it.",
    date: "Feb 2025",
    readTime: "6 min read",
    tags: ["SEO", "GEO", "Web"],
    images: ["/asset/project2.png", "/asset/project3.png"],
    content: `The way people find information is changing fundamentally. If you're a developer building websites, you need to understand the shift from SEO to GEO.

**What is SEO?**

Search Engine Optimization is about ranking in Google's blue links. You optimize for crawlers, build backlinks, target keywords, and hope to land on page one.

**What is GEO?**

Generative Engine Optimization is about being cited by AI assistants — ChatGPT, Gemini, Perplexity. Instead of competing for link positions, you're competing to be the source an AI synthesizes its answer from.

**Why This Matters**

Google's AI Overviews now appear on 30%+ of searches. ChatGPT handles billions of queries monthly. If your content isn't optimized for AI consumption, you're invisible to a growing portion of search traffic.

**The Key Differences**

| Factor | SEO | GEO |
|--------|-----|-----|
| Target | Google crawlers | LLMs |
| Success metric | Rankings | Citations |
| Content style | Keyword-stuffed | Fact-dense |
| Structure | Meta tags, headings | Structured data, clear claims |
| Authority | Backlinks | Source credibility |

**What Developers Should Do**

1. **Add structured data to everything.** Schema.org markup helps both crawlers and LLMs understand your content.

2. **Write clear, factual claims.** AI models cite sources that make unambiguous statements. "X reduces latency by 40%" is citable. "X is pretty fast" is not.

3. **Build topical authority.** Write multiple pieces on the same topic. AI models favor sources with consistent expertise.

4. **Optimize for conversational queries.** People ask AI questions like they'd ask a friend. Your content should answer those natural-language questions directly.

5. **Make your content machine-readable.** Clean HTML, proper headings, defined lists, and tables are easier for LLMs to parse than wall-of-text paragraphs.

**The Portfolio Angle**

Your portfolio website is content too. If you write case studies, project descriptions, or blog posts, structure them so AI assistants can cite your work. Use clear headings, define your contributions explicitly, and link to verifiable results.

**The Bottom Line**

SEO isn't dead — it's evolving. GEO is the next layer on top. Developers who understand both will have a significant advantage in visibility and career opportunities.`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostById(id: number): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id);
}
