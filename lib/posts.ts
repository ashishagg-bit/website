import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Post = {
  slug: string;
  title: string;
  date: string;
  rawDate: Date;
  excerpt: string;
  body: string;
  gradient: string;
  image: string;
};

const POSTS_DIR = path.join(process.cwd(), "content/blog");

const GRADIENTS = [
  "from-rose-100 via-amber-50 to-emerald-100",
  "from-sky-100 via-indigo-50 to-teal-100",
  "from-emerald-100 via-lime-50 to-amber-100",
  "from-violet-100 via-rose-50 to-amber-100",
  "from-amber-100 via-orange-50 to-rose-100",
  "from-teal-100 via-sky-50 to-indigo-100",
  "from-yellow-100 via-amber-50 to-orange-100",
  "from-cyan-100 via-emerald-50 to-teal-100",
];

// Exact image mapping from the live Framer site (slug → image)
const SLUG_IMAGE_MAP: Record<string, string> = {
  "the-healing-power-of-love-more-than-just-a-warm-fuzzy-feeling": "/images/scraped/IppKL0cvGoYnkzaVfgS112yoo.jpg",
  "micronutrients-the-essential-building-blocks-of-optimal-health": "/images/scraped/tPS1IoVSxxS52DtZ4UKoc5HbWk8.jpg",
  "the-vital-connection-how-sleep-impacts-your-heart-and-metabolism": "/images/scraped/24gjnpcrXVmldIyVSCnUuDXc.jpg",
  "what-can-an-ekg-tell-you-about-blood-pressure": "/images/scraped/Pqq2TKWlgMDe9nT6krgeFQ6euj0.jpg",
  "the-importance-of-regular-annual-physicals-for-preventive-health": "/images/scraped/Rf04pBe6rnVQfH4IqhWEgHbAP4.webp",
  "learn-the-difference-between-acute-vs-chronic-asthma": "/images/scraped/qpI5vBIDT7Q6ptU0HElINibug.webp",
  "what-happens-if-you-cannot-sleep-during-a-sleep-study": "/images/scraped/SuB9MMJE894OJarlMRKNfVP0.webp",
  "eight-tips-to-help-maintain-telomere-length": "/images/scraped/O5Yo4TB5KdO02Lqh2k4DgSSq0.webp",
};

const IMAGES_FALLBACK = [
  "/images/scraped/0HUPsipnJwiW8Wacf4kCltNs96o.jpg",
  "/images/scraped/1VMNJeKjBpsJmP9YWwhXyzKSvA.jpg",
  "/images/scraped/1xImPKfaVIwVWRaj2OXuBmLUT2E.jpg",
  "/images/scraped/2mlNIbjadwhQWpJGw7OmBIMeTBQ.jpg",
  "/images/scraped/41W4msn8A5xW2nbNOonFypPQ.jpg",
  "/images/scraped/48cUzxZLj1fsBF3sPX6ycI0y0jc.jpg",
  "/images/scraped/4FVQUutQWdB7NtLwRY17tioTIY0.jpg",
  "/images/scraped/4OSBaHObMlbjYP7NUCUgbVAQ.jpg",
];

function fmtDate(d: Date) {
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

let cache: Post[] | null = null;

export function getAllPosts(): Post[] {
  if (cache) return cache;
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));
  const posts = files.map((file, i): Post => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    const rawDate = new Date(data.date as string);
    return {
      slug,
      title: data.title as string,
      date: fmtDate(rawDate),
      rawDate,
      excerpt: data.excerpt as string,
      body: content,
      gradient: GRADIENTS[i % GRADIENTS.length],
      image: SLUG_IMAGE_MAP[slug] || IMAGES_FALLBACK[i % IMAGES_FALLBACK.length],
    };
  });
  posts.sort((a, b) => b.rawDate.getTime() - a.rawDate.getTime());
  cache = posts;
  return posts;
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

// Tiny markdown renderer (subset). Supports headings, paragraphs, ul/ol, **bold**,
// *italic*, blockquotes, and links.
export function renderMarkdown(md: string): string {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const out: string[] = [];
  let i = 0;

  const inline = (s: string) =>
    s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<em>$2</em>")
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i++;
      continue;
    }
    if (line.startsWith("### ")) {
      out.push(`<h3>${inline(line.slice(4))}</h3>`);
      i++;
      continue;
    }
    if (line.startsWith("## ")) {
      out.push(`<h2>${inline(line.slice(3))}</h2>`);
      i++;
      continue;
    }
    if (line.startsWith("# ")) {
      out.push(`<h2>${inline(line.slice(2))}</h2>`);
      i++;
      continue;
    }
    if (line.startsWith("> ")) {
      const buf: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        buf.push(lines[i].slice(2));
        i++;
      }
      out.push(`<blockquote>${inline(buf.join(" "))}</blockquote>`);
      continue;
    }
    if (/^[-*] /.test(line)) {
      const buf: string[] = [];
      while (i < lines.length && /^[-*] /.test(lines[i])) {
        buf.push(`<li>${inline(lines[i].replace(/^[-*] /, ""))}</li>`);
        i++;
      }
      out.push(`<ul>${buf.join("")}</ul>`);
      continue;
    }
    if (/^\d+\. /.test(line)) {
      const buf: string[] = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        buf.push(`<li>${inline(lines[i].replace(/^\d+\. /, ""))}</li>`);
        i++;
      }
      out.push(`<ol>${buf.join("")}</ol>`);
      continue;
    }
    // Paragraph (gather consecutive non-empty lines)
    const buf: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^(#|>|[-*] |\d+\. )/.test(lines[i])
    ) {
      buf.push(lines[i]);
      i++;
    }
    out.push(`<p>${inline(buf.join(" "))}</p>`);
  }
  return out.join("\n");
}
