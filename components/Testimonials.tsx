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
    <section className="bg-white section-padding" id="testimonials">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            What Our <span className="text-gradient">Students Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our students and their families have to say about their learning experience with AlephLam.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 relative z-10"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center text-white font-semibold mr-4 shadow-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-secondary">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Overall Rating Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 glass-card-gradient bg-gradient-to-r from-primary to-primary-light rounded-3xl p-8 md:p-12 text-white text-center relative z-10"
        >
          <div className="flex items-center justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-white fill-current" />
            ))}
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-2">
            4.9/5 Average Rating
          </h3>
          <p className="text-xl text-white/90 mb-6">
            Based on 500+ student reviews
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-1">500+</div>
              <div className="text-white/80">Happy Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">50+</div>
              <div className="text-white/80">Expert Teachers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">15+</div>
              <div className="text-white/80">Course Types</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">99%</div>
              <div className="text-white/80">Satisfaction Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
