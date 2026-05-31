import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { THEMES, getTheme } from '../themes';
import { changeTheme } from '../utils/changeTheme';

const ThemeSwitcher = ({ currentTheme, onThemeChange }) => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const active = getTheme(currentTheme);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  const selectTheme = (themeId) => {
    if (themeId !== currentTheme) changeTheme(themeId, onThemeChange);
    setOpen(false);
  };

  return (
    <div ref={panelRef} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(!open)}
        className="interactive theme-switcher-btn"
        title="Switch theme"
        style={{
          borderColor: active.colors.accent,
          color: active.colors.accent,
          boxShadow: open ? `0 0 20px ${active.colors.accent}44` : `0 0 10px var(--border-glow)`,
        }}
      >
        <span style={{ fontSize: '1rem' }}>{active.emoji}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ fontSize: '0.65rem', opacity: 0.7 }}
        >
          ▼
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="theme-switcher-panel glass-panel"
          >
            <div className="mono-text" style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', letterSpacing: '2px', marginBottom: '0.75rem', padding: '0 4px' }}>
              SWITCH DIMENSION
            </div>
            <div className="theme-switcher-grid">
              {THEMES.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => selectTheme(theme.id)}
                  className={`interactive theme-switcher-item ${currentTheme === theme.id ? 'active' : ''}`}
                  style={{
                    borderColor: currentTheme === theme.id ? theme.colors.accent : 'transparent',
                    background: currentTheme === theme.id ? `${theme.colors.accent}18` : 'transparent',
                  }}
                  title={theme.name}
                >
                  <span style={{ fontSize: '1.2rem' }}>{theme.emoji}</span>
                  <span className="theme-switcher-label">{theme.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;
