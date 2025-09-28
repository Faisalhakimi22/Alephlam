'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BookOpen, GraduationCap, Users, Video, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const PagePreview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const pages = [
    {
      title: 'Our Courses',
      description: 'Explore our comprehensive range of Quran and Arabic courses designed for all levels and ages.',
      icon: BookOpen,
      href: '/courses',
      color: 'from-blue-500 to-blue-600',
      features: ['Quran Courses', 'Arabic Courses', 'Children Programs', 'Flexible Scheduling']
    },
    {
      title: 'Book Course',
      description: 'Ready to start your learning journey? Book your course and join our supportive community.',
      icon: GraduationCap,
      href: '/book-course',
      color: 'from-green-500 to-green-600',
      features: ['Easy Enrollment', 'Course Selection', 'Payment Options', 'Start Immediately']
    },
    {
      title: 'AlephLam Kids',
      description: 'Specialized Islamic education programs designed specifically for children and young learners.',
      icon: Users,
      href: '/alephlam-kids',
      color: 'from-purple-500 to-purple-600',
      features: ['Age-Appropriate Learning', 'Interactive Methods', 'Family Involvement', 'Progress Tracking']
    },
    {
      title: 'Video Courses',
      description: 'Learn at your own pace with our comprehensive video courses and self-paced learning materials.',
      icon: Video,
      href: '/video-courses',
      color: 'from-orange-500 to-orange-600',
      features: ['Self-Paced Learning', 'HD Video Quality', 'Downloadable Materials', 'Lifetime Access']
    }
  ]

  return (
    <section className="bg-white section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary mb-6">
            Explore <span className="text-gradient">AlephLam</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive Islamic education platform with dedicated pages for every aspect 
            of your learning journey. Each section offers detailed information and easy access to enrollment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {pages.map((page, index) => (
            <motion.div
              key={page.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card p-8 h-full flex flex-col"
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${page.color} rounded-full flex items-center justify-center mr-4`}>
                  <page.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-secondary">{page.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 text-lg leading-relaxed flex-grow">
                {page.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-secondary mb-3">What you'll find:</h4>
                <ul className="space-y-2">
                  {page.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className={`w-2 h-2 bg-gradient-to-r ${page.color} rounded-full mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-auto">
                <Link 
                  href={page.href} 
                  className={`inline-flex items-center justify-center w-full py-3 px-6 rounded-lg text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl bg-gradient-to-r ${page.color} hover:shadow-2xl`}
                >
                  Explore {page.title}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl mb-6 text-white/90">
              Choose the path that's right for you and begin your Islamic education journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/book-course" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                Book Your Course
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PagePreview
