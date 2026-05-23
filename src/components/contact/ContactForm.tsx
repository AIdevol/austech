import { useState, type FormEvent } from 'react'
import { Phone } from 'lucide-react'
import { AnimatedCard } from '@/components/animations/AnimatedCard'
import { Button } from '@/components/ui/Button'
import { ContactSectionTitle } from '@/components/contact/ContactSectionTitle'
import { TopPatti } from '@/components/ui/TopPatti'
import { SITE } from '@/constants/content'

const inputClass =
  'w-full min-h-[44px] rounded-sm border border-slate-200 bg-white px-3 py-2.5 text-base text-royal outline-none transition-colors placeholder:text-slate-400 focus:border-gold focus:ring-1 focus:ring-gold/30 sm:px-4 sm:py-3 sm:text-sm'

const labelClass = 'mb-1.5 block text-xs font-semibold uppercase tracking-wide text-royal'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <AnimatedCard className="relative flex h-full flex-col overflow-hidden rounded-sm border border-slate-200/80 bg-white shadow-[0_4px_24px_rgba(10,31,68,0.08)]">
      <TopPatti />
      <div className="flex h-full flex-col p-5 sm:p-6 lg:p-8">
        <ContactSectionTitle title="Send us a message" />

        {submitted ? (
          <p className="mt-6 rounded-sm border border-emerald-200 bg-emerald-50 px-4 py-5 text-sm text-emerald-800 sm:mt-8">
            Thank you for reaching out. Our team will get back to you as soon as possible.
          </p>
        ) : (
          <form className="mt-6 flex flex-1 flex-col sm:mt-8" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              <div>
                <label htmlFor="fullName" className={labelClass}>
                  Full name <span className="text-gold">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  autoComplete="name"
                  className={inputClass}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="companyName" className={labelClass}>
                  Company name <span className="text-gold">*</span>
                </label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  required
                  autoComplete="organization"
                  className={inputClass}
                  placeholder="Your company"
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email address <span className="text-gold">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  inputMode="email"
                  className={inputClass}
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone number <span className="text-gold">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  className={inputClass}
                  placeholder="+1 000 000 0000"
                />
              </div>
            </div>

            <div className="mt-4 sm:mt-5">
              <label htmlFor="subject" className={labelClass}>
                Subject <span className="text-gold">*</span>
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                className={inputClass}
                placeholder="How can we help?"
              />
            </div>

            <div className="mt-4 sm:mt-5">
              <label htmlFor="message" className={labelClass}>
                Your message <span className="text-gold">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className={`${inputClass} min-h-[140px] resize-y`}
                placeholder="Tell us about your requirements..."
              />
            </div>

            <label className="mt-4 flex cursor-pointer items-start gap-2.5 text-sm leading-relaxed text-slate-600 sm:mt-5">
              <input
                type="checkbox"
                name="privacy"
                required
                className="mt-1 h-4 w-4 shrink-0 accent-gold"
              />
              <span>
                I agree to the{' '}
                <a href="#" className="font-medium text-gold hover:underline">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="#" className="font-medium text-gold hover:underline">
                  Terms of Service
                </a>
                .
              </span>
            </label>

            <Button type="submit" variant="primary" showArrow className="mt-5 w-full">
              Send message
            </Button>
          </form>
        )}

        <div className="mt-6 rounded-sm border border-slate-100 bg-slate-50 p-4 sm:mt-8 sm:p-5">
          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.75} aria-hidden />
            <p className="text-sm leading-relaxed text-slate-600">
              Prefer to talk? Call us directly and our team will be happy to assist you.
            </p>
          </div>
          <div className="mt-4 space-y-2 border-t border-slate-200 pt-4 text-sm sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-2 sm:border-0 sm:pt-3">
            <p>
              <span className="font-semibold text-gold">IND:</span>{' '}
              <a
                href={`tel:${SITE.phoneInd.replace(/\s/g, '')}`}
                className="font-medium text-royal hover:text-gold"
              >
                {SITE.phoneInd}
              </a>
            </p>
            <p>
              <span className="font-semibold text-gold">USA:</span>{' '}
              <a
                href={`tel:${SITE.phoneUsa.replace(/[\s()-]/g, '')}`}
                className="font-medium text-royal hover:text-gold"
              >
                {SITE.phoneUsa}
              </a>
            </p>
          </div>
        </div>
      </div>
    </AnimatedCard>
  )
}
