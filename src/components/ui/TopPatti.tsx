type TopPattiProps = {
  className?: string
}

/** Thin gold accent strip for top edges (mockup "patti"). */
export function TopPatti({ className = '' }: TopPattiProps) {
  return (
    <span
      className={`pointer-events-none absolute top-0 left-0 right-0 z-10 h-0.5 bg-gold sm:h-[3px] ${className}`}
      aria-hidden
    />
  )
}
