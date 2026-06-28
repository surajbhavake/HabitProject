// src/components/Hero.jsx
import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const Hero = ({ totalHabits = 0, completedHabits = 0 }) => {
  const completionRate = totalHabits > 0 ? Math.round((completedHabits / totalHabits) * 100) : 0;

  return (
    <div className="relative bg-[#0A0D3A] rounded-[40px] p-8 md:p-12 overflow-hidden border border-[#1E2353]">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5865F2] via-[#EC48BD] to-[#5865F2] opacity-10 animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#5865F2]/5 via-transparent to-transparent" />
      
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <div className="text-5xl md:text-6xl mb-4 animate-bounce">🎯</div>
        <h1 className="text-[40px] md:text-[56px] font-extrabold text-white leading-tight">
          Track Your<br />
          <span className="bg-gradient-to-r from-[#5865F2] via-[#EC48BD] to-[#5865F2] bg-clip-text text-transparent">
            Habits Daily
          </span>
        </h1>
        <p className="text-[17px] md:text-[20px] text-white/60 mt-4 max-w-2xl mx-auto">
          Build better habits, one day at a time. Track your progress and achieve your goals.
        </p>
        
        {totalHabits > 0 && (
          <div className="mt-6 flex items-center justify-center gap-6 md:gap-10 text-white/60">
            <div>
              <span className="text-2xl font-bold text-white">{totalHabits}</span>
              <span className="ml-2 text-sm">Total</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <span className="text-2xl font-bold text-[#35ED7E]">{completionRate}%</span>
              <span className="ml-2 text-sm">Complete</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <span className="text-2xl font-bold text-[#EC48BD]">{totalHabits - completedHabits}</span>
              <span className="ml-2 text-sm">Active</span>
            </div>
          </div>
        )}
        
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/habits/new">
            <Button variant="green" size="lg">
              + Create Habit
            </Button>
          </Link>
          <Link to="/habits">
            <Button variant="primary" size="lg">
              View All Habits
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;