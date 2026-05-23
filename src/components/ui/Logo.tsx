import { Link } from 'react-router-dom'
import { IMAGES } from '@/constants/content'

type LogoProps = {
  variant?: 'light' | 'dark' | 'footer'
  size?: 'header' | 'default' | 'footer'
  className?: string
}

const sizeStyles = {
  header:
    'h-auto w-[min(46vw,168px)] max-h-[44px] object-contain object-left sm:w-[min(320px,38vw)] sm:max-h-[62px] lg:max-h-[80px]',
  default: 'h-12 w-auto max-w-[260px] object-contain sm:h-14 sm:max-w-[300px]',
  footer: 'h-16 w-auto max-w-[260px] object-contain sm:h-24 sm:max-w-[400px] lg:h-28 lg:max-w-[460px]',
} as const

const logoSources = {
  dark: IMAGES.logo,
  light: IMAGES.logo,
  footer: IMAGES.logoTrans,
} as const

export function Logo({ variant = 'dark', size = 'default', className = '' }: LogoProps) {
  return (
    <Link to="/" className={`inline-flex shrink-0 items-center ${className}`}>
      <img
        src={logoSources[variant]}
        alt="AusTech Business Solutions"
        className={`${sizeStyles[size]} ${
          variant === 'light' ? 'brightness-0 invert' : ''
        }`}
      />
    </Link>
  )
}
