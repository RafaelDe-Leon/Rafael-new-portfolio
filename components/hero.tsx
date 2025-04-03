import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { ResumeHandler } from './resume-handler'

export function Hero() {
  return (
    <section className='relative overflow-hidden py-20 md:py-32'>
      <div className='container px-4 md:px-6'>
        <div className='grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2'>
          <div className='flex flex-col justify-center space-y-4'>
            <div className='space-y-2'>
              <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                Rafael De Leon
              </h1>
              <p className='text-xl text-primary font-semibold tracking-wide'>
                FULL STACK DEVELOPER
              </p>
              <p className='max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4'>
                Building innovative web applications with cutting-edge design and robust
                functionality.
              </p>
            </div>
            <div className='flex flex-col gap-2 min-[400px]:flex-row'>
              <Link href='#portfolio'>
                <Button className='px-8 bg-primary hover:bg-primary/90'>View My Work</Button>
              </Link>
              <ResumeHandler
                variant='outline'
                className='px-8 border-primary text-primary hover:bg-primary/10'
              />
            </div>
          </div>
          <div className='flex items-center justify-center mt-8 lg:mt-0'>
            <div className='relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] overflow-hidden rounded-full border-4 border-primary/20'>
              <Image
                src='/images/me.png'
                alt='Rafael De Leon'
                fill
                className='object-cover'
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className='absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl' />
      <div className='absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl' />
    </section>
  )
}
