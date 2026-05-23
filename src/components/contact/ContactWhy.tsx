import { AnimatedCard } from '@/components/animations/AnimatedCard'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { StaggerGroup, StaggerItem } from '@/components/animations/Stagger'
import { Container } from '@/components/ui/Container'
import { TopPatti } from '@/components/ui/TopPatti'
import { CONTACT_WHY_ITEMS } from '@/constants/contactContent'

export function ContactWhy() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <Container>
        <ScrollReveal variant="fadeUp" className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <span className="h-px w-12 bg-gold-soft sm:w-16" aria-hidden />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Why reach out</p>
            <span className="h-px w-12 bg-gold-soft sm:w-16" aria-hidden />
          </div>
          <h2 className="mt-3 text-2xl font-extrabold text-royal sm:text-3xl">
            Partner with a team that understands trucking
          </h2>
        </ScrollReveal>

        <StaggerGroup className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5" stagger={0.06}>
          {CONTACT_WHY_ITEMS.map((item) => {
            const Icon = item.icon
            return (
              <StaggerItem key={item.title}>
                <AnimatedCard className="relative h-full overflow-hidden rounded-sm border border-slate-200/80 bg-white shadow-[0_4px_24px_rgba(10,31,68,0.06)]">
                  <TopPatti />
                  <div className="p-5 sm:p-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-royal/15 bg-royal/5 text-royal">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} aria-hidden />
                    </span>
                    <h3 className="mt-4 text-xs font-extrabold uppercase tracking-wide text-royal">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                  </div>
                </AnimatedCard>
              </StaggerItem>
            )
          })}
        </StaggerGroup>
      </Container>
    </section>
  )
}
