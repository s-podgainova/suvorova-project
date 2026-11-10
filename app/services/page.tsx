import { ServicesIntroSection } from "@/components/sections/ServicesIntroSection/ServicesIntroSection";
import { ServicesSection } from "@/components/sections/ServicesSection/ServicesSection";

import styles from "./page.module.css";

export default function ServicesPage() {
  return (
    <main className={`page ${styles.page}`}>
      <ServicesIntroSection />
      <ServicesSection />
    </main>
  );
}
