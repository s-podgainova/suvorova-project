import styles from "./BurgerButton.module.css";

type BurgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export const BurgerButton = ({ isOpen, onClick }: BurgerButtonProps) => {
  return (
    <button
      className={`${styles.burger} ${isOpen ? styles.open : ""}`}
      onClick={onClick}
      aria-label="Открыть меню"
      aria-expanded={isOpen}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};
