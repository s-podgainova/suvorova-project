import { ButtonLink } from "@/components/ui/ButtonLink/ButtonLink";
import { Container } from "@/components/ui/Container/Container";
import { TextSplitSection } from "@/components/ui/TextSplitSection/TextSplitSection";

import { ProjectsList } from "./ProjectsList/ProjectsList";

import styles from "./ProjectsSection.module.css";

export const ProjectsSection = () => {
  return (
    <section>
      <Container>
        <TextSplitSection heading="Проекты" />
        <ProjectsList />
        <div className={styles.actions}>
          <ButtonLink href="/projects">Все проекты</ButtonLink>
        </div>
      </Container>
    </section>
  );
};
