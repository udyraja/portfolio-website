import { Quote } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { TESTIMONIALS } from '@/lib/portfolio-data'

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8"
    >
      <SectionHeading
        eyebrow="Testimonials"
        title="Kind words to come"
        description="This section is reserved for recommendations from managers and colleagues — added as collaborations grow."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.title} delay={i * 0.08}>
            <figure className="h-full rounded-2xl border border-border bg-card p-7">
              <Quote className="h-7 w-7 text-accent/40" />
              <blockquote className="mt-4 text-pretty text-base leading-relaxed text-foreground">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 font-heading text-sm font-semibold text-accent">
                  {t.name
                    .split(' ')
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join('')}
                </span>
                <span>
                  <span className="block text-sm font-medium text-foreground">
                    {t.name}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {t.title}
                  </span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
