import React from 'react';
import { motion } from 'framer-motion';
import { getTheme } from '../themes';

const ThemeBackground = ({ currentTheme }) => {
  const theme = getTheme(currentTheme);
  const intensity = theme.category === 'games' ? 0.45 : theme.category === 'art' ? 0.38 : 0.3;

  return (
    <motion.div
      key={currentTheme}
      initial={{ opacity: 0 }}
      animate={{ opacity: intensity }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`theme-bg theme-bg-${currentTheme}`}
      aria-hidden="true"
    />
  );
};

export default ThemeBackground;
