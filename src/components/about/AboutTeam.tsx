import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { StaggerGroup, StaggerItem } from '@/components/animations/Stagger'
import { Container } from '@/components/ui/Container'
import { ABOUT_TEAM } from '@/constants/aboutContent'

export function AboutTeam() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,38%)_1fr] lg:gap-10 xl:gap-14">
          <ScrollReveal variant="fadeLeft">
            <div className="flex items-center gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                {ABOUT_TEAM.eyebrow}
              </p>
              <span className="h-px w-10 bg-gold-soft sm:w-12" aria-hidden />
            </div>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-royal sm:text-4xl">
              {ABOUT_TEAM.title}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted">{ABOUT_TEAM.description}</p>
          </ScrollReveal>

          <StaggerGroup
            className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-3 xl:gap-4"
            stagger={0.08}
          >
            {ABOUT_TEAM.members.map((member) => (
              <StaggerItem key={member.title}>
                <article className="group flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-[0_4px_20px_rgba(10,31,68,0.08)] transition-shadow hover:shadow-[0_8px_28px_rgba(10,31,68,0.12)]">
                  <div className="aspect-[4/5] overflow-hidden bg-slate-100">
                    <img
                      src={member.image}
                      alt={member.alt}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex min-h-[52px] items-center justify-center bg-navy px-2 py-3 text-center sm:min-h-[56px] sm:px-3">
                    <p className="text-[9px] font-bold uppercase leading-snug tracking-wide text-white sm:text-[10px] lg:text-[11px]">
                      {member.title}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Container>
    </section>
  )
}
