import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { StaggerGroup, StaggerItem } from '@/components/animations/Stagger'
import { CheckIcon } from '@/components/icons/Icons'
import { resolveServiceIcon } from '@/components/icons/iconMap'
import { serviceInquiryMailto } from '@/lib/mailto'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { FloatingImage } from '@/components/ui/FloatingImage'
import { TopPatti } from '@/components/ui/TopPatti'
import { SERVICE_DETAILS } from '@/constants/servicesContent'

function CheckBullet({ children }: { children: string }) {
  return (
    <li className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold text-gold">
        <CheckIcon className="h-3 w-3" aria-hidden />
      </span>
      {children}
    </li>
  )
}

export function ServicesList() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="bg-slate-50 py-14 sm:py-16 lg:py-20">
      <Container>
        <ScrollReveal variant="fadeUp" className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <span className="h-px w-12 bg-gold-soft sm:w-16" aria-hidden />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Service details</p>
            <span className="h-px w-12 bg-gold-soft sm:w-16" aria-hidden />
          </div>
          <h2 className="mt-3 text-2xl font-extrabold uppercase text-royal sm:text-3xl">
            What we deliver
          </h2>
        </ScrollReveal>

        <StaggerGroup className="mt-10 space-y-8 sm:mt-12" stagger={0.06}>
          {SERVICE_DETAILS.map((service, index) => {
            const Icon = resolveServiceIcon(service.icon)
            const reversed = index % 2 === 1

            return (
              <StaggerItem key={service.slug}>
                <article
                  id={service.slug}
                  className="relative scroll-mt-24 overflow-hidden rounded-lg border border-slate-200/80 bg-white shadow-[0_8px_36px_rgba(10,31,68,0.08)] sm:scroll-mt-28"
                >
                  <TopPatti />
                  <div
                    className={`grid lg:grid-cols-[minmax(260px,0.95fr)_1fr_1fr] ${reversed ? 'lg:[&>*:first-child]:order-3 lg:[&>*:nth-child(2)]:order-1 lg:[&>*:nth-child(3)]:order-2' : ''}`}
                  >
                    <motion.div
                      className={`relative min-h-[220px] overflow-hidden border-b border-slate-100 lg:min-h-[320px] lg:border-b-0 lg:border-r ${reversed ? 'lg:border-r-0 lg:border-l' : ''}`}
                      initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="absolute inset-3 rounded-lg border border-gold/30 shadow-[0_16px_40px_-12px_rgba(10,31,68,0.35)] sm:inset-4">
                        <FloatingImage
                          src={service.image}
                          alt={service.title}
                          className="h-full w-full overflow-hidden rounded-lg"
                          imgClassName="h-full min-h-[220px] w-full object-cover lg:min-h-[320px]"
                          floatY={8}
                          floatDuration={5.5 + (index % 2)}
                          delay={index * 0.25}
                        />
                      </div>
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-royal/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-white/20"
                        aria-hidden
                      />
                      <span className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold/60 bg-white text-royal shadow-lg sm:bottom-6 sm:left-6">
                        <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
                      </span>
                    </motion.div>

                    <div className="flex flex-col justify-center border-b border-slate-100 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold">
                        {service.tagline}
                      </p>
                      <h3 className="mt-2 text-xl font-extrabold uppercase tracking-wide text-royal sm:text-2xl">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-muted">{service.overview}</p>
                      <Button
                        href={serviceInquiryMailto(service.title)}
                        variant="primary"
                        showArrow
                        className="mt-6 w-full sm:w-fit"
                      >
                        Request this service
                      </Button>
                    </div>

                    <div className="grid gap-6 bg-slate-50/80 p-6 sm:grid-cols-2 sm:p-8 lg:block lg:p-10">
                      <div className="lg:mb-8">
                        <h4 className="text-xs font-extrabold uppercase tracking-wider text-royal">
                          Key features
                        </h4>
                        <ul className="mt-4 space-y-3">
                          {service.features.map((feature) => (
                            <CheckBullet key={feature}>{feature}</CheckBullet>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-extrabold uppercase tracking-wider text-royal">
                          Business benefits
                        </h4>
                        <ul className="mt-4 space-y-3">
                          {service.benefits.map((benefit) => (
                            <CheckBullet key={benefit}>{benefit}</CheckBullet>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            )
          })}
        </StaggerGroup>

        <ScrollReveal variant="fadeUp" delay={0.1} className="mt-10 text-center sm:mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gold transition-colors hover:text-gold-dark"
          >
            Discuss a custom package
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </ScrollReveal>
      </Container>
    </section>
  )
}
