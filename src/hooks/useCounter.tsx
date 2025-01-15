import { useState, useEffect, useCallback } from 'react';

interface UseCounterProps {
  end: number;
  duration?: number;
  startOnView?: boolean;
}

export const useCounter = ({ end, duration = 2000, startOnView = true }: UseCounterProps) => {
  const [count, setCount] = useState(0);
  const [shouldStart, setShouldStart] = useState(startOnView);

  const startCounting = useCallback(() => {
    setShouldStart(true);
  }, []);

  useEffect(() => {
    if (!shouldStart) return;

    const steps = 60;
    const stepDuration = duration / steps;
    const increment = end / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [end, duration, shouldStart]);

  return { count, startCounting };
};