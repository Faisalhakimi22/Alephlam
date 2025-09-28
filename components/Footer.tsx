'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    mainPages: [
      { name: 'Our Courses', href: '/courses' },
      { name: 'Book Course', href: '/book-course' },
      { name: 'AlephLam Kids', href: '/alephlam-kids' },
      { name: 'Video Courses', href: '/video-courses' },
    ],
    courses: [
      { name: 'Nouraniyyah', href: '#' },
      { name: 'Noorul-Bayaan', href: '#' },
      { name: 'Tajweed Intensive', href: '#' },
      { name: 'Hifz-Al Quran', href: '#' },
      { name: 'Reading Correction', href: '#' },
    ],
    arabic: [
      { name: 'Madina Arabic', href: '#' },
      { name: 'Bayna Yadaik', href: '#' },
      { name: 'Conversational Arabic', href: '#' },
      { name: 'Grammar Focus', href: '#' },
    ],
    children: [
      { name: 'Alif Ba for Children', href: '#' },
      { name: 'Tajweed for Kids', href: '#' },
      { name: 'Hifz for Children', href: '#' },
      { name: 'Learn Prayer', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Teachers', href: '/teachers' },
      { name: 'Testimonials', href: '/testimonials' },
      { name: 'Contact', href: '/contact' },
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'FAQ', href: '/faq' },
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ]

  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="py-6 sm:py-8 lg:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
            {/* Logo and Description */}
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="flex items-center mb-3 sm:mb-4 lg:mb-6">
                <Link href="/" className="flex items-center">
                  <div className="bg-white rounded-lg p-2 sm:p-3 lg:p-4 shadow-lg">
                    <Image
                      src="/logo_enlarged.png"
                      alt="AlephLam Logo"
                      width={80}
                      height={80}
                      className="h-16 sm:h-20 lg:h-24 w-auto"
                    />
                  </div>
                </Link>
              </div>
              <p className="text-gray-300 mb-3 sm:mb-4 lg:mb-6 leading-relaxed text-xs sm:text-sm lg:text-base">
                Professional Islamic education platform offering Quran and Arabic learning for the whole family. 
                Learn in a supportive, brotherly atmosphere with qualified teachers.
              </p>
              <div className="space-y-1 sm:space-y-2">
                <div className="flex items-center text-gray-300 text-xs sm:text-sm lg:text-base">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  alephlam03@gmail.com
                </div>
                <div className="flex items-center text-gray-300 text-xs sm:text-sm lg:text-base">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  +49 159 022 97532
                </div>
                <div className="flex items-center text-gray-300 text-xs sm:text-sm lg:text-base">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  Online Classes via Zoom
                </div>
              </div>
            </div>

            {/* Main Pages */}
            <div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 lg:mb-4 text-primary">Main Pages</h3>
              <ul className="space-y-1 sm:space-y-2">
                {footerLinks.mainPages.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200 text-xs sm:text-sm lg:text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quran Courses */}
            <div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 lg:mb-4 text-primary">Quran Courses</h3>
              <ul className="space-y-1 sm:space-y-2">
                {footerLinks.courses.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200 text-xs sm:text-sm lg:text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Arabic Courses */}
            <div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 lg:mb-4 text-primary">Arabic Courses</h3>
              <ul className="space-y-1 sm:space-y-2">
                {footerLinks.arabic.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200 text-xs sm:text-sm lg:text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Children Courses */}
            <div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 lg:mb-4 text-primary">Children</h3>
              <ul className="space-y-1 sm:space-y-2">
                {footerLinks.children.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200 text-xs sm:text-sm lg:text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company & Support */}
            <div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 lg:mb-4 text-primary">Company</h3>
              <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200 text-xs sm:text-sm lg:text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 lg:mb-4 text-primary">Support</h3>
              <ul className="space-y-1 sm:space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200 text-xs sm:text-sm lg:text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-6 sm:mt-8 lg:mt-12 pt-4 sm:pt-6 lg:pt-8 border-t border-gray-700">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-1 sm:mb-2">Stay Updated</h3>
                <p className="text-gray-300 text-xs sm:text-sm lg:text-base">
                  Subscribe to our newsletter for course updates and Islamic education tips.
                </p>
              </div>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-l-lg border-0 focus:ring-2 focus:ring-primary text-gray-900 text-xs sm:text-sm"
                />
                <button className="bg-primary hover:bg-primary-dark px-4 sm:px-6 py-2 sm:py-3 rounded-r-lg transition-colors duration-200 text-xs sm:text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Social Media & Copyright */}
          <div className="mt-4 sm:mt-6 lg:mt-8 pt-4 sm:pt-6 lg:pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                ))}
              </div>
              <div className="text-gray-300 text-xs sm:text-sm text-center md:text-right">
                © {currentYear} AlephLam. All rights reserved. | Online Islamic Education Platform
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
