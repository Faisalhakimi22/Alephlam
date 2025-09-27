'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BookOpen, Users, Video, Star, Clock, ArrowRight, CheckCircle, GraduationCap, Award, Globe, Heart, Play, MessageCircle, Phone, Mail } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { Course } from '@/data/courseData'

interface CoursePageClientProps {
  course: Course
}

const CoursePageClient = ({ course }: CoursePageClientProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const getIconForCourse = (courseType: string, index: number) => {
    const icons = [BookOpen, Star, Video, Users, GraduationCap, CheckCircle, Award, Heart]
    return icons[index % icons.length]
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary-light to-secondary-dark text-white section-padding">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="mb-4 sm:mb-6">
              <span className="bg-primary text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                {course.step}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              {course.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0">
              {course.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Link href="/contact" className="btn-large bg-primary hover:bg-primary-dark text-white border-0 text-sm sm:text-base">
                Enroll Now
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link href="/contact" className="btn-large border-2 border-white text-white hover:bg-white hover:text-secondary text-sm sm:text-base">
                Book Demo Class
                <Play className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="bg-white section-padding">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Course Details */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-4 sm:mb-6">About Course</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    {course.fullDescription}
                  </p>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-3 sm:mb-4">What Will You Learn?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-3 sm:mb-4">Course Benefits</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    {course.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm sm:text-base">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Course Info Card */}
            <div className="lg:col-span-1 order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="islamic-card p-4 sm:p-6 sticky top-4 sm:top-8"
              >
                <div className="text-center mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    {React.createElement(getIconForCourse(course.category, 0), { className: "w-8 h-8 sm:w-10 sm:h-10 text-white" })}
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-secondary mb-2">{course.title}</h3>
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-4">{course.price}</div>
                </div>

                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <div className="flex items-start justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600 font-medium text-sm sm:text-base">Level:</span>
                    <span className="font-semibold text-secondary text-right max-w-[60%] text-sm sm:text-base">{course.level}</span>
                  </div>
                  <div className="flex items-start justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600 font-medium text-sm sm:text-base">Duration:</span>
                    <span className="font-semibold text-secondary text-right max-w-[60%] text-xs sm:text-sm">{course.schedule}</span>
                  </div>
                  <div className="flex items-start justify-between py-2">
                    <span className="text-gray-600 font-medium text-sm sm:text-base">Requirements:</span>
                    <span className="font-semibold text-secondary text-right max-w-[60%] text-xs sm:text-sm">{course.requirements}</span>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <Link href="/contact" className="btn-primary w-full text-center text-sm sm:text-base">
                    Enroll Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <Link href="/contact" className="btn-secondary w-full text-center text-sm sm:text-base">
                    Book Demo Class
                    <Play className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Class CTA */}
      <section className="bg-accent section-padding">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4 sm:mb-6 leading-tight">
              Join a free demo class and see how we make learning simple and fun!
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
              Not Sure How We Teach? Take a Demo Class.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Link href="/contact" className="btn-large bg-primary hover:bg-primary-dark text-white text-sm sm:text-base">
                Book Free Demo
                <Play className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link href="/contact" className="btn-large border-2 border-primary text-primary hover:bg-primary hover:text-white text-sm sm:text-base">
                Contact Us
                <MessageCircle className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white section-padding">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-8 sm:mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {course.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  className="islamic-card p-4 sm:p-6"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-secondary mb-2 sm:mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-primary to-primary-light section-padding">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Just fill out the form to begin.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8">
              Ready to start your learning journey? Contact us today to enroll in {course.title}.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link href="/contact" className="btn-large bg-white text-primary hover:bg-gray-100 text-sm sm:text-base">
                Get Started Now
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <div className="flex items-center justify-center text-white text-sm sm:text-base">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span>+49 159 022 97532</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default CoursePageClient
