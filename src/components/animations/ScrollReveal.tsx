import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import {
  defaultTransition,
  defaultViewport,
  fadeIn,
  fadeLeft,
  fadeRight,
  fadeUp,
  scaleIn,
} from '@/lib/motion'

type AnimationVariant = 'fadeUp' | 'fadeIn' | 'fadeLeft' | 'fadeRight' | 'scaleIn'

const variantsMap: Record<AnimationVariant, Variants> = {
  fadeUp,
  fadeIn,
  fadeLeft,
  fadeRight,
  scaleIn,
}

const motionTags = {
  div: motion.div,
  section: motion.section,
  li: motion.li,
  article: motion.article,
} as const

type ScrollRevealProps = {
  children: ReactNode
  variant?: AnimationVariant
  delay?: number
  className?: string
  as?: keyof typeof motionTags
}

export function ScrollReveal({
  children,
  variant = 'fadeUp',
  delay = 0,
  className = '',
  as = 'div',
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion()
  const Component = motionTags[as]

  if (prefersReducedMotion) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={variantsMap[variant]}
      transition={{ ...defaultTransition, delay }}
    >
      {children}
    </Component>
  )
}
