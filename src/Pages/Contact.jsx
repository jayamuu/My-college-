import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-4xl mx-auto px-6 py-16'>
      <h1 className='text-4xl font-bold text-center text-blue-700'>Contact Us</h1>
      <div className='grid md:grid-cols-2 gap-8 mt-10'>

        <div>
          <h2 className='text-2xl  font-bold'>Callage address</h2>
          <p className='mt-4 text-gray-600'>123 callege road,mumbai,</p>

          <p className='mt-3 '>tel-224444</p>
          <p className='mt-3'>info@myclg.com</p>
</div>
          <form >
            <input type="text"
              className='w-full border p-3 rounded mb-4'
              placeholder='enter your name'
            />
            

            <input type="email"
              placeholder='enter your email'
                  className='w-full border p-3 rounded mb-4'
            />

               <textarea className='w-full border p-3 rounded mb-4 ' rows="5"
               placeholder='your message'>
               </textarea>

               <button className='bg-blue-700 text-white px-6 py-3 rounded'>send Message</button>
          </form>
        </div>
      </div>

    
  )
}

export default Contact 