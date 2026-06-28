// src/pages/Dashboard.jsx
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  fetchHabits, 
  createHabit, 
  editHabit, 
  toggleHabit, 
  removeHabit 
} from '../store/HabitsSlice';
import HabitForm from '../components/HabitForm';
import HabitCard from '../components/HabitCard';
import ProgressCard from '../components/ProgressCard';
import FilterButtons from '../components/FilterButtons';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';
import Hero from '../components/Hero';

function Dashboard() {
  const dispatch = useDispatch();
  const { habits, status, error } = useSelector((state) => state.habits);
  
  // Local state
  const [habitName, setHabitName] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Calculate statistics
  const completedCount = useMemo(() => {
    return habits.filter(h => h.completion_status).length;
  }, [habits]);

  const totalCount = habits.length;

  // Fetch habits on mount
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchHabits());
    }
  }, [dispatch, status]);

  // Filter and search habits
  const displayHabits = useMemo(() => {
    let filtered = [...habits];
    
    // Apply status filter
    if (filter === 'completed') {
      filtered = filtered.filter(h => h.completion_status);
    } else if (filter === 'pending' || filter === 'active') {
      filtered = filtered.filter(h => !h.completion_status);
    }
    
    // Apply search filter
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase().trim();
      filtered = filtered.filter(h => 
        h.habit_name.toLowerCase().includes(searchLower)
      );
    }
    
    return filtered;
  }, [habits, filter, searchTerm]);

  // Handlers
  const handleAdd = useCallback(() => {
    if (!habitName.trim()) {
      alert('Please enter a valid habit name');
      return;
    }
    
    dispatch(createHabit({
      habit_name: habitName.trim(),
      completion_status: false,
    }));
    setHabitName('');
  }, [habitName, dispatch]);

  const handleUpdate = useCallback((habitId) => {
    const habitToEdit = habits.find(h => h.id === habitId);
    if (habitToEdit) {
      setHabitName(habitToEdit.habit_name);
      setEditingId(habitId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [habits]);

  const handleUpdateSubmit = useCallback(() => {
    if (!habitName.trim()) {
      alert('Please enter a valid habit name');
      return;
    }
    
    dispatch(editHabit({
      id: editingId,
      habit_name: habitName.trim(),
    }));
    setHabitName('');
    setEditingId(null);
  }, [habitName, editingId, dispatch]);

  const handleCancelEdit = useCallback(() => {
    setHabitName('');
    setEditingId(null);
  }, []);

  const handleDelete = useCallback((id) => {
    if (window.confirm('Are you sure you want to delete this habit?')) {
      dispatch(removeHabit(id));
    }
  }, [dispatch]);

  const handleToggle = useCallback((habit) => {
    dispatch(toggleHabit({
      id: habit.id,
      completion_status: !habit.completion_status
    }));
  }, [dispatch]);

  // Loading state
  if (status === 'loading') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
        <div className="w-12 h-12 border-4 border-[#5865F2] border-t-transparent rounded-full animate-spin" />
        <div className="text-white/60 text-lg">Loading your habits...</div>
      </div>
    );
  }

  // Error state
  if (status === 'failed') {
    return (
      <div className="bg-[#1E2353] rounded-[16px] p-8 text-center max-w-md mx-auto">
        <div className="text-4xl mb-4">⚠️</div>
        <p className="text-red-400 text-lg mb-4">Error: {error}</p>
        <Button variant="primary" onClick={() => dispatch(fetchHabits())}>
          Retry
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Hero Section */}
      <Hero 
        totalHabits={totalCount} 
        completedHabits={completedCount} 
      />

      {/* Progress Card */}
      <ProgressCard 
        completed={completedCount} 
        total={totalCount} 
      />

      {/* Main Content */}
      <div className="bg-[#0A0D3A] rounded-[32px] p-4 md:p-6 space-y-5 border border-[#1E2353]">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-[28px] font-bold text-white flex items-center gap-2">
            <span>📋</span> Your Habits
          </h2>
          <span className="text-white/30 text-sm">
            {displayHabits.length} of {totalCount}
          </span>
        </div>

        {/* Habit Form */}
        <HabitForm
          habitName={habitName}
          onNameChange={setHabitName}
          onSubmit={handleAdd}
          isEditing={editingId !== null}
          onUpdate={handleUpdateSubmit}
          onCancelEdit={handleCancelEdit}
        />

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
          <SearchBar 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            placeholder="Search habits..."
          />
          <FilterButtons 
            currentFilter={filter}
            onFilterChange={setFilter}
            habits={habits}
          />
        </div>

        {/* Habits List */}
        {displayHabits.length === 0 ? (
          <div className="bg-[#1E2353] rounded-[16px] p-12 text-center">
            <div className="text-5xl mb-4">
              {totalCount === 0 ? '📭' : '🔍'}
            </div>
            <p className="text-white/60 text-lg">
              {totalCount === 0 
                ? "No habits yet. Create your first habit above!" 
                : searchTerm.trim() 
                  ? `No habits match "${searchTerm}"` 
                  : "No habits match your filter."}
            </p>
            {searchTerm.trim() && totalCount > 0 && (
              <button
                onClick={() => setSearchTerm('')}
                className="mt-4 text-[#5865F2] hover:text-[#4752C4] transition-colors text-sm font-medium"
              >
                Clear search
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {displayHabits.map((habit) => (
              <HabitCard
                key={habit.id}
                habit={habit}
                onToggle={handleToggle}
                onDelete={handleDelete}
                onEdit={handleUpdate}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;