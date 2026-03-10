import { Calendar, MapPin, Wrench, Car } from 'lucide-react'

const Process = () => {
  const steps = [
    {
      icon: Calendar,
      number: '01',
      title: 'Call or Book Online',
      description: 'Schedule your service in minutes. Tell us your location and what\'s wrong with your vehicle.',
      align: 'left',
    },
    {
      icon: MapPin,
      number: '02',
      title: 'We Come to You',
      description: 'Our mechanic arrives at your location fully equipped with tools and parts.',
      align: 'right',
    },
    {
      icon: Wrench,
      number: '03',
      title: 'Expert Repair',
      description: 'We diagnose and fix your car on the spot. Most repairs completed in under an hour.',
      align: 'left',
    },
    {
      icon: Car,
      number: '04',
      title: 'Back on the Road',
      description: 'Drive away with confidence. All work comes with our satisfaction guarantee.',
      align: 'right',
    },
  ]

  return (
    <section
      id="process"
      className="py-24 bg-[#f7f7f7] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-[#f7c94c]/20 text-[#0d0e0f] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            HOW IT WORKS
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0d0e0f] mb-6">
            Simple <span className="text-[#f7c94c]">4-Step Process</span>
          </h2>
          <p className="text-lg text-[#4a4a4a] max-w-2xl mx-auto">
            Getting your car fixed has never been easier. No tow truck, no waiting at the shop - 
            we bring the garage to you.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-[#f7c94c]/30 -translate-x-1/2 hidden lg:block" />

          {/* Steps */}
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  step.align === 'right' ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${step.align === 'right' ? 'lg:text-right' : ''}`}>
                  <div className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow ${
                    step.align === 'right' ? 'lg:ml-auto' : ''
                  } max-w-lg animate-fade-in-up`}>
                    <div className={`flex items-center gap-4 mb-4 ${
                      step.align === 'right' ? 'lg:flex-row-reverse' : ''
                    }`}>
                      <div className="w-14 h-14 bg-[#f7c94c] rounded-2xl flex items-center justify-center animate-bounce-slow">
                        <step.icon className="w-7 h-7 text-[#0d0e0f]" />
                      </div>
                      <span className="text-5xl font-bold text-[#f7c94c]/30">{step.number}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0d0e0f] mb-3">{step.title}</h3>
                    <p className="text-[#4a4a4a]">{step.description}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden lg:flex w-16 h-16 bg-[#f7c94c] rounded-full items-center justify-center shadow-lg z-10 flex-shrink-0">
                  <div className="w-6 h-6 bg-[#0d0e0f] rounded-full" />
                </div>

                {/* Empty Space for Layout */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="tel:5419810662"
            className="inline-flex items-center gap-3 bg-[#f7c94c] text-[#0d0e0f] px-10 py-5 rounded-full font-bold text-lg hover:bg-[#e5b73c] transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            <Calendar className="w-6 h-6" />
            Schedule Your Service Today
          </a>
        </div>
      </div>
    </section>
  )
}

export default Process
