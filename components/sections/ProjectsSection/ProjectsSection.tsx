import { ProjectsList } from "@/components/projects/ProjectsList/ProjectsList";
import { ButtonLink } from "@/components/ui/ButtonLink/ButtonLink";
import { Container } from "@/components/ui/Container/Container";
import { TextSplitSection } from "@/components/ui/TextSplitSection/TextSplitSection";
import { projects } from "@/data/projects/projectsData";

import styles from "./ProjectsSection.module.css";
import { Project } from "@/types/project";

export const ProjectsSection = () => {
  const featuredProjects = projects
    .filter((project: Project) => project.featureOrder !== undefined)
    .sort((a, b) => a.featureOrder! - b.featureOrder!)
    .slice(0, 4);

  return (
    <section>
      <Container>
        <TextSplitSection heading="Проекты" />
        <ProjectsList projects={featuredProjects} variant="home" />
        <div className={styles.actions}>
          <ButtonLink href="/projects">Все проекты</ButtonLink>
        </div>
      </Container>
    </section>
  );
};
