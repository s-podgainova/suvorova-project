import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/types/project";

import styles from "./ProjectCard.module.css";

type ProjectCardProps = Project;

export const ProjectCard = ({
  slug,
  type,
  title,
  image,
  imageAlt,
}: ProjectCardProps) => {
  return (
    <Link className={styles.card} href={`/projects/${slug}`}>
      <div className={styles.description}>
        <p className={styles.type}>{type}</p>
        <h3 className={styles.title}>{title}</h3>
      </div>

      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          className={styles.image}          
          sizes="
  (max-width: 768px) calc(80vw - 19.2px),
  (max-width: 1140px) calc(45vw - 10.8px),
  502px"
        />
      </div>
    </Link>
  );
};
