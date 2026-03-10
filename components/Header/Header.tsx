"use client";

import { Container } from "@/shared/Container/Container";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { BurgerButton } from "../BurgerButton/BurgerButton";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo} aria-label="На главную">
            <Image
              src="/images/LogoHeader.svg"
              alt="Suvorova Interior"
              width={251}
              height={60}
            />
          </Link>
          <BurgerButton isOpen={isOpen} onClick={toggleMenu} />
        </div>
      </Container>
    </header>
  );
};
