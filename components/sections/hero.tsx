'use client'

import { motion } from 'motion/react'
import { ArrowDown, Download, Mail } from 'lucide-react'
import { SOCIALS } from '@/lib/portfolio-data'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-24 pb-16 sm:px-8"
    >
      {/* soft decorative accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-accent/5 blur-3xl"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-3xl text-center"
      >
        <motion.p
          variants={item}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground"
        >
          <span className="h-2 w-2 rounded-full bg-accent" />
          Open to international opportunities
        </motion.p>

        <motion.h1
          variants={item}
          className="font-heading text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          Udara Rajamanthri
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 text-lg font-medium text-accent sm:text-xl"
        >
          Front-End Engineer <span className="text-muted-foreground">|</span> UI
          Specialist
        </motion.p>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Front-End Engineer with experience building responsive, user-friendly
          web applications and ensuring quality through UI automation testing.
          Passionate about creating seamless digital experiences.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#projects"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
          >
            View My Work
          </a>
          <a
            href="/udara-rajamanthri-cv.pdf"
            download
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent sm:w-auto"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
          <a
            href={`mailto:${SOCIALS.email}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent sm:w-auto"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="block"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.span>
      </motion.a>
    </section>
  )
}
