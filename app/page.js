import Hero from "@/components/Hero";
import CredibilitySection from "@/components/CredibilitySection";
import TrustMatrix from "@/components/TrustMatrix";
import CoreServices from "@/components/CoreServices";
import ServiceShowcase from "@/components/ServiceShowcase";
import Philosophy from "@/components/Philosophy";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Tranzent Limited - Beyond Delivery",
  description:
    "Insured, transparent, on-time vehicle transportation and logistics - engineered for absolute peace of mind.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredibilitySection />
      <TrustMatrix />
      <CoreServices />
      {/* <ServiceShowcase /> */}
      {/* <Philosophy /> */}
      <CTASection />
    </>
  );
}
