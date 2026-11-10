import { Container } from "@/components/ui/Container/Container";
import { TextSplitSection } from "@/components/ui/TextSplitSection/TextSplitSection";

import { servicesData } from "./servicesData";

import styles from "./ServicesSection.module.css";

export const ServicesSection = () => {
  const groups = [
    { heading: "Основные услуги", services: servicesData.slice(0, -2) },
    { heading: "Дополнительные услуги", services: servicesData.slice(-2) },
  ];

  return (
    <>
      {groups.map(({ heading, services }) => (
        <section key={heading}>
          <Container>
            <TextSplitSection heading={heading} />
            <ol className={styles.list}>
              {services.map(({ Details, ...service }, index) => (
                <li key={service.id} className={styles.card}>
                  <div className={styles.name}>
                    <span className={styles.number}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className={styles.title}>{service.title}</h3>
                  </div>
                  <p className={styles.description}>{service.description}</p>
                  <div className={styles.price}>
                    <div className={styles.priceOptions}>
                      {service.prices.map(({ label, amount }) => (
                        <div key={amount ?? label} className={styles.priceOption}>
                          {amount && <p className={styles.amount}>{amount}</p>}
                          {label && <p className={styles.priceLabel}>{label}</p>}
                        </div>
                      ))}
                    </div>
                    {service.duration && (
                      <p className={styles.duration}>{service.duration}</p>
                    )}
                  </div>
                  {Details && (
                    <details className={styles.more}>
                      <summary className={styles.toggle}>
                        Подробнее{" "}
                        <span className={styles.chevron} aria-hidden="true" />
                      </summary>
                      <div className={styles.moreText}>
                        <Details />
                      </div>
                    </details>
                  )}
                </li>
              ))}
            </ol>
          </Container>
        </section>
      ))}
    </>
  );
};
