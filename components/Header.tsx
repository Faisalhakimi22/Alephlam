'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, BookOpen, Users, Video, GraduationCap } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Our Courses', href: '/courses', icon: BookOpen },
    { name: 'Book Course', href: '/book-course', icon: GraduationCap },
    { name: 'AlephLam Kids', href: '/alephlam-kids', icon: Users },
    { name: 'Video Courses', href: '/video-courses', icon: Video },
  ]

  return (
    <header className={`sticky top-0 z-[100] transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-sm shadow-lg border-b border-gray-200/30' 
        : 'bg-white/60 shadow-none border-b border-transparent'
    }`}>
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24 lg:h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo_enlarged.png"
              alt="AlephLam Logo"
              width={120}
              height={120}
              className="h-24 sm:h-32 lg:h-40 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center text-secondary hover:text-primary transition-colors duration-200 font-medium text-sm lg:text-base"
              >
                <item.icon className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                <span className="hidden lg:inline">{item.name}</span>
                <span className="lg:hidden">{item.name.split(' ')[0]}</span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link href="/contact" className="btn-primary text-xs lg:text-sm px-3 lg:px-4 py-2">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-secondary hover:text-primary transition-colors duration-200 p-2"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 transition-all duration-300 ${
              isScrolled 
                ? 'bg-transparent backdrop-blur-sm border-t border-gray-200/30' 
                : 'bg-transparent border-t border-gray-200/30'
            }`}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center px-3 py-2 text-secondary hover:text-primary hover:bg-accent rounded-md transition-colors duration-200 font-medium text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-4 h-4 mr-3" />
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link href="/contact" className="btn-primary w-full text-sm py-2">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
