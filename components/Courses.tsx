'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BookOpen, Users, Video, Star, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { courseData } from '@/data/courseData'

const Courses = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [activeCard, setActiveCard] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const { scrollXProgress } = useScroll({ container: scrollRef })


  // Use the actual course data instead of local arrays
  const allCourses = courseData.map(course => ({
    ...course,
    type: course.category
  }))

  // Track scroll position to update active card with debouncing
  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    
    const handleScroll = () => {
      if (!scrollRef.current) return
      
      // Clear previous timeout
      clearTimeout(timeoutId)
      
      // Debounce the scroll event with longer delay for smoother transitions
      timeoutId = setTimeout(() => {
        const scrollLeft = scrollRef.current!.scrollLeft
        const cardWidth = 352 // Width of each card (320px + 32px margin)
        const newActiveCard = Math.round(scrollLeft / cardWidth)
        
        // Only update if there's a significant change to prevent flickering
        if (newActiveCard !== activeCard && newActiveCard >= 0 && newActiveCard < allCourses.length) {
          setActiveCard(newActiveCard)
        }
      }, 150) // 150ms debounce for smoother transitions
    }

    const scrollContainer = scrollRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true })
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll)
        clearTimeout(timeoutId)
      }
    }
  }, [activeCard, allCourses.length])

  const getIconForCourse = (course: any, type: string) => {
    if (type === 'quran') {
      if (course.title.includes('Nouraniyyah')) return BookOpen
      if (course.title.includes('Noorul-Bayaan')) return Star
      if (course.title.includes('Tajweed')) return Video
      if (course.title.includes('Hifz')) return Users
      return Clock
    }
    if (type === 'arabic') {
      return course.title.includes('Madina') ? BookOpen : Video
    }
    // Children courses
    if (course.title.includes('Alif Ba')) return BookOpen
    if (course.title.includes('Tajweed')) return Star
    if (course.title.includes('Hifz')) return Users
    return Clock
  }

  const getGradientForCourse = (course: any, type: string, index: number) => {
    const gradients = [
      'from-islamic-gold to-islamic-gold-light',
      'from-islamic-blue to-islamic-blue-light',
      'from-islamic-gold to-islamic-blue',
      'from-islamic-blue-dark to-islamic-gold-dark'
    ]
    return gradients[index % gradients.length]
  }

  const scrollToCard = (direction: 'left' | 'right') => {
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

  const getCourseSlug = (course: any) => {
    // Use the actual slug from courseData
    return course.slug
  }

  const ModernCourseCard = ({ course, index, isActive }: { course: any, index: number, isActive: boolean }) => {
    const courseSlug = getCourseSlug(course)
    
    return (
      <div className="flex-shrink-0 w-80 mx-4 h-96">
        <Link href={`/courses/${courseSlug}`} className="block h-full">
          <div
            className={`islamic-card p-6 cursor-pointer h-full flex flex-col transition-all duration-300 ${
              isActive ? 'shadow-2xl' : 'shadow-lg'
            }`}
          >
            <div className="flex items-start space-x-4 h-full">
              <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${getGradientForCourse(course, course.type, index)} rounded-xl flex items-center justify-center`}>
                {(() => {
                  const IconComponent = getIconForCourse(course, course.type)
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
                      // You can add enrollment logic here or navigate to booking page
                      window.location.href = `/book-course?course=${courseSlug}`
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

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" id="courses">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-4 md:mb-6">
            Our <span className="text-gradient">Courses</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            Discover our comprehensive range of courses designed for all ages and levels. Experience modern learning with interactive, engaging content.
          </p>
        </motion.div>

        {/* Horizontal Scrolling Course Cards */}
        <div className="relative">
          {/* Navigation Arrows */}
          <motion.button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200 hover:bg-white transition-all duration-300"
            onClick={() => scrollToCard('left')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6 text-secondary" />
          </motion.button>
          
          <motion.button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200 hover:bg-white transition-all duration-300"
            onClick={() => scrollToCard('right')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6 text-secondary" />
          </motion.button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide gap-8 pb-6 px-12"
            style={{
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              scrollBehavior: 'smooth'
            }}
          >
            {allCourses.map((course, index) => (
              <div
                key={`${course.title}-${index}`}
                style={{ scrollSnapAlign: 'center' }}
              >
                <ModernCourseCard 
                  course={course} 
                  index={index} 
                  isActive={activeCard === index}
                />
              </div>
            ))}
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {allCourses.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeCard === index 
                    ? 'bg-gradient-to-r from-islamic-gold to-islamic-blue scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => {
                  setActiveCard(index)
                  if (scrollRef.current) {
                    scrollRef.current.scrollTo({
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

        {/* Course Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 md:mt-20"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {/* Quran Courses Summary */}
            <motion.div
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-islamic-gold to-islamic-gold-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary font-amiri mb-2">Quran Courses</h3>
              <p className="text-gray-600 text-sm">{courseData.filter(c => c.category === 'quran').length} comprehensive courses</p>
              <div className="mt-3 text-xs text-gray-500">
                From beginner to advanced levels
              </div>
            </motion.div>

            {/* Arabic Courses Summary */}
            <motion.div
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-islamic-blue to-islamic-blue-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary font-amiri mb-2">Arabic Language</h3>
              <p className="text-gray-600 text-sm">{courseData.filter(c => c.category === 'arabic').length} specialized programs</p>
              <div className="mt-3 text-xs text-gray-500">
                Grammar, conversation & more
              </div>
            </motion.div>

            {/* Children Courses Summary */}
            <motion.div
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-islamic-gold to-islamic-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-secondary font-amiri mb-2">AlephLam Kids</h3>
              <p className="text-gray-600 text-sm">{courseData.filter(c => c.category === 'children').length} fun learning programs</p>
              <div className="mt-3 text-xs text-gray-500">
                Ages 4+ with interactive methods
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 md:mt-20 relative"
        >
          <div className="glass-card-gradient bg-gradient-to-r from-secondary to-secondary-light rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            {/* Animated background elements */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full opacity-10"
              animate={{
                background: [
                  'radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.3) 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 50%, rgba(212, 175, 55, 0.3) 0%, transparent 50%)',
                  'radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.3) 0%, transparent 50%)'
                ]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                Ready to Start Your Learning Journey?
              </h3>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8 md:mb-10">
                Join hundreds of students who have already transformed their Quran and Arabic learning experience with AlephLam's modern approach.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="btn-large bg-gradient-to-r from-islamic-gold to-islamic-blue hover:from-islamic-gold-dark hover:to-islamic-blue-dark text-white border-0 shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Your Course
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
                
                <motion.button
                  className="btn-large border-2 border-white text-white hover:bg-white hover:text-secondary backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Courses
