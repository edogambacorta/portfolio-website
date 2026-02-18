'use client'

import React, { useState } from 'react'
import { ShimmerButton } from './ui/shimmer-button'
import { NavBar } from './ui/tubelight-navbar'
import { Rocket, Clock, Mail } from 'lucide-react'
import CenteredContainer from './CenteredContainer'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { useLanguage } from '../lib/LanguageContext'
import { LanguageToggle } from './LanguageToggle'

const Header: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const { t } = useLanguage()

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (pathname === '/') {
      window.location.reload()
    } else {
      router.push('/')
    }
  }

  const navItems = [
    { name: t('header.projects'), url: '#projects', icon: Rocket },
    { name: t('header.timeline'), url: '#timeline', icon: Clock },
    { name: t('header.contact'), url: '#contact', icon: Mail },
  ]

  const handleScroll = (url: string) => {
    const id = url.slice(1)
    const element = document.getElementById(id)
    const headerOffset = 80
    const elementPosition = element?.getBoundingClientRect().top
    const offsetPosition = elementPosition ? elementPosition + window.pageYOffset - headerOffset : 0

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isHovered ? 'bg-gray-800' : 'bg-black/50'
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CenteredContainer>
        <div className="py-4 flex flex-col sm:flex-row justify-between items-center">
          <Link href="/" onClick={handleLogoClick}>
            <div className="text-white text-2xl font-bold mb-4 sm:mb-0 font-sans cursor-pointer logo">
              edogambacorta
            </div>
          </Link>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <NavBar
              items={navItems}
              className="mb-4 sm:mb-0 sm:mr-1 text-white"
              onItemClick={handleScroll}
            />
            <LanguageToggle />
            <ShimmerButton
              onClick={() => window.open("https://calendly.com/edoardo-gambacorta/", "_blank")}
              className="text-black font-semibold text-sm w-full sm:w-auto"
              shimmerColor="rgba(255, 255, 255, 0.4)"
              shimmerDuration="2s"
            >
              {t('header.bookCall')}
            </ShimmerButton>
          </div>
        </div>
      </CenteredContainer>
    </header>
  )
}

export default Header
