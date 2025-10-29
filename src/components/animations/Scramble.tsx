import React, { useState, useEffect, useRef } from 'react';
import { BaseAnimationProps } from '../../types';
import { getRandomCharacter } from '../../utils/text';

export const Scramble: React.FC<Omit<BaseAnimationProps, 'animation'>> = ({
  children,
  duration = 1000,
  delay = 0,
  className = '',
  style = {},
  onComplete,
}) => {
  const targetText = typeof children === 'string' ? children : String(children);
  const [displayedText, setDisplayedText] = useState(targetText.replace(/./g, () => getRandomCharacter()));
  const animationFrameRef = useRef<number>();
  const startTimeRef = useRef<number>();

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Gradually reveal correct characters
      const newText = targetText
        .split('')
        .map((char, index) => {
          const charProgress = (index + 1) / targetText.length;
          if (progress >= charProgress) {
            return char;
          }
          return char === ' ' ? ' ' : getRandomCharacter();
        })
        .join('');

      setDisplayedText(newText);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        onComplete?.();
      }
    };

    const timeoutId = setTimeout(() => {
      animationFrameRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [targetText, duration, delay, onComplete]);

  return (
    <span className={className} style={style}>
      {displayedText}
    </span>
  );
};
