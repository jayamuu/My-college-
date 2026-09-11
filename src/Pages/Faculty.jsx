import React from 'react'

const Faculty = () => {
    const faculty = [
        {
            id: 1,
            name: "Dr. Rahul sharma",
            subject: "Computer science",
            experience: "10 Years Experiance"
        },
        {
            id: 2,
            name: "Proof.Priya Mehta",
            subject: "Information Technolgy",
            experience:"8 Years Experiance"
        },
        {
            id: 3,
            name: "proof.Priya Mehta",
            subject: "Information Technolgy",
            experience: "8 Yeasr Experience"
        },
        {
            id: 4,
            name: "Dr. Neha Singh",
            subject: "Mathematics",
            experience: "6 Years Experience"
        },
        {
            id: 5,
            name: "proof. Arjun Verma",
            subject: "Physics",
            experience: "6 Years Exprience"
        },
        {
            id: 6,
            name: "Dr. Sneha Kapoor",
            subject: "Management",
            experience: "9 Yeatrs Experience"
        }

    ]


    return (
        <div className='bg-gray-50 min-h-screen py-12 px-6'>

            {/*page heading  */}

            <div className='text-center mb-12'>
                <h1 className='text-4xl font-bold text-blue-700'> Our Faculty</h1>
                <p className='text-gray-600 mt-3'>
                    meet our experience and dedicatedfacylty members
                </p>
            </div>

            {/* faculty card */}
            <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {faculty.map((teacher) => (
                    <div
                        key={teacher.id}
                        className='bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition'
                    >
                        {/* profile circle */}
                        <div className='w-24 h-24 mx-auto bg-blue-100 rounded-full flex items-center justify-center'>

                            <span className='text-3xl font-bold text-blue-600'>
                                {teacher.name.charAt(0)}
                            </span>

                        </div>

                        {/* faculty name */}
                        <h2 className='text-xl font-bold text-gray-800 mt-5'>  {teacher.name}</h2>

                        {/* subject */}
                        <p className='text-blue-600 font mt-2'>{teacher.subject}</p>

                    

                        {/* experience */}
                        <p className='text-gray-500 mt-2'>
                            {teacher.experience}
                        </p>

                        {/* button */}
                        <button className='mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition'>

                            View Profile
                        </button>

                    </div>
                ))}

            </div>

        </div>
    )
}

export default Faculty  ;


