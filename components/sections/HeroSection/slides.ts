import type { StaticImageData } from "next/image";

import heroProject01 from "@/public/images/hero/heroProject01.webp";
import heroProject02 from "@/public/images/hero/heroProject02.webp";
import heroProject03 from "@/public/images/hero/heroProject03.webp";

type Slide = {
  image: StaticImageData;
  title: string;
  description: string;
  link: string;
};

export const slides: Slide[] = [
  {
    image: heroProject01,
    title: "Место, куда хочется возвращаться",
    description:
      "Минималистичная архитектура, продуманная планировка и\u00A0натуральные материалы создают пространство, в\u00A0котором комфорт становится частью повседневной жизни",
    link: "#",
  },
  {
    image: heroProject02,
    title: "Пространство, созданное для жизни",
    description:
      "Элегантный интерьер, выразительные детали и\u00A0безупречные пропорции объединяются в\u00A0проекте, где эстетика сочетается с\u00A0высоким уровнем комфорта",
    link: "#",
  },
  {
    image: heroProject03,
    title: "Современная архитектура в\u00A0гармонии с\u00A0природой",
    description:
      "Открытые пространства, панорамное остекление и\u00A0естественное окружение формируют атмосферу спокойствия, света и\u00A0единения с\u00A0природой",
    link: "#",
  },
];
