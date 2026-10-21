import { Diamond } from "./Ornament";
import { MARQUEE_ITEMS } from "../config";

export function Marquee() {
  const row = (
    <div className="flex shrink-0 items-center gap-8 pr-8">
      {MARQUEE_ITEMS.map((item) => (
        <span key={item} className="flex items-center gap-8">
          <span className="whitespace-nowrap font-display text-xl font-semibold uppercase tracking-[0.18em]">
            {item}
          </span>
          <Diamond className="h-2.5 w-2.5 shrink-0 text-gold-soft" />
        </span>
      ))}
    </div>
  );
  return (
    <div className="relative overflow-hidden border-y border-gold/30 bg-red py-4 text-paper">
      <div className="flex w-max animate-marquee">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i} className="flex">
            {row}
          </div>
        ))}
      </div>
    </div>
  );
}
