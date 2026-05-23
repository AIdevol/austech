import { useCallback, useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { GalleryItem } from '@/constants/galleryContent'

type GalleryLightboxProps = {
  items: GalleryItem[]
  activeIndex: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

export function GalleryLightbox({
  items,
  activeIndex,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const reduceMotion = useReducedMotion()
  const isOpen = activeIndex !== null
  const item = isOpen ? items[activeIndex] : null

  const goPrev = useCallback(() => {
    if (activeIndex === null) return
    onNavigate(activeIndex === 0 ? items.length - 1 : activeIndex - 1)
  }, [activeIndex, items.length, onNavigate])

  const goNext = useCallback(() => {
    if (activeIndex === null) return
    onNavigate(activeIndex === items.length - 1 ? 0 : activeIndex + 1)
  }, [activeIndex, items.length, onNavigate])

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') goPrev()
      if (event.key === 'ArrowRight') goNext()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onClose, goPrev, goNext])

  return (
    <AnimatePresence>
      {isOpen && item && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-navy/95 backdrop-blur-sm"
            aria-label="Close gallery preview"
            onClick={onClose}
          />

          <motion.div
            className="relative z-10 flex w-full max-w-6xl flex-col items-center"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
          >
            <div className="mb-4 flex w-full items-center justify-between gap-4 px-1">
              <p className="text-sm font-semibold uppercase tracking-wider text-gold sm:text-base">
                {item.title}
              </p>
              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:border-gold hover:bg-gold/20 hover:text-gold"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <motion.img
              key={item.src}
              src={item.src}
              alt={item.alt}
              className="max-h-[min(75vh,720px)] w-auto max-w-full rounded-lg object-contain shadow-2xl ring-1 ring-white/10"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reduceMotion ? 0 : 0.2 }}
              draggable={false}
            />

            <p className="mt-3 text-xs text-white/60">
              {activeIndex! + 1} of {items.length}
            </p>
          </motion.div>

          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-navy/80 text-white backdrop-blur-sm transition-colors hover:border-gold hover:text-gold sm:left-6 sm:h-12 sm:w-12"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-navy/80 text-white backdrop-blur-sm transition-colors hover:border-gold hover:text-gold sm:right-6 sm:h-12 sm:w-12"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
