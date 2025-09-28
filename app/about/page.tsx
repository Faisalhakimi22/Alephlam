'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BookOpen, Users, Heart, Globe, Award, Star, Target, Zap, Shield, CheckCircle } from 'lucide-react'
import Footer from '@/components/Footer'

const AboutPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const values = [
    {
      icon: BookOpen,
      title: 'Quality Education',
      description: 'We provide high-quality Islamic education with qualified teachers and proven methodologies.'
    },
    {
      icon: Heart,
      title: 'Brotherly Atmosphere',
      description: 'Learn in a supportive, welcoming environment that feels like family.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connect with students and teachers from around the world through online learning.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of Islamic education and student development.'
    }
  ]

  const stats = [
    { number: '500+', label: 'Students Taught' },
    { number: '5+', label: 'Years Experience' },
    { number: '15+', label: 'Qualified Teachers' },
    { number: '98%', label: 'Student Satisfaction' }
  ]

  const features = [
    'Qualified and experienced teachers',
    'Interactive online learning platform',
    'Flexible scheduling for all time zones',
    'Small class sizes for personalized attention',
    'Comprehensive curriculum covering all levels',
    'Regular progress assessments and feedback',
    'Supportive learning community',
    'Affordable pricing for quality education'
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
              About <span className="text-primary">AlephLam</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed mb-4 sm:mb-6 md:mb-8 px-2 sm:px-0">
              We are dedicated to providing quality Islamic education for the whole family. 
              Learn Quran and Arabic in a supportive, brotherly atmosphere with qualified teachers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass-card p-4 sm:p-6 lg:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-secondary mb-3 sm:mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                  To provide accessible, high-quality Islamic education that empowers students to connect with the Quran and Arabic language, 
                  fostering spiritual growth and community bonds in a supportive online environment.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="glass-card p-4 sm:p-6 lg:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-secondary mb-3 sm:mb-4">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                  To become the leading online platform for Islamic education, creating a global community of learners 
                  who are deeply connected to their faith through proper Quranic recitation and Arabic language mastery.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-accent py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-6 sm:mb-8 lg:mb-12 text-center"
          >
            Our <span className="text-gradient">Values</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="glass-card p-4 sm:p-6 text-center"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-secondary mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-white py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-6 sm:mb-8 lg:mb-12 text-center"
          >
            Our <span className="text-gradient">Achievements</span>
          </motion.h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 shadow-lg">
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-1 sm:mb-2">{stat.number}</h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-accent py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-6 sm:mb-8 lg:mb-12 text-center">
              Why Choose <span className="text-gradient">AlephLam?</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-xs sm:text-sm lg:text-base">{feature}</span>
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
              Ready to Start Your Islamic Education Journey?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-6 md:mb-8">
              Join our community of learners and discover the beauty of Quran and Arabic with qualified teachers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <a href="/contact" className="btn bg-white text-primary hover:bg-gray-100 text-sm py-2.5 px-4">
                Get Started Now
              </a>
              <a href="/courses" className="btn border-2 border-white text-white hover:bg-white hover:text-primary text-sm py-2.5 px-4">
                View Our Courses
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default AboutPage
