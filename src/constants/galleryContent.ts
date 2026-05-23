import galleryManifest from 'virtual:gallery-manifest'

type GalleryManifestEntry = {
  file: string
  src: string
}

export type GalleryCategory = 'all' | 'fleet' | 'team'

export type GalleryItem = {
  id: string
  src: string
  alt: string
  title: string
  category: Exclude<GalleryCategory, 'all'>
}

export const GALLERY_HERO = {
  breadcrumb: 'Gallery',
  eyebrow: 'Our work in motion',
  title: 'Gallery',
  subtitle:
    'Explore our fleet, operations, and the people behind reliable freight delivery across Australia.',
} as const

export const GALLERY_CATEGORIES: { id: GalleryCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'fleet', label: 'Fleet & Roads' },
  { id: 'team', label: 'Team & Support' },
]

const TEAM_FILE_META: Record<string, { title: string; category: 'team' }> = {
  '24:7_operations_support.png': { title: '24/7 operations support', category: 'team' },
  'dedicated_customer_support.png': { title: 'Dedicated customer support', category: 'team' },
  'expericend_despatcher.png': { title: 'Experienced dispatchers', category: 'team' },
  'Real_time_tracking.png': { title: 'Real-time tracking', category: 'team' },
  'file_0000000010c07208be408300491fb3c2.png_202605231021.jpeg': {
    title: 'Operations team',
    category: 'team',
  },
}

const FLEET_TITLES = [
  'Highway freight delivery',
  'Fleet on the open road',
  'Container yard operations',
  'Long-haul transport',
  'Intermodal logistics',
  'Warehouse distribution',
  'Port and cargo handling',
  'Night-time freight run',
  'Cross-country delivery',
  'Heavy haul operations',
  'Road freight network',
  'Commercial trucking',
  'Supply chain in motion',
  'Freight corridor',
  'Logistics hub activity',
  'Transport fleet lineup',
  'Cargo in transit',
  'Distribution centre',
  'Freight forwarding',
  'National freight routes',
  'Semi-trailer convoy',
  'Industrial logistics',
  'Freight terminal',
  'Over-the-road transport',
  'Logistics operations',
  'Fleet dispatch ready',
  'Cargo loading bay',
  'Transport infrastructure',
]

function titleFromFile(file: string, fleetIndex: number) {
  const known = TEAM_FILE_META[file]
  if (known) return known.title

  const base = file.replace(/\.[^.]+$/, '').replace(/[_-]+/g, ' ')
  if (/support|dispatch|tracking|operations/i.test(base)) {
    return base.replace(/\b\w/g, (char) => char.toUpperCase())
  }

  return FLEET_TITLES[fleetIndex % FLEET_TITLES.length]
}

function categoryFromFile(file: string) {
  if (TEAM_FILE_META[file]) return TEAM_FILE_META[file].category
  if (/support|dispatch|tracking|operations/i.test(file)) return 'team' as const
  return 'fleet' as const
}

export function buildGalleryItems(entries: GalleryManifestEntry[]): GalleryItem[] {
  let fleetIndex = 0

  return entries.map((entry) => {
    const category = categoryFromFile(entry.file)
    const title = titleFromFile(entry.file, fleetIndex)
    if (category === 'fleet') fleetIndex += 1

    return {
      id: entry.file,
      src: entry.src,
      alt: title,
      title,
      category,
    }
  })
}

/** All images currently in public/assets/gallery (auto-updated on dev/build). */
export const GALLERY_ITEMS: GalleryItem[] = buildGalleryItems(galleryManifest)

const GALLERY_HERO_IMAGE_PRIORITY = [
  'pexels-ronivon-prado-34161480-12944719.jpg',
  'pexels-samuel-wolfl-628277-1427541.jpg',
  'pexels-kayco-27027176.jpg',
]

/** Hero poster: preferred truck photo from gallery, else any jpg, else site truck. */
export const GALLERY_HERO_POSTER = (() => {
  for (const file of GALLERY_HERO_IMAGE_PRIORITY) {
    const match = galleryManifest.find((entry) => entry.file === file)
    if (match) return match.src
  }
  const photo = galleryManifest.find((entry) => /\.jpe?g$/i.test(entry.file))
  if (photo) return photo.src
  return '/img/truck.png'
})()
