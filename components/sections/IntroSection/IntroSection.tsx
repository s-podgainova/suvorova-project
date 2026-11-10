import Image from "next/image";

import { ButtonLink } from "@/components/ui/ButtonLink/ButtonLink";
import { Container } from "@/components/ui/Container/Container";

import introPhoto from "@/public/images/hero/hero.jpg";

import styles from "./IntroSection.module.css";

export const IntroSection = () => (
  <section>
    <Container>
      <div className={styles.grid}>
        <div className={styles.image}>
          <Image
            src={introPhoto}
            alt=""
            priority
            placeholder="blur"
            sizes="(max-width: 768px) 90vw, (min-width: 1200px) 542px, 45vw"
          />
          <span className={styles.imageCaption}>
            Дизайн<br />жилых<br />пространств
          </span>
        </div>
        <div className={styles.copy}>
          <h1 className={styles.title}>
            Хороший интерьер рождается в&nbsp;диалоге&nbsp;&mdash;
            из&nbsp;внимания к&nbsp;человеку и&nbsp;любви к&nbsp;красоте
          </h1>
          <p>
            Мне важно, чтобы за&nbsp;внешней гармонией каждого пространства
            стояли продуманные решения, а&nbsp;за&nbsp;его функциональностью
            не&nbsp;терялись атмосфера и&nbsp;индивидуальность.
          </p>
          <ButtonLink href="/about">
            Подробнее обо мне
          </ButtonLink>
        </div>
      </div>
    </Container>
  </section>
);
