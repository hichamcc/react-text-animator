import React from 'react';
import { TextAnimate } from 'react-text-animate';

const CreativeExamples: React.FC = () => {
  return (
    <section className="section" style={styles.section}>
      <div className="container">
        <h2 style={styles.heading}>
          <TextAnimate animation="glitch" trigger="view">
            Creative Examples
          </TextAnimate>
        </h2>

        <p style={styles.subheading}>
          <TextAnimate animation="scramble" trigger="view" delay={500}>
            See how you can combine animations for unique effects
          </TextAnimate>
        </p>

        <div style={styles.examplesGrid}>
          {/* Example 1: Cyberpunk Title */}
          <div className="card" style={styles.exampleCard}>
            <h3 style={styles.exampleTitle}>Cyberpunk Title</h3>
            <div style={{ ...styles.exampleDemo, fontSize: '2.5rem', color: '#00ffff' }}>
              <TextAnimate animation="glitch" glitchIntensity={0.8}>
                NEON CITY
              </TextAnimate>
            </div>
            <p style={styles.exampleDesc}>Perfect for gaming and tech websites</p>
          </div>

          {/* Example 2: Loading Message */}
          <div className="card" style={styles.exampleCard}>
            <h3 style={styles.exampleTitle}>Loading State</h3>
            <div style={styles.exampleDemo}>
              <TextAnimate animation="morph" morphTexts={['Loading', 'Please wait', 'Almost there']} morphInterval={1500}>
                Loading
              </TextAnimate>
            </div>
            <p style={styles.exampleDesc}>Dynamic loading messages</p>
          </div>

          {/* Example 3: Hero Headline */}
          <div className="card" style={styles.exampleCard}>
            <h3 style={styles.exampleTitle}>Hero Headline</h3>
            <div style={{ ...styles.exampleDemo, fontSize: '2rem' }}>
              <TextAnimate animation="blur" duration={1500} stagger={40}>
                Build. Ship. Scale.
              </TextAnimate>
            </div>
            <p style={styles.exampleDesc}>Impactful hero section text</p>
          </div>

          {/* Example 4: Secret Message */}
          <div className="card" style={styles.exampleCard}>
            <h3 style={styles.exampleTitle}>Secret Reveal</h3>
            <div style={styles.exampleDemo}>
              <TextAnimate animation="scramble" duration={2000} trigger="hover">
                Decode the secret
              </TextAnimate>
            </div>
            <p style={styles.exampleDesc}>Hover to decode the message</p>
          </div>

          {/* Example 5: Celebration */}
          <div className="card" style={styles.exampleCard}>
            <h3 style={styles.exampleTitle}>Celebration</h3>
            <div style={{ ...styles.exampleDemo, fontSize: '2rem', color: '#ffd700' }}>
              <TextAnimate animation="wave" waveAmplitude={20} duration={800}>
                🎉 Success! 🎉
              </TextAnimate>
            </div>
            <p style={styles.exampleDesc}>Celebratory messages</p>
          </div>

          {/* Example 6: Typing Bot */}
          <div className="card" style={styles.exampleCard}>
            <h3 style={styles.exampleTitle}>Chat Bot</h3>
            <div style={styles.exampleDemo}>
              <TextAnimate animation="typewriter" duration={2000} stagger={60}>
                How can I help you today?
              </TextAnimate>
            </div>
            <p style={styles.exampleDesc}>AI assistant messages</p>
          </div>
        </div>

        {/* Advanced Combinations */}
        <div style={styles.advancedSection}>
          <h3 style={styles.advancedTitle}>
            <TextAnimate animation="slideUp" trigger="view">
              Advanced Combinations
            </TextAnimate>
          </h3>

          <div style={styles.combinationDemo}>
            <div style={styles.combinationItem}>
              <TextAnimate animation="typewriter" duration={2000}>
                First, introduce yourself...
              </TextAnimate>
            </div>
            <div style={styles.combinationItem}>
              <TextAnimate animation="slideUp" delay={2200} stagger={50}>
                Then show the features...
              </TextAnimate>
            </div>
            <div style={styles.combinationItem}>
              <TextAnimate animation="fadeIn" delay={3000} stagger={30}>
                And finish with a call to action!
              </TextAnimate>
            </div>
          </div>

          <p style={styles.combinationNote}>
            Chain multiple animations with delays to create storytelling effects
          </p>
        </div>
      </div>
    </section>
  );
};

const styles: Record<string, React.CSSProperties> = {
  section: {
    background: 'linear-gradient(180deg, #f8fafc 0%, #e0f2fe 100%)',
    paddingTop: '6rem',
    paddingBottom: '6rem',
  },
  heading: {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: '1rem',
    color: '#0284c7',
  },
  subheading: {
    textAlign: 'center',
    color: '#64748b',
    fontSize: '1.1rem',
    marginBottom: '4rem',
  },
  examplesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginBottom: '4rem',
  },
  exampleCard: {
    padding: '2rem',
  },
  exampleTitle: {
    fontSize: '1.25rem',
    fontWeight: 600,
    color: '#1e293b',
    marginBottom: '1rem',
  },
  exampleDemo: {
    padding: '2rem',
    background: 'rgba(14, 165, 233, 0.1)',
    borderRadius: '8px',
    fontSize: '1.5rem',
    fontWeight: 600,
    textAlign: 'center',
    minHeight: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem',
  },
  exampleDesc: {
    color: '#64748b',
    fontSize: '0.9rem',
    textAlign: 'center',
  },
  advancedSection: {
    marginTop: '5rem',
    padding: '3rem',
    background: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '16px',
    border: '1px solid rgba(14, 165, 233, 0.2)',
  },
  advancedTitle: {
    fontSize: '2rem',
    fontWeight: 700,
    marginBottom: '2rem',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  combinationDemo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    padding: '2rem',
    background: 'rgba(14, 165, 233, 0.05)',
    borderRadius: '12px',
    marginBottom: '1.5rem',
  },
  combinationItem: {
    fontSize: '1.3rem',
    color: '#1e293b',
    padding: '1rem',
  },
  combinationNote: {
    textAlign: 'center',
    color: '#64748b',
    fontStyle: 'italic',
  },
};

export default CreativeExamples;
