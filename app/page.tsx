import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Portfolio } from '@/components/portfolio'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { BackToTop } from '@/components/back-to-top'

export default function Home() {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
