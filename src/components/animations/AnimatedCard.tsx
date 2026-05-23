import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type AnimatedCardProps = {
  children: ReactNode
  className?: string
}

export function AnimatedCard({ children, className = '' }: AnimatedCardProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      whileTap={{ scale: 0.99 }}
    >
      {children}
    </motion.div>
  )
}
