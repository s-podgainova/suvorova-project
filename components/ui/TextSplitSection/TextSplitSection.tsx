import { Children, ReactNode } from "react";

import styles from "./TextSplitSection.module.css";

type TextSplitSectionProps = {
  heading: string;
  headingAs?: "h1" | "h2";
  title?: string;
  accent?: string;
  text?: string;
  children?: ReactNode;
  className?: string;
};

export const TextSplitSection = ({
  heading,
  headingAs: Heading = "h2",
  accent,
  title,
  text,
  children,
  className,
}: TextSplitSectionProps) => {
  const hasHeading = Boolean(heading.trim());
  const hasTitle = Boolean(title?.trim());
  const hasAccent = Boolean(accent?.trim());
  const hasText = Boolean(text?.trim());
  const hasChildren = Children.toArray(children).some(
    (child) => typeof child !== "string" || Boolean(child.trim()),
  );
  const hasContent = hasTitle || hasAccent || hasText || hasChildren;

  if (!hasHeading && !hasContent) {
    return null;
  }

  return (
    <div className={`${styles.wrapper} ${className ?? ""}`}>
      {hasHeading && <Heading className={styles.heading}>{heading}</Heading>}
      {hasContent && (
        <div className={styles.content}>
          {(hasTitle || hasAccent) && (
            <p className={styles.title}>
              {hasTitle && title}
              {hasAccent && <span className={styles.accent}>{accent}</span>}
            </p>
          )}
          {hasText && <p className={styles.text}>{text}</p>}
          {hasChildren && children}
        </div>
      )}
    </div>
  );
};
