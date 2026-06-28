// src/components/FilterButtons.jsx
import React from 'react';

const FilterButtons = ({ currentFilter, onFilterChange }) => {
  const filters = [
    { value: 'all', label: 'All', icon: '📋' },
    { value: 'active', label: 'Active', icon: '🔄' },
    { value: 'completed', label: 'Completed', icon: '✅' },
  ];

  return (
    <div className="flex gap-1.5 bg-[#1E2353] rounded-[14px] p-1">
      {filters.map(({ value, label, icon }) => (
        <button
          key={value}
          onClick={() => onFilterChange(value)}
          className={`px-4 py-2 rounded-[12px] text-[14px] font-medium transition-all duration-200 flex items-center gap-1.5 ${
            currentFilter === value
              ? 'bg-[#5865F2] text-white shadow-[0_2px_8px_rgba(88,101,242,0.3)] scale-105'
              : 'text-white/50 hover:text-white hover:bg-white/5'
          }`}
        >
          <span className="text-[16px]">{icon}</span>
          {label}
        </button>
      ))}
    </div>
  );
};

export default React.memo(FilterButtons);