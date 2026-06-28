// src/components/ProgressCard.jsx
import React from 'react';

const ProgressCard = ({ completed = 0, total = 0 }) => {
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
  
  // Determine progress status
  const getProgressStatus = () => {
    if (percentage === 0) return { label: 'No habits yet', emoji: '🌱' };
    if (percentage < 30) return { label: 'Just getting started', emoji: '🚀' };
    if (percentage < 60) return { label: 'Making progress', emoji: '💪' };
    if (percentage < 90) return { label: 'Almost there!', emoji: '🎯' };
    if (percentage < 100) return { label: 'So close!', emoji: '🔥' };
    return { label: 'Perfect streak!', emoji: '🏆' };
  };

  const status = getProgressStatus();

  return (
    <div className="bg-[#1E2353] rounded-[24px] p-6 border border-transparent hover:border-[#5865F2]/20 transition-all hover:shadow-[0_3px_68px_rgba(69,42,124,0.15)]">
      {/* Header with icon and title */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{status.emoji}</span>
          <div>
            <p className="text-white/50 text-sm font-medium">Progress</p>
            <p className="text-white text-sm">{status.label}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[32px] font-bold text-white leading-none">
            {completed}/{total}
          </p>
          <p className="text-white/40 text-sm">habits completed</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative mt-2">
        <div className="w-full bg-[#0A0D3A] rounded-[50px] h-3 overflow-hidden">
          <div
            className={`h-3 rounded-[50px] transition-all duration-700 ease-out ${
              percentage === 100 
                ? 'bg-gradient-to-r from-[#35ED7E] to-[#35ED7E]' 
                : percentage > 70
                ? 'bg-gradient-to-r from-[#5865F2] to-[#35ED7E]'
                : percentage > 40
                ? 'bg-gradient-to-r from-[#5865F2] to-[#EC48BD]'
                : 'bg-gradient-to-r from-[#5865F2] to-[#5865F2]'
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
        
        {/* Percentage Label */}
        <div className="flex justify-between mt-2">
          <span className="text-white/30 text-xs font-medium">0%</span>
          <span className={`text-sm font-bold ${
            percentage === 100 
              ? 'text-[#35ED7E]' 
              : percentage > 70
              ? 'text-[#35ED7E]'
              : 'text-white/70'
          }`}>
            {percentage}%
          </span>
          <span className="text-white/30 text-xs font-medium">100%</span>
        </div>
      </div>

      {/* Motivational Message */}
      {total > 0 && (
        <div className="mt-4 pt-4 border-t border-white/5">
          <p className="text-white/40 text-sm text-center">
            {percentage === 100 
              ? '🎉 All habits completed! Amazing work!' 
              : `${total - completed} habit${total - completed > 1 ? 's' : ''} remaining`}
          </p>
        </div>
      )}
    </div>
  );
};

export default React.memo(ProgressCard);