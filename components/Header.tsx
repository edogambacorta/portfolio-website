'use client'

import React, { useState, useEffect } from 'react'
import { ShimmerButton } from './ui/shimmer-button'
import { NavBar } from './ui/tubelight-navbar'
import { Rocket, Clock, Mail, Menu, X } from 'lucide-react'
import CenteredContainer from './CenteredContainer'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { useLanguage } from '../lib/LanguageContext'
import { LanguageToggle } from './LanguageToggle'
import { motion, AnimatePresence } from 'framer-motion'

const Header: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const { t } = useLanguage()

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
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
    setIsMobileMenuOpen(false)
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isHovered ? 'bg-gray-800' : 'bg-black/50'
          }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CenteredContainer>
          <div className="py-4 flex flex-row justify-between items-center">
            <Link href="/" onClick={handleLogoClick}>
              <div className="text-white text-2xl font-bold font-sans cursor-pointer logo">
                edogambacorta
              </div>
            </Link>

            {/* Desktop nav — hidden on mobile */}
            <div className="hidden md:flex flex-row items-center gap-3">
              <NavBar
                items={navItems}
                className="mr-1 text-white"
                onItemClick={handleScroll}
              />
              <LanguageToggle />
              <ShimmerButton
                onClick={() => window.open("https://calendly.com/edoardo-gambacorta/", "_blank")}
                className="text-black font-semibold text-sm"
                shimmerColor="rgba(255, 255, 255, 0.4)"
                shimmerDuration="2s"
              >
                {t('header.bookCall')}
              </ShimmerButton>
            </div>

            {/* Hamburger button — visible only on mobile */}
            <button
              className="md:hidden text-white p-2 relative z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </CenteredContainer>
      </header>

      {/* Mobile fullscreen overlay menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center md:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + index * 0.08 }}
                    onClick={() => handleScroll(item.url)}
                    className="text-white text-3xl font-semibold flex items-center gap-3 hover:text-gray-300 transition-colors"
                  >
                    <Icon size={24} strokeWidth={2} />
                    {item.name}
                  </motion.button>
                )
              })}
            </nav>

            <div className="mt-10">
              <LanguageToggle />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <ShimmerButton
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  window.open("https://calendly.com/edoardo-gambacorta/", "_blank")
                }}
                className="text-black font-semibold text-lg px-8 py-3"
                shimmerColor="rgba(255, 255, 255, 0.4)"
                shimmerDuration="2s"
              >
                {t('header.bookCall')}
              </ShimmerButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
