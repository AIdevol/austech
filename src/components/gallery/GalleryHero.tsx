import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { HeroContent, HeroContentItem } from '@/components/animations/HeroContent'
import { HeroMedia } from '@/components/animations/HeroMedia'
import { Container } from '@/components/ui/Container'
import { IMAGES, VIDEOS } from '@/constants/content'
import { GALLERY_HERO, GALLERY_HERO_POSTER } from '@/constants/galleryContent'

export function GalleryHero() {
  return (
    <section className="relative min-h-[380px] overflow-hidden sm:min-h-[440px] lg:min-h-[480px]">
      <HeroMedia
        src={VIDEOS.hero}
        poster={GALLERY_HERO_POSTER || IMAGES.truck}
        kind="video"
        alt="Semi-truck on Australian highway"
        objectPosition="object-[70%_center]"
        overlayClassName="bg-gradient-to-r from-navy/90 from-0% via-navy/70 via-[45%] to-navy/35 sm:via-navy/60 sm:via-[40%] sm:to-navy/20"
      />

      <Container className="relative z-10 flex min-h-[380px] flex-col justify-center py-14 sm:min-h-[440px] sm:py-16 lg:min-h-[480px] lg:py-20">
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
                <li className="text-gold">{GALLERY_HERO.breadcrumb}</li>
              </ol>
            </nav>
          </HeroContentItem>

          <HeroContentItem>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold-soft" aria-hidden />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                {GALLERY_HERO.eyebrow}
              </p>
            </div>
          </HeroContentItem>

          <HeroContentItem>
            <h1 className="mt-4 text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              {GALLERY_HERO.title}
            </h1>
          </HeroContentItem>

          <HeroContentItem>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
              {GALLERY_HERO.subtitle}
            </p>
          </HeroContentItem>
        </HeroContent>
      </Container>
    </section>
  )
}
