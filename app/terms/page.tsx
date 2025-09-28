'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FileText, Users, CreditCard, Shield, AlertTriangle, CheckCircle, Clock, Globe } from 'lucide-react'
import Footer from '@/components/Footer'

const TermsPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: CheckCircle,
      content: [
        'By accessing and using AlephLam services, you accept and agree to be bound by these Terms of Service',
        'If you do not agree to these terms, you may not use our services',
        'These terms apply to all users, including students, parents, and guardians',
        'We reserve the right to modify these terms at any time with notice'
      ]
    },
    {
      title: 'Service Description',
      icon: Users,
      content: [
        'AlephLam provides online Islamic education services including Quran and Arabic learning',
        'We offer individual and group classes conducted via video conferencing',
        'Our services include course materials, assessments, and progress tracking',
        'We provide qualified teachers and structured learning programs'
      ]
    },
    {
      title: 'User Responsibilities',
      icon: Shield,
      content: [
        'Provide accurate and complete information during registration',
        'Maintain the confidentiality of your account credentials',
        'Attend scheduled classes and complete assigned coursework',
        'Respect teachers and fellow students during classes',
        'Use our platform in accordance with Islamic values and principles',
        'Report any technical issues or concerns promptly'
      ]
    },
    {
      title: 'Payment Terms',
      icon: CreditCard,
      content: [
        'Course fees are payable in advance on a monthly basis',
        'Payment is due before the start of each billing cycle',
        'We accept bank transfers, PayPal, and other secure payment methods',
        'Refunds are available according to our refund policy',
        'Late payments may result in service suspension',
        'All prices are in Euros unless otherwise specified'
      ]
    },
    {
      title: 'Class Policies',
      icon: Clock,
      content: [
        'Classes must be scheduled at least 24 hours in advance',
        'Cancellations require 24-hour notice to avoid charges',
        'Missed classes without notice may not be rescheduled',
        'Make-up classes are subject to teacher availability',
        'Group classes cannot be rescheduled for individual students',
        'Class recordings may be provided for missed sessions'
      ]
    },
    {
      title: 'Intellectual Property',
      icon: FileText,
      content: [
        'All course materials, content, and resources are proprietary to AlephLam',
        'Students may not distribute, copy, or share course materials',
        'Recordings of classes are for personal use only',
        'Unauthorized use of our content may result in legal action',
        'Students retain rights to their own work and contributions'
      ]
    },
    {
      title: 'Privacy and Data Protection',
      icon: Shield,
      content: [
        'We collect and process personal data in accordance with our Privacy Policy',
        'Student information is kept confidential and secure',
        'We may use anonymized data for improving our services',
        'Parents have the right to access their children\'s educational records',
        'We comply with applicable data protection regulations'
      ]
    },
    {
      title: 'Limitation of Liability',
      icon: AlertTriangle,
      content: [
        'AlephLam provides educational services on an "as is" basis',
        'We do not guarantee specific learning outcomes or results',
        'Our liability is limited to the amount paid for services',
        'We are not responsible for technical issues beyond our control',
        'Students are responsible for their own learning progress',
        'We reserve the right to modify or discontinue services'
      ]
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
              Terms of <span className="text-primary">Service</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed mb-4 sm:mb-6 md:mb-8 px-2 sm:px-0">
              These terms govern your use of AlephLam's educational services. Please read them carefully 
              before using our platform.
            </p>
            <p className="text-xs sm:text-sm text-gray-300">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-card p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-secondary mb-3 sm:mb-4 md:mb-6">Introduction</h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
                Welcome to AlephLam. These Terms of Service ("Terms") govern your use of our online Islamic education platform 
                and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                If you are a parent or guardian registering a child for our services, you agree to these Terms on behalf of your child 
                and are responsible for ensuring your child's compliance with these Terms.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="bg-accent py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="glass-card p-4 sm:p-6 lg:p-8"
              >
                <div className="flex items-start mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <section.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-secondary">{section.title}</h3>
                </div>
                <ul className="space-y-2 sm:space-y-3 ml-0 sm:ml-16">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-700 text-xs sm:text-sm lg:text-base">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Termination */}
      <section className="bg-white py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-card p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-secondary mb-3 sm:mb-4 md:mb-6">Termination</h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
                Either party may terminate services with 30 days written notice. We reserve the right to suspend or terminate 
                services immediately for violations of these Terms, non-payment, or other serious breaches.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                Upon termination, access to course materials and services will cease, but completed coursework and progress 
                records will be maintained according to our data retention policy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Governing Law */}
      <section className="bg-accent py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-card p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-secondary mb-3 sm:mb-4 md:mb-6">Governing Law</h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
                These Terms are governed by the laws of Germany. Any disputes arising from these Terms or our services 
                will be subject to the exclusive jurisdiction of the courts of Germany.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                We are committed to resolving disputes amicably and encourage users to contact us directly before 
                pursuing legal action.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-card p-4 sm:p-6 lg:p-8 text-center">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-secondary mb-3 sm:mb-4 md:mb-6">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex items-center justify-center sm:justify-start">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-2 sm:mr-3" />
                  <span className="text-gray-700 text-sm sm:text-base">alephlam03@gmail.com</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-2 sm:mr-3" />
                  <span className="text-gray-700 text-sm sm:text-base">+49 159 022 97532</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default TermsPage
