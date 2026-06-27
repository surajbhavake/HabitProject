import React from 'react'

function SearchBar({searchTerm,onSearchChange}) {
  return (
    <input type="text"
    value={searchTerm}
    onChange={(e)=>onSearchChange(e.target.value)}
    placeholder='Search habits...'
    className='w-full p-2  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
    />
  )
}

export default SearchBar