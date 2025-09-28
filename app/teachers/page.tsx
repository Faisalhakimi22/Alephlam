'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BookOpen, Users, Award, Star, Globe, Heart, CheckCircle, GraduationCap, Clock, MessageCircle } from 'lucide-react'
import Footer from '@/components/Footer'

const TeachersPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const teachers = [
    {
      name: 'Sheikh Ahmed Al-Mahmoud',
      title: 'Senior Quran Teacher',
      experience: '15+ years',
      specialization: 'Tajweed & Hifz',
      education: 'Al-Azhar University, Cairo',
      languages: ['Arabic', 'English', 'German'],
      description: 'Expert in Tajweed rules and Quran memorization with extensive experience teaching students of all ages.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Ustadha Fatima Al-Zahra',
      title: 'Arabic Language Specialist',
      experience: '12+ years',
      specialization: 'Arabic Grammar & Conversation',
      education: 'Islamic University of Medina',
      languages: ['Arabic', 'English', 'French'],
      description: 'Specialized in teaching Arabic grammar and conversational Arabic with a focus on practical application.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Sheikh Omar Al-Rashid',
      title: 'Children\'s Education Expert',
      experience: '10+ years',
      specialization: 'Kids Quran & Arabic',
      education: 'International Islamic University',
      languages: ['Arabic', 'English', 'Turkish'],
      description: 'Passionate about teaching children with engaging methods and age-appropriate curriculum.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Ustadha Aisha Al-Mansouri',
      title: 'Nouraniyyah Specialist',
      experience: '8+ years',
      specialization: 'Quran Reading & Nouraniyyah',
      education: 'Qatar University',
      languages: ['Arabic', 'English', 'Urdu'],
      description: 'Expert in Nouraniyyah method and beginner Quran reading with patient and encouraging teaching style.',
      image: '/api/placeholder/300/300'
    }
  ]

  const qualifications = [
    'Graduated from prestigious Islamic universities',
    'Certified in Quranic recitation and Tajweed',
    'Extensive teaching experience with diverse student populations',
    'Multilingual capabilities for international students',
    'Continuous professional development and training',
    'Passionate about Islamic education and student success'
  ]

  const teachingApproach = [
    {
      icon: Heart,
      title: 'Patient & Encouraging',
      description: 'We understand that learning takes time and provide a supportive environment for all students.'
    },
    {
      icon: Users,
      title: 'Personalized Learning',
      description: 'Each student receives individual attention and customized learning plans based on their needs.'
    },
    {
      icon: BookOpen,
      title: 'Interactive Methods',
      description: 'We use engaging teaching methods including games, stories, and multimedia to make learning fun.'
    },
    {
      icon: Award,
      title: 'Quality Standards',
      description: 'All teachers maintain high standards of Islamic knowledge and teaching excellence.'
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
              Meet Our <span className="text-primary">Teachers</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed mb-4 sm:mb-6 md:mb-8 px-2 sm:px-0">
              Our qualified and experienced teachers are dedicated to providing the best Islamic education 
              in a supportive and encouraging environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="bg-white py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-6 sm:mb-8 lg:mb-12 text-center"
          >
            Our <span className="text-gradient">Teaching Team</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {teachers.map((teacher, index) => (
              <motion.div
                key={teacher.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="glass-card p-4 sm:p-6 lg:p-8"
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto sm:mx-0 flex-shrink-0">
                    <GraduationCap className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-white" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-secondary mb-1 sm:mb-2">{teacher.name}</h3>
                    <p className="text-primary font-semibold text-sm sm:text-base lg:text-lg mb-2 sm:mb-3">{teacher.title}</p>
                    <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                      <div className="flex items-center justify-center sm:justify-start text-gray-600 text-xs sm:text-sm">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        <span>{teacher.experience} experience</span>
                      </div>
                      <div className="flex items-center justify-center sm:justify-start text-gray-600 text-xs sm:text-sm">
                        <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        <span>{teacher.specialization}</span>
                      </div>
                      <div className="flex items-center justify-center sm:justify-start text-gray-600 text-xs sm:text-sm">
                        <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        <span>{teacher.education}</span>
                      </div>
                      <div className="flex items-center justify-center sm:justify-start text-gray-600 text-xs sm:text-sm">
                        <Globe className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        <span>{teacher.languages.join(', ')}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">{teacher.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="bg-accent py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-6 sm:mb-8 lg:mb-12 text-center"
          >
            Our Teaching <span className="text-gradient">Approach</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {teachingApproach.map((approach, index) => (
              <motion.div
                key={approach.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                className="glass-card p-4 sm:p-6 text-center"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <approach.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-secondary mb-2 sm:mb-3">{approach.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">{approach.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="bg-white py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-6 sm:mb-8 lg:mb-12 text-center">
              Teacher <span className="text-gradient">Qualifications</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              {qualifications.map((qualification, index) => (
                <motion.div
                  key={qualification}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-xs sm:text-sm lg:text-base">{qualification}</span>
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
              Ready to Learn with Our Expert Teachers?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-6 md:mb-8">
              Book a free trial class and experience the quality of our teaching firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <a href="/contact" className="btn bg-white text-primary hover:bg-gray-100 text-sm py-2.5 px-4">
                Book Free Trial
              </a>
              <a href="/courses" className="btn border-2 border-white text-white hover:bg-white hover:text-primary text-sm py-2.5 px-4">
                View Courses
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default TeachersPage
