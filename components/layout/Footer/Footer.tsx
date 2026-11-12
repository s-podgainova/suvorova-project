import { Container } from "@/components/ui/Container/Container";

import { ContactsBlock } from "./ContactsBlock";

import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ContactsBlock />
      <div className={styles.bottom}>
        <Container>
          <p className={styles.copyright}>
            &copy;&nbsp;2026 Suvorova Interiors. Весь материал на&nbsp;сайте
            авторский
          </p>
          <p className={styles.disclaimer}>
            *Компания Meta Platforms Inc., владеющая социальными сетями Facebook
            и&nbsp;Instagram, по&nbsp;решению суда от&nbsp;21.03.2022 признана
            экстремистской организацией, ее деятельность на&nbsp;территории
            России запрещена.
          </p>
        </Container>
      </div>
    </footer>
  );
};
