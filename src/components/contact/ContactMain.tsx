import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { ContactForm } from '@/components/contact/ContactForm'
import { ContactInfoCard } from '@/components/contact/ContactInfoCard'
import { Container } from '@/components/ui/Container'
import { CONTACT_MAIN } from '@/constants/contactContent'

export function ContactMain() {
  return (
    <section className="bg-slate-50 py-14 sm:py-16 lg:py-20">
      <Container>
        <ScrollReveal variant="fadeUp" className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold-soft sm:w-12" aria-hidden />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              {CONTACT_MAIN.eyebrow}
            </p>
            <span className="h-px w-10 bg-gold-soft sm:w-12" aria-hidden />
          </div>
          <h2 className="mt-3 text-2xl font-extrabold text-royal sm:text-3xl lg:text-4xl">
            {CONTACT_MAIN.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            {CONTACT_MAIN.description}
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-2 lg:gap-10">
          <ScrollReveal variant="fadeUp" delay={0.06}>
            <ContactInfoCard />
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={0.12}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}
