"use client";

import Link from 'next/link'
import { StarBorder } from './ui/star-border'

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  className?: string
}

export function CTAButton({ href, children, onClick, className }: CTAButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    } else if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(href.slice(1));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StarBorder as={Link} href={href} onClick={handleClick} className={`inline-block ${className || ''}`}>
      <span className="btn btn-primary bg-white text-black hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-300 px-4 py-2 text-sm md:px-6 md:py-3 md:text-base shadow-[0_0_10px_rgba(255,255,255,0.7)] hover:shadow-[0_0_20px_rgba(255,255,255,0.9)]">
        {children}
      </span>
    </StarBorder>
  )
}
