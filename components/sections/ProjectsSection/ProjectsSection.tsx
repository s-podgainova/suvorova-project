import { TextSplitSection } from "@/components/ui/TextSplitSection/TextSplitSection";

import { ProjectsList } from "./ProjectsList/ProjectsList";

import styles from "./ProjectsSection.module.css";

export const ProjectsSection = () => {
  return (
    <section className={styles.projectsSection}>
      <TextSplitSection
        heading="Проекты"        
      />
      <ProjectsList />
    </section>
  );
};
