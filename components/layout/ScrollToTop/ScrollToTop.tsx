"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import styles from "./ScrollToTop.module.css";

export default function ScrollToTop() {
  const pathname = usePathname();

  return <ScrollToTopInstance key={pathname} />;
}

const ScrollToTopInstance = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pathRef = useRef<SVGPathElement>(null);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const pathLength = path.getTotalLength();

    path.style.strokeDasharray = `${pathLength}`;
    path.style.strokeDashoffset = `${pathLength}`;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const startScroll = window.innerHeight  * 0.3;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const availableScroll = maxScroll - startScroll;

      setIsVisible(availableScroll > 0 && scrollTop > startScroll);
      const progress =
        availableScroll > 0 ? (scrollTop - startScroll) / availableScroll : 0;
      const normalizedProgress = Math.min(1, Math.max(0, progress));
      const offset = pathLength * (1 - normalizedProgress);

      path.style.strokeDashoffset = `${offset}`;
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress);
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <button
      className={`${styles.progressWrap} ${isVisible ? styles.active : ""}`}
      onClick={scrollToTop}
      type="button"
      aria-label="Прокрутить страницу наверх"
    >
      <svg
        className={styles.progressCircle}
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
        aria-hidden="true"
      >
        <path ref={pathRef} d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
      <svg className={styles.arrow} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 15l6-6 6 6" />
      </svg>
    </button>
  );
};
