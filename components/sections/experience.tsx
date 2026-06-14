import { CheckCircle2 } from 'lucide-react'
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
        title="Professional background"
        description="Frontend engineering roles with focus on quality, accessibility, and shipping features that matter."
      />

      <div className="space-y-8">
        {EXPERIENCES.map((exp, i) => (
          <Reveal key={exp.company} delay={i * 0.1}>
            <article className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        Current
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {exp.company} · {exp.location}
                  </p>
                  <p className="text-xs text-muted-foreground/60 sm:text-sm">{exp.period}</p>
                </div>
              </div>

              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {exp.summary}
              </p>

              {/* Key Highlights */}
              <div className="mt-5 space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-accent" />
                    <p className="text-sm text-muted-foreground">{highlight}</p>
                  </div>
                ))}
              </div>

              {/* Metrics */}
              {exp.metrics && exp.metrics.length > 0 && (
                <div className="mt-6 rounded-lg bg-accent/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                    Measurable Impact
                  </p>
                  <div className="mt-3 space-y-2">
                    {exp.metrics.map((metric, idx) => (
                      <p key={idx} className="text-sm text-accent">
                        📈 {metric}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div className="mt-5 flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}