import { Award, Users, Clock, CheckCircle } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Award, value: '15+', label: 'Years Experience', color: 'bg-[#f7c94c]' },
    { icon: Users, value: '1000+', label: 'Repairs Completed', color: 'bg-[#0d0e0f]' },
    { icon: Clock, value: '24/7', label: 'Emergency Service', color: 'bg-[#f7c94c]' },
  ]

  const qualities = [
    'Certified & Experienced Technicians',
    'Competitive Pricing',
    'Quality Parts & Warranty',
    'Fast Response Times',
  ]

  return (
    <section
      id="about"
      className="py-24 bg-[#f7f7f7] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#f7c94c]/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-reveal">
              <img
                src="/images/about-mechanics.jpg"
                alt="Two mechanics working together"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -right-8 top-1/4 space-y-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-5 shadow-xl flex items-center gap-4 transform hover:scale-105 transition-transform animate-slide-in-right"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 ${stat.color === 'bg-[#0d0e0f]' ? 'text-white' : 'text-[#0d0e0f]'}`} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#0d0e0f]">{stat.value}</p>
                    <p className="text-sm text-[#4a4a4a]">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-[#f7c94c]/20 text-[#0d0e0f] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              WHO WE ARE
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#0d0e0f] mb-6 leading-tight">
              Your Trusted
              <span className="text-[#f7c94c]"> Mobile Mechanics</span>
            </h2>

            <p className="text-lg text-[#4a4a4a] mb-6 leading-relaxed">
              We started with a simple idea: quality car repair shouldn't require a tow truck. 
              Our team of certified technicians brings decades of experience directly to your 
              driveway or roadside in Eugene, Oregon.
            </p>

            <p className="text-lg text-[#4a4a4a] mb-8 leading-relaxed">
              Whether you're stranded on the highway or need routine maintenance at home, 
              we've got you covered. We specialize in engine repairs, transmission work, 
              brake service, and emergency roadside assistance.
            </p>

            {/* Qualities List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {qualities.map((quality, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#f7c94c] flex-shrink-0" />
                  <span className="text-[#0d0e0f] font-medium">{quality}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="tel:5419810662"
              className="inline-flex items-center gap-2 bg-[#0d0e0f] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#f7c94c] hover:text-[#0d0e0f] transition-all duration-300"
            >
              <Award className="w-5 h-5" />
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
