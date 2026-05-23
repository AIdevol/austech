import { Truck } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { GET_IN_TOUCH_MAILTO } from '@/lib/mailto'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { SERVICES_CTA } from '@/constants/servicesContent'

export function ServicesCta() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <Container>
        <div className="flex flex-col items-stretch gap-6 rounded-sm border border-slate-200/80 bg-slate-50 p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-8 lg:p-10">
          <ScrollReveal variant="fadeLeft" className="flex items-start gap-5">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold">
              <Truck className="h-7 w-7 text-white" strokeWidth={1.75} aria-hidden />
            </span>
            <div>
              <h2 className="text-xl font-extrabold uppercase text-royal sm:text-2xl">
                {SERVICES_CTA.title}
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                {SERVICES_CTA.description}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fadeRight" delay={0.1} className="w-full sm:w-auto">
            <Button
              href={GET_IN_TOUCH_MAILTO}
              variant="primary"
              showArrow
              className="w-full justify-center px-8 py-3.5 sm:w-auto"
            >
              Get in touch today
            </Button>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}
