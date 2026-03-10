import { useState } from 'react'
import { ChevronDown, Phone } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What areas do you serve?',
      answer: 'We primarily serve Eugene, Springfield, and the surrounding areas within a 30-mile radius. If you\'re unsure if we cover your location, just give us a call at (541) 981-0662 and we\'ll let you know!',
    },
    {
      question: 'Do you offer warranties on your work?',
      answer: 'Yes! All our repairs come with a 90-day warranty on parts and labor. We stand behind our work and want you to drive with confidence knowing that if something goes wrong, we\'ll make it right.',
    },
    {
      question: 'How do I pay for services?',
      answer: 'We accept cash, all major credit cards, and digital payment methods like Venmo and PayPal. Payment is due upon completion of the service. We\'ll provide you with a detailed invoice before any work begins.',
    },
    {
      question: 'What if you can\'t fix it on-site?',
      answer: 'While we can handle most repairs on-site, some complex issues may require shop equipment. In those cases, we\'ll help arrange a tow to a trusted local shop and provide a detailed diagnosis to save you time and money.',
    },
    {
      question: 'How quickly can you get to me?',
      answer: 'For emergency roadside assistance, we typically arrive within 30-45 minutes in the Eugene area. For scheduled maintenance and non-urgent repairs, we can usually book you within 24-48 hours.',
    },
    {
      question: 'Do you work on all makes and models?',
      answer: 'Yes! We service all domestic and foreign vehicles, including cars, trucks, and SUVs. Our technicians are trained and equipped to handle everything from classic cars to the latest hybrid and electric vehicles.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="py-24 bg-[#f7f7f7] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#f7c94c]/20 text-[#0d0e0f] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            FAQ
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0d0e0f] mb-6">
            Common <span className="text-[#f7c94c]">Questions</span>
          </h2>
          <p className="text-lg text-[#4a4a4a]">
            Got questions? We've got answers. If you don't see what you're looking for, 
            feel free to give us a call.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-[#0d0e0f] pr-4">{faq.question}</span>
                <div className={`w-10 h-10 bg-[#f7c94c] rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <ChevronDown className="w-5 h-5 text-[#0d0e0f]" />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-[#4a4a4a] leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-[#0d0e0f] rounded-3xl p-8">
          <p className="text-white text-lg mb-4">Still have questions?</p>
          <a
            href="tel:5419810662"
            className="inline-flex items-center gap-3 bg-[#f7c94c] text-[#0d0e0f] px-8 py-4 rounded-full font-bold hover:bg-[#e5b73c] transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            Call Us: (541) 981-0662
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ
