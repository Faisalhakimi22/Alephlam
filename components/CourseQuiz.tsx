'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react'

interface QuizProps {
  onClose: () => void
}

interface QuizQuestion {
  id: number
  question: string
  options: string[]
  category: 'level' | 'age' | 'goal' | 'time' | 'preference'
}

interface QuizResult {
  title: string
  description: string
  price: string
  features: string[]
  recommendation: string
}

const CourseQuiz = ({ onClose }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState<QuizResult | null>(null)

  const questions: QuizQuestion[] = [
    {
      id: 1,
      question: "What's your current level of Quran/Arabic knowledge?",
      options: ["Complete beginner", "Some basic knowledge", "Can read slowly", "Intermediate", "Advanced"],
      category: "level"
    },
    {
      id: 2,
      question: "What's your age group?",
      options: ["4-6 years old", "7-12 years old", "13-17 years old", "18+ years old"],
      category: "age"
    },
    {
      id: 3,
      question: "What's your main learning goal?",
      options: ["Learn to read Quran", "Improve Tajweed", "Memorize Quran", "Learn Arabic language", "Teach children"],
      category: "goal"
    },
    {
      id: 4,
      question: "How much time can you dedicate weekly?",
      options: ["30 minutes", "1 hour", "2-3 hours", "4+ hours"],
      category: "time"
    },
    {
      id: 5,
      question: "What type of learning do you prefer?",
      options: ["Live classes with teacher", "Video courses", "One-on-one sessions", "Group learning"],
      category: "preference"
    }
  ]

  const courseRecommendations: Record<string, QuizResult> = {
    'beginner-child': {
      title: 'Alif Ba for Children',
      description: 'Perfect for young learners starting their Quran journey. Interactive and fun approach to learning Arabic letters.',
      price: '20€/month',
      features: ['Letter recognition', 'Interactive learning', '30 min sessions', 'Patient teachers'],
      recommendation: 'This course is ideal for your child\'s age and beginner level. The interactive approach will keep them engaged and motivated.'
    },
    'beginner-adult': {
      title: 'Nouraniyyah',
      description: 'The most effective method for learning Quran reading from scratch. Step-by-step approach with basic Tajweed.',
      price: '30€/month',
      features: ['Letter recognition', 'Word building', 'Basic Tajweed', 'Verse reading'],
      recommendation: 'Perfect for complete beginners. This method has proven success with thousands of students worldwide.'
    },
    'intermediate': {
      title: 'Noorul-Bayaan',
      description: 'Advanced spelling method for improving Quran reading and Tajweed application.',
      price: '30€/month',
      features: ['Advanced spelling', 'Tajweed rules', 'Verse recitation', 'Pronunciation'],
      recommendation: 'Great choice for students with some basic knowledge who want to improve their reading skills.'
    },
    'tajweed-focus': {
      title: 'Tajweed Intensive - LIVE',
      description: 'Comprehensive Tajweed course covering all rules and reading styles.',
      price: '30€/month',
      features: ['Complete Tajweed', 'Reading styles', 'Articulation points', 'Scientific approach'],
      recommendation: 'Excellent for students who want to perfect their Quran recitation with proper Tajweed rules.'
    },
    'memorization': {
      title: 'Hifz-Al Quran',
      description: 'Structured program for memorizing the Quran with regular reviews and personal guidance.',
      price: '25€/month',
      features: ['Verse memorization', 'Regular reviews', 'Progress tracking', 'Personal guidance'],
      recommendation: 'Ideal for students committed to memorizing the Quran. The structured approach ensures steady progress.'
    },
    'arabic-language': {
      title: 'Madina Arabic',
      description: 'Comprehensive Arabic language course focusing on grammar and practical communication.',
      price: '35€/month',
      features: ['Grammar focus', 'Sentence analysis', 'Vocabulary building', 'Religious context'],
      recommendation: 'Perfect for learning Arabic as a language. Combines traditional grammar with modern teaching methods.'
    }
  }

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentQuestion].category]: answer
    }))
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      generateRecommendation()
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  const generateRecommendation = () => {
    const level = answers.level
    const age = answers.age
    const goal = answers.goal

    let recommendationKey = 'beginner-adult'

    if (age && age.includes('4-6') || age?.includes('7-12')) {
      recommendationKey = 'beginner-child'
    } else if (goal === 'Learn Arabic language') {
      recommendationKey = 'arabic-language'
    } else if (goal === 'Improve Tajweed') {
      recommendationKey = 'tajweed-focus'
    } else if (goal === 'Memorize Quran') {
      recommendationKey = 'memorization'
    } else if (level === 'Some basic knowledge' || level === 'Can read slowly') {
      recommendationKey = 'intermediate'
    }

    setResult(courseRecommendations[recommendationKey])
    setShowResult(true)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResult(false)
    setResult(null)
  }

  const currentAnswer = answers[questions[currentQuestion]?.category]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-secondary">
            {showResult ? 'Your Course Recommendation' : 'Find Your Perfect Course'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Bar */}
        {!showResult && (
          <div className="px-6 py-4 bg-gray-50">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-primary to-primary-light h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          <AnimatePresence mode="wait">
            {showResult && result ? (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <div className="text-center">
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-secondary mb-2">{result.title}</h3>
                  <p className="text-gray-600 mb-4">{result.description}</p>
                  <div className="text-2xl font-bold text-primary mb-6">{result.price}</div>
                </div>

                <div>
                  <h4 className="font-semibold text-secondary mb-3">Course Features:</h4>
                  <ul className="space-y-2">
                    {result.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-primary mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-accent p-4 rounded-lg">
                  <h4 className="font-semibold text-secondary mb-2">Why This Course?</h4>
                  <p className="text-gray-600">{result.recommendation}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary flex-1">
                    Book This Course
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                  <button
                    onClick={resetQuiz}
                    className="btn-outline flex-1"
                  >
                    Take Quiz Again
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="question"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-4">
                    {questions[currentQuestion]?.question}
                  </h3>
                  <div className="space-y-3">
                    {questions[currentQuestion]?.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(option)}
                        className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                          currentAnswer === option
                            ? 'border-primary bg-primary/5 text-primary'
                            : 'border-gray-200 hover:border-primary/50 hover:bg-gray-50'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={prevQuestion}
                    disabled={currentQuestion === 0}
                    className="flex items-center px-4 py-2 text-gray-600 hover:text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous
                  </button>
                  <button
                    onClick={nextQuestion}
                    disabled={!currentAnswer}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {currentQuestion === questions.length - 1 ? 'Get Recommendation' : 'Next'}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}

export default CourseQuiz
