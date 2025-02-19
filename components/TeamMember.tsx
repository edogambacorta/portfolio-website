import React from 'react';
import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  className?: string;
}

export function TeamMember({ name, role, bio, imageUrl, className = '' }: TeamMemberProps) {
  return (
    <div className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${className}`}>
      <div className="relative h-48">
        <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-sm text-accent mb-2">{role}</p>
        <p className="text-sm opacity-80">{bio}</p>
      </div>
    </div>
  );
}
