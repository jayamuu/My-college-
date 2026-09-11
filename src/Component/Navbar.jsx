import { Link } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='bg-blue-700 text-white px8 py8'>

         
        <div className='max-w-7xl mx-auto flex justify-between iteam-center'>
          <h1 className='text 2xl font bold'>MY CALLEGE</h1>

          <div className=' flex gap-6'>
            <Link to="/home"> Home</Link>
            <Link to="/about"> About</Link>
            <Link to="/course">Course</Link>
            <Link to="/faculty"> Faculty</Link>
            <Link to="/contact"> Contact</Link>
             </div>
        
        
        </div>
      </nav>
    </>
  )

}

export default Navbar
