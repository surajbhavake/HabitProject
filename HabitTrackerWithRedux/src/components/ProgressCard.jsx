import React from 'react'

export default function ProgressCard({completed,total}) {
    const percentage = total === 0 ? 0 : Math.round((completed/total)*100);
  return (
    <div className='p-4 bg-white rounded-xl shadow-sm border border-gray-100 text-center'>
        <p className='text-2xl font-bold text-blue-600 '>{completed}/{total}</p>
        <p className='text-gray-600'>habits completed</p>
        <div className='w-full bg-gray-200 rounded-full h-2 mt-2 '>
            <div
            className='bg-blue-600 h-2 rounded-full transition-all duration-300 '
            style={{ width: `${percentage}%` }}
            />
                
            
        </div>
    </div>
  )
}

