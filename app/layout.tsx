import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AIChatbot from '@/components/AIChatbot'
import { AuthProvider } from '@/contexts/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HerWell - Your Personalized Health Companion',
  description: 'A comprehensive women\'s health tracking platform with AI-powered insights, cycle analysis, and personalized wellness support.',
  keywords: 'women health, period tracker, pregnancy, fertility, menstrual cycle, AI chatbot, health tips',
  authors: [{ name: 'HerWell Team' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="min-h-screen gradient-bg">
            {children}
          </div>
          <AIChatbot />
        </AuthProvider>
      </body>
    </html>
  )
}
