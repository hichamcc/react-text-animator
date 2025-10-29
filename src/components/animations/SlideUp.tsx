import React, { useMemo } from 'react';
import { BaseAnimationProps } from '../../types';
import { splitIntoCharacters } from '../../utils/text';

export const SlideUp: React.FC<Omit<BaseAnimationProps, 'animation'>> = ({
  children,
  duration = 1000,
  delay = 0,
  stagger = 50,
  className = '',
  style = {},
}) => {
  const text = typeof children === 'string' ? children : String(children);
  const chars = useMemo(() => splitIntoCharacters(text), [text]);

  return (
    <span className={className} style={{ display: 'inline-block', ...style }}>
      {chars.map((char, index) => {
        const charDelay = delay + index * stagger;
        const isSpace = char === ' ';

        return (
          <span
            key={index}
            style={{
              display: 'inline-block',
              opacity: 0,
              transform: 'translateY(20px)',
              animation: `slideUpFadeIn ${duration}ms ${charDelay}ms forwards`,
              animationTimingFunction: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
              whiteSpace: isSpace ? 'pre' : 'normal',
            }}
          >
            {isSpace ? '\u00A0' : char}
          </span>
        );
      })}
      <style>{`
        @keyframes slideUpFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </span>
  );
};
