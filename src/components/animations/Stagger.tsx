import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { defaultViewport, staggerContainer, staggerItem } from '@/lib/motion'

type StaggerGroupProps = {
  children: ReactNode
  className?: string
  stagger?: number
}

export function StaggerGroup({
  children,
  className = '',
  stagger = 0.1,
}: StaggerGroupProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={{
        ...staggerContainer,
        visible: {
          transition: { staggerChildren: stagger, delayChildren: 0.05 },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

type StaggerItemProps = {
  children: ReactNode
  className?: string
}

export function StaggerItem({ children, className = '' }: StaggerItemProps) {
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
