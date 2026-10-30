import type { ComponentProps } from "react";
import Link from "next/link";

import styles from "./ButtonLink.module.css";

export const ButtonLink = ({
  className,
  ...props
}: ComponentProps<typeof Link>) => (
  <Link className={`${styles.link} ${className ?? ""}`} {...props} />
);
