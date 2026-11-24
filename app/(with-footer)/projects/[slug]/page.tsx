import { projects } from "@/components/sections/projects/ProjectsList/projectsData";
import { ProjectGallery } from "@/components/sections/projects/ProjectGallery/ProjectGallery";
import { Container } from "@/components/ui/Container/Container";

import styles from "./page.module.css";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  return (
    <main>
      <section className={styles.intro}>
        <Container>
          <h1 className={styles.title}>{project?.title}</h1>
          <div>
            <p>Тип: {project?.type}</p>
            <p>Площадь: {project?.area}</p>
            <p>Локация: {project?.location}</p>
          </div>
        </Container>
      </section>
      <section className={styles.gallery}>
        <Container>
          <ProjectGallery images={project?.gallery ?? []} />
        </Container>
      </section>
    </main>
  );
}
