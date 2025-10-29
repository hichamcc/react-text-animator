import React, { useState, useEffect, useRef } from 'react';
import { MorphAnimationProps } from '../../types';

export const Morph: React.FC<Omit<MorphAnimationProps, 'animation'>> = ({
  children,
  morphTexts,
  morphInterval = 3000,
  duration = 800,
  delay = 0,
  className = '',
  style = {},
}) => {
  const defaultText = typeof children === 'string' ? children : String(children);
  const texts = morphTexts || [defaultText];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<number>();
  const intervalRef = useRef<number>();

  useEffect(() => {
    if (texts.length <= 1) return;

    const startMorphing = () => {
      intervalRef.current = window.setInterval(() => {
        setIsTransitioning(true);

        timeoutRef.current = window.setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % texts.length);
          setIsTransitioning(false);
        }, duration / 2);
      }, morphInterval);
    };

    const delayTimeout = window.setTimeout(startMorphing, delay);

    return () => {
      clearTimeout(delayTimeout);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [texts, morphInterval, duration, delay]);

  return (
    <span
      className={className}
      style={{
        display: 'inline-block',
        opacity: isTransitioning ? 0 : 1,
        transform: isTransitioning ? 'translateY(-10px)' : 'translateY(0)',
        transition: `all ${duration / 2}ms ease-in-out`,
        ...style,
      }}
    >
      {texts[currentIndex]}
    </span>
  );
};
