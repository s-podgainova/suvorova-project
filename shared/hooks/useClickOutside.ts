import { RefObject, useEffect } from "react";

type UseClickOutsideParams = {
  ref: RefObject<HTMLElement | null>;
  onOutsideClick: () => void;
  enabled?: boolean;
  ignoreRefs?: Array<RefObject<HTMLElement | null>>;
};

export const useClickOutside = ({
  ref,
  onOutsideClick,
  enabled = true,
  ignoreRefs = [],
}: UseClickOutsideParams) => {
  useEffect(() => {
    if (!enabled) return;

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;

      const clickedInsideTarget = ref.current?.contains(target);
      if (clickedInsideTarget) return;

      const clickedInsideIgnored = ignoreRefs.some((ignoreRef) =>
        ignoreRef.current?.contains(target),
      );
      if (clickedInsideIgnored) return;

      onOutsideClick();
    };

    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, [enabled, onOutsideClick, ref, ignoreRefs]);
};
