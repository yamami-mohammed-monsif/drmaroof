// src/hooks/useOnScreen.ts
import { useState, useEffect, useRef } from "react";

const useOnScreen = (options?: IntersectionObserverInit) => {
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasBeenVisible) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasBeenVisible(true);
        observer.disconnect();
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasBeenVisible, options]);

  return [ref, hasBeenVisible] as const;
};

export default useOnScreen;
