import { Cta } from '@/components/sections/Cta'
import { Hero } from '@/components/sections/Hero'
import { HomeAbout } from '@/components/sections/HomeAbout'
import { Services } from '@/components/sections/Services'
import { StatsBar } from '@/components/sections/StatsBar'
import { Testimonials } from '@/components/sections/Testimonials'
import { WhyChoose } from '@/components/sections/WhyChoose'

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <StatsBar />
      <HomeAbout />
      <WhyChoose />
      <Testimonials />
      <Cta />
    </>
  )
}
