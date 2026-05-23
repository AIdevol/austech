import { ServicesCta } from '@/components/services/ServicesCta'
import { ServicesHero } from '@/components/services/ServicesHero'
import { ServicesIntro } from '@/components/services/ServicesIntro'
import { ServicesList } from '@/components/services/ServicesList'
import { ServicesProcess } from '@/components/services/ServicesProcess'
import { StatsBar } from '@/components/sections/StatsBar'

export function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesIntro />
      <ServicesList />
      <ServicesProcess />
      <StatsBar />
      <ServicesCta />
    </>
  )
}
