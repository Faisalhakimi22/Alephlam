'use client'

import { motion } from 'framer-motion'
import { Play, ArrowRight, Star, BookOpen, Users, Award, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface HeroProps {
  onQuizClick: () => void
}

const Hero = ({ onQuizClick }: HeroProps) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60, transition: { duration: 0.6 } },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50 -mt-28 pt-28">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-primary/10 to-teal-400/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-secondary/5 to-primary/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center min-h-screen pt-0 pb-16 sm:pb-20">
          {/* Left Content */}
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="space-y-6 sm:space-y-8 lg:space-y-10 order-2 lg:order-1"
          >

            {/* Main Heading */}
            <motion.div variants={fadeInUp} className="space-y-4 sm:space-y-6 lg:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-secondary">
                  Learn 
                </span>
                <span className="bg-gradient-to-r from-primary to-teal-600 bg-clip-text text-transparent">
                  Quran & Arabic
                </span>
                <br />
                <span className="text-gray-700">
                  Together, 
                </span>
                <span className="bg-gradient-to-r from-primary to-teal-600 bg-clip-text text-transparent">
                  As a Family
                </span>
              </h1>
              
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed max-w-2xl">
                <p className="text-gray-700 font-medium">
                  We believe learning the Quran and Arabic should feel{' '}
                  <span className="text-primary font-semibold">natural and uplifting</span>. That's why our online classes are built around{' '}
                  <span className="text-secondary font-semibold">family, comfort, and encouragement</span>.
                </p>
                <p className="text-gray-600">
                  Here, you won't feel{' '}
                  <span className="text-gray-700 font-semibold">pressure or fear</span>—only{' '}
                  <span className="text-primary font-semibold">guidance, patience, and motivation</span> to achieve your goals.
                </p>
                <p className="text-gray-600">
                  Together, we make learning the Quran and Arabic a{' '}
                  <span className="text-secondary font-semibold">meaningful journey</span> for{' '}
                  <span className="text-primary font-semibold">every member of the family</span>.
                </p>
              </div>
            </motion.div>


            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
              <Link 
                href="/courses" 
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-teal-600 hover:from-primary-dark hover:to-teal-700 text-white font-semibold text-sm sm:text-base lg:text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                Start Learning Now
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button
                onClick={onQuizClick}
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 hover:text-primary font-semibold text-sm sm:text-base lg:text-lg rounded-2xl transition-all duration-300 border border-gray-200 hover:border-primary/30 shadow-lg hover:shadow-xl"
              >
                <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                Take Free Quiz
              </button>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 lg:order-2"
          >

            {/* Main Image */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-8 border-white/50">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
              <Image
                src="/pexels-thirdman-7956916.jpg"
                alt="Islamic Learning Environment"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
