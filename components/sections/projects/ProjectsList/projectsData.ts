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
    area: "97 м²",
    location: "Санкт-Петербург",
    image: mistolaPhoto,
    imageAlt: "ЖК Мистола Хилз",
    gallery: [{ src: mistolaPhoto }, { src: gloraPhoto}, { src: composerPhoto }],
  },
  {
    slug: "glorax-vasileostrovsky",
    type: "Розовая квартира",
    title: "ЖК «GloraX Василеостровский»",
    area: "0 м²",
    location: "0",
    image: gloraPhoto,
    imageAlt: "ЖК GloraX Василеостровский",
    gallery: [{ src: gloraPhoto }],
  },
  {
    slug: "composers-street",
    type: "Спальня",
    title: "Улица Композиторов",
    area: "26 м²",
    location: "Санкт-Петербург",
    image: composerPhoto,
    imageAlt: "Улица Композиторов",
    gallery: [{ src: composerPhoto }],
  },
  {
    slug: "seaside-promenade",
    type: "Квартира",
    title: "ЖК «Морская Набережная»",
    area: "67 м²",
    location: "Санкт-Петербург",
    image: marinePhoto,
    imageAlt: "ЖК Морская Набережная",
    gallery: [{ src: marinePhoto }],
  },
    {
    slug: "glorax",
    type: "Квартира",
    title: "ЖК GloraX",
    area: "73 м²",
    location: "Санкт-Петербург",
    image: marinePhoto,
    imageAlt: "ЖК GloraX",
    gallery: [{ src: marinePhoto }],
  },
];
