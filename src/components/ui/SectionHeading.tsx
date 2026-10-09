import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  desc?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  className?: string;
}

/** Единый заголовок секции: eyebrow + serif-заголовок + описание */
export function SectionHeading({
  eyebrow,
  title,
  desc,
  align = 'center',
  tone = 'light',
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      <span
        className={cn(
          'eyebrow',
          tone === 'dark' && 'text-champagne',
          align === 'left' && '[&::after]:hidden',
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          'display-2 mt-5 text-balance',
          tone === 'dark' ? 'text-cream' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {desc && (
        <p
          className={cn(
            'mt-5 text-[0.95rem] leading-relaxed sm:text-base',
            align === 'center' && 'mx-auto',
            'max-w-xl',
            tone === 'dark' ? 'text-cream/60' : 'text-ink-soft',
          )}
        >
          {desc}
        </p>
      )}
    </Reveal>
  );
}
