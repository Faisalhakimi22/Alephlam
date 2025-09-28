'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Lock, Eye, Database, Users, Globe, Mail, Phone } from 'lucide-react'
import Footer from '@/components/Footer'

const PrivacyPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const sections = [
    {
      title: 'Information We Collect',
      icon: Database,
      content: [
        'Personal Information: Name, email address, phone number, and billing information',
        'Educational Information: Course progress, assessments, and learning preferences',
        'Technical Information: IP address, browser type, device information, and usage data',
        'Communication Records: Messages, feedback, and support interactions'
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: Users,
      content: [
        'Provide educational services and course delivery',
        'Process payments and manage subscriptions',
        'Communicate about courses, updates, and support',
        'Improve our services and develop new features',
        'Ensure platform security and prevent fraud',
        'Comply with legal obligations and regulations'
      ]
    },
    {
      title: 'Information Sharing',
      icon: Globe,
      content: [
        'We do not sell, trade, or rent your personal information to third parties',
        'We may share information with service providers who assist in our operations',
        'We may disclose information if required by law or to protect our rights',
        'We may share aggregated, non-personal information for research purposes'
      ]
    },
    {
      title: 'Data Security',
      icon: Lock,
      content: [
        'We use industry-standard encryption to protect your data',
        'Access to personal information is restricted to authorized personnel only',
        'We regularly update our security measures and conduct security audits',
        'We use secure servers and follow best practices for data protection'
      ]
    },
    {
      title: 'Your Rights',
      icon: Shield,
      content: [
        'Access your personal information and request copies',
        'Correct inaccurate or incomplete information',
        'Request deletion of your personal information',
        'Opt-out of marketing communications',
        'Withdraw consent for data processing',
        'File complaints with relevant data protection authorities'
      ]
    },
    {
      title: 'Cookies and Tracking',
      icon: Eye,
      content: [
        'We use cookies to improve your experience and analyze usage',
        'You can control cookie settings through your browser',
        'We use analytics tools to understand how our platform is used',
        'Third-party services may also use cookies on our platform'
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
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed mb-4 sm:mb-6 md:mb-8 px-2 sm:px-0">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information 
              when you use our educational platform.
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
                AlephLam ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our online Islamic education platform.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                By using our services, you agree to the collection and use of information in accordance with this policy. 
                If you do not agree with our policies and practices, please do not use our services.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Sections */}
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

      {/* Contact Information */}
      <section className="bg-white py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-card p-4 sm:p-6 lg:p-8 text-center">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-secondary mb-3 sm:mb-4 md:mb-6">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex items-center justify-center sm:justify-start">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-2 sm:mr-3" />
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

      {/* Updates */}
      <section className="bg-accent py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-card p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-secondary mb-3 sm:mb-4 md:mb-6">Policy Updates</h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page 
                and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes. 
                Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default PrivacyPage
