import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { HeroContent, HeroContentItem } from '@/components/animations/HeroContent'
import { HeroMedia } from '@/components/animations/HeroMedia'
import { Container } from '@/components/ui/Container'
import { CONTACT_HERO } from '@/constants/contactContent'
import { VIDEOS } from '@/constants/content'

export function ContactHero() {
  return (
    <section className="relative min-h-[420px] overflow-hidden sm:min-h-[480px] lg:min-h-[520px]">
      <HeroMedia
        src={VIDEOS.hero}
        kind="video"
        preload="auto"
        alt="Semi-truck on highway at dusk"
        objectPosition="object-center"
        overlayClassName="bg-gradient-to-r from-navy/95 via-navy/85 to-navy/55"
      />

      <Container className="relative z-10 flex min-h-[420px] flex-col justify-center py-14 sm:min-h-[480px] sm:py-16 lg:min-h-[520px] lg:py-20">
        <HeroContent className="max-w-2xl">
          <HeroContentItem>
            <nav aria-label="Breadcrumb" className="mb-5">
              <ol className="flex flex-wrap items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/70">
                <li>
                  <Link to="/" className="transition-colors hover:text-gold">
                    Home
                  </Link>
                </li>
                <li aria-hidden>
                  <ChevronRight className="h-3.5 w-3.5" />
                </li>
                <li className="text-gold">{CONTACT_HERO.breadcrumb}</li>
              </ol>
            </nav>
          </HeroContentItem>

          <HeroContentItem>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold-soft" aria-hidden />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                {CONTACT_HERO.eyebrow}
              </p>
            </div>
          </HeroContentItem>

          <HeroContentItem>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              {CONTACT_HERO.title}
            </h1>
          </HeroContentItem>

          <HeroContentItem>
            <p className="mt-3 text-sm font-bold uppercase tracking-[0.12em] text-gold sm:text-base">
              {CONTACT_HERO.subtitle}
            </p>
          </HeroContentItem>

          <HeroContentItem>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">
              {CONTACT_HERO.description}
            </p>
          </HeroContentItem>
        </HeroContent>
      </Container>
    </section>
  )
}
