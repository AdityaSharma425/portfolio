import { applyThemeToDOM } from '../themes';
import { playThemeSound } from './themeSound';

export function changeTheme(themeId, onThemeChange) {
  applyThemeToDOM(themeId);
  playThemeSound(themeId);
  if (onThemeChange) onThemeChange(themeId);
}
