import React, { useEffect, useRef, useState } from 'react';
import { ParticleAnimationProps, Particle as ParticleType } from '../../types';
import {
  createCanvas,
  getContext,
  clearCanvas,
  drawParticle,
  updateParticle,
  createParticlesFromText,
  areParticlesSettled,
} from '../../utils/canvas';
import { getFontProperties } from '../../utils/text';

export const Particle: React.FC<Omit<ParticleAnimationProps, 'animation'>> = ({
  children,
  delay = 0,
  particleCount = 100,
  particleSize = 16,
  particleColor,
  className = '',
  style = {},
  onComplete,
}) => {
  const text = typeof children === 'string' ? children : String(children);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<ParticleType[]>([]);
  const animationFrameRef = useRef<number>();
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Get font properties from container
    const fontProps = getFontProperties(container);
    const fontSize = particleSize || fontProps.fontSize;

    // Get color from container (inherit from parent or use override)
    const computedStyle = window.getComputedStyle(container);
    const textColor = particleColor || computedStyle.color || '#000000';

    // Create and setup canvas
    const canvas = createCanvas(container.offsetWidth, container.offsetHeight);
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    container.appendChild(canvas);
    canvasRef.current = canvas;

    const ctx = getContext(canvas);
    if (!ctx) return;

    // Initial delay
    const startAnimation = () => {
      setShowText(false);

      // Create particles
      particlesRef.current = createParticlesFromText(
        text,
        canvas.width,
        canvas.height,
        particleCount,
        fontSize,
        textColor
      );

      // Animation loop
      const animate = () => {
        clearCanvas(ctx);

        // Update and draw particles
        particlesRef.current = particlesRef.current.map((particle) =>
          updateParticle(particle, 0.08)
        );

        particlesRef.current.forEach((particle) => {
          drawParticle(ctx, particle);
        });

        // Check if animation is complete
        if (areParticlesSettled(particlesRef.current, 2)) {
          setShowText(true);
          onComplete?.();

          // Clean up canvas
          if (canvasRef.current) {
            canvasRef.current.remove();
            canvasRef.current = null;
          }
        } else {
          animationFrameRef.current = requestAnimationFrame(animate);
        }
      };

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const timeoutId = setTimeout(startAnimation, delay);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (canvasRef.current) {
        canvasRef.current.remove();
      }
    };
  }, [text, delay, particleCount, particleSize, particleColor, onComplete]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: 'relative',
        display: 'inline-block',
        minHeight: '1em',
        ...style,
      }}
    >
      <span style={{ opacity: showText ? 1 : 0, transition: 'opacity 0.3s' }}>
        {text}
      </span>
    </div>
  );
};
