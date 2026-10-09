/**
 * Сопоставление ключей иконок из data/* с компонентами Lucide.
 */
import {
  AlignLeft,
  Clock3,
  Gem,
  Image as ImageIcon,
  Images,
  LayoutGrid,
  Link2,
  ListChecks,
  Map,
  MapPin,
  Music,
  PenLine,
  QrCode,
  Shirt,
  Smartphone,
  Timer,
  Type,
  type LucideIcon,
} from 'lucide-react';
import type { IconKey } from '../../data/content';

export const iconMap: Record<IconKey, LucideIcon> = {
  gem: Gem,
  grid: LayoutGrid,
  pen: PenLine,
  clock: Clock3,
  smartphone: Smartphone,
  type: Type,
  image: ImageIcon,
  text: AlignLeft,
  timer: Timer,
  pin: MapPin,
  map: Map,
  dress: Shirt,
  music: Music,
  gallery: Images,
  rsvp: ListChecks,
  link: Link2,
  qr: QrCode,
};
