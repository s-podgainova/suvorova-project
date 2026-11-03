import { ServicesSection } from "@/components/sections/ServicesSection/ServicesSection";
import { Container } from "@/components/ui/Container/Container";

import styles from "./page.module.css";

export default function ServicesPage() {
  return (
    <main className={`page ${styles.page}`}>
      <Container>
        <h1 className={styles.title}>Услуги</h1>
      </Container>
      <ServicesSection />
    </main>
  );
}
