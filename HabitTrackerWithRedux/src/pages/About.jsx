// src/pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const About = () => {
  const features = [
    {
      icon: '✅',
      title: 'Track Daily Habits',
      description: 'Add and complete habits every day to build consistency',
      color: '#35ED7E',
    },
    {
      icon: '📊',
      title: 'Monitor Progress',
      description: 'Visual progress tracking with detailed statistics',
      color: '#5865F2',
    },
    {
      icon: '🏆',
      title: 'Build Streaks',
      description: 'Stay motivated by maintaining your habit streaks',
      color: '#EC48BD',
    },
    {
      icon: '🔒',
      title: 'Secure & Private',
      description: 'Your data is secure with JWT authentication',
      color: '#5865F2',
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Access your habits from any device',
      color: '#35ED7E',
    },
    {
      icon: '🎯',
      title: 'Goal Oriented',
      description: 'Set and achieve your daily goals with ease',
      color: '#EC48BD',
    },
  ];

  const techStack = [
    { name: 'React 19', icon: '⚛️', color: '#61DAFB' },
    { name: 'Redux Toolkit', icon: '🔴', color: '#764ABC' },
    { name: 'Django REST', icon: '🐍', color: '#092E20' },
    { name: 'PostgreSQL', icon: '🐘', color: '#336791' },
    { name: 'Docker', icon: '🐳', color: '#2496ED' },
    { name: 'Tailwind CSS', icon: '🎨', color: '#06B6D4' },
  ];

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Hero Section */}
      <div className="bg-[#0A0D3A] rounded-[40px] p-6 md:p-10 border border-[#1E2353] text-center">
        <div className="text-5xl md:text-6xl mb-4">🎯</div>
        <h1 className="text-[32px] md:text-[48px] font-extrabold text-white leading-tight">
          About{' '}
          <span className="bg-gradient-to-r from-[#5865F2] via-[#EC48BD] to-[#5865F2] bg-clip-text text-transparent">
            HabitTracker
          </span>
        </h1>
        <p className="text-white/60 text-[16px] md:text-[18px] mt-3 max-w-2xl mx-auto">
          A simple yet powerful habit tracking app to help you build better habits,
          one day at a time.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/habits/new">
            <Button variant="green" size="lg">
              + Get Started
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button variant="primary" size="lg">
              View Dashboard
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-[#1E2353] rounded-[32px] p-6 border border-transparent hover:border-[#5865F2]/20 transition-all">
        <h2 className="text-[24px] font-bold text-white mb-6 flex items-center gap-2">
          <span>✨</span> Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#0A0D3A] rounded-[16px] p-5 transition-all hover:scale-105 hover:shadow-[0_3px_68px_rgba(69,42,124,0.15)]"
              style={{ borderLeft: `4px solid ${feature.color}` }}
            >
              <div className="text-3xl mb-2">{feature.icon}</div>
              <h3 className="text-[18px] font-bold text-white mb-1">
                {feature.title}
              </h3>
              <p className="text-white/50 text-[14px] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="bg-[#1E2353] rounded-[32px] p-6 border border-transparent hover:border-[#5865F2]/20 transition-all">
        <h2 className="text-[24px] font-bold text-white mb-6 flex items-center gap-2">
          <span>🛠️</span> Built With
        </h2>
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="bg-[#0A0D3A] rounded-[12px] px-4 py-2 flex items-center gap-2 transition-all hover:scale-105 hover:shadow-[0_3px_68px_rgba(69,42,124,0.15)]"
            >
              <span className="text-lg">{tech.icon}</span>
              <span className="text-white/80 text-[14px] font-medium">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[#1E2353] rounded-[32px] p-6 border border-transparent hover:border-[#5865F2]/20 transition-all">
        <h2 className="text-[24px] font-bold text-white mb-6 flex items-center gap-2">
          <span>📈</span> Impact
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#0A0D3A] rounded-[16px] p-4 text-center">
            <div className="text-[32px] font-bold text-[#5865F2]">100+</div>
            <div className="text-white/50 text-sm">Habits Tracked</div>
          </div>
          <div className="bg-[#0A0D3A] rounded-[16px] p-4 text-center">
            <div className="text-[32px] font-bold text-[#35ED7E]">85%</div>
            <div className="text-white/50 text-sm">Completion Rate</div>
          </div>
          <div className="bg-[#0A0D3A] rounded-[16px] p-4 text-center">
            <div className="text-[32px] font-bold text-[#EC48BD]">30+</div>
            <div className="text-white/50 text-sm">Active Users</div>
          </div>
          <div className="bg-[#0A0D3A] rounded-[16px] p-4 text-center">
            <div className="text-[32px] font-bold text-[#5865F2]">7</div>
            <div className="text-white/50 text-sm">Days Streak</div>
          </div>
        </div>
      </div>

      {/* Version & Links */}
      <div className="bg-[#0A0D3A] rounded-[24px] p-6 border border-[#1E2353]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white/40 text-sm">
              Version 1.0.0 • Made with ❤️ by Suraj Bhavake
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/your-username/habit-tracker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors text-sm"
            >
              GitHub
            </a>
            <span className="text-white/20">|</span>
            <a
              href="#"
              className="text-white/40 hover:text-white transition-colors text-sm"
            >
              Documentation
            </a>
            <span className="text-white/20">|</span>
            <a
              href="#"
              className="text-white/40 hover:text-white transition-colors text-sm"
            >
              Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;