import React from 'react';

const Footer = () => {
  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      background: 'rgba(5, 5, 5, 0.8)',
      padding: '3rem 2rem'
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '2rem'
      }} className="footer-container">
        
        <div>
          <a href="#" onClick={(e) => smoothScroll(e, 'home')} className="interactive" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            <span style={{ color: 'var(--accent-cyan)' }}>A</span>S
          </a>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            &copy; 2026 Aditya Sharma. Built with deep premium aesthetics.
          </p>
        </div>

        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }} className="footer-links">
          <li><a href="#about" onClick={(e) => smoothScroll(e, 'about')} className="interactive" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>About</a></li>
          <li><a href="#projects" onClick={(e) => smoothScroll(e, 'projects')} className="interactive" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Projects</a></li>
          <li><a href="#skills" onClick={(e) => smoothScroll(e, 'skills')} className="interactive" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Skills</a></li>
          <li><a href="#contact" onClick={(e) => smoothScroll(e, 'contact')} className="interactive" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Contact</a></li>
        </ul>

      </div>
    </footer>
  );
};

export default Footer;
