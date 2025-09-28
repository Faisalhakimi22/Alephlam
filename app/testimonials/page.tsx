'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote, Users, Award, Heart, CheckCircle } from 'lucide-react'
import Footer from '@/components/Footer'

const TestimonialsPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      name: 'Ahmed Hassan',
      location: 'Germany',
      course: 'Tajweed Intensive',
      rating: 5,
      text: 'The teachers at AlephLam are exceptional. They helped me improve my Quran recitation significantly. The online classes are well-structured and the teachers are very patient and encouraging.',
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Fatima Al-Zahra',
      location: 'UK',
      course: 'Arabic Conversation',
      rating: 5,
      text: 'I\'ve been learning Arabic with AlephLam for 6 months now. The progress I\'ve made is incredible. The teachers make learning fun and engaging, and I feel confident speaking Arabic now.',
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Omar Al-Rashid',
      location: 'France',
      course: 'Hifz Program',
      rating: 5,
      text: 'My son has been memorizing Quran with AlephLam for over a year. The teachers are amazing with children and make the learning process enjoyable. Highly recommended!',
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Aisha Mahmoud',
      location: 'Netherlands',
      course: 'Nouraniyyah',
      rating: 5,
      text: 'As a beginner, I was nervous about learning Quran online. But the teachers at AlephLam made me feel comfortable and confident. The step-by-step approach is perfect for beginners.',
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Yusuf Ibrahim',
      location: 'Belgium',
      course: 'Madina Arabic',
      rating: 5,
      text: 'The Arabic grammar course is excellent. The teachers explain complex concepts in simple terms and provide plenty of practice opportunities. I\'ve learned so much in just a few months.',
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Zainab Al-Mansouri',
      location: 'Switzerland',
      course: 'Children\'s Program',
      rating: 5,
      text: 'My daughter loves her classes with AlephLam. The teachers are wonderful with kids and use creative methods to teach. She looks forward to every class and has made great progress.',
      image: '/api/placeholder/80/80'
    }
  ]

  const stats = [
    { number: '500+', label: 'Happy Students' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '15+', label: 'Countries Served' }
  ]

  const benefits = [
    'Qualified and experienced teachers',
    'Flexible scheduling for all time zones',
    'Interactive and engaging learning methods',
    'Small class sizes for personalized attention',
    'Progress tracking and regular assessments',
    'Supportive learning community',
    'Affordable pricing for quality education',
    'Multilingual support for international students'
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
              Student <span className="text-primary">Testimonials</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed mb-4 sm:mb-6 md:mb-8 px-2 sm:px-0">
              Hear from our students about their learning experience with AlephLam. 
              Discover why thousands of students trust us for their Islamic education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-white py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-6 sm:mb-8 lg:mb-12 text-center"
          >
            Our <span className="text-gradient">Success</span> in Numbers
          </motion.h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 shadow-lg">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-1 sm:mb-2">{stat.number}</h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="bg-accent py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-6 sm:mb-8 lg:mb-12 text-center"
          >
            What Our Students <span className="text-gradient">Say</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="glass-card p-4 sm:p-6 lg:p-8"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-secondary">{testimonial.name}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">{testimonial.location}</p>
                    <p className="text-primary text-xs sm:text-sm font-medium">{testimonial.course}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="relative">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-gray-700 text-xs sm:text-sm lg:text-base leading-relaxed pl-4 sm:pl-6">
                    {testimonial.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-6 sm:mb-8 lg:mb-12 text-center">
              Why Students Choose <span className="text-gradient">AlephLam</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-xs sm:text-sm lg:text-base">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
              Join Our Community of Happy Students
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-6 md:mb-8">
              Experience the quality education that our students rave about. Start your Islamic learning journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <a href="/contact" className="btn bg-white text-primary hover:bg-gray-100 text-sm py-2.5 px-4">
                Start Learning Now
              </a>
              <a href="/courses" className="btn border-2 border-white text-white hover:bg-white hover:text-primary text-sm py-2.5 px-4">
                View All Courses
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default TestimonialsPage
