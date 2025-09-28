'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BookOpen, Users, Video, Star, Clock, ArrowRight, CheckCircle, GraduationCap, Award, Globe, Heart, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'

const CoursesPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // State for horizontal scrolling
  const [activeQuranCard, setActiveQuranCard] = useState(0)
  const [activeArabicCard, setActiveArabicCard] = useState(0)
  const [activeChildrenCard, setActiveChildrenCard] = useState(0)
  
  const quranScrollRef = useRef<HTMLDivElement>(null)
  const arabicScrollRef = useRef<HTMLDivElement>(null)
  const childrenScrollRef = useRef<HTMLDivElement>(null)

  // Course data arrays
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

  // Track scroll position for Quran courses
  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    
    const handleScroll = () => {
      if (!quranScrollRef.current) return
      
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        const scrollLeft = quranScrollRef.current!.scrollLeft
        const cardWidth = 352
        const newActiveCard = Math.round(scrollLeft / cardWidth)
        
        if (newActiveCard !== activeQuranCard && newActiveCard >= 0 && newActiveCard < quranCourses.length) {
          setActiveQuranCard(newActiveCard)
        }
      }, 150)
    }

    const scrollContainer = quranScrollRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true })
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll)
        clearTimeout(timeoutId)
      }
    }
  }, [activeQuranCard, quranCourses.length])

  // Track scroll position for Arabic courses
  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    
    const handleScroll = () => {
      if (!arabicScrollRef.current) return
      
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        const scrollLeft = arabicScrollRef.current!.scrollLeft
        const cardWidth = 352
        const newActiveCard = Math.round(scrollLeft / cardWidth)
        
        if (newActiveCard !== activeArabicCard && newActiveCard >= 0 && newActiveCard < arabicCourses.length) {
          setActiveArabicCard(newActiveCard)
        }
      }, 150)
    }

    const scrollContainer = arabicScrollRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true })
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll)
        clearTimeout(timeoutId)
      }
    }
  }, [activeArabicCard, arabicCourses.length])

  // Track scroll position for Children courses
  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    
    const handleScroll = () => {
      if (!childrenScrollRef.current) return
      
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        const scrollLeft = childrenScrollRef.current!.scrollLeft
        const cardWidth = 352
        const newActiveCard = Math.round(scrollLeft / cardWidth)
        
        if (newActiveCard !== activeChildrenCard && newActiveCard >= 0 && newActiveCard < childrenCourses.length) {
          setActiveChildrenCard(newActiveCard)
        }
      }, 150)
    }

    const scrollContainer = childrenScrollRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true })
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll)
        clearTimeout(timeoutId)
      }
    }
  }, [activeChildrenCard, childrenCourses.length])

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

  // Scroll functions for horizontal navigation
  const scrollToCard = (scrollRef: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    
    const cardWidth = 352 // Width of each card (320px + 32px margin)
    const currentScroll = scrollRef.current.scrollLeft
    const newScroll = direction === 'left' 
      ? Math.max(0, currentScroll - cardWidth)
      : currentScroll + cardWidth
    
    scrollRef.current.scrollTo({
      left: newScroll,
      behavior: 'smooth'
    })
  }

  // Horizontal Course Card component for mobile/tablet
  const HorizontalCourseCard = ({ course, index, isActive }: { course: any, index: number, isActive: boolean }) => {
    const getCourseSlug = (course: any) => {
      return course.slug || course.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
    }
    
    return (
      <div className="flex-shrink-0 w-80 mx-4 h-96">
        <Link href={`/courses/${getCourseSlug(course)}`} className="block h-full">
          <div
            className={`islamic-card p-6 cursor-pointer h-full flex flex-col transition-all duration-300 ${
              isActive ? 'shadow-2xl' : 'shadow-lg'
            }`}
          >
            <div className="flex items-start space-x-4 h-full">
              <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${getGradientForCourse(index)} rounded-xl flex items-center justify-center`}>
                {(() => {
                  const IconComponent = getIconForCourse(course, course.type || 'quran', index)
                  return <IconComponent className="w-6 h-6 text-white" />
                })()}
              </div>
              <div className="flex-1 flex flex-col h-full">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-secondary font-amiri leading-tight">{course.title}</h3>
                  <div className="bg-gradient-to-r from-islamic-gold to-islamic-blue text-white px-3 py-1.5 rounded-lg font-bold text-sm ml-4 flex-shrink-0">
                    {course.price}
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1.5" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1.5" />
                    {course.level || course.age}
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2 h-12">
                  {course.description}
                </p>
                
                <div className="flex-1 mb-4">
                  <h4 className="font-semibold text-secondary mb-2 text-sm font-amiri">Key Features:</h4>
                  <div className="space-y-1">
                    {course.features.slice(0, 2).map((feature: string, featureIndex: number) => (
                      <div key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-3 h-3 bg-islamic-gold/10 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                          <Star className="w-1.5 h-1.5 text-islamic-gold fill-current" />
                        </div>
                        <span className="text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-auto">
                  <button 
                    className="w-full bg-gradient-to-r from-islamic-gold to-islamic-blue text-white py-2.5 px-4 rounded-lg font-semibold text-sm shadow-lg flex items-center justify-center gap-2 hover:from-islamic-gold-dark hover:to-islamic-blue-dark transition-all duration-300"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      window.location.href = `/book-course?course=${getCourseSlug(course)}`
                    }}
                  >
                    Enroll Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
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
        className="relative text-white py-12 sm:py-16 lg:py-20 px-4 overflow-hidden"
        style={{
          minHeight: '60vh'
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
              Our <span className="text-primary">Courses</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed mb-4 sm:mb-6 md:mb-8 px-2 sm:px-0">
              Discover our comprehensive range of Islamic education courses designed for all ages and levels. 
              Each course is carefully crafted to ensure optimal learning outcomes and spiritual growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center max-w-sm sm:max-w-md md:max-w-none mx-auto">
              <Link href="/contact" className="btn bg-primary hover:bg-primary-dark text-white border-0 text-sm py-2.5 px-4">
                Get Started Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link href="/quiz" className="btn border-2 border-white text-white hover:bg-white hover:text-secondary text-sm py-2.5 px-4">
                Take Course Quiz
              </Link>
            </div>
          </motion.div>
        </div>
        </div>
      </section>

      {/* Quran Courses */}
      <section className="bg-white py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-6 sm:mb-8 lg:mb-12 flex items-center justify-center flex-wrap"
          >
            <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-primary mr-2 sm:mr-3 lg:mr-4" />
            <span className="text-center">Quran Courses (7 courses)</span>
          </motion.h2>
          
          {/* Desktop Grid View */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {quranCourses.map((course, index) => (
              <CourseCard key={course.title} course={course} type="quran" index={index} />
            ))}
          </div>

          {/* Mobile/Tablet Horizontal Scroll */}
          <div className="lg:hidden relative">
            {/* Navigation Arrows */}
            <motion.button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200 hover:bg-white transition-all duration-300"
              onClick={() => scrollToCard(quranScrollRef, 'left')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-secondary" />
            </motion.button>
            
            <motion.button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200 hover:bg-white transition-all duration-300"
              onClick={() => scrollToCard(quranScrollRef, 'right')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-secondary" />
            </motion.button>

            {/* Scrollable Container */}
            <div
              ref={quranScrollRef}
              className="flex overflow-x-auto scrollbar-hide gap-8 pb-6 px-12"
              style={{
                scrollSnapType: 'x mandatory',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                scrollBehavior: 'smooth'
              }}
            >
              {quranCourses.map((course, index) => (
                <div
                  key={`quran-${course.title}-${index}`}
                  style={{ scrollSnapAlign: 'center' }}
                >
                  <HorizontalCourseCard 
                    course={course} 
                    index={index} 
                    isActive={activeQuranCard === index}
                  />
                </div>
              ))}
            </div>

            {/* Scroll Indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {quranCourses.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeQuranCard === index 
                      ? 'bg-gradient-to-r from-islamic-gold to-islamic-blue scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => {
                    setActiveQuranCard(index)
                    if (quranScrollRef.current) {
                      quranScrollRef.current.scrollTo({
                        left: index * 352,
                        behavior: 'smooth'
                      })
                    }
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Arabic Courses */}
      <section className="bg-accent py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-6 sm:mb-8 lg:mb-12 flex items-center justify-center flex-wrap"
          >
            <Video className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-primary mr-2 sm:mr-3 lg:mr-4" />
            <span className="text-center">Arabic Language Courses</span>
          </motion.h2>
          
          {/* Desktop Grid View */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {arabicCourses.map((course, index) => (
              <CourseCard key={course.title} course={course} type="arabic" index={index} />
            ))}
          </div>

          {/* Mobile/Tablet Horizontal Scroll */}
          <div className="lg:hidden relative">
            {/* Navigation Arrows */}
            <motion.button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200 hover:bg-white transition-all duration-300"
              onClick={() => scrollToCard(arabicScrollRef, 'left')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-secondary" />
            </motion.button>
            
            <motion.button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200 hover:bg-white transition-all duration-300"
              onClick={() => scrollToCard(arabicScrollRef, 'right')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-secondary" />
            </motion.button>

            {/* Scrollable Container */}
            <div
              ref={arabicScrollRef}
              className="flex overflow-x-auto scrollbar-hide gap-8 pb-6 px-12"
              style={{
                scrollSnapType: 'x mandatory',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                scrollBehavior: 'smooth'
              }}
            >
              {arabicCourses.map((course, index) => (
                <div
                  key={`arabic-${course.title}-${index}`}
                  style={{ scrollSnapAlign: 'center' }}
                >
                  <HorizontalCourseCard 
                    course={course} 
                    index={index} 
                    isActive={activeArabicCard === index}
                  />
                </div>
              ))}
            </div>

            {/* Scroll Indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {arabicCourses.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeArabicCard === index 
                      ? 'bg-gradient-to-r from-islamic-gold to-islamic-blue scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => {
                    setActiveArabicCard(index)
                    if (arabicScrollRef.current) {
                      arabicScrollRef.current.scrollTo({
                        left: index * 352,
                        behavior: 'smooth'
                      })
                    }
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Children Courses */}
      <section className="bg-white py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-6 sm:mb-8 lg:mb-12 flex items-center justify-center flex-wrap"
          >
            <Users className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-primary mr-2 sm:mr-3 lg:mr-4" />
            <span className="text-center">AlephLam Kids</span>
          </motion.h2>
          
          {/* Desktop Grid View */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {childrenCourses.map((course, index) => (
              <CourseCard key={course.title} course={course} type="children" index={index} />
            ))}
          </div>

          {/* Mobile/Tablet Horizontal Scroll */}
          <div className="lg:hidden relative">
            {/* Navigation Arrows */}
            <motion.button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200 hover:bg-white transition-all duration-300"
              onClick={() => scrollToCard(childrenScrollRef, 'left')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-secondary" />
            </motion.button>
            
            <motion.button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200 hover:bg-white transition-all duration-300"
              onClick={() => scrollToCard(childrenScrollRef, 'right')}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-secondary" />
            </motion.button>

            {/* Scrollable Container */}
            <div
              ref={childrenScrollRef}
              className="flex overflow-x-auto scrollbar-hide gap-8 pb-6 px-12"
              style={{
                scrollSnapType: 'x mandatory',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                scrollBehavior: 'smooth'
              }}
            >
              {childrenCourses.map((course, index) => (
                <div
                  key={`children-${course.title}-${index}`}
                  style={{ scrollSnapAlign: 'center' }}
                >
                  <HorizontalCourseCard 
                    course={course} 
                    index={index} 
                    isActive={activeChildrenCard === index}
                  />
                </div>
              ))}
            </div>

            {/* Scroll Indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {childrenCourses.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeChildrenCard === index 
                      ? 'bg-gradient-to-r from-islamic-gold to-islamic-blue scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => {
                    setActiveChildrenCard(index)
                    if (childrenScrollRef.current) {
                      childrenScrollRef.current.scrollTo({
                        left: index * 352,
                        behavior: 'smooth'
                      })
                    }
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-accent py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-6 sm:mb-8 lg:mb-12 text-center"
          >
            Why Students Choose <span className="text-gradient">AlephLam</span>
          </motion.h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="glass-card p-4 sm:p-6 lg:p-8 text-center relative z-10"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 shadow-lg">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-1 sm:mb-2">500+</h3>
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base">Active Students</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="glass-card p-4 sm:p-6 lg:p-8 text-center relative z-10"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 shadow-lg">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-1 sm:mb-2">15+</h3>
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base">Years Experience</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="glass-card p-4 sm:p-6 lg:p-8 text-center relative z-10"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 shadow-lg">
                <Globe className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-1 sm:mb-2">25+</h3>
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base">Countries Served</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="glass-card p-4 sm:p-6 lg:p-8 text-center relative z-10"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 shadow-lg">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-1 sm:mb-2">98%</h3>
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base">Student Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-6 md:mb-8">
              Join hundreds of students who have already transformed their Quran and Arabic learning experience with AlephLam.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center max-w-sm sm:max-w-md md:max-w-none mx-auto">
              <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-100 text-sm py-2.5 px-4">
                Enroll Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link href="/quiz" className="btn border-2 border-white text-white hover:bg-white hover:text-primary text-sm py-2.5 px-4">
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
