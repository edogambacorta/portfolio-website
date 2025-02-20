import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  className?: string;
}

export function TeamMember({ name, role, bio, className = '' }: TeamMemberProps) {
  return (
    <div className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${className}`}>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-sm text-accent mb-3">{role}</p>
        <p className="text-sm opacity-80">{bio}</p>
      </div>
    </div>
  );
}
