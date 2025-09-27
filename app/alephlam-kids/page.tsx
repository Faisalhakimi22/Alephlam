'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, BookOpen, Star, Heart, Award, ArrowRight, CheckCircle, Play, GraduationCap, Volume2 } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/Footer'

const AlephLamKidsPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const ageGroups = [
    {
      age: '3-6 Years',
      title: 'Early Foundation',
      description: 'Building Islamic values through play, stories, and interactive activities.',
      features: ['Alif Ba introduction', 'Islamic stories', 'Prayer basics', 'Interactive learning'],
      icon: Heart
    },
    {
      age: '7-10 Years',
      title: 'Growing Learners',
      description: 'Structured learning with Quran reading, Arabic basics, and Islamic studies.',
      features: ['Quran reading', 'Arabic alphabet', 'Islamic manners', 'Group activities'],
      icon: BookOpen
    },
    {
      age: '11-14 Years',
      title: 'Advanced Kids',
      description: 'Comprehensive Islamic education with deeper understanding and practical application.',
      features: ['Tajweed rules', 'Arabic grammar', 'Islamic history', 'Leadership skills'],
      icon: Award
    }
  ]

  const courses = [
    {
      title: 'Alif Ba for Children',
      description: 'Learn the Arabic alphabet through fun, interactive methods designed specifically for young learners.',
      duration: '3 months',
      age: '3-8 years',
      features: ['Interactive learning', 'Visual aids', 'Progress tracking', 'Parent involvement'],
      price: '45€/month',
      icon: BookOpen
    },
    {
      title: 'Tajweed for Kids',
      description: 'Master the rules of Quran recitation with age-appropriate teaching methods.',
      duration: '6 months',
      age: '7-12 years',
      features: ['Basic Tajweed rules', 'Practice exercises', 'Audio materials', 'Regular assessments'],
      price: '55€/month',
      icon: Star
    },
    {
      title: 'Hifz for Children',
      description: 'Memorize the Quran with our proven methodology designed for young minds.',
      duration: '2-3 years',
      age: '8-14 years',
      features: ['Structured memorization', 'Daily practice', 'Progress monitoring', 'Motivational system'],
      price: '65€/month',
      icon: Award
    },
    {
      title: 'Learn Prayer with BaTut',
      description: 'Master the five daily prayers through interactive lessons and practical demonstrations.',
      duration: '2 months',
      age: '6-12 years',
      features: ['Prayer positions', 'Dua memorization', 'Practical exercises', 'Islamic etiquette'],
      price: '40€/month',
      icon: Heart
    }
  ]

  const teachingMethods = [
    {
      icon: Play,
      title: 'Interactive Learning',
      description: 'Engaging activities, games, and multimedia content to keep children interested and motivated.'
    },
    {
      icon: Users,
      title: 'Small Group Classes',
      description: 'Personalized attention in small groups of 3-5 students for optimal learning experience.'
    },
    {
      icon: Star,
      title: 'Reward System',
      description: 'Motivational rewards and certificates to celebrate achievements and encourage progress.'
    },
    {
      icon: Heart,
      title: 'Family Involvement',
      description: 'Regular updates and guidance for parents to support their child\'s learning journey.'
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary-light to-secondary-dark text-white py-16 sm:py-20 lg:py-24 px-4">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-primary">AlephLam</span> Kids
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0">
              Nurturing the next generation of Islamic scholars through engaging, age-appropriate education. 
              Our specialized programs make learning fun, meaningful, and spiritually enriching.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Link href="/contact" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
                Start Learning
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link href="#courses" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white hover:bg-white hover:text-secondary font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                View Courses
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="py-16 sm:py-20 px-4 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4 sm:mb-6">
              Our <span className="text-gradient">Teaching Approach</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We understand that children learn differently. Our methodology combines traditional Islamic education 
              with modern teaching techniques to create an engaging and effective learning experience.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {teachingMethods.map((method, index) => {
              const gradients = [
                'from-islamic-gold to-islamic-gold-light',
                'from-islamic-blue to-islamic-blue-light',
                'from-islamic-gold to-islamic-blue',
                'from-islamic-blue-dark to-islamic-gold-dark'
              ]
              const gradient = gradients[index % gradients.length]
              
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="islamic-card p-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center`}>
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-secondary mb-2 font-amiri">{method.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{method.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary mb-6">
              Learning by <span className="text-gradient">Age Group</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our curriculum is carefully designed to match each child's developmental stage, 
              ensuring optimal learning outcomes and engagement.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {ageGroups.map((group, index) => {
              const gradients = [
                'from-islamic-gold to-islamic-gold-light',
                'from-islamic-blue to-islamic-blue-light',
                'from-islamic-gold to-islamic-blue'
              ]
              const gradient = gradients[index % gradients.length]
              
              return (
                <motion.div
                  key={group.age}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="islamic-card p-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center`}>
                      <group.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="mb-3">
                        <h3 className="text-xl font-bold text-secondary font-amiri">{group.age}</h3>
                        <h4 className="text-lg font-semibold text-islamic-gold">{group.title}</h4>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">{group.description}</p>
                      <div className="space-y-2">
                        {group.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 text-islamic-gold mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 px-4 bg-white" id="courses">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary mb-6">
              Our <span className="text-gradient">Kids Courses</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Islamic education programs designed specifically for children, 
              combining academic excellence with spiritual development.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {courses.map((course, index) => {
              const gradients = [
                'from-islamic-gold to-islamic-gold-light',
                'from-islamic-blue to-islamic-blue-light',
                'from-islamic-gold to-islamic-blue',
                'from-islamic-blue-dark to-islamic-gold-dark'
              ]
              const gradient = gradients[index % gradients.length]
              
              return (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="islamic-card p-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center`}>
                      <course.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-secondary font-amiri">{course.title}</h3>
                        <div className="text-right ml-4">
                          <div className="bg-gradient-to-r from-islamic-gold to-islamic-blue text-white px-3 py-1 rounded-lg font-bold text-xs">
                            {course.price}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">{course.duration}</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-3 leading-relaxed">{course.description}</p>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Users className="w-4 h-4 mr-2" />
                        <span>Age: {course.age}</span>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-secondary mb-2 text-sm font-amiri">Features:</h4>
                        <div className="grid grid-cols-2 gap-1">
                          {course.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-xs text-gray-600">
                              <CheckCircle className="w-2 h-2 text-islamic-gold mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Link 
                        href="/contact" 
                        className="btn-primary text-sm py-2 px-4"
                      >
                        Enroll Now
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary-dark">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Your Child's Islamic Journey
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of families who trust AlephLam for their children's Islamic education. 
              Give your child the gift of knowledge and spiritual growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary hover:bg-gray-100 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/courses" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                View All Courses
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default AlephLamKidsPage
