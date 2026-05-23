import { motion, useReducedMotion } from 'framer-motion'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
} from '@/components/icons/Icons'
import { Container } from '@/components/ui/Container'
import { SITE } from '@/constants/content'
import { fadeIn } from '@/lib/motion'

function Flag({ emoji, label }: { emoji: string; label: string }) {
  return (
    <span className="flex items-center gap-1" aria-label={label}>
      <span className="text-sm leading-none">{emoji}</span>
    </span>
  )
}

export function TopBar() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className="bg-navy text-[11px] text-white"
      initial={prefersReducedMotion ? false : 'hidden'}
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.4 }}
    >
      <Container className="flex min-h-10 flex-wrap items-center justify-between gap-x-3 gap-y-2 py-2 sm:h-10 sm:flex-nowrap sm:gap-4 sm:py-0">
        <div className="flex flex-wrap items-center gap-2.5 text-[10px] sm:gap-5 sm:text-[11px]">
          <a
            href={`tel:${SITE.phoneInd.replace(/\s/g, '')}`}
            className="flex items-center gap-1.5 transition-colors hover:text-gold"
          >
            <Flag emoji="🇮🇳" label="India" />
            <PhoneIcon className="h-3 w-3 opacity-80" />
            <span>{SITE.phoneInd}</span>
          </a>
          <a
            href={`tel:${SITE.phoneUsa.replace(/[\s()-]/g, '')}`}
            className="flex items-center gap-1.5 transition-colors hover:text-gold"
          >
            <Flag emoji="🇺🇸" label="USA" />
            <PhoneIcon className="h-3 w-3 opacity-80" />
            <span className="sm:hidden">{SITE.phoneUsa.replace('+1 ', '')}</span>
            <span className="hidden sm:inline">{SITE.phoneUsa}</span>
          </a>
        </div>

        <a
          href={`mailto:${SITE.email}`}
          className="hidden items-center gap-1.5 transition-colors hover:text-gold md:flex"
        >
          <MailIcon className="h-3 w-3 opacity-80" />
          <span>{SITE.email}</span>
        </a>

        <div className="flex items-center gap-3">
          <span className="hidden text-white/70 sm:inline">Follow Us:</span>
          <a href="#" aria-label="Facebook" className="transition-colors hover:text-gold">
            <FacebookIcon className="h-3.5 w-3.5" />
          </a>
          <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-gold">
            <LinkedInIcon className="h-3.5 w-3.5" />
          </a>
          <a href="#" aria-label="Instagram" className="transition-colors hover:text-gold">
            <InstagramIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </Container>
    </motion.div>
  )
}
