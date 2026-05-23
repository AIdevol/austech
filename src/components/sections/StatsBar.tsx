import { StaggerGroup, StaggerItem } from '@/components/animations/Stagger'
import { StatIconSvg } from '@/components/icons/ServiceIcons'
import { Container } from '@/components/ui/Container'
import { STATS } from '@/constants/content'

export function StatsBar() {
  return (
    <section className="bg-navy py-12">
      <Container>
        <StaggerGroup className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8 lg:grid-cols-5 lg:gap-4">
          {STATS.map((stat) => (
            <StaggerItem key={stat.label} className="text-center">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 sm:h-12 sm:w-12">
                <StatIconSvg icon={stat.icon} className="h-5 w-5 text-gold sm:h-6 sm:w-6" />
              </span>
              <p className="mt-2 text-2xl font-extrabold text-white sm:mt-3 sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-[10px] font-medium uppercase leading-snug tracking-wide text-white/75 sm:text-[11px]">
                {stat.label}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  )
}
