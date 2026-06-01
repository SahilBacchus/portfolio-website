import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Avatar({ 
  src, 
  alt, 
  size = 'md', 
  className = '' 
}: AvatarProps) {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16', // Standard profile size
    lg: 'w-32 h-32', // Profile page header size
  };

  return (
    <div 
      className={`
        relative 
        overflow-hidden 
        rounded-full 
        bg-gray-200
        ${sizeClasses[size]} 
        ${className}
      `}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
