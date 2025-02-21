import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  className?: string;
  textColor?: string;
}

export function TeamMember({ name, role, bio, className = '', textColor = 'text-secondary' }: TeamMemberProps) {
  return (
    <div className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${className}`}>
      <div className="p-6">
        <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>{name}</h3>
        <p className={`text-sm mb-3 ${textColor}`}>{role}</p>
        <p className={`text-sm ${textColor}`}>{bio}</p>
      </div>
    </div>
  );
}
