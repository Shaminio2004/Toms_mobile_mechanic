import { Phone, Clock, MapPin, Shield } from 'lucide-react'

const CTA = () => {
  const features = [
    { icon: Clock, text: '24/7 Emergency Service' },
    { icon: MapPin, text: 'Eugene & Surrounding Areas' },
    { icon: Shield, text: 'Licensed & Insured' },
  ]

  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/cta-background.jpg"
          alt="Mechanic working"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0e0f]/95 via-[#0d0e0f]/80 to-[#0d0e0f]/60" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-[#f7c94c]/20 text-[#f7c94c] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Clock className="w-4 h-4" />
            AVAILABLE NOW
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Need Emergency
            <span className="text-[#f7c94c]"> Repairs?</span>
          </h2>

          <p className="text-xl text-gray-300 mb-8">
            Don't wait. Call us now for immediate roadside assistance. We're available 
            24/7 to get you back on the road safely and quickly.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-4 mb-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <feature.icon className="w-4 h-4 text-[#f7c94c]" />
                <span className="text-sm font-medium text-white">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:5419810662"
              className="inline-flex items-center justify-center gap-3 bg-[#f7c94c] text-[#0d0e0f] px-10 py-5 rounded-full font-bold text-lg hover:bg-[#e5b73c] transition-all duration-300 shadow-xl hover:shadow-2xl animate-pulse-slow"
            >
              <Phone className="w-6 h-6" />
              Call Now: (541) 981-0662
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-10 pt-10 border-t border-white/20">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-400 text-sm mb-1">Phone</p>
                <a href="tel:5419810662" className="text-white text-lg font-semibold hover:text-[#f7c94c] transition-colors">
                  (541) 981-0662
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Email</p>
                <a href="mailto:tommymarineau1992@gmail.com" className="text-white text-lg font-semibold hover:text-[#f7c94c] transition-colors">
                  tommymarineau1992@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
