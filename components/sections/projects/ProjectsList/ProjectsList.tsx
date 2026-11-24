import { ProjectCard } from "@/components/sections/projects/ProjectCard/ProjectCard";

import { projects } from "./projectsData";

import styles from "./ProjectsList.module.css";

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
