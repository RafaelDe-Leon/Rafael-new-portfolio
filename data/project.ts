export const projectsData = [
  {
    id: 'project-1',
    title: 'Pediatrich Speech Therapy',
    description:
      'A clean, responsive website designed for a licensed SLP to showcase services and make it easy for clients to get in touch. Focused on accessibility, clarity, and professional design.',
    image: '/images/SLP.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    demoUrl: 'https://v0-pediatric-speech-website.vercel.app/',
    githubUrl: 'https://github.com/yourusername/project',
    featured: true,
    date: 'January 2023',
    duration: '3 months',
    role: 'Full Stack Developer',
    client: 'Self-initiated',
    longDescription:
      'This e-commerce platform was built to provide a seamless shopping experience with a focus on performance and user experience. The application uses server components for improved SEO and initial load times, while leveraging client components for interactive elements. The database schema was designed to efficiently handle product variations, inventory management, and order processing.',
    challenges: [
      'Implementing a responsive design that works across all device sizes',
      'Building a secure authentication system with role-based access control',
      'Optimizing database queries for fast product searches and filtering',
      'Integrating with payment processors while ensuring PCI compliance',
    ],
    solutions: [
      'Used Tailwind CSS with custom breakpoints for a fully responsive design',
      'Implemented NextAuth.js with custom JWT handling for secure authentication',
      'Created optimized database indexes and caching strategies for performance',
      'Built a secure payment flow using Stripe Elements and webhooks',
    ],
    screenshots: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
    ],
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description:
      'A collaborative task management application that helps teams organize and track their projects. Built with React, Node.js, and MongoDB.',
    image: '/placeholder.svg?height=600&width=1200',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project',
    featured: true,
    date: 'March 2023',
    duration: '2 months',
    role: 'Frontend Developer',
    client: 'Startup',
    longDescription:
      'This task management application was designed to solve common collaboration challenges in team environments. It features real-time updates using Socket.io, drag-and-drop task organization, and customizable workflows to adapt to different team structures. The backend API was built with Node.js and Express, with MongoDB serving as the database.',
    challenges: [
      'Creating a real-time collaboration system that scales',
      'Designing an intuitive UI for complex task relationships',
      'Implementing drag-and-drop functionality across different devices',
      'Building a notification system for task updates',
    ],
    solutions: [
      'Used Socket.io with Redis adapter for scalable real-time updates',
      'Implemented a card-based UI with clear visual hierarchy',
      'Built custom drag-and-drop with touch support using React DnD',
      'Created a flexible notification system with user preferences',
    ],
    screenshots: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
    ],
  },
  {
    id: 'project-3',
    title: 'Weather Dashboard',
    description:
      'A weather dashboard that displays current and forecasted weather data for multiple locations. Uses the OpenWeather API and Chart.js for data visualization.',
    image: '/placeholder.svg?height=600&width=1200',
    tags: ['JavaScript', 'Chart.js', 'API Integration', 'CSS Grid'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project',
    featured: true,
    date: 'June 2023',
    duration: '1 month',
    role: 'Frontend Developer',
    client: 'Personal Project',
    longDescription:
      'The weather dashboard provides users with comprehensive weather information including current conditions, hourly forecasts, and 7-day predictions. The application features responsive charts built with Chart.js to visualize temperature trends, precipitation probability, and wind patterns. Location data is stored locally to provide quick access to frequently checked locations.',
    challenges: [
      'Handling API rate limits while providing comprehensive data',
      'Creating responsive data visualizations for different screen sizes',
      'Building an intuitive location search with autocomplete',
      'Optimizing performance for mobile devices',
    ],
    solutions: [
      'Implemented strategic API caching to minimize requests',
      'Used responsive Chart.js configurations with custom breakpoints',
      'Built a debounced search with geolocation API integration',
      'Applied code splitting and lazy loading for improved performance',
    ],
    screenshots: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
    ],
  },
  {
    id: 'project-4',
    title: 'Portfolio Website',
    description:
      'A personal portfolio website showcasing my projects and skills. Built with Next.js and Tailwind CSS.',
    image: '/placeholder.svg?height=600&width=1200',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project',
    featured: true,
    date: 'August 2023',
    duration: '2 weeks',
    role: 'Designer & Developer',
    client: 'Self',
    longDescription:
      'This portfolio website was designed to showcase my work and skills in a clean, modern interface. It features smooth animations powered by Framer Motion, dark/light mode support, and a fully responsive design that works across all device sizes. The site is built with accessibility in mind, ensuring that all users can navigate and interact with the content effectively.',
    challenges: [
      'Creating a unique design that stands out while remaining professional',
      'Implementing smooth animations without affecting performance',
      'Building a responsive layout that works on all devices',
      'Ensuring accessibility for all users',
    ],
    solutions: [
      'Developed a custom design system with unique color palette and typography',
      'Used Framer Motion with will-change hints for optimized animations',
      'Implemented a mobile-first approach with Tailwind CSS',
      'Added ARIA attributes and keyboard navigation throughout the site',
    ],
    screenshots: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
    ],
  },
  {
    id: 'project-4',
    title: 'Portfolio Website',
    description:
      'A personal portfolio website showcasing my projects and skills. Built with Next.js and Tailwind CSS.',
    image: '/placeholder.svg?height=600&width=1200',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project',
    featured: false,
    date: 'August 2023',
    duration: '2 weeks',
    role: 'Designer & Developer',
    client: 'Self',
    longDescription:
      'This portfolio website was designed to showcase my work and skills in a clean, modern interface. It features smooth animations powered by Framer Motion, dark/light mode support, and a fully responsive design that works across all device sizes. The site is built with accessibility in mind, ensuring that all users can navigate and interact with the content effectively.',
    challenges: [
      'Creating a unique design that stands out while remaining professional',
      'Implementing smooth animations without affecting performance',
      'Building a responsive layout that works on all devices',
      'Ensuring accessibility for all users',
    ],
    solutions: [
      'Developed a custom design system with unique color palette and typography',
      'Used Framer Motion with will-change hints for optimized animations',
      'Implemented a mobile-first approach with Tailwind CSS',
      'Added ARIA attributes and keyboard navigation throughout the site',
    ],
    screenshots: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
    ],
  },
]

export default projectsData
