// src/pages/About.jsx
import React from 'react';

export default function About() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">About</h1>
      
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <p className="text-gray-600 mb-3">
          HabitTracker is a simple app to help you build and maintain good habits.
        </p>
        <p className="text-gray-600 mb-3">
          ✓ Add daily habits<br/>
          ✓ Mark them as complete<br/>
          ✓ Track your progress<br/>
          ✓ Build streaks
        </p>
        <p className="text-gray-500 text-sm mt-4">
          Version 1.0.0
        </p>
      </div>
    </div>
  );
}