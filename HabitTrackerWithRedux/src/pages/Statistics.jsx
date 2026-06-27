import React from 'react'
import { useSelector } from 'react-redux'
import { CompletedCount,  TotalHabits } from '../store/HabitsSlice'

function Statistics() {

  const total = useSelector(TotalHabits)
  const completed = useSelector(CompletedCount)
  const habits = useSelector((state)=>state.habits.habits)
  const pending = total - completed
  const percentage = total > 0  ?  Math.round((completed/total)*100):0
  

  return (
    <div className='p-6  max-w-2xl mx-auto'>
      <h1  className='text-3xl font-bold text-gray-800 mb-6 '>Statistics</h1>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-white rounded-xl shadow-sm border">
          <p className="text-3xl font-bold text-blue-600">{total}</p>
          <p className="text-gray-600">Total Habits</p>
        </div>
        
        <div className="p-4 bg-white rounded-xl shadow-sm border">
          <p className="text-3xl font-bold text-green-600">{completed}</p>
          <p className="text-gray-600">Completed</p>
        </div>

        <div className="p-4 bg-white rounded-xl shadow-sm border">
        <p className="text-3xl font-bold text-purple-600">{percentage}%</p>
        <p className="text-gray-600">Completion Rate</p>
        </div>
        <div className="p-4 bg-white rounded-xl shadow-sm border">
        <p className="text-3xl font-bold text-red-600">{pending}</p>
        <p className="text-gray-600">Pending</p>
        </div>
      </div>


    </div>
  )
}

export default Statistics
