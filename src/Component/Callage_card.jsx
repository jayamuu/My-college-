import React from 'react'

const Callage_card = ({title,descripition}) => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6'>
        <h2 className='text-2xl font bold text-blue-700'>{title}</h2>
        <p className='text-gray-600 mt 3'>{descripition}</p>
        <button className='bg-blue-600 text-white px-4 py-2 rounded mt-4'>Learn more</button>
      
    </div>
  )
}

export default Callage_card
