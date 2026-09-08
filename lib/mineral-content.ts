/**
 * "Mineral & Heavy Metal Testing" — Figma 2417:893.
 *
 * The frame is its own page rather than a variant of the five service frames:
 * it opens on the standard hero and closes on the standard VIP band, call to
 * action and footer, and everything between is particular to this test.
 *
 * Copy is transcribed from the frame's own text layers.
 */

export const mineralHero = {
  eyebrow: "Mineral & Heavy Metal Testing",
  title: "What's inside your cells?",
  body:
    "Get a clearer picture of the minerals your body is running on and the heavy metals that may be getting in the way. Our intracellular mineral and heavy metal test uses a quick, painless, non-invasive scan of your palm, with initial results available immediately.",
  cta: { href: "/contact", label: "Book Your Scan →" },
  /** Interim: the frame's own photograph is not in the repository yet. */
  image: "/images/figma/wellness-hero.jpg",
};

/** "Sometimes, the answers aren't in your blood." — 2417:1459. */
export const mineralApproach = {
  eyebrow: "Our Approach",
  title: ["Sometimes,", "the answers aren't", "in your blood."],
  standfirst: "Sometimes, two things are happening at once",
  cta: { href: "/contact", label: "Book Your Scan" },
  paragraphs: [
    "Modern life has changed the environment and with it, the raw materials your body has to work with.",
    "On one side, our food carries fewer minerals than it did two generations ago. Our water, air, and soil are polluted, and that soil is farmed harder and rested less. Even a careful diet can leave you short on the magnesium, zinc, or iodine your body depends on to keep you balanced and well.",
    "On the other side, we are absorbing elements the body was never designed to store. Aluminum in cookware and personal care products. Mercury from older dental work and certain fish. Cadmium from smoke and exhaust. Antimony from plastic bottles left in a warm car. Usually, we consume these toxins in very small amounts throughout our lives, so we are unaware of the damage they cause, until the accumulated damage starts to show.",
    "Your body works hard to eliminate those toxins and keep you balanced. However, if we overwhelm our body with too many toxins, what it cannot clear, it stores, and it stores it out of the way, in tissue, where it will do the least immediate harm.",
    "That storage is often invisible on most tests, but it is exactly what this scan is designed to see.",
  ],
};

/** "Why the cell is the place to look" — 2417:1716. */
export const mineralCells = {
  eyebrow: "Why intracellular testing",
  title: "Why the cell is the place to look",
  standfirst:
    "Think of your body as a house with a delivery system, a waste system, and a set of rooms where things actually get used.",
  /** The frame fills the third card and leaves the first two plain. */
  cards: [
    {
      n: "01",
      title: "Blood is the delivery truck.",
      body: "It shows what is moving through right now. Your body works hard to keep the levels in your blood steady and balanced, so a blood test can look perfectly normal even when the minerals inside the rooms are running low.",
    },
    {
      n: "02",
      title: "Hair and urine are the garbage going out.",
      body: "They show what your body has managed to get rid of over the past weeks or months. It is useful, but if your ability to clear metals is impaired, very little shows up, and the test reads as reassuring for the wrong reason.",
    },
    {
      n: "03",
      title: "The cell is the destination.",
      body: "It is where minerals are put to work and where metals settle in. It is the one place that tells you what your body has actually taken in and kept.",
      filled: true,
    },
  ],
  caption:
    "This scan reads that third place. Specifically, it shows the intracellular uptake of minerals through the tissue, including muscle and small capillaries, at a depth of about 4mm through the skin.",
  cta: { href: "/contact", label: "Book Your Scan" },
};

/** "A minute of light. A deeper look within." — 2417:2025, on the dark band. */
export const mineralHow = {
  eyebrow: "How it works",
  title: ["A minute of light.", "A deeper look within."],
  /** The frame sets the method's name in bold inside the opening line. */
  lead: { before: "The scan uses ", strong: "spectrophotometry", after: ", a way of measuring matter with light." },
  paragraphs: [
    "Every element has its own signature, absorbing and reflecting light in its own particular way. Calcium absorbs light differently than magnesium; mercury differently than lead. And the more of an element there is, the more of its particular light gets absorbed. This is a relationship physicists established more than two centuries ago with the Beer-Lambert Law and have relied on ever since. It is the same principle astronomers use to identify what a distant star is made of, and the same principle a laboratory uses to identify a chemical sample.",
    "With this scan, a small handheld sensor rests on the palm of your hand and sends a beam of light a few millimeters into the tissue. Some of that light is absorbed. Some comes back. The pattern of what returns is read against established reference ranges, and it tells us which elements are present and in what proportion.",
    "Four readings are taken on the palm of your non-dominant hand. The palm is used for two reasons: it has the same pigmentation in every person, regardless of skin tone, so nothing skews the reading, and the hands are among the body's busiest crossroads for circulation and elimination.",
  ],
};

/** "What the scan shows you" — 2417:2282. */
export const mineralPanel = {
  eyebrow: "What we test",
  title: ["What the scan", "shows you"],
  cta: { href: "/contact", label: "Book Your Scan" },
  paragraphs: [
    "The relationships between them are where the real answer lies. Minerals do not work alone. They compete and support one another, and they occupy the same doorways into the cell. For example, copper and zinc sit on a seesaw. Fluoride and iodine compete for the same receptor. Mercury interferes with the absorption of vitamin D.",
    "This is why a single low number rarely tells the story, and why “just take more of it” so often fails. If a metal is sitting in the doorway, blocking it, you can supplement a mineral for years and never get it where it needs to go. The scan shows whether you are genuinely short of something, or whether something is standing in the way.",
  ],
  groups: [
    {
      title: "21 minerals and trace elements",
      body: "These minerals and trace elements support functions including energy, hormones, immune response, and detoxification.",
      items: ["Magnesium","Zinc","Iodine","Selenium","Chromium","Iron","Lithium","Calcium","Silicon","Phosphorus","Sodium"],
      // The frame shows only the first eleven and a "View All →". These are
      // the rest of the OligoScan mineral panel, which is the 21 the heading
      // counts; not in the file, so worth the client's eye.
      more: ["Potassium","Copper","Manganese","Vanadium","Boron","Cobalt","Molybdenum","Germanium","Sulfur","Fluorine"],
    },
    {
      title: "16 heavy metals",
      items: ["Aluminium (Al)","Antimony (Sb)","Silver (Ag)","Arsenic (As)","Barium (Ba)","Beryllium (Be)","Bismuth (Bi)","Tin (Sn)"],
      // As above: the remaining eight of the panel's sixteen heavy metals.
      more: ["Cadmium (Cd)","Mercury (Hg)","Nickel (Ni)","Platinum (Pt)","Lead (Pb)","Thallium (Tl)","Thorium (Th)","Gadolinium (Gd)"],
    },
    {
      title: "Seven vitamin indicators",
      items: ["Vitamin A","Vitamin B6","Vitamin B9","Vitamin B12","Vitamin C","Vitamin D","Vitamin E"],
    },
  ],
};

/** "One simple scan. A much bigger picture." — 2417:2706. */
export const mineralAppointment = {
  eyebrow: "Your appointment",
  title: ["One simple scan.", "A much bigger picture."],
  /** 01 and 04 run the full height of the row; 02 and 03 share the middle. */
  steps: [
    {
      n: "01",
      title: "Your Health Questionnaire.",
      body: [
        "Before your scan, we'll ask about factors that may shape your results, including your water, dental history, work, cookware, supplements, stress, and sleep.",
        "We'll also need your height, weight, date of birth, and blood type. Blood type is used to calculate the reference ranges, so you'll need to know yours before your appointment.",
      ],
      filled: true,
      tall: true,
    },
    {
      n: "02",
      title: "The scan itself.",
      body: ["The scan itself usually takes less than a minute and is completely painless and non-invasive."],
    },
    {
      n: "03",
      title: "Your results, immediately.",
      body: ["Your initial report is generated on the spot so you can review your results immediately."],
    },
    {
      n: "04",
      title: "Comprehensive Review.",
      body: [
        "Within 48 hours, you'll receive a more comprehensive report that also considers the information from your questionnaire.",
        "Dr. Ishaaya reviews the findings with you and connects them to the symptoms or concerns that brought you in.",
        "The goal is to understand what may need to be reduced, replenished, or supported and in what order. Depending on what we find, additional testing may be needed to create a clearer picture.",
      ],
      tall: true,
    },
  ],
};


/** "When \u0022normal\u0022 doesn\u2019t tell the whole story." \u2014 2417:3005, dark band. */
export const mineralWhoFor = {
  eyebrow: "Who it's for",
  title: ["When \u0022normal\u0022 doesn't", "tell the whole story."],
  standfirst: "This assessment may be useful if:",
  cta: { href: "/contact", label: "Request Appointment" },
  /** The frame reads these across the two columns, not down them. */
  items: [
    "You don't feel well, but your standard lab work keeps coming back normal.",
    "You're experiencing fatigue, brain fog, stubborn weight, hormone or thyroid symptoms, or persistent digestive concerns.",
    "You've been taking supplements consistently but can't tell whether they're helping.",
    "You're preparing to begin a detoxification or nutritional protocol and want a measurable starting point.",
    "You have known exposure through older amalgam fillings, industrial or trade work, well water, years of bottled water, or repeated MRI contrast.",
    "You feel well and want to take a more proactive approach to staying that way.",
  ],
};

/** "Your results are only the beginning." \u2014 2417:3286. */
export const mineralBeyond = {
  eyebrow: "Beyond the scan",
  title: ["Your results are", "only the beginning."],
  body: "The scan gives us a clearer starting point. From there, we can track change, understand your results in context, and look at your health as part of a bigger picture.",
  /** Interim: the frame's own portrait is not in the repository yet. */
  image: "/images/scraped/piPOUcGww89HYaJTpCR7kEFYeLk.webp",
  rows: [
    {
      n: "01",
      title: "Track Your Progress",
      lead: "Don't just make changes. See if they're working.",
      body: [
        "One scan gives you a snapshot. Follow-up scans allow us to compare your results over time and see whether changes to your nutrition, supplements, water, dental work, or other aspects of your routine are actually registering in your tissue.",
        "We recommend repeating the scan four to eight weeks after beginning your recommended changes.",
      ],
    },
    {
      n: "02",
      title: "Understand the Bigger Picture",
      lead: "One piece of a more complete health picture.",
      body: [
        "This scan is a nutritional and exposure assessment designed to identify patterns, trends, and outliers in mineral status, heavy metal load, and the relationships between them. It is not a diagnosis and does not replace blood work, imaging, or other recommended testing. It also cannot determine the amount of a particular metal within a specific organ.",
        "Small variations between scans are normal, so we focus on overall patterns rather than individual numbers. Used alongside your history, symptoms, and other results, the scan provides another piece of information to help us understand your health more completely.",
      ],
    },
    {
      n: "03",
      title: "Look Beyond the Numbers",
      lead: "Health is more than a set of results.",
      body: [
        "Minerals and metals give us a measurable view of the physical layer of your health. But physical health doesn't exist in isolation. Stress and emotional well-being can also influence how the body functions, rests, and repairs.",
        "We begin with the physical because it gives us something tangible to measure. For patients looking for a broader view of their well-being, our comprehensive wellness assessment also considers physical, emotional, and spiritual layers.",
      ],
    },
  ],
};

/**
 * The split call to action before the FAQs — Figma 2417:3803.
 *
 * The build put the shared VIP band in this slot. The frame draws a band of
 * this page's own here instead: nothing in 2417:893 carries the VIP band's
 * copy, and the two only measured the same because both bands are 740 tall.
 *
 * Two buttons rather than one, at the frame's 143 and 190 — Book Your Scan
 * filled, Questions? Contact Us outlined (2417:3810).
 */
export const mineralCta = {
  eyebrow: "Mineral & Heavy Metal Testing",
  title: "Find out what you're working with.",
  body: "The scan takes less than a minute and gives you somewhere to start.",
  primary: { href: "/contact", label: "Book Your Scan" },
  secondary: { href: "/contact", label: "Questions? Contact Us" },
  /** Interim, as elsewhere on this page: the frame's left half is the puzzle
      illustration, which is not in the repository yet. */
  image: "/images/scraped/AC2cC1c4vV9tRfYLtq2lf4Xc.jpg",
};

/** "Have Questions?" \u2014 2417:3815. The frame rests with the first one open. */
export const mineralFaqs = {
  eyebrow: "FAQs",
  title: "Have Questions?",
  items: [
    { q: "Does the scan hurt?", a: "No. A sensor simply rests on your open palm and reads light. You won't feel anything." },
    { q: "How long does it take?", a: "The scan itself usually takes less than a minute. Please allow additional time for the questionnaire beforehand and review of your results afterward." },
    { q: "Is there anything I need to bring?", a: "You'll need to know your blood type before your appointment. It's used to calculate your reference ranges, and the scan cannot be run accurately without it." },
    { q: "Do I need to fast or stop taking my supplements?", a: "No fasting is required. We'll let you know if anything needs to be adjusted before your appointment." },
    { q: "When will I get my results?", a: "Your initial report is available the same day. Your comprehensive report is usually provided and reviewed with you within 48 hours." },
    { q: "Can I have the scan if I'm pregnant or have an implant or pacemaker?", a: "Yes. Nothing enters your body and no electrical current is applied. The assessment can also be used during pregnancy to look at mineral status, when nutritional demands may increase." },
    { q: "How is this different from a blood test for heavy metals?", a: "Blood testing shows what's circulating in your bloodstream at that moment. Heavy metals can leave the bloodstream and settle into tissue within days. This scan looks at intracellular uptake through tissue rather than only what's currently circulating." },
    { q: "How often should I repeat the scan?", a: "We recommend repeating the assessment four to eight weeks after beginning your recommended changes so there is enough time to evaluate whether your patterns have shifted." },
    { q: "Is it covered by insurance?", a: "No. Mineral and heavy metal testing is offered as a wellness assessment." },
  ],
};
