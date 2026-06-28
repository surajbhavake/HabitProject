// src/components/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

const Navbar = ({ isAuthenticated = false, user = null, onLogout = null }) => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Dashboard', icon: '📊' },
    { path: '/statistics', label: 'Statistics', icon: '📈' },
    { path: '/settings', label: 'Settings', icon: '⚙️' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-[#0A0D3A] px-4 md:px-6 py-3 flex items-center justify-between border-b border-[#1E2353] sticky top-0 z-50 backdrop-blur-sm bg-[#0A0D3A]/95">
      
      {/* Logo Section */}
      <Link 
        to="/" 
        className="flex items-center gap-2 hover:opacity-80 transition-opacity group"
      >
        <span className="text-2xl md:text-3xl group-hover:scale-110 transition-transform">🏆</span>
        <span className="text-[20px] md:text-[24px] font-bold text-white hidden sm:inline">
          Habit Tracker
        </span>
        <span className="text-[20px] md:text-[24px] font-bold text-white sm:hidden">
          HT
        </span>
      </Link>

      {/* Navigation Links - Desktop */}
      <div className="hidden md:flex items-center gap-1">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`px-4 py-2 rounded-[12px] text-[15px] font-medium transition-all ${
              isActive(link.path)
                ? 'bg-[#5865F2] text-white shadow-[0_2px_8px_rgba(88,101,242,0.3)]'
                : 'text-white/50 hover:text-white hover:bg-white/5'
            }`}
          >
            <span className="mr-1.5">{link.icon}</span>
            {link.label}
          </Link>
        ))}
      </div>

      {/* Right Section - Auth Actions */}
      <div className="flex items-center gap-2 md:gap-3">
        {isAuthenticated ? (
          <>
            <span className="text-white/60 text-sm hidden sm:inline">
              👤 {user?.username || 'User'}
            </span>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onLogout}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Link to="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="primary" size="sm">
                Sign Up
              </Button>
            </Link>
          </>
        )}
      </div>

      {/* Mobile Menu Button - Hamburger (Optional) */}
      <button 
        className="md:hidden text-white/60 hover:text-white transition-colors p-2 rounded-[12px] hover:bg-white/5"
        aria-label="Toggle menu"
        onClick={() => {/* Implement mobile menu toggle */}}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;