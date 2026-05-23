import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { StaggerGroup, StaggerItem } from '@/components/animations/Stagger'
import { AboutHeroStatIcon } from '@/components/icons/aboutIcons'
import { CheckIcon } from '@/components/icons/Icons'
import { GET_IN_TOUCH_MAILTO } from '@/lib/mailto'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { ABOUT_IMAGES, ABOUT_WHY, ABOUT_WHY_STATS } from '@/constants/aboutContent'

export function AboutWhyChoose() {
  return (
    <section className="overflow-hidden bg-navy">
      <Container className="relative py-10 sm:py-14 lg:py-0">
        <div className="grid items-center gap-8 lg:min-h-[520px] lg:grid-cols-[minmax(0,1.05fr)_minmax(260px,1.15fr)_minmax(0,0.9fr)] lg:gap-0 xl:min-h-[560px]">
          {/* Left column */}
          <ScrollReveal variant="fadeLeft" className="relative z-20 lg:py-16 xl:py-20">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold">
              {ABOUT_WHY.eyebrow}
            </p>
            <h2 className="mt-4 max-w-md text-[1.65rem] font-extrabold leading-[1.2] text-white sm:text-3xl lg:text-[2rem] xl:text-[2.15rem]">
              {ABOUT_WHY.title}
            </h2>
            <StaggerGroup className="mt-8 space-y-4" stagger={0.05}>
              {ABOUT_WHY.points.map((point) => (
                <StaggerItem key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border-2 border-gold bg-transparent">
                    <CheckIcon className="h-3 w-3 text-gold" />
                  </span>
                  <span className="text-[13px] leading-snug text-white/95 sm:text-sm">{point}</span>
                </StaggerItem>
              ))}
            </StaggerGroup>
            <Button href={GET_IN_TOUCH_MAILTO} variant="primary" showArrow className="mt-10 px-7 py-3.5">
              Get in touch today
            </Button>
          </ScrollReveal>

          {/* Center — truck portrait with edge vignette into navy */}
          <ScrollReveal
            variant="fadeUp"
            delay={0.08}
            className="relative order-last mx-auto w-full max-w-[300px] lg:order-none lg:mx-0 lg:h-full lg:max-w-none lg:self-stretch"
          >
            <div className="relative h-[300px] w-full sm:h-[380px] lg:absolute lg:inset-y-0 lg:left-1/2 lg:h-full lg:w-[min(100%,400px)] lg:-translate-x-1/2 xl:w-[440px]">
              <img
                src={ABOUT_IMAGES.whyChooseTruck}
                alt="Blue semi-truck on highway at dusk"
                className="h-full w-full object-cover object-center"
              />
              <div
                className="pointer-events-none absolute inset-y-0 left-0 w-[32%] bg-gradient-to-r from-navy via-navy/70 to-transparent"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-y-0 right-0 w-[32%] bg-gradient-to-l from-navy via-navy/70 to-transparent"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-navy to-transparent lg:hidden"
                aria-hidden
              />
            </div>
          </ScrollReveal>

          {/* Right column — stats */}
          <ScrollReveal
            variant="fadeRight"
            delay={0.12}
            className="relative z-20 lg:border-l lg:border-white/20 lg:py-16 lg:pl-10 xl:py-20 xl:pl-12"
          >
            <ul className="space-y-0">
              {ABOUT_WHY_STATS.map((stat, index) => (
                <li
                  key={stat.label}
                  className={`flex items-center gap-4 py-5 ${
                    index > 0 ? 'border-t border-white/10' : ''
                  }`}
                >
                  <AboutHeroStatIcon
                    icon={stat.icon}
                    className="h-9 w-9 shrink-0 text-gold sm:h-10 sm:w-10"
                  />
                  <div>
                    <p className="text-[1.75rem] font-extrabold leading-none text-white sm:text-[1.85rem]">
                      {stat.value}
                    </p>
                    <p className="mt-1.5 text-[11px] font-medium uppercase leading-snug tracking-wide text-white/75">
                      {stat.label}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}
