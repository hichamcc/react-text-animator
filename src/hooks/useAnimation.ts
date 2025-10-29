import { useState, useEffect, useCallback, useRef } from 'react';
import { AnimationState } from '../types';

interface UseAnimationOptions {
  duration: number;
  delay?: number;
  repeat?: boolean | number;
  onComplete?: () => void;
}

/**
 * Hook that manages animation state and progress
 */
export const useAnimation = (
  shouldAnimate: boolean,
  options: UseAnimationOptions
): AnimationState & { restart: () => void } => {
  const { duration, delay = 0, repeat = false, onComplete } = options;

  const [state, setState] = useState<AnimationState>({
    isAnimating: false,
    isComplete: false,
    progress: 0,
  });

  const animationFrameRef = useRef<number>();
  const startTimeRef = useRef<number>();
  const repeatCountRef = useRef<number>(0);

  const animate = useCallback(
    (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      setState({
        isAnimating: progress < 1,
        isComplete: progress >= 1,
        progress,
      });

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        // Animation complete
        onComplete?.();

        // Handle repeat
        const repeatCount = typeof repeat === 'number' ? repeat : Infinity;
        if (repeat && repeatCountRef.current < repeatCount) {
          repeatCountRef.current++;
          startTimeRef.current = undefined;
          animationFrameRef.current = requestAnimationFrame(animate);
        }
      }
    },
    [duration, repeat, onComplete]
  );

  const restart = useCallback(() => {
    startTimeRef.current = undefined;
    repeatCountRef.current = 0;
    setState({
      isAnimating: false,
      isComplete: false,
      progress: 0,
    });
  }, []);

  useEffect(() => {
    if (shouldAnimate) {
      const startAnimation = () => {
        restart();
        animationFrameRef.current = requestAnimationFrame(animate);
      };

      if (delay > 0) {
        const timeoutId = setTimeout(startAnimation, delay);
        return () => clearTimeout(timeoutId);
      } else {
        startAnimation();
      }
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [shouldAnimate, delay, animate, restart]);

  return { ...state, restart };
};
