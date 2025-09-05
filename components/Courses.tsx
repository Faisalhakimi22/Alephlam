'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BookOpen, Users, Video, Star, Clock, ArrowRight } from 'lucide-react'

const Courses = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const quranCourses = [
    {
      title: 'Nouraniyyah',
      description: 'Learn correct reading of Quranic words starting from letters using the typical Nouraniyyah spelling method, up to complete verses. Basic Tajweed rules are also taught.',
      price: '30€',
      duration: 'Monthly',
      level: 'Beginner',
      features: ['Letter recognition', 'Word building', 'Basic Tajweed', 'Verse reading']
    },
    {
      title: 'Noorul-Bayaan',
      description: 'A very popular method for learning Quran reading. From letters to reciting Quranic verses. Through spelling words and naming Tajweed rules.',
      price: '30€',
      duration: 'Monthly',
      level: 'Intermediate',
      features: ['Advanced spelling', 'Tajweed rules', 'Verse recitation', 'Pronunciation']
    },
    {
      title: 'Tajweed Intensive - LIVE',
      description: 'A comprehensive course covering all areas of Tajweed science. Learn different reading styles with focus on Hafs-an-Asim.',
      price: '30€',
      duration: 'Monthly',
      level: 'Advanced',
      features: ['Complete Tajweed', 'Reading styles', 'Articulation points', 'Scientific approach']
    },
    {
      title: 'Hifz-Al Quran',
      description: 'For memorizing the Quran. Learn 1-2 verses per week with regular reviews and checks of previously learned material.',
      price: '25€',
      duration: 'Monthly',
      level: 'All Levels',
      features: ['Verse memorization', 'Regular reviews', 'Progress tracking', 'Personal guidance']
    },
    {
      title: 'Reading Correction',
      description: 'For students who can recite Quran slowly and need help with Tajweed rules. Uses the Taqliid (imitation) method.',
      price: '25€',
      duration: 'Monthly',
      level: 'All Levels',
      features: ['Pronunciation correction', 'Tajweed application', 'Fluency improvement', 'Personal feedback']
    }
  ]

  const arabicCourses = [
    {
      title: 'Madina Arabic',
      description: 'Focus on grammar and analyzing individual sentence parts. Build vocabulary through everyday and religious dialogues.',
      price: '35€',
      duration: 'Monthly',
      level: 'Beginner to Advanced',
      features: ['Grammar focus', 'Sentence analysis', 'Vocabulary building', 'Religious context']
    },
    {
      title: 'Bayna Yadaik',
      description: 'Uses "Al Arabiya bayna Yadayk" book series with many dialogues on everyday topics that promote free speaking.',
      price: '35€',
      duration: 'Monthly',
      level: 'Intermediate to Advanced',
      features: ['Conversational Arabic', 'Everyday dialogues', 'Free speaking', 'Hadith & Quran']
    }
  ]

  const childrenCourses = [
    {
      title: 'Alif Ba for Children (4+)',
      description: 'Children are introduced to letters playfully through various tasks and learn to recognize, pronounce, and name them safely.',
      price: '20€',
      duration: 'Monthly',
      age: '4+ years',
      features: ['Letter recognition', 'Pronunciation', 'Interactive learning', '30 min sessions']
    },
    {
      title: 'Tajweed Poems & Reading',
      description: 'Children learn Tajweed rules through easily understandable poems and recite Quranic verses together.',
      price: '25€',
      duration: 'Monthly',
      age: '6+ years',
      features: ['Tajweed poems', 'Verse recitation', 'Rule application', '45 min sessions']
    },
    {
      title: 'Hifz for Children',
      description: 'For children who want to memorize Quran in a motivating way. Our loving teachers support your child patiently.',
      price: '20€',
      duration: 'Monthly',
      age: '7+ years',
      features: ['Motivational approach', 'Patient guidance', 'Regular practice', 'Progress tracking']
    },
    {
      title: 'Learn Prayer with BaTut',
      description: 'Our most popular course. No child leaves without being able to perform the 5 daily prayers independently.',
      price: '25€',
      duration: 'Monthly',
      age: '5+ years',
      features: ['Prayer teaching', 'Daily practice', 'Motivation', '45 min sessions']
    }
  ]

  const getIconForCourse = (course: any, type: string) => {
    if (type === 'quran') {
      if (course.title.includes('Nouraniyyah')) return <BookOpen className="w-6 h-6 text-white" />
      if (course.title.includes('Noorul-Bayaan')) return <Star className="w-6 h-6 text-white" />
      if (course.title.includes('Tajweed')) return <Video className="w-6 h-6 text-white" />
      if (course.title.includes('Hifz')) return <Users className="w-6 h-6 text-white" />
      return <Clock className="w-6 h-6 text-white" />
    }
    if (type === 'arabic') {
      return course.title.includes('Madina') ? <BookOpen className="w-6 h-6 text-white" /> : <Video className="w-6 h-6 text-white" />
    }
    // Children courses
    if (course.title.includes('Alif Ba')) return <BookOpen className="w-6 h-6 text-white" />
    if (course.title.includes('Tajweed')) return <Star className="w-6 h-6 text-white" />
    if (course.title.includes('Hifz')) return <Users className="w-6 h-6 text-white" />
    return <Clock className="w-6 h-6 text-white" />
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

  const CourseCard = ({ course, type, index }: { course: any, type: string, index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="islamic-card p-6"
    >
      <div className="flex items-start space-x-4">
        <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${getGradientForCourse(course, type, index)} rounded-xl flex items-center justify-center`}>
          {getIconForCourse(course, type)}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-bold text-secondary font-amiri">{course.title}</h3>
            <div className="bg-gradient-to-r from-islamic-gold to-islamic-blue text-white px-3 py-1 rounded-lg font-bold text-sm ml-4 flex-shrink-0">
              {course.price}
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {course.duration}
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              {course.level || course.age}
            </div>
          </div>
          
          <p className="text-gray-600 leading-relaxed mb-4">
            {course.description}
          </p>
          
          <div className="mb-4">
            <h4 className="font-semibold text-secondary mb-2 text-sm font-amiri">Key Features:</h4>
            <div className="grid grid-cols-2 gap-2">
              {course.features.slice(0, 4).map((feature: string, featureIndex: number) => (
                <div key={featureIndex} className="flex items-center text-gray-600">
                  <div className="w-4 h-4 bg-islamic-gold/10 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                    <Star className="w-2 h-2 text-islamic-gold fill-current" />
                  </div>
                  <span className="text-xs">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <button className="btn-primary text-sm py-2 px-4">
            Book Course
            <ArrowRight className="ml-1 w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 section-padding" id="courses">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Our <span className="text-gradient">Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of courses designed for all ages and levels. Each course is carefully crafted to ensure optimal learning outcomes.
          </p>
        </motion.div>

        {/* Quran Courses */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold text-secondary mb-12 flex items-center justify-center"
          >
            <BookOpen className="w-10 h-10 text-primary mr-4" />
            Quran Courses
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {quranCourses.map((course, index) => (
              <CourseCard key={course.title} course={course} type="quran" index={index} />
            ))}
          </div>
        </div>

        {/* Arabic Courses */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl font-bold text-secondary mb-12 flex items-center justify-center"
          >
            <Video className="w-10 h-10 text-primary mr-4" />
            Arabic Language Courses
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {arabicCourses.map((course, index) => (
              <CourseCard key={course.title} course={course} type="arabic" index={index} />
            ))}
          </div>
        </div>

        {/* Children Courses */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl font-bold text-secondary mb-12 flex items-center justify-center"
          >
            <Users className="w-10 h-10 text-primary mr-4" />
            AlephLam Kids
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {childrenCourses.map((course, index) => (
              <CourseCard key={course.title} course={course} type="children" index={index} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-card-gradient bg-gradient-to-r from-secondary to-secondary-light rounded-3xl p-8 md:p-12 text-white text-center relative z-10"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Learning Journey?
          </h3>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Join hundreds of students who have already transformed their Quran and Arabic learning experience with AlephLam.
          </p>
                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button className="btn-large bg-primary hover:bg-primary-dark text-white border-0">
               Book Your Course
               <ArrowRight className="ml-2 w-5 h-5" />
             </button>
             <button className="btn-large border-2 border-white text-white hover:bg-white hover:text-secondary">
               Contact Us
             </button>
           </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Courses
