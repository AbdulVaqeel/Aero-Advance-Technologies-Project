import { useState, useEffect, useRef, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

interface UseTypingEffectOptions {
  text: string;
  speed?: number;
  triggerOnce?: boolean;
  threshold?: number;
  typeByWord?: boolean;
}

export const useTypingEffect = ({
  text,
  speed = 35,
  triggerOnce = false,
  threshold = 0.25,
  typeByWord = false,
}: UseTypingEffectOptions) => {
  const [displayedText, setDisplayedText] = useState('');
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const indexRef = useRef<number>(0);

  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  const getTextParts = useCallback(() => {
    if (typeByWord) {
      return text.split(' ').map((word, index, array) =>
        index === array.length - 1 ? word : `${word} `
      );
    }

    return Array.from(text);
  }, [text, typeByWord]);

  const clearTypingInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startTyping = useCallback(() => {
    clearTypingInterval();

    const textParts = getTextParts();

    setDisplayedText('');
    indexRef.current = 0;

    intervalRef.current = setInterval(() => {
      if (indexRef.current < textParts.length) {
        const currentPart = textParts[indexRef.current];

        setDisplayedText((prev) => prev + currentPart);
        indexRef.current += 1;
      } else {
        clearTypingInterval();
      }
    }, speed);
  }, [clearTypingInterval, getTextParts, speed]);

  useEffect(() => {
    if (inView && text) {
      startTyping();
    } else {
      clearTypingInterval();
      setDisplayedText('');
      indexRef.current = 0;
    }

    return () => {
      clearTypingInterval();
    };
  }, [inView, text, startTyping, clearTypingInterval]);

  return { ref, displayedText, inView };
};