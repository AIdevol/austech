import { ExternalLink } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Container } from '@/components/ui/Container'
import { SITE } from '@/constants/content'

export function ContactMap() {
  const embedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    'TDS Tower, Sector 74, Sahibzada Ajit Singh Nagar, Punjab',
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`

  return (
    <section className="bg-white py-8 sm:py-10 lg:py-0">
      <Container>
        <div className="grid overflow-hidden rounded-sm shadow-[0_4px_24px_rgba(0,27,57,0.08)] lg:grid-cols-[minmax(0,38%)_1fr]">
          <ScrollReveal
            variant="fadeUp"
            className="flex flex-col justify-center bg-navy px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16"
          >
            <span className="block h-0.5 w-10 bg-gold" aria-hidden />
            <h2 className="mt-4 text-xl font-extrabold text-white sm:text-2xl lg:text-3xl">
              Visit our office
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/80">{SITE.address}</p>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full min-h-[48px] items-center justify-center gap-2 border-2 border-white px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-royal sm:mt-8 sm:w-fit"
            >
              View on Google Maps
              <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
            </a>
          </ScrollReveal>

          <ScrollReveal
            variant="fadeUp"
            delay={0.08}
            className="relative min-h-[260px] sm:min-h-[320px] lg:min-h-[400px]"
          >
            <iframe
              title="Austech office location on Google Maps"
              src={embedSrc}
              className="absolute inset-0 h-full w-full border-0 grayscale-[20%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}
