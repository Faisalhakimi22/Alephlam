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
      { name: 'About Us', href: '#' },
      { name: 'Our Teachers', href: '#' },
      { name: 'Testimonials', href: '#' },
      { name: 'Contact', href: '/contact' },
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'FAQ', href: '#' },
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
      <div className="container-custom">
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <Link href="/" className="flex items-center">
                  <div className="bg-white rounded-lg p-4 shadow-lg">
                    <Image
                      src="/logo_enlarged.png"
                      alt="AlephLam Logo"
                      width={180}
                      height={180}
                      className="h-48 w-auto"
                    />
                  </div>
                </Link>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Professional Islamic education platform offering Quran and Arabic learning for the whole family. 
                Learn in a supportive, brotherly atmosphere with qualified teachers.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-3" />
                  info@alephlam.com
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-3" />
                  +49 123 456 789
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-3" />
                  Online Classes via Zoom
                </div>
              </div>
            </div>

            {/* Main Pages */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Main Pages</h3>
              <ul className="space-y-2">
                {footerLinks.mainPages.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quran Courses */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Quran Courses</h3>
              <ul className="space-y-2">
                {footerLinks.courses.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Arabic Courses */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Arabic Courses</h3>
              <ul className="space-y-2">
                {footerLinks.arabic.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Children Courses */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Children</h3>
              <ul className="space-y-2">
                {footerLinks.children.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company & Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Company</h3>
              <ul className="space-y-2 mb-6">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-lg font-semibold mb-4 text-primary">Support</h3>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
                <p className="text-gray-300">
                  Subscribe to our newsletter for course updates and Islamic education tips.
                </p>
              </div>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:ring-2 focus:ring-primary text-gray-900"
                />
                <button className="bg-primary hover:bg-primary-dark px-6 py-3 rounded-r-lg transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Social Media & Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <div className="text-gray-300 text-sm">
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
