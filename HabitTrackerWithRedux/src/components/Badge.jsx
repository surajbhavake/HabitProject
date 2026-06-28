// src/components/Badge.jsx
import React from 'react';

const Badge = ({ variant = 'default', children, className = '' }) => {
  const variants = {
    default: 'bg-[#1E2353] text-white/80',
    completed: 'bg-[#35ED7E]/20 text-[#35ED7E] border border-[#35ED7E]/30',
    active: 'bg-[#EC48BD]/20 text-[#EC48BD] border border-[#EC48BD]/30',
    primary: 'bg-[#5865F2]/20 text-[#5865F2] border border-[#5865F2]/30',
  };
  
  return (
    <span className={`${variants[variant]} px-3 py-1 rounded-[50px] text-[12px] font-medium whitespace-nowrap ${className}`}>
      {children}
    </span>
  );
};

export default Badge;