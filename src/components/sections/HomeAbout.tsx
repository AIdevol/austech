import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { HOME_ABOUT, IMAGES } from '@/constants/content'

export function HomeAbout() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal variant="fadeLeft">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              {HOME_ABOUT.eyebrow}
            </p>
            <h2 className="mt-2 text-3xl font-extrabold uppercase leading-tight text-royal sm:text-4xl">
              {HOME_ABOUT.title}
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted">
              {HOME_ABOUT.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <Button href="/about" variant="primary" showArrow className="mt-8">
              {HOME_ABOUT.cta}
            </Button>
          </ScrollReveal>

          <ScrollReveal variant="fadeRight" delay={0.1}>
            <div className="overflow-hidden rounded-sm shadow-[0_8px_40px_rgba(10,31,68,0.12)]">
              <img
                src={IMAGES.truck}
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
