import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

import projectsData from '@/data/project'

export function Portfolio() {
  const projects = projectsData
  const featuredProjects = projectsData.filter(project => project.featured)

  console.log(featuredProjects)

  return (
    <section id='portfolio' className='py-20 bg-muted/30'>
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center mb-12'>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>PORTFOLIO</h2>
          <div className='w-20 h-1 bg-primary mx-auto'></div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10'>
          {featuredProjects.map(project => (
            <Link href={`/projects/${project.id}`} key={project.id} className='group'>
              <Card className='overflow-hidden border-0 bg-background shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1'>
                <div className='relative w-full pt-[56.25%]'>
                  <div className='absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10'></div>
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    fill
                    className='object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                </div>
                <CardContent className='p-6'>
                  <h3 className='text-xl font-bold mb-2 group-hover:text-primary transition-colors'>
                    {project.title}
                  </h3>
                  <p className='text-muted-foreground'>{project.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className='mt-12 text-center'>
          <Link
            href='/projects'
            className='inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90'>
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
