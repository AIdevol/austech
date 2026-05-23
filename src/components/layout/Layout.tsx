import type { ReactNode } from 'react'
import { PageTransition } from '@/components/animations/PageTransition'
import { Chatbot } from '@/components/chatbot/Chatbot'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { ScrollToHash } from '@/components/layout/ScrollToHash'
import { TopBar } from '@/components/layout/TopBar'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <ScrollToHash />
      <TopBar />
      <Header />
      <main className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}
