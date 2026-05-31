import React, { useState, useEffect } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import SoundToggle from './SoundToggle';

const Header = ({ currentTheme, onThemeChange }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'About', target: 'about' },
    { label: 'Terminal', target: 'terminal-section' },
    { label: 'Experience', target: 'experience' },
    { label: 'Projects', target: 'projects' },
    { label: 'Skills', target: 'skills' },
    { label: 'Achievements', target: 'achievements' },
    { label: 'Contact', target: 'contact' },
  ];

  return (
    <>
      <header
        className="site-header"
        style={{
          background: scrolled ? 'var(--bg-secondary)' : 'transparent',
          backdropFilter: 'blur(10px)',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(255, 255, 255, 0.04)',
        }}
      >
        <div className="site-header-inner">
          <a
            href="#"
            onClick={(e) => smoothScroll(e, 'home')}
            className="interactive"
            style={{
              fontSize: 'clamp(1.1rem, 4vw, 1.5rem)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              letterSpacing: '1px',
              flexShrink: 0,
            }}
          >
            <span style={{ color: 'var(--accent-cyan)' }}>Aditya</span>Sharma
          </a>

          <nav className="desktop-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <ul style={{ display: 'flex', listStyle: 'none', gap: 'clamp(1rem, 2vw, 2rem)', margin: 0, padding: 0, flexWrap: 'wrap' }}>
              {navLinks.map((link) => (
                <li key={link.target}>
                  <a
                    href={`#${link.target}`}
                    onClick={(e) => smoothScroll(e, link.target)}
                    className="interactive"
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      transition: 'color 0.2s',
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-header-actions">
            <SoundToggle />
            <ThemeSwitcher currentTheme={currentTheme} onThemeChange={onThemeChange} />

            <a
              href="#contact"
              onClick={(e) => smoothScroll(e, 'contact')}
              className="interactive glass-panel header-cta-link"
              style={{
                padding: '8px 20px',
                border: '1px solid var(--accent-cyan)',
                color: 'var(--accent-cyan)',
                fontSize: '0.9rem',
                fontWeight: 600,
                borderRadius: '4px',
                background: 'rgba(0, 255, 255, 0.05)',
                transition: 'all 0.3s',
                whiteSpace: 'nowrap',
              }}
            >
              Let's Talk
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="interactive header-mobile-toggle"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="mobile-nav-drawer" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="interactive mobile-nav-close"
            aria-label="Close menu"
          >
            ✕
          </button>
          {navLinks.map((link) => (
            <a
              key={link.target}
              href={`#${link.target}`}
              onClick={(e) => smoothScroll(e, link.target)}
              className="interactive"
              style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
