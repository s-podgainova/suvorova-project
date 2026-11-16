import composerPhoto from "@/public/images/projects/composer.webp";
import gloraPhoto from "@/public/images/projects/glora1.webp";
import marinePhoto from "@/public/images/projects/marine.jpg";
import mistolaPhoto from "@/public/images/projects/mistola.webp";
import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "mistola-hills",
    type: "Квартира",
    title: "ЖК «Мистола Хилз»",
    image: mistolaPhoto,
    imageAlt: "ЖК Мистола Хилз",
  },
  {
    slug: "glorax-vasileostrovsky",
    type: "Розовая квартира",
    title: "ЖК «GloraX Василеостровский»",
    image: gloraPhoto,
    imageAlt: "ЖК GloraX Василеостровский",
  },
  {
    slug: "composers-street",
    type: "Спальня",
    title: "Улица Композиторов",
    image: composerPhoto,
    imageAlt: "Улица Композиторов",
  },
  {
    slug: "seaside-promenade",
    type: "Квартира",
    title: "ЖК «Морская Набережная»",
    image: marinePhoto,
    imageAlt: "ЖК Морская Набережная",
  },
];
