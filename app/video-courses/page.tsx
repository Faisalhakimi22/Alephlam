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
        <div className="container-custom text-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-primary">Video</span> Courses
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Learn at your own pace with our comprehensive video courses. Perfect for busy schedules, 
              self-paced learning, or supplementing your live classes with additional practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#courses" className="btn-large bg-primary hover:bg-primary-dark text-white border-0">
                Browse Courses
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <Link href="/contact" className="btn-large border-2 border-white text-white hover:bg-white hover:text-secondary">
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learning Features */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold text-secondary mb-12 text-center"
          >
            Why Choose <span className="text-gradient">Video Learning</span>
          </motion.h2>
          <div className="grid-cards-4">
            {learningFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 text-center relative z-10"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="bg-accent section-padding">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl font-bold text-secondary mb-12 text-center"
          >
            Learning <span className="text-gradient">Platform Features</span>
          </motion.h2>
          <div className="grid-cards-4">
            {platformFeatures.map((feature, index) => (
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
                <p className="text-gray-600 font-medium">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Courses */}
      <section className="bg-white section-padding" id="courses">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4xl font-bold text-secondary mb-12 text-center"
          >
            Our <span className="text-gradient">Video Courses</span>
          </motion.h2>
          <div className="grid-cards-2">
            {videoCourses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card-interactive p-8 h-full flex flex-col relative z-10"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-secondary">{course.title}</h3>
                  <div className="text-primary font-bold text-2xl">{course.price}</div>
                </div>
                
                <p className="text-gray-600 mb-6 text-lg leading-relaxed flex-grow">{course.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="font-medium">Duration:</span> {course.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="font-medium">Level:</span> {course.level}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Video className="w-4 h-4 mr-2" />
                      <span className="font-medium">Total Hours:</span> {course.totalHours}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">Requirements:</span>
                      <p className="mt-1">{course.requirements}</p>
                    </div>
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">Instructor:</span>
                      <p className="mt-1">{course.instructor}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-secondary mb-3 flex items-center">
                    <Star className="w-4 h-4 text-primary mr-2" />
                    Course Features:
                  </h4>
                  <ul className="space-y-2">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-3 h-3 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-secondary mb-3 flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-2" />
                    What You'll Gain:
                  </h4>
                  <ul className="space-y-2">
                    {course.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-3 h-3 text-primary mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-secondary mb-3 flex items-center">
                    <BookOpen className="w-4 h-4 text-primary mr-2" />
                    Course Content:
                  </h4>
                  <ul className="space-y-2">
                    {course.content.map((item, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-3 h-3 text-primary mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <Link href="/contact" className="btn-primary w-full text-center">
                    Enroll Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
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
