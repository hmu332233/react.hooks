import React, { useState, useEffect, useCallback } from 'react';

function useTimer(initSecond = 0) {
  const [isRunning, setIsRunning] = useState(false);
  const [second, setSecond] = useState(initSecond);

  const start = useCallback(() => setIsRunning(true), []);
  const stop = useCallback(() => setIsRunning(false), []);

  useEffect(() => {
    let timerId;
    if (isRunning) {
      timerId = setInterval(() => {
        setSecond(second => second - 1);
      }, 1000);
    } else {
      clearInterval(timerId);
    }
    return () => clearInterval(timerId);
  }, [isRunning]);

  return {
    second,
    start,
    stop
  };
}