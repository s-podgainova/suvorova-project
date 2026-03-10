import { AnimatedLink } from "@/shared/AnimatedLink/AnimatedLink";
import { menuItems } from "./menuData";
import styles from "./SideMenu.module.css";

type SideMenuProps = {
  isOpen: boolean;
};

export const SideMenu = ({ isOpen }: SideMenuProps) => {
  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
      <nav aria-label="Main navigation">
        <ul className={styles.list}>
          {menuItems.map((i) => (
            <li key={i.href}>
              <AnimatedLink href={i.href}>{i.label}</AnimatedLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
