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
      more: true,
    },
    {
      title: "16 heavy metals",
      items: ["Aluminium (Al)","Antimony (Sb)","Silver (Ag)","Arsenic (As)","Barium (Ba)","Beryllium (Be)","Bismuth (Bi)","Tin (Sn)"],
      more: true,
    },
    {
      title: "Seven vitamin indicators",
      items: ["Vitamin A","Vitamin B6","Vitamin B9","Vitamin B12","Vitamin C","Vitamin D","Vitamin E"],
      more: false,
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
