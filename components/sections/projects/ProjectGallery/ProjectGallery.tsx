"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

import type { Project } from "@/types/project";

import styles from "./ProjectGallery.module.css";

type ProjectGalleryProps = {
  images: Project["gallery"];
};

const arrowSvg = `
  <svg aria-hidden="true" class="pswp__icn" viewBox="0 0 24 24" width="24" height="24">
    <path d="M15 6L9 12L15 18" fill="none" stroke="currentColor" stroke-width="1.5"
      stroke-linecap="round" stroke-linejoin="round" />
  </svg>
`;

const closeSvg = `
  <svg aria-hidden="true" class="pswp__icn" viewBox="0 0 24 24" width="24" height="24">
    <path d="M5 5L19 19M19 5L5 19" fill="none" stroke="currentColor" stroke-width="1.5"
      stroke-linecap="round" />
  </svg>
`;

export const ProjectGallery = ({ images }: ProjectGalleryProps) => {
  const galleryRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const lightbox = new PhotoSwipeLightbox({
      gallery,
      children: "a",
      pswpModule: () => import("photoswipe"),
      mainClass: "project-gallery-lightbox",
      bgOpacity: 1,
      arrowPrevSVG: arrowSvg,
      arrowNextSVG: arrowSvg,
      closeSVG: closeSvg,
    });

    lightbox.init();

    return () => lightbox.destroy();
  }, []);

  return (
    <ul ref={galleryRef} className={styles.grid}>
      {images.map((photo, index) => (
        <li key={index}>
          <a
            className={styles.thumbnail}
            href={photo.src.src}
            aria-label={`Открыть фотографию ${index + 1}`}
            data-pswp-src={photo.src.src}
            data-pswp-width={photo.src.width}
            data-pswp-height={photo.src.height}
          >
            <Image
              className={styles.image}
              src={photo.src}
              alt={photo.alt ?? ""}
              fill
              sizes="(max-width: 767px) calc((90vw - 20px) / 2), calc((90vw - 40px) / 3)"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};
