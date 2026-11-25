import type { StaticImageData } from "next/image";

export type Project = {
  slug: string;
  type: string;
  title: string;
  featureOrder?: number;
  area: string;
  location: string;
  image: StaticImageData;
  imageAlt: string;
  gallery: {
    src: StaticImageData;
    alt?: string;
  }[];
};
