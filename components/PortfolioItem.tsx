import React from 'react';
import Image from 'next/image';

interface PortfolioItemProps {
  title: string;
  description: string;
  imageUrl: string;
  className?: string;
}

export function PortfolioItem({ title, description, imageUrl, className = '' }: PortfolioItemProps) {
  return (
    <div className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${className}`}>
      <div className="relative h-48">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm mb-4 opacity-80">{description}</p>
        <a href="#" className="text-accent hover:underline transition-colors duration-300">Learn More</a>
      </div>
    </div>
  );
}
