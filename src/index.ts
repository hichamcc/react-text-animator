// Main export
export { TextAnimate } from './components/TextAnimate';

// Individual animation components
export { Typewriter, Particle, SlideUp, FadeIn, Morph, Scramble, Glitch, Wave, Blur } from './components/animations';

// Types
export type {
  AnimationType,
  TriggerType,
  EasingType,
  BaseAnimationProps,
  ParticleAnimationProps,
  MorphAnimationProps,
  WaveAnimationProps,
  GlitchAnimationProps,
  TextAnimateProps,
} from './types';

// Hooks
export { useInView, useAnimation } from './hooks';
