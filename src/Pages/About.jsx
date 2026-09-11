import React from 'react'

const About = () => {
    return (
        <div className='max-w-6xl mx-auto py-16 px6'>
            <h1 className='text-4xl font-bold text-blue-700'>about our callege</h1>
            <p className='mt-6 text-gray-600 text-lg'>
                My collage is commited to providing quality education
                and developing students with knowledge, skills and values.
            </p>

           <p className='mt-4 text-gray-600 text-lg'>
            our collage provides modern facilities ,experience faculity and various academic and extracurricular activities.
           </p>

                <div className='grid md:grid-cols-3 gap-6 mt-10'>
                   <div className='bg-blue-100 p-6 rounded-lg'>
                    <h2 className='text-2xl font-bold'>5000+</h2>
                    <p>students</p>
                   </div>

                   <div className='bg-blue-100 p-6 rounded-lg'>
                    <h2 className='text-2xl font-bold'>100+</h2>
                    <p>Faculty member</p>
                   </div>
              
                    <div className='bg-blue-100 p-6 rounded-lg'>
                           <h2 className='text-2xl font-bold'>25+</h2>
                                     <p>courses</p>
                    </div>

                </div>


        </div>
    )
}

export default About
