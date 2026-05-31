import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { isSoundEnabled, setSoundEnabled, initAudio, previewSound } from '../utils/themeSound';

const SoundToggle = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(isSoundEnabled());
  }, []);

  const toggle = () => {
    const next = !enabled;
    setEnabled(next);
    setSoundEnabled(next);
    if (next) {
      initAudio();
      previewSound();
    }
  };

  return (
    <motion.button
      onClick={toggle}
      className="interactive sound-toggle-btn"
      title={enabled ? 'Mute theme sounds' : 'Enable theme sounds'}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      style={{
        width: '38px',
        height: '38px',
        borderRadius: '50%',
        background: enabled ? 'rgba(0, 240, 255, 0.08)' : 'var(--bg-secondary)',
        border: `1px solid ${enabled ? 'var(--accent-cyan)' : 'var(--border-glow)'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: enabled ? 'var(--accent-cyan)' : 'var(--text-secondary)',
        fontSize: '1rem',
        transition: 'all 0.3s ease',
        boxShadow: enabled ? '0 0 12px var(--border-glow)' : 'none',
      }}
    >
      {enabled ? '🔊' : '🔇'}
    </motion.button>
  );
};

export default SoundToggle;
