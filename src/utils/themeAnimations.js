import { getTheme } from '../themes';

export function getCardHover(themeId) {
  const theme = getTheme(themeId);
  const accent = theme.colors.accent;
  const secondary = theme.colors.secondary;

  const hovers = {
    cyberpunk: {
      y: -8,
      scale: 1.02,
      boxShadow: `0 20px 50px ${accent}33, 0 0 30px ${accent}22`,
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
    },
    bgmi: {
      y: -5,
      scale: 1.015,
      rotate: -0.3,
      boxShadow: `0 16px 40px rgba(0,0,0,0.4), inset 0 0 20px ${accent}11`,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    valorant: {
      y: -6,
      scale: 1.025,
      boxShadow: `0 0 0 1px ${accent}, 0 20px 40px ${accent}33`,
      transition: { type: 'spring', stiffness: 400, damping: 20 },
    },
    wukong: {
      y: -7,
      scale: 1.02,
      boxShadow: `0 20px 45px ${accent}22, inset 0 0 30px ${secondary}11`,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
    sekiro: {
      y: -4,
      scale: 1.01,
      boxShadow: `0 12px 35px rgba(139,0,0,0.25), 0 0 20px ${accent}18`,
      transition: { duration: 0.4, ease: 'easeInOut' },
    },
    figma: {
      y: -10,
      scale: 1.03,
      borderRadius: '16px',
      boxShadow: `0 24px 50px ${accent}22, 0 8px 20px ${secondary}18`,
      transition: { type: 'spring', stiffness: 300, damping: 18 },
    },
    photoshop: {
      y: -6,
      scale: 1.018,
      x: 2,
      boxShadow: `0 16px 40px ${accent}28, -4px 4px 0 ${secondary}44`,
      transition: { duration: 0.25, ease: 'easeOut' },
    },
    sketch: {
      y: -3,
      scale: 1.008,
      rotate: 0.5,
      boxShadow: `0 8px 25px rgba(44,44,44,0.12), 2px 2px 0 ${accent}33`,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
    'digital-art': {
      y: -8,
      scale: 1.025,
      rotate: -0.5,
      boxShadow: `0 20px 50px ${accent}33, 0 0 40px ${secondary}22`,
      transition: { type: 'spring', stiffness: 280, damping: 16 },
    },
  };

  return hovers[themeId] || hovers.cyberpunk;
}

export function getSkillPillHover(themeId) {
  const theme = getTheme(themeId);
  const accent = theme.colors.accent;

  return {
    scale: 1.08,
    y: -2,
    backgroundColor: `${accent}22`,
    borderColor: accent,
    boxShadow: `0 4px 15px ${accent}33`,
    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
  };
}

export function getMilestoneHover(themeId) {
  const theme = getTheme(themeId);
  const accent = theme.colors.accent;

  const styles = {
    cyberpunk: { y: -6, scale: 1.03, boxShadow: `0 12px 30px ${accent}22` },
    bgmi: { y: -4, scale: 1.02, rotate: -0.5 },
    valorant: { y: -5, scale: 1.025, boxShadow: `0 0 0 1px ${accent}` },
    wukong: { y: -5, scale: 1.02, boxShadow: `0 15px 35px ${accent}18` },
    sekiro: { y: -3, scale: 1.015 },
    figma: { y: -8, scale: 1.04, borderRadius: '14px' },
    photoshop: { y: -4, x: 3, scale: 1.02 },
    sketch: { y: -2, rotate: 0.8, scale: 1.01 },
    'digital-art': { y: -6, scale: 1.03, rotate: -1 },
  };

  return styles[themeId] || styles.cyberpunk;
}

export function getExperienceHover(themeId) {
  const theme = getTheme(themeId);
  return {
    boxShadow: `0 20px 60px ${theme.colors.accent}15, inset 0 1px 0 ${theme.colors.accent}22`,
    borderColor: theme.colors.accent,
  };
}

export function getCardClass(themeId) {
  return `theme-card-${themeId}`;
}
