import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";

import type { Project } from "@/types/project";

import styles from "./ProjectCard.module.css";

type ProjectCardProps = Project;

export const ProjectCard = ({
  slug,
  type,
  title,

  imageAlt,
}: ProjectCardProps) => {
  return (
    <Link className={styles.card} href={`/projects/${slug}`}>
      <div className={styles.description}>
        <p className={styles.type}>{type}</p>
        <h3 className={styles.title}>{title}</h3>
      </div>

      <ExportedImage
        src="https://storage.yandexcloud.net/suvorova-test-origin/test.jpg"
        alt={imageAlt}
        placeholder="blur"
        className={styles.image}
        width={1000}
        height={1333}
        sizes="
  (max-width: 320px) calc(100vw - 32px),
  (max-width: 768px) 90vw,
  (max-width: 1140px) calc(45vw - 30px),
  (max-width: 1280px) calc(540px - 5vw),
  476px"
      />
    </Link>
  );
};
