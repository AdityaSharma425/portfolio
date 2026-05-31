import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getTheme, isLightTheme } from '../themes';
import resumePdf from '../files/AdityaSharma-CV.pdf';

const HeroDecor = ({ decor }) => {
  const baseStyle = {
    position: 'absolute',
    userSelect: 'none',
    zIndex: 0,
    pointerEvents: 'none',
  };

  switch (decor) {
    case 'kanji-future':
      return (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.05, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          style={{ ...baseStyle, fontSize: '15vw', fontWeight: 800, whiteSpace: 'nowrap', color: 'var(--text-primary)', top: '15%', left: '5%', fontFamily: "'Noto Sans JP', sans-serif" }}
          className="hero-decor-kanji"
        >
          未来
        </motion.div>
      );
    case 'crosshair':
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 1.2 }}
          style={{ ...baseStyle, top: '18%', right: '8%', width: '200px', height: '200px' }}
        >
          <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="var(--accent-cyan)" strokeWidth="0.8">
            <circle cx="50" cy="50" r="40" opacity="0.6" />
            <circle cx="50" cy="50" r="25" opacity="0.4" />
            <line x1="50" y1="5" x2="50" y2="95" opacity="0.5" />
            <line x1="5" y1="50" x2="95" y2="50" opacity="0.5" />
            <circle cx="50" cy="50" r="3" fill="var(--accent-cyan)" />
          </svg>
        </motion.div>
      );
    case 'valorant-v':
      return (
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 0.07, x: 0 }}
          transition={{ duration: 1.2 }}
          style={{ ...baseStyle, top: '12%', right: '5%', fontSize: '20vw', fontWeight: 900, color: 'var(--accent-cyan)', fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.05em' }}
        >
          V
        </motion.div>
      );
    case 'wukong-enso':
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 0.12, scale: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          style={{ ...baseStyle, width: '30vw', height: '30vw', top: '10%', left: '3%' }}
        >
          <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="var(--accent-cyan)" strokeLinecap="round">
            <path d="M 50,12 A 38,38 0 1,1 42,14" strokeWidth="4" opacity="0.9" />
            <path d="M 48,9 A 41,41 0 1,1 38,12" strokeWidth="1.5" opacity="0.4" />
          </svg>
        </motion.div>
      );
    case 'sekiro-kanji':
      return (
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 0.07, x: 0 }}
          transition={{ duration: 2, delay: 0.3 }}
          style={{ ...baseStyle, right: '4%', top: '15%', fontSize: '8vw', fontFamily: "'Noto Serif JP', serif", writingMode: 'vertical-rl', textOrientation: 'upright', color: 'var(--accent-cyan)', fontWeight: 900, letterSpacing: '1rem' }}
        >
          不死
        </motion.div>
      );
    case 'figma-dots':
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1.5 }}
          style={{ ...baseStyle, top: '10%', right: '5%', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}
        >
          {['#f24e1e', '#ff7262', '#a259ff', '#0acf83', '#0d99ff', '#ffc700', '#1e1e1e', '#ffffff'].map((c, i) => (
            <motion.div
              key={c}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
              style={{ width: '24px', height: '24px', borderRadius: '50%', background: c, boxShadow: `0 2px 8px ${c}44` }}
            />
          ))}
        </motion.div>
      );
    case 'brush-stroke':
      return (
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 0.1, scaleX: 1 }}
          transition={{ duration: 1.5 }}
          style={{ ...baseStyle, top: '20%', left: '5%', width: '40vw', transformOrigin: 'left' }}
        >
          <svg viewBox="0 0 400 60" width="100%" height="60" fill="none">
            <path d="M 0,30 Q 100,5 200,35 T 400,25" stroke="var(--accent-cyan)" strokeWidth="8" strokeLinecap="round" opacity="0.7" />
            <path d="M 20,40 Q 120,55 220,30 T 380,45" stroke="var(--accent-purple)" strokeWidth="4" strokeLinecap="round" opacity="0.4" />
          </svg>
        </motion.div>
      );
    case 'sketch-lines':
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 1.5 }}
          style={{ ...baseStyle, inset: '10%', backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, var(--accent-pink) 10px, var(--accent-pink) 11px)', opacity: 0.06 }}
        />
      );
    case 'palette-splash':
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.12, scale: 1 }}
          transition={{ duration: 1.5 }}
          style={{ ...baseStyle, top: '8%', right: '3%', width: '250px', height: '250px' }}
        >
          <svg viewBox="0 0 200 200" width="100%" height="100%">
            <circle cx="100" cy="80" r="50" fill="#e040fb" opacity="0.5" />
            <circle cx="60" cy="120" r="40" fill="#00bcd4" opacity="0.4" />
            <circle cx="140" cy="130" r="35" fill="#2979ff" opacity="0.45" />
            <circle cx="100" cy="150" r="30" fill="#ff5252" opacity="0.35" />
          </svg>
        </motion.div>
      );
    default:
      return null;
  }
};

const HeroName = ({ effect }) => {
  if (effect === 'glitch') {
    return (
      <span className="glitch neon-text" data-text="Sharma" style={{ color: 'var(--accent-cyan)' }}>
        Sharma
      </span>
    );
  }
  if (effect === 'gradient') {
    return <span className="name-gradient">Sharma</span>;
  }
  if (effect === 'italic') {
    return (
      <span style={{ color: 'var(--accent-cyan)', fontStyle: 'italic' }}>
        Sharma
      </span>
    );
  }
  return <span style={{ color: 'var(--accent-cyan)' }}>Sharma</span>;
};

const Hero = ({ currentTheme }) => {
  const theme = getTheme(currentTheme);
  const light = isLightTheme(currentTheme);
  const { hero } = theme;

  return (
    <section
      className="hero-container"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '2rem',
        overflow: 'hidden',
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTheme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{ position: 'absolute', inset: 0, zIndex: 0 }}
        >
          <div
            className="hero-orb"
            style={{
              position: 'absolute',
              top: '20%',
              left: '10%',
              width: 'min(300px, 50vw)',
              height: 'min(300px, 50vw)',
              background: 'var(--hero-orb-1)',
              filter: 'blur(120px)',
              opacity: hero.orbIntensity,
              borderRadius: '50%',
            }}
          />
          <div
            className="hero-orb"
            style={{
              position: 'absolute',
              bottom: '10%',
              right: '15%',
              width: 'min(360px, 55vw)',
              height: 'min(360px, 55vw)',
              background: 'var(--hero-orb-2)',
              filter: 'blur(140px)',
              opacity: hero.orbIntensity * 0.85,
              borderRadius: '50%',
            }}
          />
          <HeroDecor decor={hero.decor} />
        </motion.div>
      </AnimatePresence>

      <div style={{ zIndex: 1, maxWidth: '1000px', width: '100%', position: 'relative' }}>
        <motion.div
          key={`badge-${currentTheme}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            background: light ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.06)',
            border: '1px solid var(--border-glow)',
            borderRadius: '20px',
            marginBottom: '24px',
          }}
          className="interactive"
        >
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--accent-cyan)',
              boxShadow: `0 0 10px var(--accent-cyan)`,
            }}
          />
          <span className="mono-text" style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', letterSpacing: '1px' }}>
            {hero.badge}
          </span>
        </motion.div>

        <motion.h1
          key={`heading-${currentTheme}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{ fontSize: '4.5rem', marginBottom: '1rem', letterSpacing: '-1px' }}
          className="hero-title"
        >
          Aditya <HeroName effect={hero.nameEffect} />
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '2rem', fontWeight: 400 }}
          className="hero-subtitle"
        >
          Software Engineer <span style={{ color: 'var(--accent-pink)' }}>|</span> Full Stack Developer{' '}
          <span style={{ color: 'var(--accent-pink)' }}>|</span> AI Builder
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          style={{ fontSize: '1.1rem', maxWidth: '600px', color: 'var(--text-secondary)', marginBottom: '3rem' }}
        >
          I engineer scalable full-stack applications, conversational AI engines, and modern infrastructures. Bridging the gap between high-performance systems and immersive design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          className="hero-actions"
        >
          <a
            href="#projects"
            className="interactive glass-panel"
            style={{
              padding: '12px 28px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: light ? '#fff' : 'var(--bg-primary)',
              background: 'var(--accent-cyan)',
              fontWeight: 600,
              borderRadius: '4px',
              boxShadow: `0 0 15px ${theme.colors.accent}66`,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="4 17 10 11 4 5" />
              <line x1="12" y1="19" x2="20" y2="19" />
            </svg>
            Initialize Projects
          </a>
          <a
            href={resumePdf}
            download="AdityaSharma-CV.pdf"
            className="interactive glass-panel"
            style={{
              padding: '12px 28px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--text-primary)',
              background: 'rgba(255, 255, 255, 0.05)',
              fontWeight: 600,
              border: '1px solid var(--accent-cyan)',
              borderRadius: '4px',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Retrieve CV
          </a>
          <a
            href="#contact"
            className="interactive glass-panel"
            style={{
              padding: '12px 28px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--text-primary)',
              background: 'transparent',
              fontWeight: 600,
              border: '1px solid var(--accent-pink)',
              borderRadius: '4px',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Transmit Message
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          style={{ display: 'flex', gap: '1.5rem', marginTop: '4rem' }}
          className="hero-social"
        >
          <a href="https://github.com/AdityaSharma425" target="_blank" rel="noopener noreferrer" className="interactive" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
          </a>
          <a href="https://linkedin.com/in/aditya-sharma-42as" target="_blank" rel="noopener noreferrer" className="interactive" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
