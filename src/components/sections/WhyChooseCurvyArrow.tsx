import { motion, useReducedMotion } from 'framer-motion'

type WhyChooseCurvyArrowProps = {
  className?: string
}

/** Decorative curved arrow sweeping across the Why Choose section. */
export function WhyChooseCurvyArrow({ className = '' }: WhyChooseCurvyArrowProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.svg
      className={`pointer-events-none text-gold/25 ${className}`}
      viewBox="0 0 720 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      initial={reduceMotion ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.path
        d="M 48 340 C 140 120, 260 80, 380 150 S 580 100, 640 88"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="10 14"
        initial={reduceMotion ? false : { pathLength: 0, opacity: 0.4 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.path
        d="M 628 78 L 668 62 M 628 78 L 648 108"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.4 }}
      />
      <path
        d="M 120 280 Q 200 200 300 220"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.35"
      />
    </motion.svg>
  )
}
