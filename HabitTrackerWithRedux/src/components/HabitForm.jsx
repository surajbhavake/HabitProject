import React from 'react'

function HabitForm({habitName,onNameChange,onSubmit,isEditing,onUpdate}) {
  return (
    <div>
      <div className='flex gap-2 items-center'>
        <input type="text"
        placeholder='Enter your habit'
        value={habitName}
        onChange={(e)=>onNameChange(e.currentTarget.value)}
        className='flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
        />

        {isEditing ? (<button className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors' onClick={onUpdate}>Update</button>):(<button className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors' onClick={onSubmit}>Add</button>)
          }
      </div>
    </div>
  )
}

export default HabitForm
