import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function ProjectNotFound() {
  return (
    <div className='container flex flex-col items-center justify-center py-24 text-center'>
      <h1 className='text-4xl font-bold mb-4'>Project Not Found</h1>
      <p className='text-xl text-muted-foreground mb-8'>
        Sorry, the project you're looking for doesn't exist or has been removed.
      </p>
      <Link href='/'>
        <Button className='gap-2'>
          <ArrowLeft className='h-4 w-4' />
          Back to Home
        </Button>
      </Link>
    </div>
  )
}
