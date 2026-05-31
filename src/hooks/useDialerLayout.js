import { useState, useEffect } from 'react';

function getLayout(width) {
  if (width <= 480) return { spread: 114, visibleRange: 2 };
  if (width <= 768) return { spread: 142, visibleRange: 3 };
  if (width <= 1024) return { spread: 172, visibleRange: 3 };
  return { spread: 200, visibleRange: 4 };
}

export function useDialerLayout() {
  const [layout, setLayout] = useState(() =>
    typeof window !== 'undefined' ? getLayout(window.innerWidth) : { spread: 200, visibleRange: 4 }
  );

  useEffect(() => {
    const onResize = () => setLayout(getLayout(window.innerWidth));
    onResize();
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return layout;
}
