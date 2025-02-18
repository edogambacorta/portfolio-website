'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { CTAButton } from './CTAButton'

const Header: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHovered ? 'bg-gray-500' : 'bg-black/50'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">TheFactory</div>
        <nav className="flex-grow flex justify-center">
          <ul className="flex space-x-6">
            <li>
              <Link href="#services" onClick={(e) => handleScroll(e, 'services')} className="text-white hover:text-gray-300 transition-colors duration-300">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="#portfolio" onClick={(e) => handleScroll(e, 'portfolio')} className="text-white hover:text-gray-300 transition-colors duration-300">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="#insights" onClick={(e) => handleScroll(e, 'insights')} className="text-white hover:text-gray-300 transition-colors duration-300">
                Insights
              </Link>
            </li>
            <li>
              <Link href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-white hover:text-gray-300 transition-colors duration-300">
                About Us
              </Link>
            </li>
          </ul>
        </nav>
        <CTAButton href="https://calendly.com/edoardo-gambacorta/" className="shadow-white shadow-lg hover:shadow-xl transition-all duration-300">
          Book Call
        </CTAButton>
      </div>
    </header>
  )
}

export default Header
