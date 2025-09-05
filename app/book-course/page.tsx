'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BookOpen, Users, Video, Star, Clock, ArrowRight, CheckCircle, GraduationCap, Calendar, CreditCard, Shield, Target, Zap, Star as StarIcon } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/Footer'

const BookCoursePage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedCourse, setSelectedCourse] = useState('')
  const [selectedSchedule, setSelectedSchedule] = useState('')

  const courses = [
    {
      id: 'nouraniyyah',
      title: 'Nouraniyyah',
      description: 'Learn correct reading of Quranic words starting from letters using the typical Nouraniyyah spelling method.',
      price: '30€',
      duration: 'Monthly',
      level: 'Beginner',
      features: ['Letter recognition', 'Word building', 'Basic Tajweed', 'Verse reading'],
      schedule: ['Monday & Wednesday 6:00 PM', 'Tuesday & Thursday 7:00 PM', 'Saturday & Sunday 10:00 AM']
    },
    {
      id: 'noorul-bayaan',
      title: 'Noorul-Bayaan',
      description: 'Advanced method for learning Quran reading with Tajweed rules application.',
      price: '30€',
      duration: 'Monthly',
      level: 'Intermediate',
      features: ['Advanced spelling', 'Tajweed rules', 'Verse recitation', 'Pronunciation'],
      schedule: ['Monday & Wednesday 7:00 PM', 'Tuesday & Thursday 8:00 PM', 'Saturday & Sunday 11:00 AM']
    },
    {
      id: 'tajweed-intensive',
      title: 'Tajweed Intensive - LIVE',
      description: 'Comprehensive course covering all areas of Tajweed science.',
      price: '30€',
      duration: 'Monthly',
      level: 'Advanced',
      features: ['Complete Tajweed', 'Reading styles', 'Articulation points', 'Scientific approach'],
      schedule: ['Monday, Wednesday & Friday 8:00 PM', 'Tuesday, Thursday & Saturday 6:00 PM']
    },
    {
      id: 'hifz',
      title: 'Hifz-Al Quran',
      description: 'Structured program for memorizing the Quran with regular reviews.',
      price: '25€',
      duration: 'Monthly',
      level: 'All Levels',
      features: ['Verse memorization', 'Regular reviews', 'Progress tracking', 'Personal guidance'],
      schedule: ['Monday, Wednesday & Friday 7:00 PM', 'Tuesday, Thursday & Saturday 5:00 PM']
    },
    {
      id: 'madina-arabic',
      title: 'Madina Arabic',
      description: 'Focus on grammar and analyzing individual sentence parts.',
      price: '35€',
      duration: 'Monthly',
      level: 'Beginner to Advanced',
      features: ['Grammar focus', 'Sentence analysis', 'Vocabulary building', 'Religious context'],
      schedule: ['Monday & Wednesday 5:00 PM', 'Tuesday & Thursday 6:00 PM', 'Saturday & Sunday 9:00 AM']
    },
    {
      id: 'alif-ba-kids',
      title: 'Alif Ba for Children (4+)',
      description: 'Interactive learning for young children to recognize Arabic letters.',
      price: '20€',
      duration: 'Monthly',
      level: '4+ years',
      features: ['Letter recognition', 'Pronunciation', 'Interactive learning', '30 min sessions'],
      schedule: ['Monday & Wednesday 4:00 PM', 'Tuesday & Thursday 5:00 PM', 'Saturday & Sunday 9:00 AM']
    }
  ]

  const enrollmentSteps = [
    {
      step: 1,
      title: 'Choose Your Course',
      description: 'Select from our range of Quran and Arabic courses',
      icon: BookOpen
    },
    {
      step: 2,
      title: 'Select Schedule',
      description: 'Pick a time that works best for you',
      icon: Calendar
    },
    {
      step: 3,
      title: 'Complete Registration',
      description: 'Fill out your details and preferences',
      icon: Users
    },
    {
      step: 4,
      title: 'Payment & Confirmation',
      description: 'Secure payment and enrollment confirmation',
      icon: CreditCard
    }
  ]

  const benefits = [
    'Flexible scheduling options',
    'Small group sizes (max 8 students)',
    'Qualified native-speaking teachers',
    'Interactive learning materials',
    'Progress tracking and assessments',
    'Certificate upon completion',
    '24/7 support and assistance',
    'Free trial session available'
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary-light to-secondary-dark text-white section-padding">
        <div className="container-custom text-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Book Your <span className="text-primary">Course</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Ready to start your Islamic education journey? Choose your course, pick your schedule, 
              and enroll in just a few simple steps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#courses" className="btn-large bg-primary hover:bg-primary-dark text-white border-0">
                View Courses
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <Link href="/contact" className="btn-large border-2 border-white text-white hover:bg-white hover:text-secondary">
                Need Help?
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enrollment Steps */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold text-secondary mb-12 text-center"
          >
            Simple <span className="text-gradient">Enrollment Process</span>
          </motion.h2>
          <div className="grid-cards-4">
            {enrollmentSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 text-center relative z-10"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold text-2xl">{step.step}</span>
                </div>
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Selection */}
      <section className="bg-accent section-padding" id="courses">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl font-bold text-secondary mb-12 text-center"
          >
            Choose Your <span className="text-gradient">Course</span>
          </motion.h2>
          <div className="grid-cards-2">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`glass-card-interactive p-8 cursor-pointer transition-all duration-300 relative z-10 ${
                  selectedCourse === course.id ? 'ring-2 ring-primary shadow-xl' : ''
                }`}
                onClick={() => setSelectedCourse(course.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-secondary">{course.title}</h3>
                  <div className="text-primary font-bold text-lg">{course.price}</div>
                </div>
                
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    {course.level}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-secondary mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <Star className="w-3 h-3 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-secondary mb-2">Available Schedules:</h4>
                  <ul className="space-y-1">
                    {course.schedule.map((time, index) => (
                      <li key={index} className="text-sm text-gray-600">
                        • {time}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4xl font-bold text-secondary mb-12 text-center"
          >
            Why Choose <span className="text-gradient">AlephLam</span>
          </motion.h2>
          <div className="grid-cards-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 text-center relative z-10"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-600 font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="bg-accent section-padding">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-4xl font-bold text-secondary mb-12 text-center"
          >
            Student <span className="text-gradient">Success Stories</span>
          </motion.h2>
          <div className="grid-cards-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="glass-card p-8 text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">Ahmed, 12 years</h3>
              <p className="text-gray-600 mb-4">"I started with Nouraniyyah and now I can read Quran fluently with proper Tajweed. My teacher is amazing!"</p>
              <div className="flex justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="glass-card p-8 text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">Fatima, 8 years</h3>
              <p className="text-gray-600 mb-4">"Learning Arabic with AlephLam made me love the language. I can now speak basic Arabic confidently!"</p>
              <div className="flex justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="glass-card p-8 text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">Omar, 15 years</h3>
              <p className="text-gray-600 mb-4">"The Hifz program helped me memorize 5 Juz in just one year. The teachers are very patient and supportive."</p>
              <div className="flex justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join our community of learners and start your Islamic education journey today. 
              Our experienced teachers are ready to guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-large bg-white text-primary hover:bg-gray-100">
                Enroll Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/courses" className="btn-large border-2 border-white text-white hover:bg-white hover:text-primary">
                View All Courses
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default BookCoursePage
