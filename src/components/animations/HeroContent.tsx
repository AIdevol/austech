import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { staggerContainer, staggerItem } from '@/lib/motion'

type HeroContentProps = {
  children: ReactNode
  className?: string
}

export function HeroContent({ children, className = '' }: HeroContentProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        ...staggerContainer,
        visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function HeroContentItem({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  )
}
