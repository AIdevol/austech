import { AboutCta } from '@/components/about/AboutCta'
import { AboutHero } from '@/components/about/AboutHero'
import { AboutStory } from '@/components/about/AboutStory'
import { AboutTeam } from '@/components/about/AboutTeam'
import { AboutValues } from '@/components/about/AboutValues'
import { AboutWhyChoose } from '@/components/about/AboutWhyChoose'

export function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutWhyChoose />
      <AboutTeam />
      <AboutCta />
    </>
  )
}
