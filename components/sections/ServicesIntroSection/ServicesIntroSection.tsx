import { IntroLayout } from "@/components/ui/IntroLayout/IntroLayout";

import servicesPhoto from "@/public/images/services/services.jpg";

export const ServicesIntroSection = () => (
  <IntroLayout
    photo={servicesPhoto}
    alt="Services"
    eyebrow="Услуги · Стоимость · Этапы работы"
    title={<>Каждой идее&nbsp;&mdash; своё воплощение</>}
    description="Каждый интерьер индивидуален, как и запрос человека, для которого он создаётся. Кому-то нужна помощь в принятии отдельных решений, кому-то — профессиональное сопровождение на всех этапах. Поэтому я предлагаю разные форматы работы, исходя из ваших потребностей."
    href="/contacts"
    linkLabel="Контакты"
    reversed
  />
);
