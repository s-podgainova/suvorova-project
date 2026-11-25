import { ProjectsList } from "@/components/sections/projects/ProjectsList/ProjectsList";
import { Container } from "@/components/ui/Container/Container";
import { TextSplitSection } from "@/components/ui/TextSplitSection/TextSplitSection";

import { projects } from "../ProjectsList/projectsData";

export const ProjectsListSection = () => {
  return (
    <section>
      <Container>
        <TextSplitSection />
        <ProjectsList projects={projects} variant="catalog" />
      </Container>
    </section>
  );
};
