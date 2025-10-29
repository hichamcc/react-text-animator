// Text manipulation utility functions

/**
 * Splits text into individual characters while preserving spaces
 */
export const splitIntoCharacters = (text: string): string[] => {
  return text.split('');
};

/**
 * Splits text into words
 */
export const splitIntoWords = (text: string): string[] => {
  return text.split(/(\s+)/);
};

/**
 * Gets a random character from a character set
 */
export const getRandomCharacter = (): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  return chars[Math.floor(Math.random() * chars.length)];
};

/**
 * Generates a random string of specified length
 */
export const generateRandomString = (length: number): string => {
  return Array.from({ length }, () => getRandomCharacter()).join('');
};

/**
 * Measures text dimensions using canvas
 */
export const measureText = (
  text: string,
  fontSize: number = 16,
  fontFamily: string = 'Arial'
): { width: number; height: number } => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    return { width: 0, height: 0 };
  }

  ctx.font = `${fontSize}px ${fontFamily}`;
  const metrics = ctx.measureText(text);

  return {
    width: metrics.width,
    height: fontSize, // Approximate height
  };
};

/**
 * Gets computed font properties from an element
 */
export const getFontProperties = (element: HTMLElement): {
  fontSize: number;
  fontFamily: string;
  lineHeight: number;
} => {
  const computed = window.getComputedStyle(element);
  return {
    fontSize: parseFloat(computed.fontSize),
    fontFamily: computed.fontFamily,
    lineHeight: parseFloat(computed.lineHeight) || parseFloat(computed.fontSize) * 1.2,
  };
};

/**
 * Clamps a number between min and max
 */
export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

/**
 * Linear interpolation between two values
 */
export const lerp = (start: number, end: number, t: number): number => {
  return start + (end - start) * t;
};

/**
 * Maps a value from one range to another
 */
export const mapRange = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};
