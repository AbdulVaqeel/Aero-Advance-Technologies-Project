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
    let i = 0;

    const typeNext = () => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text[i]);
        i++;
      } else {
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      }
    };

    typeNext();
    intervalRef.current = setInterval(typeNext, speed);
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
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [inView, startTyping]);

  return { ref, displayedText, inView };
};