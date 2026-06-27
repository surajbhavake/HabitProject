import React from 'react'

function FilterButtons({currentFilter,onFilterChange}) {

    const filters = ['all','pending','completed'];
  return (
    <div className='flex gap-2 '>
        {filters.map((filter)=>(
            <button
            key={filter}
            onClick={()=>onFilterChange(filter)}
            className={`px-4 py-2 rounded-full captalize transition-colors  ${currentFilter === filter ? 'bg-blue-600 text-white':'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >{filter}</button>
        ))}
    </div>

  )
}

export default FilterButtons