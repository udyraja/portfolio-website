import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
})

const siteUrl = 'https://udara-rajamanthri.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Udara Rajamanthri — Front-End Engineer & UI Specialist',
    template: '%s · Udara Rajamanthri',
  },
  description:
    'Front-End Engineer with experience building responsive, user-friendly web applications and ensuring quality through UI automation testing. Passionate about creating seamless digital experiences.',
  keywords: [
    'Udara Rajamanthri',
    'Front-End Engineer',
    'UI Specialist',
    'React Developer',
    'TypeScript',
    'UI Automation Testing',
    'Web Developer Portfolio',
  ],
  authors: [{ name: 'Udara Rajamanthri' }],
  creator: 'Udara Rajamanthri',
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Udara Rajamanthri — Front-End Engineer & UI Specialist',
    description:
      'Building responsive, accessible web experiences with a focus on quality and seamless interactions.',
    siteName: 'Udara Rajamanthri',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Udara Rajamanthri — Front-End Engineer & UI Specialist',
    description:
      'Building responsive, accessible web experiences with a focus on quality and seamless interactions.',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbf8f4' },
    { media: '(prefers-color-scheme: dark)', color: '#26211f' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
