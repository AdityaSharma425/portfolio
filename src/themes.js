export const THEME_STORAGE_KEY = 'portfolio-theme';
export const DEFAULT_THEME = 'cyberpunk';

export const THEME_CATEGORIES = {
  default: { label: 'Professional', subtitle: 'Default experience' },
  games: { label: 'Games I Play', subtitle: 'Night City to battle royale' },
  art: { label: 'Art & Design', subtitle: 'Creative studio modes' },
};

export const THEMES = [
  {
    id: 'cyberpunk',
    name: 'Cyberpunk 2077',
    category: 'games',
    tag: 'NIGHT_CITY',
    emoji: '🌆',
    tagline: 'Wake up, samurai. Night City chrome. Neon rain.',
    description: 'CD Projekt Red\'s Night City — yellow HUD chrome, digital rain, glitch typography, and corpo-grade dev terminal vibes.',
    features: ['Night City skyline', 'Digital rain particles', '2077 chrome HUD'],
    colors: { accent: '#fcee0a', secondary: '#00f0ff', bg: '#0a0a0a', cardBg: 'rgba(10, 10, 18, 0.85)' },
    preview: { gradient: 'linear-gradient(135deg, #0a0a0a 0%, #1a1020 45%, #0a1a2e 100%)', scene: 'cyberpunk' },
    hero: { badge: 'NIGHT CITY // AVAILABLE FOR HIRE', nameEffect: 'glitch', decor: 'kanji-future', orbIntensity: 0.2 },
    particles: 'cyber',
    cursor: { glow: true, dotSize: 8, ringStyle: 'neon', ringSize: 24, hoverRing: 40 },
    terminal: { kernel: 'Relic OS v2.077', variant: 'dark' },
    ui: { cardStyle: 'neon-cyber', badgeStyle: 'terminal', divider: 'grid', buttonShape: 'sharp', sectionFrame: 'hud' },
  },
  {
    id: 'bgmi',
    name: 'BGMI',
    category: 'games',
    tag: 'TACTICAL_ZONE',
    emoji: '🎯',
    tagline: 'Drop in. Survive. Dominate the zone.',
    description: 'Military tactical HUD, smoke particles, crosshair overlays, and drop-zone energy across every section.',
    features: ['Tactical crosshair HUD', 'Smoke particles', 'Military typography'],
    colors: { accent: '#f5a623', secondary: '#c4a35a', bg: '#1a1f0e', cardBg: 'rgba(26, 31, 14, 0.92)' },
    preview: { gradient: 'linear-gradient(180deg, #2a3318 0%, #1a1f0e 60%, #0f1208 100%)', scene: 'bgmi' },
    hero: { badge: 'DROP ZONE // ACTIVE FOR HIRE', nameEffect: 'solid', decor: 'crosshair', orbIntensity: 0.12 },
    particles: 'tactical',
    cursor: { glow: false, dotSize: 6, ringStyle: 'crosshair', ringSize: 28, hoverRing: 36 },
    terminal: { kernel: 'Tactical Shell v4.2', variant: 'dark' },
    ui: { cardStyle: 'tactical', badgeStyle: 'military', divider: 'crosshair', buttonShape: 'tactical', sectionFrame: 'scope' },
  },
  {
    id: 'valorant',
    name: 'Valorant',
    category: 'games',
    tag: 'AGENT_SELECT',
    emoji: '🔺',
    tagline: 'Precision agents. Angular combat. Spike planted.',
    description: 'Riot-red angular geometry, agent-select energy, triangular particles, and clipped-corner UI panels.',
    features: ['Angular UI panels', 'Agent shards', 'Spike timer HUD'],
    colors: { accent: '#ff4655', secondary: '#17d3c7', bg: '#0f1923', cardBg: 'rgba(15, 25, 35, 0.92)' },
    preview: { gradient: 'linear-gradient(135deg, #0f1923 0%, #1a1020 50%, #0f1923 100%)', scene: 'valorant' },
    hero: { badge: 'SPIKE PLANTED // AVAILABLE FOR HIRE', nameEffect: 'solid', decor: 'valorant-v', orbIntensity: 0.15 },
    particles: 'valorant',
    cursor: { glow: true, dotSize: 7, ringStyle: 'angular', ringSize: 22, hoverRing: 34 },
    terminal: { kernel: 'Agent Terminal', variant: 'dark' },
    ui: { cardStyle: 'angular', badgeStyle: 'agent', divider: 'diagonal', buttonShape: 'cut-corner', sectionFrame: 'valorant' },
  },
  {
    id: 'wukong',
    name: 'Black Myth Wukong',
    category: 'games',
    tag: 'MYTHIC_REALM',
    emoji: '🐒',
    tagline: 'Ancient myth. Golden embers. Jade mist.',
    description: 'Mythic eastern aesthetics with golden Enso circles, ember particles, serif calligraphy, and mountain silhouettes.',
    features: ['Golden embers', 'Enso decor', 'Mythic serif type'],
    colors: { accent: '#c9a227', secondary: '#2d6a4f', bg: '#0d0d0d', cardBg: 'rgba(13, 13, 13, 0.94)' },
    preview: { gradient: 'linear-gradient(180deg, #1a1510 0%, #0d0d0d 70%, #0a0806 100%)', scene: 'wukong' },
    hero: { badge: 'JADE PALACE // ACTIVE FOR HIRE', nameEffect: 'italic', decor: 'wukong-enso', orbIntensity: 0.18 },
    particles: 'embers',
    cursor: { glow: true, dotSize: 7, ringStyle: 'golden', ringSize: 26, hoverRing: 38 },
    terminal: { kernel: 'Mythic Kernel', variant: 'dark' },
    ui: { cardStyle: 'mythic', badgeStyle: 'seal', divider: 'enso', buttonShape: 'rounded-gold', sectionFrame: 'scroll' },
  },
  {
    id: 'sekiro',
    name: 'Sekiro',
    category: 'games',
    tag: 'SHINOBI_PATH',
    emoji: '⚔️',
    tagline: 'Death is not the end. Ash falls. Blades clash.',
    description: 'Shinobi blood-red accents, falling ash particles, torii silhouettes, and resurrection-style HUD elements.',
    features: ['Falling ash', 'Blood moon decor', 'Shinobi kanji'],
    colors: { accent: '#c41e3a', secondary: '#b8860b', bg: '#0a0808', cardBg: 'rgba(10, 8, 8, 0.94)' },
    preview: { gradient: 'linear-gradient(180deg, #1a0808 0%, #0a0808 60%, #050404 100%)', scene: 'sekiro' },
    hero: { badge: 'RESURRECTION // AVAILABLE FOR HIRE', nameEffect: 'solid', decor: 'sekiro-kanji', orbIntensity: 0.1 },
    particles: 'ash',
    cursor: { glow: false, dotSize: 6, ringStyle: 'blade', ringSize: 20, hoverRing: 32 },
    terminal: { kernel: 'Shinobi Shell', variant: 'dark' },
    ui: { cardStyle: 'shinobi', badgeStyle: 'blood', divider: 'katana', buttonShape: 'blade', sectionFrame: 'torii' },
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'art',
    tag: 'DESIGN_CANVAS',
    emoji: '🎨',
    tagline: 'Auto-layout. Components. Design systems.',
    description: 'Figma\'s color spectrum, floating component dots, rounded pill UI, and collaborative canvas energy.',
    features: ['Color spectrum dots', 'Pill-shaped UI', 'Component frames'],
    colors: { accent: '#a259ff', secondary: '#0acf83', bg: '#ffffff', cardBg: 'rgba(255, 255, 255, 0.95)' },
    preview: { gradient: 'linear-gradient(135deg, #ffffff 0%, #f5f0ff 50%, #f0fff5 100%)', scene: 'figma' },
    hero: { badge: 'AUTO-LAYOUT // ACTIVE FOR HIRE', nameEffect: 'solid', decor: 'figma-dots', orbIntensity: 0.08 },
    particles: 'figma',
    cursor: { glow: false, dotSize: 8, ringStyle: 'figma', ringSize: 26, hoverRing: 36 },
    terminal: { kernel: 'Design System Shell', variant: 'light' },
    ui: { cardStyle: 'figma-frame', badgeStyle: 'component', divider: 'dots', buttonShape: 'pill', sectionFrame: 'artboard' },
  },
  {
    id: 'photoshop',
    name: 'Photoshop',
    category: 'art',
    tag: 'LAYER_STACK',
    emoji: '🖌️',
    tagline: 'Layers. Brushes. Pixel perfection.',
    description: 'Adobe dark UI with layer-stack panels, brush-stroke particles, and offset shadow card effects.',
    features: ['Layer stack panels', 'Brush particles', 'PS blue accents'],
    colors: { accent: '#31a8ff', secondary: '#001e36', bg: '#1e1e1e', cardBg: 'rgba(30, 30, 30, 0.94)' },
    preview: { gradient: 'linear-gradient(180deg, #2d2d2d 0%, #1e1e1e 60%, #001e36 100%)', scene: 'photoshop' },
    hero: { badge: 'SMART_OBJECT // AVAILABLE FOR HIRE', nameEffect: 'solid', decor: 'brush-stroke', orbIntensity: 0.12 },
    particles: 'brush',
    cursor: { glow: true, dotSize: 8, ringStyle: 'brush', ringSize: 24, hoverRing: 36 },
    terminal: { kernel: 'PS Script Console', variant: 'dark' },
    ui: { cardStyle: 'layer', badgeStyle: 'layer', divider: 'brush', buttonShape: 'ps', sectionFrame: 'layers' },
  },
  {
    id: 'sketch',
    name: 'Sketch Portrait',
    category: 'art',
    tag: 'CHARCOAL_STUDIO',
    emoji: '✏️',
    tagline: 'Graphite dust. Paper grain. Portrait lines.',
    description: 'Warm paper canvas, cross-hatch textures, pencil particles, and classical portrait studio aesthetics.',
    features: ['Paper texture', 'Pencil dust', 'Cross-hatch decor'],
    colors: { accent: '#c45c48', secondary: '#6b6b6b', bg: '#f5f0e8', cardBg: 'rgba(245, 240, 232, 0.96)' },
    preview: { gradient: 'linear-gradient(180deg, #f5f0e8 0%, #ebe4d8 100%)', scene: 'sketch' },
    hero: { badge: 'PORTRAIT MODE // ACTIVE FOR HIRE', nameEffect: 'italic', decor: 'sketch-lines', orbIntensity: 0.06 },
    particles: 'pencil',
    cursor: { glow: false, dotSize: 5, ringStyle: 'pencil', ringSize: 18, hoverRing: 28 },
    terminal: { kernel: 'Sketch Pad Shell', variant: 'light' },
    ui: { cardStyle: 'paper', badgeStyle: 'sketch', divider: 'hatch', buttonShape: 'sketch', sectionFrame: 'easel' },
  },
  {
    id: 'digital-art',
    name: 'Digital Art',
    category: 'art',
    tag: 'CREATIVE_FLOW',
    emoji: '🌈',
    tagline: 'Flow state. Color explosions. Pure creation.',
    description: 'Vibrant paint splatters, gradient name effects, rainbow cursor, and boundless creative energy.',
    features: ['Paint splatters', 'Gradient typography', 'Rainbow cursor'],
    colors: { accent: '#e040fb', secondary: '#00bcd4', bg: '#121218', cardBg: 'rgba(18, 18, 24, 0.92)' },
    preview: { gradient: 'linear-gradient(135deg, #121218 0%, #1a0a2e 40%, #0a1a2e 100%)', scene: 'digital-art' },
    hero: { badge: 'FLOW STATE // AVAILABLE FOR HIRE', nameEffect: 'gradient', decor: 'palette-splash', orbIntensity: 0.2 },
    particles: 'splatter',
    cursor: { glow: true, dotSize: 10, ringStyle: 'rainbow', ringSize: 28, hoverRing: 42 },
    terminal: { kernel: 'Creative Terminal', variant: 'dark' },
    ui: { cardStyle: 'splatter', badgeStyle: 'palette', divider: 'splash', buttonShape: 'blob', sectionFrame: 'canvas' },
  },
];

export const THEME_IDS = THEMES.map((t) => t.id);

export function getTheme(id) {
  return THEMES.find((t) => t.id === id) || THEMES[0];
}

export function getThemesByCategory(category) {
  return THEMES.filter((t) => t.category === category);
}

export function isLightTheme(id) {
  return getTheme(id).terminal.variant === 'light';
}

export function normalizeStoredTheme(stored) {
  if (!stored || stored === 'fuji' || !THEME_IDS.includes(stored)) return DEFAULT_THEME;
  return stored;
}

export function applyThemeToDOM(themeId) {
  const theme = getTheme(themeId);
  document.body.setAttribute('data-theme', themeId);
  document.body.setAttribute('data-ui', theme.ui.sectionFrame);
  localStorage.setItem(THEME_STORAGE_KEY, themeId);
}
