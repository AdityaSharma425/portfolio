/**
 * Theme-personalized cursor burst particles on click / hover.
 */

const BURST_COLORS = {
  cyber: ['#fcee0a', '#00f0ff', '#ff2a6d'],
  tactical: ['#f5a623', '#c4a35a', '#6b8e23'],
  valorant: ['#ff4655', '#17d3c7', '#ece8e1'],
  embers: ['#c9a227', '#ff8c00', '#2d6a4f'],
  ash: ['#c41e3a', '#787370', '#b8860b'],
  figma: ['#f24e1e', '#a259ff', '#0acf83', '#0d99ff'],
  brush: ['#31a8ff', '#7cc6ff', '#001e36'],
  pencil: ['#2c2c2c', '#6b6b6b', '#c45c48'],
  splatter: ['#e040fb', '#00bcd4', '#2979ff', '#ff5252'],
};

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function spawnCyber(x, y, count, spread) {
  return Array.from({ length: count }, () => {
    const a = rand(0, Math.PI * 2);
    const s = rand(1, spread);
    return {
      x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s,
      size: rand(1.5, 3), life: 1, decay: rand(0.02, 0.04),
      color: BURST_COLORS.cyber[Math.floor(Math.random() * 3)],
      shape: 'dot', glow: true,
    };
  });
}

function spawnTactical(x, y, count, spread) {
  return Array.from({ length: count }, (_, i) => {
    const a = rand(0, Math.PI * 2);
    const s = rand(0.5, spread);
    return {
      x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s - rand(0, 1),
      size: rand(2, 5), life: 1, decay: rand(0.015, 0.03),
      color: BURST_COLORS.tactical[i % 2 === 0 ? 0 : 1],
      shape: i % 3 === 0 ? 'rect' : 'smoke',
      glow: false,
    };
  });
}

function spawnValorant(x, y, count, spread) {
  return Array.from({ length: count }, () => {
    const a = rand(0, Math.PI * 2);
    const s = rand(1.5, spread);
    return {
      x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s,
      size: rand(3, 6), life: 1, decay: rand(0.03, 0.05),
      color: BURST_COLORS.valorant[Math.floor(Math.random() * 2)],
      shape: 'triangle', rotation: rand(0, Math.PI * 2), spin: rand(-0.1, 0.1),
      glow: false,
    };
  });
}

function spawnEmbers(x, y, count, spread) {
  return Array.from({ length: count }, () => {
    const a = rand(0, Math.PI * 2);
    const s = rand(0.5, spread * 0.6);
    return {
      x, y, vx: Math.cos(a) * s * 0.5, vy: -rand(1, spread),
      size: rand(2, 4), life: 1, decay: rand(0.012, 0.025),
      color: BURST_COLORS.embers[Math.floor(Math.random() * 3)],
      shape: 'ember', glow: true,
    };
  });
}

function spawnAsh(x, y, count, spread) {
  return Array.from({ length: count }, () => {
    const a = rand(0, Math.PI * 2);
    const s = rand(0.5, spread);
    return {
      x, y, vx: Math.cos(a) * s, vy: rand(0.5, spread * 0.8),
      size: rand(1, 3), life: 1, decay: rand(0.018, 0.032),
      color: BURST_COLORS.ash[Math.floor(Math.random() * 3)],
      shape: Math.random() > 0.7 ? 'dot' : 'rect',
      glow: false,
    };
  });
}

function spawnFigma(x, y, count, spread) {
  return Array.from({ length: count }, () => {
    const a = rand(0, Math.PI * 2);
    const s = rand(1, spread);
    return {
      x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s,
      size: rand(3, 7), life: 1, decay: rand(0.025, 0.04),
      color: BURST_COLORS.figma[Math.floor(Math.random() * 4)],
      shape: 'dot', glow: false,
    };
  });
}

function spawnBrush(x, y, count, spread) {
  return Array.from({ length: count }, () => {
    const a = rand(0, Math.PI * 2);
    const s = rand(1, spread);
    return {
      x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s,
      size: rand(2, 8), life: 1, decay: rand(0.02, 0.035),
      color: BURST_COLORS.brush[Math.floor(Math.random() * 2)],
      shape: 'stroke', angle: a, glow: false,
    };
  });
}

function spawnPencil(x, y, count, spread) {
  return Array.from({ length: count }, () => {
    const a = rand(0, Math.PI * 2);
    const s = rand(0.3, spread * 0.5);
    return {
      x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s + rand(0.2, 1),
      size: rand(1, 2.5), life: 1, decay: rand(0.02, 0.04),
      color: BURST_COLORS.pencil[Math.floor(Math.random() * 3)],
      shape: 'rect', glow: false,
    };
  });
}

function spawnSplatter(x, y, count, spread) {
  return Array.from({ length: count }, () => {
    const a = rand(0, Math.PI * 2);
    const s = rand(1.5, spread);
    return {
      x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s,
      size: rand(3, 9), life: 1, decay: rand(0.018, 0.03),
      color: BURST_COLORS.splatter[Math.floor(Math.random() * 4)],
      shape: 'blob', glow: true,
    };
  });
};

const SPAWNERS = {
  cyber: spawnCyber,
  tactical: spawnTactical,
  valorant: spawnValorant,
  embers: spawnEmbers,
  ash: spawnAsh,
  figma: spawnFigma,
  brush: spawnBrush,
  pencil: spawnPencil,
  splatter: spawnSplatter,
};

export function createCursorBurst(particleType, x, y, intensity = 'click') {
  const count = intensity === 'click' ? 10 : 5;
  const spread = intensity === 'click' ? 5 : 3;
  const spawner = SPAWNERS[particleType] || SPAWNERS.cyber;
  return spawner(x, y, count, spread);
}

export function drawBurstParticle(ctx, p) {
  ctx.globalAlpha = p.life;
  ctx.fillStyle = p.color;
  ctx.strokeStyle = p.color;

  switch (p.shape) {
    case 'triangle':
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation || 0);
      ctx.beginPath();
      ctx.moveTo(0, -p.size);
      ctx.lineTo(p.size * 0.6, p.size * 0.5);
      ctx.lineTo(-p.size * 0.6, p.size * 0.5);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      break;
    case 'rect':
      ctx.fillRect(p.x - p.size / 2, p.y - p.size / 4, p.size, p.size * 0.5);
      break;
    case 'smoke':
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * 1.5, 0, Math.PI * 2);
      ctx.fill();
      break;
    case 'stroke':
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle || 0);
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(-p.size, 0);
      ctx.lineTo(p.size, 0);
      ctx.stroke();
      ctx.restore();
      break;
    case 'blob':
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
      ctx.fill();
      break;
    case 'ember':
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      break;
    default:
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
  }
  ctx.globalAlpha = 1;
}

export function updateBurstParticle(p) {
  p.x += p.vx;
  p.y += p.vy;
  p.vy += 0.06;
  p.vx *= 0.98;
  if (p.spin) p.rotation = (p.rotation || 0) + p.spin;
  p.life -= p.decay;
  return p.life > 0;
}
