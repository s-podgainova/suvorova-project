import { ServicesIntroSection } from "@/components/sections/ServicesIntroSection/ServicesIntroSection";
import { ServicesSection } from "@/components/sections/ServicesSection/ServicesSection";

export default function ServicesPage() {
  return (
    <main className="page">
      <ServicesIntroSection />
      <ServicesSection />
    </main>
  );
}
