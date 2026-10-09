import { cn } from '../../utils/cn';

interface PhoneMockupProps {
  src: string;
  alt: string;
  className?: string;
  /** мягкое свечение под экраном */
  glow?: boolean;
  /** eager — для изображений первого экрана */
  loading?: 'lazy' | 'eager';
}

/** CSS-макет смартфона: внутрь кладётся любой шаблон приглашения */
export function PhoneMockup({ src, alt, className, glow = true, loading = 'lazy' }: PhoneMockupProps) {
  return (
    <div className={cn('relative', className)}>
      {glow && (
        <div className="absolute -inset-6 rounded-[3rem] bg-champagne/25 blur-3xl" aria-hidden />
      )}
      <div className="relative rounded-[2.1rem] bg-night p-[0.4rem] shadow-lift ring-1 ring-ink/25 sm:rounded-[2.6rem]">
        <div className="relative aspect-[9/18.6] overflow-hidden rounded-[1.75rem] bg-sand sm:rounded-[2.2rem]">
          <img
            src={src}
            alt={alt}
            loading={loading}
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* блик экрана */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/18 via-transparent to-ink/10"
            aria-hidden
          />
          {/* вырез камеры */}
          <div className="absolute left-1/2 top-[0.55rem] h-[3.4%] w-[34%] -translate-x-1/2 rounded-full bg-night shadow-inner" aria-hidden />
        </div>
      </div>
    </div>
  );
}
