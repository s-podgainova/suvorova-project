import { ProjectCard } from "@/components/sections/ProjectsSection/ProjectCard/ProjectCard";

import type { Project } from "@/types/project";

import styles from "./ProjectsList.module.css";

const projects: Project[] = [
  {
    slug: "project-1",
    type: "Квартира",
    title: "ЖК «Мистола Хилз»",
    image: "/images/projects/mistola.jpg",
    imageAlt: "ЖК Мистола Хилз",
  },
  {
    slug: "project-2",
    type: "Квартира",
    title: "ЖК «Морская Набережная»",
    image: "/images/projects/marine.jpg",
    imageAlt: "ЖК Морская Набережная",
  },
  {
    slug: "project-3",
    type: "Розовая квартира",
    title: "ЖК «GloraX Василеостровский»",
    image: "/images/projects/glora.webp",
    imageAlt: "ЖК GloraX Василеостровский",
  },
  {
    slug: "project-4",
    type: "Спальня",
    title: "Улица Композиторов",
    image: "/images/projects/composer.webp",
    imageAlt: "Улица Композиторов",
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
