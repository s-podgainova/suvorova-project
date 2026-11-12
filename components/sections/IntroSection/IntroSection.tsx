import { IntroLayout } from "@/components/ui/IntroLayout/IntroLayout";

import introPhoto from "@/public/images/hero/hero.jpg";

export const IntroSection = () => (
  <IntroLayout
    photo={introPhoto}
    alt=""
    priority
    eyebrow="Дизайн жилых пространств"
    title={
      <>
        Хороший интерьер рождается в&nbsp;диалоге&nbsp;&mdash;
        из&nbsp;внимания к&nbsp;человеку и&nbsp;любви к&nbsp;красоте
      </>
    }
    description={
      <>
        Мне важно, чтобы за&nbsp;внешней гармонией каждого пространства
        стояли продуманные решения, а&nbsp;за&nbsp;его функциональностью
        не&nbsp;терялись атмосфера и&nbsp;индивидуальность.
      </>
    }
    href="/about"
    linkLabel="Подробнее обо мне"
  />
);
