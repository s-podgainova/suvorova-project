import { useSyncExternalStore } from "react";

const REDUCED_MOTION_QUERY =
  "(prefers-reduced-motion: reduce)";

const subscribe = (callback: () => void) => {
  const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);

  mediaQuery.addEventListener("change", callback);

  return () => {
    mediaQuery.removeEventListener("change", callback);
  };
};

const getSnapshot = () => {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
};

const getServerSnapshot = () => {
  return false;
};

export const usePrefersReducedMotion = () => {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
};