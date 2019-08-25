import { useRef, useEffect } from 'react';

const useOnMouseLeave = onMouseLeave => {
  const element = useRef(null);
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseleave", onMouseLeave);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseleave", onMouseLeave);
      }
    };
  }, []);
  return element;
};

export default useOnMouseLeave;