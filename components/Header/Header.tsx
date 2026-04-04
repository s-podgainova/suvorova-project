"use client";

import { Container } from "@/shared/components/Container/Container";
import { BurgerButton } from "../BurgerButton/BurgerButton";
import { useRef, useState } from "react";
import { SideMenu } from "../SideMenu/SideMenu";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const burgerRef = useRef<HTMLButtonElement | null>(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <Container>
          <div className={styles.inner}>
            <Link href="/" className={styles.logo} aria-label="На главную">
              <Image
                src="/images/LogoHeader.svg"
                alt="Логоти Suvorova Interior"
                width={250}
                height={59}
              />
            </Link>
            <BurgerButton
              isOpen={isOpen}
              onClick={toggleMenu}
              burgerRef={burgerRef}
            />
          </div>
        </Container>
      </header>
      <SideMenu isOpen={isOpen} onClose={closeMenu} burgerRef={burgerRef} />
    </>
  );
};
