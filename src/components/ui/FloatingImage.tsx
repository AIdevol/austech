import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type FloatingImageProps = {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  floatY?: number
  floatDuration?: number
  delay?: number
  children?: ReactNode
}

export function FloatingImage({
  src,
  alt,
  className = '',
  imgClassName = 'h-full w-full object-cover',
  floatY = 10,
  floatDuration = 5,
  delay = 0,
  children,
}: FloatingImageProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={`relative ${className}`}
      animate={reduceMotion ? undefined : { y: [0, -floatY, 0] }}
      transition={
        reduceMotion
          ? undefined
          : {
              duration: floatDuration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay,
            }
      }
    >
      <img src={src} alt={alt} className={imgClassName} loading="lazy" />
      {children}
    </motion.div>
  )
}
