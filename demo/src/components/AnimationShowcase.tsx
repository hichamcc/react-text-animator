import React from 'react';
import { TextAnimate } from 'react-text-animate';

interface Animation {
  name: string;
  type: 'typewriter' | 'particle' | 'slideUp' | 'fadeIn' | 'morph' | 'scramble' | 'glitch' | 'wave' | 'blur';
  description: string;
  code: string;
  demoText?: string;
  specialProps?: any;
}

const animations: Animation[] = [
  {
    name: 'Typewriter',
    type: 'typewriter',
    description: 'Classic character-by-character typing effect with blinking cursor',
    code: '<TextAnimate animation="typewriter">\n  Hello World\n</TextAnimate>',
    demoText: 'Type it out!',
  },
  {
    name: 'Particle Explosion',
    type: 'particle',
    description: 'Text explodes into particles and reforms with physics',
    code: '<TextAnimate animation="particle">\n  Amazing Effect\n</TextAnimate>',
    demoText: 'Boom!',
  },
  {
    name: 'Slide Up',
    type: 'slideUp',
    description: 'Characters slide up from below with staggered timing',
    code: '<TextAnimate animation="slideUp">\n  Slide In\n</TextAnimate>',
    demoText: 'Rising up!',
  },
  {
    name: 'Fade In',
    type: 'fadeIn',
    description: 'Smooth opacity transition with character stagger',
    code: '<TextAnimate animation="fadeIn">\n  Fade Effect\n</TextAnimate>',
    demoText: 'Fading...',
  },
  {
    name: 'Text Morph',
    type: 'morph',
    description: 'Smoothly transitions between different text strings',
    code: '<TextAnimate \n  animation="morph"\n  morphTexts={["Hello", "World", "React"]}\n>\n  Morphing\n</TextAnimate>',
    demoText: 'Morphing',
    specialProps: {
      morphTexts: ['Magic', 'Wonder', 'Amazing', 'Cool'],
      morphInterval: 2000,
    },
  },
  {
    name: 'Scramble',
    type: 'scramble',
    description: 'Random characters gradually resolve to actual text',
    code: '<TextAnimate animation="scramble">\n  Decode This\n</TextAnimate>',
    demoText: 'Decoding...',
  },
  {
    name: 'Glitch',
    type: 'glitch',
    description: 'Cyberpunk-style glitch reveal with RGB split effect',
    code: '<TextAnimate animation="glitch">\n  Cyber Text\n</TextAnimate>',
    demoText: 'Glitchy!',
  },
  {
    name: 'Wave',
    type: 'wave',
    description: 'Characters animate in continuous wave pattern',
    code: '<TextAnimate animation="wave">\n  Wavy Text\n</TextAnimate>',
    demoText: 'Wavy!',
    specialProps: {
      waveAmplitude: 15,
    },
  },
  {
    name: 'Blur',
    type: 'blur',
    description: 'Text goes from blurry to sharp with smooth transition',
    code: '<TextAnimate animation="blur">\n  Focus In\n</TextAnimate>',
    demoText: 'Focus!',
  },
];

const AnimationShowcase: React.FC = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section className="section" style={styles.section}>
      <div className="container">
        <h2 style={styles.heading}>
          <TextAnimate animation="slideUp" trigger="view" stagger={50}>
            9 Beautiful Animations
          </TextAnimate>
        </h2>

        <p style={styles.subheading}>
          <TextAnimate animation="fadeIn" trigger="view" delay={400} stagger={20}>
            Hover over each card to see the animation
          </TextAnimate>
        </p>

        <div style={styles.grid}>
          {animations.map((animation) => {
            return (
              <div
                key={animation.name}
                className="card"
                style={styles.card}
              >
                <h3 style={styles.cardTitle}>{animation.name}</h3>
                <p style={styles.cardDescription}>{animation.description}</p>

                <div style={styles.demo}>
                  <TextAnimate
                    animation={animation.type}
                    trigger="hover"
                    duration={animation.type === 'typewriter' ? 1500 : animation.type === 'particle' ? 2000 : 1000}
                    stagger={animation.type === 'typewriter' ? 80 : 50}
                    {...(animation.specialProps || {})}
                  >
                    {animation.demoText || 'Hover me!'}
                  </TextAnimate>
                </div>

                <div className="code-block" style={styles.codeBlock}>
                  <code>{animation.code}</code>
                </div>

                <button
                  className="btn btn-secondary"
                  style={styles.copyButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    copyToClipboard(animation.code);
                  }}
                >
                  Copy Code
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const styles: Record<string, React.CSSProperties> = {
  section: {
    background: '#ffffff',
  },
  heading: {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: '1rem',
    background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subheading: {
    textAlign: 'center',
    color: '#64748b',
    fontSize: '1.1rem',
    marginBottom: '4rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2rem',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#1e293b',
  },
  cardDescription: {
    color: '#64748b',
    fontSize: '0.95rem',
    lineHeight: 1.6,
  },
  demo: {
    padding: '2rem',
    background: 'rgba(14, 165, 233, 0.1)',
    borderRadius: '8px',
    fontSize: '1.5rem',
    fontWeight: 600,
    textAlign: 'center',
    minHeight: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#1e293b',
  },
  codeBlock: {
    marginTop: 'auto',
  },
  copyButton: {
    marginTop: '1rem',
    width: '100%',
  },
};

export default AnimationShowcase;
