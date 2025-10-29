import React, { useMemo } from 'react';
import { WaveAnimationProps } from '../../types';
import { splitIntoCharacters } from '../../utils/text';

export const Wave: React.FC<Omit<WaveAnimationProps, 'animation'>> = ({
  children,
  duration = 1000,
  delay = 0,
  stagger = 50,
  waveAmplitude = 20,
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
                animation: `wave ${duration}ms ${charDelay}ms infinite ease-in-out`,
                whiteSpace: isSpace ? 'pre' : 'normal',
              }}
            >
              {isSpace ? '\u00A0' : char}
            </span>
          );
        })}
      </span>
      <style>{`
        @keyframes wave {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-${waveAmplitude}px);
          }
        }
      `}</style>
    </>
  );
};
