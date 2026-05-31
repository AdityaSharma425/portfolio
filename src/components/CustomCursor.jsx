import React, { useEffect, useRef, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { getTheme } from '../themes';
import { createCursorBurst, drawBurstParticle, updateBurstParticle } from '../utils/cursorBurst';
import { useInputMode } from '../hooks/useInputMode';
import { usePerformanceProfile } from '../hooks/usePerformanceProfile';

const LERP = 0.22;
const HOVER_DEBOUNCE_MS = 220;

const isInteractive = (target) =>
  target?.tagName?.toLowerCase() === 'a' ||
  target?.tagName?.toLowerCase() === 'button' ||
  target?.closest?.('a') ||
  target?.closest?.('button') ||
  target?.classList?.contains('interactive');

const CursorDot = ({ ringStyle, size, accent, glow, clicking }) => {
  const scale = clicking ? 0.65 : 1;

  switch (ringStyle) {
    case 'crosshair':
      return (
        <div style={{ transform: `scale(${scale})` }}>
          <div style={{ position: 'absolute', width: size * 3, height: 1, background: accent, left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} />
          <div style={{ position: 'absolute', width: 1, height: size * 3, background: accent, left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} />
          <div style={{ width: size, height: size, borderRadius: '50%', background: accent, boxShadow: glow ? `0 0 6px ${accent}` : 'none' }} />
        </div>
      );
    case 'angular':
      return (
        <div style={{
          width: 0, height: 0,
          borderLeft: `${size * 0.6}px solid transparent`,
          borderRight: `${size * 0.6}px solid transparent`,
          borderBottom: `${size}px solid ${accent}`,
          transform: `scale(${scale})`,
        }} />
      );
    case 'golden':
      return (
        <div style={{
          width: size, height: size, borderRadius: '50%',
          background: `radial-gradient(circle, ${accent} 0%, transparent 70%)`,
          border: `1.5px solid ${accent}`,
          transform: `scale(${scale})`,
        }} />
      );
    case 'blade':
      return (
        <div style={{
          width: 2, height: size * 2.5, background: accent,
          borderRadius: 1, transform: `rotate(45deg) scale(${scale})`,
        }} />
      );
    case 'figma':
      return (
        <div style={{
          width: size, height: size, borderRadius: '50%', background: accent,
          boxShadow: `-6px 0 0 #f24e1e, 6px 0 0 #0acf83`,
          transform: `scale(${scale})`,
        }} />
      );
    case 'brush':
      return (
        <div style={{
          width: size * 1.2, height: size * 0.6, borderRadius: '50% 50% 20% 50%',
          background: accent, transform: `rotate(-35deg) scale(${scale})`,
        }} />
      );
    case 'pencil':
      return (
        <div style={{
          width: 2, height: size * 2, background: accent,
          transform: `rotate(-50deg) scale(${scale})`, borderRadius: '1px 1px 0 0',
        }} />
      );
    case 'rainbow':
      return (
        <div style={{
          width: size, height: size, borderRadius: '50%',
          background: 'linear-gradient(135deg, #e040fb, #00bcd4, #2979ff)',
          transform: `scale(${scale})`,
        }} />
      );
    default:
      return (
        <div style={{
          width: size, height: size, borderRadius: '50%', background: accent,
          transform: `scale(${scale})`,
        }} />
      );
  }
};

const CursorRing = ({ ringStyle, size, accent, secondary, hovered, clicking }) => {
  const scale = clicking ? 0.88 : 1;

  switch (ringStyle) {
    case 'crosshair':
      return (
        <div style={{ width: size, height: size, position: 'relative', transform: `scale(${scale})` }}>
          <div style={{ position: 'absolute', inset: 0, border: `1px solid ${accent}66`, borderRadius: '50%' }} />
          <div style={{ position: 'absolute', inset: '22%', border: `1px dashed ${secondary}55`, borderRadius: '50%' }} />
        </div>
      );
    case 'angular':
      return (
        <div style={{
          width: size, height: size,
          clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
          border: `2px solid ${hovered ? secondary : accent}`,
          background: hovered ? `${accent}11` : 'transparent',
          transform: `scale(${scale})`,
        }} />
      );
    case 'golden':
      return (
        <div style={{
          width: size, height: size, borderRadius: '50%',
          border: `2px solid ${accent}`,
          background: hovered ? `${accent}0a` : 'transparent',
          transform: `scale(${scale})`,
        }} />
      );
    case 'blade':
      return (
        <div style={{
          width: size, height: size, borderRadius: '50%',
          border: `1.5px solid ${hovered ? accent : `${accent}55`}`,
          transform: `rotate(45deg) scale(${scale})`,
        }} />
      );
    case 'figma':
      return (
        <div style={{
          width: size, height: size, borderRadius: 8,
          border: `2px dashed ${hovered ? accent : 'rgba(255,255,255,0.35)'}`,
          background: hovered ? 'rgba(162,89,255,0.08)' : 'transparent',
          transform: `scale(${scale})`,
        }} />
      );
    case 'brush':
      return (
        <div style={{
          width: size, height: size, borderRadius: '50%',
          border: `2px solid ${accent}`,
          transform: `scale(${scale})`,
        }} />
      );
    case 'pencil':
      return (
        <div style={{
          width: size, height: size, borderRadius: 2,
          border: `1px solid ${secondary}`,
          background: hovered ? 'rgba(44,44,44,0.06)' : 'transparent',
          transform: `scale(${scale})`,
        }} />
      );
    case 'rainbow':
      return (
        <div style={{
          width: size, height: size, borderRadius: '50%',
          border: '2px solid transparent',
          background: `linear-gradient(#000,#000) padding-box, linear-gradient(135deg, #e040fb, #00bcd4, #2979ff, #ff5252) border-box`,
          transform: `scale(${scale})`,
        }} />
      );
    default:
      return (
        <div style={{
          width: size, height: size, borderRadius: '50%',
          border: `2px solid ${hovered ? secondary : accent}`,
          background: hovered ? 'rgba(255,255,255,0.06)' : 'transparent',
          transform: `scale(${scale})`,
        }} />
      );
  }
};

const CustomCursor = ({ currentTheme }) => {
  const { finePointer } = useInputMode();
  const { cursorEffects } = usePerformanceProfile();
  const [hovered, setHovered] = useState(false);
  const [clicking, setClicking] = useState(false);

  const rootRef = useRef(null);
  const dotWrapRef = useRef(null);
  const ringWrapRef = useRef(null);
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const burstRef = useRef([]);
  const rafRef = useRef(null);
  const posRef = useRef({ targetX: -100, targetY: -100, ringX: -100, ringY: -100 });
  const lastHoverBurst = useRef(0);

  const theme = getTheme(currentTheme);
  const { cursor } = theme;
  const accent = theme.colors.accent;
  const secondary = theme.colors.secondary;
  const particleType = theme.particles;

  const scheduleFrame = useCallback(() => {
    if (rafRef.current != null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      tickRef.current?.();
    });
  }, []);

  const tickRef = useRef(null);
  tickRef.current = () => {
    const pos = posRef.current;
    let keepGoing = false;

    if (finePointer && dotWrapRef.current && ringWrapRef.current) {
      pos.ringX += (pos.targetX - pos.ringX) * LERP;
      pos.ringY += (pos.targetY - pos.ringY) * LERP;
      dotWrapRef.current.style.transform = `translate3d(${pos.targetX}px, ${pos.targetY}px, 0) translate(-50%, -50%)`;
      ringWrapRef.current.style.transform = `translate3d(${pos.ringX}px, ${pos.ringY}px, 0) translate(-50%, -50%)`;

      if (Math.abs(pos.targetX - pos.ringX) > 0.4 || Math.abs(pos.targetY - pos.ringY) > 0.4) {
        keepGoing = true;
      }
    }

    if (burstRef.current.length > 0) {
      const ctx = ctxRef.current;
      if (ctx) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        burstRef.current = burstRef.current.filter((p) => {
          drawBurstParticle(ctx, p);
          return updateBurstParticle(p);
        });
        keepGoing = keepGoing || burstRef.current.length > 0;
      }
    }

    if (keepGoing) scheduleFrame();
  };

  const spawnBurst = useCallback((x, y, intensity) => {
    if (!cursorEffects) return;
    burstRef.current.push(...createCursorBurst(particleType, x, y, intensity));
    scheduleFrame();
  }, [particleType, cursorEffects, scheduleFrame]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !cursorEffects) return;

    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    ctxRef.current = ctx;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });
    return () => window.removeEventListener('resize', resize);
  }, [cursorEffects]);

  useEffect(() => {
    const onMove = (e) => {
      if (!finePointer) return;
      posRef.current.targetX = e.clientX;
      posRef.current.targetY = e.clientY;
      if (rootRef.current) rootRef.current.style.opacity = '1';
      scheduleFrame();
    };

    const onDown = (e) => {
      setClicking(true);
      spawnBurst(e.clientX, e.clientY, 'click');
    };

    const onUp = () => setClicking(false);

    const onOver = (e) => {
      if (!finePointer) return;
      const interactive = isInteractive(e.target);
      setHovered(!!interactive);
      if (interactive) {
        const now = performance.now();
        if (now - lastHoverBurst.current > HOVER_DEBOUNCE_MS) {
          lastHoverBurst.current = now;
          spawnBurst(posRef.current.targetX, posRef.current.targetY, 'hover');
        }
      }
    };

    const onEnter = () => { if (rootRef.current) rootRef.current.style.opacity = '1'; };
    const onLeave = () => { if (rootRef.current) rootRef.current.style.opacity = '0'; };

    window.addEventListener('pointerdown', onDown, { passive: true });
    window.addEventListener('pointerup', onUp, { passive: true });

    if (finePointer) {
      window.addEventListener('pointermove', onMove, { passive: true });
      window.addEventListener('mouseover', onOver, { passive: true });
      document.documentElement.addEventListener('mouseenter', onEnter);
      document.documentElement.addEventListener('mouseleave', onLeave);
    }

    return () => {
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('mouseover', onOver);
      document.documentElement.removeEventListener('mouseenter', onEnter);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [finePointer, spawnBurst, scheduleFrame]);

  if (!cursorEffects && !finePointer) return null;

  const ringSize = hovered ? (cursor.hoverRing || 38) : (cursor.ringSize || 24);

  return createPortal(
    <>
      {cursorEffects && <canvas ref={canvasRef} className="cursor-burst-canvas" aria-hidden="true" />}
      {finePointer && (
        <div ref={rootRef} className="custom-cursor-root" style={{ opacity: 0 }} aria-hidden="true">
          <div ref={dotWrapRef} className="custom-cursor-dot-wrap">
            <CursorDot ringStyle={cursor.ringStyle} size={cursor.dotSize} accent={accent} glow={cursor.glow} clicking={clicking} />
          </div>
          <div ref={ringWrapRef} className="custom-cursor-ring-wrap">
            <CursorRing ringStyle={cursor.ringStyle} size={ringSize} accent={accent} secondary={secondary} hovered={hovered} clicking={clicking} />
          </div>
        </div>
      )}
    </>,
    document.body
  );
};

export default CustomCursor;
