// src/components/HabitForm.jsx
import React from 'react';
import Button from './Button';

const HabitForm = ({ habitName, onNameChange, onSubmit, isEditing, onUpdate }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      onUpdate();
    } else {
      onSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex gap-3 items-center bg-[#1E2353] rounded-2xl p-3 transition-all hover:bg-[#2A2F6A]">
        <input
          type="text"
          placeholder="Enter your habit..."
          value={habitName}
          onChange={(e) => onNameChange(e.target.value)}
          className="flex-1 bg-transparent text-white placeholder-white/50 px-4 py-3 outline-none text-[16px] font-medium"
          autoFocus
        />
        
        {isEditing ? (
          <Button variant="primary" size="md" type="submit">
            Update Habit
          </Button>
        ) : (
          <Button variant="green" size="md" type="submit">
            + Add Habit
          </Button>
        )}
      </div>
    </form>
  );
};

export default HabitForm;