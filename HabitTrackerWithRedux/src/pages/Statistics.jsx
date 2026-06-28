// src/pages/Statistics.jsx
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CompletedCount, TotalHabits } from '../store/HabitsSlice';

const Statistics = () => {
  const total = useSelector(TotalHabits);
  const completed = useSelector(CompletedCount);
  const habits = useSelector((state) => state.habits.habits);
  
  const pending = total - completed;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  // Calculate streak (consecutive days with at least one completion)
  // This is a simplified version - you can enhance with actual date tracking
  const streak = useMemo(() => {
    // Placeholder - replace with actual streak calculation when you have date data
    return completed > 0 ? Math.min(completed, 7) : 0;
  }, [completed]);

  // Get motivational message based on completion rate
  const getMotivationalMessage = () => {
    if (percentage === 0) return { text: 'Start your journey today!', emoji: '🌱' };
    if (percentage < 25) return { text: 'Every habit counts. Keep going!', emoji: '💪' };
    if (percentage < 50) return { text: 'You\'re building momentum!', emoji: '🚀' };
    if (percentage < 75) return { text: 'Great progress! Stay consistent!', emoji: '🔥' };
    if (percentage < 100) return { text: 'Almost there! Finish strong!', emoji: '🎯' };
    return { text: 'Perfect score! You\'re a habit master!', emoji: '🏆' };
  };

  const motivation = getMotivationalMessage();

  const stats = [
    {
      label: 'Total Habits',
      value: total,
      icon: '📋',
      color: '#5865F2',
      bg: 'bg-[#5865F2]',
      description: 'All habits you\'ve created',
    },
    {
      label: 'Completed',
      value: completed,
      icon: '✅',
      color: '#35ED7E',
      bg: 'bg-[#35ED7E]',
      description: 'Habits you\'ve finished',
    },
    {
      label: 'Pending',
      value: pending,
      icon: '🔄',
      color: '#EC48BD',
      bg: 'bg-[#EC48BD]',
      description: 'Habits yet to complete',
    },
    {
      label: 'Completion Rate',
      value: `${percentage}%`,
      icon: '📊',
      color: '#5865F2',
      bg: 'bg-[#5865F2]',
      description: 'Overall progress',
    },
  ];

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header */}
      <div className="bg-[#0A0D3A] rounded-[40px] p-6 md:p-8 border border-[#1E2353]">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[32px] md:text-[40px] font-bold text-white flex items-center gap-3">
              <span>📊</span> Statistics
            </h1>
            <p className="text-white/50 text-[16px] mt-1">
              Track your habit progress and achievements
            </p>
          </div>
          <div className="text-right">
            <div className="text-4xl">{motivation.emoji}</div>
            <p className="text-white/60 text-sm mt-1">{motivation.text}</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.bg} rounded-[24px] p-5 text-center transition-all hover:scale-105 hover:shadow-[0_8px_40px_rgba(69,42,124,0.25)] group cursor-default`}
          >
            <div className="text-2xl mb-1.5 group-hover:scale-110 transition-transform">
              {stat.icon}
            </div>
            <div className="text-[32px] font-bold text-white leading-none">
              {stat.value}
            </div>
            <div className="text-[13px] text-white/80 mt-1.5 font-medium">
              {stat.label}
            </div>
            <div className="text-[11px] text-white/50 mt-1">
              {stat.description}
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar Section */}
      <div className="bg-[#1E2353] rounded-[24px] p-6 border border-transparent hover:border-[#5865F2]/20 transition-all">
        <div className="flex items-center justify-between mb-3">
          <span className="text-white/60 text-sm font-medium">Overall Progress</span>
          <span className={`text-lg font-bold ${
            percentage === 100 
              ? 'text-[#35ED7E]' 
              : percentage > 70
              ? 'text-[#35ED7E]'
              : 'text-white'
          }`}>
            {percentage}%
          </span>
        </div>
        <div className="w-full bg-[#0A0D3A] rounded-[50px] h-4 overflow-hidden">
          <div
            className={`h-4 rounded-[50px] transition-all duration-700 ease-out ${
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
        <div className="flex justify-between mt-2">
          <span className="text-white/30 text-xs">0%</span>
          <span className="text-white/30 text-xs">100%</span>
        </div>
      </div>

      {/* Detailed Habit Breakdown */}
      {habits.length > 0 && (
        <div className="bg-[#1E2353] rounded-[24px] p-6 border border-transparent hover:border-[#5865F2]/20 transition-all">
          <h3 className="text-[20px] font-bold text-white mb-4 flex items-center gap-2">
            <span>📝</span> Habit Breakdown
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-[#0A0D3A] rounded-[12px]">
              <div className="flex items-center gap-3">
                <span className="text-[#35ED7E]">✅</span>
                <span className="text-white/80">Completed</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-white font-bold">{completed}</span>
                <span className="text-white/30 text-sm">
                  ({total > 0 ? Math.round((completed / total) * 100) : 0}%)
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-[#0A0D3A] rounded-[12px]">
              <div className="flex items-center gap-3">
                <span className="text-[#EC48BD]">🔄</span>
                <span className="text-white/80">Pending</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-white font-bold">{pending}</span>
                <span className="text-white/30 text-sm">
                  ({total > 0 ? Math.round((pending / total) * 100) : 0}%)
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Tips Section */}
      <div className="bg-[#0A0D3A] rounded-[24px] p-6 border border-[#1E2353]">
        <h3 className="text-[18px] font-bold text-white mb-3 flex items-center gap-2">
          <span>💡</span> Quick Tips
        </h3>
        <ul className="space-y-2 text-white/60 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-[#5865F2]">•</span>
            <span>Consistency is key - try to complete at least one habit daily</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#5865F2]">•</span>
            <span>Start with small, achievable habits to build momentum</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#5865F2]">•</span>
            <span>Celebrate small wins to stay motivated</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Statistics;