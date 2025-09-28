'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      name: 'Aisha Rahman',
      role: 'Student - Nouraniyyah Course',
      content: 'AlephLam has transformed my Quran learning journey. The teachers are incredibly patient and the atmosphere is so welcoming. I\'ve made amazing progress in just a few months!',
      rating: 5,
      avatar: 'AR'
    },
    {
      name: 'Ahmed Hassan',
      role: 'Parent - Children\'s Course',
      content: 'My children love their classes with AlephLam. The teachers make learning fun and engaging. They\'ve learned so much about Arabic and Quran in such a short time.',
      rating: 5,
      avatar: 'AH'
    },
    {
      name: 'Fatima Ali',
      role: 'Student - Tajweed Intensive',
      content: 'The Tajweed course is exceptional. The detailed explanations and practical exercises have helped me improve my recitation significantly. Highly recommended!',
      rating: 5,
      avatar: 'FA'
    },
    {
      name: 'Omar Khalil',
      role: 'Student - Hifz Program',
      content: 'The memorization program is perfectly structured. The regular reviews and personal attention from teachers have made memorizing Quran much easier than I expected.',
      rating: 5,
      avatar: 'OK'
    },
    {
      name: 'Zara Khan',
      role: 'Student - Arabic Course',
      content: 'Learning Arabic with AlephLam has been a wonderful experience. The teachers are native speakers and the curriculum is well-designed for practical use.',
      rating: 5,
      avatar: 'ZK'
    },
    {
      name: 'Yusuf Patel',
      role: 'Parent - Multiple Courses',
      content: 'We have three children enrolled in different courses. The quality of teaching and the family-friendly approach make AlephLam our top choice for Islamic education.',
      rating: 5,
      avatar: 'YP'
    }
  ]

  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-secondary mb-3 sm:mb-4 md:mb-6">
            What Our <span className="text-gradient">Students Say</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-4 md:px-0">
            Don't just take our word for it. Here's what our students and their families have to say about their learning experience with AlephLam.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const gradients = [
              'from-islamic-gold to-islamic-gold-light',
              'from-islamic-blue to-islamic-blue-light',
              'from-islamic-gold to-islamic-blue',
              'from-islamic-blue-dark to-islamic-gold-dark'
            ]
            const gradient = gradients[index % gradients.length]
            
            return (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="islamic-card p-4 sm:p-6"
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center text-white font-semibold text-sm sm:text-base`}>
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-secondary font-amiri text-sm sm:text-base">{testimonial.name}</h4>
                        <p className="text-xs sm:text-sm text-gray-500 truncate">{testimonial.role}</p>
                      </div>
                      <Quote className="w-4 h-4 sm:w-6 sm:h-6 text-islamic-gold/30 flex-shrink-0 ml-2" />
                    </div>
                    
                    <div className="flex items-center mb-2 sm:mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-islamic-gold fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed italic text-xs sm:text-sm">
                      "{testimonial.content}"
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Overall Rating Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 sm:mt-12 lg:mt-16 glass-card-gradient bg-gradient-to-r from-primary to-primary-light rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 text-white text-center relative z-10"
        >
          <div className="flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white fill-current" />
            ))}
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 sm:mb-2">
            4.9/5 Average Rating
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-3 sm:mb-4 md:mb-6">
            Based on 500+ student reviews
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            <div>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1">500+</div>
              <div className="text-white/80 text-xs sm:text-sm md:text-base">Happy Students</div>
            </div>
            <div>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1">50+</div>
              <div className="text-white/80 text-xs sm:text-sm md:text-base">Expert Teachers</div>
            </div>
            <div>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1">15+</div>
              <div className="text-white/80 text-xs sm:text-sm md:text-base">Course Types</div>
            </div>
            <div>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1">99%</div>
              <div className="text-white/80 text-xs sm:text-sm md:text-base">Satisfaction Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
