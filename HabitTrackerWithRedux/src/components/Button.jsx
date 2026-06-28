// src/components/Button.jsx
import React from 'react';

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  onClick, 
  type = 'button',
  className = '',
  disabled = false,
  ...props 
}) => {
  const variants = {
    primary: 'bg-[#5865F2] text-white hover:bg-[#4752C4] active:bg-[#3A45B0]',
    green: 'bg-[#35ED7E] text-black hover:bg-[#2BD46F] active:bg-[#23B85F]',
    ghost: 'bg-[#1E2353] text-white hover:bg-[#2A2F6A] active:bg-[#353B7A]',
    white: 'bg-white text-black hover:bg-gray-100 active:bg-gray-200',
    magenta: 'bg-[#EC48BD] text-white hover:bg-[#D43DAB] active:bg-[#BA3396]',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-[14px]',
    md: 'px-5 py-2.5 text-[16px]',
    lg: 'px-8 py-3.5 text-[18px]',
  };
  
  const baseStyles = 'rounded-[12px] font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${variants[variant]} ${sizes[size]} ${baseStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;