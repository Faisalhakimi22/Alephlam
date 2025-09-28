'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown, HelpCircle, BookOpen, Users, Clock, CreditCard, Globe, MessageCircle } from 'lucide-react'
import Footer from '@/components/Footer'

const FAQPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const faqs = [
    {
      category: 'General',
      icon: HelpCircle,
      questions: [
        {
          question: 'What is AlephLam?',
          answer: 'AlephLam is an online Islamic education platform that offers Quran and Arabic learning courses for students of all ages. We provide quality education with qualified teachers in a supportive, brotherly atmosphere.'
        },
        {
          question: 'How do online classes work?',
          answer: 'Our online classes are conducted via Zoom. You\'ll receive a meeting link before each class. All you need is a computer or tablet with internet connection, webcam, and microphone. We provide all learning materials digitally.'
        },
        {
          question: 'What age groups do you teach?',
          answer: 'We teach students of all ages, from young children (4+) to adults. We have specialized programs for different age groups including AlephLam Kids for children and comprehensive courses for adults.'
        },
        {
          question: 'Do you offer group or individual classes?',
          answer: 'We offer both individual (1-on-1) and small group classes (2-4 students). Individual classes provide personalized attention, while group classes offer peer interaction and are more cost-effective.'
        }
      ]
    },
    {
      category: 'Courses',
      icon: BookOpen,
      questions: [
        {
          question: 'What courses do you offer?',
          answer: 'We offer Quran courses (Nouraniyyah, Noorul-Bayaan, Tajweed, Hifz), Arabic courses (Madina Arabic, Bayna Yadaik, Conversational Arabic), and specialized children\'s programs. We also have video courses for self-paced learning.'
        },
        {
          question: 'How long are the courses?',
          answer: 'Course duration varies by program. Most courses are monthly subscriptions, but we also offer intensive programs. The actual completion time depends on your pace and commitment. Our teachers will assess your progress and provide guidance.'
        },
        {
          question: 'Can I switch between courses?',
          answer: 'Yes, you can switch courses based on your progress and needs. We recommend discussing with your teacher first to ensure a smooth transition and proper placement in the new course level.'
        },
        {
          question: 'Do you provide course materials?',
          answer: 'Yes, we provide all necessary course materials digitally. This includes textbooks, worksheets, audio files, and supplementary resources. You\'ll receive access to our learning platform with all materials.'
        }
      ]
    },
    {
      category: 'Teachers',
      icon: Users,
      questions: [
        {
          question: 'Are your teachers qualified?',
          answer: 'All our teachers are highly qualified with degrees from prestigious Islamic universities like Al-Azhar, Islamic University of Medina, and others. They have extensive teaching experience and are certified in Quranic recitation and Tajweed.'
        },
        {
          question: 'Can I choose my teacher?',
          answer: 'We try to accommodate teacher preferences when possible, but teacher assignment depends on availability, schedule compatibility, and course requirements. We ensure all our teachers maintain high standards of education.'
        },
        {
          question: 'What languages do your teachers speak?',
          answer: 'Our teachers are multilingual and can teach in Arabic, English, German, French, Turkish, and Urdu. This allows us to serve students from various countries and backgrounds effectively.'
        },
        {
          question: 'How do you ensure teaching quality?',
          answer: 'We maintain high teaching standards through regular training, performance evaluations, and student feedback. All teachers undergo continuous professional development and follow our structured curriculum.'
        }
      ]
    },
    {
      category: 'Schedule & Time',
      icon: Clock,
      questions: [
        {
          question: 'What are your class timings?',
          answer: 'We offer flexible scheduling to accommodate different time zones. Classes are available from 9:00 AM to 8:00 PM CET (Central European Time), Monday through Sunday. We can arrange classes outside these hours for special cases.'
        },
        {
          question: 'Can I reschedule my classes?',
          answer: 'Yes, you can reschedule classes with at least 24 hours notice. We understand that life can be unpredictable, and we try to be flexible with scheduling changes when possible.'
        },
        {
          question: 'What if I miss a class?',
          answer: 'If you miss a class, we can provide a recording (for group classes) or arrange a makeup session. We recommend attending classes regularly for the best learning experience, but we understand occasional absences.'
        },
        {
          question: 'Do you offer weekend classes?',
          answer: 'Yes, we offer classes on weekends (Saturday and Sunday) to accommodate students who are busy during weekdays. Weekend classes are popular for working professionals and families.'
        }
      ]
    },
    {
      category: 'Payment & Pricing',
      icon: CreditCard,
      questions: [
        {
          question: 'What are your course fees?',
          answer: 'Our course fees vary by program and class type. Individual classes start from €30/month, while group classes are more affordable. We offer competitive pricing for quality education and provide payment plans for longer courses.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept bank transfers, PayPal, and other secure payment methods. Payment is typically made monthly in advance. We can discuss payment options that work best for your situation.'
        },
        {
          question: 'Do you offer refunds?',
          answer: 'We offer a satisfaction guarantee. If you\'re not satisfied with your first class, we\'ll provide a full refund. For ongoing courses, we have a fair refund policy based on the number of classes attended.'
        },
        {
          question: 'Are there any hidden fees?',
          answer: 'No, we believe in transparent pricing. The course fee includes all materials, teacher time, and platform access. There are no hidden fees or additional charges unless specifically mentioned.'
        }
      ]
    },
    {
      category: 'Technical',
      icon: Globe,
      questions: [
        {
          question: 'What technical requirements do I need?',
          answer: 'You need a computer or tablet with stable internet connection, webcam, and microphone. We recommend using Zoom for the best experience. A quiet environment with good lighting is also helpful for effective learning.'
        },
        {
          question: 'What if I have technical issues during class?',
          answer: 'Our technical support team is available to help with any issues. We also provide pre-class technical checks to ensure everything works properly. Most issues can be resolved quickly with our guidance.'
        },
        {
          question: 'Can I access classes from my mobile device?',
          answer: 'Yes, you can attend classes from tablets and smartphones, though we recommend using a computer for the best experience. Mobile devices work well for listening and basic participation.'
        },
        {
          question: 'Do you record classes?',
          answer: 'We may record group classes for quality assurance and to provide recordings to students who miss classes. Individual classes are not recorded unless specifically requested. All recordings are handled with strict privacy protection.'
        }
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
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed mb-4 sm:mb-6 md:mb-8 px-2 sm:px-0">
              Find answers to common questions about our courses, teaching methods, and services. 
              Can't find what you're looking for? Contact us directly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="bg-white py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
                className="mb-8 sm:mb-10 lg:mb-12"
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                    <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-secondary">{category.category}</h2>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <motion.div
                      key={faqIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.1 + faqIndex * 0.05 }}
                      className="glass-card overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(categoryIndex * 100 + faqIndex)}
                        className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                      >
                        <h3 className="text-base sm:text-lg font-semibold text-secondary pr-4">{faq.question}</h3>
                        <ChevronDown 
                          className={`w-5 h-5 sm:w-6 sm:h-6 text-primary transition-transform duration-200 flex-shrink-0 ${
                            openFAQ === categoryIndex * 100 + faqIndex ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <motion.div
                        initial={false}
                        animate={{
                          height: openFAQ === categoryIndex * 100 + faqIndex ? 'auto' : 0,
                          opacity: openFAQ === categoryIndex * 100 + faqIndex ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                          <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-accent py-8 sm:py-12 lg:py-16 px-4">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="glass-card p-6 sm:p-8 lg:p-12">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-3 sm:mb-4 md:mb-6">
                Still Have Questions?
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6 md:mb-8">
                Can't find the answer you're looking for? Our team is here to help. 
                Contact us directly and we'll get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
                <a href="/contact" className="btn bg-primary hover:bg-primary-dark text-white text-sm py-2.5 px-4">
                  Contact Us
                </a>
                <a href="/courses" className="btn border-2 border-primary text-primary hover:bg-primary hover:text-white text-sm py-2.5 px-4">
                  View Courses
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default FAQPage
