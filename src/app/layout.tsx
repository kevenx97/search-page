import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Footer } from '@/components'
import './globals.scss'

export const metadata: Metadata = {
  title: 'Search App',
  description: '',
}

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
