import React from 'react';
import { TextAnimate } from 'react-text-animate';

const Hero: React.FC = () => {
  return (
    <section className="hero" style={styles.hero}>
      <div className="container">
        <div style={styles.content}>
          <h1 style={styles.title}>
            <TextAnimate animation="typewriter" duration={2000} stagger={80}>
              React Text Animate
            </TextAnimate>
          </h1>

          <p style={styles.subtitle}>
            <TextAnimate animation="fadeIn" delay={2200} duration={1000} stagger={20}>
              Beautiful text animations for React 
            </TextAnimate>
          </p>

          <div style={styles.buttons}>
            <button className="btn btn-primary">
              Get Started
            </button>
            <button className="btn btn-secondary">
              View on GitHub
            </button>
          </div>

          <div style={styles.demoText}>
            <TextAnimate
              animation="particle"
              delay={3500}
              particleCount={80}
              particleSize={20}
            >
              Watch the magic
            </TextAnimate>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles: Record<string, React.CSSProperties> = {
  hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    background: 'linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 50%, #ffffff 100%)',
    overflow: 'hidden',
  },
  content: {
    textAlign: 'center',
    zIndex: 10,
    position: 'relative',
  },
  title: {
    fontSize: 'clamp(2.5rem, 8vw, 5rem)',
    fontWeight: 800,
    marginBottom: '1.5rem',
    background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #0284c7 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundSize: '200% 200%',
  },
  subtitle: {
    fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
    color: '#64748b',
    marginBottom: '3rem',
    maxWidth: '600px',
    margin: '0 auto 3rem',
  },
  buttons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  demoText: {
    marginTop: '5rem',
    fontSize: '2rem',
    fontWeight: 700,
    color: '#0ea5e9',
  },
};

export default Hero;
