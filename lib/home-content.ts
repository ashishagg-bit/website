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
    image: "/images/scraped/piPOUcGww89HYaJTpCR7kEFYeLk.webp",
  },
  {
    title: "Dimensions of Wholeness",
    body: "As spiritual beings in a physical world, true wellness thrives when we nurture every aspect of our existence — body, mind, and spirit. Each element is vital to your unique wellness journey.",
    image: "/images/scraped/4FVQUutQWdB7NtLwRY17tioTIY0.jpg",
  },
  {
    title: "Your Unique Health Puzzle",
    body: "Your health journey is uniquely yours. We develop personalized care plans that cater to your specific needs, as standardized methods can't address the complexity of individual wellness.",
    image: "/images/scraped/vJcCoQOaSPFFb1mZKUNODZviiw.jpg",
  },
  {
    title: "Partnership in Transformation",
    body: "At Dr. Avi Ishaaya Centers, we support you on your journey to lasting health transformation, offering the expertise and guidance needed to connect all pieces of your wellness puzzle.",
    image: "/images/scraped/VfRH12CL491NDPBxF2q2K2kyP1w.jpg",
  },
];

/** "Our services" bento — node 1:964. `image` set = photo tile, else text tile. */
export const serviceTiles = [
  {
    n: "01",
    title: "Lungs and Breathing",
    blurb: "Your lungs are essential to delivering vital oxygen to every cell in your body.",
    href: "/service/lungs",
  },
  {
    n: "02",
    title: "Cardiovascular",
    blurb: "Your cardiovascular health is fundamental to your overall wellbeing.",
    href: "/service/cardiovascular",
  },
  {
    n: "03",
    title: "Wellness and Preventive Medicine",
    blurb:
      "Wellness and prevention are where each piece connects to form the complete picture of how you can attain your optimal wellbeing.",
    href: "/service/wellness-preventive-medicine",
    image: "/images/scraped/z40GSxCTx1p8Yl8dajpSuGt52I.jpeg",
  },
  {
    n: "04",
    title: "Allergy and Sensitivity",
    blurb: "Identifying allergens helps eliminate triggers for allergy symptoms.",
    href: "/service/allergy-sensitivity",
  },
  {
    n: "05",
    title: "Sleep",
    blurb: "Good sleep is vital for well-being. It helps your brain process information.",
    href: "/service/sleep",
  },
  {
    n: "06",
    title: "Thermography",
    blurb: "Thermography is essential for wellness and prevention for optimal health.",
    href: "/services",
  },
  {
    n: "07",
    title: "Oligoscan",
    blurb: "OligoScan helps identify allergens, allowing you to avoid allergy triggers.",
    href: "/services",
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

/** "Our values" — node 1:1498. The first promise is the wide blue card. */
export const homePromises = [
  {
    n: "01",
    title: ["We Respect", "Your Time"],
    body: "No long waits—you'll be seen within 10 minutes of arrival. Need flexibility? We offer telemedicine consultations and direct SMS access to Dr. Ishaaya's team.",
  },
  { n: "02", title: ["We", "Keep You Informed"] },
  { n: "03", title: ["We Make Healthcare Easy"] },
  { n: "04", title: ["We Treat You with Dignity"] },
  { n: "05", title: ["We Treat the Root Cause"] },
];

/** "Meet your physician" — node 1:1776 */
export const physician = {
  eyebrow: "Meet your physician",
  title: "Meet Dr. Abraham “Avi” Ishaaya",
  blurb:
    "Dr. Ishaaya is a distinguished board-certified physician specializing in pulmonary, sleep, internal, and geriatric medicine.",
  image: "/images/scraped/H7UrHayerIUtTsCZGEBgPaXM.png",
  points: [
    {
      title: "Our Expertise",
      body: "Dr. Ishaaya uses cutting-edge diagnostics and innovative treatments to provide personalized, data-driven solutions for long-term wellness. His expertise spans pulmonary, cardiovascular, allergy, and sleep medicine—ensuring precise, science-backed care.",
    },
    // The design shows these two as headings only — no body copy in Figma.
    { title: "Our Approach" },
    { title: "Your Wellness" },
  ] as { title: string; body?: string }[],
};

/** "What our patients say" — node 1:2040 */
export const testimonials = [
  {
    quote:
      "Dr. Ishaaya is the most thorough, attentive physician I've ever seen. He takes the time to listen and explain — I finally feel heard. The office is beautiful and the staff treat you like family.",
    name: "Sandra M.",
    when: "2 months ago",
  },
  {
    quote:
      "From the sleep study to follow-up care, every step was handled with care and clear communication. The team here is top-tier.",
    name: "David A.",
    when: "5 months ago",
  },
  {
    quote:
      "A truly personalized approach to wellness. Dr. Ishaaya caught something three other doctors missed. Forever grateful.",
    name: "Rachel T.",
    when: "1 month ago",
    image: "/images/scraped/2mlNIbjadwhQWpJGw7OmBIMeTBQ.jpg",
  },
  {
    quote:
      "Concierge-level service with real medicine behind it. Dr. Ishaaya is exceptionally knowledgeable and genuinely kind.",
    name: "Priya R.",
    when: "4 months ago",
  },
  {
    quote:
      "Best pulmonologist in Los Angeles, hands down. Helped me manage a long-standing breathing issue with real answers rather than quick fixes. Highly recommend the VIP program.",
    name: "Jonathan K.",
    when: "3 months ago",
  },
  {
    quote:
      "The Platinum VIP plan is worth every penny. Rapid appointments, advanced diagnostics, and a doctor who treats you as a whole person.",
    name: "Mark E.",
    when: "6 months ago",
  },
];

/** "OUr space" — node 1:2676 */
export const space = {
  eyebrow: "OUr space",
  title: "A New Era of Care",
  body: "Relocated in 2024 after 30+ years as an independent practice, our spacious, calming, and beautifully designed space redefines the medical experience—where comfort meets cutting-edge care.",
  images: [
    "/images/scraped/Ok6cd4z826F0Gks9sFfcGFjFzY.jpg",
    "/images/scraped/48cUzxZLj1fsBF3sPX6ycI0y0jc.jpg",
    "/images/scraped/41W4msn8A5xW2nbNOonFypPQ.jpg",
  ],
};

/** Press row under the hero — node I64:10192;64:10509. */
export const featuredIn = [
  "CBS News",
  "Los Angeles Times",
  "NBC",
  "The Wall Street Journal",
  "ABC",
];
