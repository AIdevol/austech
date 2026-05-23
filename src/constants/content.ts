import type { FeatureItem, Stat, Testimonial, WhyStat } from '@/types'

export const IMAGES = {
  truck: '/img/truck.png',
  logo: '/logo.png',
  logoTrans: '/assets/img/logo_trans.png',
} as const

export function galleryImage(file: string) {
  return `/assets/gallery/${encodeURIComponent(file)}`
}

/** Home “Why Choose” gallery — fleet photos from the gallery folder. */
export const WHY_CHOOSE_IMAGES = {
  main: galleryImage('pexels-ronivon-prado-34161480-12944719.jpg'),
  accentTop: galleryImage('pexels-samuel-wolfl-628277-1427541.jpg'),
  accentBottom: galleryImage('pexels-shuaizhi-tian-485596-20882743.jpg'),
} as const

/** Optimized hero background (run `npm run optimize:hero-video` to regenerate). */
export const VIDEOS = {
  hero: {
    mp4: '/videos/bg-video.mp4',
    webm: '/videos/bg-video.webm',
    poster: '/videos/bg-video-poster.jpg',
  },
} as const

export const SITE = {
  name: 'AUSTECH',
  legalName: 'Austech Business Solutions Private Limited',
  tagline: 'Business Solutions Pvt. Ltd.',
  email: 'info@austechbusiness.com',
  phoneInd: '+91 985-387-9000',
  phoneUsa: '+1 916-237-8785',
  address:
    'Office # 001, TDS Tower, E-193, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160055, India',
  businessHours:
    'Monday – Saturday, 9:00 AM – 8:00 PM IST (We provide 24/7 support for our clients in USA & Canada)',
  mapsUrl:
    'https://www.google.com/maps/search/TDS+Tower+Sector+74+Sahibzada+Ajit+Singh+Nagar',
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.2!2d76.7!3d30.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed5be7e8c8c1%3A0x0!2sTDS%20Tower%2C%20Sector%2074%2C%20Sahibzada%20Ajit%20Singh%20Nagar!5e0!3m2!1sen!2sin!4v1',
} as const

export const HERO = {
  eyebrow: 'Your trusted partner in',
  title: 'Truckload solutions',
  subtitle: 'Delivering excellence across USA & Canada from India',
  description:
    'We provide comprehensive 3PL freight brokerage, dispatch services, and OTR solutions — connecting shippers and carriers with reliability, transparency, and 24/7 support across North America.',
  secondaryCta: 'Learn more',
} as const

export const SERVICES_SECTION = {
  eyebrow: 'Our services',
  title: 'Complete truckload solutions',
  description:
    'From freight brokerage to round-the-clock dispatch, Austech delivers end-to-end logistics support tailored for trucking companies operating across USA & Canada.',
} as const

export const SERVICES = [
  {
    title: '3PL (Freight Brokerage)',
    description:
      'Connect with reliable carriers and competitive rates through our expert freight brokerage network across North America.',
    icon: 'brokerage',
  },
  {
    title: 'Dispatch Services',
    description:
      'Professional dispatch support to keep your fleet moving efficiently with optimized routes and load management.',
    icon: 'dispatch',
  },
  {
    title: 'OTR Services',
    description:
      'Over-the-road logistics solutions ensuring timely deliveries and seamless operations for long-haul trucking.',
    icon: 'otr',
  },
  {
    title: 'Drayage Services',
    description:
      'Port and intermodal drayage services connecting your cargo from ports to warehouses with precision and care.',
    icon: 'drayage',
  },
  {
    title: 'Night Dispatch',
    description:
      'After-hours dispatch coverage so your operations never stop — dedicated night shift support for your fleet.',
    icon: 'night',
  },
  {
    title: 'Customer Support',
    description:
      '24/7 customer support team ready to assist with inquiries, tracking updates, and operational coordination.',
    icon: 'support',
  },
] as const satisfies readonly import('@/types').ServiceItem[]

export const HOME_ABOUT = {
  eyebrow: 'Who we are',
  title: 'Driving success from India to USA & Canada',
  cta: 'Discover Austech',
  paragraphs: [
    'Austech Business Solutions is a leading logistics partner headquartered in India, specializing in truckload solutions for the North American market. With a skilled team and advanced technology, we bridge the gap between shippers and carriers across USA & Canada.',
    'Our mission is to deliver reliable, cost-effective, and transparent logistics services that empower trucking companies to grow their business while we handle the back-office operations with excellence.',
  ],
} as const

export const HERO_FEATURES: FeatureItem[] = [
  { label: 'Experienced Team', icon: 'team' },
  { label: '24/7 Support', icon: 'support' },
  { label: 'Reliable & Secure', icon: 'secure' },
  { label: 'Serving USA & Canada', icon: 'globe' },
]

export const WHY_CHOOSE = {
  eyebrow: 'The Austech advantage',
  title: 'Your success is our commitment',
  description:
    'With years of experience in the logistics industry, Austech delivers reliable truckload solutions backed by a dedicated team, cutting-edge technology, and unwavering commitment to your business growth.',
  points: [
    'Skilled & Experienced Professionals',
    'Advanced Tools & Real-time Tracking',
    'Cost-effective & Reliable Solutions',
    '24/7 Availability & Quick Response',
    'Strict Confidentiality & Data Security',
  ],
  stats: [
    { value: '50+', label: 'Expert Professionals', icon: 'professionals' },
    { value: '2000+', label: 'Loads Dispatched', icon: 'loads' },
    { value: '98%', label: 'Client Satisfaction', icon: 'satisfaction' },
  ] satisfies WhyStat[],
}

export const STATS: Stat[] = [
  { value: '50+', label: 'Expert Professionals', icon: 'professionals' },
  { value: '2000+', label: 'Loads Dispatched', icon: 'loads' },
  { value: '150+', label: 'Happy Clients', icon: 'clients' },
  { value: '98%', label: 'Client Satisfaction', icon: 'satisfaction' },
  { value: '24/7', label: 'Support Available', icon: 'support' },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Austech has been our go-to logistics partner for over two years. Their dispatch team is responsive, rates are competitive, and deliveries are always on time.',
    name: 'Michael T.',
    role: 'Fleet Owner, USA',
    initials: 'MT',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    quote:
      'The cross-border logistics support from Austech made our Canada expansion seamless. Professional team with excellent communication throughout.',
    name: 'Sarah L.',
    role: 'Supply Chain Director, Canada',
    initials: 'SL',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    quote:
      'Outstanding 3PL brokerage services. Austech consistently finds reliable carriers and keeps our supply chain running smoothly across North America.',
    name: 'James R.',
    role: 'CEO, Thompson Logistics',
    initials: 'JR',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    quote:
      'Their night dispatch team saved us more than once when loads needed urgent rerouting. Reliable, calm under pressure, and always professional.',
    name: 'David K.',
    role: 'Fleet Manager, Texas',
    initials: 'DK',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
  },
  {
    quote:
      'We scaled our back-office from India with Austech and cut coordination delays significantly. Tracking updates reach our clients faster than before.',
    name: 'Priya M.',
    role: 'Operations Head, Punjab',
    initials: 'PM',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    quote:
      'Drayage coordination used to be our bottleneck. Austech handles port appointments and container status so our team can focus on growth.',
    name: 'Robert C.',
    role: 'Carrier Relations, USA',
    initials: 'RC',
    avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
  },
  {
    quote:
      'From rate confirmations to POD follow-ups, their customer support represents our brand well. Our shippers notice the difference.',
    name: 'Elena V.',
    role: 'Logistics Coordinator, Canada',
    initials: 'EV',
    avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
  },
  {
    quote:
      'As an owner-operator, I need dispatch that answers at odd hours. Austech keeps my truck loaded and my paperwork clean every week.',
    name: 'Marcus W.',
    role: 'Owner-Operator, USA',
    initials: 'MW',
    avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
  },
]

export const FOOTER_ABOUT =
  'Delivering Excellence Across USA & Canada From India — your trusted partner in truckload logistics and freight solutions.'
