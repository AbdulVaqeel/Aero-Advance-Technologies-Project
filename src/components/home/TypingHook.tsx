import { useState, useEffect, useRef, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

interface UseTypingEffectOptions {
  text: string;
  speed?: number;
  triggerOnce?: boolean;
  threshold?: number;
}

export const useTypingEffect = ({ 
  text, 
  speed = 35, 
  triggerOnce = false,
  threshold = 0.25 
}: UseTypingEffectOptions) => {
  const [displayedText, setDisplayedText] = useState('');
  const intervalRef = useRef<number | null>(null);
  const indexRef = useRef<number>(0);
  
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  const startTyping = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    setDisplayedText('');
    indexRef.current = 0;

    intervalRef.current = setInterval(() => {
      if (indexRef.current < text.length) {
        const currentChar = text[indexRef.current];
        setDisplayedText((prev) => prev + currentChar);
        indexRef.current++;
      } else {
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      }
    }, speed);
  }, [text, speed]);

  useEffect(() => {
    if (inView) {
      startTyping();
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setDisplayedText('');
      indexRef.current = 0;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [inView, startTyping]);

  return { ref, displayedText, inView };
};