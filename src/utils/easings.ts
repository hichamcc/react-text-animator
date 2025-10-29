import { EasingFunction, EasingType } from '../types';

// Easing functions for smooth animations
// All functions take a value between 0 and 1 and return a value between 0 and 1

export const linear: EasingFunction = (t: number) => t;

// Quadratic easing
export const easeInQuad: EasingFunction = (t: number) => t * t;
export const easeOutQuad: EasingFunction = (t: number) => t * (2 - t);
export const easeInOutQuad: EasingFunction = (t: number) =>
  t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

// Cubic easing
export const easeInCubic: EasingFunction = (t: number) => t * t * t;
export const easeOutCubic: EasingFunction = (t: number) => --t * t * t + 1;
export const easeInOutCubic: EasingFunction = (t: number) =>
  t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

// Quartic easing
export const easeInQuart: EasingFunction = (t: number) => t * t * t * t;
export const easeOutQuart: EasingFunction = (t: number) => 1 - --t * t * t * t;
export const easeInOutQuart: EasingFunction = (t: number) =>
  t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;

// Simplified aliases
export const easeIn = easeInCubic;
export const easeOut = easeOutCubic;
export const easeInOut = easeInOutCubic;

// Map easing names to functions
export const easingFunctions: Record<EasingType, EasingFunction> = {
  linear,
  easeIn,
  easeOut,
  easeInOut,
  easeInCubic,
  easeOutCubic,
  easeInOutCubic,
  easeInQuad,
  easeOutQuad,
  easeInOutQuad,
  easeInQuart,
  easeOutQuart,
  easeInOutQuart,
};

// Get easing function by name
export const getEasingFunction = (easing: EasingType = 'easeOutCubic'): EasingFunction => {
  return easingFunctions[easing] || easeOutCubic;
};
