import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NextUiProvider } from '@/providers/next-ui'
import Header from '@/components/global/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TodynnPJL',
  description: 'Lives e conteúdos exclusivo para membros',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ptbr">
      <body className={inter.className}>
        <div className="dark">
          <NextUiProvider>
            <Header />
            {children}
          </NextUiProvider>
        </div>
      </body>
    </html>
  )
}
