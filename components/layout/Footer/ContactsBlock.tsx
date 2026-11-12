import { Container } from "@/components/ui/Container/Container";
import { SocialLink } from "@/components/ui/SocialLink/SocialLink";
import { TextSplitSection } from "@/components/ui/TextSplitSection/TextSplitSection";

import styles from "./Footer.module.css";

export const ContactsBlock = ({ headingAs = "h2" }: { headingAs?: "h1" | "h2" }) => (
  <Container>
    <TextSplitSection
      heading="контакты"
      headingAs={headingAs}
      accent="интерьер рождается в&nbsp;диалоге"
      className={styles.container}
    >
      <p>Санкт-Петербург</p>
      <a href="#" className={styles.email}>
        info@suvorova-interior.ru
      </a>
      <div>
        <SocialLink socialType="instagram" />
        <SocialLink socialType="tg" />
        <SocialLink socialType="max" />
      </div>
    </TextSplitSection>
  </Container>
);
