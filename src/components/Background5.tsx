import { useEffect, useRef, useState } from "react";
import { assetUrl } from "@/lib/assets";

/**
 * Background 5 — archived stamp-pattern canvas drift.
 * Kept for reference; not used by the current minimal layout.
 */

const patternSeamless = assetUrl("assets/pattern-seamless.png");
const BG = "#080808";

type Ripple = { id: number; x: number; y: number };

const DRIFT_CYCLE_MS = 100_000;

function tileSizePx() {
  return window.matchMedia("(min-width: 640px)").matches ? 280 : 240;
}

function buildTilePattern(
  ctx: CanvasRenderingContext2D,
  img: CanvasImageSource,
  tile: number,
) {
  const tileCanvas = document.createElement("canvas");
  tileCanvas.width = tile;
  tileCanvas.height = tile;
  const tileCtx = tileCanvas.getContext("2d");
  if (!tileCtx) return null;
  tileCtx.drawImage(img, 0, 0, tile, tile);
  return ctx.createPattern(tileCanvas, "repeat");
}

export function Background5() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const patternStyle = { backgroundImage: `url("${patternSeamless}")` };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false, desynchronized: true });
    if (!ctx) return;

    const img = new Image();
    img.decoding = "async";
    img.src = patternSeamless;

    let offset = 0;
    let lastTime = performance.now();
    let rafId = 0;
    let running = true;
    let pattern: CanvasPattern | null = null;
    let viewW = 0;
    let viewH = 0;
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      viewW = window.innerWidth;
      viewH = window.innerHeight;
      canvas.width = Math.ceil(viewW * dpr);
      canvas.height = Math.ceil(viewH * dpr);
      canvas.style.width = `${viewW}px`;
      canvas.style.height = `${viewH}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (img.complete && img.naturalWidth > 0) {
        pattern = buildTilePattern(ctx, img, tileSizePx());
      }
    };

    const draw = () => {
      if (!pattern || !running) return;

      const tile = tileSizePx();
      ctx.fillStyle = BG;
      ctx.fillRect(0, 0, viewW, viewH);
      ctx.globalAlpha = 0.92;
      ctx.fillStyle = pattern;
      ctx.save();
      ctx.translate(-offset, -offset);
      ctx.fillRect(0, 0, viewW + tile, viewH + tile);
      ctx.restore();
      ctx.globalAlpha = 1;
    };

    const tick = (now: number) => {
      if (!running) return;

      const dt = Math.min(now - lastTime, 32);
      lastTime = now;

      const tile = tileSizePx();
      offset += (tile / DRIFT_CYCLE_MS) * dt;
      if (offset >= tile) offset -= tile;

      draw();
      rafId = requestAnimationFrame(tick);
    };

    const onVisibility = () => {
      running = document.visibilityState === "visible";
      if (running) {
        lastTime = performance.now();
        rafId = requestAnimationFrame(tick);
      }
    };

    img.onload = () => {
      resize();
      rafId = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    const addRipple = (x: number, y: number) => {
      const id = Date.now();
      setRipples((prev) => [...prev, { id, x, y }]);
      window.setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 900);
    };

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, input, textarea, select, label, iframe")) return;
      addRipple(e.clientX, e.clientY);
    };

    const onTouchEnd = (e: TouchEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, input, textarea, select, label, iframe")) return;
      const touch = e.changedTouches[0];
      if (touch) addRipple(touch.clientX, touch.clientY);
    };

    window.addEventListener("click", onClick);
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("click", onClick);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <div className="hh-bg5-scene" aria-hidden>
      <canvas ref={canvasRef} className="hh-bg5-canvas" />
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="hh-bg5-ripple"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}
      <div className="hh-bg5-static" style={patternStyle} />
    </div>
  );
}
