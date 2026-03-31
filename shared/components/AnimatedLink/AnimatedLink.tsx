"use client";

import { ComponentProps, MouseEvent, useRef } from "react";
import Link from "next/link";
import styles from "./AnimatedLink.module.css";

type AnimatedLink = ComponentProps<typeof Link> & {
  className?: string;
  active: boolean;
};

export const AnimatedLink = ({
  className = "",
  active,
  ...props
}: AnimatedLink) => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const setX = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const tolerance = 10;

    let x = e.clientX - rect.left;
    const left = 0;
    const right = rect.width;

    if (x - tolerance < left) x = left;
    if (x + tolerance > right) x = right;

    el.style.setProperty("--x", `${x}px`);
  };

  return (
    <Link
      ref={ref}
      className={`${styles.fancy} ${className} ${active ? styles.active : ""}`}
      onMouseEnter={setX}
      onMouseLeave={setX}
      {...props}
    />
  );
};
