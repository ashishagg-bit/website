/**
 * Homepage copy transcribed from the Figma file "Aviishaaya Dev"
 * (TdifdqKlRJcGSLC8Kpz1Sz), frame Homepage — node 1:84.
 *
 * Photography points at the images already scraped from the live site; the
 * Figma-native art (puzzle illustration, noise texture, press logos) is not
 * downloadable from this environment, so those are rendered as CSS/SVG.
 */

/** "our method" — node 1:674 */
export const methodItems = [
  {
    title: "Piecing Together Your Health",
    body: "We understand that optimal health emerges when each aspect of your wellbeing is functioning at its best - like pieces of a puzzle coming together to create a complete picture of health.",
    image: "/images/figma/method-1.jpg",
  },
  {
    title: "Dimensions of Wholeness",
    body: "As spiritual beings in a physical world, true wellness thrives when we nurture every aspect of our existence — body, mind, and spirit. Each element is vital to your unique wellness journey.",
    image: "/images/figma/method-2.jpg",
  },
  {
    title: "Your Unique Health Puzzle",
    body: "Your health journey is uniquely yours. We develop personalized care plans that cater to your specific needs, as standardized methods can't address the complexity of individual wellness.",
    image: "/images/figma/method-3.jpg",
  },
  {
    title: "Partnership in Transformation",
    body: "At Dr. Avi Ishaaya Centers, we support you on your journey to lasting health transformation, offering the expertise and guidance needed to connect all pieces of your wellness puzzle.",
    image: "/images/figma/method-4.jpg",
  },
];

/** "Our services" bento — node 1:964. `image` set = photo tile, else text tile. */
export const serviceTiles = [
  {
    n: "01",
    title: "Lungs and Breathing",
    blurb: "Your lungs are essential to delivering vital oxygen to every cell in your body.",
    href: "/service/lungs",
    image: "/images/scraped/Ok6cd4z826F0Gks9sFfcGFjFzY.jpg",
  },
  {
    n: "02",
    title: "Cardiovascular",
    blurb: "Your cardiovascular health is fundamental to your overall wellbeing.",
    href: "/service/cardiovascular",
    image: "/images/scraped/cy54QKfQ0BjEhBzh7ZCniujdDU.png",
  },
  {
    n: "03",
    title: "Wellness and Preventive Medicine",
    blurb:
      "Wellness and prevention are where each piece connects to form the complete picture of how you can attain your optimal wellbeing.",
    href: "/service/wellness-preventive-medicine",
    image: "/images/figma/services-03.jpg",
  },
  {
    n: "04",
    title: "Allergy and Sensitivity",
    blurb: "Identifying allergens helps eliminate triggers for allergy symptoms.",
    href: "/service/allergy-sensitivity",
    image: "/images/scraped/mRvoVlTLqZI08Kd9gqKbgHptpQ.png",
  },
  {
    n: "05",
    title: "Sleep",
    blurb: "Good sleep is vital for well-being. It helps your brain process information.",
    href: "/service/sleep",
    image: "/images/scraped/lUTBzERr53jnyvWA0CLFiJn62c.png",
  },
  {
    n: "06",
    title: "Thermography",
    blurb: "Thermography is essential for wellness and prevention for optimal health.",
    href: "/services",
    image: "/images/scraped/4FVQUutQWdB7NtLwRY17tioTIY0.jpg",
  },
  {
    n: "07",
    title: "Oligoscan",
    blurb: "OligoScan helps identify allergens, allowing you to avoid allergy triggers.",
    href: "/services",
    image: "/images/scraped/VfRH12CL491NDPBxF2q2K2kyP1w.jpg",
  },
];

/** Full-width closing tile of the services bento. */
export const vipTile = {
  n: "08",
  title: "VIP Health Plans",
  blurb:
    "Explore four wellness packages tailored to your goals — from basic health screenings to advanced diagnostics.",
  href: "/vip",
};

/** Closing tile of the "All services" bento — node 74:22082, Service 08. */
export const healingDawnTile = {
  n: "08",
  title: "The Healing Dawn",
  blurb:
    "Explore four wellness packages tailored to your goals — from basic health screenings to advanced diagnostics.",
  href: "/vip",
};

/** The services page shortens the Wellness blurb (node 74:22082). */
export const servicesPageTiles = serviceTiles.map((t) =>
  t.n === "03"
    ? {
        ...t,
        blurb: "Wellness and prevention connect to form the picture of your wellbeing.",
      }
    : t
);

/** "Our values" — node 1:1498. The first promise is the wide blue card. */
export const homePromises = [
  {
    n: "01",
    title: ["We Respect", "Your Time"],
    body: "No long waits—you'll be seen within 10 minutes of arrival. Need flexibility? We offer telemedicine consultations and direct SMS access to Dr. Ishaaya's team.",
  },
  {
    n: "02",
    title: ["We", "Keep You Informed"],
    body: "Clear, honest communication matters. We break down your diagnosis and treatment options, encourage open dialogue, and ensure all your questions are answered.",
  },
  {
    n: "03",
    title: ["We Make Healthcare Easy"],
    body: "Get comprehensive evaluations and testing in one place. Our cutting-edge technology means fewer appointments, faster results, and no unnecessary hassle.",
  },
  {
    n: "04",
    title: ["We Treat You with Dignity"],
    body: "Compassion isn't optional—it's who we are. Every patient is met with respect, care, and a commitment to their well-being.",
  },
  {
    n: "05",
    title: ["We Treat the Root Cause"],
    body: "Your health isn't just about symptoms. We blend conventional, functional, and alternative medicine to uncover and treat the real issues.",
  },
];

/** "Meet your physician" — node 1:1776 */
export const physician = {
  eyebrow: "Meet your physician",
  title: "Meet Dr. Abraham “Avi” Ishaaya",
  blurb:
    "Dr. Ishaaya is a distinguished board-certified physician specializing in pulmonary, sleep, internal, and geriatric medicine.",
  image: "/images/scraped/piPOUcGww89HYaJTpCR7kEFYeLk.webp",
  points: [
    {
      title: "Our Expertise",
      body: "Dr. Ishaaya uses cutting-edge diagnostics and innovative treatments to provide personalized, data-driven solutions for long-term wellness. His expertise spans pulmonary, cardiovascular, allergy, and sleep medicine—ensuring precise, science-backed care.",
    },
    // 2256:2864 carries a heading for these two and no body text at all —
    // not hidden, simply absent — so the rows revealed nothing on hover and
    // read as unfinished. This copy is drafted, not transcribed: it is built
    // from the practice's own words on the About page ("His approach to
    // medicine is holistic and rooted in understanding the whole patient…")
    // so it makes no claim the site does not already make. Replace it with
    // the client's wording when they have it.
    {
      title: "Our Approach",
      body: "Holistic, and rooted in understanding the whole patient. By bringing conventional and functional medicine together, Dr. Ishaaya looks beyond treating symptoms alone to identify and address the underlying factors affecting your health.",
    },
    {
      title: "Your Wellness",
      body: "Care built around you — advanced diagnostics, answers explained in plain terms, and a plan you help shape. Every piece of the puzzle is considered, from cardiovascular and respiratory health to sleep, allergy, and preventive medicine.",
    },
  ] as { title: string; body?: string }[],
};

/** "What our patients say" — node 1:2040 */
export const testimonials = [
  {
    quote:
      "Dr. Ishaaya is the most thorough, attentive physician I've ever seen. He takes the time to listen and explain — I finally feel heard. The office is beautiful and the staff treat you like family.",
    name: "Sandra M.",
    avatar: "/images/scraped/1VMNJeKjBpsJmP9YWwhXyzKSvA.jpg",
    when: "2 months ago",
  },
  {
    quote:
      "From the sleep study to follow-up care, every step was handled with care and clear communication. The team here is top-tier.",
    name: "David A.",
    avatar: "/images/scraped/V2qDs1D0pO2ja4K49KWNNzfDHe0.png",
    when: "5 months ago",
  },
  {
    quote:
      "A truly personalized approach to wellness. Dr. Ishaaya caught something three other doctors missed. Forever grateful.",
    name: "Rachel T.",
    avatar: "/images/scraped/NNYb6EQUA1mNgpJztWHgD74Qa5Q.jpg",
    when: "1 month ago",
    image: "/images/figma/reviews-photo.jpg",
  },
  {
    quote:
      "Concierge-level service with real medicine behind it. Dr. Ishaaya is exceptionally knowledgeable and genuinely kind.",
    name: "Priya R.",
    avatar: "/images/scraped/Rf04pBe6rnVQfH4IqhWEgHbAP4.webp",
    when: "4 months ago",
  },
  {
    quote:
      "Best pulmonologist in Los Angeles, hands down. Helped me manage a long-standing breathing issue with real answers rather than quick fixes. Highly recommend the VIP program.",
    name: "Jonathan K.",
    avatar: "/images/scraped/O5Yo4TB5KdO02Lqh2k4DgSSq0.webp",
    when: "3 months ago",
  },
  {
    quote:
      "The Platinum VIP plan is worth every penny. Rapid appointments, advanced diagnostics, and a doctor who treats you as a whole person.",
    name: "Mark E.",
    avatar: "/images/scraped/piPOUcGww89HYaJTpCR7kEFYeLk.webp",
    when: "6 months ago",
  },
];

/** "OUr space" — node 1:2676 */
export const space = {
  eyebrow: "OUr space",
  title: "A New Era of Care",
  body: "Relocated in 2024 after 30+ years as an independent practice, our spacious, calming, and beautifully designed space redefines the medical experience—where comfort meets cutting-edge care.",
  /** Reception desk behind the copy — the frame's header-static image. */
  backdrop: "/images/scraped/4FVQUutQWdB7NtLwRY17tioTIY0.jpg",
  /** Waiting area · hallway · treatment room. The middle one runs wider. */
  images: [
    "/images/scraped/41W4msn8A5xW2nbNOonFypPQ.jpg",
    "/images/scraped/vJcCoQOaSPFFb1mZKUNODZviiw.jpg",
    "/images/scraped/48cUzxZLj1fsBF3sPX6ycI0y0jc.jpg",
  ],
};

/**
 * Press row under the hero — Figma I64:10192;64:10509. These are the real
 * logo vectors, exported from the file itself.
 */
export const featuredIn = [
  { name: "WWD", src: "/images/figma/press/wwd.svg", w: 61, h: 18 },
  { name: "Healthline", src: "/images/figma/press/healthline.svg", w: 108, h: 16 },
  { name: "Forbes", src: "/images/figma/press/forbes.svg", w: 81, h: 21 },
  { name: "The Wall Street Journal", src: "/images/figma/press/wsj.svg", w: 149, h: 14 },
  { name: "Esquire", src: "/images/figma/press/esquire.svg", w: 95, h: 14 },
];
