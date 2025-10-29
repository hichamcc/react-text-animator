import { ReactNode, CSSProperties } from 'react';

export type AnimationType =
  | 'typewriter'
  | 'particle'
  | 'slideUp'
  | 'fadeIn'
  | 'morph'
  | 'scramble'
  | 'glitch'
  | 'wave'
  | 'blur'
  | 'flip'
  | 'magnetic'
  | 'split'
  | 'bounce';

export type TriggerType = 'auto' | 'hover' | 'click' | 'view' | 'manual';

export type EasingType =
  | 'linear'
  | 'easeIn'
  | 'easeOut'
  | 'easeInOut'
  | 'easeInCubic'
  | 'easeOutCubic'
  | 'easeInOutCubic'
  | 'easeInQuad'
  | 'easeOutQuad'
  | 'easeInOutQuad'
  | 'easeInQuart'
  | 'easeOutQuart'
  | 'easeInOutQuart';

export interface BaseAnimationProps {
  animation: AnimationType;
  trigger?: TriggerType;
  duration?: number;
  delay?: number;
  stagger?: number;
  easing?: EasingType;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  onComplete?: () => void;
  repeat?: boolean | number;
  reverse?: boolean;
}

export interface ParticleAnimationProps extends BaseAnimationProps {
  animation: 'particle';
  particleCount?: number;
  particleSize?: number;
  particleColor?: string;
}

export interface MorphAnimationProps extends BaseAnimationProps {
  animation: 'morph';
  morphTexts?: string[];
  morphInterval?: number;
}

export interface WaveAnimationProps extends BaseAnimationProps {
  animation: 'wave';
  waveAmplitude?: number;
  waveFrequency?: number;
}

export interface GlitchAnimationProps extends BaseAnimationProps {
  animation: 'glitch';
  glitchIntensity?: number;
}

export type TextAnimateProps =
  | BaseAnimationProps
  | ParticleAnimationProps
  | MorphAnimationProps
  | WaveAnimationProps
  | GlitchAnimationProps;

export interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  char: string;
  size: number;
  color: string;
}

export interface AnimationState {
  isAnimating: boolean;
  isComplete: boolean;
  progress: number;
}

export type EasingFunction = (t: number) => number;
