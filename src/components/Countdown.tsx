import { useEffect, useMemo, useState } from "react";
import { Corners } from "./Ornament";
import { Reveal } from "./Reveal";
import { getEventDate } from "../config";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function Countdown() {
  const target = useMemo(() => getEventDate(), []);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target.getTime() - now);
  const parts = [
    { value: Math.floor(diff / 86_400_000), label: "күн" },
    { value: Math.floor(diff / 3_600_000) % 24, label: "саат" },
    { value: Math.floor(diff / 60_000) % 60, label: "мүнөт" },
    { value: Math.floor(diff / 1_000) % 60, label: "секунд" },
  ];

  return (
    <section id="countdown" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-5">
        <Reveal className="text-center">
          <p className="font-display text-2xl sm:text-3xl font-medium italic text-gold">
            майрамга чейин калды
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {parts.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.08}>
              <div className="hairline relative bg-paper/70 px-3 py-7 text-center shadow-[var(--shadow-card)]">
                <Corners />
                <p className="font-display text-5xl sm:text-6xl font-semibold tabular-nums text-red">
                  {pad(p.value)}
                </p>
                <p className="mt-2 text-[0.64rem] font-bold uppercase tracking-[0.3em] text-ink-soft">
                  {p.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
