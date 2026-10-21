import type { CSSProperties, ReactNode } from "react";

/* ---------- Тундук — кыргыздын ылаз белгиси ---------- */
export function Tunduk({
  className = "",
  strokeWidth = 2.4,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  const arc = "M9 35 A 26 26 0 0 1 39 35";
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="19" fill="none" stroke="currentColor" strokeWidth={strokeWidth} />
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth * 0.85} strokeLinecap="round">
        <path d={arc} />
        <path d={arc} transform="rotate(60 24 24)" />
        <path d={arc} transform="rotate(120 24 24)" />
      </g>
    </svg>
  );
}

/* ---------- Ромбик ● ---------- */
export function Diamond({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={className} aria-hidden="true">
      <path d="M6 1 L11 6 L6 11 L1 6 Z" fill="currentColor" />
    </svg>
  );
}

/* ---------- «Кошкор мойноз» — конул тарткан бел арнайы---------- */
function OrnamentUnit({ x }: { x: number }) {
  return (
    <g transform={`translate(${x},0)`}>
      {/* борбордук ромб */}
      <path d="M36 5.5 L43 12 L36 18.5 L29 12 Z" fill="none" strokeWidth="1.6" />
      <circle cx="36" cy="12" r="1.7" fill="currentColor" stroke="none" />
      {/* сол мүйүз */}
      <path
        d="M25 12 H17 M14 12 q-1.5 0 -1.5 -1.4 q0 -1.6 1.8 -1.6 q1.9 0 1.9 2.2 q0 1.3 -1.4 1.3"
        fill="none"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* оң мүйүз */}
      <path
        d="M47 12 H55 M58 12 q1.5 0 1.5 -1.4 q0 -1.6 -1.8 -1.6 q-1.9 0 -1.9 2.2 q0 1.3 1.4 1.3"
        fill="none"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </g>
  );
}

export function OrnamentBand({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  const units = 10;
  const w = units * 72;
  return (
    <svg
      viewBox={`0 0 ${w} 24`}
      preserveAspectRatio="xMidYMid meet"
      className={className}
      style={style}
      aria-hidden="true"
      stroke="currentColor"
    >
      {Array.from({ length: units }, (_, i) => (
        <OrnamentUnit key={i} x={i * 72} />
      ))}
    </svg>
  );
}

/* ---------- Бурчтук куурай (рамкaав) ---------- */
function Corner({ style }: { style: CSSProperties }) {
  return (
    <svg
      viewBox="0 0 30 30"
      className="pointer-events-none absolute h-7 w-7 text-gold"
      style={style}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
    >
      <path d="M2 26 V9 Q2 2 9 2 H26" strokeWidth="1.7" />
      <path d="M8 26 V14 Q8 8 14 8 H26" strokeWidth="1" opacity="0.75" />
      <circle cx="14" cy="14" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Corners() {
  return (
    <>
      <Corner style={{ top: 10, left: 10 }} />
      <Corner style={{ top: 10, right: 10, transform: "scaleX(-1)" }} />
      <Corner style={{ bottom: 10, right: 10, transform: "scale(-1,-1)" }} />
      <Corner style={{ bottom: 10, left: 10, transform: "scaleY(-1)" }} />
    </>
  );
}

/* ---------- Рамка менен панель ---------- */
export function FramedPanel({
  children,
  className = "",
  inner = "p-8 sm:p-12",
}: {
  children: ReactNode;
  className?: string;
  inner?: string;
}) {
  return (
    <div className={`hairline relative bg-paper/70 ${className}`}>
      <div className="absolute inset-2 hairline-red pointer-events-none" />
      <Corners />
      <div className={`relative ${inner}`}>{children}</div>
    </div>
  );
}

/* ---------- Секция башаты: eyebrow + тагыра аталыш ---------- */
export function SectionHeading({
  eyebrow,
  title,
  light = false,
  className = "",
}: {
  eyebrow: string;
  title: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={`text-center ${className}`}>
      <div className="flex items-center justify-center gap-3">
        <OrnamentBand
          className={`h-3 w-16 sm:w-24 rotate-180 ${light ? "text-gold-soft" : "text-gold"}`}
        />
        <p className={`eyebrow ${light ? "text-gold-soft" : "text-red"}`}>{eyebrow}</p>
        <OrnamentBand className={`h-3 w-16 sm:w-24 ${light ? "text-gold-soft" : "text-gold"}`} />
      </div>
      <h2
        className={`mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-wide uppercase ${
          light ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
