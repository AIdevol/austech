import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Container } from '@/components/ui/Container'
import { HERO_FEATURES } from '@/constants/content'
import { SERVICES_INTRO } from '@/constants/servicesContent'
import { FeatureIconSvg } from '@/components/icons/ServiceIcons'

export function ServicesIntro() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <Container>
        <ScrollReveal variant="fadeUp" className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold-soft sm:w-12" aria-hidden />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              {SERVICES_INTRO.eyebrow}
            </p>
            <span className="h-px w-10 bg-gold-soft sm:w-12" aria-hidden />
          </div>
          <h2 className="mt-3 text-2xl font-extrabold text-royal sm:text-3xl lg:text-4xl">
            {SERVICES_INTRO.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            {SERVICES_INTRO.description}
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.08} className="mt-10 sm:mt-12">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HERO_FEATURES.map((feature) => (
              <li
                key={feature.label}
                className="flex items-center gap-3 rounded-sm border border-slate-200/80 bg-slate-50 px-4 py-4"
              >
                <FeatureIconSvg icon={feature.icon} className="h-6 w-6 shrink-0 text-gold" />
                <span className="text-xs font-bold uppercase tracking-wide text-royal">
                  {feature.label}
                </span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </Container>
    </section>
  )
}
