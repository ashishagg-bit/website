import { Metadata } from "next";
import { ServiceLayout } from "@/components/service-layout";

export const metadata: Metadata = {
  title: "Sleep",
  description:
    "Comprehensive sleep evaluation and treatment from a board-certified sleep specialist with 30+ years of experience.",
};

export default function SleepPage() {
  return (
    <ServiceLayout
      title="Sleep"
      tagline="Good sleep is essential for both your physical and mental well-being. During sleep, your brain processes the day's information and consolidates memories."
      intro={
        <>
          <p>
            Quality sleep isn&apos;t just a luxury – it&apos;s essential for your
            emotional, mental, physical, and spiritual wellbeing. When sleep
            problems arise, they can affect every aspect of your life, from
            your daily performance to your long-term health.
          </p>
          <p>
            At the Dr. Avi Ishaaya Centers in Beverly Hills, we understand that
            each patient&apos;s sleep challenges are unique, which is why we
            provide comprehensive, personalized care to help you achieve the
            restful sleep you deserve.
          </p>
          <p>
            Dr. Avi Ishaaya, a board-certified sleep specialist, brings over
            30 years of experience in treating sleep disorders. Our center
            offers expert evaluation and treatment for patients experiencing:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Persistent daytime fatigue and exhaustion</li>
            <li>Loud snoring or gasping for air during sleep</li>
            <li>Difficulty falling or staying asleep</li>
            <li>Night terrors or vivid dreams</li>
            <li>Excessive daytime sleepiness</li>
            <li>Sleep apnea symptoms</li>
            <li>Narcolepsy</li>
            <li>Restless leg syndrome</li>
          </ul>
        </>
      }
      conditions={[
        { name: "Obstructive Sleep Apnea (OSA)" },
        { name: "Insomnia" },
        { name: "Narcolepsy" },
        { name: "Restless Leg Syndrome" },
      ]}
      services={[
        {
          title: "In-Lab Sleep Studies",
          subtitle: "Advanced Sleep Testing in a Relaxing, Hotel-Like Setting.",
        },
        {
          title: "At-Home Sleep Studies",
          subtitle: "Professional Sleep Testing in the Comfort of Home.",
        },
        {
          title: "Microbiome Analysis",
          subtitle: "The Hidden Key to Optimal Health.",
        },
      ]}
    />
  );
}
