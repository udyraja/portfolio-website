import { Globe, Layout, Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const cards = [
  {
    icon: Globe,
    title: 'Global Collaboration',
    body: 'Experience with a Sri Lankan company and currently working remotely for a US-based company across time zones.',
  },
  {
    icon: Layout,
    title: 'Design to Interface',
    body: 'Skilled in translating designs into responsive, accessible interfaces that feel effortless on every device.',
  },
  {
    icon: Sparkles,
    title: 'Open to Relocation',
    body: 'Interested in opportunities for international collaboration and relocation with forward-thinking teams.',
  },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8">
      <SectionHeading
        eyebrow="About Me"
        title="Crafting seamless digital experiences"
        description="I build responsive, user-friendly web applications and care deeply about quality, accessibility, and the small details that make interfaces feel polished."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.08}>
            <article className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <card.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {card.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
