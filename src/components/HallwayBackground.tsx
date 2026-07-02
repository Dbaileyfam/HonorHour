import { useEffect, useState } from "react";
import { assetUrl } from "@/lib/assets";
import { usePatternEffects } from "@/context/PatternEffectsContext";

const patternSeamless = assetUrl("assets/pattern-seamless.png");

type Ripple = { id: number; x: number; y: number };

export function HallwayBackground() {
  const { navHover, musicPlaying, mediaActive } = usePatternEffects();
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const sceneClass = [
    "hh-pattern-scene",
    navHover ? "hh-nav-pulse" : "",
    mediaActive ? "hh-media-active" : "",
    musicPlaying ? "hh-music-playing" : "",
  ]
    .filter(Boolean)
    .join(" ");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

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
      window.removeEventListener("click", onClick);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <div className={sceneClass} aria-hidden>
      <div
        className="hh-pattern-drift"
        style={{ backgroundImage: `url("${patternSeamless}")` }}
      />
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
