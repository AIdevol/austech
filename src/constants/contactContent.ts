import type { LucideIcon } from 'lucide-react'
import { Clock, Globe2, Handshake, Headphones, Mail, Phone, ShieldCheck, Users } from 'lucide-react'
import { SITE } from '@/constants/content'

export const CONTACT_HERO = {
  breadcrumb: 'Get in touch',
  eyebrow: 'Reach out today',
  title: 'Connect with our logistics team',
  subtitle: "Let's connect & grow together",
  description:
    "Have questions or need reliable trucking support? We're here to help! Reach out to Austech Business Solutions and our team will get back to you as soon as possible.",
} as const

export const CONTACT_MAIN = {
  eyebrow: 'Send a message',
  title: 'Tell us how we can support your operations',
  description:
    'Share your dispatch, tracking, or back-office requirements — our team responds quickly for clients across USA & Canada.',
} as const

export const CONTACT_CHANNELS: {
  title: string
  detail: string
  href: string
  icon: LucideIcon
  external?: boolean
}[] = [
  {
    title: 'Call India',
    detail: SITE.phoneInd,
    href: `tel:${SITE.phoneInd.replace(/\s/g, '')}`,
    icon: Phone,
  },
  {
    title: 'Call USA',
    detail: SITE.phoneUsa,
    href: `tel:${SITE.phoneUsa.replace(/[\s()-]/g, '')}`,
    icon: Phone,
  },
  {
    title: 'Email us',
    detail: SITE.email,
    href: `mailto:${SITE.email}`,
    icon: Mail,
  },
  {
    title: '24/7 support',
    detail: 'Live operations assistance',
    href: `tel:${SITE.phoneUsa.replace(/[\s()-]/g, '')}`,
    icon: Headphones,
  },
]

export const CONTACT_WHY_ITEMS: {
  title: string
  description: string
  icon: LucideIcon
}[] = [
  {
    title: 'Expert team',
    description: 'Skilled professionals with years of experience in trucking operations.',
    icon: Users,
  },
  {
    title: 'Reliable support',
    description: 'We provide consistent, dependable and 24/7 support you can trust.',
    icon: ShieldCheck,
  },
  {
    title: 'Quick response',
    description: 'We value your time and ensure quick responses to all inquiries.',
    icon: Clock,
  },
  {
    title: 'Customer focused',
    description: 'Your success is our priority. We work as your true back-office partner.',
    icon: Handshake,
  },
  {
    title: 'USA & Canada expertise',
    description: 'Specialized support for trucking companies across USA & Canada.',
    icon: Globe2,
  },
]

export const CONTACT_CTA = {
  title: 'Ready to optimize your operations?',
  description:
    'Partner with Austech Business Solutions and experience the difference of a dedicated trucking support team.',
} as const
