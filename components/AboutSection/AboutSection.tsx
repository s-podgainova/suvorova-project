import Image from "next/image";

import { SignatureIcon } from "./SignatureIcon";

import styles from "./AboutSection.module.css";

export const AboutSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <div>
          <p className={styles.title}>Софья-Мария Суворова</p>
          <h2 className={styles.heading}>обо мне</h2>{" "}
        </div>
        <p className={styles.text}>
          Я&nbsp;— дизайнер интерьеров из&nbsp;Санкт-Петербурга.
          <br /> Создаю продуманные пространства, где эстетика сочетается
          с&nbsp;комфортом, а&nbsp;каждая деталь имеет свое значение.
          <br /> От&nbsp;идеи до&nbsp;реализации&nbsp;— сопровождаю проект,
          чтобы результат полностью соответствовал вашему образу жизни.
        </p>
        <ul className={styles.list}>
          <li>Функциональные интерьерные решения</li>
          <li>Полное сопровождение проекта</li>
        </ul>
        <SignatureIcon />
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/about/IMG_5202.WEBP"
          sizes="(max-width: 960px) 100vw, 528px"
          alt="Портрет Софьи Суворовой"
          className={styles.image}
          fill
        />
      </div>
    </section>
  );
};
