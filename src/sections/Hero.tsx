import { Phone, ArrowRight, MapPin, Clock, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Hero = () => {
  const features = [
    { icon: MapPin, text: 'Eugene, Oregon Area' },
    { icon: Clock, text: '24/7 Emergency Service' },
    { icon: Shield, text: 'Licensed & Insured' },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-[#f7f7f7] via-white to-[#f7f7f7]"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#f7c94c]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#f7c94c]/5 rounded-full blur-3xl" />
      
      {/* Gear decorations */}
      <div className="absolute top-40 right-20 opacity-5 animate-spin-slow">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <path
            d="M60 0L68.5 20.5L89.5 10.5L85 32.5L108 35L95 52.5L120 60L95 67.5L108 85L85 87.5L89.5 109.5L68.5 99.5L60 120L51.5 99.5L30.5 109.5L35 87.5L12 85L25 67.5L0 60L25 52.5L12 35L35 32.5L30.5 10.5L51.5 20.5L60 0Z"
            fill="#0d0e0f"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="relative z-10 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-[#f7c94c]/20 text-[#0d0e0f] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-[#f7c94c] rounded-full animate-pulse" />
              FAST & RELIABLE SERVICE
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0d0e0f] leading-tight mb-6">
              Mobile Mechanic
              <span className="block text-[#f7c94c]">Service in Eugene</span>
            </h1>

            <p className="text-lg text-[#4a4a4a] mb-8 max-w-lg">
              Expert auto repair at your doorstep. From emergency fixes to routine 
              maintenance, we bring the garage to you. No tow truck needed!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                asChild
                size="lg"
                className="bg-[#f7c94c] text-[#0d0e0f] hover:bg-[#e5b73c] font-bold px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-lg group animate-pulse-slow"
              >
                <a href="tel:5419810662">
                  <Phone className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Call Now
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-[#0d0e0f] text-[#0d0e0f] hover:bg-[#0d0e0f] hover:text-white font-semibold px-8 py-6 rounded-full transition-all duration-300 text-lg group"
              >
                <a href="#services">
                  View Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md"
                >
                  <feature.icon className="w-4 h-4 text-[#f7c94c]" />
                  <span className="text-sm font-medium text-[#0d0e0f]">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:h-[600px] animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero-mechanic.jpg"
                alt="Professional mechanic working on car engine"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl max-w-xs animate-float">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#f7c94c] rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#0d0e0f]" />
                </div>
                <div>
                  <p className="text-sm text-[#4a4a4a]">Emergency?</p>
                  <p className="text-lg font-bold text-[#0d0e0f]">Call Now!</p>
                  <p className="text-[#f7c94c] font-semibold">(541) 981-0662</p>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="absolute -top-4 -right-4 bg-[#0d0e0f] text-white rounded-2xl p-5 shadow-xl">
              <p className="text-3xl font-bold text-[#f7c94c]">15+</p>
              <p className="text-sm text-gray-300">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
