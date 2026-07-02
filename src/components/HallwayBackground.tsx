import { assetUrl } from "@/lib/assets";

const patternTile = assetUrl("assets/pattern-tile.png");

export function HallwayBackground() {
  return (
    <div
      className="hh-hallway-scene"
      style={{ "--hh-pattern": `url("${patternTile}")` } as React.CSSProperties}
      aria-hidden
    >
      <div className="hh-hallway-tunnel">
        <div className="hh-hallway-surface hh-hallway-floor" />
        <div className="hh-hallway-surface hh-hallway-ceiling" />
        <div className="hh-hallway-surface hh-hallway-left" />
        <div className="hh-hallway-surface hh-hallway-right" />
      </div>
      {/* Fallback flat tile for reduced motion */}
      <div
        className="hh-hallway-static"
        style={{ backgroundImage: `url("${patternTile}")` }}
      />
    </div>
  );
}
