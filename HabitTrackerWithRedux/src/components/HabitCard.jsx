// src/components/HabitCard.jsx
import React from 'react';
import Button from './Button';
import Badge from './Badge';

const HabitCard = ({ habit, onToggle, onDelete, onEdit }) => {
  const createdAt = habit.created_at 
    ? new Date(habit.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : 'Recently';

  return (
    <div className="group bg-[#1E2353] rounded-[16px] p-5 transition-all hover:bg-[#2A2F6A] hover:shadow-[0_3px_68px_rgba(69,42,124,0.15)] border border-transparent hover:border-[#5865F2]/20">
      
      <div className="flex items-start justify-between gap-4">
        {/* Left side - Checkbox and Name */}
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <div className="mt-0.5">
            <input
              type="checkbox"
              checked={habit.completion_status}
              onChange={() => onToggle(habit)}
              className="w-5 h-5 rounded-[6px] border-2 border-white/20 bg-transparent checked:bg-[#35ED7E] checked:border-[#35ED7E] focus:ring-2 focus:ring-[#35ED7E]/50 focus:ring-offset-2 focus:ring-offset-[#1E2353] transition-all cursor-pointer"
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <span 
              className={`text-[18px] font-medium block transition-all ${
                habit.completion_status 
                  ? 'line-through text-white/40' 
                  : 'text-white'
              }`}
            >
              {habit.habit_name}
            </span>
            <span className="text-[12px] text-white/30 mt-0.5 block">
              Created {createdAt}
            </span>
          </div>
        </div>

        {/* Right side - Badge and Actions */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Badge variant={habit.completion_status ? 'completed' : 'active'}>
            {habit.completion_status ? '✓ Done' : 'Active'}
          </Badge>
        </div>
      </div>

      {/* Actions - Always visible but with hover enhancements */}
      <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/5">
        <Button
          variant={habit.completion_status ? 'ghost' : 'green'}
          size="sm"
          onClick={() => onToggle(habit)}
        >
          {habit.completion_status ? '↻ Incomplete' : '✓ Complete'}
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onEdit(habit.id)}
        >
          ✎ Edit
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onDelete(habit.id)}
          className="hover:bg-red-500/20 hover:text-red-400"
        >
          ✕ Delete
        </Button>
      </div>
    </div>
  );
};

export default React.memo(HabitCard);