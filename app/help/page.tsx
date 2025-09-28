'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Search, BookOpen, Users, Clock, CreditCard, Globe, MessageCircle, Phone, Mail, HelpCircle, ChevronRight } from 'lucide-react'
import Footer from '@/components/Footer'

const HelpPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [searchQuery, setSearchQuery] = useState('')

  const helpCategories = [
    {
      title: 'Getting Started',
      icon: BookOpen,
      description: 'Learn how to begin your journey with AlephLam',
      articles: [
        'How to create an account',
        'How to book your first class',
        'What to expect in your first lesson',
        'Setting up your learning environment'
      ]
    },
    {
      title: 'Technical Support',
      icon: Globe,
      description: 'Technical issues and platform guidance',
      articles: [
        'Zoom setup and troubleshooting',
        'Audio and video problems',
        'Internet connection issues',
        'Mobile app usage'
      ]
    },
    {
      title: 'Course Information',
      icon: Users,
      description: 'Everything about our courses and programs',
      articles: [
        'Course schedules and timings',
        'How to switch between courses',
        'Progress tracking and assessments',
        'Course materials and resources'
      ]
    },
    {
      title: 'Account & Billing',
      icon: CreditCard,
      description: 'Account management and payment questions',
      articles: [
        'Payment methods and billing',
        'Subscription management',
        'Refund and cancellation policy',
        'Account settings and preferences'
      ]
    },
    {
      title: 'Class Management',
      icon: Clock,
      description: 'Scheduling and class-related questions',
      articles: [
        'How to reschedule classes',
        'Missed class policies',
        'Teacher assignments',
        'Class recordings and materials'
      ]
    },
    {
      title: 'Contact Support',
      icon: MessageCircle,
      description: 'Get direct help from our support team',
      articles: [
        'Live chat support',
        'Email support',
        'Phone support',
        'Emergency contact information'
      ]
    }
  ]

  const quickActions = [
    {
      title: 'Book a Class',
      description: 'Schedule your next lesson',
      icon: Clock,
      href: '/book-course',
      color: 'from-primary to-primary-light'
    },
    {
      title: 'Contact Us',
      description: 'Get help from our team',
      icon: MessageCircle,
      href: '/contact',
      color: 'from-secondary to-secondary-light'
    },
    {
      title: 'View Courses',
      description: 'Explore our programs',
      icon: BookOpen,
      href: '/courses',
      color: 'from-accent to-accent-light'
    },
    {
      title: 'FAQ',
      description: 'Find quick answers',
      icon: HelpCircle,
      href: '/faq',
      color: 'from-primary-dark to-primary'
    }
  ]

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: 'Available 24/7',
      action: 'Start Chat'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us your questions via email',
      availability: 'Response within 24 hours',
      action: 'Send Email'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      availability: 'Mon-Fri 9AM-8PM CET',
      action: 'Call Now'
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary-light to-secondary-dark text-white py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
              Help <span className="text-primary">Center</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed mb-4 sm:mb-6 md:mb-8 px-2 sm:px-0">
              Find answers to your questions and get the support you need for your learning journey. 
              We're here to help you succeed.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, courses, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 sm:py-4 rounded-lg border-0 focus:ring-2 focus:ring-primary text-gray-900 placeholder-gray-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="bg-white py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-6 sm:mb-8 lg:mb-12 text-center"
          >
            Quick <span className="text-gradient">Actions</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {quickActions.map((action, index) => (
              <motion.a
                key={action.title}
                href={action.href}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="glass-card p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${action.color} rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-secondary mb-2">{action.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">{action.description}</p>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary mx-auto mt-2 sm:mt-3 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="bg-accent py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-6 sm:mb-8 lg:mb-12 text-center"
          >
            Help <span className="text-gradient">Categories</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {helpCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="glass-card p-4 sm:p-6 lg:p-8"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                  <category.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-secondary mb-2 sm:mb-3">{category.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base mb-3 sm:mb-4">{category.description}</p>
                <ul className="space-y-1 sm:space-y-2">
                  {category.articles.map((article, articleIndex) => (
                    <li key={articleIndex} className="flex items-center text-gray-700 text-xs sm:text-sm">
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-primary mr-2 flex-shrink-0" />
                      <span>{article}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="bg-white py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-6 sm:mb-8 lg:mb-12 text-center"
          >
            Contact <span className="text-gradient">Support</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="glass-card p-4 sm:p-6 lg:p-8 text-center"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <method.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-secondary mb-2 sm:mb-3">{method.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base mb-2 sm:mb-3">{method.description}</p>
                <p className="text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">{method.availability}</p>
                <a 
                  href="/contact" 
                  className="btn bg-primary hover:bg-primary-dark text-white text-xs sm:text-sm py-2 sm:py-2.5 px-3 sm:px-4"
                >
                  {method.action}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
              Still Need Help?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-6 md:mb-8">
              Our support team is always ready to assist you. Don't hesitate to reach out for any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <a href="/contact" className="btn bg-white text-primary hover:bg-gray-100 text-sm py-2.5 px-4">
                Contact Support
              </a>
              <a href="/faq" className="btn border-2 border-white text-white hover:bg-white hover:text-primary text-sm py-2.5 px-4">
                View FAQ
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default HelpPage
