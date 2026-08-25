/**
 * The six states of the "why us" component set (Figma 43:3938).
 *
 * Each variant carries its own copy, and the puzzle artwork behind it gains
 * pieces as the sequence advances — the section is an argument that resolves
 * into a picture, which is why the last state is the only one that reveals the
 * photograph and the only one that carries a call to action.
 *
 * Variant 5 has no text in the frame: it is the beat between the final claim
 * and the reveal, so it is held briefly and shows artwork alone.
 */
export type WhyUsState = {
  /** Figma node id for the variant this frame was exported from. */
  node: string;
  image: string;
  eyebrow?: string;
  /** Line breaks follow the frame's own wrapping. */
  title?: string[];
  body?: string;
  cta?: { href: string; label: string };
};

export const whyUsStates: WhyUsState[] = [
  {
    node: "43:3937",
    image: "/images/figma/whyus/whyus-1.jpg",
    eyebrow: "CARE, WITHOUT COMPROMISE",
    title: ["Because everyone", "deserves to feel like a VIP."],
    body: "We don't believe great healthcare should depend on who you are, how much you pay, or how busy the practice is.",
  },
  {
    node: "43:3935",
    image: "/images/figma/whyus/whyus-2.jpg",
    eyebrow: "WHY AVIISHAAYA",
    title: ["Personalized care,", "for everyone."],
    body: "From direct access to your care team to thoughtful follow-ups, every patient gets the same level of attention.",
  },
  {
    node: "52:4331",
    image: "/images/figma/whyus/whyus-3.jpg",
    eyebrow: "WHY AVIISHAAYA",
    title: ["Same-day care,", "whenever possible."],
    body: "Text us when you need us. Get an appointment when you need one. And know that someone is paying attention.",
  },
  {
    node: "52:4591",
    image: "/images/figma/whyus/whyus-4.jpg",
    eyebrow: "WHY AVIISHAAYA",
    title: ["Most insurances", "accepted."],
    body: "Because exceptional healthcare should be accessible to as many people as possible.",
  },
  {
    node: "43:3934",
    image: "/images/figma/whyus/whyus-5.jpg",
  },
  {
    node: "43:3936",
    image: "/images/figma/whyus/whyus-6.jpg",
    eyebrow: "OUR PROMISE",
    title: ["Every piece of your care,", "thoughtfully considered."],
    body: "Because your health deserves the whole picture.",
    cta: { href: "/contact", label: "Schedule a Consultation" },
  },
];

/** Milliseconds each state holds before the next begins to cross-fade in. */
export const STATE_MS = 2600;
/** The wordless beat before the reveal is shorter than a state with copy. */
export const BEAT_MS = 1400;
