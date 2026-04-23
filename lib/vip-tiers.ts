export type Tier = {
  slug: "bronze" | "silver" | "gold" | "platinum";
  name: string;
  tag: string;
  blurb: string;
  description: string;
  inclusions: string[];
  detailedInclusions: { title: string; body: string }[];
  accent: string;
  border: string;
  highlight?: boolean;
};

export const baseAssessments = [
  "Comprehensive Physical Examination",
  "Detailed Medical History Review",
  "Complete Medication Evaluation",
];

export const tiers: Tier[] = [
  {
    slug: "bronze",
    name: "Bronze",
    tag: "Building the framework of your wellness puzzle",
    blurb: "A solid foundation for your wellness journey.",
    description:
      "Includes an X-ray of one body part and PNOĒ initial assessment.",
    inclusions: [
      "Basic Lab Panels",
      "X-Ray (one body part)",
      "Electrocardiogram (EKG) Testing",
      "PNOĒ Wellness & Prevention Assessment",
    ],
    detailedInclusions: [
      {
        title: "Basic Lab Panels",
        body: "Foundation pieces of your health story — comprehensive blood work, metabolic panels, and inflammation markers reveal the baseline of your overall health.",
      },
      {
        title: "X-Ray",
        body: "Clear images, quick results: on-site digital X-ray of one body part, captured and reviewed during your visit.",
      },
      {
        title: "Electrocardiogram (EKG) Testing",
        body: "Every heartbeat tells a story. A 12-lead EKG screens for arrhythmias, electrical abnormalities, and early signs of cardiac stress.",
      },
      {
        title: "PNOĒ for Wellness & Prevention",
        body: "Precision wellness through the power of breath — metabolic and cardiopulmonary analysis that quantifies how your body produces and uses energy.",
      },
    ],
    accent: "from-[#f0e2c5] to-[#e7d2a4]",
    border: "border-[#d6b97a]/40",
  },
  {
    slug: "silver",
    name: "Silver",
    tag: "Connecting key pieces of your health picture",
    blurb: "Enhanced health monitoring and preventive care.",
    description:
      "Includes X-rays of two body parts, full PNOĒ assessment, consultation, and 3-month app access.",
    inclusions: [
      "Extensive Lab Panels",
      "Micronutrient Testing & Personalized Supplements",
      "Hormone Panel",
      "Pulmonary Function Testing (PFT)",
      "X-Ray (two body parts)",
      "Electrocardiogram (EKG)",
      "Echocardiogram (ECHO)",
      "PNOĒ Assessment + 3-month app access",
    ],
    detailedInclusions: [
      {
        title: "Extensive Lab Panels",
        body: "Completing your health puzzle with deeper biomarker analysis — including advanced lipid, inflammation, glucose, and organ-function profiling.",
      },
      {
        title: "Micronutrient Testing & Personalized Supplements",
        body: "A scientific approach to nutritional health: identify deficiencies in vitamins, minerals, antioxidants and amino acids, then build a tailored supplement protocol.",
      },
      {
        title: "Hormone Panel",
        body: "Essential pieces of your hormonal puzzle — thyroid, adrenal, sex hormone and stress hormone evaluation to understand mood, energy, and metabolism.",
      },
      {
        title: "Pulmonary Function Testing (PFT)",
        body: "Your lungs are essential to delivering vital oxygen to every cell. Maintaining healthy lung function is a crucial piece for overall wellbeing and longevity.",
      },
      {
        title: "X-Ray (two body parts)",
        body: "Clear images, quick results: on-site digital X-ray of two body parts.",
      },
      {
        title: "Electrocardiogram (EKG) Testing",
        body: "Every heartbeat tells a story — comprehensive electrical assessment of the heart.",
      },
      {
        title: "Echocardiogram (ECHO)",
        body: "Watch your heart's symphony in action. Ultrasound imaging evaluates valve function, chamber size and pumping efficiency.",
      },
      {
        title: "PNOĒ for Wellness & Prevention",
        body: "Precision wellness through the power of breath, with consultation and 3-month app access for ongoing tracking.",
      },
    ],
    accent: "from-[#e3eaef] to-[#c8d3db]",
    border: "border-[#9aabb6]/40",
  },
  {
    slug: "gold",
    name: "Gold",
    tag: "Bringing your wellness puzzle into clear focus",
    blurb: "Comprehensive wellness with advanced screenings.",
    description:
      "Choice between environmental or food allergy panel, full X-ray, ultrasound of upper and lower extremities, PNOĒ assessment, consultation, and 3-month app access.",
    inclusions: [
      "Extensive Lab Panels",
      "Micronutrient Testing",
      "Telomere Testing",
      "Hormone Panel",
      "Pulmonary Function Testing (PFT)",
      "FeNO Testing",
      "Six-Minute Oxygen Walk Study",
      "Allergy Testing (env. or food panel)",
      "Full X-Ray",
      "EKG, Echocardiogram, Stress Echo",
      "Diagnostic Ultrasound (upper & lower extremities)",
      "At-Home Holter Monitor",
      "PNOĒ Assessment + 3-month app access",
      "At-Home Sleep Studies",
    ],
    detailedInclusions: [
      {
        title: "Extensive Lab Panels",
        body: "Completing your health puzzle with comprehensive biomarker analysis.",
      },
      {
        title: "Micronutrient Testing & Personalized Supplements",
        body: "A scientific approach to nutritional health.",
      },
      {
        title: "Telomere Testing",
        body: "Understanding your biological age — unlock your longevity potential by measuring the protective caps on your DNA.",
      },
      {
        title: "Hormone Panel",
        body: "Essential pieces of your hormonal puzzle.",
      },
      {
        title: "Pulmonary Function Testing (PFT)",
        body: "Detailed evaluation of how well your lungs move air and exchange oxygen.",
      },
      {
        title: "Fractional Excretion of Nitric Oxide (FeNO) Testing",
        body: "Breath analysis exposing airway inflammation — useful for identifying and managing asthma and allergic airway disease.",
      },
      {
        title: "Six-Minute Oxygen Walk Study",
        body: "Walking the path toward breathing clarity — measure how your oxygen levels respond to exertion.",
      },
      {
        title: "Allergy Testing",
        body: "Identify your triggers, transform your life. Choice of environmental or food panel.",
      },
      {
        title: "Full X-Ray, EKG, Echocardiogram & Stress Echo",
        body: "Complete cardiopulmonary imaging and electrical testing, including stress echo for evaluating heart function under exertion.",
      },
      {
        title: "Diagnostic Ultrasound",
        body: "Upper and lower extremity vascular ultrasound to assess circulation and rule out clots or arterial disease.",
      },
      {
        title: "At-Home Holter Monitor",
        body: "Continuous heart-rhythm monitoring outside the office to catch transient arrhythmias.",
      },
      {
        title: "PNOĒ Assessment + 3-month app access",
        body: "Metabolic precision plus ongoing tracking through the PNOĒ app.",
      },
      {
        title: "At-Home Sleep Studies",
        body: "Comfortable, in-home sleep monitoring to evaluate apnea and overall sleep architecture.",
      },
    ],
    accent: "from-[#f8e7b6] to-[#e6c66c]",
    border: "border-[#c8a437]/50",
    highlight: true,
  },
  {
    slug: "platinum",
    name: "Platinum",
    tag: "Completing your wellness picture with premium precision",
    blurb: "The ultimate wellness program — every available data point.",
    description:
      "Includes food, preservative, additive and environmental chemical sensitivity panels, full allergy panels, ultrasound of upper/lower extremities, thyroid, abdominal, and abdominal aorta, full PNOĒ assessment, consultation, and 3-month app access.",
    inclusions: [
      "Extensive Lab Panels",
      "Micronutrient Testing",
      "Telomere Testing",
      "Hormone Panel",
      "Pulmonary Function Testing (PFT)",
      "FeNO + Methacholine Challenge",
      "Six-Minute Oxygen Walk Study",
      "Full Allergy & Food Sensitivity Panels",
      "Full Body MRI",
      "EKG, Echocardiogram, Stress Echo",
      "Comprehensive Ultrasound (extremities, thyroid, abdominal, aorta)",
      "At-Home Holter Monitor",
      "PNOĒ Assessment + 3-month app access",
      "At-Home Sleep Studies",
    ],
    detailedInclusions: [
      {
        title: "Extensive Lab Panels",
        body: "Completing your health puzzle with the most comprehensive biomarker analysis we offer.",
      },
      {
        title: "Micronutrient Testing & Personalized Supplements",
        body: "Tailored nutritional optimization built on detailed deficiency mapping.",
      },
      {
        title: "Telomere Testing",
        body: "Understanding your biological age — track and influence the trajectory of your longevity.",
      },
      {
        title: "Hormone Panel",
        body: "Full hormonal evaluation across thyroid, adrenal, sex and stress hormones.",
      },
      {
        title: "Pulmonary Function Testing + FeNO + Methacholine Challenge",
        body: "Comprehensive airway evaluation — identifies obstruction, inflammation, and airway hyperreactivity.",
      },
      {
        title: "Six-Minute Oxygen Walk Study",
        body: "Walking the path toward breathing clarity.",
      },
      {
        title: "Full Allergy & Food Sensitivity Panels",
        body: "Food, preservative, additive and environmental chemical sensitivity panels — the most complete picture of your triggers.",
      },
      {
        title: "Full Body MRI",
        body: "High-resolution full-body imaging to screen for structural abnormalities and early disease detection.",
      },
      {
        title: "EKG, Echocardiogram & Stress Echo",
        body: "Complete cardiac assessment — at rest and under exertion.",
      },
      {
        title: "Comprehensive Diagnostic Ultrasound",
        body: "Upper and lower extremity vascular ultrasound, plus thyroid, abdominal and abdominal aorta imaging.",
      },
      {
        title: "At-Home Holter Monitor",
        body: "Continuous ambulatory heart-rhythm monitoring.",
      },
      {
        title: "PNOĒ Assessment + 3-month app access",
        body: "Premium metabolic optimization with ongoing app-based tracking and coaching.",
      },
      {
        title: "At-Home Sleep Studies",
        body: "In-home sleep architecture and apnea analysis.",
      },
    ],
    accent: "from-[#dee5ec] to-[#aab9c5]",
    border: "border-[#0d2436]/30",
  },
];

export function getTier(slug: string): Tier | undefined {
  return tiers.find((t) => t.slug === slug);
}
