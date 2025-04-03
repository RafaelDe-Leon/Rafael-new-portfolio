import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Contact } from '@/components/contact'

export default function ContactPage() {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <Navbar />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
