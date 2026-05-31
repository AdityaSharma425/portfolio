import { useState, useEffect } from 'react';

const FINE_POINTER_QUERY = '(hover: hover) and (pointer: fine)';

export function getFinePointer() {
  if (typeof window === 'undefined') return true;
  return window.matchMedia(FINE_POINTER_QUERY).matches;
}

/** Sets `body[data-input]` before first paint to avoid cursor flash */
export function initInputMode() {
  if (typeof document === 'undefined') return;
  document.body.dataset.input = getFinePointer() ? 'fine' : 'touch';
}

/**
 * `finePointer` — mouse/trackpad (custom cursor + keyboard dialer)
 * `touchPrimary` — phones/tablets (native touch, swipe dialer)
 */
export function useInputMode() {
  const [finePointer, setFinePointer] = useState(getFinePointer);

  useEffect(() => {
    const mq = window.matchMedia(FINE_POINTER_QUERY);
    const apply = () => {
      const fine = mq.matches;
      document.body.dataset.input = fine ? 'fine' : 'touch';
      setFinePointer(fine);
    };
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  return { finePointer, touchPrimary: !finePointer };
}
