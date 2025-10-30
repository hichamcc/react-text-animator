import React, { useState } from 'react';
import { TextAnimate } from 'react-text-animate';

interface CodeBlockProps {
  code: string;
  title: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={styles.codeBlock}>
      <div style={styles.codeHeader}>
        <span style={styles.codeTitle}>{title}</span>
        <button onClick={handleCopy} style={styles.copyButton}>
          {copied ? '✓ Copied!' : '📋 Copy'}
        </button>
      </div>
      <pre style={styles.pre}>
        <code style={styles.code}>{code}</code>
      </pre>
    </div>
  );
};

interface ExampleSectionProps {
  title: string;
  description: string;
  demo: React.ReactNode;
  code: string;
  animationType: string;
  animationProps?: Record<string, unknown>;
}

const ExampleSection: React.FC<ExampleSectionProps> = ({
  title,
  description,
  code,
  animationType,
  animationProps = {}
}) => {
  const defaultText = animationProps.children as string || 'Demo Text';

  return (
    <div style={styles.exampleSection}>
      <h3 style={styles.exampleTitle}>{title}</h3>
      <p style={styles.exampleDescription}>{description}</p>
      <div style={styles.exampleDemo}>
        <div style={styles.demoLabel}>Live Demo (hover to play):</div>
        <div style={styles.demoBox}>
          <TextAnimate
            animation={animationType as any}
            trigger="hover"
            {...animationProps}
          >
            {defaultText}
          </TextAnimate>
        </div>
      </div>
      <CodeBlock code={code} title="Usage Example" />
    </div>
  );
};

const Docs: React.FC = () => {
  return (
    <section id="docs" style={styles.docs}>
      <div className="container" style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>
            <TextAnimate animation="fadeIn" duration={800}>
              Documentation
            </TextAnimate>
          </h1>
          <p style={styles.subtitle}>
            <TextAnimate animation="fadeIn" delay={200} duration={800}>
              Complete guide to using React Text Animator in your projects
            </TextAnimate>
          </p>
        </div>

        {/* Installation */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>📦 Installation</h2>
          <CodeBlock
            title="Install via npm"
            code="npm install react-text-animator"
          />
          <CodeBlock
            title="Install via yarn"
            code="yarn add react-text-animator"
          />
          <CodeBlock
            title="Install via pnpm"
            code="pnpm add react-text-animator"
          />
        </div>

        {/* Quick Start */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>🚀 Quick Start</h2>
          <CodeBlock
            title="Basic Usage"
            code={`import { TextAnimate } from 'react-text-animator';

function App() {
  return (
    <TextAnimate animation="typewriter">
      Hello World!
    </TextAnimate>
  );
}`}
          />
        </div>

        {/* Animation Examples */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>🎭 Animation Examples</h2>

          <ExampleSection
            title="Typewriter"
            description="Classic character-by-character typing effect with customizable speed."
            animationType="typewriter"
            animationProps={{
              duration: 2000,
              stagger: 80,
              children: 'This text types out character by character'
            }}
            demo={null}
            code={`<TextAnimate animation="typewriter" duration={2000} stagger={80}>
  This text types out character by character
</TextAnimate>`}
          />

          <ExampleSection
            title="Particle Explosion"
            description="Text explodes into particles and reforms using Canvas API."
            animationType="particle"
            animationProps={{
              particleCount: 100,
              particleSize: 16,
              children: 'Watch me explode!'
            }}
            demo={null}
            code={`<TextAnimate
  animation="particle"
  particleCount={100}
  particleSize={16}
>
  Watch me explode!
</TextAnimate>`}
          />

          <ExampleSection
            title="Slide Up"
            description="Characters slide up from below with staggered timing."
            animationType="slideUp"
            animationProps={{
              stagger: 50,
              children: 'Sliding into view'
            }}
            demo={null}
            code={`<TextAnimate animation="slideUp" stagger={50}>
  Sliding into view
</TextAnimate>`}
          />

          <ExampleSection
            title="Fade In"
            description="Smooth opacity transition with optional stagger between characters."
            animationType="fadeIn"
            animationProps={{
              duration: 1000,
              stagger: 30,
              children: 'Fading in smoothly'
            }}
            demo={null}
            code={`<TextAnimate animation="fadeIn" duration={1000} stagger={30}>
  Fading in smoothly
</TextAnimate>`}
          />

          <ExampleSection
            title="Text Morph"
            description="Smoothly transitions between different text strings."
            animationType="morph"
            animationProps={{
              morphTexts: ['Hello', 'World', 'React'],
              morphInterval: 2000,
              children: 'Morphing'
            }}
            demo={null}
            code={`<TextAnimate
  animation="morph"
  morphTexts={["Hello", "World", "React"]}
  morphInterval={2000}
>
  Morphing
</TextAnimate>`}
          />

          <ExampleSection
            title="Scramble"
            description="Random characters gradually resolve to actual text."
            animationType="scramble"
            animationProps={{
              duration: 1500,
              children: 'Decode this message'
            }}
            demo={null}
            code={`<TextAnimate animation="scramble" duration={1500}>
  Decode this message
</TextAnimate>`}
          />

          <ExampleSection
            title="Glitch"
            description="Cyberpunk-style glitch reveal with RGB split effect."
            animationType="glitch"
            animationProps={{
              glitchIntensity: 0.7,
              children: 'Cyber Text'
            }}
            demo={null}
            code={`<TextAnimate animation="glitch" glitchIntensity={0.7}>
  Cyber Text
</TextAnimate>`}
          />

          <ExampleSection
            title="Wave"
            description="Characters animate in continuous wave pattern."
            animationType="wave"
            animationProps={{
              waveAmplitude: 20,
              children: 'Wavy Text'
            }}
            demo={null}
            code={`<TextAnimate animation="wave" waveAmplitude={20}>
  Wavy Text
</TextAnimate>`}
          />

          <ExampleSection
            title="Blur"
            description="Text goes from blurry to sharp with smooth transition."
            animationType="blur"
            animationProps={{
              duration: 1200,
              children: 'Coming into focus'
            }}
            demo={null}
            code={`<TextAnimate animation="blur" duration={1200}>
  Coming into focus
</TextAnimate>`}
          />
        </div>

        {/* Trigger Types */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>🎯 Trigger Types</h2>
          <div style={styles.propsTable}>
            <div style={styles.tableRow}>
              <div style={styles.tableHeader}>Trigger</div>
              <div style={styles.tableHeader}>Description</div>
              <div style={styles.tableHeader}>Example</div>
            </div>
            <div style={styles.tableRow}>
              <div style={styles.tableCell}><code>auto</code></div>
              <div style={styles.tableCell}>Starts immediately on mount</div>
              <div style={styles.tableCell}><code>trigger="auto"</code></div>
            </div>
            <div style={styles.tableRow}>
              <div style={styles.tableCell}><code>hover</code></div>
              <div style={styles.tableCell}>Triggers on mouse hover</div>
              <div style={styles.tableCell}><code>trigger="hover"</code></div>
            </div>
            <div style={styles.tableRow}>
              <div style={styles.tableCell}><code>click</code></div>
              <div style={styles.tableCell}>Triggers on click</div>
              <div style={styles.tableCell}><code>trigger="click"</code></div>
            </div>
            <div style={styles.tableRow}>
              <div style={styles.tableCell}><code>view</code></div>
              <div style={styles.tableCell}>Triggers when scrolled into view</div>
              <div style={styles.tableCell}><code>trigger="view"</code></div>
            </div>
          </div>
          <CodeBlock
            title="Hover Trigger Example"
            code={`<TextAnimate animation="slideUp" trigger="hover">
  Hover over me!
</TextAnimate>`}
          />
        </div>

        {/* Props API */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>📖 Props API</h2>
          <div style={styles.propsTable}>
            <div style={styles.tableRow}>
              <div style={styles.tableHeader}>Prop</div>
              <div style={styles.tableHeader}>Type</div>
              <div style={styles.tableHeader}>Default</div>
              <div style={styles.tableHeader}>Description</div>
            </div>
            <div style={styles.tableRow}>
              <div style={styles.tableCell}><code>animation</code></div>
              <div style={styles.tableCell}>AnimationType</div>
              <div style={styles.tableCell}>required</div>
              <div style={styles.tableCell}>Type of animation</div>
            </div>
            <div style={styles.tableRow}>
              <div style={styles.tableCell}><code>trigger</code></div>
              <div style={styles.tableCell}>string</div>
              <div style={styles.tableCell}>'auto'</div>
              <div style={styles.tableCell}>When to trigger animation</div>
            </div>
            <div style={styles.tableRow}>
              <div style={styles.tableCell}><code>duration</code></div>
              <div style={styles.tableCell}>number</div>
              <div style={styles.tableCell}>1000</div>
              <div style={styles.tableCell}>Duration in milliseconds</div>
            </div>
            <div style={styles.tableRow}>
              <div style={styles.tableCell}><code>delay</code></div>
              <div style={styles.tableCell}>number</div>
              <div style={styles.tableCell}>0</div>
              <div style={styles.tableCell}>Delay before start (ms)</div>
            </div>
            <div style={styles.tableRow}>
              <div style={styles.tableCell}><code>stagger</code></div>
              <div style={styles.tableCell}>number</div>
              <div style={styles.tableCell}>50</div>
              <div style={styles.tableCell}>Delay between chars (ms)</div>
            </div>
            <div style={styles.tableRow}>
              <div style={styles.tableCell}><code>className</code></div>
              <div style={styles.tableCell}>string</div>
              <div style={styles.tableCell}>''</div>
              <div style={styles.tableCell}>Additional CSS classes</div>
            </div>
            <div style={styles.tableRow}>
              <div style={styles.tableCell}><code>onComplete</code></div>
              <div style={styles.tableCell}>function</div>
              <div style={styles.tableCell}>-</div>
              <div style={styles.tableCell}>Callback on completion</div>
            </div>
          </div>
        </div>

        {/* Advanced Examples */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>⚡ Advanced Examples</h2>

          <h3 style={styles.subsectionTitle}>Chained Animations</h3>
          <CodeBlock
            title="Sequential Animations"
            code={`<div>
  <TextAnimate animation="typewriter" duration={2000}>
    First line types out
  </TextAnimate>
  <TextAnimate animation="slideUp" delay={2200} stagger={50}>
    Then this slides in
  </TextAnimate>
  <TextAnimate animation="fadeIn" delay={3000}>
    And this fades in last
  </TextAnimate>
</div>`}
          />

          <h3 style={styles.subsectionTitle}>Custom Styling</h3>
          <CodeBlock
            title="With Custom Styles"
            code={`<TextAnimate
  animation="glitch"
  className="my-custom-class"
  style={{
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#00ffff',
  }}
>
  Styled glitch text
</TextAnimate>`}
          />

          <h3 style={styles.subsectionTitle}>With Callback</h3>
          <CodeBlock
            title="Animation Callback"
            code={`<TextAnimate
  animation="scramble"
  onComplete={() => console.log('Decoded!')}
>
  Secret message
</TextAnimate>`}
          />

          <h3 style={styles.subsectionTitle}>Repeating Animation</h3>
          <CodeBlock
            title="Infinite Loop"
            code={`<TextAnimate animation="wave" repeat={true}>
  Loops forever
</TextAnimate>

<TextAnimate animation="particle" repeat={3}>
  Animates 3 times
</TextAnimate>`}
          />
        </div>

        {/* Performance Tips */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>💡 Performance Tips</h2>
          <ul style={styles.tipsList}>
            <li style={styles.tipItem}>
              Use CSS animations (fadeIn, slideUp, blur) when possible - they're GPU accelerated
            </li>
            <li style={styles.tipItem}>
              Limit particle count for better performance on lower-end devices
            </li>
            <li style={styles.tipItem}>
              Use <code>trigger="view"</code> for animations below the fold to delay rendering
            </li>
            <li style={styles.tipItem}>
              Avoid too many simultaneous animations on the same page
            </li>
            <li style={styles.tipItem}>
              Wave animation runs continuously - use sparingly for best performance
            </li>
          </ul>
        </div>

        {/* TypeScript */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>📝 TypeScript Support</h2>
          <p style={styles.text}>
            Full TypeScript support with type definitions included:
          </p>
          <CodeBlock
            title="TypeScript Usage"
            code={`import { TextAnimate, TextAnimateProps, AnimationType } from 'react-text-animator';

const animation: AnimationType = 'typewriter';

const props: TextAnimateProps = {
  animation: 'fadeIn',
  duration: 1000,
  children: 'Hello',
};`}
          />
        </div>
      </div>
    </section>
  );
};

const styles: Record<string, React.CSSProperties> = {
  docs: {
    minHeight: '100vh',
    padding: '4rem 0',
    background: 'linear-gradient(to bottom, #f8fafc 0%, #ffffff 100%)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  header: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  title: {
    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
    fontWeight: 800,
    marginBottom: '1rem',
    background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
    color: '#64748b',
    maxWidth: '600px',
    margin: '0 auto',
  },
  section: {
    marginBottom: '4rem',
    background: 'white',
    borderRadius: '16px',
    padding: '2rem',
    boxShadow: '0 4px 20px rgba(14, 165, 233, 0.08)',
    border: '1px solid #e0f2fe',
  },
  sectionTitle: {
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
    fontWeight: 700,
    color: '#0ea5e9',
    marginBottom: '1.5rem',
  },
  subsectionTitle: {
    fontSize: '1.25rem',
    fontWeight: 600,
    color: '#0284c7',
    marginTop: '2rem',
    marginBottom: '1rem',
  },
  codeBlock: {
    marginBottom: '1.5rem',
    borderRadius: '12px',
    overflow: 'hidden',
    border: '1px solid #e0f2fe',
  },
  codeHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.75rem 1rem',
    background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
  },
  codeTitle: {
    fontSize: '0.875rem',
    fontWeight: 600,
    color: 'white',
  },
  copyButton: {
    padding: '0.25rem 0.75rem',
    fontSize: '0.875rem',
    background: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontWeight: 500,
  },
  pre: {
    margin: 0,
    padding: '1.25rem',
    background: '#f8fafc',
    overflow: 'auto',
  },
  code: {
    fontFamily: 'Monaco, Courier New, monospace',
    fontSize: '0.875rem',
    color: '#1e293b',
    lineHeight: 1.6,
  },
  exampleSection: {
    marginBottom: '3rem',
    paddingBottom: '2rem',
    borderBottom: '1px solid #e0f2fe',
  },
  exampleTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#0284c7',
    marginBottom: '0.5rem',
  },
  exampleDescription: {
    color: '#64748b',
    marginBottom: '1.5rem',
    lineHeight: 1.6,
  },
  exampleDemo: {
    marginBottom: '1.5rem',
  },
  demoLabel: {
    fontSize: '0.875rem',
    fontWeight: 600,
    color: '#0ea5e9',
    marginBottom: '0.5rem',
  },
  demoBox: {
    padding: '2rem',
    background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
    borderRadius: '12px',
    border: '2px solid #0ea5e9',
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#0284c7',
    minHeight: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  propsTable: {
    marginBottom: '1.5rem',
  },
  tableRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '1rem',
    padding: '0.75rem 1rem',
    borderBottom: '1px solid #e0f2fe',
  },
  tableHeader: {
    fontWeight: 700,
    color: '#0ea5e9',
    fontSize: '0.875rem',
  },
  tableCell: {
    color: '#64748b',
    fontSize: '0.875rem',
    lineHeight: 1.6,
  },
  tipsList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  tipItem: {
    padding: '1rem',
    marginBottom: '0.75rem',
    background: '#f0f9ff',
    borderRadius: '8px',
    color: '#334155',
    lineHeight: 1.6,
    borderLeft: '4px solid #0ea5e9',
  },
  text: {
    color: '#64748b',
    lineHeight: 1.6,
    marginBottom: '1rem',
  },
};

export default Docs;
