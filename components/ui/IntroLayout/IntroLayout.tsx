import type { ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";

import { ButtonLink } from "@/components/ui/ButtonLink/ButtonLink";
import { Container } from "@/components/ui/Container/Container";

import styles from "./IntroLayout.module.css";

type IntroLayoutProps = {
  photo: StaticImageData;
  alt: string;
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  href: string;
  linkLabel: string;
  reversed?: boolean;
  priority?: boolean;
};

export const IntroLayout = ({
  photo,
  alt,
  eyebrow,
  title,
  description,
  href,
  linkLabel,
  reversed = false,
  priority = false,
}: IntroLayoutProps) => (
  <section>
    <Container>
      <div className={reversed ? `${styles.grid} ${styles.reversed}` : styles.grid}>
        <Image
          className={styles.image}
          src={photo}
          alt={alt}
          priority={priority}
          placeholder="blur"
          sizes="(max-width: 768px) 90vw, (min-width: 1200px) 542px, 45vw"
        />
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
          <ButtonLink href={href}>{linkLabel}</ButtonLink>
        </div>
      </div>
    </Container>
  </section>
);
