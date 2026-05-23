import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '@/components/icons/Icons'

type ButtonVariant = 'primary' | 'outline' | 'outline-light' | 'navy'

type SharedProps = {
  children: ReactNode
  variant?: ButtonVariant
  showArrow?: boolean
  className?: string
}

type ButtonProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement>

type LinkProps = SharedProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-gold text-white hover:bg-gold-dark border border-gold',
  outline: 'bg-white text-royal border-2 border-royal hover:bg-royal/5',
  'outline-light':
    'bg-transparent text-white border-2 border-white hover:bg-white/10',
  navy: 'bg-navy text-white hover:bg-navy-mid border border-navy',
}

const baseClass =
  'inline-flex items-center justify-center gap-2 px-6 py-3 text-[11px] font-bold uppercase tracking-wider transition-colors'

function ButtonContent({
  children,
  showArrow,
  variant,
}: {
  children: ReactNode
  showArrow?: boolean
  variant: ButtonVariant
}) {
  const arrowClass =
    variant === 'outline' ? 'text-royal' : variant === 'outline-light' ? 'text-white' : 'text-white'

  return (
    <>
      <span>{children}</span>
      {showArrow && <ArrowRightIcon className={`h-4 w-4 shrink-0 ${arrowClass}`} />}
    </>
  )
}

function isInternalRoute(href: string) {
  return href.startsWith('/') && !href.startsWith('//')
}

export function Button(props: ButtonProps | LinkProps) {
  const {
    children,
    variant = 'primary',
    showArrow = false,
    className = '',
    ...rest
  } = props

  const classes = `${baseClass} ${variantStyles[variant]} ${className}`

  if ('href' in rest) {
    const { href, ...anchorProps } = rest

    if (isInternalRoute(href)) {
      return (
        <Link to={href} className={classes} {...(anchorProps as object)}>
          <ButtonContent showArrow={showArrow} variant={variant}>
            {children}
          </ButtonContent>
        </Link>
      )
    }

    return (
      <a href={href} className={classes} {...anchorProps}>
        <ButtonContent showArrow={showArrow} variant={variant}>
          {children}
        </ButtonContent>
      </a>
    )
  }

  const { type = 'button', ...buttonRest } = rest as ButtonProps

  return (
    <button type={type} className={classes} {...buttonRest}>
      <ButtonContent showArrow={showArrow} variant={variant}>
        {children}
      </ButtonContent>
    </button>
  )
}
