/**
 * Кыргызский декоративный орнамент (SVG, редактируемо):
 *  - LogoMark — мини-тундук: круг + пересекающиеся дуги шанырака;
 *  - OrnamentSwirl — завиток «кошкар мүйүз»;
 *  - OrnamentStrip — повторяющаяся полоса-разделитель;
 *  - OrnamentRing — круговой орнамент для фона.
 */
import { cn } from '../../utils/cn';

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <circle cx="16" cy="16" r="13.2" />
      <path d="M7.5 24.5C11.8 11.5 20.2 11.5 24.5 24.5" />
      <path d="M24.5 24.5C20.2 11.5 11.8 11.5 7.5 24.5" />
      <path d="M16 5.5v21" strokeOpacity={0.6} />
    </svg>
  );
}

export function OrnamentSwirl({ className, strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" className={className}>
      <path d="M3.5 12a8.5 8.5 0 1 1 8.5 8.5" opacity={0.85} />
      <path d="M3.5 12a8 8 0 0 0 2.3 5.6" opacity={0.4} />
      <path d="M12 3.5a8.5 8.5 0 0 1 8.5 8.5c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5c1.7 0 3 1.3 3 3s-1.3 3-3 3" />
    </svg>
  );
}

/** Повторяющийся завиток: полоса из N мотивов */
export function OrnamentStrip({ className, count = 9 }: { className?: string; count?: number }) {
  return (
    <div className={cn('flex items-center justify-center gap-5 sm:gap-7', className)} aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <OrnamentSwirl key={i} className={cn('h-5 w-5 sm:h-6 sm:w-6', i % 2 === 1 && '-scale-x-100')} />
      ))}
    </div>
  );
}

/** Круговой орнамент (медленно вращается как декоративный фон) */
export function OrnamentRing({ className }: { className?: string }) {
  const marks = Array.from({ length: 16 });
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden>
      <circle cx="100" cy="100" r="98.5" stroke="currentColor" strokeOpacity={0.35} />
      <circle cx="100" cy="100" r="78" stroke="currentColor" strokeOpacity={0.5} strokeDasharray="1.5 7" />
      {marks.map((_, i) => (
        <g key={i} transform={`rotate(${(360 / marks.length) * i} 100 100)`}>
          <path
            d="M100 8c4.5 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8c0-2.7 2.2-5 5-5 1.9 0 3.4 1.5 3.4 3.4S106.9 21 105 21"
            stroke="currentColor"
            strokeWidth={1.4}
            strokeLinecap="round"
            opacity={0.8}
          />
        </g>
      ))}
      <circle cx="100" cy="100" r="62" stroke="currentColor" strokeOpacity={0.35} />
    </svg>
  );
}

/** Маленький ромб-разделитель (● ◆ ●) */
export function OrnamentDivider({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2 text-champagne-deep', className)} aria-hidden>
      <span className="h-px w-8 bg-current opacity-40" />
      <svg viewBox="0 0 10 10" className="h-2 w-2 fill-current"><path d="M5 0l5 5-5 5-5-5z" /></svg>
      <span className="h-px w-8 bg-current opacity-40" />
    </span>
  );
}
