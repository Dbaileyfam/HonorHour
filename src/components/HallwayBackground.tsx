import { assetUrl } from "@/lib/assets";

const patternHallway = assetUrl("assets/pattern-hallway.png");

export function HallwayBackground() {
  return (
    <div className="hh-hallway-scene" aria-hidden>
      <div
        className="hh-hallway-photo"
        style={{ backgroundImage: `url("${patternHallway}")` }}
      />
      <div
        className="hh-hallway-static"
        style={{ backgroundImage: `url("${patternHallway}")` }}
      />
    </div>
  );
}
