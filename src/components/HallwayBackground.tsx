import { useEffect, useRef, useState } from "react";
import { assetUrl } from "@/lib/assets";
import { usePatternEffects } from "@/context/PatternEffectsContext";

const patternSeamless = assetUrl("assets/pattern-seamless.png");

type Ripple = { id: number; x: number; y: number };

const BASE_DRIFT_S = 52;
const MIN_DRIFT_S = 30;
const LERP = 0.08;

function tileSize() {
  return window.matchMedia("(min-width: 640px)").matches ? 280 : 240;
}

export function HallwayBackground() {
  const { navHover, musicPlaying, mediaActive } = usePatternEffects();
  const sceneRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const driftRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef({ y: 0, t: Date.now() });
  const motionRef = useRef({
    parallaxX: 0,
    parallaxY: 0,
    targetParallaxX: 0,
    targetParallaxY: 0,
    mouseX: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
    mouseY: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
    targetMouseX: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
    targetMouseY: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
    driftOffset: 0,
    driftS: BASE_DRIFT_S,
    targetDriftS: BASE_DRIFT_S,
    lastTime: 0,
    rafId: 0,
  });
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const reducedMotionRef = useRef(false);

  const sceneClass = [
    "hh-pattern-scene",
    navHover ? "hh-nav-pulse" : "",
    mediaActive ? "hh-media-active" : "",
    musicPlaying ? "hh-music-playing" : "",
  ]
    .filter(Boolean)
    .join(" ");

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    const scene = sceneRef.current;
    const parallax = parallaxRef.current;
    const drift = driftRef.current;
    if (!scene || !parallax || !drift || reducedMotionRef.current) return;

    const motion = motionRef.current;
    motion.lastTime = performance.now();

    const tick = (now: number) => {
      const sceneEl = sceneRef.current;
      const parallaxEl = parallaxRef.current;
      const driftEl = driftRef.current;
      if (!sceneEl || !parallaxEl || !driftEl) return;

      const dt = Math.min(now - motion.lastTime, 32);
      motion.lastTime = now;

      motion.parallaxX += (motion.targetParallaxX - motion.parallaxX) * LERP;
      motion.parallaxY += (motion.targetParallaxY - motion.parallaxY) * LERP;
      motion.mouseX += (motion.targetMouseX - motion.mouseX) * LERP;
      motion.mouseY += (motion.targetMouseY - motion.mouseY) * LERP;
      motion.driftS += (motion.targetDriftS - motion.driftS) * 0.035;

      const tile = tileSize();
      const pxPerMs = tile / (motion.driftS * 1000);
      motion.driftOffset = (motion.driftOffset + pxPerMs * dt) % tile;

      parallaxEl.style.transform = `translate3d(${motion.parallaxX.toFixed(2)}px, ${motion.parallaxY.toFixed(2)}px, 0)`;
      driftEl.style.transform = `translate3d(${motion.driftOffset.toFixed(2)}px, ${motion.driftOffset.toFixed(2)}px, 0)`;
      sceneEl.style.setProperty("--hh-mouse-x", `${motion.mouseX.toFixed(1)}px`);
      sceneEl.style.setProperty("--hh-mouse-y", `${motion.mouseY.toFixed(1)}px`);

      motion.rafId = requestAnimationFrame(tick);
    };

    motion.rafId = requestAnimationFrame(tick);

    const onMove = (e: MouseEvent) => {
      motion.targetParallaxX = (e.clientX / window.innerWidth - 0.5) * 22;
      motion.targetParallaxY = (e.clientY / window.innerHeight - 0.5) * 22;
      motion.targetMouseX = e.clientX;
      motion.targetMouseY = e.clientY;
    };

    const onScroll = () => {
      const now = Date.now();
      const { y, t } = scrollRef.current;
      const dt = Math.max(now - t, 16);
      const velocity = Math.abs(window.scrollY - y) / dt;
      scrollRef.current = { y: window.scrollY, t: now };

      motion.targetDriftS = Math.max(MIN_DRIFT_S, BASE_DRIFT_S - velocity * 40);

      window.setTimeout(() => {
        if (Date.now() - scrollRef.current.t > 320) {
          motion.targetDriftS = BASE_DRIFT_S;
        }
      }, 360);
    };

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

    const onOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma == null || e.beta == null) return;
      motion.targetParallaxX = (e.gamma / 45) * 18;
      motion.targetParallaxY = ((e.beta - 45) / 45) * 14;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("click", onClick);
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("deviceorientation", onOrientation);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("click", onClick);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("deviceorientation", onOrientation);
      cancelAnimationFrame(motion.rafId);
    };
  }, []);

  return (
    <div ref={sceneRef} className={sceneClass} aria-hidden>
      <div ref={parallaxRef} className="hh-pattern-parallax">
        <div
          ref={driftRef}
          className="hh-pattern-drift"
          style={{ backgroundImage: `url("${patternSeamless}")` }}
        />
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
      <div
        className="hh-pattern-static"
        style={{ backgroundImage: `url("${patternSeamless}")` }}
      />
    </div>
  );
}
