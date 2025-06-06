import React from 'react';
import logoImage from './rk  russ logo.png';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark', className }) => {
  return (
    <div className={className}>
      <img 
        src={logoImage} 
        alt="RK Russ Logo" 
        className={`w-[160px] ${variant === 'light' ? 'brightness-0 invert' : ''}`}
        style={{ 
          objectFit: 'contain',
          height: '40px'
        }}
      />
    </div>
  );
};

export default Logo;