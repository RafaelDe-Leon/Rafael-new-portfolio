import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

// Use the same project IDs as in your detail page
const projects = [
  {
    id: 'project-1',
    title: 'E-commerce Platform',
    description:
      'A full-stack e-commerce platform built with Next.js, TypeScript, and Tailwind CSS.',
    image: '/placeholder.svg?height=600&width=800',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Prisma'],
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description:
      'A collaborative task management application that helps teams organize and track their projects.',
    image: '/placeholder.svg?height=600&width=800',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
  },
  {
    id: 'project-3',
    title: 'Weather Dashboard',
    description:
      'A weather dashboard that displays current and forecasted weather data for multiple locations.',
    image: '/placeholder.svg?height=600&width=800',
    tags: ['JavaScript', 'Chart.js', 'API Integration', 'CSS Grid'],
  },
  {
    id: 'project-4',
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing my projects and skills.',
    image: '/placeholder.svg?height=600&width=800',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
  },
]

export default function ProjectsPage() {
  return (
    <div className='container py-12 md:py-16 lg:py-24'>
      <div className='flex items-center gap-4 mb-8'>
        <Link href='/'>
          <Button variant='ghost' className='gap-1'>
            <ArrowLeft className='h-4 w-4' />
            Back to Home
          </Button>
        </Link>
      </div>

      <div className='space-y-4 mb-12'>
        <h1 className='text-4xl font-bold tracking-tighter'>Projects</h1>
        <p className='text-xl text-muted-foreground max-w-3xl'>
          Explore my featured projects in detail. Each project represents a unique challenge and
          solution.
        </p>
      </div>

      <div className='grid gap-8 md:gap-12'>
        {projects.map(project => (
          <Card key={project.id} className='overflow-hidden'>
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='relative h-64 md:h-full'>
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  fill
                  className='object-cover'
                />
              </div>
              <div className='flex flex-col p-6'>
                <div className='mb-4'>
                  <div className='flex flex-wrap gap-2 mb-2'>
                    {project.tags.map(tag => (
                      <Badge key={tag} variant='outline' className='text-xs'>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h2 className='text-2xl font-bold mb-2'>{project.title}</h2>
                  <p className='text-muted-foreground mb-4'>{project.description}</p>
                </div>
                <div className='mt-auto'>
                  <Link href={`/projects/${project.id}`}>
                    <Button>View Project Details</Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
