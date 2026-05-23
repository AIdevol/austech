import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { StaggerGroup, StaggerItem } from '@/components/animations/Stagger'
import { CheckIcon } from '@/components/icons/Icons'
import { WhyStatIconSvg } from '@/components/icons/ServiceIcons'
import { WhyChooseCurvyArrow } from '@/components/sections/WhyChooseCurvyArrow'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { GET_IN_TOUCH_MAILTO } from '@/lib/mailto'
import { EASE_OUT } from '@/lib/motion'
import { WHY_CHOOSE, WHY_CHOOSE_IMAGES } from '@/constants/content'

const WHY_CARDS = [
  { title: 'Cost effective', description: 'Competitive rates without compromising service quality.' },
  { title: 'Real-time tracking', description: 'Advanced tools for complete shipment visibility.' },
  { title: '24/7 operations', description: 'Round-the-clock support for USA & Canada clients.' },
  { title: 'Data security', description: 'Strict confidentiality and secure data handling.' },
]

const SHOWCASE_SLIDES = [
  {
    src: WHY_CHOOSE_IMAGES.main,
    alt: 'Semi-truck on highway at sunset',
    label: 'Nationwide fleet',
  },
  {
    src: WHY_CHOOSE_IMAGES.accentTop,
    alt: 'Freight truck on open road',
    label: 'On the road',
  },
  {
    src: WHY_CHOOSE_IMAGES.accentBottom,
    alt: 'Logistics and highway transport',
    label: 'Always moving',
  },
] as const

const SLIDE_MS = 5000

function WhyChooseShowcase() {
  const reduceMotion = useReducedMotion()
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (reduceMotion || paused) return
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % SHOWCASE_SLIDES.length)
    }, SLIDE_MS)
    return () => window.clearInterval(timer)
  }, [paused, reduceMotion])

  const slide = SHOWCASE_SLIDES[active]

  return (
    <motion.div
      className="relative mx-auto w-full max-w-[380px] lg:max-w-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <span
        className="pointer-events-none absolute -left-1 top-8 bottom-16 z-20 w-1 rounded-full bg-gradient-to-b from-gold via-gold/80 to-transparent sm:-left-2"
        aria-hidden
      />

      <div className="relative overflow-hidden rounded-2xl rounded-br-[3.5rem] border border-gold/40 bg-navy shadow-[0_28px_60px_-20px_rgba(0,0,0,0.8)]">
        <motion.div
          className="relative aspect-[4/5] w-full sm:aspect-[3/4]"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              className="absolute inset-0 h-full w-full object-cover"
              initial={reduceMotion ? false : { opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 1.02 }}
              transition={{ duration: reduceMotion ? 0 : 0.65, ease: EASE_OUT }}
              loading="lazy"
            />
          </AnimatePresence>

          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent"
            aria-hidden
          />

          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={slide.label}
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                transition={{ duration: 0.35 }}
                className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold"
              >
                {slide.label}
              </motion.p>
            </AnimatePresence>

            <div className="mt-3 h-0.5 overflow-hidden rounded-full bg-white/15" aria-hidden>
              <motion.span
                key={`progress-${active}-${paused}`}
                className="block h-full w-full origin-left rounded-full bg-gold"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={
                  paused || reduceMotion
                    ? { duration: 0.25, ease: 'easeOut' }
                    : { duration: SLIDE_MS / 1000, ease: 'linear' }
                }
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex gap-2 sm:gap-2.5" role="tablist" aria-label="Gallery slides">
          {SHOWCASE_SLIDES.map((item, index) => {
            const isActive = index === active
            return (
              <button
                key={item.label}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Show ${item.label}`}
                onClick={() => setActive(index)}
                className={`group relative overflow-hidden rounded-lg transition-all ${
                  isActive
                    ? 'ring-2 ring-gold ring-offset-2 ring-offset-navy'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={item.src}
                  alt=""
                  className="h-14 w-[4.5rem] object-cover sm:h-16 sm:w-24"
                  loading="lazy"
                />
                {isActive && (
                  <span className="absolute inset-0 border border-gold/30 bg-gold/10" aria-hidden />
                )}
              </button>
            )
          })}
        </div>

        <p className="text-[10px] font-semibold uppercase tracking-wider text-white/45">
          {active + 1} / {SHOWCASE_SLIDES.length}
        </p>
      </div>
    </motion.div>
  )
}

export function WhyChoose() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-navy py-12 sm:py-16 lg:py-20">
      <WhyChooseCurvyArrow className="absolute left-0 top-1/2 z-0 hidden h-[55%] w-[70%] -translate-y-1/2 opacity-50 lg:block xl:w-[62%]" />

      <motion.div
        className="pointer-events-none absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-royal/25 blur-3xl"
        aria-hidden
        animate={reduceMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-gold/15 blur-3xl"
        aria-hidden
      />

      <Container className="relative z-10">
        <motion.div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr_1fr] lg:gap-6 xl:gap-10">
          <ScrollReveal variant="fadeLeft" className="relative z-10 order-1">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              {WHY_CHOOSE.eyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-extrabold uppercase leading-tight text-white sm:text-3xl">
              {WHY_CHOOSE.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/75">{WHY_CHOOSE.description}</p>
            <StaggerGroup className="mt-6 space-y-3" stagger={0.06}>
              {WHY_CHOOSE.points.map((point) => (
                <StaggerItem key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm text-white/90">{point}</span>
                </StaggerItem>
              ))}
            </StaggerGroup>
            <Button href={GET_IN_TOUCH_MAILTO} variant="primary" showArrow className="mt-8">
              Get in touch today
            </Button>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.1} className="relative order-2">
            <WhyChooseShowcase />
          </ScrollReveal>

          <ScrollReveal variant="fadeRight" delay={0.15} className="relative z-10 order-3">
            <ul className="space-y-4">
              {WHY_CARDS.map((card, index) => (
                <motion.li
                  key={card.title}
                  initial={reduceMotion ? false : { opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease: EASE_OUT }}
                  whileHover={reduceMotion ? undefined : { y: -4, scale: 1.01 }}
                  className="group flex items-start gap-4 rounded-xl border border-white/15 bg-white/5 px-4 py-4 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-gold/50 hover:bg-white/[0.08] hover:shadow-[0_16px_40px_-12px_rgba(212,175,55,0.25)]"
                >
                  <WhyStatIconSvg
                    icon={WHY_CHOOSE.stats[index % WHY_CHOOSE.stats.length].icon}
                    className="h-7 w-7 shrink-0 text-gold transition-transform duration-300 group-hover:scale-110"
                  />
                  <div>
                    <p className="text-sm font-extrabold uppercase tracking-wide text-white">
                      {card.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-white/70">{card.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </ScrollReveal>
        </motion.div>
      </Container>
    </section>
  )
}
