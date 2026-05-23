import type { QuickReplyId } from '@/constants/chatbotContent'
import {
  CHATBOT,
  CHATBOT_LINKS,
  whatsappUrl,
} from '@/constants/chatbotContent'
import { SITE } from '@/constants/content'

export type ChatMessage = {
  id: string
  role: 'user' | 'bot'
  text: string
  links?: { label: string; href: string }[]
}

const QUICK_REPLY_RESPONSES: Record<QuickReplyId, Omit<ChatMessage, 'id' | 'role'>> = {
  business: {
    text: `${SITE.legalName} provides trucking and logistics support from India for fleets operating in USA & Canada.\n\nWe help with dispatch, freight brokerage, OTR, drayage, and 24/7 back-office support.`,
    links: [
      { label: 'About us', href: '/about' },
      { label: 'Our services', href: '/services' },
    ],
  },
  scaling: {
    text: 'Growing your fleet? We scale with you — more loads, dispatch coverage, tracking support, and customer communication without hiring a large in-house team.',
    links: [
      { label: 'View services', href: '/services' },
      { label: 'Chat on WhatsApp', href: CHATBOT_LINKS.whatsappScaling },
    ],
  },
  whatsapp: {
    text: `Chat with our team on WhatsApp (${SITE.phoneInd}). Tap below to start a conversation — we typically respond quickly during business hours and offer 24/7 support for USA & Canada clients.`,
    links: [{ label: 'Open WhatsApp', href: CHATBOT_LINKS.whatsapp }],
  },
  contact: {
    text: `Reach Austech:\n• WhatsApp: ${SITE.phoneInd}\n• India: ${SITE.phoneInd}\n• USA: ${SITE.phoneUsa}\n• Email: ${SITE.email}`,
    links: [
      { label: 'WhatsApp', href: CHATBOT_LINKS.whatsapp },
      { label: 'Contact page', href: '/contact' },
      { label: 'Email us', href: CHATBOT_LINKS.email },
    ],
  },
}

function normalize(text: string) {
  return text.toLowerCase().trim()
}

export function getBotReply(input: string): Omit<ChatMessage, 'id' | 'role'> {
  const q = normalize(input)

  if (!q) {
    return { text: 'Type a message or choose an option below.' }
  }

  if (q.match(/\b(hi|hello|hey|good\s*(morning|afternoon|evening)|namaste)\b/)) {
    return { text: CHATBOT.welcome }
  }

  if (q.match(/\b(whatsapp|whats\s*app|wa\.me|chat\s+on\s+whatsapp)\b/)) {
    return QUICK_REPLY_RESPONSES.whatsapp
  }

  if (q.match(/\b(scale|scaling|grow|growth|expand|expansion|bigger\s+fleet|more\s+trucks)\b/)) {
    return QUICK_REPLY_RESPONSES.scaling
  }

  if (
    q.match(
      /\b(business|company|about|who\s+are\s+you|what\s+do\s+you\s+do|austech|logistics\s+partner)\b/,
    )
  ) {
    return QUICK_REPLY_RESPONSES.business
  }

  if (q.match(/\b(service|3pl|dispatch|otr|drayage|freight|broker)\b/)) {
    return {
      text: 'We offer 3PL brokerage, dispatch, OTR, drayage, night dispatch, and customer support for USA & Canada operations.',
      links: [{ label: 'All services', href: '/services' }],
    }
  }

  if (q.match(/\b(contact|email|phone|call|reach|talk)\b/)) {
    return QUICK_REPLY_RESPONSES.contact
  }

  if (q.match(/\b(price|rate|cost|quote)\b/)) {
    return {
      text: 'Pricing depends on your lanes and support needs. Message us on WhatsApp or email for a quick discussion.',
      links: [
        { label: 'WhatsApp', href: whatsappUrl('Hello, I would like a quote for Austech services.') },
        { label: 'Email', href: CHATBOT_LINKS.email },
      ],
    }
  }

  if (q.match(/\b(thank|thanks|bye|goodbye)\b/)) {
    return { text: 'Thank you! Message us anytime on WhatsApp if you need help.' }
  }

  return {
    text: CHATBOT.fallback,
    links: [
      { label: 'WhatsApp', href: CHATBOT_LINKS.whatsapp },
      { label: 'Contact', href: '/contact' },
    ],
  }
}

export function getQuickReplyMessage(id: QuickReplyId): Omit<ChatMessage, 'id' | 'role'> {
  return QUICK_REPLY_RESPONSES[id]
}

export function createMessage(
  role: ChatMessage['role'],
  payload: Omit<ChatMessage, 'id' | 'role'>,
): ChatMessage {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    role,
    ...payload,
  }
}
