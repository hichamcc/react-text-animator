import React, { useMemo } from 'react';
import { GlitchAnimationProps } from '../../types';
import { splitIntoCharacters } from '../../utils/text';

export const Glitch: React.FC<Omit<GlitchAnimationProps, 'animation'>> = ({
  children,
  duration = 1000,
  delay = 0,
  glitchIntensity = 0.5,
  className = '',
  style = {},
}) => {
  const text = typeof children === 'string' ? children : String(children);
  const chars = useMemo(() => splitIntoCharacters(text), [text]);

  // Generate random animation delays for glitch effect
  const glitchDelay = (_index: number) => {
    return delay + Math.random() * 200;
  };

  return (
    <>
      <span className={className} style={{ position: 'relative', display: 'inline-block', ...style }}>
        {chars.map((char, index) => {
          const isSpace = char === ' ';
          return (
            <span
              key={index}
              className="glitch-char"
              style={{
                display: 'inline-block',
                position: 'relative',
                opacity: 0,
                animation: `glitchFadeIn ${duration}ms ${glitchDelay(index)}ms forwards`,
                whiteSpace: isSpace ? 'pre' : 'normal',
              }}
            >
              {isSpace ? '\u00A0' : char}
            </span>
          );
        })}
      </span>
      <style>{`
        @keyframes glitchFadeIn {
          0% {
            opacity: 0;
            transform: translate(0, 0);
          }
          10% {
            opacity: 0.5;
            transform: translate(${glitchIntensity * 5}px, ${glitchIntensity * 2}px);
          }
          20% {
            opacity: 0.8;
            transform: translate(-${glitchIntensity * 3}px, -${glitchIntensity * 2}px);
          }
          30% {
            opacity: 0.6;
            transform: translate(${glitchIntensity * 2}px, ${glitchIntensity * 3}px);
          }
          40% {
            opacity: 1;
            transform: translate(-${glitchIntensity}px, 0);
          }
          50% {
            opacity: 0.9;
            transform: translate(${glitchIntensity}px, -${glitchIntensity}px);
          }
          60% {
            opacity: 1;
            transform: translate(0, ${glitchIntensity}px);
          }
          70% {
            opacity: 0.95;
            transform: translate(-${glitchIntensity * 0.5}px, 0);
          }
          100% {
            opacity: 1;
            transform: translate(0, 0);
          }
        }

        .glitch-char::before,
        .glitch-char::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.8;
          animation: glitchClip ${duration}ms infinite;
        }

        .glitch-char::before {
          left: ${glitchIntensity * 2}px;
          text-shadow: -${glitchIntensity * 2}px 0 #ff00ff;
          clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
        }

        .glitch-char::after {
          left: -${glitchIntensity * 2}px;
          text-shadow: ${glitchIntensity * 2}px 0 #00ffff;
          clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
        }

        @keyframes glitchClip {
          0%, 100% {
            opacity: 0;
          }
          5%, 15% {
            opacity: 0.7;
          }
        }
      `}</style>
    </>
  );
};
