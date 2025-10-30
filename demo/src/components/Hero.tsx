import React from 'react';
import { TextAnimate } from 'react-text-animate';

const Hero: React.FC = () => {
  const scrollToDocs = () => {
    const docsSection = document.getElementById('docs');
    if (docsSection) {
      docsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" style={styles.hero}>
      <style>{`
        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
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

          <div style={styles.installSection}>
            <div style={styles.installBox}>
              <code style={styles.installCode}>npm install react-text-animator</code>
            </div>
          </div>

          <div style={styles.buttons}>
            <button
              onClick={scrollToDocs}
              className="btn btn-primary"
              style={{ textDecoration: 'none', cursor: 'pointer' }}
            >
              📖 Documentation
            </button>
            <a
              href="https://www.npmjs.com/package/react-text-animator"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ textDecoration: 'none' }}
            >
              📦 npm
            </a>
            <a
              href="https://github.com/hichamcc/react-text-animator"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ textDecoration: 'none' }}
            >
              ⭐ GitHub
            </a>
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
  installSection: {
    marginBottom: '2rem',
    animation: 'slideUpFade 0.8s ease-out 3s backwards',
  },
  installBox: {
    background: 'rgba(255, 255, 255, 0.9)',
    border: '2px solid #0ea5e9',
    borderRadius: '12px',
    padding: '1.25rem 2rem',
    display: 'inline-block',
    boxShadow: '0 4px 20px rgba(14, 165, 233, 0.15)',
    backdropFilter: 'blur(10px)',
  },
  installCode: {
    fontFamily: 'Monaco, Courier New, monospace',
    fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
    color: '#0284c7',
    fontWeight: 600,
  },
  buttons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '2rem',
  },
  demoText: {
    marginTop: '5rem',
    fontSize: '2rem',
    fontWeight: 700,
    color: '#0ea5e9',
  },
};

export default Hero;
