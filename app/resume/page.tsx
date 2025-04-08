import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
export default function ResumePage() {
  const timelineData = [
    {
      year: '2023',
      title: 'Senior Developer at XYZ Corp',
      description: 'Led a team of developers to build scalable web applications.',
    },
    {
      year: '2021',
      title: 'Frontend Developer at ABC Inc',
      description: 'Developed responsive user interfaces for e-commerce platforms.',
    },
    {
      year: '2019',
      title: 'Intern at Tech Solutions',
      description: 'Assisted in developing internal tools and gained hands-on experience.',
    },
  ]

  return (
    <>
      <Navbar />
      <section id='portfolio' className='py-20 bg-muted/30'>
        <div className='container px-4 md:px-6'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center mb-12'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              Work Experience
            </h2>
            <div className='w-20 h-1 bg-primary mx-auto'></div>
          </div>
          <div className='space-y-8'>
            {timelineData.map((item, index) => (
              <div key={index} className='flex flex-col space-y-2'>
                <h3 className='text-xl font-semibold'>{item.year}</h3>
                <p className='text-lg font-medium'>{item.title}</p>
                <p className='text-muted-foreground'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
