import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/types/project";

import styles from "./ProjectCard.module.css";

type ProjectCardProps = Project & {
  variant: "home" | "catalog";
};

export const ProjectCard = ({
  slug,
  type,
  title,
  image,
  imageAlt,
  variant,
}: ProjectCardProps) => {
  return (
    <Link className={`${styles.card} ${variant === "catalog" ? styles.catalog : ""}`} href={`/projects/${slug}`}>
      <div className={styles.description}>
        <p className={styles.type}>{type}</p>
        <h3 className={styles.title}>{title}</h3>
      </div>

      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          placeholder="blur"
          className={styles.image}
          sizes="
  (max-width: 320px) calc(100vw - 32px),
  (max-width: 768px) 90vw,
  (max-width: 1140px) calc(45vw - 30px),
  (max-width: 1280px) calc(540px - 5vw),
  476px"
        />
      </div>
    </Link>
  );
};
