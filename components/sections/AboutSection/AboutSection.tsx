import Image from "next/image";

import { SignatureIcon } from "./SignatureIcon";

import styles from "./AboutSection.module.css";

export const AboutSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.inner}>
          <p className={styles.title}>
            Софья-Мария <span className={styles.accent}>Суворова</span>
          </p>
          <h2 className={styles.heading}>обо мне</h2>{" "}
        </div>
        <div className={styles.text}>
          <p>
            Меня зовут Софья, я дизайнер жилых интерьеров из Санкт-Петербурга.
          </p>
          <p>
            Для меня ценность этой профессии — в возможности создавать красивое,
            которое становится частью реальной жизни.
          </p>
          <p>
            Мне нравится находить среди множества возможностей точные решения и
            соединять их в цельный интерьер — гармоничный, выразительный и
            созвучный человеку, который будет в нём жить.
          </p>
          <p>
            Я люблю всё, из чего складывается интерьер: архитектуру и эргономику
            пространства, цвет и свет, материалы, фактуры, предметы и самые
            небольшие детали.
          </p>
          <p>
            Я верю, что интерьер рождается в диалоге — между заказчиком,
            дизайнером и самим пространством. У каждого в этом диалоге своя
            незаменимая роль: человек привносит свой образ жизни и ощущение дома,
            пространство задаёт возможности и ограничения, а моя задача как
            дизайнера — услышать их и соединить в единое целое.
          </p>
        </div>
        <SignatureIcon />
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/about/about.jpg"
          sizes="(max-width: 960px) min(500px, calc(100vw - 32px), 90vw), (max-width: 1140px) calc(45vw - 30px), (max-width: 1280px) calc(540px - 5vw), 476px"
          alt="Портрет Софьи Суворовой"
          className={styles.image}
          width={600}
          height={894}
        />
      </div>
    </section>
  );
};
