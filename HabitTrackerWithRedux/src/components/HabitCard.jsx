import React from 'react'

export default function HabitCard({habit,onToggle,onDelete,onEdit}) {
  return (
    <div className='flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100'>
      
      <div className='flex items-center gap-3'>
        <input type="checkbox"
        checked={habit.completion_status}
        onChange={()=>onToggle(habit)}
        className='w-5 h-5 text-blue-600 rounded focus:ring-blue-500'

        />

        <span className={`text-lg ${habit.completion_status ? 'line-through text-gray-400' : 'text-gray-800'}`}
        >{habit.habit_name}</span>
      </div>

      <div className='flex gap-2 '>
        <button
        onClick={()=>onEdit(habit.id)}
        className='px-3 py-1 text-sm bg-yellow-100 text-yellow-800 rounded-lg hover:bg-yellow-200 cursor-pointer'
        >Edit</button>


        <button
        onClick={()=>onDelete(habit.id)}
        className='px-3 py-1  text-sm bg-red-100 rounded-lg  text-red-800 hover:bg-red-200 cursor-pointer'
        >Delete</button>
      </div>
    </div>
  )
}

