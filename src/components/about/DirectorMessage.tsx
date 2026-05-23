import { useState } from 'react'
import { Quote } from 'lucide-react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Container } from '@/components/ui/Container'
import { ABOUT_IMAGES, DIRECTOR_MESSAGE } from '@/constants/aboutContent'

export function DirectorMessage() {
  const [portraitFailed, setPortraitFailed] = useState(false)
  const [signatureFailed, setSignatureFailed] = useState(false)

  const [lead, ...body] = DIRECTOR_MESSAGE.paragraphs

  return (
    <section
      id="directors-desk"
      aria-labelledby="directors-desk-title"
      className="relative overflow-hidden bg-navy py-16 sm:py-20 lg:py-24"
    >
      <div
        className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-royal/30 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
        aria-hidden
      />

      <Container className="relative z-10">
        <ScrollReveal variant="fadeUp" className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold/60 sm:w-14" aria-hidden />
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
              {DIRECTOR_MESSAGE.eyebrow}
            </p>
            <span className="h-px w-10 bg-gold/60 sm:w-14" aria-hidden />
          </div>
          <h2
            id="directors-desk-title"
            className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[2.65rem]"
          >
            {DIRECTOR_MESSAGE.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.08} className="mt-12 lg:mt-14">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-sm bg-white shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
            <div className="h-1 bg-gradient-to-r from-gold via-gold-soft to-gold-dark" aria-hidden />

            <div className="grid lg:grid-cols-[minmax(0,300px)_1fr] xl:grid-cols-[minmax(0,320px)_1fr]">
              <aside className="relative bg-gradient-to-br from-royal via-navy to-navy-dark px-6 py-10 sm:px-8 lg:px-8 lg:py-12">
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(-45deg, #fff 0, #fff 1px, transparent 1px, transparent 12px)',
                  }}
                  aria-hidden
                />

                <div className="relative mx-auto max-w-[240px] lg:max-w-none">
                  <div className="relative mx-auto aspect-[3/4] max-w-[220px] overflow-hidden rounded-sm border-2 border-gold/80 bg-navy-mid shadow-[0_12px_40px_rgba(0,0,0,0.35)] lg:max-w-none">
                    {!portraitFailed ? (
                      <img
                        src={ABOUT_IMAGES.director.portrait}
                        alt={`${DIRECTOR_MESSAGE.name}, ${DIRECTOR_MESSAGE.role}`}
                        className="h-full w-full object-cover object-top"
                        onError={() => setPortraitFailed(true)}
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-b from-royal/40 to-navy px-4 text-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold/70 bg-white/10 text-lg font-extrabold text-gold">
                          VG
                        </div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-white/70">
                          Director portrait
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 hidden text-left lg:block">
                    <p className="text-lg font-extrabold text-white">{DIRECTOR_MESSAGE.name}</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.15em] text-gold">
                      {DIRECTOR_MESSAGE.role}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-white/75">{DIRECTOR_MESSAGE.company}</p>
                  </div>
                </div>
              </aside>

              <article className="relative px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
                <Quote
                  className="absolute right-6 top-6 h-16 w-16 text-gold/15 sm:right-10 sm:top-8 sm:h-20 sm:w-20"
                  aria-hidden
                />

                <div className="relative max-w-2xl">
                  <p className="border-l-[3px] border-gold pl-5 text-base font-medium leading-relaxed text-royal sm:text-lg">
                    {lead}
                  </p>

                  <div className="mt-6 space-y-4 text-sm leading-[1.75] text-muted sm:text-[0.9375rem]">
                    {body.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="mt-10 border-t border-slate-200/90 pt-8">
                    {!signatureFailed ? (
                      <img
                        src={ABOUT_IMAGES.director.signature}
                        alt={`${DIRECTOR_MESSAGE.name} signature`}
                        className="h-14 w-auto max-w-[220px] object-contain object-left sm:h-16"
                        onError={() => setSignatureFailed(true)}
                      />
                    ) : (
                      <p className="font-[cursive] text-3xl text-royal/90 sm:text-4xl" aria-hidden>
                        {DIRECTOR_MESSAGE.name}
                      </p>
                    )}

                    <div className="mt-4">
                      <p className="text-sm font-extrabold text-royal">{DIRECTOR_MESSAGE.name}</p>
                      <p className="mt-0.5 text-xs font-bold uppercase tracking-[0.12em] text-gold">
                        {DIRECTOR_MESSAGE.role}
                      </p>
                      <p className="mt-1 text-xs text-muted">{DIRECTOR_MESSAGE.company}</p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
