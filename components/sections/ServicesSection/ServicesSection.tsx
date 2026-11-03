import { Container } from "@/components/ui/Container/Container";

import { servicesData } from "./servicesData";

import styles from "./ServicesSection.module.css";

export const ServicesSection = () => {
  return (
    <section aria-labelledby="services-title">
      <Container>
        <h2 id="services-title" className={styles.heading}>
          Основные услуги
        </h2>
        <ol className={styles.list}>
          {servicesData.map((service) => (
            <li key={service.id} className={styles.card}>
              <div className={styles.cardHeading}>
                <h3 className={styles.title}>{service.title}</h3>
              </div>
              <p className={styles.description}>{service.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
};
