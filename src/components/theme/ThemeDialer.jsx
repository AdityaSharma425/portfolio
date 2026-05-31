import React, { useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { THEME_CATEGORIES } from '../../themes';
import { useInputMode } from '../../hooks/useInputMode';
import { useDialerLayout } from '../../hooks/useDialerLayout';

const SWIPE_THRESHOLD = 48;

const ThemeDialer = ({ themes, focusedId, onFocus, onSelect }) => {
  const { finePointer, touchPrimary } = useInputMode();
  const { spread, visibleRange } = useDialerLayout();
  const touchStart = useRef(null);
  const stageRef = useRef(null);

  const focusedIndex = themes.findIndex((t) => t.id === focusedId);
  const safeIndex = focusedIndex >= 0 ? focusedIndex : 0;

  const navigate = useCallback(
    (dir) => {
      const next = Math.max(0, Math.min(themes.length - 1, safeIndex + dir));
      onFocus(themes[next].id);
    },
    [safeIndex, themes, onFocus]
  );

  useEffect(() => {
    if (!finePointer) return;

    const onKey = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        navigate(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        navigate(1);
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        onSelect(focusedId);
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [navigate, focusedId, onSelect, finePointer]);

  const onTouchStart = (e) => {
    if (!touchPrimary || e.touches.length !== 1) return;
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const onTouchEnd = (e) => {
    if (!touchPrimary || !touchStart.current || e.changedTouches.length !== 1) return;
    const dx = e.changedTouches[0].clientX - touchStart.current.x;
    const dy = e.changedTouches[0].clientY - touchStart.current.y;
    touchStart.current = null;

    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return;
    navigate(dx > 0 ? -1 : 1);
  };

  const rotation = themes.length > 1 ? (safeIndex / (themes.length - 1)) * 270 - 135 : 0;

  return (
    <div className="theme-dialer">
      <div className="theme-dialer-ring-wrap" aria-hidden="true">
        <motion.div
          className="theme-dialer-ring"
          animate={{ rotate: rotation }}
          transition={{ type: 'tween', duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {[...Array(36)].map((_, i) => (
            <span
              key={i}
              className={`theme-dialer-tick ${i % 9 === 0 ? 'major' : ''}`}
              style={{ transform: `rotate(${i * 10}deg) translateY(calc(min(260px, 45vw) * -1 + 12px))` }}
            />
          ))}
        </motion.div>
        <div className="theme-dialer-ring-glow" />
      </div>

      <div className="theme-dialer-counter">
        <span className="theme-dialer-counter-current">{String(safeIndex + 1).padStart(2, '0')}</span>
        <span className="theme-dialer-counter-sep">/</span>
        <span className="theme-dialer-counter-total">{String(themes.length).padStart(2, '0')}</span>
      </div>

      <div
        ref={stageRef}
        className="theme-dialer-stage"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        style={{ '--dialer-spread': `${spread}px` }}
      >
        {themes.map((theme, i) => {
          const offset = i - safeIndex;
          const abs = Math.abs(offset);
          if (abs > visibleRange) return null;

          const isFocused = offset === 0;
          const x = offset * spread;
          const scale = isFocused ? 1 : Math.max(0.58, 1 - abs * 0.14);
          const rotateY = offset * (spread <= 128 ? -22 : -28);
          const zIndex = 50 - abs;
          const opacity = Math.max(0.2, 1 - abs * 0.22);

          return (
            <motion.button
              key={theme.id}
              type="button"
              className={`interactive theme-dialer-card ${isFocused ? 'focused' : ''}`}
              onClick={() => (isFocused ? onSelect(theme.id) : onFocus(theme.id))}
              animate={{ x, scale, rotateY, opacity }}
              transition={{ type: 'tween', duration: 0.38, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ zIndex, '--dial-accent': theme.colors.accent }}
            >
              <div className="theme-dialer-card-inner">
                <div className="theme-dialer-card-art" style={{ background: theme.preview?.gradient }}>
                  <div className="theme-dialer-card-scene-fade" />
                  <span className="theme-dialer-card-emoji">{theme.emoji}</span>
                  <div
                    className="theme-dialer-card-shine"
                    style={{ background: `linear-gradient(135deg, ${theme.colors.accent}33, transparent 60%)` }}
                  />
                </div>
                <div className="theme-dialer-card-meta">
                  <span className="theme-dialer-card-cat">{THEME_CATEGORIES[theme.category]?.label}</span>
                  <span className="theme-dialer-card-name">{theme.name}</span>
                </div>
                {isFocused && (
                  <motion.div
                    className="theme-dialer-card-ring"
                    layoutId="dialer-ring"
                    style={{ boxShadow: `0 0 0 2px ${theme.colors.accent}, 0 0 40px ${theme.colors.accent}55` }}
                  />
                )}
              </div>
              {isFocused && <div className="theme-dialer-reflection" style={{ background: theme.preview?.gradient }} />}
            </motion.button>
          );
        })}
      </div>

      <div className="theme-dialer-nav">
        <button type="button" className="interactive theme-dialer-nav-btn" onClick={() => navigate(-1)} disabled={safeIndex === 0} aria-label="Previous theme">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <button
          type="button"
          className="interactive theme-dialer-enter-hint"
          onClick={() => onSelect(focusedId)}
        >
          {touchPrimary ? 'Tap to Enter' : 'Enter World'}
        </button>
        <button type="button" className="interactive theme-dialer-nav-btn" onClick={() => navigate(1)} disabled={safeIndex === themes.length - 1} aria-label="Next theme">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>
    </div>
  );
};

export default ThemeDialer;
