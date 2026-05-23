import { AboutCta } from '@/components/about/AboutCta'
import { AboutHero } from '@/components/about/AboutHero'
import { DirectorMessage } from '@/components/about/DirectorMessage'
import { AboutStory } from '@/components/about/AboutStory'
import { AboutTeam } from '@/components/about/AboutTeam'
import { AboutValues } from '@/components/about/AboutValues'
import { AboutWhyChoose } from '@/components/about/AboutWhyChoose'

export function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <DirectorMessage />
      <AboutValues />
      <AboutWhyChoose />
      <AboutTeam />
      <AboutCta />
    </>
  )
}
