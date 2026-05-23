export type NavLinkItem = {
  label: string
  path: string
}

export type FeatureItem = {
  label: string
  icon: 'team' | 'support' | 'secure' | 'globe'
}

export type Stat = {
  value: string
  label: string
  icon: 'professionals' | 'loads' | 'clients' | 'satisfaction' | 'support'
}

export type WhyStat = {
  value: string
  label: string
  icon: 'professionals' | 'loads' | 'satisfaction'
}

export type Testimonial = {
  quote: string
  name: string
  role: string
  avatar: string
  initials: string
}

export type AboutHeroStat = {
  value: string
  label: string
  icon: 'years' | 'loads' | 'clients' | 'countries' | 'support' | 'satisfaction'
}

export type ValueItem = {
  title: string
  description: string
  icon: 'integrity' | 'partnership' | 'excellence' | 'reliability' | 'growth'
}

export type FooterLink = {
  label: string
  href: string
}

export type ServiceItem = {
  title: string
  description: string
  icon: 'brokerage' | 'dispatch' | 'otr' | 'drayage' | 'night' | 'support'
}

export type ServiceDetail = ServiceItem & {
  slug: string
  tagline: string
  overview: string
  image: string
  features: readonly string[]
  benefits: readonly string[]
}
