import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  THEMES,
  DEFAULT_THEME,
  THEME_CATEGORIES,
  applyThemeToDOM,
  normalizeStoredTheme,
  getThemesByCategory,
  getTheme,
} from '../themes';
import { changeTheme } from '../utils/changeTheme';
import ThemePreviewScene from './theme/ThemePreviewScene';
import ThemeDialer from './theme/ThemeDialer';
import { useInputMode } from '../hooks/useInputMode';
import '../styles/theme-gate.css';

const FILTERS = [
  { key: 'all', label: 'All Worlds', icon: '◈' },
  { key: 'games', label: 'Games I Play', icon: '🎮' },
  { key: 'art', label: 'Art & Design', icon: '🎨' },
];

const ThemeSelector = ({ onThemeSelect, onEnter }) => {
  const saved = normalizeStoredTheme(localStorage.getItem('portfolio-theme'));
  const [focusedId, setFocusedId] = useState(saved || DEFAULT_THEME);
  const [filter, setFilter] = useState('all');
  const [exiting, setExiting] = useState(false);
  const { finePointer } = useInputMode();

  const visibleThemes = useMemo(
    () => (filter === 'all' ? THEMES : getThemesByCategory(filter)),
    [filter]
  );

  const focusedTheme = getTheme(focusedId);

  useEffect(() => {
    applyThemeToDOM(focusedId);
    onThemeSelect?.(focusedId);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    applyThemeToDOM(focusedId);
    onThemeSelect?.(focusedId);
  }, [focusedId, onThemeSelect]);

  useEffect(() => {
    const inList = visibleThemes.some((t) => t.id === focusedId);
    if (!inList && visibleThemes.length > 0) {
      setFocusedId(visibleThemes[0].id);
    }
  }, [filter, visibleThemes, focusedId]);

  const enterPortfolio = (themeId) => {
    setExiting(true);
    changeTheme(themeId, onThemeSelect);
    setTimeout(() => onEnter?.(), 700);
  };

  const categoryLabel = THEME_CATEGORIES[focusedTheme.category]?.label;

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="theme-gate"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="theme-gate-hero">
            <AnimatePresence mode="wait">
              <motion.div
                key={focusedId}
                className="theme-gate-hero-bg"
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55 }}
              >
                <ThemePreviewScene theme={focusedTheme} className="theme-gate-scene" />
              </motion.div>
            </AnimatePresence>

            <div className="theme-gate-hero-gradient" />

            <div className="theme-gate-brand">
              <span className="theme-gate-logo">Aditya<span>Sharma</span></span>
              <span className="theme-gate-portfolio-label">Portfolio</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={focusedId}
                className="theme-gate-hero-content"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="theme-gate-meta-row">
                  <span className="theme-gate-category-pill">{categoryLabel}</span>
                  <span className="theme-gate-tag" style={{ color: focusedTheme.colors.accent }}>
                    {focusedTheme.tag}
                  </span>
                </div>
                <h1 className="theme-gate-title">
                  <span className="theme-gate-title-emoji">{focusedTheme.emoji}</span>
                  {focusedTheme.name}
                </h1>
                <p className="theme-gate-tagline">{focusedTheme.tagline}</p>
                <div className="theme-gate-features">
                  {focusedTheme.features?.map((f) => (
                    <span key={f} className="theme-gate-feature">{f}</span>
                  ))}
                </div>
                <div className="theme-gate-actions">
                  <motion.button
                    type="button"
                    className="interactive theme-gate-enter"
                    style={{ background: focusedTheme.colors.accent }}
                    onClick={() => enterPortfolio(focusedId)}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    ▶ Enter Portfolio
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="theme-gate-body" id="theme-dialer">
            <p className="theme-gate-who">Select Your Dimension</p>

            {/* Category filters — not duplicate carousels */}
            <div className="theme-gate-filters">
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  className={`interactive theme-gate-filter ${filter === f.key ? 'active' : ''}`}
                  onClick={() => setFilter(f.key)}
                >
                  <span className="theme-gate-filter-icon">{f.icon}</span>
                  {f.label}
                  {f.key !== 'all' && (
                    <span className="theme-gate-filter-count">
                      {getThemesByCategory(f.key).length}
                    </span>
                  )}
                </button>
              ))}
            </div>

            <p className="theme-gate-hint">
              {finePointer
                ? 'Arrow keys to rotate dial · Enter or click center card to launch'
                : 'Swipe the dial left/right · Tap arrows or side cards · Tap center to enter'}
            </p>

            <ThemeDialer
              themes={visibleThemes}
              focusedId={focusedId}
              onFocus={setFocusedId}
              onSelect={enterPortfolio}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ThemeSelector;
