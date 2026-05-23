import type { AboutHeroStat, ValueItem } from '@/types'

export const ABOUT_IMAGES = {
  hero: '/img/truck.png',
  office: '/img/truck.png',
  whyChooseTruck: '/assets/img/why-choose-truck.png',
  team: {
    dispatchers: '/assets/img/expericend_despatcher.png',
    customerSupport: '/assets/img/dedicated_customer_support.png',
    freightBrokers: '/assets/img/Real_time_tracking.png',
    operations: '/assets/img/24:7_operations_support.png',
  },
} as const

export const ABOUT_HERO = {
  breadcrumb: 'About us',
  title: 'Your trusted back-office partner',
  tagline: 'Driving operations. Delivering success.',
  paragraphs: [
    'Austech Business Solutions is a leading truckload and logistics back-office partner — delivering excellence across USA & Canada from India with experienced professionals, advanced technology, and unwavering commitment to your success.',
    'We help trucking companies streamline dispatch, freight brokerage, and customer support so you can focus on growing your fleet while we handle the operations behind the scenes.',
  ],
} as const

export const ABOUT_STORY = {
  eyebrow: 'Our story',
  title: 'Built in India. Focused on Your Growth in North America.',
  paragraphs: [
    'Founded with a vision to bridge logistics excellence between India and North America, Austech Business Solutions has grown into a trusted partner for businesses seeking reliable truckload, dispatch, and freight brokerage services.',
    'Our team of skilled professionals combines deep industry expertise with cutting-edge technology to deliver cost-effective, transparent, and dependable logistics solutions — helping your business thrive across borders.',
  ],
} as const

export const ABOUT_VALUES: ValueItem[] = [
  {
    title: 'Integrity',
    description:
      'We operate with honesty and transparency in every transaction, building trust with clients and carriers alike.',
    icon: 'integrity',
  },
  {
    title: 'Partnership',
    description:
      'We view every client relationship as a long-term partnership, invested in your operational success.',
    icon: 'partnership',
  },
  {
    title: 'Excellence',
    description:
      'We strive for the highest standards in service delivery, continuously improving our processes and outcomes.',
    icon: 'excellence',
  },
  {
    title: 'Reliability',
    description:
      'We deliver consistent, dependable logistics support you can count on — day or night, load after load.',
    icon: 'reliability',
  },
  {
    title: 'Growth',
    description:
      'We help your business scale with flexible solutions that adapt to your evolving freight and dispatch needs.',
    icon: 'growth',
  },
]

export const ABOUT_WHY = {
  eyebrow: 'Why choose Austech?',
  title: 'Your Back-Office Partner You Can Rely On',
  points: [
    'Skilled & Experienced Professionals',
    'Advanced Tools & Real-time Tracking',
    'Cost-effective & Scalable Solutions',
    '24/7 Availability & Quick Response',
    'Strict Confidentiality & Data Security',
    'Deep Industry Knowledge & Best Practices',
  ],
} as const

export const ABOUT_WHY_STATS: AboutHeroStat[] = [
  { value: '50+', label: 'Expert Professionals', icon: 'years' },
  { value: '2000+', label: 'Loads Dispatched', icon: 'loads' },
  { value: '150+', label: 'Happy Clients', icon: 'clients' },
  { value: '98%', label: 'Client Satisfaction', icon: 'satisfaction' },
  { value: '24/7', label: 'Support Available', icon: 'support' },
]

export const ABOUT_TEAM = {
  eyebrow: 'Our team',
  title: 'Strength behind your success',
  description:
    'Our team of dispatchers, load planners and support specialists bring years of experience in the trucking industry. We combine technology, skill and dedication to provide seamless support that helps your business grow.',
  members: [
    {
      title: 'Experienced dispatchers',
      image: ABOUT_IMAGES.team.dispatchers,
      alt: 'Experienced dispatcher with professional headset',
    },
    {
      title: 'Dedicated customer support',
      image: ABOUT_IMAGES.team.customerSupport,
      alt: 'Dedicated customer support specialist with headset',
    },
    {
      title: 'Real-time tracking & monitoring',
      image: ABOUT_IMAGES.team.freightBrokers,
      alt: 'Team member monitoring real-time tracking on screen',
    },
    {
      title: '24/7 operations support',
      image: ABOUT_IMAGES.team.operations,
      alt: '24/7 operations support specialist with headset',
    },
  ],
} as const

export const ABOUT_CTA = {
  title: 'Ready to optimize your operations?',
  description:
    'Partner with Austech Business Solutions and experience the difference of a dedicated trucking support team.',
} as const
