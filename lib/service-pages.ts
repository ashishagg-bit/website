import type { Condition } from "@/components/service/sections";

/**
 * Service detail pages, transcribed from the Figma file "Aviishaaya Dev"
 * (TdifdqKlRJcGSLC8Kpz1Sz). Every service frame shares one layout:
 *
 *   PageHero → Approach → Conditions → TileGrid → SplitBand → Testimonials
 *   → ClosingCta
 *
 * Frames: Lungs 81:23686 · Cardiovascular 103:29892 · Sleep 2109:886 ·
 * Allergy 2031:3776 · Wellness 2031:6398.
 *
 * NOTE: every frame's closing band reads "Lungs and Breathing" as its eyebrow
 * — a copy-paste slip in the design. Each page uses its own service name here;
 * flagged for the designer rather than reproduced.
 *
 * Photography points at images already scraped from the live site; the Figma
 * artwork is not exportable from this environment.
 */

export type ServicePageData = {
  slug: string;
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
  conditions: Condition[];
  diagnostics: {
    title: string;
    tiles: { n: string; title: string; blurb: string }[];
  };
  closing: { title: string; body: string; image: string };
};

/**
 * Closing-band photography.
 *
 * Every service used the same photograph here, which is the defect this set
 * exists to clear: five pages arguing for five different specialities behind
 * one identical picture. These are the closest fit available in the scraped
 * library, chosen per speciality and all distinct.
 *
 * They are NOT the Figma photographs. The frames specify their own images
 * (2256:12811 and its siblings, one per page) and those files are not in the
 * repository — this session cannot reach figma.com, so they have to arrive by
 * hand. Replace these the moment they do; that is a one-line edit each.
 */
const APPROACH_TITLE = "Comprehensive, calm, and rooted in evidence.";
const CLOSING = {
  title: "Schedule Your Evaluation",
  body: "Reach out to Dr. Avi Ishaaya Center to schedule a comprehensive evaluation. Early intervention can make a significant difference.",
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
    title: APPROACH_TITLE,
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
    { name: "Asthma" },
    { name: "COPD (Chronic Obstructive Pulmonary Disease)" },
    { name: "Bronchitis" },
    { name: "Pneumonia" },
    { name: "Sleep-Related Breathing Disorders" },
    { name: "Chronic Cough and Shortness of Breath" },
    { name: "Pulmonary Fibrosis" },
    { name: "Mold Exposure" },
    { name: "Bronchiectasis" },
    { name: "Interstitial Lung Disease (ILD)" },
  ],
  diagnostics: {
    title: "Diagnostics and care",
    tiles: [
      {
        n: "01",
        title: "Pulmonary Function Testing (PFT)",
        blurb: "A complete assessment of how your lungs move air, exchange gas, and respond to challenge.",
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
  closing: { ...CLOSING, image: "/images/scraped/1xImPKfaVIwVWRaj2OXuBmLUT2E.jpg" },
};

/** Cardiovascular — frame 103:29892. */
export const cardiovascular: ServicePageData = {
  slug: "cardiovascular",
  name: "Cardiovascular",
  metaTitle: "Cardiovascular",
  metaDescription:
    "Comprehensive cardiac diagnostics and personalized cardiovascular care in Beverly Hills — EKG, echocardiogram, stress testing and Holter monitoring.",
  hero: {
    title: "A healthier heart starts here.",
    body: "Comprehensive care focused on understanding your heart and supporting your long-term health.",
    image: "/images/scraped/IppKL0cvGoYnkzaVfgS112yoo.jpg",
  },
  approach: {
    title: APPROACH_TITLE,
    paragraphs: [
      "Comprehensive cardiovascular care starts with knowing exactly where you stand. At the Dr. Avi Ishaaya Center, we offer advanced cardiac diagnostic testing in a comfortable, convenient setting. Our comprehensive assessments help identify potential heart issues early, monitor existing conditions, and guide preventive strategies.",
      "Many cardiovascular conditions can be managed effectively when caught early. We recommend regular check-ups and prompt evaluation of concerning symptoms — risk factors can often be modified through lifestyle changes and appropriate medical management.",
    ],
    bullets: [
      "All tests performed in one convenient location",
      "Same-day testing often available",
      "State-of-the-art diagnostic equipment",
      "Experienced cardiac technicians",
      "Immediate results for most tests",
      "Comprehensive interpretation and explanation of results",
      "Personalized treatment plans based on findings",
    ],
    highlight: 1,
  },
  conditions: [
          {
            name: "Coronary Artery Disease",
            details: [
              { label: "Symptoms", value: "Chest pain (angina), shortness of breath, fatigue" },
              { label: "Risk", value: "High blood pressure, cholesterol, smoking, diabetes" },
              { label: "Testing", value: "Stress tests, cardiac imaging, blood tests" },
            ],
          },
          {
            // Node 103:30987 — the card the frame captures open.
            name: "Congestive Heart Failure",
            open: true,
            details: [
              { label: "Symptoms", value: "Shortness of breath, fatigue, swelling in legs/ankles" },
              { label: "Risk", value: "Previous heart attack, hypertension, diabetes" },
              { label: "Testing", value: "Echocardiogram, chest X-ray, blood tests" },
            ],
          },
          {
            name: "Arrhythmias",
            details: [
              { label: "Symptoms", value: "Palpitations, dizziness, fainting" },
              { label: "Risk", value: "Age, heart disease, thyroid problems" },
              { label: "Testing", value: "EKG, Holter monitoring, event monitors" },
            ],
          },
          {
            name: "Cardiomyopathy",
            details: [
              { label: "Symptoms", value: "Breathlessness, fatigue, swelling" },
              { label: "Risk", value: "Family history, certain medical conditions" },
              { label: "Testing", value: "Echocardiogram, genetic testing, cardiac MRI" },
            ],
          },
          {
            name: "Valvular Heart Disease",
            details: [
              { label: "Symptoms", value: "Shortness of breath, fatigue, chest pain" },
              { label: "Risk", value: "Age, prior heart conditions, infections" },
              { label: "Testing", value: "Echocardiogram, cardiac catheterization" },
            ],
          },
          {
            name: "Hypertension",
            details: [
              { label: "Symptoms", value: "Often none — the 'silent killer'" },
              { label: "Risk", value: "Age, family history, lifestyle factors" },
              { label: "Testing", value: "Regular blood pressure measurements" },
            ],
          },
          {
            name: "Peripheral Artery Disease",
            details: [
              { label: "Symptoms", value: "Leg pain when walking, slow-healing wounds" },
              { label: "Risk", value: "Smoking, diabetes, high blood pressure" },
              { label: "Testing", value: "Ankle-brachial index, ultrasound studies" },
            ],
          },
          {
            name: "Deep Venous Thrombosis",
            details: [
              { label: "Symptoms", value: "Leg pain/swelling, warmth, redness" },
              { label: "Risk", value: "Immobility, surgery, certain medical conditions" },
              { label: "Testing", value: "Ultrasound, blood tests" },
            ],
          },
          {
            name: "Carotid Artery Disease",
            details: [
              { label: "Symptoms", value: "Often none until severe" },
              { label: "Risk", value: "Age, smoking, high blood pressure" },
              { label: "Testing", value: "Ultrasound, specialized imaging" },
            ],
          },
        ],
  diagnostics: {
    title: "Diagnostics and care",
    tiles: [
      {
        n: "01",
        title: "Electrocardiogram (EKG) Testing",
        blurb: "Every Heartbeat Tells a Story.",
      },
      {
        n: "02",
        title: "Echocardiogram (ECHO)",
        blurb: "Watch Your Heart\u2019s Symphony in Action.",
      },
      {
        n: "03",
        title: "Stress Echocardiogram",
        blurb: "Advanced Cardiac Imaging Under Exercise.",
      },
      {
        n: "04",
        title: "Six-Minute Oxygen Walk Study",
        blurb: "Walking the Path toward Breathing Clarity.",
      },
      {
        n: "05",
        title: "PNOĒ for Cardiovascular Health",
        blurb: "Every Breath Reveals Your Heart\u2019s Health.",
      },
      {
        n: "06",
        title: "Advanced Diagnostic Ultrasound",
        blurb: "Non-Invasive Imaging for Comprehensive Health Assessment.",
      },
      {
        n: "07",
        title: "At-Home Holter Monitor Testing",
        blurb: "Tracking Every Beat of Your Daily Life.",
      },
    ],
  },
  closing: { ...CLOSING, image: "/images/scraped/AC2cC1c4vV9tRfYLtq2lf4Xc.jpg" },
};

/** Sleep — frame 2109:886. */
export const sleep: ServicePageData = {
  slug: "sleep",
  name: "Sleep",
  metaTitle: "Sleep",
  metaDescription:
    "Board-certified sleep medicine in Beverly Hills — in-lab and at-home sleep studies for apnea, insomnia, restless leg syndrome and narcolepsy.",
  hero: {
    title: "Make sleep part of your health.",
    body: "Good sleep is essential for both your physical and mental well-being. During sleep, your brain processes the day\u2019s information and consolidates memories.",
    image: "/images/figma/sleep-hero.jpg",
  },
  approach: {
    title: APPROACH_TITLE,
    paragraphs: [
      "Quality sleep isn\u2019t just a luxury \u2013 it\u2019s essential for your emotional, mental, physical, and spiritual wellbeing. When sleep problems arise, they can affect every aspect of your life, from your daily performance to your long-term health.",
      "At the Dr. Avi Ishaaya Centers in Beverly Hills, we understand that each patient\u2019s sleep challenges are unique, which is why we provide comprehensive, personalized care to help you achieve the restful sleep you deserve.",
      "Dr. Avi Ishaaya, a board-certified sleep specialist, brings over 30 years of experience in treating sleep disorders. Our center offers expert evaluation and treatment for patients experiencing:",
    ],
    // The frame lists the symptoms worth getting evaluated, not differentiators.
    bullets: [
      "Persistent daytime fatigue and exhaustion",
      "Loud snoring or gasping for air during sleep",
      "Difficulty falling or staying asleep",
      "Night terrors or vivid dreams",
      "Excessive daytime sleepiness",
      "Sleep apnea symptoms",
      "Narcolepsy",
      "Restless leg syndrome",
    ],
    highlight: 1,
  },
  conditions: [
    { name: "Obstructive Sleep Apnea (OSA)" },
    { name: "Insomnia" },
    { name: "Narcolepsy" },
    { name: "Restless Leg Syndrome" },
  ],
  diagnostics: {
    title: "Diagnostics and care",
    tiles: [
      {
        n: "01",
        title: "In-Lab Sleep Studies",
        blurb: "Advanced Sleep Testing in a Relaxing, Hotel-Like Setting.",
      },
      {
        n: "02",
        title: "At-Home Sleep Studies",
        blurb: "Professional Sleep Testing in the Comfort of Home.",
      },
      {
        n: "03",
        title: "Microbiome Analysis",
        blurb: "The Hidden Key to Optimal Health.",
      },
    ],
  },
  closing: { ...CLOSING, image: "/images/scraped/4OSBaHObMlbjYP7NUCUgbVAQ.jpg" },
};

/** Allergy & Sensitivity — frame 2031:3776. */
export const allergy: ServicePageData = {
  slug: "allergy-sensitivity",
  name: "Allergy & Sensitivity",
  metaTitle: "Allergy & Sensitivity",
  metaDescription:
    "Allergy and food sensitivity testing in Beverly Hills — identify your triggers and eliminate the causes of your symptoms.",
  hero: {
    title: "When your body reacts, we listen.",
    body: "Identifying allergens will allow you to eliminate potential triggers that may cause your allergy related symptoms.",
    image: "/images/scraped/mRvoVlTLqZI08Kd9gqKbgHptpQ.png",
  },
  approach: {
    title: APPROACH_TITLE,
    paragraphs: [
      "Identifying allergens will allow you to eliminate potential triggers that may cause your allergy related symptoms. Likewise, identifying various sensitivities can potentially eliminate inflammation; weight issues; respiratory, skin, and gastrointestinal disorders; and more.",
    ],
    bullets: [
      "Board-certified physician",
      "Comprehensive testing options",
      "Personalized treatment plans",
      "Evidence-based approaches",
    ],
    highlight: 1,
  },
  conditions: [],
  diagnostics: {
    title: "Diagnostics and care",
    tiles: [
      {
        n: "01",
        title: "Food Sensitivity Testing",
        blurb: "Uncover Your Hidden Triggers. Unlock Your True Wellness.",
      },
      {
        n: "02",
        title: "Allergy Testing",
        blurb: "Identify Your Triggers, Transform Your Life.",
      },
      {
        n: "03",
        title: "Microbiome Analysis",
        blurb: "The Hidden Key to Optimal Health.",
      },
    ],
  },
  closing: { ...CLOSING, image: "/images/scraped/0HUPsipnJwiW8Wacf4kCltNs96o.jpg" },
};

/** Wellness & Preventive Medicine — frame 2031:6398. */
export const wellness: ServicePageData = {
  slug: "wellness-preventive-medicine",
  name: "Wellness & Preventive Medicine",
  metaTitle: "Wellness & Preventive Medicine",
  metaDescription:
    "Preventive medicine and longevity diagnostics in Beverly Hills — annual exams, full-body MRI, telomere and micronutrient testing, body contouring.",
  hero: {
    title: "Invest in the health you want for tomorrow.",
    body: "Wellness and prevention are where each piece connects to form the complete picture of how you can attain your optimal wellbeing.",
    image: "/images/scraped/z40GSxCTx1p8Yl8dajpSuGt52I.jpeg",
  },
  approach: {
    title: APPROACH_TITLE,
    paragraphs: [
      "Wellness and prevention are where each piece connects to form the complete picture of how you can attain your optimal wellbeing. By working holistically, we can consider the full picture of your physical, mental, emotional, and spiritual health, and provide patient-centered care that identifies the root causes of illnesses.",
      "From foundational annual exams to advanced longevity diagnostics like full-body MRI and telomere testing, our preventive program is designed for patients who want more than reactive medicine.",
    ],
    bullets: [],
  },
  conditions: [],
  diagnostics: {
    title: "Diagnostics and care",
    tiles: [
      {
        n: "01",
        title: "Annual Wellness Exam",
        blurb: "Your Foundation for Optimal Health.",
      },
      {
        n: "02",
        title: "PNOĒ for Wellness & Prevention",
        blurb: "Precision Wellness Through the Power of Breath.",
      },
      {
        n: "03",
        title: "Laboratory Services",
        blurb: "Advanced Lab Panels Testing for Optimal Health.",
      },
      {
        n: "04",
        title: "Telomere Testing",
        blurb: "Understanding Your Biological Age & Longevity Potential.",
      },
      {
        n: "05",
        title: "Micronutrient Testing & Personalized Supplements",
        blurb: "A Scientific Approach to Nutritional Health.",
      },
      {
        n: "06",
        title: "Microbiome Analysis",
        blurb: "The Hidden Key to Optimal Health.",
      },
      {
        n: "07",
        title: "Advanced Imaging Services",
        blurb: "Clear Vision, Clear Path Forward.",
      },
      {
        n: "08",
        title: "Full Body MRI",
        blurb: "A Clear View of Your Complete Health.",
      },
      {
        n: "09",
        title: "Diagnostic Ultrasound",
        blurb: "Non-Invasive Imaging for Comprehensive Assessment.",
      },
      {
        n: "10",
        title: "Allergy Testing",
        blurb: "Identify Your Triggers, Transform Your Life.",
      },
      {
        n: "11",
        title: "Food Sensitivity Testing",
        blurb: "Uncover Your Hidden Triggers.",
      },
      {
        n: "12",
        title: "At-Home Sleep Studies",
        blurb: "Professional Sleep Testing in the Comfort of Home.",
      },
      {
        n: "13",
        title: "Emsculpt & TruSculpt flex",
        blurb: "Advanced Muscle Stimulation & Strengthening.",
      },
      {
        n: "14",
        title: "EMSELLA",
        blurb: "Advanced Pelvic Floor Strengthening.",
      },
      {
        n: "15",
        title: "EmFace Treatment",
        blurb: "Facial Muscle Stimulation: The Foundation of Natural Rejuvenation.",
      },
      {
        n: "16",
        title: "Emsculpt NEO & TruSculpt iD",
        blurb: "Advanced Body Contouring Solutions.",
      },
      {
        n: "17",
        title: "Advanced Microneedling RF",
        blurb: "Revolutionary Skin Rejuvenation Technology.",
      },
    ],
  },
  closing: { ...CLOSING, image: "/images/scraped/793ONR8hKKyrrxWSaatYJDLTY.jpg" },
};

export const servicePages: Record<string, ServicePageData> = {
  lungs,
  cardiovascular,
  sleep,
  "allergy-sensitivity": allergy,
  "wellness-preventive-medicine": wellness,
};
