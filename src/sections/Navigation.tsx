import { useState } from 'react'
import { Phone, Menu, X, Wrench } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface NavigationProps {
  scrolled: boolean
}

const Navigation = ({ scrolled }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group"
          >
            <div className={`p-2 rounded-lg transition-all duration-300 ${
              scrolled ? 'bg-[#f7c94c]' : 'bg-[#f7c94c]'
            }`}>
              <Wrench className="w-6 h-6 text-[#0d0e0f]" />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-tight transition-colors duration-300 ${
                scrolled ? 'text-[#0d0e0f]' : 'text-[#0d0e0f]'
              }`}>
                Tommy's
              </span>
              <span className={`text-xs leading-tight transition-colors duration-300 ${
                scrolled ? 'text-[#4a4a4a]' : 'text-[#4a4a4a]'
              }`}>
                Mobile Mechanic
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative text-sm font-medium transition-colors duration-300 group ${
                  scrolled ? 'text-[#0d0e0f]' : 'text-[#0d0e0f]'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#f7c94c] transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:5419810662"
              className="flex items-center gap-2 text-sm font-semibold text-[#0d0e0f] hover:text-[#f7c94c] transition-colors"
            >
              <Phone className="w-4 h-4" />
              (541) 981-0662
            </a>
            <Button
              asChild
              className="bg-[#f7c94c] text-[#0d0e0f] hover:bg-[#e5b73c] font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-slow"
            >
              <a href="tel:5419810662">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#0d0e0f]" />
            ) : (
              <Menu className="w-6 h-6 text-[#0d0e0f]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            mobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-2 bg-white rounded-xl p-4 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#0d0e0f] font-medium py-2 px-4 rounded-lg hover:bg-[#f7c94c]/10 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="border-t border-gray-200 pt-4 mt-2">
              <a
                href="tel:5419810662"
                className="flex items-center justify-center gap-2 w-full bg-[#f7c94c] text-[#0d0e0f] font-semibold py-3 rounded-full hover:bg-[#e5b73c] transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now: (541) 981-0662
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navigation
