import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { AudioProvider } from '@/contexts/AudioContext'
import GlobalAudioPlayer from '@/components/GlobalAudioPlayer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AlephLam - Professional Islamic Education Platform',
  description: 'Learn Quran and Arabic online with professional teachers in a supportive, family-friendly environment. Join our comprehensive courses for all ages and levels.',
  keywords: 'Quran learning, Arabic courses, Islamic education, online classes, Tajweed, Hifz, children education',
  authors: [{ name: 'AlephLam' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  },
  manifest: '/site.webmanifest'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen`}>
        <AudioProvider audioSrc="/videoplayback-2_X2bhBKoZ.mp3">
          <Header />
          {children}
          <GlobalAudioPlayer />
        </AudioProvider>
      </body>
    </html>
  )
}
