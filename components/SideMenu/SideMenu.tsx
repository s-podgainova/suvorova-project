import { usePathname } from "next/navigation";
import { AnimatedLink } from "@/shared/components/AnimatedLink/AnimatedLink";
import { menuItems } from "./menuData";
import styles from "./SideMenu.module.css";
import { RefObject, useEffect, useRef } from "react";
import { useClickOutside } from "@/shared/hooks/useClickOutside";

type SideMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  burgerRef: RefObject<HTMLButtonElement | null>;
};

export const SideMenu = ({ isOpen, onClose, burgerRef }: SideMenuProps) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  useClickOutside({
    ref: menuRef,
    onOutsideClick: onClose,
    enabled: isOpen,
    ignoreRefs: [burgerRef],
  });

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
    <div
      ref={menuRef}
      className={`${styles.menu} ${isOpen ? styles.open : ""}`}
    >
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
  );
};
