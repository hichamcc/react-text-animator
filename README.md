# React Text Animator

[![npm version](https://img.shields.io/npm/v/react-text-animator.svg)](https://www.npmjs.com/package/react-text-animator)
[![npm downloads](https://img.shields.io/npm/dm/react-text-animator.svg)](https://www.npmjs.com/package/react-text-animator)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Beautiful text animations for React with zero dependencies. Make your text come alive with typewriter effects, particle explosions, morphing text, glitch effects, and more!

## ✨ Features

- 🎨 **9 Animation Types** - Typewriter, particles, slide, fade, morph, scramble, glitch, wave, blur
- 🚀 **Zero Dependencies** - No external dependencies, lightweight bundle (~4KB gzipped)
- 💪 **TypeScript Support** - Full type definitions included
- ⚡ **Performance Optimized** - Smooth 60fps animations using CSS and Canvas
- 🎯 **Flexible Triggers** - Auto, hover, click, scroll into view, or manual
- 🎛️ **Highly Customizable** - Control duration, delay, easing, and more
- 📦 **Easy to Use** - Simple API, one component does it all

## 📦 Installation

```bash
npm install react-text-animator
```

```bash
yarn add react-text-animator
```

```bash
pnpm add react-text-animator
```

## 🚀 Quick Start

```tsx
import { TextAnimate } from 'react-text-animator';

function App() {
  return (
    <TextAnimate animation="typewriter">
      Hello World!
    </TextAnimate>
  );
}
```

## 🎭 Available Animations

### Typewriter
Classic character-by-character typing effect with optional cursor.

```tsx
<TextAnimate animation="typewriter" duration={2000} stagger={80}>
  This text types out character by character
</TextAnimate>
```

### Particle Explosion
Text explodes into particles and reforms - uses Canvas for smooth animation.

```tsx
<TextAnimate
  animation="particle"
  particleCount={100}
  particleSize={16}
>
  Watch me explode!
</TextAnimate>
```

### Slide Up
Characters slide up from below with staggered timing.

```tsx
<TextAnimate animation="slideUp" stagger={50}>
  Sliding into view
</TextAnimate>
```

### Fade In
Smooth opacity transition with optional stagger.

```tsx
<TextAnimate animation="fadeIn" duration={1000} stagger={30}>
  Fading in smoothly
</TextAnimate>
```

### Text Morph
Smoothly transitions between different text strings.

```tsx
<TextAnimate
  animation="morph"
  morphTexts={["Hello", "World", "React"]}
  morphInterval={2000}
>
  Morphing
</TextAnimate>
```

### Scramble
Random characters gradually resolve to actual text.

```tsx
<TextAnimate animation="scramble" duration={1500}>
  Decode this message
</TextAnimate>
```

### Glitch
Cyberpunk-style glitch reveal with RGB split effect.

```tsx
<TextAnimate animation="glitch" glitchIntensity={0.7}>
  Cyber Text
</TextAnimate>
```

### Wave
Characters animate in continuous wave pattern.

```tsx
<TextAnimate animation="wave" waveAmplitude={20}>
  Wavy Text
</TextAnimate>
```

### Blur
Text goes from blurry to sharp with smooth transition.

```tsx
<TextAnimate animation="blur" duration={1200}>
  Coming into focus
</TextAnimate>
```

## 📖 API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `animation` | `AnimationType` | **required** | Type of animation to use |
| `trigger` | `'auto' \| 'hover' \| 'click' \| 'view' \| 'manual'` | `'auto'` | When to trigger the animation |
| `duration` | `number` | `1000` | Animation duration in milliseconds |
| `delay` | `number` | `0` | Delay before animation starts (ms) |
| `stagger` | `number` | `50` | Delay between each character/word (ms) |
| `easing` | `EasingType` | `'easeOutCubic'` | Easing function for animation |
| `className` | `string` | `''` | Additional CSS classes |
| `style` | `CSSProperties` | `{}` | Inline styles |
| `onComplete` | `() => void` | - | Callback when animation finishes |
| `repeat` | `boolean \| number` | `false` | Repeat animation (true = infinite) |
| `reverse` | `boolean` | `false` | Play animation in reverse |

### Animation-Specific Props

#### Particle Animation
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `particleCount` | `number` | `100` | Number of particles |
| `particleSize` | `number` | `16` | Size of each particle |
| `particleColor` | `string` | (inherited) | Color of particles (inherits text color if not specified) |

#### Morph Animation
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `morphTexts` | `string[]` | - | Array of texts to morph between |
| `morphInterval` | `number` | `3000` | Time between morphs in milliseconds |

#### Wave Animation
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `waveAmplitude` | `number` | `20` | Height of the wave motion |

#### Glitch Animation
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `glitchIntensity` | `number` | `0.5` | Intensity of glitch effect (0-1) |

## 🎯 Trigger Types

### Auto
Animation starts immediately when component mounts.

```tsx
<TextAnimate animation="fadeIn" trigger="auto">
  Animates immediately
</TextAnimate>
```

### Hover
Animation triggers when user hovers over the element.

```tsx
<TextAnimate animation="slideUp" trigger="hover">
  Hover over me!
</TextAnimate>
```

### Click
Animation triggers when user clicks the element.

```tsx
<TextAnimate animation="typewriter" trigger="click">
  Click to animate
</TextAnimate>
```

### View
Animation triggers when element scrolls into view (uses Intersection Observer).

```tsx
<TextAnimate animation="particle" trigger="view">
  Scroll to see me animate
</TextAnimate>
```

## 🎨 Advanced Examples

### Chained Animations
```tsx
<div>
  <TextAnimate animation="typewriter" duration={2000}>
    First line types out
  </TextAnimate>
  <TextAnimate animation="slideUp" delay={2200} stagger={50}>
    Then this slides in
  </TextAnimate>
  <TextAnimate animation="fadeIn" delay={3000}>
    And this fades in last
  </TextAnimate>
</div>
```

### Custom Styling
```tsx
<TextAnimate
  animation="glitch"
  className="my-custom-class"
  style={{
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#00ffff',
  }}
>
  Styled glitch text
</TextAnimate>
```

### With Callback
```tsx
<TextAnimate
  animation="scramble"
  onComplete={() => console.log('Decoded!')}
>
  Secret message
</TextAnimate>
```

### Repeating Animation
```tsx
<TextAnimate animation="wave" repeat={true}>
  Loops forever
</TextAnimate>

<TextAnimate animation="particle" repeat={3}>
  Animates 3 times
</TextAnimate>
```

### Dynamic Text Morphing
```tsx
<TextAnimate
  animation="morph"
  morphTexts={[
    "Loading...",
    "Processing...",
    "Almost there...",
    "Done!"
  ]}
  morphInterval={1500}
>
  Loading
</TextAnimate>
```

## 🎛️ Easing Functions

Available easing options:
- `linear`
- `easeIn`, `easeOut`, `easeInOut`
- `easeInCubic`, `easeOutCubic`, `easeInOutCubic`
- `easeInQuad`, `easeOutQuad`, `easeInOutQuad`
- `easeInQuart`, `easeOutQuart`, `easeInOutQuart`

```tsx
<TextAnimate animation="slideUp" easing="easeOutQuart">
  Custom easing
</TextAnimate>
```

## 🌐 Browser Support

Works in all modern browsers:
- Chrome, Edge (latest)
- Firefox (latest)
- Safari (latest)

For older browsers, the component will gracefully fallback to displaying static text.

## 💡 Performance Tips

1. **Use CSS animations** when possible (fadeIn, slideUp, blur) - they're GPU accelerated
2. **Limit particle count** for better performance on lower-end devices
3. **Use `trigger="view"`** for animations below the fold to delay rendering
4. **Avoid too many simultaneous animations** on the same page
5. **Wave animation runs continuously** - use sparingly for best performance

## 📝 TypeScript

Full TypeScript support with type definitions included:

```tsx
import { TextAnimate, TextAnimateProps, AnimationType } from 'react-text-animator';

const animation: AnimationType = 'typewriter';

const props: TextAnimateProps = {
  animation: 'fadeIn',
  duration: 1000,
  children: 'Hello',
};
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request to [https://github.com/hichamcc/react-text-animator](https://github.com/hichamcc/react-text-animator)

## 📄 License

MIT © HICHAM

## 🙏 Acknowledgments

Built with React, TypeScript, and Canvas API. Zero external dependencies!

---

Made with ❤️ for the React community
