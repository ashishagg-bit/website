/**
 * Share buttons on a post — Figma 2512:34351: 36px squares on a hairline
 * border and an 8px radius, the glyph in ink, 12 apart.
 */
const BTN =
  "flex size-9 items-center justify-center rounded-lg border border-[var(--hairline)] bg-white text-[var(--ink)] transition-colors hover:border-[var(--blue)] hover:text-[var(--blue)]";

export function ShareIcons({ url, title }: { url: string; title: string }) {
  return (
    <ul className="flex flex-wrap items-center gap-3">
      <li>
        <a
          className={BTN}
          aria-label="Share on Facebook"
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M13.5 22v-8.2h2.8l.4-3.3h-3.2V8.4c0-.9.3-1.6 1.6-1.6h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3v3.3h2.8V22h3.4z" />
          </svg>
        </a>
      </li>
      <li>
        <a
          className={BTN}
          aria-label="Share on X"
          href={`https://x.com/intent/tweet?url=${url}&text=${title}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M17.8 3h3.1l-6.8 7.8L22 21h-6.3l-4.9-6.4L5.2 21H2.1l7.3-8.3L1.7 3h6.4l4.4 5.9L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z" />
          </svg>
        </a>
      </li>
      <li>
        <a
          className={BTN}
          aria-label="Share on LinkedIn"
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M6.9 21H3.2V8.9h3.7V21zM5 7.3a2.2 2.2 0 1 1 0-4.3 2.2 2.2 0 0 1 0 4.3zM21 21h-3.7v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21H9.3V8.9h3.6v1.7h.1c.5-.9 1.7-1.9 3.5-1.9 3.8 0 4.5 2.5 4.5 5.7V21z" />
          </svg>
        </a>
      </li>
      <li>
        <a
          className={BTN}
          aria-label="Share by email"
          href={`mailto:?subject=${title}&body=${url}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 7l9 6 9-6" />
          </svg>
        </a>
      </li>
    </ul>
  );
}
