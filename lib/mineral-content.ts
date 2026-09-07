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
