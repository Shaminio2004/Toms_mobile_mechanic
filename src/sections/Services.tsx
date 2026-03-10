import { useState } from 'react'
import { 
  Cog, 
  Settings, 
  Disc, 
  Key, 
  Battery, 
  Wrench,
  ArrowRight,
  Phone
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const Services = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const services = [
    {
      icon: Cog,
      title: 'Engine Repair',
      description: 'From diagnostics to rebuilds, we handle all engine issues. Check engine light, overheating, or strange noises - we fix it all.',
      features: ['Engine Diagnostics', 'Timing Belt Replacement', 'Head Gasket Repair', 'Engine Rebuilds'],
    },
    {
      icon: Settings,
      title: 'Transmission',
      description: 'Smooth shifting guaranteed with our expert transmission service. Automatic or manual, we service all types.',
      features: ['Transmission Flush', 'Clutch Replacement', 'Gear Issues', 'Transmission Rebuild'],
    },
    {
      icon: Disc,
      title: 'Brake Service',
      description: 'Safety first. Complete brake inspections and repairs to keep you and your family safe on the road.',
      features: ['Brake Pad Replacement', 'Rotor Resurfacing', 'Brake Fluid Flush', 'ABS Diagnostics'],
    },
    {
      icon: Key,
      title: 'Roadside Assistance',
      description: 'Locked out? Dead battery? Flat tire? We\'re on our way to get you back on the road quickly.',
      features: ['Lockout Service', 'Jump Starts', 'Tire Changes', 'Fuel Delivery'],
    },
    {
      icon: Wrench,
      title: 'Maintenance',
      description: 'Regular maintenance keeps your car running longer. Oil changes, tune-ups, and preventative care.',
      features: ['Oil Changes', 'Filter Replacement', 'Fluid Checks', 'Tune-ups'],
    },
    {
      icon: Battery,
      title: 'Electrical',
      description: 'Battery, alternator, and wiring diagnostics. We solve electrical issues that others can\'t find.',
      features: ['Battery Replacement', 'Alternator Repair', 'Starter Service', 'Wiring Diagnostics'],
    },
  ]

  return (
    <section
      id="services"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#f7c94c]/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#f7c94c]/20 text-[#0d0e0f] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            WHAT WE DO
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0d0e0f] mb-6">
            Our <span className="text-[#f7c94c]">Services</span>
          </h2>
          <p className="text-lg text-[#4a4a4a] max-w-2xl mx-auto">
            From emergency repairs to routine maintenance, we offer a full range of mobile 
            mechanic services to keep your vehicle running smoothly.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-[#f7f7f7] rounded-3xl p-8 transition-all duration-500 cursor-pointer overflow-hidden ${
                activeCard === index ? 'bg-[#f7c94c] scale-105 shadow-2xl' : 'hover:bg-[#f7c94c]/10'
              }`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                activeCard === index ? 'bg-[#0d0e0f]' : 'bg-[#f7c94c]'
              }`}>
                <service.icon className={`w-8 h-8 transition-colors duration-300 ${
                  activeCard === index ? 'text-[#f7c94c]' : 'text-[#0d0e0f]'
                }`} />
              </div>

              {/* Content */}
              <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                activeCard === index ? 'text-[#0d0e0f]' : 'text-[#0d0e0f]'
              }`}>
                {service.title}
              </h3>
              <p className={`text-sm mb-6 transition-colors duration-300 ${
                activeCard === index ? 'text-[#0d0e0f]/80' : 'text-[#4a4a4a]'
              }`}>
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className={`flex items-center gap-2 text-sm transition-colors duration-300 ${
                    activeCard === index ? 'text-[#0d0e0f]/80' : 'text-[#4a4a4a]'
                  }`}>
                    <ArrowRight className="w-4 h-4 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="tel:5419810662"
                className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${
                  activeCard === index ? 'text-[#0d0e0f]' : 'text-[#f7c94c]'
                }`}
              >
                <Phone className="w-4 h-4" />
                Call for Service
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-[#4a4a4a] mb-4">Need a service not listed? Give us a call!</p>
          <Button
            asChild
            size="lg"
            className="bg-[#0d0e0f] text-white hover:bg-[#f7c94c] hover:text-[#0d0e0f] font-bold px-8 py-6 rounded-full transition-all duration-300"
          >
            <a href="tel:5419810662">
              <Phone className="w-5 h-5 mr-2" />
              (541) 981-0662
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Services
