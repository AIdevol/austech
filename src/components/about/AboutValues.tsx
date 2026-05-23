import { AnimatedCard } from '@/components/animations/AnimatedCard'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { StaggerGroup, StaggerItem } from '@/components/animations/Stagger'
import { ValueIcon } from '@/components/icons/aboutIcons'
import { Container } from '@/components/ui/Container'
import { TopPatti } from '@/components/ui/TopPatti'
import { ABOUT_VALUES } from '@/constants/aboutContent'

export function AboutValues() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <ScrollReveal variant="fadeUp" className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <span className="h-px w-12 bg-gold-soft sm:w-20" aria-hidden />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Our values</p>
            <span className="h-px w-12 bg-gold-soft sm:w-20" aria-hidden />
          </div>
          <h2 className="mt-3 text-3xl font-extrabold text-royal sm:text-4xl">
            The principles that drive us
          </h2>
        </ScrollReveal>

        <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5" stagger={0.08}>
          {ABOUT_VALUES.map((value) => (
            <StaggerItem key={value.title}>
              <AnimatedCard className="relative h-full overflow-hidden rounded-sm border border-slate-200/80 bg-white shadow-[0_4px_24px_rgba(10,31,68,0.06)]">
                <TopPatti />
                <div className="p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-royal/15 bg-royal/5">
                    <ValueIcon icon={value.icon} className="h-7 w-7 text-royal" />
                  </div>
                  <h3 className="mt-5 text-sm font-extrabold uppercase tracking-wide text-royal">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{value.description}</p>
                </div>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  )
}
