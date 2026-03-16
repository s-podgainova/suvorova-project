import { usePathname } from "next/navigation";
import { AnimatedLink } from "@/shared/AnimatedLink/AnimatedLink";
import { menuItems } from "./menuData";
import styles from "./SideMenu.module.css";

type SideMenuProps = {
  isOpen: boolean;
};

export const SideMenu = ({ isOpen }: SideMenuProps) => {
  const pathName = usePathname();
  return (
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
  );
};
