import { useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { GET_IN_TOUCH_MAILTO } from '@/lib/mailto'
import { Button } from '@/components/ui/Button'
import { NAV_LINKS } from '@/constants/navigation'

type MobileNavProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

function isActive(path: string, current: string) {
  if (path === '/') return current === '/'
  return current.startsWith(path)
}

export function MobileNav({ open, onOpenChange }: MobileNavProps) {
  const { pathname } = useLocation()
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    onOpenChange(false)
  }, [pathname, onOpenChange])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <div className="xl:hidden">
      <button
        type="button"
        onClick={() => onOpenChange(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-sm border border-slate-200 text-royal transition-colors hover:border-gold hover:text-gold"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-[70] bg-navy/50 backdrop-blur-[2px]"
              aria-label="Close menu overlay"
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => onOpenChange(false)}
            />
            <motion.nav
              id="mobile-nav-panel"
              className="fixed inset-x-0 top-0 z-[80] flex max-h-[100dvh] flex-col overflow-y-auto bg-white shadow-xl"
              initial={prefersReducedMotion ? false : { opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              aria-label="Mobile"
            >
              <div className="flex items-center justify-between border-b border-slate-100 px-4 py-4">
                <p className="text-xs font-bold uppercase tracking-wider text-royal">Menu</p>
                <button
                  type="button"
                  onClick={() => onOpenChange(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-sm border border-slate-200 text-royal"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <ul className="flex flex-col px-4 py-2">
                {NAV_LINKS.map((link) => {
                  const active = isActive(link.path, pathname)
                  return (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className={`block border-b border-slate-100 py-4 text-sm font-bold uppercase tracking-wider transition-colors ${
                          active ? 'text-gold' : 'text-royal hover:text-gold'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>

              <div className="mt-auto border-t border-slate-100 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <Button
                  href={GET_IN_TOUCH_MAILTO}
                  variant="primary"
                  showArrow
                  className="w-full justify-center py-3.5"
                >
                  Get in touch
                </Button>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
