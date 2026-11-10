import Image from "next/image";

import { Container } from "@/components/ui/Container/Container";

import servicesPhoto from "@/public/images/services/services.jpg";

import styles from "./ServicesIntroSection.module.css";

export const ServicesIntroSection = () => (
  <section>
    <Container>
      <div className={styles.grid}>
        <div className={styles.copy}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src={servicesPhoto}
            alt="Services"
            className={styles.image}
            placeholder="blur"
            sizes="(max-width: 517px) 90vw, (max-width: 1100px) 465px, (max-width: 1200px) calc(45vw - 30px), 528px"
          />
          <div className={styles.textWrapper}>
            <p className={styles.caption}>Услуги · Стоимость · Этапы работы</p>
            <p className={styles.description}>
              Каждой идее&nbsp;&mdash; своё воплощение
            </p>
          </div>
        </div>
      </div>
    </Container>
  </section>
);
