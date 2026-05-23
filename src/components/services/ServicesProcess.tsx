import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { StaggerGroup, StaggerItem } from '@/components/animations/Stagger'
import { Container } from '@/components/ui/Container'
import { TopPatti } from '@/components/ui/TopPatti'
import { SERVICES_PROCESS } from '@/constants/servicesContent'

export function ServicesProcess() {
  return (
    <section className="bg-navy py-14 sm:py-16 lg:py-20">
      <Container>
        <ScrollReveal variant="fadeUp" className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <span className="h-px w-12 bg-gold-soft sm:w-16" aria-hidden />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              {SERVICES_PROCESS.eyebrow}
            </p>
            <span className="h-px w-12 bg-gold-soft sm:w-16" aria-hidden />
          </div>
          <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
            {SERVICES_PROCESS.title}
          </h2>
        </ScrollReveal>

        <StaggerGroup className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {SERVICES_PROCESS.steps.map((step, index) => (
            <StaggerItem key={step.title}>
              <article className="relative h-full overflow-hidden rounded-sm border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <TopPatti />
                <span className="text-3xl font-extrabold leading-none text-gold/90">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 text-sm font-extrabold uppercase tracking-wide text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{step.description}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  )
}
