import { useRef } from 'react';

const useFullscreen = callback => {
  const element = useRef(null);
  const runCallback = isFull => {
    if (callback && typeof callback === 'function') {
     callback(isFull); 
    }
  }
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen(); // 호환성 처리 해줘야 할 수도 있음
      runCallback(true);
    }
  };
  const exitFull = () => {
    document.exitFullscreen(); // 호환성 처리 해줘야 할 수도 있음
    runCallback(false);
  };
  return { element, triggerFull, exitFull };
};

export default useFullscreen;