import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { ABOUT_IMAGES, ABOUT_STORY } from '@/constants/aboutContent'

export function AboutStory() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal variant="fadeLeft">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold-soft" aria-hidden />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                {ABOUT_STORY.eyebrow}
              </p>
            </div>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-royal sm:text-4xl">
              {ABOUT_STORY.title}
            </h2>
            {ABOUT_STORY.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mt-5 text-sm leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
            <Button href="/contact" variant="navy" showArrow className="mt-8">
              Know more about us
            </Button>
          </ScrollReveal>

          <ScrollReveal variant="fadeRight" delay={0.1}>
            <div className="overflow-hidden rounded-sm shadow-[0_8px_40px_rgba(10,31,68,0.12)]">
              <img
                src={ABOUT_IMAGES.office}
                alt="Austech office building"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}
