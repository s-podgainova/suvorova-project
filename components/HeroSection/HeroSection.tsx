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

  const currentSlideNumber = String(currentSlideIndex + 1).padStart(2, "0");
  const totalSlideNumber = String(slides.length).padStart(2, "0");

  const progressPercentage = ((currentSlideIndex + 1) / slides.length) * 100;

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

  function handleFocus(event: React.FocusEvent<HTMLDivElement>) {
    const previousElement = event.relatedTarget as Node | null;

    if (!event.currentTarget.contains(previousElement)) {
      pauseSlider();
    }
  }

  function handleBlur(event: React.FocusEvent<HTMLDivElement>) {
    const nextElement = event.relatedTarget as Node | null;

    if (!event.currentTarget.contains(nextElement)) {
      resumeSlider();
    }
  }

  return (
    <section
      className={styles.hero}
      aria-roledescription="слайдер"
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
          <Link
            href={currentSlide.link}
            className={styles.projectLink}
            onFocus={pauseSlider}
            onBlur={resumeSlider}
          >
            Посмотреть
          </Link>
        </div>
        <div className={styles.navigationLine}>
          {/* Каунтер */}
          <div className={styles.counter}>
            <span className={styles.counterNumber}>{currentSlideNumber}</span>
            <div className={styles.progressTrack}>
              <div
                className={styles.progressFill}
                style={{ inlineSize: `${progressPercentage}%` }}
              ></div>
            </div>
            <span className={styles.counterNumber}>{totalSlideNumber}</span>
          </div>

          {/* Кнопки слайдера */}
          <div
            className={styles.sliderControls}
            onMouseEnter={pauseSlider}
            onMouseLeave={resumeSlider}
            onFocus={handleFocus}
            onBlur={handleBlur}
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
        </div>
      </Container>
    </section>
  );
};
