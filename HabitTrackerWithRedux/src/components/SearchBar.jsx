// src/components/SearchBar.jsx
import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange, placeholder = 'Search habits...' }) => {
  return (
    <div className="flex-1 bg-[#1E2353] rounded-[16px] p-1.5 flex items-center transition-all hover:bg-[#2A2F6A] border border-transparent hover:border-[#5865F2]/20 group">
      <span className="text-white/40 px-3 text-lg group-hover:text-white/60 transition-colors">🔍</span>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder={placeholder}
        className="flex-1 bg-transparent text-white placeholder-white/40 px-2 py-2 outline-none text-[15px] font-medium"
        autoComplete="off"
        spellCheck="false"
      />
      {searchTerm && (
        <button
          onClick={() => onSearchChange('')}
          className="text-white/30 hover:text-white/60 px-3 transition-colors"
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default React.memo(SearchBar);