import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IconType } from 'react-icons';

// Define the shape of our social link data
interface SocialItem {
  name: string;
  url: string;
  icon: IconType;
  hoverColor: string;
}

// Config array to modify displayed platforms
const socialData: SocialItem[] = [
  { 
    name: 'GitHub', 
    url: 'https://github.com', 
    icon: FaGithub, 
    hoverColor: 'hover:text-white' 
  },
  { 
    name: 'LinkedIn', 
    url: 'https://linkedin.com', 
    icon: FaLinkedin, 
    hoverColor: 'hover:text-[#0077b5]' 
  },
];

export default function SocialLinks() {
  return (
    <div className="flex gap-6 p-4">
      {socialData.map(({ name, url, icon: Icon, hoverColor }) => (
        <a 
          key={name}
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={name}
          className={`text-gray-600 transition-all duration-300 ease-out transform hover:scale-115 hover:-translate-y-1 ${hoverColor}`}
        >
          <Icon size={32} />
        </a>
      ))}
    </div>
  );
}
