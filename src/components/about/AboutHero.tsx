import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { HeroContent, HeroContentItem } from '@/components/animations/HeroContent'
import { HeroMedia } from '@/components/animations/HeroMedia'
import { Container } from '@/components/ui/Container'
import { VIDEOS } from '@/constants/content'
import { ABOUT_HERO, ABOUT_IMAGES } from '@/constants/aboutContent'

export function AboutHero() {
  return (
    <section className="relative min-h-[480px] overflow-hidden lg:min-h-[560px]">
      <HeroMedia
        src={VIDEOS.hero}
        poster={ABOUT_IMAGES.hero}
        kind="video"
        alt="Semi-truck on highway at dusk"
        objectPosition="object-center"
        overlayClassName="bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70"
      />

      <Container className="relative z-10 flex min-h-[480px] flex-col justify-center py-16 lg:min-h-[560px] lg:py-20">
        <HeroContent className="max-w-3xl">
          <HeroContentItem>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/70">
                <li>
                  <Link to="/" className="transition-colors hover:text-gold">
                    Home
                  </Link>
                </li>
                <li aria-hidden>
                  <ChevronRight className="h-3.5 w-3.5" />
                </li>
                <li className="text-gold">{ABOUT_HERO.breadcrumb}</li>
              </ol>
            </nav>
          </HeroContentItem>

          <HeroContentItem>
            <h1 className="text-4xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              {ABOUT_HERO.title}
            </h1>
          </HeroContentItem>

          <HeroContentItem>
            <p className="mt-4 text-sm font-bold uppercase tracking-[0.15em] text-gold sm:text-base">
              {ABOUT_HERO.tagline}
            </p>
          </HeroContentItem>

          <HeroContentItem>
            <div className="mt-6 space-y-4">
              {ABOUT_HERO.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </HeroContentItem>
        </HeroContent>
      </Container>
    </section>
  )
}
