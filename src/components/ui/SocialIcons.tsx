/**
 * Социальные иконки (брендовых иконок нет в lucide-react,
 * поэтому рисуем их сами в том же стиле: stroke 24×24).
 */
import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps): IconProps => ({
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  ...props,
});

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function TelegramIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M21.5 4.5 19 19c-.3 1.4-1.2 1.7-2.4 1l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.2-4.9L17.6 7c.4-.3-.1-.5-.6-.2L7.7 13l-4.8-1.5c-1-.3-1-1 .2-1.5L20.4 3c.9-.3 1.6.2 1.1 1.5z" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.5L3 21l2-5.4A8.5 8.5 0 1 1 21 11.5z" />
      <path d="M9.2 8.5c-.2 0-.5.1-.7.3-.5.5-.9 1.2-.6 2.2.5 1.7 1.6 3.2 3 4.3 1.4 1.1 2.8 1.6 4.2 1.5.8-.1 1.5-.5 1.8-1.1.1-.3 0-.6-.2-.8l-1.6-1c-.3-.2-.6-.1-.8.1l-.5.6c-.2.2-.5.3-.8.1-1.1-.6-2-1.5-2.6-2.6-.1-.3 0-.6.2-.8l.5-.5c.2-.2.3-.5.1-.8l-.9-1.6c-.1-.3-.3-.4-.5-.4z" />
    </svg>
  );
}
