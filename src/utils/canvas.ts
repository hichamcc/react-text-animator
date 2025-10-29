import { Particle } from '../types';

/**
 * Creates a canvas element with the specified dimensions
 */
export const createCanvas = (width: number, height: number): HTMLCanvasElement => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
};

/**
 * Gets the 2D rendering context from a canvas
 */
export const getContext = (canvas: HTMLCanvasElement): CanvasRenderingContext2D | null => {
  return canvas.getContext('2d');
};

/**
 * Clears the entire canvas
 */
export const clearCanvas = (ctx: CanvasRenderingContext2D): void => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
};

/**
 * Draws a particle on the canvas
 */
export const drawParticle = (ctx: CanvasRenderingContext2D, particle: Particle): void => {
  ctx.fillStyle = particle.color;
  ctx.font = `${particle.size}px Arial`;
  ctx.fillText(particle.char, particle.x, particle.y);
};

/**
 * Updates particle position with physics
 */
export const updateParticle = (particle: Particle, returnSpeed: number = 0.1): Particle => {
  // Apply velocity
  particle.x += particle.vx;
  particle.y += particle.vy;

  // Calculate direction to target
  const dx = particle.targetX - particle.x;
  const dy = particle.targetY - particle.y;

  // Apply attraction to target position
  particle.vx += dx * returnSpeed;
  particle.vy += dy * returnSpeed;

  // Apply damping
  particle.vx *= 0.85;
  particle.vy *= 0.85;

  return particle;
};

/**
 * Creates particles from text
 */
export const createParticlesFromText = (
  text: string,
  containerWidth: number,
  containerHeight: number,
  particleCount: number,
  particleSize: number,
  color: string
): Particle[] => {
  const particles: Particle[] = [];
  const chars = text.split('');

  // Calculate text positioning
  const charWidth = particleSize * 0.6;
  const totalWidth = chars.length * charWidth;
  const startX = (containerWidth - totalWidth) / 2;
  const centerY = containerHeight / 2;

  for (let i = 0; i < chars.length; i++) {
    const targetX = startX + i * charWidth;
    const targetY = centerY;

    // Create multiple particles per character for explosion effect
    const particlesPerChar = Math.max(1, Math.floor(particleCount / chars.length));

    for (let j = 0; j < particlesPerChar; j++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 5 + 2;
      const explosionRadius = Math.random() * 100 + 50;

      particles.push({
        x: targetX + Math.cos(angle) * explosionRadius,
        y: targetY + Math.sin(angle) * explosionRadius,
        targetX,
        targetY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        char: chars[i],
        size: particleSize,
        color,
      });
    }
  }

  return particles;
};

/**
 * Checks if all particles have reached their targets
 */
export const areParticlesSettled = (particles: Particle[], threshold: number = 1): boolean => {
  return particles.every((particle) => {
    const dx = particle.targetX - particle.x;
    const dy = particle.targetY - particle.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < threshold;
  });
};
