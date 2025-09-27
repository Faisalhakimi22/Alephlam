'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight } from 'lucide-react'

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  courseInterest?: string
  message: string
  childName?: string
  childAge?: string
  waitlistCourse?: string
  passiveCourse?: string
  joinCourse?: string
  otherInquiry?: string
  privacyPolicy: boolean
}

const ContactForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [contactType, setContactType] = useState('general')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>()

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data)
    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'alephlam03@gmail.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+49 159 022 97532',
      description: 'Mon-Fri from 9am to 6pm'
    },
    {
      icon: MapPin,
      title: 'Online Classes',
      content: 'Zoom Platform',
      description: 'All classes held online'
    }
  ]

  return (
    <section className="bg-accent section-padding" id="contact">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Contact <span className="text-gradient">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for any questions about our courses, enrollment, or to join our waiting list. We're here to help you on your learning journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-6">
                Get in Touch
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={info.title} className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center text-white shadow-lg">
                      <info.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary">{info.title}</h4>
                      <p className="text-lg text-primary font-medium">{info.content}</p>
                      <p className="text-gray-600">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card-gradient bg-gradient-to-r from-secondary to-secondary-light rounded-3xl p-8 text-white relative z-10">
              <h4 className="text-xl font-bold mb-4">Why Contact Us?</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  No spots available in your desired course
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  Want to book a course at a discounted passive rate
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  Have prior knowledge and want to join mid-course
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  Any other inquiries or questions
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card p-8 relative z-10"
          >
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-secondary mb-2">Thank You!</h3>
                <p className="text-gray-600">We've received your message and will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Contact Type
                  </label>
                  <select
                    {...register('courseInterest')}
                    value={contactType}
                    onChange={(e) => setContactType(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="waitlist">Join Waitlist</option>
                    <option value="passive">Passive Course Booking</option>
                    <option value="join">Join Mid-Course</option>
                    <option value="children">Children's Course</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      First Name *
                    </label>
                    <input
                      {...register('firstName', { required: 'First name is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your first name"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Last Name *
                    </label>
                    <input
                      {...register('lastName', { required: 'Last name is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your last name"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Email *
                  </label>
                  <input
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {contactType === 'children' && (
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Child's Name
                      </label>
                      <input
                        {...register('childName')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Child's name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary mb-2">
                        Child's Age
                      </label>
                      <input
                        {...register('childAge')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Age"
                      />
                    </div>
                  </div>
                )}

                {(contactType === 'waitlist' || contactType === 'passive' || contactType === 'join') && (
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Course Interest
                    </label>
                    <select
                      {...register('courseInterest')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a course</option>
                      <option value="nouraniyyah">Nouraniyyah</option>
                      <option value="noorul-bayaan">Noorul-Bayaan</option>
                      <option value="tajweed-intensive">Tajweed Intensive</option>
                      <option value="hifz">Hifz-Al Quran</option>
                      <option value="reading-correction">Reading Correction</option>
                      <option value="madina-arabic">Madina Arabic</option>
                      <option value="bayna-yadaik">Bayna Yadaik</option>
                      <option value="alif-ba-kids">Alif Ba for Children</option>
                      <option value="tajweed-kids">Tajweed for Children</option>
                      <option value="hifz-kids">Hifz for Children</option>
                      <option value="prayer-kids">Learn Prayer with BaTut</option>
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell us about your inquiry..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    {...register('privacyPolicy', { required: 'You must accept the privacy policy' })}
                    type="checkbox"
                    className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <label className="text-sm text-gray-600">
                    I agree to the{' '}
                    <a href="#" className="text-primary hover:underline">privacy policy</a> *
                  </label>
                </div>
                {errors.privacyPolicy && (
                  <p className="text-red-500 text-sm mt-1">{errors.privacyPolicy.message}</p>
                )}

                <button type="submit" className="btn-primary w-full">
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
