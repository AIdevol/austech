import { galleryImage } from '@/constants/content'
import type { ServiceDetail } from '@/types'

export const SERVICES_HERO = {
  breadcrumb: 'Our services',
  eyebrow: 'What we offer',
  title: 'Complete Logistic Solutions',
  subtitle: 'End-to-end logistics support for USA & Canada',
  description:
    'From 3PL freight brokerage to round-the-clock dispatch and Customer Support / BPO Services, Austech delivers reliable back-office operations so your fleet stays moving across North America.',
} as const

export const SERVICES_INTRO = {
  eyebrow: 'Built for trucking operations',
  title: 'Back-office support that scales with your fleet',
  description:
    'We partner with carriers, brokers, and fleet owners to handle dispatch, load coordination, tracking, and customer communication — powered by experienced professionals and modern logistics tools from India.',
} as const

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: 'freight-brokerage',
    title: '3PL (Freight Brokerage)',
    tagline: 'Reliable carriers. Competitive rates.',
    description:
      'Connect with reliable carriers and competitive rates through our expert freight brokerage network across North America.',
    icon: 'brokerage',
    image: galleryImage('pexels-droneafrica-36771191.jpg'),
    overview:
      'Our 3PL freight brokerage team connects shippers with vetted carriers across USA & Canada. We manage rate negotiations, load booking, documentation, and carrier compliance so you can focus on growing your business.',
    features: [
      'Carrier sourcing & vetting across North America',
      'Rate negotiation and load booking',
      'Documentation and compliance support',
      'Lane analysis and market insights',
    ],
    benefits: [
      'Reduce empty miles and improve margins',
      'Access a wider carrier network',
      'Faster load coverage with expert brokers',
    ],
  },
  {
    slug: 'dispatch-services',
    title: 'Dispatch Services',
    tagline: 'Keep every truck moving efficiently.',
    description:
      'Professional dispatch support to keep your fleet moving efficiently with optimized routes and load management.',
    icon: 'dispatch',
    image: galleryImage('pexels-kayco-27027176.jpg'),
    overview:
      'Our dispatch professionals manage load assignments, driver communication, route planning, and real-time updates. We act as an extension of your operations team — available when your fleet needs support.',
    features: [
      'Load assignment and driver coordination',
      'Route optimization and trip planning',
      'Real-time status updates',
      'Pickup and delivery scheduling',
    ],
    benefits: [
      'Higher fleet utilization',
      'Reduced downtime between loads',
      'Consistent communication with drivers',
    ],
  },
  {
    slug: 'otr-services',
    title: 'OTR Services',
    tagline: 'Long-haul logistics without the overhead.',
    description:
      'Over-the-road logistics solutions ensuring timely deliveries and seamless operations for long-haul trucking.',
    icon: 'otr',
    image: galleryImage('pexels-ronivon-prado-34161480-12944719.jpg'),
    overview:
      'We support over-the-road operations with dedicated load planning, tracking, and coordination for long-haul freight. Our team ensures your OTR loads move smoothly from pickup to final delivery.',
    features: [
      'Long-haul load planning and monitoring',
      'Cross-state and cross-border coordination',
      'ETA management and delay resolution',
      'Driver and fleet performance tracking',
    ],
    benefits: [
      'On-time delivery across long lanes',
      'Proactive issue resolution on the road',
      'Transparent load visibility end-to-end',
    ],
  },
  {
    slug: 'drayage-services',
    title: 'Drayage Services',
    tagline: 'Port-to-warehouse precision.',
    description:
      'Port and intermodal drayage services connecting your cargo from ports to warehouses with precision and care.',
    icon: 'drayage',
    image: galleryImage('pexels-tiger-lily-4487445.jpg'),
    overview:
      'Our drayage support covers port pickups, intermodal transfers, and warehouse deliveries. We coordinate appointments, container tracking, and last-mile logistics for time-sensitive freight.',
    features: [
      'Port and rail terminal coordination',
      'Container tracking and appointment scheduling',
      'Intermodal transfer management',
      'Warehouse and distribution center deliveries',
    ],
    benefits: [
      'Fewer demurrage and detention costs',
      'Reliable port-to-door execution',
      'Clear visibility on container status',
    ],
  },
  {
    slug: 'night-dispatch',
    title: 'Night Dispatch',
    tagline: 'Operations that never sleep.',
    description:
      'After-hours dispatch coverage so your operations never stop — dedicated night shift support for your fleet.',
    icon: 'night',
    image: galleryImage('pexels-eduardo199o9-178988127-17824889.jpg'),
    overview:
      'When your daytime team clocks out, our night dispatch crew keeps loads moving. We provide after-hours coverage for load updates, driver support, and urgent operational decisions across USA & Canada time zones.',
    features: [
      'Dedicated after-hours dispatch team',
      'Overnight load and driver support',
      'Emergency escalation handling',
      'Coverage aligned to USA & Canada hours',
    ],
    benefits: [
      '24-hour operational continuity',
      'No missed loads after business hours',
      'Peace of mind for fleet owners',
    ],
  },
  {
    slug: 'customer-support',
    title: 'Customer Support / BPO Services',
    tagline: 'Always-on client communication.',
    description:
      '24/7 Customer Support / BPO Services team ready to assist with inquiries, tracking updates, and operational coordination.',
    icon: 'support',
    image: galleryImage('pexels-matreding-11666903.jpg'),
    overview:
      'Our Customer Support / BPO Services specialists handle client inquiries, shipment updates, POD requests, and billing coordination. We represent your brand professionally with quick, accurate responses around the clock.',
    features: [
      '24/7 inquiry and ticket handling',
      'Shipment tracking and status updates',
      'POD and documentation requests',
      'Client communication and follow-ups',
    ],
    benefits: [
      'Higher client satisfaction scores',
      'Faster response to customer queries',
      'Professional brand representation',
    ],
  },
]

export const SERVICES_PROCESS = {
  eyebrow: 'How we work',
  title: 'A simple path to reliable operations',
  steps: [
    {
      title: 'Consultation',
      description:
        'We understand your fleet size, lanes, operational gaps, and goals across USA & Canada.',
    },
    {
      title: 'Custom setup',
      description:
        'We configure dispatch workflows, communication channels, and reporting to match your business.',
    },
    {
      title: 'Live operations',
      description:
        'Our team handles day-to-day dispatch, tracking, and support with real-time coordination.',
    },
    {
      title: 'Optimize & scale',
      description:
        'We review performance, refine processes, and scale support as your operations grow.',
    },
  ],
} as const

export const SERVICES_CTA = {
  title: 'Need a custom logistics solution?',
  description:
    'Tell us about your fleet and operational requirements. Our team will recommend the right mix of dispatch, brokerage, and support services for your business.',
} as const
