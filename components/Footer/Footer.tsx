import { Container } from "@/shared/components/Container/Container";
import { FooterSocialLink } from "@/shared/components/FooterSocialLink/FooterSocialLink";
import { TextSplitSection } from "@/shared/components/TextSplitSection/TextSplitSection";

import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <TextSplitSection
        heading="контакты"
        accent="интерьер рождается в&nbsp;диалоге"
        className={styles.container}
      >
        <>
          <p>Санкт-Петербург</p>
          <a href="#" className={styles.email}>
            info@suvorova-interior.ru
          </a>
          <div>
            <FooterSocialLink socialType="instagram" />
            <FooterSocialLink socialType="tg" />
            <FooterSocialLink socialType="max" />
          </div>
        </>
      </TextSplitSection>
      <div className={styles.bottom}>
        <Container>
          <p className={styles.copyright}>
            &copy;&nbsp;2026 Suvorova Interiors. Весь материал на&nbsp;сайте
            авторский
          </p>
          <p className={styles.disclaimer}>
            *Компания Meta Platforms Inc., владеющая социальными сетями Facebook
            и&nbsp;Instagram, по&nbsp;решению суда от&nbsp;21.03.2022 признана
            экстремистской организацией, ее&nbsp;деятельность на&nbsp;территории
            России запрещена.
          </p>
        </Container>
      </div>
    </footer>
  );
};
