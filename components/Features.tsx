import { Heart, BookOpen, Users, Award } from 'lucide-react'
import Image from 'next/image'

const Features = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-teal-50/30 section-padding" id="about">
      <div className="container-custom">
        
        {/* Islamic Border Container */}
        <div className="islamic-border p-8 md:p-12 lg:p-16 mb-24">
          <div className="geometric-border"></div>
          <div className="pattern-overlay"></div>
          
          {/* Decorative Islamic Elements */}
          <div className="islamic-decorative top-right">بِسْمِ</div>
          <div className="islamic-decorative bottom-left">اللَّهِ</div>
          
          {/* Background Image - Left Bottom */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/7443412b0777deb813eca0adae065592.jpg"
              alt="Islamic Education Background"
              fill
              className="object-cover"
              style={{ boxShadow: 'none', filter: 'none' }}
            />
          </div>
        
        {/* Main Content Section */}
        <div className="mb-24 relative z-10">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight font-amiri mb-6">
              Our Teaching
              <span className="bg-gradient-to-r from-islamic-gold to-islamic-blue bg-clip-text text-transparent"> Values</span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              At AlephLam, we've crafted a unique approach to Islamic education that puts{' '}
              <span className="text-islamic-gold font-semibold">comfort, understanding, and family bonds</span> at the heart of learning.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="islamic-card p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-islamic-gold to-islamic-gold-light rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2 font-amiri">Nurturing Environment</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We create a safe space where every student feels valued and supported. Fear has no place in our classrooms—only encouragement and patience.
                  </p>
                </div>
              </div>
            </div>

            <div className="islamic-card p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-islamic-blue to-islamic-blue-light rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2 font-amiri">Personalized Learning</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every student learns differently. Our teachers adapt their methods to match your pace, ensuring deep understanding rather than rushed progress.
                  </p>
                </div>
              </div>
            </div>

            <div className="islamic-card p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-islamic-gold to-islamic-blue rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2 font-amiri">Family-Centered Approach</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Learning together strengthens family bonds. We design our programs so parents and children can embark on this spiritual journey side by side.
                  </p>
                </div>
              </div>
            </div>

            <div className="islamic-card p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-islamic-blue-dark to-islamic-gold-dark rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2 font-amiri">Excellence in Teaching</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our qualified teachers combine traditional Islamic scholarship with modern teaching methods, making complex concepts accessible and engaging.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Teaching Method Section */}
        <div className="bg-gradient-to-r from-islamic-blue/5 to-islamic-gold/5 rounded-3xl p-8 md:p-12 lg:p-16 relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-amiri">
              How We Teach
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
              Our time-tested methodology combines traditional Islamic education with modern teaching techniques
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center">
              <div className="islamic-step-number mb-6 mx-auto">1</div>
              <h4 className="text-xl font-bold text-secondary mb-3 font-amiri">Assessment & Goal Setting</h4>
              <p className="text-gray-600 leading-relaxed">
                We begin by understanding your current level and learning objectives, creating a personalized roadmap for your Quranic journey.
              </p>
            </div>

            <div className="glass-card p-8 text-center">
              <div className="islamic-step-number mb-6 mx-auto">2</div>
              <h4 className="text-xl font-bold text-secondary mb-3 font-amiri">Interactive Learning</h4>
              <p className="text-gray-600 leading-relaxed">
                Through live sessions, we engage students with interactive recitation, comprehension exercises, and practical applications of Islamic teachings.
              </p>
            </div>

            <div className="glass-card p-8 text-center">
              <div className="islamic-step-number mb-6 mx-auto">3</div>
              <h4 className="text-xl font-bold text-secondary mb-3 font-amiri">Continuous Support</h4>
              <p className="text-gray-600 leading-relaxed">
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
