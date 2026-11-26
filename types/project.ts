import type { StaticImageData } from "next/image";

export type Project = {
  slug: string;
  type: string;
  title: string;
  featureOrder?: number;
  area: string;
  location: string;
  cover: StaticImageData | string;
  coverAlt: string;
  gallery: (
    | { src: StaticImageData; alt?: string }
    | { src: string; width: number; height: number; alt?: string }
  )[];
};
