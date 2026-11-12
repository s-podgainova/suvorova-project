import { IntroLayout } from "@/components/ui/IntroLayout/IntroLayout";

import servicesPhoto from "@/public/images/services/services.jpg";

export const ServicesIntroSection = () => (
  <IntroLayout
    photo={servicesPhoto}
    alt="Services"
    eyebrow="Услуги · Стоимость · Этапы работы"
    title={<>Каждой идее&nbsp;&mdash; своё воплощение</>}
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    href="/contacts"
    linkLabel="Контакты"
    reversed
  />
);
