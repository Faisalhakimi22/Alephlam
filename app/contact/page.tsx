'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Clock, MessageCircle, Volume2 } from 'lucide-react'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

const ContactPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'alephlam03@gmail.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+49 159 022 97532',
      description: 'Call us during business hours'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Online Classes via Zoom',
      description: 'Learn from anywhere in the world'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon-Fri: 9:00 AM - 8:00 PM',
      description: 'CET (Central European Time)'
    }
  ]

  const faqs = [
    {
      question: 'How do I enroll in a course?',
      answer: 'You can enroll by filling out our contact form, calling us directly, or visiting our Book Course page. We\'ll guide you through the enrollment process and help you choose the right course.'
    },
    {
      question: 'What equipment do I need for online classes?',
      answer: 'You\'ll need a computer or tablet with a stable internet connection, a webcam, and a microphone. We recommend using Zoom for the best experience.'
    },
    {
      question: 'Can I try a class before enrolling?',
      answer: 'Yes! We offer a free trial class so you can experience our teaching style and see if it\'s the right fit for you or your child.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept bank transfers, PayPal, and other secure payment methods. Payment plans are available for longer courses.'
    },
    {
      question: 'Do you offer group classes?',
      answer: 'Yes, we offer both individual and small group classes. Group classes are great for families or friends who want to learn together.'
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary-light to-secondary-dark text-white py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed mb-4 sm:mb-6 md:mb-8 px-2 sm:px-0">
              Ready to start your Islamic education journey? Have questions about our courses? 
              We're here to help you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-6 sm:mb-8 lg:mb-12 text-center"
          >
            Contact <span className="text-gradient">Information</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-4 sm:p-6 lg:p-8 text-center relative z-10"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6 shadow-lg">
                  <info.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-secondary mb-2 sm:mb-3 lg:mb-4">{info.title}</h3>
                <p className="text-sm sm:text-base lg:text-lg font-medium text-primary mb-1 sm:mb-2">{info.content}</p>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-accent py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-6 sm:mb-8 lg:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-3 sm:mb-4 md:mb-6">
                Send us a <span className="text-gradient">Message</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours. 
                We're excited to help you on your learning journey!
              </p>
            </div>
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-6 sm:mb-8 lg:mb-12 text-center"
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h2>
          <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4 lg:space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-4 sm:p-6 lg:p-8 relative z-10"
              >
                <div className="flex items-start">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mr-2 sm:mr-3 lg:mr-4 mt-1 shadow-lg">
                    <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-secondary mb-1 sm:mb-2 lg:mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed text-xs sm:text-sm lg:text-base">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Ready to Start Learning?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-6 md:mb-8">
              Join hundreds of students who are already learning Quran and Arabic with AlephLam. 
              Take the first step towards your Islamic education today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <a href="#contact-form" className="btn bg-white text-primary hover:bg-gray-100 text-sm py-2.5 px-4">
                Get Started Now
              </a>
              <a href="/courses" className="btn border-2 border-white text-white hover:bg-white hover:text-primary text-sm py-2.5 px-4">
                View Our Courses
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default ContactPage
