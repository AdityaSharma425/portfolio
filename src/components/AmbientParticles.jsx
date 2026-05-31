import React, { useEffect, useRef } from 'react';
import { getTheme } from '../themes';
import { usePerformanceProfile } from '../hooks/usePerformanceProfile';

const PARTICLE_CONFIG = {
  cyber: { count: 18, connections: false },
  tactical: { count: 16, connections: false },
  valorant: { count: 14, connections: false },
  embers: { count: 20, connections: false },
  ash: { count: 22, connections: false },
  figma: { count: 14, connections: false },
  brush: { count: 12, connections: false },
  pencil: { count: 18, connections: false },
  splatter: { count: 16, connections: false },
};

const AmbientParticles = ({ currentTheme }) => {
  const { ambient } = usePerformanceProfile();
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!ambient) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    let animationFrameId;
    let particles = [];
    let isVisible = true;
    let isScrolling = false;
    let scrollTimer;

    const theme = getTheme(currentTheme);
    const particleType = theme.particles;
    const config = PARTICLE_CONFIG[particleType] || PARTICLE_CONFIG.cyber;

    const handleVisibility = () => {
      isVisible = document.visibilityState === 'visible';
      if (isVisible) animationFrameId = requestAnimationFrame(animate);
    };

    const onScroll = () => {
      isScrolling = true;
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => { isScrolling = false; }, 120);
    };

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    window.addEventListener('resize', resizeCanvas, { passive: true });
    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('scroll', onScroll, { passive: true, capture: true });
    resizeCanvas();

    class SimpleParticle {
      constructor(drawFn, updateFn) {
        this.drawFn = drawFn;
        this.updateFn = updateFn;
        this.reset();
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
      }
      reset() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.25 - 0.125;
        this.speedY = Math.random() * 0.25 - 0.125;
        this.opacity = Math.random() * 0.35 + 0.1;
        this.color = theme.colors.accent;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < -20 || this.x > window.innerWidth + 20 || this.y < -20 || this.y > window.innerHeight + 20) {
          this.reset();
        }
      }
      draw() {
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    particles = Array.from({ length: config.count }, () => new SimpleParticle());

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible || isScrolling) return;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('scroll', onScroll, { capture: true });
      clearTimeout(scrollTimer);
      cancelAnimationFrame(animationFrameId);
    };
  }, [currentTheme, ambient]);

  if (!ambient) return null;

  return (
    <canvas
      ref={canvasRef}
      className="ambient-particles-canvas"
      aria-hidden="true"
    />
  );
};

export default AmbientParticles;
