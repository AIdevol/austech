import { motion, useReducedMotion } from 'framer-motion'

type HeroMediaProps = {
  src: string
  alt: string
  className?: string
  overlayClassName?: string
  poster?: string
  kind?: 'image' | 'video'
  objectPosition?: string
}

function isVideoSrc(src: string) {
  return /\.(mp4|webm|ogg)(\?|$)/i.test(src)
}

export function HeroMedia({
  src,
  alt,
  className = '',
  overlayClassName = '',
  poster,
  kind,
  objectPosition = 'object-center',
}: HeroMediaProps) {
  const prefersReducedMotion = useReducedMotion()
  const useVideo = kind === 'video' || (kind !== 'image' && isVideoSrc(src))
  const showVideo = useVideo && !prefersReducedMotion

  const mediaClass = `h-full w-full object-cover ${objectPosition} ${className}`

  return (
    <div className="absolute inset-0 overflow-hidden">
      {showVideo ? (
        <video
          src={src}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          aria-label={alt}
          className={mediaClass}
        />
      ) : (
        <motion.img
          src={poster ?? src}
          alt={alt}
          className={mediaClass}
          initial={prefersReducedMotion ? false : { scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
      {overlayClassName && (
        <div className={`absolute inset-0 ${overlayClassName}`} aria-hidden />
      )}
    </div>
  )
}
