import { ContactChannels } from '@/components/contact/ContactChannels'
import { ContactCta } from '@/components/contact/ContactCta'
import { ContactHero } from '@/components/contact/ContactHero'
import { ContactMain } from '@/components/contact/ContactMain'
import { ContactMap } from '@/components/contact/ContactMap'
import { ContactWhy } from '@/components/contact/ContactWhy'

export function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactChannels />
      <ContactMain />
      <ContactMap />
      <ContactWhy />
      <ContactCta />
    </>
  )
}
