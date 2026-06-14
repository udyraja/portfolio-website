import { SectionHeading } from '@/components/section-heading'
import { Stagger, StaggerItem } from '@/components/reveal'
import { SKILLS } from '@/lib/portfolio-data'

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-y border-border bg-secondary/40"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Tools & technologies"
          description="A toolkit focused on building accessible, well-tested front-end experiences from concept to production."
        />

        <Stagger className="flex flex-wrap gap-3">
          {SKILLS.map((skill) => (
            <StaggerItem key={skill}>
              <span className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent">
                {skill}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
