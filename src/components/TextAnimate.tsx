import React, { useState, useEffect } from 'react';
import { TextAnimateProps } from '../types';
import { Typewriter, Particle, SlideUp, FadeIn, Morph, Scramble, Glitch, Wave, Blur } from './animations';
import { useInView } from '../hooks';

export const TextAnimate: React.FC<TextAnimateProps> = (props) => {
  const {
    animation,
    trigger = 'auto',
    children,
    className = '',
    style = {},
  } = props;

  const [viewRef, isInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Determine when to start animation based on trigger
  useEffect(() => {
    switch (trigger) {
      case 'auto':
        setShouldAnimate(true);
        break;
      case 'view':
        setShouldAnimate(isInView);
        break;
      case 'hover':
        setShouldAnimate(isHovered);
        break;
      case 'click':
        setShouldAnimate(isClicked);
        break;
      case 'manual':
        // User controls this externally
        break;
    }
  }, [trigger, isInView, isHovered, isClicked]);

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      setIsHovered(false);
    }
  };

  const handleClick = () => {
    if (trigger === 'click') {
      setIsClicked(true);
    }
  };

  // Render the appropriate animation component
  const renderAnimation = () => {
    if (!shouldAnimate && trigger !== 'auto') {
      return <span className={className} style={style}>{children}</span>;
    }

    const baseProps = {
      ...props,
      className,
      style,
      children,
    };

    switch (animation) {
      case 'typewriter':
        return <Typewriter {...baseProps} />;
      case 'particle':
        return <Particle {...(baseProps as any)} />;
      case 'slideUp':
        return <SlideUp {...baseProps} />;
      case 'fadeIn':
        return <FadeIn {...baseProps} />;
      case 'morph':
        return <Morph {...(baseProps as any)} />;
      case 'scramble':
        return <Scramble {...baseProps} />;
      case 'glitch':
        return <Glitch {...(baseProps as any)} />;
      case 'wave':
        return <Wave {...(baseProps as any)} />;
      case 'blur':
        return <Blur {...baseProps} />;
      default:
        // Fallback to no animation
        return <span className={className} style={style}>{children}</span>;
    }
  };

  return (
    <span
      ref={viewRef as any}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ display: 'inline-block' }}
    >
      {renderAnimation()}
    </span>
  );
};
