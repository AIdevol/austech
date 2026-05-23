import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { GET_IN_TOUCH_MAILTO } from '@/lib/mailto'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { MobileNav } from '@/components/layout/MobileNav'
import { Logo } from '@/components/ui/Logo'
import { NAV_LINKS } from '@/constants/navigation'
import { slideDown } from '@/lib/motion'

function isActive(path: string, current: string) {
  if (path === '/') return current === '/'
  if (path.startsWith('/#')) return false
  return current.startsWith(path)
}

export function Header() {
  const { pathname } = useLocation()
  const prefersReducedMotion = useReducedMotion()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-slate-100 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
      initial={prefersReducedMotion ? false : 'hidden'}
      animate="visible"
      variants={slideDown}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Container className="flex h-[64px] items-center justify-between gap-2 sm:h-[72px] sm:gap-4 lg:h-[84px]">
        <Logo size="header" className="min-w-0 max-w-[46%] shrink" />

        <nav
          className="hidden items-center justify-center gap-7 xl:flex"
          aria-label="Main"
        >
          {NAV_LINKS.map((link) => {
            const active = isActive(link.path, pathname)
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-[11px] font-bold uppercase tracking-wider transition-colors hover:text-gold ${
                  active ? 'text-gold' : 'text-royal'
                }`}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-gold"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Button
            href={GET_IN_TOUCH_MAILTO}
            variant="primary"
            showArrow
            className="hidden px-5 py-2.5 text-[11px] xl:inline-flex"
          >
            Get in touch
          </Button>
          <MobileNav open={mobileOpen} onOpenChange={setMobileOpen} />
        </div>
      </Container>
    </motion.header>
  )
}
