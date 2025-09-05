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
      <section className="relative bg-gradient-to-br from-secondary via-secondary-light to-secondary-dark text-white py-24 px-4">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-primary">AlephLam</span> Kids
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Nurturing the next generation of Islamic scholars through engaging, age-appropriate education. 
              Our specialized programs make learning fun, meaningful, and spiritually enriching.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Start Learning
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="#courses" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-secondary font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                View Courses
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="py-20 px-4 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-secondary mb-6">
              Our <span className="text-gradient">Teaching Approach</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand that children learn differently. Our methodology combines traditional Islamic education 
              with modern teaching techniques to create an engaging and effective learning experience.
            </p>
          </motion.div>
          
          <div className="grid-cards-4">
            {teachingMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 text-center group relative z-10"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <method.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-4">{method.title}</h3>
                <p className="text-gray-600 leading-relaxed">{method.description}</p>
              </motion.div>
            ))}
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
          
          <div className="grid-cards-3">
            {ageGroups.map((group, index) => (
              <motion.div
                key={group.age}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 relative z-10"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <group.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-secondary mb-2">{group.age}</h3>
                  <h4 className="text-lg font-semibold text-primary">{group.title}</h4>
                </div>
                <p className="text-gray-600 mb-6 text-center">{group.description}</p>
                <ul className="space-y-3">
                  {group.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
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
          
          <div className="grid-cards-2">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card-interactive p-8 relative z-10"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <course.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{course.price}</div>
                    <div className="text-sm text-gray-500">{course.duration}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-secondary mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>
                
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <Users className="w-4 h-4 mr-2" />
                  <span>Age: {course.age}</span>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-secondary mb-3">Course Features:</h4>
                  <ul className="space-y-2">
                    {course.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Enroll Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
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
