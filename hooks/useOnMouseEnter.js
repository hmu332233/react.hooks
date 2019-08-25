import { useRef, useEffect } from 'react';

const useOnMouseEnter = onMouseEnter => {
  const element = useRef(null);
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseenter", onMouseEnter);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseenter", onMouseEnter);
      }
    };
  }, []);
  return element;
};

export default useOnMouseEnter;