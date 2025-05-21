import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BackToTop } from '@/components/back-to-top'

import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, Github, ExternalLink, Calendar, Clock } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

import { projectsData } from '@/data/project'

// Your existing projects data array
// const projects = [
//   {
//     id: 'project-1',
//     title: 'Pediatrich Speech Therapy',
//     description:
//       'A full-stack e-commerce platform built with Next.js, TypeScript, and Tailwind CSS. Features include product listings, cart functionality, user authentication, and payment processing.',
//     image: '/placeholder.svg?height=600&width=1200',
//     tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Prisma'],
//     demoUrl: 'https://example.com',
//     githubUrl: 'https://github.com/yourusername/project',
//     featured: true,
//     date: 'January 2023',
//     duration: '3 months',
//     role: 'Full Stack Developer',
//     client: 'Self-initiated',
//     longDescription:
//       'This e-commerce platform was built to provide a seamless shopping experience with a focus on performance and user experience. The application uses server components for improved SEO and initial load times, while leveraging client components for interactive elements. The database schema was designed to efficiently handle product variations, inventory management, and order processing.',
//     challenges: [
//       'Implementing a responsive design that works across all device sizes',
//       'Building a secure authentication system with role-based access control',
//       'Optimizing database queries for fast product searches and filtering',
//       'Integrating with payment processors while ensuring PCI compliance',
//     ],
//     solutions: [
//       'Used Tailwind CSS with custom breakpoints for a fully responsive design',
//       'Implemented NextAuth.js with custom JWT handling for secure authentication',
//       'Created optimized database indexes and caching strategies for performance',
//       'Built a secure payment flow using Stripe Elements and webhooks',
//     ],
//     screenshots: [
//       '/placeholder.svg?height=400&width=600',
//       '/placeholder.svg?height=400&width=600',
//       '/placeholder.svg?height=400&width=600',
//     ],
//   },
//   {
//     id: 'project-2',
//     title: 'Task Management App',
//     description:
//       'A collaborative task management application that helps teams organize and track their projects. Built with React, Node.js, and MongoDB.',
//     image: '/placeholder.svg?height=600&width=1200',
//     tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
//     demoUrl: 'https://example.com',
//     githubUrl: 'https://github.com/yourusername/project',
//     featured: true,
//     date: 'March 2023',
//     duration: '2 months',
//     role: 'Frontend Developer',
//     client: 'Startup',
//     longDescription:
//       'This task management application was designed to solve common collaboration challenges in team environments. It features real-time updates using Socket.io, drag-and-drop task organization, and customizable workflows to adapt to different team structures. The backend API was built with Node.js and Express, with MongoDB serving as the database.',
//     challenges: [
//       'Creating a real-time collaboration system that scales',
//       'Designing an intuitive UI for complex task relationships',
//       'Implementing drag-and-drop functionality across different devices',
//       'Building a notification system for task updates',
//     ],
//     solutions: [
//       'Used Socket.io with Redis adapter for scalable real-time updates',
//       'Implemented a card-based UI with clear visual hierarchy',
//       'Built custom drag-and-drop with touch support using React DnD',
//       'Created a flexible notification system with user preferences',
//     ],
//     screenshots: [
//       '/placeholder.svg?height=400&width=600',
//       '/placeholder.svg?height=400&width=600',
//       '/placeholder.svg?height=400&width=600',
//     ],
//   },
//   {
//     id: 'project-3',
//     title: 'Weather Dashboard',
//     description:
//       'A weather dashboard that displays current and forecasted weather data for multiple locations. Uses the OpenWeather API and Chart.js for data visualization.',
//     image: '/placeholder.svg?height=600&width=1200',
//     tags: ['JavaScript', 'Chart.js', 'API Integration', 'CSS Grid'],
//     demoUrl: 'https://example.com',
//     githubUrl: 'https://github.com/yourusername/project',
//     featured: false,
//     date: 'June 2023',
//     duration: '1 month',
//     role: 'Frontend Developer',
//     client: 'Personal Project',
//     longDescription:
//       'The weather dashboard provides users with comprehensive weather information including current conditions, hourly forecasts, and 7-day predictions. The application features responsive charts built with Chart.js to visualize temperature trends, precipitation probability, and wind patterns. Location data is stored locally to provide quick access to frequently checked locations.',
//     challenges: [
//       'Handling API rate limits while providing comprehensive data',
//       'Creating responsive data visualizations for different screen sizes',
//       'Building an intuitive location search with autocomplete',
//       'Optimizing performance for mobile devices',
//     ],
//     solutions: [
//       'Implemented strategic API caching to minimize requests',
//       'Used responsive Chart.js configurations with custom breakpoints',
//       'Built a debounced search with geolocation API integration',
//       'Applied code splitting and lazy loading for improved performance',
//     ],
//     screenshots: [
//       '/placeholder.svg?height=400&width=600',
//       '/placeholder.svg?height=400&width=600',
//       '/placeholder.svg?height=400&width=600',
//     ],
//   },
//   {
//     id: 'project-4',
//     title: 'Portfolio Website',
//     description:
//       'A personal portfolio website showcasing my projects and skills. Built with Next.js and Tailwind CSS.',
//     image: '/placeholder.svg?height=600&width=1200',
//     tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
//     demoUrl: 'https://example.com',
//     githubUrl: 'https://github.com/yourusername/project',
//     featured: false,
//     date: 'August 2023',
//     duration: '2 weeks',
//     role: 'Designer & Developer',
//     client: 'Self',
//     longDescription:
//       'This portfolio website was designed to showcase my work and skills in a clean, modern interface. It features smooth animations powered by Framer Motion, dark/light mode support, and a fully responsive design that works across all device sizes. The site is built with accessibility in mind, ensuring that all users can navigate and interact with the content effectively.',
//     challenges: [
//       'Creating a unique design that stands out while remaining professional',
//       'Implementing smooth animations without affecting performance',
//       'Building a responsive layout that works on all devices',
//       'Ensuring accessibility for all users',
//     ],
//     solutions: [
//       'Developed a custom design system with unique color palette and typography',
//       'Used Framer Motion with will-change hints for optimized animations',
//       'Implemented a mobile-first approach with Tailwind CSS',
//       'Added ARIA attributes and keyboard navigation throughout the site',
//     ],
//     screenshots: [
//       '/placeholder.svg?height=400&width=600',
//       '/placeholder.svg?height=400&width=600',
//       '/placeholder.svg?height=400&width=600',
//     ],
//   },
// ]

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  // Await the entire params object
  const resolvedParams = await params
  const project = projectsData.find(p => p.id === resolvedParams.id)

  if (!project) {
    notFound()
  }

  return (
    <div className='min-h-screen bg-background text-foreground'>
      <Navbar />
      <div className='container py-12 md:py-16'>
        <Link href='/projects' className='inline-flex items-center mb-8'>
          <Button variant='ghost' className='gap-1'>
            <ArrowLeft className='h-4 w-4' />
            Back to Projects
          </Button>
        </Link>

        <div className='grid gap-8 lg:grid-cols-3'>
          <div className='lg:col-span-2 space-y-8'>
            <div>
              <div className='flex flex-wrap gap-2 mb-4'>
                {project.tags.map(tag => (
                  <Badge key={tag} variant='secondary'>
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className='text-4xl font-bold tracking-tight mb-4'>{project.title}</h1>
              <p className='text-xl text-muted-foreground'>{project.description}</p>
            </div>

            <div className='relative aspect-video overflow-hidden rounded-lg'>
              <Image
                src={project.image || '/placeholder.svg'}
                alt={project.title}
                fill
                className='object-cover'
                priority
              />
            </div>

            <div className='space-y-6'>
              <h2 className='text-2xl font-semibold'>Project Overview</h2>
              <p className='text-muted-foreground'>{project.longDescription}</p>
            </div>

            <div className='space-y-6'>
              <h2 className='text-2xl font-semibold'>Challenges</h2>
              <ul className='space-y-2'>
                {project.challenges.map((challenge, index) => (
                  <li key={index} className='flex gap-2'>
                    <span className='text-primary'>•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className='space-y-6'>
              <h2 className='text-2xl font-semibold'>Solutions</h2>
              <ul className='space-y-2'>
                {project.solutions.map((solution, index) => (
                  <li key={index} className='flex gap-2'>
                    <span className='text-primary'>•</span>
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className='space-y-6'>
              <h2 className='text-2xl font-semibold'>Screenshots</h2>
              <div className='grid gap-4 sm:grid-cols-2'>
                {project.screenshots.map((screenshot, index) => (
                  <div key={index} className='relative aspect-video rounded-lg overflow-hidden'>
                    <Image
                      src={screenshot || '/placeholder.svg'}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className='object-cover'
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='space-y-8'>
            <div className='rounded-lg border p-6 space-y-6'>
              <div className='space-y-4'>
                <h3 className='text-xl font-semibold'>Project Details</h3>
                <Separator />

                <div className='grid grid-cols-2 gap-4'>
                  <div className='space-y-1'>
                    <p className='text-sm text-muted-foreground'>Date</p>
                    <div className='flex items-center gap-2'>
                      <Calendar className='h-4 w-4 text-muted-foreground' />
                      <p>{project.date}</p>
                    </div>
                  </div>

                  <div className='space-y-1'>
                    <p className='text-sm text-muted-foreground'>Duration</p>
                    <div className='flex items-center gap-2'>
                      <Clock className='h-4 w-4 text-muted-foreground' />
                      <p>{project.duration}</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className='space-y-1'>
                  <p className='text-sm text-muted-foreground'>Role</p>
                  <p>{project.role}</p>
                </div>

                <div className='space-y-1'>
                  <p className='text-sm text-muted-foreground'>Client</p>
                  <p>{project.client}</p>
                </div>
              </div>

              <div className='space-y-4'>
                <h3 className='text-xl font-semibold'>Links</h3>
                <div className='space-y-3'>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 text-primary hover:underline'>
                      <ExternalLink className='h-4 w-4' />
                      Live Demo
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 text-primary hover:underline'>
                      <Github className='h-4 w-4' />
                      View Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className='rounded-lg border p-6 space-y-4'>
              <h3 className='text-xl font-semibold'>Need a similar project?</h3>
              <p className='text-muted-foreground'>
                I'm available for freelance projects and full-time opportunities.
              </p>
              <Link href='/contact'>
                <Button className='w-full mt-6'>Get in Touch</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <BackToTop />
      <Footer />
    </div>
  )
}
