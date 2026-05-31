import { useState, useEffect } from 'react';

const FINE_POINTER_QUERY = '(hover: hover) and (pointer: fine)';
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const MOBILE_WIDTH_QUERY = '(max-width: 768px)';

export function getPerformanceProfile() {
  if (typeof window === 'undefined') {
    return { lite: false, ambient: true, cursorEffects: true, reducedMotion: false };
  }

  const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches;
  const touchPrimary = !window.matchMedia(FINE_POINTER_QUERY).matches;
  const mobileWidth = window.matchMedia(MOBILE_WIDTH_QUERY).matches;
  const lowCores = typeof navigator.hardwareConcurrency === 'number' && navigator.hardwareConcurrency <= 4;
  const saveData = navigator.connection?.saveData === true;

  const lite = reducedMotion || touchPrimary || mobileWidth || lowCores || saveData;

  return {
    lite,
    ambient: !lite,
    cursorEffects: !reducedMotion && !touchPrimary,
    reducedMotion,
  };
}

export function initPerformanceProfile() {
  if (typeof document === 'undefined') return;
  const profile = getPerformanceProfile();
  document.body.dataset.perf = profile.lite ? 'lite' : 'full';
  if (profile.reducedMotion) document.body.dataset.motion = 'reduce';
}

export function usePerformanceProfile() {
  const [profile, setProfile] = useState(getPerformanceProfile);

  useEffect(() => {
    const queries = [
      window.matchMedia(FINE_POINTER_QUERY),
      window.matchMedia(REDUCED_MOTION_QUERY),
      window.matchMedia(MOBILE_WIDTH_QUERY),
    ];

    const apply = () => {
      const next = getPerformanceProfile();
      document.body.dataset.perf = next.lite ? 'lite' : 'full';
      document.body.dataset.motion = next.reducedMotion ? 'reduce' : '';
      setProfile(next);
    };

    apply();
    queries.forEach((mq) => mq.addEventListener('change', apply));
    window.addEventListener('resize', apply, { passive: true });

    return () => {
      queries.forEach((mq) => mq.removeEventListener('change', apply));
      window.removeEventListener('resize', apply);
    };
  }, []);

  return profile;
}
