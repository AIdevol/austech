import { Headphones } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { GET_IN_TOUCH_MAILTO } from '@/lib/mailto'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { ABOUT_CTA } from '@/constants/aboutContent'

export function AboutCta() {
  return (
    <section className="bg-navy py-14 sm:py-16">
      <Container>
        <div className="flex flex-col items-stretch gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <ScrollReveal variant="fadeLeft" className="flex items-start gap-5">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold">
              <Headphones className="h-7 w-7 text-white" strokeWidth={1.75} aria-hidden />
            </span>
            <div>
              <h2 className="text-xl font-extrabold uppercase text-white sm:text-2xl">
                {ABOUT_CTA.title}
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/75">
                {ABOUT_CTA.description}
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
