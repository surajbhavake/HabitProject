// src/pages/Settings.jsx - Minimalist Version
import React, { useState } from 'react';
import Button from '../components/Button';

const Settings = () => {
  const [settings, setSettings] = useState({
    darkMode: true,
    notifications: true,
    streakReminders: true,
  });

  const handleToggle = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <div className="bg-[#0A0D3A] rounded-[24px] p-6 border border-[#1E2353]">
        <h1 className="text-[28px] font-bold text-white">⚙️ Settings</h1>
      </div>

      <div className="bg-[#1E2353] rounded-[24px] p-6 space-y-4">
        {Object.entries(settings).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between">
            <span className="text-white capitalize">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </span>
            <button
              onClick={() => handleToggle(key)}
              className={`w-12 h-7 rounded-full transition-all ${
                value ? 'bg-[#35ED7E]' : 'bg-[#2A2F6A]'
              }`}
            >
              <span
                className={`block w-5 h-5 rounded-full bg-white transition-all ${
                  value ? 'ml-6' : 'ml-1'
                }`}
              />
            </button>
          </div>
        ))}
      </div>

      <div className="bg-[#1E2353] rounded-[24px] p-6">
        <Button variant="danger" size="md" className="w-full">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Settings;