import type { NavLinkItem } from '@/types'
import { SERVICE_DETAILS } from '@/constants/servicesContent'

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'HOME', path: '/' },
  { label: 'ABOUT US', path: '/about' },
  { label: 'SERVICES', path: '/services' },
  { label: 'GALLERY', path: '/gallery' },
  { label: 'CONTACT US', path: '/contact' },
]

export const FOOTER_QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact Us', href: '/contact' },
]

export const FOOTER_SERVICE_LINKS = SERVICE_DETAILS.map((service) => ({
  label: service.title,
  href: `/services#${service.slug}`,
}))
