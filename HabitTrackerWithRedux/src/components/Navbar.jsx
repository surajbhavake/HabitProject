import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {



  return (
    <div>
     <nav className='bg-white shadow-sm border-b border-gray-200 flex justify-between items-center px-8 py-4'>
      <Link to='/' className='text-xl font-bold text-blue-600'>Habit Tracker</Link>
      <div className='flex gap-4'>
      <Link to='/' className='hover:text-blue-600'>Dashboard</Link>
      <Link to='/about' className='hover:text-blue-600'>About</Link>
      <Link to= '/settings' className='hover:text-blue-600'>Setting</Link>
      <Link to='/statistics' className='hover:text-blue-600'>Statistics</Link>
      </div>
     </nav>
    </div>
  )
}

export default Navbar
