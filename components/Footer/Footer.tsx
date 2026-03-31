import { Container } from "@/shared/components/Container/Container";
import { FooterSocialLink } from "@/shared/components/FooterSocialLink/FooterSocialLink";
import styles from "./Footer.module.css";
import { TextSplitSection } from "@/shared/components/TextSplitSection/TextSplitSection";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <TextSplitSection
        heading="контакты"
        title="интерьер рождается"
        accent=" в&nbsp;диалоге"
        className={styles.container}
      >
        <>
          <p>Санкт-Петербург</p>
          <a href="#" className={styles.mail}>
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
          <div className={styles.info}>
            <p>© 2026 Suvorova Interiors. Весь материал на сайте авторский.</p>
            <p>© 2026 Suvorova Interiors</p>
          </div>
          <p className={styles.disclaimer}>
            *Компания Meta Platforms Inc., владеющая социальными сетями Facebook
            и Instagram, по решению суда от 21.03.2022 признана экстремистской
            организацией, ее деятельность на территории России запрещена.
          </p>
        </Container>
      </div>
    </footer>
  );
};
