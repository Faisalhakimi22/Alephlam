'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Courses from '@/components/Courses'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import CourseQuiz from '@/components/CourseQuiz'

export default function Home() {
  const [showQuiz, setShowQuiz] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Hero onQuizClick={() => setShowQuiz(true)} />
      <Features />
      <Courses />
      <Testimonials />
      <ContactForm />
      <Footer />
      
      {showQuiz && (
        <CourseQuiz onClose={() => setShowQuiz(false)} />
      )}
    </main>
  )
}
