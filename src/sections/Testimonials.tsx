import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John D.',
      location: 'Eugene, OR',
      image: '/images/testimonial-1.jpg',
      rating: 5,
      text: 'Fast, professional, and fairly priced. Saved me a tow when my starter went out downtown. Tommy had me back on the road in under an hour!',
    },
    {
      name: 'Sarah M.',
      location: 'Springfield, OR',
      image: '/images/testimonial-2.jpg',
      rating: 5,
      text: 'Fixed my starter in my driveway while I was working from home. Didn\'t have to miss a single meeting. Highly recommend!',
    },
    {
      name: 'Mike T.',
      location: 'Eugene, OR',
      image: '/images/testimonial-3.jpg',
      rating: 5,
      text: 'Best mobile mechanic in Eugene. Honest, reliable, and knows his stuff. Won\'t try to sell you parts you don\'t need.',
    },
    {
      name: 'Lisa K.',
      location: 'Creswell, OR',
      image: '/images/testimonial-1.jpg',
      rating: 5,
      text: 'Locked my keys in the car at the grocery store. Tommy arrived in 20 minutes and had me back in my car quickly. Lifesaver!',
    },
    {
      name: 'Robert H.',
      location: 'Eugene, OR',
      image: '/images/testimonial-3.jpg',
      rating: 5,
      text: 'Great experience! Replaced my brake pads in my own garage. Showed me everything he was doing and the price was very fair.',
    },
  ]

  // Duplicate testimonials for seamless loop
  const allTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#f7c94c]/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mb-16">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-[#f7c94c]/20 text-[#0d0e0f] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            TESTIMONIALS
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0d0e0f] mb-6">
            What Our <span className="text-[#f7c94c]">Customers Say</span>
          </h2>
          <p className="text-lg text-[#4a4a4a] max-w-2xl mx-auto">
            Don't just take our word for it. Here's what Eugene drivers have to say about 
            our mobile mechanic service.
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative overflow-hidden">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Marquee */}
        <div
          className="flex gap-6 animate-marquee hover:pause-animation"
          style={{ width: 'fit-content' }}
        >
          {allTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-[400px] flex-shrink-0 bg-[#f7f7f7] rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-[#f7c94c] mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#f7c94c] text-[#f7c94c]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-[#4a4a4a] mb-6 leading-relaxed">{testimonial.text}</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-[#0d0e0f]">{testimonial.name}</p>
                  <p className="text-sm text-[#4a4a4a]">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '4.9', label: 'Average Rating' },
            { value: '1000+', label: 'Happy Customers' },
            { value: '98%', label: 'Would Recommend' },
            { value: '24/7', label: 'Availability' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold text-[#f7c94c] mb-2">{stat.value}</p>
              <p className="text-[#4a4a4a]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
