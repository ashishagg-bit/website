/**
 * The six states of the "why us" component set (Figma 2256:26220).
 *
 * Each variant carries its own copy, and the two puzzle halves behind it close
 * on the centre as the sequence advances — the section is an argument resolving
 * into a picture, which is why the last state is the only one that reveals the
 * photograph and the only one that carries a call to action.
 *
 * Variant 5 has no text in the frame: it is the beat between the final claim
 * and the reveal, so it is held briefly and shows artwork alone.
 */
export type WhyUsState = {
  /** Figma node id for the variant this state was transcribed from. */
  node: string;
  eyebrow?: string;
  /** Line breaks follow the frame's own wrapping. */
  title?: string[];
  body?: string;
  cta?: { href: string; label: string };
};

export const whyUsStates: WhyUsState[] = [
  {
    node: "2256:26221",
    eyebrow: "CARE, WITHOUT COMPROMISE",
    title: ["Because everyone", "deserves to feel like a VIP."],
    body: "We don't believe great healthcare should depend on who you are, how much you pay, or how busy the practice is.",
  },
  {
    node: "2256:26481",
    eyebrow: "WHY AVIISHAAYA",
    title: ["Personalized care,", "for everyone."],
    body: "From direct access to your care team to thoughtful follow-ups, every patient gets the same level of attention.",
  },
  {
    node: "2256:26741",
    eyebrow: "WHY AVIISHAAYA",
    title: ["Same-day care,", "whenever possible."],
    body: "Text us when you need us. Get an appointment when you need one. And know that someone is paying attention.",
  },
  {
    node: "2256:27001",
    eyebrow: "WHY AVIISHAAYA",
    title: ["Most insurances", "accepted."],
    body: "Because exceptional healthcare should be accessible to as many people as possible.",
  },
  {
    node: "2256:27261",
  },
  {
    node: "2256:27521",
    eyebrow: "OUR PROMISE",
    title: ["Every piece of your care,", "thoughtfully considered."],
    body: "Because your health deserves the whole picture.",
    cta: { href: "/contact", label: "Schedule a Consultation" },
  },
];

