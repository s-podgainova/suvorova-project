import { Container } from "@/shared/components/Container/Container";
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
        </>
      </TextSplitSection>
      <div className={styles.bottom}>
        <Container>
          <p className={styles.copyright}>
            &copy;&nbsp;2026 Suvorova Interiors. Весь материал на&nbsp;сайте
            авторский
          </p>
        </Container>
      </div>
    </footer>
  );
};
