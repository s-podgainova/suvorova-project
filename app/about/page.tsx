import { AboutSection } from "@/components/sections/AboutSection/AboutSection";
import { ButtonLink } from "@/components/ui/ButtonLink/ButtonLink";
import { Container } from "@/components/ui/Container/Container";

import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <main className="page">
      <Container>
        <AboutSection />
        <div className={styles.actions}>
          <ButtonLink href="/services">Услуги и цены</ButtonLink>
        </div>
      </Container>
    </main>
  );
}
