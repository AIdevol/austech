import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from '@/components/icons/Icons'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { FOOTER_ABOUT, SITE } from '@/constants/content'
import { FOOTER_QUICK_LINKS, FOOTER_SERVICE_LINKS } from '@/constants/navigation'

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-widest text-gold">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <Container className="grid gap-8 py-10 sm:grid-cols-2 sm:gap-10 sm:py-14 lg:grid-cols-4">
        <div>
          <Logo variant="footer" size="footer" />
          <p className="text-sm leading-relaxed text-white/65">{FOOTER_ABOUT}</p>
          <div className="mt-5 flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 hover:border-gold hover:text-gold"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 hover:border-gold hover:text-gold"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 hover:border-gold hover:text-gold"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <FooterColumn title="Quick links">
          <ul className="space-y-2.5">
            {FOOTER_QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="text-sm text-white/65 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </FooterColumn>

        <FooterColumn title="Our services">
          <ul className="space-y-2.5">
            {FOOTER_SERVICE_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="text-sm text-white/65 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </FooterColumn>

        <FooterColumn title="Contact information">
          <ul className="space-y-4">
            <li className="flex gap-3">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span className="text-sm text-white/65">{SITE.address}</span>
            </li>
            <li className="flex gap-3">
              <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${SITE.email}`} className="text-sm text-white/65 hover:text-gold">
                {SITE.email}
              </a>
            </li>
            <li className="flex gap-3">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <div className="text-sm text-white/65">
                <p>
                  <span className="text-gold">IND:</span> {SITE.phoneInd}
                </p>
                <p className="mt-1">
                  <span className="text-gold">USA:</span> {SITE.phoneUsa}
                </p>
              </div>
            </li>
          </ul>
        </FooterColumn>
      </Container>

      <div className="border-t border-white/10 bg-black/30">
        <Container className="py-5 text-center">
          <p className="text-xs text-white/45">
            © 2024 {SITE.legalName}. All Rights Reserved.
          </p>
        </Container>
      </div>
    </footer>
  )
}
