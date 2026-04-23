import { Metadata } from "next";
import { ServiceLayout } from "@/components/service-layout";

export const metadata: Metadata = {
  title: "Cardiovascular",
  description:
    "Comprehensive cardiac diagnostics and personalized cardiovascular care in Beverly Hills.",
};

export default function CardioPage() {
  return (
    <ServiceLayout
      title="Cardiovascular"
      heroImage="/images/scraped/IppKL0cvGoYnkzaVfgS112yoo.jpg"
      tagline="Your cardiovascular health is fundamental to your overall wellbeing."
      intro={
        <>
          <p>
            Comprehensive cardiovascular care starts with knowing exactly where
            you stand. At the Dr. Avi Ishaaya Center, we offer advanced cardiac
            diagnostic testing in a comfortable, convenient setting. Our
            comprehensive assessments help identify potential heart issues
            early, monitor existing conditions, and guide preventive strategies.
          </p>
          <p>
            Many cardiovascular conditions can be managed effectively when
            caught early. We recommend regular check-ups and prompt evaluation
            of concerning symptoms — risk factors can often be modified through
            lifestyle changes and appropriate medical management.
          </p>
        </>
      }
      bullets={[
        "All tests performed in one convenient location",
        "Same-day testing often available",
        "State-of-the-art diagnostic equipment",
        "Experienced cardiac technicians",
        "Immediate results for most tests",
        "Comprehensive interpretation and explanation of results",
        "Personalized treatment plans based on findings",
      ]}
      conditions={[
        {
          name: "Coronary Artery Disease",
          details: [
            { label: "Symptoms", value: "Chest pain (angina), shortness of breath, fatigue" },
            { label: "Risk", value: "High blood pressure, cholesterol, smoking, diabetes" },
            { label: "Testing", value: "Stress tests, cardiac imaging, blood tests" },
          ],
        },
        {
          name: "Congestive Heart Failure",
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
      ]}
      services={[
        {
          title: "Electrocardiogram (EKG) Testing",
          subtitle: "Every Heartbeat Tells a Story.",
        },
        {
          title: "Echocardiogram (ECHO)",
          subtitle: "Watch Your Heart's Symphony in Action.",
        },
        {
          title: "Stress Echocardiogram",
          subtitle: "Advanced Cardiac Imaging Under Exercise.",
        },
        {
          title: "Six-Minute Oxygen Walk Study",
          subtitle: "Walking the Path toward Breathing Clarity.",
        },
        {
          title: "PNOĒ for Cardiovascular Health",
          subtitle: "Every Breath Reveals Your Heart's Health.",
        },
        {
          title: "Advanced Diagnostic Ultrasound",
          subtitle: "Non-Invasive Imaging for Comprehensive Health Assessment.",
        },
        {
          title: "At-Home Holter Monitor Testing",
          subtitle: "Tracking Every Beat of Your Daily Life.",
        },
      ]}
    />
  );
}
