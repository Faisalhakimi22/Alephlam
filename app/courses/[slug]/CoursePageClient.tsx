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
      <section className="bg-gradient-to-br from-secondary via-secondary-light to-secondary-dark text-white py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="mb-3 sm:mb-4 md:mb-6">
              <span className="bg-primary text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                {course.step}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
              {course.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed mb-4 sm:mb-6 md:mb-8 px-2 sm:px-0">
              {course.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Link href="/contact" className="btn bg-primary hover:bg-primary-dark text-white border-0 text-sm py-2.5 px-4">
                Enroll Now
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link href="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-secondary text-sm py-2.5 px-4">
                Book Demo Class
                <Play className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="bg-white py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Course Details */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-secondary mb-3 sm:mb-4 md:mb-6">About Course</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base">
                    {course.fullDescription}
                  </p>
                  
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-secondary mb-2 sm:mb-3 md:mb-4">What Will You Learn?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-xs sm:text-sm md:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-secondary mb-2 sm:mb-3 md:mb-4">Course Benefits</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
                    {course.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-xs sm:text-sm md:text-base">{benefit}</span>
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
                className="islamic-card p-3 sm:p-4 md:p-6 sticky top-4 sm:top-8"
              >
                <div className="text-center mb-3 sm:mb-4 md:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                    {React.createElement(getIconForCourse(course.category, 0), { className: "w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" })}
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-secondary mb-1 sm:mb-2">{course.title}</h3>
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-3 sm:mb-4">{course.price}</div>
                </div>

                <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4 md:mb-6">
                  <div className="flex items-start justify-between py-1 sm:py-2 border-b border-gray-200">
                    <span className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">Level:</span>
                    <span className="font-semibold text-secondary text-right max-w-[60%] text-xs sm:text-sm md:text-base">{course.level}</span>
                  </div>
                  <div className="flex items-start justify-between py-1 sm:py-2 border-b border-gray-200">
                    <span className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">Duration:</span>
                    <span className="font-semibold text-secondary text-right max-w-[60%] text-xs sm:text-sm">{course.schedule}</span>
                  </div>
                  <div className="flex items-start justify-between py-1 sm:py-2">
                    <span className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">Requirements:</span>
                    <span className="font-semibold text-secondary text-right max-w-[60%] text-xs sm:text-sm">{course.requirements}</span>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <Link href="/contact" className="btn-primary w-full text-center text-xs sm:text-sm md:text-base py-2 sm:py-2.5">
                    Enroll Now
                    <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                  </Link>
                  <Link href="/contact" className="btn-secondary w-full text-center text-xs sm:text-sm md:text-base py-2 sm:py-2.5">
                    Book Demo Class
                    <Play className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Class CTA */}
      <section className="bg-accent py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-3 sm:mb-4 md:mb-6 leading-tight">
              Join a free demo class and see how we make learning simple and fun!
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6 md:mb-8">
              Not Sure How We Teach? Take a Demo Class.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Link href="/contact" className="btn bg-primary hover:bg-primary-dark text-white text-sm py-2.5 px-4">
                Book Free Demo
                <Play className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link href="/contact" className="btn border-2 border-primary text-primary hover:bg-primary hover:text-white text-sm py-2.5 px-4">
                Contact Us
                <MessageCircle className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-6 sm:mb-8 lg:mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              {course.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  className="islamic-card p-3 sm:p-4 md:p-6"
                >
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-secondary mb-1 sm:mb-2 md:mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-primary to-primary-light py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
              Just fill out the form to begin.
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-6 md:mb-8">
              Ready to start your learning journey? Contact us today to enroll in {course.title}.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100 text-sm py-2.5 px-4">
                Get Started Now
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <div className="flex items-center justify-center text-white text-xs sm:text-sm md:text-base">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2" />
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
