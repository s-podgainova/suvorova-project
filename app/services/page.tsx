import { ServicesSection } from "@/components/sections/ServicesSection/ServicesSection";

import styles from "./page.module.css";

export default function ServicesPage() {
  return (
    <main className={`page ${styles.page}`}>
      <ServicesSection />
    </main>
  );
}
