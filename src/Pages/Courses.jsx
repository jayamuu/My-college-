import React from 'react'

const Courses = () => {
  const Courses=[
    "B.sc Computer Science",
    "B-com",
    "B.A",
    "B.sc Information technology",
    "BBA",
    "MSC Computer Science"
  ]
  return (
    <div className='max-w-6xl mx-auto px-6 py-16'>
       <h1 className='text-4xl font-bold text-blue-700 text-center'>Our courses</h1>

       <div className='grid md:grid-cols-3 gap-6 mt-10'>
        {Courses.map((Course,index)=>(
          <div key={index}
          className='bg-white shadow-lg p-6rounded-lg'
          >
            <h2 className='text-xl font-bold'>{Course}</h2>
             <p className='text-gray-600 mt-3'>learing the industry - revelent skills and build your professional career.</p>
          
             <button className='bg-blue-600 text-white px-4 py-2 rounded mt-4'>view course</button>
          
          </div>
        ))}
        </div>      

      </div>
  )
}

export default Courses
