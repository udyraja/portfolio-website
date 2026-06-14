export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
] as const

export const SOCIALS = {
  email: 'udara.rajamanthri@example.com',
  linkedin: 'https://www.linkedin.com/in/udara-rajamanthri',
  github: 'https://github.com/udara-rajamanthri',
}

export const SKILLS = [
  'React',
  'JavaScript',
  'TypeScript',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'Responsive Design',
  'UI Testing',
  'Katalon Studio',
  'Git',
  'GitHub',
  'REST APIs',
  'Figma',
]

export type Experience = {
  role: string
  company: string
  location: string
  period: string
  current?: boolean
  summary: string
  highlights: string[]
  tech: string[]
}

export const EXPERIENCES: Experience[] = [
  {
    role: 'Front-End Engineer (Remote)',
    company: 'US-Based Technology Company',
    location: 'Remote · United States',
    period: 'Present',
    current: true,
    summary:
      'Building and maintaining responsive, accessible interfaces for a distributed product team while collaborating across time zones.',
    highlights: [
      'Translate design systems into pixel-perfect, accessible React components.',
      'Own UI automation testing to safeguard release quality.',
      'Partner with designers and back-end engineers to ship seamless features.',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'UI Testing'],
  },
  {
    role: 'Front-End Engineer',
    company: 'Sri Lankan Software Company',
    location: 'Sri Lanka',
    period: 'Previous',
    summary:
      'Delivered responsive web applications and established UI automation testing practices that improved release confidence.',
    highlights: [
      'Developed responsive, cross-browser interfaces from Figma designs.',
      'Introduced UI automation testing with Katalon Studio.',
      'Collaborated in agile teams to deliver client-facing features.',
    ],
    tech: ['JavaScript', 'React', 'Katalon Studio', 'REST APIs'],
  },
]

export type Project = {
  title: string
  description: string
  image: string
  tech: string[]
  github: string
  demo: string
}

export const PROJECTS: Project[] = [
  {
    title: 'Analytics Dashboard',
    description:
      'A responsive analytics dashboard with reusable, accessible chart components and a refined, data-dense layout.',
    image: '/projects/dashboard.png',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/udara-rajamanthri',
    demo: '#',
  },
  {
    title: 'E-Commerce Storefront',
    description:
      'A minimal, conversion-focused storefront featuring a polished product grid and a smooth mobile-first checkout flow.',
    image: '/projects/ecommerce.png',
    tech: ['React', 'REST APIs', 'CSS3'],
    github: 'https://github.com/udara-rajamanthri',
    demo: '#',
  },
  {
    title: 'UI Automation Suite',
    description:
      'An end-to-end UI testing suite that validates critical user journeys and reports pass/fail results at a glance.',
    image: '/projects/testing-suite.png',
    tech: ['Katalon Studio', 'UI Testing', 'Git'],
    github: 'https://github.com/udara-rajamanthri',
    demo: '#',
  },
]

export type Testimonial = {
  quote: string
  name: string
  title: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'A recommendation from a manager or colleague will appear here, highlighting collaboration, attention to detail, and engineering quality.',
    name: 'Future Recommendation',
    title: 'Engineering Manager',
  },
  {
    quote:
      'This space is reserved for kind words from teammates about delivery, communication, and craftsmanship across projects.',
    name: 'Future Recommendation',
    title: 'Product Designer',
  },
]
