import { Heart, BookOpen, Users, Award } from 'lucide-react'
import Image from 'next/image'

const Features = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-teal-50/30 section-padding" id="about">
      <div className="container-custom">
        
        {/* Main Content Section */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-24">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight">
                Our Teaching
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent"> Values</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                At AlephLam, we've crafted a unique approach to Islamic education that puts{' '}
                <span className="text-primary font-semibold">comfort, understanding, and family bonds</span> at the heart of learning.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Nurturing Environment</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We create a safe space where every student feels valued and supported. Fear has no place in our classrooms—only encouragement and patience.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-secondary to-secondary-light rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Personalized Learning</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every student learns differently. Our teachers adapt their methods to match your pace, ensuring deep understanding rather than rushed progress.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Family-Centered Approach</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Learning together strengthens family bonds. We design our programs so parents and children can embark on this spiritual journey side by side.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Excellence in Teaching</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our qualified teachers combine traditional Islamic scholarship with modern teaching methods, making complex concepts accessible and engaging.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative h-[600px] lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white/50">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
              <Image
                src="/syed-aoun-abbas-97o4XH0htUs-unsplash.jpg"
                alt="Islamic Learning and Family Education"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Teaching Method Section */}
        <div className="bg-gradient-to-r from-secondary/5 to-primary/5 rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              How We Teach
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our time-tested methodology combines traditional Islamic education with modern teaching techniques
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-xl font-bold text-secondary mb-3">Assessment & Goal Setting</h4>
              <p className="text-gray-600 leading-relaxed">
                We begin by understanding your current level and learning objectives, creating a personalized roadmap for your Quranic journey.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-secondary to-secondary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-xl font-bold text-secondary mb-3">Interactive Learning</h4>
              <p className="text-gray-600 leading-relaxed">
                Through live sessions, we engage students with interactive recitation, comprehension exercises, and practical applications of Islamic teachings.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-xl font-bold text-secondary mb-3">Continuous Support</h4>
              <p className="text-gray-600 leading-relaxed">
                Regular feedback, recorded sessions for review, and ongoing mentorship ensure steady progress and long-term retention.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Features
