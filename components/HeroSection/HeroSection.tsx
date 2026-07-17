"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { usePrefersReducedMotion } from "@/shared/hooks/usePrefersReducedMotion";

import { Container } from "@/shared/components/Container/Container";
import { SliderButton } from "@/shared/components/SliderButton/SliderButton";

import { slides } from "./slides";

import styles from "./HeroSection.module.css";

export const HeroSection = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isSliderPaused, setIsSliderPaused] = useState(false);
  const isPrefersReducedMotion = usePrefersReducedMotion();

  const currentSlide = slides[currentSlideIndex];

  const goToNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    if (isSliderPaused || isPrefersReducedMotion) return;
    const interval = setInterval(() => {
      goToNextSlide();
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlideIndex, isSliderPaused, isPrefersReducedMotion]);

  const goToPrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const pauseSlider = () => {
    setIsSliderPaused(true);
  };

  const resumeSlider = () => {
    setIsSliderPaused(false);
  };

  return (
    <section
      className={styles.hero}
      aria-roledescription="карусель"
      aria-label="Избранные проекты"
    >
      {slides.map((slide, index) => (
        <Image
          key={slide.title}
          src={slide.image}
          alt=""
          fill
          className={`${styles.heroImage} ${index === currentSlideIndex ? styles.active : ""}`}
          sizes="100vw"
        />
      ))}
      <Container>
        <div
          className={styles.heroContent}
          key={currentSlideIndex}
          onMouseEnter={pauseSlider}
          onMouseLeave={resumeSlider}
        >
          <h1>{currentSlide.title}</h1>
          <p className={styles.description}>{currentSlide.description}</p>
          <Link href={currentSlide.link} className={styles.projectLink}>
            Посмотреть
          </Link>
        </div>
        <div
          className={styles.sliderNavigation}
          onMouseEnter={pauseSlider}
          onMouseLeave={resumeSlider}
        >
          <SliderButton
            direction="prev"
            variant="light"
            onClick={goToPrevSlide}
          />
          <SliderButton
            direction="next"
            variant="light"
            onClick={goToNextSlide}
          />
        </div>
      </Container>
    </section>
  );
};
