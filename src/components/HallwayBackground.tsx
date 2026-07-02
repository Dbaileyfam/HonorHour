import { useEffect, useRef, useState } from "react";
import { assetUrl } from "@/lib/assets";
import { usePatternEffects } from "@/context/PatternEffectsContext";

const patternSeamless = assetUrl("assets/pattern-seamless.png");

type Ripple = { id: number; x: number; y: number };

const BASE_DRIFT_S = 48;
const MIN_DRIFT_S = 10;

export function HallwayBackground() {
  const { navHover, musicPlaying, mediaActive } = usePatternEffects();
  const sceneRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef({ y: 0, t: Date.now() });
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
    const layer = layerRef.current;
    if (!scene || !layer || reducedMotionRef.current) return;

    const setDriftDuration = (seconds: number) => {
      layer.style.setProperty("--hh-drift-duration", `${seconds}s`);
    };

    setDriftDuration(BASE_DRIFT_S);

    const onMove = (e: MouseEvent) => {
      const xRatio = e.clientX / window.innerWidth - 0.5;
      const yRatio = e.clientY / window.innerHeight - 0.5;

      layer.style.setProperty("--hh-parallax-x", `${xRatio * 28}px`);
      layer.style.setProperty("--hh-parallax-y", `${yRatio * 28}px`);

      scene.style.setProperty("--hh-mouse-x", `${e.clientX}px`);
      scene.style.setProperty("--hh-mouse-y", `${e.clientY}px`);
    };

    const onScroll = () => {
      const now = Date.now();
      const { y, t } = scrollRef.current;
      const dt = Math.max(now - t, 16);
      const velocity = Math.abs(window.scrollY - y) / dt;
      scrollRef.current = { y: window.scrollY, t: now };

      const boosted = Math.max(MIN_DRIFT_S, BASE_DRIFT_S - velocity * 120);
      setDriftDuration(boosted);

      window.setTimeout(() => {
        if (Date.now() - scrollRef.current.t > 180) {
          setDriftDuration(BASE_DRIFT_S);
        }
      }, 200);
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
      const x = (e.gamma / 45) * 22;
      const y = ((e.beta - 45) / 45) * 16;
      layer.style.setProperty("--hh-parallax-x", `${x}px`);
      layer.style.setProperty("--hh-parallax-y", `${y}px`);
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
    };
  }, []);

  useEffect(() => {
    if (!mediaActive) return;
    const interval = window.setInterval(() => {
      if (!musicPlaying && sceneRef.current) {
        sceneRef.current.classList.add("hh-beat-tick");
        window.setTimeout(() => sceneRef.current?.classList.remove("hh-beat-tick"), 200);
      }
    }, 550);
    return () => window.clearInterval(interval);
  }, [mediaActive, musicPlaying]);

  return (
    <div ref={sceneRef} className={sceneClass} aria-hidden>
      <div
        ref={layerRef}
        className="hh-pattern-layer"
        style={{ backgroundImage: `url("${patternSeamless}")` }}
      />
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
