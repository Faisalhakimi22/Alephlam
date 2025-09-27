import { Heart, BookOpen, Users, Award } from 'lucide-react'
import Image from 'next/image'

const Features = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-teal-50/30 py-12 sm:py-16 lg:py-20" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Islamic Border Container */}
        <div className="islamic-border p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 mb-12 sm:mb-16 lg:mb-20">
          <div className="geometric-border"></div>
          <div className="pattern-overlay"></div>

          {/* Decorative Islamic Elements - Hidden on mobile */}
          <div className="hidden md:block islamic-decorative top-right">بِسْمِ</div>
          <div className="hidden md:block islamic-decorative bottom-left">اللَّهِ</div>

          {/* Background Image - Full Cover */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/7443412b0777deb813eca0adae065592.jpg"
              alt="Islamic Education Background"
              fill
              className="object-cover object-center opacity-80 sm:opacity-90 md:opacity-100"
              style={{ boxShadow: 'none', filter: 'none' }}
              sizes="100vw"
              priority
            />
          </div>

          {/* Main Content Section */}
          <div className="mb-12 sm:mb-16 lg:mb-20 relative z-10">

            {/* Header */}
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-secondary leading-tight font-amiri mb-3 sm:mb-4 md:mb-6">
                Our Teaching
                <span className="bg-gradient-to-r from-islamic-gold to-islamic-blue bg-clip-text text-transparent"> Values</span>
              </h2>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto px-2 sm:px-4 md:px-0">
                At AlephLam, we've crafted a unique approach to Islamic education that puts{' '}
                <span className="text-islamic-gold font-semibold">comfort, understanding, and family bonds</span> at the heart of learning.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
              <div className="islamic-card p-3 sm:p-4 md:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-islamic-gold to-islamic-gold-light rounded-xl flex items-center justify-center">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-secondary mb-1 sm:mb-2 font-amiri">Nurturing Environment</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                      We create a safe space where every student feels valued and supported. Fear has no place in our classrooms—only encouragement and patience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="islamic-card p-3 sm:p-4 md:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-islamic-blue to-islamic-blue-light rounded-xl flex items-center justify-center">
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-secondary mb-1 sm:mb-2 font-amiri">Personalized Learning</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                      Every student learns differently. Our teachers adapt their methods to match your pace, ensuring deep understanding rather than rushed progress.
                    </p>
                  </div>
                </div>
              </div>

              <div className="islamic-card p-3 sm:p-4 md:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-islamic-gold to-islamic-blue rounded-xl flex items-center justify-center">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-secondary mb-1 sm:mb-2 font-amiri">Family-Centered Approach</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                      Learning together strengthens family bonds. We design our programs so parents and children can embark on this spiritual journey side by side.
                    </p>
                  </div>
                </div>
              </div>

              <div className="islamic-card p-3 sm:p-4 md:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-islamic-blue-dark to-islamic-gold-dark rounded-xl flex items-center justify-center">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-secondary mb-1 sm:mb-2 font-amiri">Excellence in Teaching</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                      Our qualified teachers combine traditional Islamic scholarship with modern teaching methods, making complex concepts accessible and engaging.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Teaching Method Section */}
          <div className="bg-gradient-to-r from-islamic-blue/5 to-islamic-gold/5 rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 relative z-10">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-2 sm:mb-3 md:mb-4 font-amiri">
                How We Teach
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto italic px-2 sm:px-4 md:px-0">
                Our time-tested methodology combines traditional Islamic education with modern teaching techniques
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="glass-card p-4 sm:p-6 md:p-8 text-center">
                <div className="islamic-step-number mb-3 sm:mb-4 md:mb-6 mx-auto">1</div>
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-secondary mb-2 sm:mb-3 font-amiri">Assessment & Goal Setting</h4>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                  We begin by understanding your current level and learning objectives, creating a personalized roadmap for your Quranic journey.
                </p>
              </div>

              <div className="glass-card p-4 sm:p-6 md:p-8 text-center">
                <div className="islamic-step-number mb-3 sm:mb-4 md:mb-6 mx-auto">2</div>
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-secondary mb-2 sm:mb-3 font-amiri">Interactive Learning</h4>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                  Through live sessions, we engage students with interactive recitation, comprehension exercises, and practical applications of Islamic teachings.
                </p>
              </div>

              <div className="glass-card p-4 sm:p-6 md:p-8 text-center sm:col-span-2 lg:col-span-1">
                <div className="islamic-step-number mb-3 sm:mb-4 md:mb-6 mx-auto">3</div>
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-secondary mb-2 sm:mb-3 font-amiri">Continuous Support</h4>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                  Regular feedback, recorded sessions for review, and ongoing mentorship ensure steady progress and long-term retention.
                </p>
              </div>
            </div>
          </div>

        </div> {/* Close Islamic Border Container */}

      </div>
    </section>
  )
}

export default Features
