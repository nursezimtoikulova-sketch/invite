import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface RevealProps {
  children: ReactNode;
  /** задержка появления, мс */
  delay?: number;
  className?: string;
}

/**
 * Плавное появление блока при скролле (IntersectionObserver).
 * Использует классы .reveal / .is-revealed из index.css.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-revealed');
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style: CSSProperties = delay ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div ref={ref} style={style} className={cn('reveal', className)}>
      {children}
    </div>
  );
}
