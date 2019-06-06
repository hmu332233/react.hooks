import { useEffect, useRef } from 'react';

function useDidUpdateEffect(func, inputs) {
  const didMountRef = useRef(false);
  useEffect(() => {
    if (didMountRef.current) {
      func();
    } else {
      didMountRef.current = true
    }
  }, inputs);
}

export default useDidUpdateEffect;