import type { StaticImageData } from "next/image";

export type Project = {
  slug: string;
  type: string;
  title: string;
  image: StaticImageData;
  imageAlt: string;
};
