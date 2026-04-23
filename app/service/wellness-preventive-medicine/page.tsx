import { Metadata } from "next";
import { ServiceLayout } from "@/components/service-layout";

export const metadata: Metadata = {
  title: "Wellness & Preventive Medicine",
  description:
    "Holistic wellness, advanced testing, and preventive screening to protect long-term health.",
};

export default function WellnessPage() {
  return (
    <ServiceLayout
      title="Wellness & Preventive Medicine"
      tagline="Wellness and prevention are where each piece connects to form the complete picture of how you can attain your optimal wellbeing."
      intro={
        <>
          <p>
            Wellness and prevention are where each piece connects to form the
            complete picture of how you can attain your optimal wellbeing. By
            working holistically, we can consider the full picture of your
            physical, mental, emotional, and spiritual health, and provide
            patient-centered care that identifies the root causes of illnesses.
          </p>
          <p>
            From foundational annual exams to advanced longevity diagnostics
            like full-body MRI and telomere testing, our preventive program is
            designed for patients who want more than reactive medicine.
          </p>
        </>
      }
      services={[
        { title: "Annual Wellness Exam", subtitle: "Your Foundation for Optimal Health." },
        { title: "PNOĒ for Wellness & Prevention", subtitle: "Precision Wellness Through the Power of Breath." },
        { title: "Laboratory Services", subtitle: "Advanced Lab Panels Testing for Optimal Health." },
        { title: "Telomere Testing", subtitle: "Understanding Your Biological Age & Longevity Potential." },
        { title: "Micronutrient Testing & Personalized Supplements", subtitle: "A Scientific Approach to Nutritional Health." },
        { title: "Microbiome Analysis", subtitle: "The Hidden Key to Optimal Health." },
        { title: "Advanced Imaging Services", subtitle: "Clear Vision, Clear Path Forward." },
        { title: "Full Body MRI", subtitle: "A Clear View of Your Complete Health." },
        { title: "Diagnostic Ultrasound", subtitle: "Non-Invasive Imaging for Comprehensive Assessment." },
        { title: "Allergy Testing", subtitle: "Identify Your Triggers, Transform Your Life." },
        { title: "Food Sensitivity Testing", subtitle: "Uncover Your Hidden Triggers." },
        { title: "At-Home Sleep Studies", subtitle: "Professional Sleep Testing in the Comfort of Home." },
        { title: "Emsculpt & TruSculpt flex", subtitle: "Advanced Muscle Stimulation & Strengthening." },
        { title: "EMSELLA", subtitle: "Advanced Pelvic Floor Strengthening." },
        { title: "EmFace Treatment", subtitle: "Facial Muscle Stimulation: The Foundation of Natural Rejuvenation." },
        { title: "Emsculpt NEO & TruSculpt iD", subtitle: "Advanced Body Contouring Solutions." },
        { title: "Advanced Microneedling RF", subtitle: "Revolutionary Skin Rejuvenation Technology." },
      ]}
    />
  );
}
