"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { BurgerButton } from "@/components/BurgerButton/BurgerButton";
import { SideMenu } from "@/components/SideMenu/SideMenu";
import { Container } from "@/shared/components/Container/Container";

import styles from "./Header.module.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const burgerRef = useRef<HTMLButtonElement | null>(null);
  const headerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const header = headerRef.current;

    if (!header) return;

    const headerHeight = header.offsetHeight;

    document.documentElement.style.setProperty(
      " --header-height",
      `${headerHeight}`,
    );

    const handleScroll = () => {
      setIsScrolled(window.scrollY >= headerHeight);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header ref={headerRef} className={`${styles.header} ${
    isScrolled ? styles.headerScrolled : ""
  }`}>
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
