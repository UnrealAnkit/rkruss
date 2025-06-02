import React from 'react';
import { Globe } from 'lucide-react';
import { cn } from '../../utils/cn';

interface LogoProps {
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark' }) => {
  return (
    <div className="flex items-center">
      <Globe 
        className={cn(
          "w-8 h-8 mr-2",
          variant === 'light' ? 'text-primary-300' : 'text-primary-500'
        )} 
      />
      <div className="flex flex-col">
        <span 
          className={cn(
            "font-heading font-bold text-lg leading-none",
            variant === 'light' ? 'text-white' : 'text-primary-800'
          )}
        >
          Global Migration
        </span>
        <span 
          className={cn(
            "text-xs font-medium",
            variant === 'light' ? 'text-primary-300' : 'text-primary-600'
          )}
        >
          EXPERTS
        </span>
      </div>
    </div>
  );
};

export default Logo;