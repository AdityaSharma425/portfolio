import React from 'react';

const scenes = {
  cyberpunk: ({ accent, secondary }) => (
    <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" className="preview-scene-svg">
      <defs>
        <linearGradient id="cp-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1020" />
          <stop offset="55%" stopColor="#0a0a12" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill="url(#cp-sky)" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <rect
          key={i}
          x={i * 78 + 10}
          y={190 - (i % 3) * 12}
          width={32 + (i % 4) * 8}
          height={260 + (i % 5) * 18}
          fill="#0d0d12"
          stroke={i % 2 === 0 ? accent : secondary}
          strokeWidth="0.6"
          opacity="0.65"
        />
      ))}
      {[...Array(24)].map((_, i) => (
        <line key={i} x1={i * 36} y1="0" x2={i * 36 - 90} y2="450" stroke={secondary} strokeOpacity="0.05" />
      ))}
      <text x="400" y="200" textAnchor="middle" fill={accent} fontSize="88" fontFamily="Rajdhani, sans-serif" fontWeight="700" opacity="0.12">2077</text>
      <text x="400" y="280" textAnchor="middle" fill={secondary} fontSize="22" fontFamily="monospace" letterSpacing="8" opacity="0.35">NIGHT CITY</text>
      <rect x="0" y="395" width="800" height="55" fill={accent} opacity="0.06" />
      <line x1="0" y1="210" x2="800" y2="218" stroke={accent} strokeWidth="2" opacity="0.45">
        <animate attributeName="y1" values="195;225;195" dur="2.8s" repeatCount="indefinite" />
        <animate attributeName="y2" values="203;233;203" dur="2.8s" repeatCount="indefinite" />
      </line>
    </svg>
  ),

  bgmi: ({ accent, secondary }) => (
    <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" className="preview-scene-svg">
      <rect width="800" height="450" fill="#1a1f0e" />
      <path d="M0,320 Q200,280 400,300 T800,290 L800,450 L0,450 Z" fill={secondary} opacity="0.25" />
      <path d="M0,350 Q300,320 600,340 T800,330 L800,450 L0,450 Z" fill="#0f1208" />
      <circle cx="620" cy="180" r="80" fill="none" stroke={accent} strokeWidth="2" strokeDasharray="8 6" opacity="0.5" />
      <circle cx="620" cy="180" r="50" fill="none" stroke={accent} strokeWidth="1" opacity="0.3" />
      <line x1="620" y1="100" x2="620" y2="260" stroke={accent} strokeWidth="1" opacity="0.4" />
      <line x1="540" y1="180" x2="700" y2="180" stroke={accent} strokeWidth="1" opacity="0.4" />
      <ellipse cx="620" cy="180" rx="120" ry="40" fill="none" stroke={accent} strokeWidth="0.5" opacity="0.2" transform="rotate(-15 620 180)" />
      <text x="620" y="185" textAnchor="middle" fill={accent} fontSize="14" fontFamily="monospace" opacity="0.7">DROP ZONE</text>
      <path d="M100,120 L130,100 L160,120 L130,140 Z" fill={secondary} opacity="0.4" />
    </svg>
  ),

  valorant: ({ accent, secondary }) => (
    <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" className="preview-scene-svg">
      <rect width="800" height="450" fill="#0f1923" />
      <polygon points="0,0 200,0 0,200" fill={accent} opacity="0.08" />
      <polygon points="800,450 600,450 800,250" fill={secondary} opacity="0.06" />
      <text x="650" y="120" fill={accent} fontSize="200" fontWeight="900" fontFamily="sans-serif" opacity="0.12">V</text>
      {[0, 1, 2, 3, 4].map((i) => (
        <polygon key={i} points={`${400 + i * 30},350 ${430 + i * 30},280 ${460 + i * 30},350`} fill={i % 2 ? accent : secondary} opacity="0.15" />
      ))}
      <rect x="350" y="160" width="100" height="4" fill={accent} opacity="0.6" />
      <rect x="350" y="160" width="4" height="100" fill={accent} opacity="0.6" />
      <circle cx="354" cy="164" r="6" fill={accent} opacity="0.8" />
    </svg>
  ),

  wukong: ({ accent, secondary }) => (
    <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" className="preview-scene-svg">
      <rect width="800" height="450" fill="#0d0d0d" />
      <circle cx="400" cy="100" r="70" fill={accent} opacity="0.12" />
      <path d="M0,350 L150,220 L280,300 L420,180 L560,280 L700,200 L800,320 L800,450 L0,450 Z" fill={secondary} opacity="0.3" />
      <path d="M0,380 L200,280 L380,340 L550,240 L800,300 L800,450 L0,450 Z" fill="#1a1510" opacity="0.8" />
      <circle cx="120" cy="120" r="60" fill="none" stroke={accent} strokeWidth="4" strokeLinecap="round" opacity="0.4"
        strokeDasharray="280 80" transform="rotate(-30 120 120)" />
      {[...Array(8)].map((_, i) => (
        <circle key={i} cx={200 + i * 70} cy={350 - Math.sin(i) * 30} r="3" fill={accent} opacity={0.3 + i * 0.05}>
          <animate attributeName="cy" values={`${360};${320};${360}`} dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  ),

  sekiro: ({ accent }) => (
    <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" className="preview-scene-svg">
      <rect width="800" height="450" fill="#0a0808" />
      <circle cx="680" cy="80" r="50" fill={accent} opacity="0.15" />
      <circle cx="680" cy="80" r="42" fill="#0a0808" opacity="0.6" />
      <rect x="360" y="250" width="8" height="120" fill={accent} opacity="0.2" />
      <rect x="432" y="250" width="8" height="120" fill={accent} opacity="0.2" />
      <rect x="340" y="250" width="120" height="8" fill={accent} opacity="0.25" />
      <rect x="330" y="220" width="140" height="6" fill={accent} opacity="0.2" />
      <path d="M330,220 Q400,200 470,220" fill="none" stroke={accent} strokeWidth="3" opacity="0.15" />
      <text x="720" y="200" fill={accent} fontSize="80" fontFamily="serif" opacity="0.08" writingMode="tb">不死</text>
    </svg>
  ),

  figma: ({ accent, secondary }) => (
    <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" className="preview-scene-svg">
      <rect width="800" height="450" fill="#fafafa" />
      <rect x="80" y="60" width="300" height="200" rx="8" fill="#fff" stroke="#e0e0e0" strokeWidth="2" />
      <rect x="100" y="80" width="120" height="80" rx="4" fill="#f24e1e" opacity="0.15" stroke="#f24e1e" strokeWidth="1" />
      <rect x="240" y="80" width="120" height="80" rx="4" fill={accent} opacity="0.15" stroke={accent} strokeWidth="1" />
      <rect x="100" y="170" width="260" height="70" rx="4" fill={secondary} opacity="0.15" stroke={secondary} strokeWidth="1" />
      {['#f24e1e', '#ff7262', accent, secondary, '#0d99ff', '#ffc700'].map((c, i) => (
        <circle key={c} cx={500 + i * 45} cy={150 + (i % 2) * 40} r="18" fill={c} opacity="0.7" />
      ))}
      <rect x="420" y="280" width="280" height="120" rx="12" fill="#fff" stroke="#e0e0e0" strokeWidth="2" strokeDasharray="6 4" />
    </svg>
  ),

  photoshop: ({ accent }) => (
    <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" className="preview-scene-svg">
      <rect width="800" height="450" fill="#1e1e1e" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={100 + i * 20} y={80 + i * 25} width="280" height="180" rx="4" fill="#2d2d2d" stroke={accent} strokeOpacity={0.15 - i * 0.04} strokeWidth="1" />
      ))}
      <path d="M450,200 Q520,150 590,200 T720,230" fill="none" stroke={accent} strokeWidth="4" strokeLinecap="round" opacity="0.5" />
      <path d="M430,280 Q500,240 570,270" fill="none" stroke={accent} strokeWidth="2" opacity="0.3" strokeLinecap="round" />
      <text x="680" y="380" fill={accent} fontSize="48" fontWeight="bold" fontFamily="sans-serif" opacity="0.2">Ps</text>
    </svg>
  ),

  sketch: ({ accent }) => (
    <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" className="preview-scene-svg">
      <rect width="800" height="450" fill="#f5f0e8" />
      {[...Array(15)].map((_, i) => (
        <line key={i} x1="0" y1={i * 32} x2="800" y2={i * 32} stroke="#e8e0d4" strokeWidth="0.5" />
      ))}
      <ellipse cx="550" cy="200" rx="80" ry="100" fill="none" stroke={accent} strokeWidth="2" opacity="0.2" />
      <path d="M490,160 Q550,130 610,160" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.15" />
      <path d="M510,240 Q550,270 590,240" fill="none" stroke={accent} strokeWidth="1" opacity="0.12" />
      {[...Array(12)].map((_, i) => (
        <line key={i} x1={480 + i * 8} y1="120" x2={470 + i * 8} y2="280" stroke={accent} strokeWidth="0.5" opacity="0.06" />
      ))}
    </svg>
  ),

  'digital-art': ({ accent, secondary }) => (
    <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" className="preview-scene-svg">
      <rect width="800" height="450" fill="#121218" />
      <circle cx="200" cy="150" r="80" fill={accent} opacity="0.2" />
      <circle cx="250" cy="180" r="50" fill="#2979ff" opacity="0.15" />
      <circle cx="600" cy="280" r="90" fill={secondary} opacity="0.18" />
      <circle cx="550" cy="320" r="40" fill="#ff5252" opacity="0.2" />
      <circle cx="400" cy="200" r="30" fill="#ffc700" opacity="0.15" />
      <path d="M100,350 Q250,280 400,350 T700,320" fill="none" stroke={accent} strokeWidth="3" opacity="0.3" strokeLinecap="round" />
    </svg>
  ),
};

const ThemePreviewScene = ({ theme, className = '' }) => {
  const Scene = scenes[theme.preview?.scene] || scenes.cyberpunk;
  return (
    <div className={`theme-preview-scene ${className}`} style={{ background: theme.preview?.gradient }}>
      <Scene accent={theme.colors.accent} secondary={theme.colors.secondary} />
      <div className="theme-preview-vignette" />
    </div>
  );
};

export default ThemePreviewScene;
