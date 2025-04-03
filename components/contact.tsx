'use client'

import type React from 'react'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Send, CheckCircle, AlertCircle, Info } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Alert, AlertDescription } from '@/components/ui/alert'

// Subject to prefilled message mapping
const PREFILLED_MESSAGES = {
  'Resume Password Request':
    "Hello Rafael,\n\nI'm interested in viewing your resume. Could you please provide me with the password?\n\nThank you!",

  'Project Inquiry':
    "Hello Rafael,\n\nI'm reaching out regarding a potential project opportunity. I'd like to discuss the following project details:\n\n- Project type: \n- Timeline: \n- Budget range: \n\nLooking forward to your response!",

  'Job Opportunity':
    "Hello Rafael,\n\nI'm contacting you regarding a job opportunity at [Company Name]. Based on your portfolio, I believe you would be a great fit for our [Position] role.\n\nWould you be interested in discussing this opportunity further?\n\nBest regards,",

  'General Question':
    'Hello Rafael,\n\nI have a question regarding your work/experience:\n\n[Your question here]\n\nThank you for your time!',

  Other:
    "Hello Rafael,\n\nI'm reaching out because:\n\n[Your message here]\n\nLooking forward to connecting with you!",
}

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [devResponse, setDevResponse] = useState<string | null>(null)
  const [isDevelopment, setIsDevelopment] = useState(false)

  // Check for development mode after component mounts (client-side only)
  useEffect(() => {
    // Only run on the client
    const isDevMode =
      process.env.NODE_ENV === 'development' ||
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1'

    setIsDevelopment(isDevMode)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleSubjectChange = (value: string) => {
    setFormState(prev => ({
      ...prev,
      subject: value,
      // Set prefilled message when subject changes
      message: PREFILLED_MESSAGES[value as keyof typeof PREFILLED_MESSAGES] || '',
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    setDevResponse(null)

    try {
      // Send data to our API route
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send email')
      }

      // Check if we're in development mode
      if (data.development) {
        setDevResponse(data.message || 'Email would be sent in production')
      }

      // Success
      setIsSubmitted(true)
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (err: any) {
      console.error('Error sending email:', err)
      setError(err.message || 'Failed to send email. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id='contact' className='py-20 bg-muted/30'>
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center mb-12'>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
            CONTACT ME
          </h2>
          <div className='w-20 h-1 bg-primary mx-auto'></div>
          <p className='text-muted-foreground max-w-[700px] mx-auto mt-4'>
            Feel free to reach out with any questions, project inquiries, or to request my resume
            password.
          </p>
        </div>

        {isDevelopment && (
          <Alert className='max-w-4xl mx-auto mb-8 bg-blue-500/10 text-blue-500 border-blue-500/20'>
            <Info className='h-4 w-4' />
            <AlertDescription>
              Development mode: Emails will be logged to the console instead of being sent.
            </AlertDescription>
          </Alert>
        )}

        <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
          <Card className='border-0 shadow-lg h-auto'>
            <CardContent className='p-6'>
              <div className='space-y-6'>
                <div className='flex items-center gap-3'>
                  <div className='bg-primary/10 p-3 rounded-full'>
                    <Mail className='h-6 w-6 text-primary' />
                  </div>
                  <div>
                    <h3 className='font-medium'>Email</h3>
                    <p className='text-muted-foreground'>rdmail88@gmail.com</p>
                  </div>
                </div>

                <div className='border-t pt-6'>
                  <h3 className='font-medium mb-2'>Resume Access</h3>
                  <p className='text-sm text-muted-foreground'>
                    My resume is password-protected. To request access, please send me an email or
                    use the contact form with the subject "Resume Password Request".
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div>
            {isSubmitted ? (
              <div className='h-full flex items-center justify-center'>
                <div className='text-center space-y-4'>
                  <div className='flex justify-center'>
                    <CheckCircle className='h-16 w-16 text-primary' />
                  </div>
                  <h3 className='text-xl font-medium'>Message Sent!</h3>
                  <p className='text-muted-foreground'>
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  {devResponse && (
                    <Alert className='mt-4 bg-blue-500/10 text-blue-500 border-blue-500/20'>
                      <Info className='h-4 w-4' />
                      <AlertDescription>{devResponse}</AlertDescription>
                    </Alert>
                  )}
                  <Button variant='outline' onClick={() => setIsSubmitted(false)} className='mt-4'>
                    Send Another Message
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className='space-y-4'>
                {error && (
                  <Alert variant='destructive'>
                    <AlertCircle className='h-4 w-4' />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                  <div className='space-y-2'>
                    <Label htmlFor='name'>Name</Label>
                    <Input
                      id='name'
                      name='name'
                      placeholder='Your name'
                      value={formState.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='email'>Email</Label>
                    <Input
                      id='email'
                      name='email'
                      type='email'
                      placeholder='Your email'
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='subject'>Subject</Label>
                  <Select onValueChange={handleSubjectChange} value={formState.subject} required>
                    <SelectTrigger id='subject'>
                      <SelectValue placeholder='Select a subject' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='Resume Password Request'>
                        Resume Password Request
                      </SelectItem>
                      <SelectItem value='Project Inquiry'>Project Inquiry</SelectItem>
                      <SelectItem value='Job Opportunity'>Job Opportunity</SelectItem>
                      <SelectItem value='General Question'>General Question</SelectItem>
                      <SelectItem value='Other'>Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className='space-y-2'>
                  <div className='flex justify-between'>
                    <Label htmlFor='message'>Message</Label>
                    {formState.subject && formState.message && (
                      <Button
                        type='button'
                        variant='ghost'
                        size='sm'
                        className='text-xs h-6 px-2'
                        onClick={() => setFormState(prev => ({ ...prev, message: '' }))}>
                        Clear message
                      </Button>
                    )}
                  </div>
                  <Textarea
                    id='message'
                    name='message'
                    placeholder='Your message'
                    value={formState.message}
                    onChange={handleChange}
                    className='min-h-[150px] sm:min-h-[200px]'
                    required
                  />
                </div>

                <Button type='submit' className='w-full' disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className='flex items-center gap-2'>
                      <span className='h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent' />
                      Sending...
                    </span>
                  ) : (
                    <span className='flex items-center gap-2'>
                      <Send className='h-4 w-4' />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
