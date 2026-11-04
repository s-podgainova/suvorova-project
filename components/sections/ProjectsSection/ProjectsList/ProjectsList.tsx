import { ProjectCard } from "@/components/sections/ProjectsSection/ProjectCard/ProjectCard";

import type { Project } from "@/types/project";

import styles from "./ProjectsList.module.css";

const projects: Project[] = [
  {
    slug: "mistola-hills",
    type: "Квартира",
    title: "ЖК «Мистола Хилз»",
    image: "/images/projects/mistola.webp",
    imageAlt: "ЖК Мистола Хилз",
  },
  {
    slug: "glorax-vasileostrovsky",
    type: "Розовая квартира",
    title: "ЖК «GloraX Василеостровский»",
    image: "/images/projects/glora1.webp",
    imageAlt: "ЖК GloraX Василеостровский",
  },
  {
    slug: "composers-street",
    type: "Спальня",
    title: "Улица Композиторов",
    image: "/images/projects/composer.webp",
    imageAlt: "Улица Композиторов",
  },
  {
    slug: "seaside-promenade",
    type: "Квартира",
    title: "ЖК «Морская Набережная»",
    image: "/images/projects/marine.jpg",
    imageAlt: "ЖК Морская Набережная",
  },
];

export const ProjectsList = () => {
  return (
    <ul className={styles.projectsList}>
      {projects.map((project) => (
        <li key={project.slug}>
          <ProjectCard {...project} />
        </li>
      ))}
    </ul>
  );
};
