'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='sticky top-0 z-50 w-full border-b border-primary/10 bg-background/80 backdrop-blur-sm'>
      <div className='container flex h-16 items-center justify-between'>
        <Link href='/' className='font-bold text-xl'>
          Rafael <span className='text-primary'>De Leon</span>
        </Link>

        {/* Mobile menu button */}
        <Button
          variant='ghost'
          size='icon'
          className='md:hidden'
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
          <span className='sr-only'>Toggle menu</span>
        </Button>

        {/* Desktop navigation */}
        <nav className='hidden md:flex items-center gap-6'>
          <Link href='/' className='text-sm font-medium hover:text-primary transition-colors'>
            Home
          </Link>
          <Link
            href='#portfolio'
            className='text-sm font-medium hover:text-primary transition-colors'>
            Portfolio
          </Link>
          <Link href='#about' className='text-sm font-medium hover:text-primary transition-colors'>
            About
          </Link>
          <Link href='#about' className='text-sm font-medium hover:text-primary transition-colors'>
            Resume
          </Link>

          <Link
            href='#contact'
            className='text-sm font-medium hover:text-primary transition-colors'>
            Contact
          </Link>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className='absolute top-16 left-0 right-0 bg-background border-b border-primary/10 md:hidden'>
            <nav className='flex flex-col p-4 gap-4'>
              <Link
                href='/'
                className='text-sm font-medium hover:text-primary transition-colors'
                onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link
                href='#portfolio'
                className='text-sm font-medium hover:text-primary transition-colors'
                onClick={() => setIsMenuOpen(false)}>
                Portfolio
              </Link>
              <Link
                href='#about'
                className='text-sm font-medium hover:text-primary transition-colors'
                onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link
                href='#contact'
                className='text-sm font-medium hover:text-primary transition-colors'
                onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
