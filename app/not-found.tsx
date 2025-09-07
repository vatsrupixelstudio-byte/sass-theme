import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Frown, ArrowRight } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import FloatingElements from '@/components/floating-elements'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 overflow-hidden">
      <FloatingElements />
      <Navigation />
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-12">
        <Frown className="w-24 h-24 text-blue-600 dark:text-blue-400 mb-8 animate-bounce" />
        <h1 className="text-6xl font-bold text-slate-900 dark:text-white mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-slate-800 dark:text-slate-200 mb-6">Page Not Found</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-md">
          Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link href="/">
          <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            Go to Homepage
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </main>
      <Footer />
    </div>
  )
}
