import { usePathname } from "next/navigation";
import { AnimatedLink } from "@/shared/components/AnimatedLink/AnimatedLink";
import { menuItems } from "./menuData";
import styles from "./SideMenu.module.css";
import { useEffect } from "react";

type SideMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const SideMenu = ({ isOpen, onClose }: SideMenuProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscDown);

    return () => {
      document.removeEventListener("keydown", handleEscDown);
    };
  }, [isOpen, onClose]);

  const pathName = usePathname();
  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={onClose} />}
      <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <nav aria-label="Основная навигация" id="site-menu">
          <ul className={styles.list}>
            {menuItems.map((i) => {
              const isActive = pathName === i.href;
              return (
                <li key={i.href}>
                  <AnimatedLink href={i.href} active={isActive}>
                    {i.label}
                  </AnimatedLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};
