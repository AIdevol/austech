import { Headphones } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { CONTACT_CTA } from '@/constants/contactContent'
import { SITE } from '@/constants/content'
import { getInTouchMailto } from '@/lib/mailto'

export function ContactCta() {
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
                {CONTACT_CTA.title}
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/75">
                {CONTACT_CTA.description}
              </p>
              <p className="mt-3 text-sm text-white/80">
                <span className="font-semibold text-gold">USA:</span>{' '}
                <a
                  href={`tel:${SITE.phoneUsa.replace(/[\s()-]/g, '')}`}
                  className="font-bold text-white hover:text-gold"
                >
                  {SITE.phoneUsa}
                </a>
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fadeRight" delay={0.1} className="w-full sm:w-auto">
            <Button
              href={getInTouchMailto({ subject: 'Message from Contact Page — Austech' })}
              variant="primary"
              showArrow
              className="w-full justify-center px-8 py-3.5 sm:w-auto"
            >
              Email our team
            </Button>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}
