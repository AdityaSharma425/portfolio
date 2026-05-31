const SOUND_STORAGE_KEY = 'portfolio-sound';

let audioCtx = null;

const THEME_SOUNDS = {
  cyberpunk: { type: 'dual', freq: [440, 880], wave: 'square', duration: 0.16 },
  bgmi: { type: 'sweep', freq: [120, 80], wave: 'sine', duration: 0.35 },
  valorant: { type: 'snap', freq: [1200, 600], wave: 'sawtooth', duration: 0.12 },
  wukong: { type: 'bell', freq: [523, 659, 784], wave: 'sine', duration: 0.5 },
  sekiro: { type: 'gong', freq: [110, 55], wave: 'sine', duration: 0.6 },
  figma: { type: 'pop', freq: [440, 554, 659], wave: 'sine', duration: 0.25 },
  photoshop: { type: 'swoosh', freq: [200, 800], wave: 'triangle', duration: 0.3 },
  sketch: { type: 'scratch', freq: [800, 400], wave: 'sawtooth', duration: 0.08 },
  'digital-art': { type: 'arp', freq: [523, 659, 784, 988], wave: 'sine', duration: 0.4 },
};

export function isSoundEnabled() {
  return localStorage.getItem(SOUND_STORAGE_KEY) === 'true';
}

export function setSoundEnabled(enabled) {
  localStorage.setItem(SOUND_STORAGE_KEY, enabled ? 'true' : 'false');
}

export function initAudio() {
  if (!audioCtx) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (Ctx) audioCtx = new Ctx();
  }
  if (audioCtx?.state === 'suspended') audioCtx.resume();
}

function playTone(freq, wave, startTime, duration, volume = 0.06) {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = wave;
  osc.frequency.setValueAtTime(freq, startTime);
  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(volume, startTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start(startTime);
  osc.stop(startTime + duration + 0.05);
}

function playNoise(startTime, duration, volume = 0.04) {
  if (!audioCtx) return;
  const bufferSize = audioCtx.sampleRate * duration;
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

  const source = audioCtx.createBufferSource();
  const gain = audioCtx.createGain();
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.value = 1200;

  source.buffer = buffer;
  gain.gain.setValueAtTime(volume, startTime);
  gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
  source.connect(filter);
  filter.connect(gain);
  gain.connect(audioCtx.destination);
  source.start(startTime);
  source.stop(startTime + duration);
}

export function playThemeSound(themeId) {
  if (!isSoundEnabled()) return;
  initAudio();
  if (!audioCtx) return;

  const profile = THEME_SOUNDS[themeId] || THEME_SOUNDS.cyberpunk;
  const t = audioCtx.currentTime;

  switch (profile.type) {
    case 'dual':
      playTone(profile.freq[0], profile.wave, t, profile.duration);
      playTone(profile.freq[1], profile.wave, t + 0.06, profile.duration * 0.8, 0.04);
      break;
    case 'sweep': {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = profile.wave;
      osc.frequency.setValueAtTime(profile.freq[0], t);
      osc.frequency.exponentialRampToValueAtTime(profile.freq[1], t + profile.duration);
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.07, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, t + profile.duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(t);
      osc.stop(t + profile.duration + 0.05);
      break;
    }
    case 'snap':
      playNoise(t, 0.04, 0.03);
      playTone(profile.freq[0], profile.wave, t + 0.02, 0.1, 0.05);
      break;
    case 'bell':
      profile.freq.forEach((f, i) => playTone(f, profile.wave, t + i * 0.08, 0.35 - i * 0.05, 0.05 - i * 0.01));
      break;
    case 'gong':
      playTone(profile.freq[0], profile.wave, t, profile.duration, 0.08);
      playTone(profile.freq[1], profile.wave, t, profile.duration, 0.04);
      break;
    case 'pop':
      profile.freq.forEach((f, i) => playTone(f, profile.wave, t + i * 0.05, 0.12, 0.05));
      break;
    case 'swoosh': {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = profile.wave;
      osc.frequency.setValueAtTime(profile.freq[0], t);
      osc.frequency.exponentialRampToValueAtTime(profile.freq[1], t + profile.duration);
      gain.gain.setValueAtTime(0.05, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + profile.duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(t);
      osc.stop(t + profile.duration);
      playNoise(t, profile.duration * 0.5, 0.02);
      break;
    }
    case 'scratch':
      playNoise(t, profile.duration, 0.035);
      break;
    case 'arp':
      profile.freq.forEach((f, i) => playTone(f, profile.wave, t + i * 0.07, 0.15, 0.045));
      break;
    default:
      playTone(profile.freq[0], profile.wave, t, profile.duration);
  }
}

export function previewSound() {
  initAudio();
  playThemeSound('cyberpunk');
}
