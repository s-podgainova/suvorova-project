import { RefObject } from "react";

import styles from "./BurgerButton.module.css";

type BurgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
  burgerRef: RefObject<HTMLButtonElement | null>;
};

export const BurgerButton = ({
  isOpen,
  onClick,
  burgerRef,
}: BurgerButtonProps) => {
  return (
    <button
      ref={burgerRef}
      className={`${styles.burger} ${isOpen ? styles.open : ""}`}
      onClick={onClick}
      aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
      aria-expanded={isOpen}
      aria-controls="site-menu"
    >
      <svg
        className={styles.icon}
        width="30"
        height="17"
        viewBox="0 0 30 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <line className={styles.lineTop} x1="0" y1="0.5" x2="30" y2="0.5" />
        <line className={styles.lineMiddle} x1="0" y1="7.5" x2="30" y2="7.5" />
        <line
          className={styles.lineBottom}
          x1="0"
          y1="14.5"
          x2="30"
          y2="14.5"
        />
      </svg>
    </button>
  );
};
