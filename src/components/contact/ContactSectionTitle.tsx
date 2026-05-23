type ContactSectionTitleProps = {
  title: string
  light?: boolean
}

export function ContactSectionTitle({ title, light = false }: ContactSectionTitleProps) {
  return (
    <div>
      <h2
        className={`text-sm font-extrabold uppercase tracking-wider ${
          light ? 'text-white' : 'text-royal'
        }`}
      >
        {title}
      </h2>
      <span className="mt-2 block h-0.5 w-10 bg-gold-soft" aria-hidden />
    </div>
  )
}
