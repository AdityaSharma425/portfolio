import React from 'react';
import { getTheme } from '../../themes';

const badgeContent = {
  terminal: (label) => ({ prefix: '>', suffix: '_' }),
  military: () => ({ prefix: '◆', suffix: '' }),
  agent: () => ({ prefix: '▲', suffix: '' }),
  seal: () => ({ prefix: '印', suffix: '' }),
  blood: () => ({ prefix: '⚔', suffix: '' }),
  component: () => ({ prefix: '◻', suffix: '' }),
  layer: () => ({ prefix: '▤', suffix: '' }),
  sketch: () => ({ prefix: '✎', suffix: '' }),
  palette: () => ({ prefix: '◉', suffix: '' }),
};

const ThemeSectionBadge = ({ label, currentTheme }) => {
  const theme = getTheme(currentTheme);
  const style = theme.ui?.badgeStyle || 'terminal';
  const content = badgeContent[style]?.() || badgeContent.terminal();

  return (
    <div className={`section-badge section-badge-${style}`}>
      {content.prefix && <span className="section-badge-icon">{content.prefix}</span>}
      <span>{label}</span>
      {content.suffix && <span className="section-badge-blink">{content.suffix}</span>}
    </div>
  );
};

export default ThemeSectionBadge;
