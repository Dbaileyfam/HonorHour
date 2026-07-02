import { useEffect, useRef, useState } from "react";
import { assetUrl } from "@/lib/assets";
import { usePatternEffects } from "@/context/PatternEffectsContext";

const patternSeamless = assetUrl("assets/pattern-seamless.png");

type Ripple = { id: number; x: number; y: number };

const DRIFT_CYCLE_MS = 96_000;

function tileSizePx() {
  return window.matchMedia("(min-width: 640px)").matches ? 280 : 240;
}

export function HallwayBackground() {
  const { navHover, musicPlaying, mediaActive } = usePatternEffects();
  const driftARef = useRef<HTMLDivElement>(null);
  const driftBRef = useRef<HTMLDivElement>(null);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const sceneClass = [
    "hh-pattern-scene",
    navHover ? "hh-nav-pulse" : "",
    mediaActive ? "hh-media-active" : "",
    musicPlaying ? "hh-music-playing" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const patternStyle = { backgroundImage: `url("${patternSeamless}")` };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let offset = 0;
    let lastTime = performance.now();
    let rafId = 0;

    const tick = (now: number) => {
      const layerA = driftARef.current;
      const layerB = driftBRef.current;
      if (!layerA || !layerB) return;

      const dt = Math.min(now - lastTime, 32);
      lastTime = now;

      const tile = tileSizePx();
      offset += (tile / DRIFT_CYCLE_MS) * dt;
      if (offset >= tile) offset -= tile;

      const trailing = offset - tile;
      layerA.style.transform = `translate3d(${offset}px, ${offset}px, 0)`;
      layerB.style.transform = `translate3d(${trailing}px, ${trailing}px, 0)`;

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

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
      cancelAnimationFrame(rafId);
      window.removeEventListener("click", onClick);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <div className={sceneClass} aria-hidden>
      <div className="hh-pattern-drift-stage">
        <div ref={driftARef} className="hh-pattern-drift" style={patternStyle} />
        <div ref={driftBRef} className="hh-pattern-drift" style={patternStyle} />
      </div>
      <div className="hh-pattern-vibe" />
      <div className="hh-pattern-spotlight" />
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="hh-click-ripple"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}
      <div className="hh-pattern-static" style={patternStyle} />
    </div>
  );
}
