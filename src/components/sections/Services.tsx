import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { AnimatedCard } from '@/components/animations/AnimatedCard'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { StaggerGroup, StaggerItem } from '@/components/animations/Stagger'
import { resolveServiceIcon } from '@/components/icons/iconMap'
import { Container } from '@/components/ui/Container'
import { FloatingImage } from '@/components/ui/FloatingImage'
import { TopPatti } from '@/components/ui/TopPatti'
import { SERVICES_SECTION } from '@/constants/content'
import { SERVICE_DETAILS } from '@/constants/servicesContent'

export function Services() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="services" className="bg-white pt-20 pb-16 sm:pt-24 sm:pb-20">
      <Container>
        <ScrollReveal variant="fadeUp" className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <span className="h-px w-12 bg-gold-soft sm:w-20" aria-hidden />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              {SERVICES_SECTION.eyebrow}
            </p>
            <span className="h-px w-12 bg-gold-soft sm:w-20" aria-hidden />
          </div>
          <h2 className="mt-3 text-3xl font-extrabold uppercase text-royal sm:text-4xl">
            {SERVICES_SECTION.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {SERVICES_SECTION.description}
          </p>
        </ScrollReveal>

        <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {SERVICE_DETAILS.map((service, index) => {
            const Icon = resolveServiceIcon(service.icon)
            return (
              <StaggerItem key={service.title}>
                <AnimatedCard className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-slate-200/80 bg-white shadow-[0_8px_32px_rgba(10,31,68,0.08)] transition-shadow hover:shadow-[0_20px_48px_rgba(10,31,68,0.14)]">
                  <TopPatti />
                  <div className="relative h-44 overflow-hidden sm:h-48">
                    <FloatingImage
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full"
                      imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      floatY={6}
                      floatDuration={5 + (index % 3)}
                      delay={index * 0.3}
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-royal/90 via-royal/30 to-transparent"
                      aria-hidden
                    />
                    <motion.span
                      className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 bg-white/95 text-royal shadow-lg"
                      animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
                      transition={
                        reduceMotion
                          ? undefined
                          : { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }
                      }
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
                    </motion.span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="text-sm font-extrabold uppercase tracking-wide text-royal">
                      {service.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>
                    <Link
                      to={`/services#${service.slug}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold transition-colors hover:text-gold-dark"
                    >
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </Link>
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
