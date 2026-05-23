import type { ReactNode } from 'react'
import { Clock, Headphones, Mail, MapPin, Phone } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { AnimatedCard } from '@/components/animations/AnimatedCard'
import { ContactSectionTitle } from '@/components/contact/ContactSectionTitle'
import { TopPatti } from '@/components/ui/TopPatti'
import { SITE } from '@/constants/content'

function InfoRow({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon
  title: string
  children: ReactNode
}) {
  return (
    <li className="flex gap-3 sm:gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-gold/30 bg-gold/10 text-gold sm:h-11 sm:w-11">
        <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.75} aria-hidden />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-bold uppercase tracking-wide text-royal">{title}</p>
        <div className="mt-1 break-words text-sm leading-relaxed text-slate-600">{children}</div>
      </div>
    </li>
  )
}

export function ContactInfoCard() {
  return (
    <AnimatedCard className="relative flex h-full flex-col overflow-hidden rounded-sm border border-slate-200/80 bg-white shadow-[0_4px_24px_rgba(10,31,68,0.08)]">
      <TopPatti />
      <div className="flex h-full flex-col p-5 sm:p-6 lg:p-8">
        <ContactSectionTitle title="Contact information" />

        <ul className="mt-6 flex flex-1 flex-col gap-6 sm:mt-8 sm:gap-7">
          <InfoRow icon={MapPin} title="Office address">
            {SITE.address}
          </InfoRow>
          <InfoRow icon={Phone} title="Phone number">
            <p>
              <span className="font-semibold text-gold">IND:</span>{' '}
              <a href={`tel:${SITE.phoneInd.replace(/\s/g, '')}`} className="hover:text-gold">
                {SITE.phoneInd}
              </a>
            </p>
            <p className="mt-1">
              <span className="font-semibold text-gold">USA:</span>{' '}
              <a
                href={`tel:${SITE.phoneUsa.replace(/[\s()-]/g, '')}`}
                className="hover:text-gold"
              >
                {SITE.phoneUsa}
              </a>
            </p>
          </InfoRow>
          <InfoRow icon={Mail} title="Email address">
            <a href={`mailto:${SITE.email}`} className="break-all hover:text-gold">
              {SITE.email}
            </a>
          </InfoRow>
          <InfoRow icon={Clock} title="Business hours">
            {SITE.businessHours}
          </InfoRow>
        </ul>

        <div className="relative mt-6 overflow-hidden rounded-sm bg-navy p-4 sm:mt-8 sm:p-5">
          <TopPatti />
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold sm:h-12 sm:w-12">
              <Headphones className="h-5 w-5 text-white sm:h-6 sm:w-6" strokeWidth={1.75} aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-extrabold uppercase tracking-wide text-white">24/7 support</p>
              <p className="mt-1 text-xs leading-relaxed text-white/75">
                Our experienced team is available round-the-clock to support your operations.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/90">
                <a
                  href={`tel:${SITE.phoneUsa.replace(/[\s()-]/g, '')}`}
                  className="font-bold text-gold hover:underline"
                >
                  {SITE.phoneUsa}
                </a>
                <span className="text-white/70"> (For USA &amp; Canada clients)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedCard>
  )
}
