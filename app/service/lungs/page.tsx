import { Metadata } from "next";
import { ServiceLayout } from "@/components/service-layout";

export const metadata: Metadata = {
  title: "Lungs & Breathing",
  description:
    "Comprehensive pulmonary care in Beverly Hills — asthma, COPD, sleep-related breathing disorders, and advanced lung diagnostics.",
};

export default function LungsPage() {
  return (
    <ServiceLayout
      title="Lungs & Breathing"
      tagline="Your lungs are essential to delivering vital oxygen to every cell in your body."
      heroImage="/images/scraped/Ok6cd4z826F0Gks9sFfcGFjFzY.jpg"
      intro={
        <>
          <p>
            Maintaining healthy lung function is a crucial piece for attaining
            overall wellbeing and longevity, especially as respiratory health
            has become increasingly important in our modern world.
          </p>
          <p>
            At the Dr. Avi Ishaaya Center, we understand that breathing
            difficulties can significantly impact your quality of life. Our
            state-of-the-art center offers comprehensive diagnosis, treatment,
            and management of respiratory conditions using advanced technology
            and personalized care approaches.
          </p>
        </>
      }
      bullets={[
        "Same-day testing availability",
        "State-of-the-art diagnostic equipment",
        "Comprehensive testing and care in one location",
        "Experienced board-certified pulmonary specialist",
        "Personalized treatment plans",
      ]}
      conditions={[
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
      ]}
      services={[
        {
          title: "Pulmonary Function Testing (PFT)",
          subtitle:
            "A complete assessment of how your lungs move air, exchange gas, and respond to challenge.",
        },
        {
          title: "Methacholine Challenge Testing",
          subtitle: "Beyond Basic Breathing Tests: Clear Answers for Asthma.",
        },
        {
          title: "Fractional Excretion of Nitric Oxide (FeNO)",
          subtitle: "Breath Analysis: Exposing Airway Inflammation.",
        },
        {
          title: "X-Ray",
          subtitle: "Clear Images, Quick Results: On-Site Digital X-ray.",
        },
        {
          title: "Six-Minute Oxygen Walk Study",
          subtitle: "Walking the Path toward Breathing Clarity.",
        },
        {
          title: "PNOĒ Respiratory Assessment",
          subtitle: "Your Breath, Your Blueprint: Precision Respiratory Assessment.",
        },
        {
          title: "Microbiome Analysis",
          subtitle: "The Hidden Key to Optimal Health.",
        },
      ]}
    />
  );
}
