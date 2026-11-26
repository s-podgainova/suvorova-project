import composerPhoto from "@/public/images/projects/composer.webp";
import gloraPhoto from "@/public/images/projects/glora1.webp";
import marinePhoto from "@/public/images/projects/marine.jpg";
import mistolaPhotoJPG from "@/public/images/projects/mistola.jpg";
import { Project } from "@/types/project";

import { cover as mistolaCover, gallery as mistolaGallery } from "./mistolaImages";

export const projects: Project[] = [
  {
    slug: "mistola-hills",
    type: "Квартира",
    title: "ЖК «Мистола Хилз»",
    featureOrder: 1,
    area: "97 м²",
    location: "Санкт-Петербург",
    cover: mistolaCover,
    coverAlt: "ЖК Мистола Хилз",
    gallery: mistolaGallery,
  },
  {
    slug: "glorax-vasileostrovsky",
    type: "Розовая квартира",
    title: "ЖК «GloraX Василеостровский»",
    featureOrder: 2,
    area: "39 м²",
    location: "Санкт-Петербург",
    cover: mistolaPhotoJPG,
    coverAlt: "ЖК GloraX Василеостровский",
    gallery: [{ src: gloraPhoto }],
  },
  {
    slug: "composers-street",
    type: "Спальня",
    title: "Улица Композиторов",
    featureOrder: 3,
    area: "26 м²",
    location: "Санкт-Петербург",
    cover: composerPhoto,
    coverAlt: "Улица Композиторов",
    gallery: [{ src: composerPhoto }],
  },
  {
    slug: "seaside-promenade",
    type: "Квартира",
    title: "ЖК «Морская Набережная»",
    featureOrder: 4,
    area: "67 м²",
    location: "Санкт-Петербург",
    cover: marinePhoto,
    coverAlt: "ЖК Морская Набережная",
    gallery: [{ src: marinePhoto }],
  },
    {
    slug: "glorax",
    type: "Квартира",
    title: "ЖК GloraX",
    area: "73 м²",
    location: "Санкт-Петербург",
    cover: marinePhoto,
    coverAlt: "ЖК GloraX",
    gallery: [{ src: marinePhoto }],
  },
];
