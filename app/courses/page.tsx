'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BookOpen, Users, Video, Star, Clock, ArrowRight, CheckCircle, GraduationCap, Award, Globe, Heart } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/Footer'

const CoursesPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const quranCourses = [
    {
      slug: 'nouraniyyah',
      title: 'Nouraniyyah',
      description: 'Learn correct reading of Quranic words starting from letters using the typical Nouraniyyah spelling method, up to complete verses. Basic Tajweed rules are also taught.',
      price: '30€',
      duration: 'Monthly',
      level: 'Beginner',
      step: 'Step 1 - Learn to Read Quran',
      features: ['Letter recognition', 'Word building', 'Basic Tajweed', 'Verse reading'],
      benefits: ['Proven method used worldwide', 'Step-by-step progression', 'Interactive learning', 'Regular assessments'],
      requirements: 'No prior knowledge required',
      schedule: '2 sessions per week, 45 minutes each'
    },
    {
      slug: 'noorul-bayaan',
      title: 'Noorul-Bayaan',
      description: 'A very popular method for learning Quran reading. From letters to reciting Quranic verses. Through spelling words and naming Tajweed rules.',
      price: '30€',
      duration: 'Monthly',
      level: 'Intermediate',
      step: 'Step 1 - Learn to Read Quran',
      features: ['Advanced spelling', 'Tajweed rules', 'Verse recitation', 'Pronunciation'],
      benefits: ['Advanced reading skills', 'Tajweed mastery', 'Fluency improvement', 'Confidence building'],
      requirements: 'Basic Arabic letter knowledge',
      schedule: '2 sessions per week, 45 minutes each'
    },
    {
      slug: 'tajweed-intensive-live',
      title: 'Tajweed Intensive (LIVE)',
      description: 'A comprehensive course covering all areas of Tajweed science. Learn different reading styles with focus on Hafs-an-Asim.',
      price: '30€',
      duration: 'Monthly',
      level: 'Advanced',
      step: 'Step 1 - Learn to Read Quran',
      features: ['Complete Tajweed', 'Reading styles', 'Articulation points', 'Scientific approach'],
      benefits: ['Professional recitation', 'Multiple reading styles', 'Scientific understanding', 'Certification ready'],
      requirements: 'Intermediate Quran reading skills',
      schedule: '3 sessions per week, 60 minutes each'
    },
    {
      slug: 'reading-correction',
      title: 'Reading Correction',
      description: 'For students who can recite Quran slowly and need help with Tajweed rules. Uses the Taqliid (imitation) method.',
      price: '25€',
      duration: 'Monthly',
      level: 'All Levels',
      step: 'Step 1 - Learn to Read Quran',
      features: ['Pronunciation correction', 'Tajweed application', 'Fluency improvement', 'Personal feedback'],
      benefits: ['Improved pronunciation', 'Better fluency', 'Tajweed application', 'Personal attention'],
      requirements: 'Basic recitation ability',
      schedule: '2 sessions per week, 45 minutes each'
    },
    {
      slug: 'hifz-al-quran',
      title: 'Hifz Al-Quran',
      description: 'For memorizing the Quran. Learn 1-2 verses per week with regular reviews and checks of previously learned material.',
      price: '25€',
      duration: 'Monthly',
      level: 'All Levels',
      step: 'Step 2 - Memorization & Mastery',
      features: ['Verse memorization', 'Regular reviews', 'Progress tracking', 'Personal guidance'],
      benefits: ['Structured memorization', 'Long-term retention', 'Personal mentor', 'Progress monitoring'],
      requirements: 'Basic Quran reading ability',
      schedule: '3 sessions per week, 45 minutes each'
    },
    {
      slug: 'tarjuma-al-quran',
      title: 'Tarjuma Al-Quran',
      description: 'Word-for-word and overall translation of Quran. Focus on meaning while maintaining Tajweed in recitation.',
      price: '30€',
      duration: 'Monthly',
      level: 'Intermediate & above',
      step: 'Step 3 - Understanding the Quran',
      features: ['Word-for-word translation', 'Overall meaning', 'Tajweed maintenance', 'Contextual understanding'],
      benefits: ['Deep understanding', 'Meaningful recitation', 'Spiritual connection', 'Practical application'],
      requirements: 'Intermediate Quran reading skills',
      schedule: '2 sessions per week, 60 minutes each'
    },
    {
      slug: 'tafseer-al-quran',
      title: 'Tafseer Al-Quran',
      description: 'In-depth explanation of verses (Asbab al-Nuzul, rulings, wisdom, and connections with daily life).',
      price: '35€',
      duration: 'Monthly',
      level: 'Advanced learners, adults',
      step: 'Step 3 - Understanding the Quran',
      features: ['Asbab al-Nuzul', 'Rulings explanation', 'Wisdom extraction', 'Daily life connections'],
      benefits: ['Deep spiritual insight', 'Practical wisdom', 'Advanced understanding', 'Life guidance'],
      requirements: 'Advanced Quran knowledge',
      schedule: '2 sessions per week, 90 minutes each'
    }
  ]

  const arabicCourses = [
    {
      slug: 'madina-arabic',
      title: 'Madina Arabic',
      description: 'Focus on grammar and analyzing individual sentence parts. Build vocabulary through everyday and religious dialogues.',
      price: '35€',
      duration: 'Monthly',
      level: 'Beginner to Advanced',
      features: ['Grammar focus', 'Sentence analysis', 'Vocabulary building', 'Religious context'],
      benefits: ['Strong grammar foundation', 'Practical vocabulary', 'Religious context', 'Progressive levels'],
      requirements: 'No prior Arabic knowledge needed',
      schedule: '2 sessions per week, 60 minutes each'
    },
    {
      slug: 'bayna-yadaik',
      title: 'Bayna Yadaik',
      description: 'Uses "Al Arabiya bayna Yadayk" book series with many dialogues on everyday topics that promote free speaking.',
      price: '35€',
      duration: 'Monthly',
      level: 'Intermediate to Advanced',
      features: ['Conversational Arabic', 'Everyday dialogues', 'Free speaking', 'Hadith & Quran'],
      benefits: ['Conversational fluency', 'Practical communication', 'Cultural understanding', 'Advanced skills'],
      requirements: 'Basic Arabic knowledge',
      schedule: '2 sessions per week, 60 minutes each'
    }
  ]

  const childrenCourses = [
    {
      slug: 'alif-ba-for-children',
      title: 'Alif Ba for Children (4+)',
      description: 'Children are introduced to letters playfully through various tasks and learn to recognize, pronounce, and name them safely.',
      price: '20€',
      duration: 'Monthly',
      age: '4+ years',
      features: ['Letter recognition', 'Pronunciation', 'Interactive learning', '30 min sessions'],
      benefits: ['Early Arabic foundation', 'Fun learning approach', 'Age-appropriate content', 'Patient teachers'],
      requirements: 'No prior knowledge needed',
      schedule: '2 sessions per week, 30 minutes each'
    },
    {
      slug: 'tajweed-poems-reading',
      title: 'Tajweed Poems & Reading',
      description: 'Children learn Tajweed rules through easily understandable poems and recite Quranic verses together.',
      price: '25€',
      duration: 'Monthly',
      age: '6+ years',
      features: ['Tajweed poems', 'Verse recitation', 'Rule application', '45 min sessions'],
      benefits: ['Memorable learning', 'Group participation', 'Rule understanding', 'Confidence building'],
      requirements: 'Basic letter recognition',
      schedule: '2 sessions per week, 45 minutes each'
    },
    {
      slug: 'hifz-for-children',
      title: 'Hifz for Children',
      description: 'For children who want to memorize Quran in a motivating way. Our loving teachers support your child patiently.',
      price: '20€',
      duration: 'Monthly',
      age: '7+ years',
      features: ['Motivational approach', 'Patient guidance', 'Regular practice', 'Progress tracking'],
      benefits: ['Motivated learning', 'Patient teachers', 'Regular progress', 'Achievement celebration'],
      requirements: 'Basic reading ability',
      schedule: '3 sessions per week, 30 minutes each'
    },
    {
      slug: 'learn-prayer-with-batut',
      title: 'Learn Prayer with BaTut',
      description: 'Our most popular course. No child leaves without being able to perform the 5 daily prayers independently.',
      price: '25€',
      duration: 'Monthly',
      age: '5+ years',
      features: ['Prayer teaching', 'Daily practice', 'Motivation', '45 min sessions'],
      benefits: ['Independent prayer', 'Daily practice', 'Motivation', 'Life-long skill'],
      requirements: 'Basic Arabic knowledge',
      schedule: '2 sessions per week, 45 minutes each'
    }
  ]

  const getIconForCourse = (course: any, type: string, index: number) => {
    const icons = [BookOpen, Star, Video, Users, GraduationCap, CheckCircle, Award, Heart]
    return icons[index % icons.length]
  }

  const getGradientForCourse = (index: number) => {
    const gradients = [
      'from-islamic-gold to-islamic-gold-light',
      'from-islamic-blue to-islamic-blue-light',
      'from-islamic-gold to-islamic-blue',
      'from-islamic-blue-dark to-islamic-gold-dark'
    ]
    return gradients[index % gradients.length]
  }

  const CourseCard = ({ course, type, index }: { course: any, type: string, index: number }) => {
    const Icon = getIconForCourse(course, type, index)
    const gradient = getGradientForCourse(index)
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="islamic-card p-6"
      >
        <div className="flex items-start space-x-4">
          <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-secondary font-amiri">{course.title}</h3>
                {course.step && (
                  <p className="text-sm text-primary font-semibold mt-1">{course.step}</p>
                )}
              </div>
              <div className="bg-gradient-to-r from-islamic-gold to-islamic-blue text-white px-3 py-1 rounded-lg font-bold text-sm ml-4 flex-shrink-0">
                {course.price}
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-3">{course.description}</p>
            
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 mb-3">
              <div className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {course.duration}
              </div>
              <div className="flex items-center">
                <Users className="w-3 h-3 mr-1" />
                {course.level || course.age}
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

            <div className="mb-4">
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
            
            <div className="flex gap-2">
              <Link href={`/courses/${course.slug || course.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`} className="btn-primary text-sm py-2 px-4 flex-1 text-center">
                View Details
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn-secondary text-sm py-2 px-4">
                Enroll
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section 
        className="relative text-white section-padding overflow-hidden"
        style={{
          minHeight: '70vh'
        }}
      >
        {/* Clean & Elegant Background */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/4357946530f126d289fa636573275f87.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        
        {/* Text Readability Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.8) 100%)',
            zIndex: 3
          }}
        ></div>
        
        {/* Content */}
        <div className="relative z-10">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Our <span className="text-primary">Courses</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0">
              Discover our comprehensive range of Islamic education courses designed for all ages and levels. 
              Each course is carefully crafted to ensure optimal learning outcomes and spiritual growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Link href="/contact" className="btn-large bg-primary hover:bg-primary-dark text-white border-0 text-sm sm:text-base">
                Get Started Today
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link href="/quiz" className="btn-large border-2 border-white text-white hover:bg-white hover:text-secondary text-sm sm:text-base">
                Take Course Quiz
              </Link>
            </div>
          </motion.div>
        </div>
        </div>
      </section>

      {/* Quran Courses */}
      <section className="bg-white section-padding">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-8 sm:mb-12 flex items-center justify-center flex-wrap"
          >
            <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-primary mr-3 sm:mr-4" />
            <span className="text-center">Quran Courses (7 courses)</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {quranCourses.map((course, index) => (
              <CourseCard key={course.title} course={course} type="quran" index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Arabic Courses */}
      <section className="bg-accent section-padding">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-8 sm:mb-12 flex items-center justify-center flex-wrap"
          >
            <Video className="w-8 h-8 sm:w-10 sm:h-10 text-primary mr-3 sm:mr-4" />
            <span className="text-center">Arabic Language Courses</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {arabicCourses.map((course, index) => (
              <CourseCard key={course.title} course={course} type="arabic" index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Children Courses */}
      <section className="bg-white section-padding">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-8 sm:mb-12 flex items-center justify-center flex-wrap"
          >
            <Users className="w-8 h-8 sm:w-10 sm:h-10 text-primary mr-3 sm:mr-4" />
            <span className="text-center">AlephLam Kids</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {childrenCourses.map((course, index) => (
              <CourseCard key={course.title} course={course} type="children" index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-accent section-padding">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-8 sm:mb-12 text-center"
          >
            Why Students Choose <span className="text-gradient">AlephLam</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="glass-card p-6 sm:p-8 text-center relative z-10"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">500+</h3>
              <p className="text-gray-600 text-sm sm:text-base">Active Students</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="glass-card p-6 sm:p-8 text-center relative z-10"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">15+</h3>
              <p className="text-gray-600 text-sm sm:text-base">Years Experience</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="glass-card p-6 sm:p-8 text-center relative z-10"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">25+</h3>
              <p className="text-gray-600 text-sm sm:text-base">Countries Served</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="glass-card p-6 sm:p-8 text-center relative z-10"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">98%</h3>
              <p className="text-gray-600 text-sm sm:text-base">Student Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light section-padding">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8">
              Join hundreds of students who have already transformed their Quran and Arabic learning experience with AlephLam.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Link href="/contact" className="btn-large bg-white text-primary hover:bg-gray-100 text-sm sm:text-base">
                Enroll Now
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <Link href="/quiz" className="btn-large border-2 border-white text-white hover:bg-white hover:text-primary text-sm sm:text-base">
                Find Your Course
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default CoursesPage
