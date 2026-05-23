import { AppIcon } from '@/components/icons/AppIcon'
import type { FeatureItem, Stat, WhyStat } from '@/types'

export function FeatureIconSvg({
  icon,
  className = 'h-6 w-6',
}: {
  icon: FeatureItem['icon']
  className?: string
}) {
  return <AppIcon name={icon} className={className} />
}

export function StatIconSvg({
  icon,
  className = 'h-7 w-7',
}: {
  icon: Stat['icon']
  className?: string
}) {
  return <AppIcon name={icon} className={className} />
}

export function WhyStatIconSvg({
  icon,
  className = 'h-7 w-7',
}: {
  icon: WhyStat['icon']
  className?: string
}) {
  return <AppIcon name={icon} className={className} />
}
