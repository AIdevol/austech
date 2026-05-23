import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Expand, Images } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { TopPatti } from '@/components/ui/TopPatti'
import { GalleryLightbox } from '@/components/gallery/GalleryLightbox'
import { useGalleryItems, type GalleryItem } from '@/hooks/useGalleryItems'

export function GalleryGrid() {
  const reduceMotion = useReducedMotion()
  const { items, markBroken } = useGalleryItems()
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const openLightbox = (item: GalleryItem) => {
    const index = items.findIndex((entry) => entry.id === item.id)
    setActiveIndex(index >= 0 ? index : 0)
  }

  return (
    <>
      <section className="relative bg-white py-14 sm:py-16 lg:py-20">
        <TopPatti />

        <Container>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: reduceMotion ? 0 : 0.45 }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="mx-auto mb-3 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gold-soft" aria-hidden />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-royal">
                Photo gallery
              </p>
              <span className="h-px w-10 bg-gold-soft" aria-hidden />
            </div>

            {/* <h2 className="text-2xl font-extrabold uppercase text-navy sm:text-3xl">
              Moments from the road
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Tap any image to view it full size. Hover on desktop to preview the title.
            </p> */}
          </motion.div>
{/* 
          <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
            {GALLERY_CATEGORIES.map((entry) => {
              const isActive = category === entry.id
              return (
                <button
                  key={entry.id}
                  type="button"
                  onClick={() => handleCategoryChange(entry.id)}
                  className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors sm:px-5 sm:text-[13px] ${
                    isActive
                      ? 'bg-royal text-white shadow-md'
                      : 'bg-slate-100 text-navy hover:bg-royal/10'
                  }`}
                >
                  {entry.label}
                </button>
              )
            })}
          </div> */}

          {items.length === 0 ? (
            <div className="mt-14 flex flex-col items-center gap-3 text-slate-500">
              <Images className="h-10 w-10 text-royal/40" aria-hidden />
              <p className="text-sm">No images in the gallery folder yet.</p>
              <p className="max-w-md text-center text-xs text-slate-400">
                Add .jpg, .png, or .webp files to{' '}
                <code className="rounded bg-slate-100 px-1.5 py-0.5">public/assets/gallery</code>
              </p>
            </div>
          ) : (
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {items.map((item, index) => (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => openLightbox(item)}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.35,
                    delay: reduceMotion ? 0 : Math.min(index * 0.04, 0.32),
                  }}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 text-left shadow-sm ring-1 ring-slate-200/80 transition-shadow hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal"
                  aria-label={`View ${item.title}`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    onError={() => markBroken(item.id)}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 group-active:scale-105"
                  />

                  <span
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                    aria-hidden
                  />

                  <span className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 bg-navy/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 sm:group-active:opacity-100">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/60 bg-navy/70 text-gold">
                      <Expand className="h-5 w-5" />
                    </span>
                    <span className="px-4 text-center text-xs font-bold uppercase tracking-wider text-white">
                      View image
                    </span>
                  </span>

                  <span className="pointer-events-none absolute bottom-0 left-0 right-0 translate-y-full p-3 transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0">
                    <span className="block truncate text-xs font-semibold uppercase tracking-wide text-white">
                      {item.title}
                    </span>
                  </span>
                </motion.button>
              ))}
            </div>
          )}
        </Container>
      </section>

      <GalleryLightbox
        items={items}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </>
  )
}
