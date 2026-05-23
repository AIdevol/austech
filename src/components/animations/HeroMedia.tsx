import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export type HeroVideoSources = {
  mp4: string
  webm?: string
  poster: string
}

type HeroMediaProps = {
  /** MP4 path or full sources object */
  src: string | HeroVideoSources
  alt: string
  className?: string
  overlayClassName?: string
  /** Poster when `src` is a string MP4 path */
  poster?: string
  kind?: 'image' | 'video'
  objectPosition?: string
  /** Preload strategy for hero video (default auto) */
  preload?: 'auto' | 'metadata' | 'none'
}

function isVideoSrc(src: string) {
  return /\.(mp4|webm|ogg)(\?|$)/i.test(src)
}

function resolveSources(
  src: string | HeroVideoSources,
  poster?: string,
): HeroVideoSources | null {
  if (typeof src === 'object') {
    return poster ? { ...src, poster } : src
  }
  if (!isVideoSrc(src)) return null
  return { mp4: src, poster: poster ?? '/videos/bg-video-poster.jpg' }
}

export function HeroMedia({
  src,
  alt,
  className = '',
  overlayClassName = '',
  poster,
  kind,
  objectPosition = 'object-center',
  preload = 'auto',
}: HeroMediaProps) {
  const prefersReducedMotion = useReducedMotion()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoReady, setVideoReady] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)
  const [videoPreload, setVideoPreload] = useState(preload)

  useEffect(() => {
    if (preload !== 'auto') {
      setVideoPreload(preload)
      return
    }
    const narrow = window.matchMedia('(max-width: 767px)').matches
    setVideoPreload(narrow ? 'metadata' : 'auto')
  }, [preload])

  const sources = resolveSources(src, poster)
  const useVideo = (kind === 'video' || (kind !== 'image' && sources !== null)) && !prefersReducedMotion
  const showVideo = useVideo && sources && !videoFailed
  const posterSrc = sources?.poster ?? poster ?? (typeof src === 'string' ? src : sources?.mp4)

  const mediaClass = `h-full w-full object-cover ${objectPosition} ${className}`

  const tryPlay = useCallback(() => {
    const el = videoRef.current
    if (!el) return
    const playPromise = el.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        /* Autoplay blocked — poster remains visible */
      })
    }
  }, [])

  useEffect(() => {
    if (!showVideo) return
    const el = videoRef.current
    if (!el) return

    if (el.readyState >= 3) {
      setVideoReady(true)
      tryPlay()
    }
  }, [showVideo, tryPlay])

  const onVideoReady = () => {
    setVideoReady(true)
    tryPlay()
  }

  return (
    <div className="absolute inset-0 overflow-hidden bg-navy">
      {/* Poster / fallback — always visible until video fades in */}
      {posterSrc && (
        <img
          src={posterSrc}
          alt=""
          aria-hidden
          fetchPriority="high"
          decoding="async"
          className={`${mediaClass} transition-opacity duration-700 ease-out ${
            showVideo && videoReady ? 'opacity-0' : 'opacity-100'
          }`}
        />
      )}

      {showVideo && sources && (
        <motion.video
          ref={videoRef}
          className={`${mediaClass} absolute inset-0 h-full w-full`}
          poster={sources.poster}
          autoPlay
          muted
          loop
          playsInline
          preload={videoPreload}
          aria-label={alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: videoReady ? 1 : 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          onLoadedData={onVideoReady}
          onCanPlay={onVideoReady}
          onPlaying={onVideoReady}
          onError={() => setVideoFailed(true)}
        >
          {sources.webm && <source src={sources.webm} type="video/webm" />}
          <source src={sources.mp4} type="video/mp4" />
        </motion.video>
      )}

      {!showVideo && posterSrc && typeof src === 'string' && kind === 'image' && (
        <motion.img
          src={posterSrc}
          alt={alt}
          className={`${mediaClass} absolute inset-0`}
          initial={prefersReducedMotion ? false : { scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      )}

      {overlayClassName && (
        <div className={`absolute inset-0 z-[1] ${overlayClassName}`} aria-hidden />
      )}
    </div>
  )
}
