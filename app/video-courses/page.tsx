'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Video, Play, Clock, Star, ArrowRight, CheckCircle, Download, Users, Award, BookOpen, TrendingUp, Globe, Zap } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/Footer'

const VideoCoursesPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const videoCourses = [
    {
      title: 'Tuhfatul-Atfaal Ijaazah',
      description: 'This course stands out through its in-depth content. You acquire solid knowledge of Tajweed, understand the Arabic text of the poem independently, and can receive an Ijazah in Tajweed upon completion.',
      price: '99.00€',
      duration: 'One-time payment',
      level: 'Advanced',
      features: ['Complete Tajweed mastery', 'Arabic text understanding', 'Ijazah preparation', 'Lifetime access'],
      benefits: ['Professional certification', 'Deep understanding', 'Self-paced learning', 'Expert guidance'],
      requirements: 'Intermediate Tajweed knowledge',
      content: ['20+ video lessons', 'Practice exercises', 'Assessment materials', 'Certificate preparation'],
      instructor: 'Sheikh Ahmed Hassan',
      totalHours: '25+ hours'
    },
    {
      title: 'Belebe dein Herz Teil 1',
      description: 'In this course, you learn a selection of the names and attributes of Allah. Additionally, you will learn a small supplication from the Quran or Sunnah every week.',
      price: '27€',
      duration: 'One-time payment',
      level: 'All Levels',
      features: ['Divine names learning', 'Weekly supplications', 'Spiritual growth', 'Lifetime access'],
      benefits: ['Spiritual connection', 'Daily practice', 'Islamic knowledge', 'Personal development'],
      requirements: 'No prior knowledge needed',
      content: ['15 video lessons', 'Daily supplications', 'Reflection exercises', 'Spiritual journal'],
      instructor: 'Ustadha Fatima Ali',
      totalHours: '12+ hours'
    },
    {
      title: 'Belebe dein Herz Teil 2',
      description: 'This course covers topics such as doubts about Islam, Allah swt, or the Quran. Even if we personally have no doubts, we usually lack knowledge to address such questions.',
      price: '27€',
      duration: 'One-time payment',
      level: 'Intermediate',
      features: ['Doubt resolution', 'Islamic knowledge', 'Critical thinking', 'Lifetime access'],
      benefits: ['Confidence building', 'Knowledge expansion', 'Question answering', 'Faith strengthening'],
      requirements: 'Basic Islamic knowledge',
      content: ['18 video lessons', 'Q&A sessions', 'Discussion topics', 'Reference materials'],
      instructor: 'Ustadha Fatima Ali',
      totalHours: '15+ hours'
    },
    {
      title: 'Tajweed Basic',
      description: 'Learn the fundamental and relevant Tajweed rules of the Hafs An Asim reading style to avoid obvious mistakes and recite the Quran with Tajweed.',
      price: '20€',
      duration: 'One-time payment',
      level: 'Beginner to Intermediate',
      features: ['Basic Tajweed rules', 'Hafs An Asim style', 'Mistake prevention', 'Lifetime access'],
      benefits: ['Correct recitation', 'Rule understanding', 'Practice improvement', 'Foundation building'],
      requirements: 'Basic Quran reading',
      content: ['12 video lessons', 'Practice recitations', 'Rule explanations', 'Assessment quizzes'],
      instructor: 'Sheikh Omar Khalil',
      totalHours: '10+ hours'
    },
    {
      title: 'Tajweed Intensiv - Solo',
      description: 'With Tajweed Solo, you receive structured video lessons and practice materials to master the rules of Quran recitation step by step.',
      price: '12.99€',
      duration: 'Monthly subscription',
      level: 'Intermediate to Advanced',
      features: ['Structured learning', 'Practice materials', 'Flexible schedule', 'Monthly access'],
      benefits: ['Comprehensive coverage', 'Regular practice', 'Flexible learning', 'Continuous improvement'],
      requirements: 'Intermediate Tajweed knowledge',
      content: ['Monthly video lessons', 'Practice workbooks', 'Progress tracking', 'Community support'],
      instructor: 'Sheikh Omar Khalil',
      totalHours: '8+ hours monthly'
    },
    {
      title: 'Tajweed Intensiv - Pro',
      description: 'Learn flexibly through video courses while receiving personal guidance from an experienced teacher who provides feedback and corrections.',
      price: '24.99€',
      duration: 'Monthly subscription',
      level: 'Intermediate to Advanced',
      features: ['Video lessons', 'Personal guidance', 'Feedback system', 'Monthly access'],
      benefits: ['Expert feedback', 'Personal attention', 'Progress monitoring', 'Mistake correction'],
      requirements: 'Intermediate Tajweed knowledge',
      content: ['Monthly video lessons', 'Personal feedback', '1-on-1 sessions', 'Progress reports'],
      instructor: 'Sheikh Omar Khalil',
      totalHours: '8+ hours monthly'
    }
  ]

  const learningFeatures = [
    {
      icon: Play,
      title: 'Learn at Your Own Pace',
      description: 'Watch videos whenever and wherever you want. Pause, rewind, and review as many times as needed.'
    },
    {
      icon: Download,
      title: 'Downloadable Materials',
      description: 'Access course materials offline. Download workbooks, practice sheets, and reference guides.'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Join our online community of learners. Share experiences and get help from fellow students.'
    },
    {
      icon: Award,
      title: 'Certificates',
      description: 'Receive certificates upon completion. Some courses offer Ijazah preparation for advanced students.'
    }
  ]

  const platformFeatures = [
    'HD video quality',
    'Mobile-friendly interface',
    'Progress tracking',
    'Note-taking tools',
    'Discussion forums',
    '24/7 access',
    'Multiple devices',
    'Offline downloads'
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary-light to-secondary-dark text-white section-padding">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-primary">Video</span> Courses
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0">
              Learn at your own pace with our comprehensive video courses. Perfect for busy schedules, 
              self-paced learning, or supplementing your live classes with additional practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <a href="#courses" className="btn-large bg-primary hover:bg-primary-dark text-white border-0 text-sm sm:text-base">
                Browse Courses
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <Link href="/contact" className="btn-large border-2 border-white text-white hover:bg-white hover:text-secondary text-sm sm:text-base">
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learning Features */}
      <section className="bg-white section-padding">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-8 sm:mb-12 text-center"
          >
            Why Choose <span className="text-gradient">Video Learning</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {learningFeatures.map((feature, index) => {
              const gradients = [
                'from-islamic-gold to-islamic-gold-light',
                'from-islamic-blue to-islamic-blue-light',
                'from-islamic-gold to-islamic-blue',
                'from-islamic-blue-dark to-islamic-gold-dark'
              ]
              const gradient = gradients[index % gradients.length]
              
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="islamic-card p-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-secondary mb-2 font-amiri">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="bg-accent section-padding">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-8 sm:mb-12 text-center"
          >
            Learning <span className="text-gradient">Platform Features</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 sm:p-8 text-center relative z-10"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <p className="text-gray-600 font-medium text-sm sm:text-base">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Courses */}
      <section className="bg-white section-padding" id="courses">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-8 sm:mb-12 text-center"
          >
            Our <span className="text-gradient">Video Courses</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {videoCourses.map((course, index) => {
              const gradients = [
                'from-islamic-gold to-islamic-gold-light',
                'from-islamic-blue to-islamic-blue-light',
                'from-islamic-gold to-islamic-blue',
                'from-islamic-blue-dark to-islamic-gold-dark'
              ]
              const gradient = gradients[index % gradients.length]
              const icons = [Video, Play, BookOpen, Star, Users, Award]
              const Icon = icons[index % icons.length]
              
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
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-secondary font-amiri">{course.title}</h3>
                        <div className="bg-gradient-to-r from-islamic-gold to-islamic-blue text-white px-3 py-1 rounded-lg font-bold text-sm ml-4 flex-shrink-0">
                          {course.price}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed mb-3">{course.description}</p>
                      
                      <div className="grid grid-cols-3 gap-2 text-xs text-gray-500 mb-3">
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {course.totalHours}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-3 h-3 mr-1" />
                          {course.level}
                        </div>
                        <div className="flex items-center">
                          <Video className="w-3 h-3 mr-1" />
                          Video
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <h4 className="font-semibold text-secondary mb-2 text-sm font-amiri">Features:</h4>
                        <div className="grid grid-cols-2 gap-1">
                          {course.features.slice(0, 4).map((feature: string, featureIndex: number) => (
                            <div key={featureIndex} className="flex items-center text-xs text-gray-600">
                              <Star className="w-2 h-2 text-islamic-gold fill-current mr-1" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-3">
                        <h4 className="font-semibold text-secondary mb-2 text-sm font-amiri">Benefits:</h4>
                        <div className="grid grid-cols-1 gap-1">
                          {course.benefits.slice(0, 2).map((benefit: string, benefitIndex: number) => (
                            <div key={benefitIndex} className="flex items-center text-xs text-gray-600">
                              <CheckCircle className="w-2 h-2 text-islamic-gold mr-1" />
                              {benefit}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-secondary mb-2 text-sm font-amiri">Content:</h4>
                        <div className="grid grid-cols-1 gap-1">
                          {course.content.slice(0, 2).map((item: string, contentIndex: number) => (
                            <div key={contentIndex} className="flex items-center text-xs text-gray-600">
                              <BookOpen className="w-2 h-2 text-islamic-gold mr-1" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Link href="/contact" className="btn-primary text-sm py-2 px-4">
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

      {/* Learning Progress Section */}
      <section className="bg-accent section-padding">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-4xl font-bold text-secondary mb-12 text-center"
          >
            Track Your <span className="text-gradient">Learning Progress</span>
          </motion.h2>
          <div className="grid-cards-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="glass-card p-8 text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">Progress Tracking</h3>
              <p className="text-gray-600">Monitor your learning journey with detailed progress reports and achievement badges.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="glass-card p-8 text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">Global Community</h3>
              <p className="text-gray-600">Connect with learners worldwide, share experiences, and get support from peers.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="glass-card p-8 text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">Instant Access</h3>
              <p className="text-gray-600">Start learning immediately with instant access to all course materials and resources.</p>
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
              Start Learning Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Choose from our range of video courses and start your self-paced learning journey. 
              Perfect for busy schedules or those who prefer to learn at their own pace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-large bg-white text-primary hover:bg-gray-100">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/courses" className="btn-large border-2 border-white text-white hover:bg-white hover:text-primary">
                View Live Courses
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default VideoCoursesPage
