import { SITE } from '@/constants/content'

type GetInTouchMailtoOptions = {
  subject?: string
  intro?: string
}

function buildMailtoBody(intro: string) {
  return [
    intro,
    '',
    'I would like to get in touch regarding your logistics services.',
    '',
    'Name:',
    'Company:',
    'Phone:',
    'Message:',
    '',
    '---',
    'Austech contact information:',
    `Email: ${SITE.email}`,
    `Phone (India): ${SITE.phoneInd}`,
    `Phone (USA): ${SITE.phoneUsa}`,
    `Office: ${SITE.address}`,
  ].join('\n')
}

export function getInTouchMailto(options: GetInTouchMailtoOptions = {}) {
  const subject = options.subject ?? 'Get in Touch — Austech Business Solutions'
  const intro = options.intro ?? 'Hello Austech team,'
  const params = new URLSearchParams({
    subject,
    body: buildMailtoBody(intro),
  })

  return `mailto:${SITE.email}?${params.toString()}`
}

/** Default mailto link for “Get in touch” buttons across the site. */
export const GET_IN_TOUCH_MAILTO = getInTouchMailto()

export function serviceInquiryMailto(serviceTitle: string) {
  return getInTouchMailto({
    subject: `Service inquiry: ${serviceTitle}`,
    intro: `Hello Austech team,\n\nI am interested in your ${serviceTitle} service.`,
  })
}
