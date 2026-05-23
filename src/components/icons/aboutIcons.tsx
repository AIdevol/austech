import type { LucideIcon } from 'lucide-react'
import {
  Award,
  Clock,
  Globe2,
  Handshake,
  RefreshCw,
  ShieldCheck,
  TrendingUp,
  ThumbsUp,
  Truck,
  Users,
} from 'lucide-react'
import type { AboutHeroStat, ValueItem } from '@/types'

const ABOUT_HERO_ICONS: Record<AboutHeroStat['icon'], LucideIcon> = {
  years: Users,
  loads: Truck,
  clients: Handshake,
  countries: Globe2,
  support: Clock,
  satisfaction: ThumbsUp,
}

const VALUE_ICONS: Record<ValueItem['icon'], LucideIcon> = {
  integrity: ShieldCheck,
  partnership: Users,
  excellence: Award,
  reliability: RefreshCw,
  growth: TrendingUp,
}

type AboutIconProps = {
  name: AboutHeroStat['icon'] | ValueItem['icon']
  className?: string
}

export function AboutIcon({ name, className = 'h-6 w-6' }: AboutIconProps) {
  const Icon =
    name in ABOUT_HERO_ICONS
      ? ABOUT_HERO_ICONS[name as AboutHeroStat['icon']]
      : VALUE_ICONS[name as ValueItem['icon']]

  return <Icon className={className} strokeWidth={1.75} aria-hidden />
}

export function AboutHeroStatIcon({
  icon,
  className = 'h-6 w-6',
}: {
  icon: AboutHeroStat['icon']
  className?: string
}) {
  const Icon = ABOUT_HERO_ICONS[icon]
  return <Icon className={className} strokeWidth={1.75} aria-hidden />
}

export function ValueIcon({
  icon,
  className = 'h-8 w-8',
}: {
  icon: ValueItem['icon']
  className?: string
}) {
  const Icon = VALUE_ICONS[icon]
  return <Icon className={className} strokeWidth={1.75} aria-hidden />
}
