# React Text Animate

[![npm version](https://img.shields.io/npm/v/react-text-animate.svg)](https://www.npmjs.com/package/react-text-animate)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Beautiful text animations for React with zero dependencies. Make your text come alive with typewriter effects, particle explosions, smooth transitions, and more!

## ✨ Features

- 🎨 **Multiple Animation Types** - Typewriter, particles, slide, fade, and more
- 🚀 **Zero Dependencies** - No external dependencies, lightweight bundle
- 💪 **TypeScript Support** - Full type definitions included
- ⚡ **Performance Optimized** - Smooth 60fps animations using CSS and Canvas
- 🎯 **Flexible Triggers** - Auto, hover, click, scroll into view, or manual
- 🎛️ **Highly Customizable** - Control duration, delay, easing, and more
- 📦 **Easy to Use** - Simple API, one component does it all

## 📦 Installation

```bash
npm install react-text-animate
```

```bash
yarn add react-text-animate
```

```bash
pnpm add react-text-animate
```

## 🚀 Quick Start

```tsx
import { TextAnimate } from 'react-text-animate';

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
  particleColor="#6366f1"
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
| `particleColor` | `string` | `'#000000'` | Color of particles |

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
</div>
```

### Custom Styling
```tsx
<TextAnimate
  animation="fadeIn"
  className="my-custom-class"
  style={{
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#6366f1',
  }}
>
  Styled text
</TextAnimate>
```

### With Callback
```tsx
<TextAnimate
  animation="typewriter"
  onComplete={() => console.log('Animation complete!')}
>
  I'll log when done
</TextAnimate>
```

### Repeating Animation
```tsx
<TextAnimate animation="particle" repeat={3}>
  Animates 3 times
</TextAnimate>

<TextAnimate animation="fadeIn" repeat={true}>
  Loops forever
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

1. **Use CSS animations** when possible (fadeIn, slideUp) - they're GPU accelerated
2. **Limit particle count** for better performance on lower-end devices
3. **Use `trigger="view"`** for animations below the fold to delay rendering
4. **Avoid too many simultaneous animations** on the same page

## 📝 TypeScript

Full TypeScript support with type definitions included:

```tsx
import { TextAnimate, TextAnimateProps, AnimationType } from 'react-text-animate';

const animation: AnimationType = 'typewriter';

const props: TextAnimateProps = {
  animation: 'fadeIn',
  duration: 1000,
  children: 'Hello',
};
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT © HICHAM

## 🙏 Acknowledgments

Built with React, TypeScript, and Canvas API. Zero external dependencies!

---

Made with ❤️ for the React community
