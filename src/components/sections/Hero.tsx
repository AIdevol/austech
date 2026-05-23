import { HeroContent, HeroContentItem } from '@/components/animations/HeroContent'
import { HeroMedia } from '@/components/animations/HeroMedia'
import { FeatureBar } from '@/components/sections/FeatureBar'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { HERO, HERO_FEATURES, VIDEOS } from '@/constants/content'

export function Hero() {
  return (
    <section className="relative">
      <div className="relative min-h-[480px] overflow-hidden sm:min-h-[560px] lg:min-h-[640px]">
        <HeroMedia
          src={VIDEOS.hero}
          kind="video"
          preload="auto"
          alt="Semi-truck on highway at dusk"
          objectPosition="object-[70%_center] sm:object-[78%_center] lg:object-right"
          overlayClassName="bg-gradient-to-r from-navy/95 from-0% via-navy/80 via-[42%] to-navy/40 sm:via-navy/75 sm:via-[38%] sm:to-transparent sm:via-[52%] sm:to-100%"
        />

        <Container className="relative z-10 flex min-h-[480px] items-center py-12 pb-24 sm:min-h-[560px] sm:py-16 sm:pb-28 lg:min-h-[640px] lg:py-20 lg:pb-32">
          <HeroContent className="max-w-xl lg:max-w-2xl">
            <HeroContentItem>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-gold-soft" aria-hidden />
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold sm:text-xs">
                  {HERO.eyebrow}
                </p>
              </div>
            </HeroContentItem>
            <HeroContentItem>
              <h1 className="mt-3 text-3xl font-extrabold uppercase leading-[1.05] tracking-tight sm:mt-4 sm:text-5xl lg:text-[3.25rem]">
                <span className="text-white">Truckload</span>{' '}
                <span className="text-gold">Solutions</span>
              </h1>
            </HeroContentItem>
            <HeroContentItem>
              <p className="mt-3 text-xs font-bold uppercase leading-snug tracking-wide text-white sm:mt-4 sm:text-base">
                {HERO.subtitle}
              </p>
            </HeroContentItem>
            <HeroContentItem>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/90 sm:mt-5 sm:text-base">
                {HERO.description}
              </p>
            </HeroContentItem>
            <HeroContentItem>
              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                <Button href="/services" variant="primary" showArrow className="w-full justify-center sm:w-auto">
                  Our services
                </Button>
                <Button href="/about" variant="outline-light" showArrow className="w-full justify-center sm:w-auto">
                  {HERO.secondaryCta}
                </Button>
              </div>
            </HeroContentItem>
          </HeroContent>
        </Container>
      </div>

      <div className="relative z-20 -mt-10 px-4 sm:-mt-16 sm:px-6 lg:-mt-[4.5rem] lg:px-8">
        <Container className="!px-0">
          <FeatureBar features={HERO_FEATURES} />
        </Container>
      </div>
    </section>
  )
}
