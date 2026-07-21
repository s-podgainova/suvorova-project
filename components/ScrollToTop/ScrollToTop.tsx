"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import styles from "./ScrollToTop.module.css";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const hero = document.querySelector("[data-scroll-top-boundary]");

    if (!hero) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(!entry.isIntersecting);
    });

    observer.observe(hero);

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`${styles.progressWrap} ${isVisible ? styles.active : ""}`}
      onClick={scrollToTop}
      type="button"
      aria-label="Прокрутить страницу наверх"
    >
      ↑
    </button>
  );
}
