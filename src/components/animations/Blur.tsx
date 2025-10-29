import React, { useMemo } from 'react';
import { BaseAnimationProps } from '../../types';
import { splitIntoCharacters } from '../../utils/text';

export const Blur: React.FC<Omit<BaseAnimationProps, 'animation'>> = ({
  children,
  duration = 1000,
  delay = 0,
  stagger = 30,
  className = '',
  style = {},
}) => {
  const text = typeof children === 'string' ? children : String(children);
  const chars = useMemo(() => splitIntoCharacters(text), [text]);

  return (
    <>
      <span className={className} style={{ display: 'inline-block', ...style }}>
        {chars.map((char, index) => {
          const charDelay = delay + index * stagger;
          const isSpace = char === ' ';

          return (
            <span
              key={index}
              style={{
                display: 'inline-block',
                filter: 'blur(10px)',
                opacity: 0,
                animation: `blurIn ${duration}ms ${charDelay}ms forwards`,
                whiteSpace: isSpace ? 'pre' : 'normal',
              }}
            >
              {isSpace ? '\u00A0' : char}
            </span>
          );
        })}
      </span>
      <style>{`
        @keyframes blurIn {
          from {
            filter: blur(10px);
            opacity: 0;
          }
          to {
            filter: blur(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};
