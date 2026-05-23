import type { AppIconName } from '@/components/icons/iconMap'
import { resolveAppIcon } from '@/components/icons/iconMap'

type AppIconProps = {
  name: AppIconName
  className?: string
  strokeWidth?: number
}

export function AppIcon({ name, className = 'h-6 w-6', strokeWidth = 1.75 }: AppIconProps) {
  const Icon = resolveAppIcon(name)
  return <Icon className={className} strokeWidth={strokeWidth} aria-hidden />
}
