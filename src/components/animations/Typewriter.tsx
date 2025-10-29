import React, { useState, useEffect, useRef } from 'react';
import { BaseAnimationProps } from '../../types';

interface TypewriterProps extends Omit<BaseAnimationProps, 'animation'> {
  showCursor?: boolean;
  cursorChar?: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  children,
  duration = 1000,
  delay = 0,
  stagger = 50,
  className = '',
  style = {},
  onComplete,
  repeat = false,
  reverse = false,
  showCursor = true,
  cursorChar = '|',
}) => {
  const text = typeof children === 'string' ? children : String(children);
  const [displayedText, setDisplayedText] = useState('');
  const [showCursorBlink, setShowCursorBlink] = useState(true);
  const timeoutRef = useRef<number>();
  const cursorIntervalRef = useRef<number>();

  useEffect(() => {
    let currentIndex = 0;
    const chars = text.split('');
    const totalChars = chars.length;

    // Calculate delay between characters
    const charDelay = stagger || duration / totalChars;

    const typeNextChar = () => {
      if (currentIndex < totalChars) {
        setDisplayedText(reverse ? text.substring(totalChars - currentIndex - 1) : text.substring(0, currentIndex + 1));
        currentIndex++;
        timeoutRef.current = setTimeout(typeNextChar, charDelay);
      } else {
        // Animation complete
        onComplete?.();

        if (repeat) {
          // Reset and repeat
          const repeatDelay = typeof repeat === 'number' ? 1000 : 2000;
          timeoutRef.current = setTimeout(() => {
            currentIndex = 0;
            setDisplayedText('');
            typeNextChar();
          }, repeatDelay);
        }
      }
    };

    // Start typing after delay
    timeoutRef.current = setTimeout(typeNextChar, delay);

    // Cursor blink effect
    if (showCursor) {
      cursorIntervalRef.current = setInterval(() => {
        setShowCursorBlink((prev) => !prev);
      }, 530);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (cursorIntervalRef.current) {
        clearInterval(cursorIntervalRef.current);
      }
    };
  }, [text, duration, delay, stagger, onComplete, repeat, reverse, showCursor]);

  const isComplete = displayedText.length === text.length;

  return (
    <span className={className} style={style}>
      {displayedText}
      {showCursor && !isComplete && (
        <span
          style={{
            opacity: showCursorBlink ? 1 : 0,
            transition: 'opacity 0.1s',
          }}
        >
          {cursorChar}
        </span>
      )}
    </span>
  );
};
