import { SITE } from '@/constants/content'

const WHATSAPP_NUMBER = '919853879000'

export function whatsappUrl(message?: string) {
  const text =
    message ??
    'Hello Austech team, I would like to know more about your logistics and trucking support services.'
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

export const CHATBOT = {
  name: 'Austech Assistant',
  status: 'Online',
  welcome:
    'Hi! Ask me about our business, how we help you scale operations, or how to reach us on WhatsApp.',
  placeholder: 'Ask about our business, scaling, or WhatsApp…',
  fallback:
    'I can help with business info, scaling your operations, or connecting you on WhatsApp. Pick an option below or type your question.',
} as const

export const CHATBOT_QUICK_REPLIES = [
  { id: 'business', label: 'About business' },
  { id: 'scaling', label: 'Scale operations' },
  { id: 'whatsapp', label: 'WhatsApp' },
  { id: 'contact', label: 'Contact us' },
] as const

export type QuickReplyId = (typeof CHATBOT_QUICK_REPLIES)[number]['id']

export const CHATBOT_LINKS = {
  whatsapp: whatsappUrl(),
  whatsappScaling: whatsappUrl(
    'Hello Austech team, I want to discuss scaling my trucking operations with your support.',
  ),
  email: `mailto:${SITE.email}`,
  phoneInd: `tel:${SITE.phoneInd.replace(/[\s()-]/g, '')}`,
  phoneUsa: `tel:${SITE.phoneUsa.replace(/[\s()-]/g, '')}`,
} as const
