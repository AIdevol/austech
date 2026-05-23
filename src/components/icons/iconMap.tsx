import type { LucideIcon } from 'lucide-react'
import {
  Award,
  BadgeCheck,
  Building2,
  Clock,
  Container,
  Globe2,
  Headphones,
  Moon,
  Package,
  ShieldCheck,
  Truck,
  Users,
  Warehouse,
} from 'lucide-react'
import type { FeatureItem, ServiceItem, Stat, WhyStat } from '@/types'

export type AppIconName = FeatureItem['icon'] | Stat['icon'] | WhyStat['icon']

export const FEATURE_ICONS: Record<FeatureItem['icon'], LucideIcon> = {
  team: Users,
  support: Clock,
  secure: ShieldCheck,
  globe: Globe2,
}

export const STAT_ICONS: Record<Stat['icon'], LucideIcon> = {
  professionals: Users,
  loads: Package,
  clients: Building2,
  satisfaction: BadgeCheck,
  support: Headphones,
}

export const WHY_STAT_ICONS: Record<WhyStat['icon'], LucideIcon> = {
  professionals: Users,
  loads: Package,
  satisfaction: Award,
}

export const SERVICE_ICONS: Record<ServiceItem['icon'], LucideIcon> = {
  brokerage: Warehouse,
  dispatch: Headphones,
  otr: Truck,
  drayage: Container,
  night: Moon,
  support: Headphones,
}

export function resolveAppIcon(name: AppIconName): LucideIcon {
  if (name in FEATURE_ICONS) return FEATURE_ICONS[name as FeatureItem['icon']]
  if (name in STAT_ICONS) return STAT_ICONS[name as Stat['icon']]
  return WHY_STAT_ICONS[name as WhyStat['icon']]
}

export function resolveServiceIcon(name: ServiceItem['icon']): LucideIcon {
  return SERVICE_ICONS[name]
}
