import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { FeatureIconSvg } from '@/components/icons/ServiceIcons'
import { TopPatti } from '@/components/ui/TopPatti'
import type { FeatureItem } from '@/types'

type FeatureBarProps = {
  features: FeatureItem[]
}

export function FeatureBar({ features }: FeatureBarProps) {
  return (
    <div className="relative overflow-hidden rounded-t-2xl bg-navy shadow-[0_-8px_32px_rgba(10,31,68,0.15)]">
      <TopPatti />
      <ul className="grid grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <ScrollReveal
            key={feature.label}
            as="li"
            variant="fadeUp"
            delay={index * 0.08}
            className={`relative flex flex-col gap-3 px-3 py-4 sm:flex-row sm:items-center sm:justify-center sm:gap-4 sm:px-6 sm:py-6 ${
              index > 0 ? 'lg:border-l lg:border-white/15' : ''
            } ${index === 2 ? 'max-lg:border-l-0 max-lg:border-t max-lg:border-white/15' : ''} ${
              index === 3 ? 'max-lg:border-t max-lg:border-white/15' : ''
            }`}
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15 sm:mx-0">
              <FeatureIconSvg icon={feature.icon} className="h-5 w-5 text-gold" />
            </span>
            <span className="text-[10px] font-semibold uppercase leading-snug tracking-wide text-white sm:text-center sm:text-xs">
              {feature.label}
            </span>
          </ScrollReveal>
        ))}
      </ul>
    </div>
  )
}
