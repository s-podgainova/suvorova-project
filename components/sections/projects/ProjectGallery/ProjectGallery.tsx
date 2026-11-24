"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { SliderButton } from "@/components/ui/SliderButton/SliderButton";
import type { Project } from "@/types/project";

import styles from "./ProjectGallery.module.css";

type ProjectGalleryProps = {
  images: Project["gallery"];
};

export const ProjectGallery = ({ images }: ProjectGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pointerStartRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (activeIndex === null) {
      if (dialog.open) dialog.close();
    } else if (!dialog.open) {
      dialog.showModal();
    }
  }, [activeIndex]);

  const activePhoto = activeIndex === null ? null : images[activeIndex];

  return (
    <>
      <ul className={styles.grid}>
        {images.map((photo, index) => (
          <li key={index}>
            <button
              className={styles.thumbnail}
              type="button"
              aria-label={`Открыть фотографию ${index + 1}`}
              onClick={() => setActiveIndex(index)}
            >
              <Image
                className={styles.image}
                src={photo.src}
                alt={photo.alt ?? ""}
                sizes="(max-width: 767px) calc((90vw - 20px) / 2), calc((90vw - 40px) / 3)"
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className={styles.lightbox}
        aria-label="Просмотр фотографий проекта"
        onClose={() => setActiveIndex(null)}
      >
        <button
          className={styles.close}
          type="button"
          aria-label="Закрыть просмотр"
          onClick={() => dialogRef.current?.close()}
        >
          <svg
            className={styles.closeIcon}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M5 5 19 19M19 5 5 19"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
        {activePhoto && activeIndex !== null && (
          <div
            className={images.length > 1 ? styles.viewer : styles.singleViewer}
          >
            {images.length > 1 && (
              <SliderButton
                className={styles.arrow}
                direction="prev"
                variant="dark"
                onClick={() =>
                  setActiveIndex((activeIndex - 1 + images.length) % images.length)
                }
              />
            )}
            <Image
              className={styles.fullImage}
              src={activePhoto.src}
              alt={activePhoto.alt ?? ""}
              sizes="100vw"
              onPointerDown={(event) => {
                pointerStartRef.current = {
                  x: event.clientX,
                  y: event.clientY,
                };
              }}
              onPointerUp={(event) => {
                const start = pointerStartRef.current;
                if (start === null) return;
                pointerStartRef.current = null;

                const deltaX = event.clientX - start.x;
                const deltaY = event.clientY - start.y;
                const swipeThreshold = 50;

                if (
                  Math.abs(deltaX) > swipeThreshold &&
                  Math.abs(deltaX) > Math.abs(deltaY)
                ) {
                  if (deltaX < 0) {
                    setActiveIndex((activeIndex + 1) % images.length);
                  } else {
                    setActiveIndex(
                      (activeIndex - 1 + images.length) % images.length,
                    );
                  }
                }
              }}
              onPointerCancel={() => {
                pointerStartRef.current = null;
              }}
            />
            {images.length > 1 && (
              <SliderButton
                className={styles.arrow}
                direction="next"
                variant="dark"
                onClick={() => setActiveIndex((activeIndex + 1) % images.length)}
              />
            )}
          </div>
        )}
      </dialog>
    </>
  );
};
