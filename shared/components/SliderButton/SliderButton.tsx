"use client";

import { ArrowIcon } from "@/shared/icons/ArrowIcon";
import styles from "./SliderButton.module.css";

export type SliderButtonProps = {
  direction: "prev" | "next";
  variant: "light" | "dark";
  onClick?: () => void;
  className?: string;
};

export const SliderButton = ({
  direction,
  variant,
  onClick,
  className = "",
}: SliderButtonProps) => {
  const label = direction === "prev" ? "Предыдущий слайд" : "Следующий слайд";

  return (
    <button
      type="button"
      className={`${styles.button} ${styles[variant]} ${direction === "prev" ? styles.prev : ""} ${className}`.trim()}
      onClick={onClick}
      aria-label={label}
    >
      <ArrowIcon />
    </button>
  );
};
