import { StaggerGroup, StaggerItem } from '@/components/animations/Stagger'
import { Container } from '@/components/ui/Container'
import { TopPatti } from '@/components/ui/TopPatti'
import { CONTACT_CHANNELS } from '@/constants/contactContent'

export function ContactChannels() {
  return (
    <section className="relative z-20 -mt-10 px-4 sm:-mt-12 sm:px-6 lg:-mt-14 lg:px-8">
      <Container className="!px-0">
        <StaggerGroup
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:overflow-hidden lg:rounded-sm lg:border lg:border-white/10 lg:shadow-[0_8px_32px_rgba(10,31,68,0.15)]"
          stagger={0.06}
        >
          {CONTACT_CHANNELS.map((channel, index) => {
            const Icon = channel.icon
            return (
              <StaggerItem key={channel.title}>
                <a
                  href={channel.href}
                  className={`group relative flex items-center gap-4 bg-navy px-5 py-5 transition-colors hover:bg-navy-mid sm:px-6 sm:py-6 ${
                    index > 0 ? 'lg:border-l lg:border-white/10' : ''
                  }`}
                >
                  <TopPatti className="opacity-90" />
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-gold/40 bg-gold/10 text-gold transition-colors group-hover:border-gold group-hover:bg-gold group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-gold">
                      {channel.title}
                    </p>
                    <p className="mt-1 break-all text-sm font-semibold text-white sm:truncate">{channel.detail}</p>
                  </span>
                </a>
              </StaggerItem>
            )
          })}
        </StaggerGroup>
      </Container>
    </section>
  )
}
