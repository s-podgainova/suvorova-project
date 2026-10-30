import Link from "next/link";

import { Container } from "@/components/ui/Container/Container";

import styles from "./NotFoundSection.module.css";

export const NotFoundSection = () => {
  return (
    <section className={styles.section} aria-labelledby="not-found-title">
      <Container>
        <div className={styles.content}>
          <p className={styles.code}>404</p>
          <h1 id="not-found-title" className={styles.title}>
            Извините, страница не найдена
          </h1>
          <Link href="/" className={styles.link}>
            На главную
          </Link>
        </div>
      </Container>
    </section>
  );
};
