import Image from "next/image";

import { SignatureIcon } from "./SignatureIcon";

import styles from "./AboutSection.module.css";

export const AboutSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <div>
          <p className={styles.title}>
            Софья-Мария <span className={styles.accent}>Суворова</span>
          </p>
          <h2 className={styles.heading}>обо мне</h2>{" "}
        </div>
        <p className={styles.text}>
          Я&nbsp;создаю интерьеры, которые делают приятнее повседневную жизнь:
          учитывают привычки человека, дают ощущение комфорта
          и&nbsp;эстетическое удовольствие. Мне одинаково важно, как
          пространство работает и&nbsp;какие эмоции оно вызывает. Для меня
          хороший интерьер рождается в&nbsp;диалоге&nbsp;&mdash;
          из&nbsp;внимания к&nbsp;человеку и&nbsp;любви к&nbsp;красоте.
        </p>
        <ul className={styles.list}>
          <li>Функциональные интерьерные решения</li>
          <li>Полное сопровождение проекта</li>
        </ul>
        <SignatureIcon />
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/about/about.jpg"
          sizes="(max-width: 960px) min(500px, calc(100vw - 32px), 90vw), (max-width: 1140px) calc(45vw - 30px), (max-width: 1280px) calc(540px - 5vw), 476px"
          alt="Портрет Софьи Суворовой"
          className={styles.image}
          fill
        />
      </div>
    </section>
  );
};
