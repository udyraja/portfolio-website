import { MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { EXPERIENCES } from '@/lib/portfolio-data'

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8"
    >
      <SectionHeading
        eyebrow="Experience"
        title="A journey across borders"
        description="From a Sri Lankan software company to a remote role with a US-based company — building quality interfaces along the way."
      />

      <div className="relative">
        {/* timeline line */}
        <div
          aria-hidden
          className="absolute left-[7px] top-2 bottom-2 w-px bg-border md:left-1/2"
        />

        <ol className="space-y-10">
          {EXPERIENCES.map((exp, i) => {
            const alignRight = i % 2 === 1
            return (
              <li key={exp.company} className="relative md:grid md:grid-cols-2 md:gap-10">
                {/* dot */}
                <span
                  aria-hidden
                  className="absolute left-0 top-2 z-10 flex h-4 w-4 -translate-x-px items-center justify-center rounded-full border-2 border-accent bg-background md:left-1/2 md:-translate-x-1/2"
                >
                  {exp.current ? (
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  ) : null}
                </span>

                <Reveal
                  delay={i * 0.05}
                  className={
                    alignRight
                      ? 'pl-8 md:col-start-2 md:pl-10'
                      : 'pl-8 md:pr-10 md:text-right md:pl-0'
                  }
                >
                  <article className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
                    <div
                      className={`flex flex-wrap items-center gap-2 ${
                        alignRight ? '' : 'md:justify-end'
                      }`}
                    >
                      <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                        {exp.period}
                      </span>
                      {exp.current ? (
                        <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                          Current
                        </span>
                      ) : null}
                    </div>

                    <h3 className="mt-3 font-heading text-xl font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-accent">{exp.company}</p>
                    <p
                      className={`mt-1 flex items-center gap-1.5 text-xs text-muted-foreground ${
                        alignRight ? '' : 'md:justify-end'
                      }`}
                    >
                      <MapPin className="h-3.5 w-3.5" />
                      {exp.location}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {exp.summary}
                    </p>

                    <ul
                      className={`mt-4 space-y-2 text-sm text-muted-foreground ${
                        alignRight ? '' : 'md:text-right'
                      }`}
                    >
                      {exp.highlights.map((h) => (
                        <li key={h} className="leading-relaxed">
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div
                      className={`mt-4 flex flex-wrap gap-2 ${
                        alignRight ? '' : 'md:justify-end'
                      }`}
                    >
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
