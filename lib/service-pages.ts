/**
 * Service detail pages, transcribed from the Figma file "Aviishaaya Dev"
 * (TdifdqKlRJcGSLC8Kpz1Sz). Every service frame shares one layout:
 *
 *   PageHero → Approach → Conditions → TileGrid → SplitBand → Testimonials
 *   → ClosingCta
 *
 * Photography points at images already scraped from the live site.
 */

export type ServicePageData = {
  slug: string;
  /** Service name — the hero eyebrow and the closing band's eyebrow. */
  name: string;
  metaTitle: string;
  metaDescription: string;
  hero: { title: string; body: string; image: string };
  approach: {
    title: string;
    paragraphs: string[];
    bullets: string[];
    highlight?: number;
  };
  conditions: string[];
  diagnostics: {
    title: string;
    tiles: { n: string; title: string; blurb: string }[];
  };
  closing: { title: string; body: string; image: string };
};

/** Lungs and Breathing — frame 81:23686. */
export const lungs: ServicePageData = {
  slug: "lungs",
  name: "Lungs and Breathing",
  metaTitle: "Lungs & Breathing",
  metaDescription:
    "Personalized pulmonary care in Beverly Hills — same-day testing, advanced diagnostics, and treatment for asthma, COPD, chronic cough, and more.",
  hero: {
    title: "Breathe easier. Live fully.",
    body: "Personalized care to help you breathe better and support your long-term respiratory health.",
    image: "/images/scraped/Ok6cd4z826F0Gks9sFfcGFjFzY.jpg",
  },
  approach: {
    title: "Comprehensive, calm, and rooted in evidence.",
    paragraphs: [
      "Maintaining healthy lung function is a crucial piece for attaining overall wellbeing and longevity, especially as respiratory health has become increasingly important in our modern world.",
      "At the Dr. Avi Ishaaya Center, we understand that breathing difficulties can significantly impact your quality of life. Our state-of-the-art center offers comprehensive diagnosis, treatment, and management of respiratory conditions using advanced technology and personalized care approaches.",
    ],
    bullets: [
      "Same-day testing availability",
      "State-of-the-art diagnostic equipment",
      "Comprehensive testing and care in one location",
      "Experienced board-certified pulmonary specialist",
      "Personalized treatment plans",
    ],
    highlight: 1,
  },
  conditions: [
    "Asthma",
    "COPD (Chronic Obstructive Pulmonary Disease)",
    "Bronchitis",
    "Pneumonia",
    "Sleep-Related Breathing Disorders",
    "Chronic Cough and Shortness of Breath",
    "Pulmonary Fibrosis",
    "Mold Exposure",
    "Bronchiectasis",
    "Interstitial Lung Disease (ILD)",
  ],
  diagnostics: {
    title: "Diagnostics and care",
    tiles: [
      {
        n: "01",
        title: "Pulmonary Function Testing (PFT)",
        blurb:
          "A complete assessment of how your lungs move air, exchange gas, and respond to challenge.",
      },
      {
        n: "02",
        title: "Methacholine Challenge Testing",
        blurb: "Beyond Basic Breathing Tests: Clear Answers for Asthma.",
      },
      {
        n: "03",
        title: "Fractional Excretion of Nitric Oxide (FeNO)",
        blurb: "Breath Analysis: Exposing Airway Inflammation.",
      },
      {
        n: "04",
        title: "X-Ray",
        blurb: "Clear Images, Quick Results: On-Site Digital X-ray.",
      },
      {
        n: "05",
        title: "Six-Minute Oxygen Walk Study",
        blurb: "Walking the Path toward Breathing Clarity.",
      },
      {
        n: "06",
        title: "PNOĒ Respiratory Assessment",
        blurb: "Your Breath, Your Blueprint: Precision Respiratory Assessment.",
      },
      {
        n: "07",
        title: "Microbiome Analysis",
        blurb: "The Hidden Key to Optimal Health.",
      },
    ],
  },
  closing: {
    title: "Schedule Your Evaluation",
    body: "Reach out to Dr. Avi Ishaaya Center to schedule a comprehensive evaluation. Early intervention can make a significant difference.",
    image: "/images/scraped/41W4msn8A5xW2nbNOonFypPQ.jpg",
  },
};

export const servicePages: Record<string, ServicePageData> = {
  lungs,
};
