import React from 'react';
import Hero from './components/Hero';
import AnimationShowcase from './components/AnimationShowcase';
import Docs from './components/Docs';

const App: React.FC = () => {
  return (
    <div className="app">
      <Hero />
      <AnimationShowcase />
      <Docs />

      <footer style={styles.footer}>
        <div className="container">
          <p style={styles.footerText}>
            Built with ❤️ using React Text Animate
          </p>
          <p style={styles.footerLinks}>
            <a href="https://github.com/hichamcc/react-text-animator" target="_blank" rel="noopener noreferrer" style={styles.link}>
              GitHub
            </a>
            {' • '}
            <a href="https://www.npmjs.com/package/react-text-animator" target="_blank" rel="noopener noreferrer" style={styles.link}>
              npm
            </a>
            {' • '}
            <span style={styles.license}>MIT License</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  footer: {
    padding: '3rem 0',
    background: '#f1f5f9',
    borderTop: '1px solid rgba(15, 23, 42, 0.1)',
    textAlign: 'center',
  },
  footerText: {
    color: '#64748b',
    marginBottom: '1rem',
  },
  footerLinks: {
    color: '#64748b',
    fontSize: '0.9rem',
  },
  link: {
    color: '#0ea5e9',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
  license: {
    color: '#64748b',
  },
};

export default App;
