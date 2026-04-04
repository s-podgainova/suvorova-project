import { ReactNode } from "react";
import { Container } from "../Container/Container";
import styles from "./TextSplitSection.module.css";

type TextSplitSectionProps = {
  heading: string;
  title?: string;
  accent?: string;
  text?: string;
  children?: ReactNode;
  className?: string;
};

export const TextSplitSection = ({
  heading,
  accent,
  title,
  text,
  children,
  className,
}: TextSplitSectionProps) => {
  return (
    <Container>
      <div className={`${styles.wrapper} ${className ?? ""}`}>
        <h2 className={styles.heading}>{heading}</h2>
        <div className={styles.content}>
          <p className={styles.title}>
            {title}
            <span className={styles.accent}>{accent}</span>
          </p>
          <p className={styles.text}>{text}</p>
          {children}
        </div>
      </div>
    </Container>
  );
};
