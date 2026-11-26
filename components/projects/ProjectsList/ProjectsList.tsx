import { ProjectCard } from "@/components/projects/ProjectCard/ProjectCard";

import styles from "./ProjectsList.module.css";

import { Project } from "@/types/project";


type ProjectsListProps = {
  projects: Project[];
  variant: "home" | "catalog";
}

export const ProjectsList = ({ projects, variant }: ProjectsListProps) => {
  return (
    <ul className={`${styles.projectsList} ${variant === "catalog" ? styles.catalog : ""}`}>
      {projects.map((project) => (
        <li key={project.slug}>
          <ProjectCard {...project} variant={variant} />
        </li>
      ))}
    </ul>
  );
};
