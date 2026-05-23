import { useCallback, useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { QuoteIcon } from '@/components/icons/Icons'
import { Container } from '@/components/ui/Container'
import { TESTIMONIALS } from '@/constants/content'
import type { Testimonial } from '@/types'

const AUTO_SCROLL_MS = 4500

function TestimonialCard({ item }: { item: Testimonial }) {
  const [avatarFailed, setAvatarFailed] = useState(false)

  return (
    <article
      data-testimonial-card
      className="flex h-full w-[min(100%,320px)] shrink-0 snap-center flex-col rounded-lg border border-slate-200/80 bg-white p-6 shadow-[0_8px_32px_rgba(10,31,68,0.08)] transition-shadow hover:shadow-[0_16px_40px_rgba(10,31,68,0.12)] sm:w-[340px] sm:p-8"
    >
      <QuoteIcon className="h-7 w-7 text-gold" aria-hidden />
      <p className="mt-4 flex-1 text-sm italic leading-relaxed text-muted">
        &ldquo;{item.quote}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-6">
        {!avatarFailed ? (
          <img
            src={item.avatar}
            alt={`${item.name} profile`}
            width={48}
            height={48}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={() => setAvatarFailed(true)}
            className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-gold/50 ring-offset-2 ring-offset-white"
          />
        ) : (
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-royal text-xs font-bold text-white ring-2 ring-gold/50 ring-offset-2 ring-offset-white"
            aria-hidden
          >
            {item.initials}
          </div>
        )}
        <div>
          <p className="text-sm font-bold text-royal">{item.name}</p>
          <p className="text-xs text-muted">{item.role}</p>
        </div>
      </div>
    </article>
  )
}

export function Testimonials() {
  const reduceMotion = useReducedMotion()
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const count = TESTIMONIALS.length

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current
    if (!track) return

    const card = track.querySelector<HTMLElement>('[data-testimonial-card]')
    if (!card) return

    const gap = 24
    const step = card.offsetWidth + gap
    const normalized = ((index % count) + count) % count

    track.scrollTo({
      left: normalized * step,
      behavior: reduceMotion ? 'auto' : 'smooth',
    })
    setActiveIndex(normalized)
  }, [count, reduceMotion])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const onScroll = () => {
      const card = track.querySelector<HTMLElement>('[data-testimonial-card]')
      if (!card) return
      const gap = 24
      const step = card.offsetWidth + gap
      const index = Math.round(track.scrollLeft / step)
      setActiveIndex(Math.min(index, count - 1))
    }

    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [count])

  useEffect(() => {
    if (reduceMotion || isPaused) return

    const timer = window.setInterval(() => {
      scrollToIndex(activeIndex + 1)
    }, AUTO_SCROLL_MS)

    return () => window.clearInterval(timer)
  }, [activeIndex, isPaused, reduceMotion, scrollToIndex])

  return (
    <section className="overflow-hidden bg-slate-50 py-16 sm:py-20">
      <Container>
        <ScrollReveal variant="fadeUp" className="text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold-soft sm:w-16" aria-hidden />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              What our clients say
            </p>
            <span className="h-px w-12 bg-gold-soft sm:w-16" aria-hidden />
          </div>
          <h2 className="mt-3 text-2xl font-extrabold uppercase text-royal sm:text-3xl">
            Trusted across North America
          </h2>
        </ScrollReveal>

        <div
          className="relative mt-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
        >
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-slate-50 to-transparent sm:w-16"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-slate-50 to-transparent sm:w-16"
            aria-hidden
          />

          <div
            ref={trackRef}
            className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 scroll-smooth"
            aria-label="Client testimonials carousel"
            role="region"
          >
            {TESTIMONIALS.map((item) => (
              <TestimonialCard key={item.name} item={item} />
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {TESTIMONIALS.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => scrollToIndex(index)}
              className={`rounded-full transition-all ${
                index === activeIndex
                  ? 'h-2.5 w-2.5 bg-gold'
                  : 'h-2 w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to testimonial from ${item.name}`}
              aria-current={index === activeIndex ? 'true' : undefined}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
