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

const IMAGES = [
  "/images/scraped/0HUPsipnJwiW8Wacf4kCltNs96o.jpg",
  "/images/scraped/1VMNJeKjBpsJmP9YWwhXyzKSvA.jpg",
  "/images/scraped/1xImPKfaVIwVWRaj2OXuBmLUT2E.jpg",
  "/images/scraped/2mlNIbjadwhQWpJGw7OmBIMeTBQ.jpg",
  "/images/scraped/41W4msn8A5xW2nbNOonFypPQ.jpg",
  "/images/scraped/48cUzxZLj1fsBF3sPX6ycI0y0jc.jpg",
  "/images/scraped/4FVQUutQWdB7NtLwRY17tioTIY0.jpg",
  "/images/scraped/4OSBaHObMlbjYP7NUCUgbVAQ.jpg",
  "/images/scraped/793ONR8hKKyrrxWSaatYJDLTY.jpg",
  "/images/scraped/9aYbh8GFanv0iSwq9TzyjtrXI.jpg",
  "/images/scraped/AC2cC1c4vV9tRfYLtq2lf4Xc.jpg",
  "/images/scraped/AW9fDereVg3UqlpvRjrLYPxriaQ.jpg",
  "/images/scraped/CFF1DUFdivK5TpaCrBZ7K0tvS8Y.jpg",
  "/images/scraped/EUHKdtt4LEj5EAli0JMrqZJAwgo.jpg",
  "/images/scraped/JVZl3xuus4kdE4dkIWKAgT4iaRw.jpg",
  "/images/scraped/NNYb6EQUA1mNgpJztWHgD74Qa5Q.jpg",
  "/images/scraped/NsX0K6LWw0DzYH5UMBEqleRtJs.jpg",
  "/images/scraped/O2iHhRT8vmitOPuaycFWlsis.jpg",
  "/images/scraped/efoh9O2ooJNsKsSWH5IqobEyBw.jpg",
  "/images/scraped/ffT3BOcYoxhizWCVE2QIrQ4EpIA.jpg",
  "/images/scraped/l3Z56b8C3m7noD9iY9kR1sPGXoA.jpg",
  "/images/scraped/nGkU8nBZfE7cc5Q21x8OtSmMV9A.jpg",
  "/images/scraped/nhJJNYrCrH8gQRcPktO9uTIiSO8.jpg",
  "/images/scraped/oPX6yLhJwtA59zKfImuewbNCGE.jpg",
  "/images/scraped/oz3Pwa5yGzcFxboF19d8KrIw.jpg",
  "/images/scraped/qkCKTBlHXakXTN4bu7Qoe3xgc.jpg",
  "/images/scraped/vJcCoQOaSPFFb1mZKUNODZviiw.jpg",
  "/images/scraped/vz9gFU9ucii7BiCwOGtkPagjpE.jpg",
  "/images/scraped/x0UIr7XcCuSrIE9C2w85F3AnccI.jpg",
  "/images/scraped/xdxxmdJJ4ctXIDICB936iWQs0k.jpg",
  "/images/scraped/yNpo2KbfILa6GHNo6fYNQThQ.jpg",
  "/images/scraped/yTu1hAtGOIU7W1I4AhgsYjgmNcQ.jpg",
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
      image: IMAGES[i % IMAGES.length],
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
