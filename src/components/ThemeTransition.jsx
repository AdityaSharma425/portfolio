import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getTheme } from '../themes';

const ThemeTransition = ({ currentTheme }) => {
  const [flash, setFlash] = useState(null);

  useEffect(() => {
    const theme = getTheme(currentTheme);
    setFlash(theme.id);
    const timer = setTimeout(() => setFlash(null), 700);
    return () => clearTimeout(timer);
  }, [currentTheme]);

  return (
    <AnimatePresence>
      {flash && (
        <motion.div
          key={flash}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.35, 0] }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9998,
            pointerEvents: 'none',
            background: `radial-gradient(circle at 50% 50%, ${getTheme(flash).colors.accent}44 0%, transparent 70%)`,
          }}
        />
      )}
    </AnimatePresence>
  );
};

export default ThemeTransition;
