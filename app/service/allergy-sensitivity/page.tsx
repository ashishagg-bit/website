import { Metadata } from "next";
import { ServiceLayout } from "@/components/service-layout";

export const metadata: Metadata = {
  title: "Allergy & Sensitivity",
  description:
    "Comprehensive allergy and sensitivity testing in Beverly Hills — identify your triggers, transform your life.",
};

export default function AllergyPage() {
  return (
    <ServiceLayout
      title="Allergy & Sensitivity"
      tagline="Identifying allergens will allow you to eliminate potential triggers that may cause your allergy related symptoms."
      intro={
        <>
          <p>
            Identifying allergens will allow you to eliminate potential triggers
            that may cause your allergy related symptoms. Likewise, identifying
            various sensitivities can potentially eliminate inflammation; weight
            issues; respiratory, skin, and gastrointestinal disorders; and more.
          </p>
          <h3 className="font-display text-2xl text-[var(--navy)] mt-4">
            Comprehensive Testing Services
          </h3>
          <p>
            We offer thorough testing for both food and environmental allergies
            to identify substances causing your immune system to react. Our
            testing helps pinpoint specific triggers in foods, pollen, pet
            dander, dust mites, mold, and insect venom.
          </p>
          <h3 className="font-display text-2xl text-[var(--navy)] mt-4">
            Why Get Tested?
          </h3>
          <p>
            Allergy testing can identify the exact allergens causing your
            symptoms, prevent dangerous reactions like anaphylaxis, and improve
            quality of life by reducing sneezing, itchy eyes, hives, breathing
            difficulties, sinus infections, sleep disruption, and migraine
            headaches.
          </p>
          <h3 className="font-display text-2xl text-[var(--navy)] mt-4">
            Our Testing Process
          </h3>
          <p>
            Under the expert guidance of our board-certified physician, we
            conduct comprehensive scratch allergy testing as well as RAST
            allergy testing to detect IgE antibodies in the blood. This allows
            us to develop targeted treatment plans that go beyond simply
            managing symptoms.
          </p>
        </>
      }
      bullets={[
        "Board-certified physician",
        "Comprehensive testing options",
        "Personalized treatment plans",
        "Evidence-based approaches",
      ]}
      services={[
        {
          title: "Food Sensitivity Testing",
          subtitle: "Uncover Your Hidden Triggers. Unlock Your True Wellness.",
        },
        {
          title: "Allergy Testing",
          subtitle: "Identify Your Triggers, Transform Your Life.",
        },
        {
          title: "Microbiome Analysis",
          subtitle: "The Hidden Key to Optimal Health.",
        },
      ]}
    />
  );
}
