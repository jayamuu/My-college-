import React from 'react'
import Callage_card from '../Component/Callage_card'

const Home = () => {
  return (
    <div>
{/* hero section */}
<section className='bg-blue-100 py-20 px-6'>
    <div className='max-w-7xl mx-auto text-center'>
        <h1 className='text-5xl font-bold text-blue-800 '>welcome to my callege</h1>
        <p className='text-xl text-gray-600 mt-5'>buildiing fiture leaders through education  </p>
        <button className='bg-blue-700 text-white px-6 py-3 rounded-lg mt-8'>Apply now</button>
    </div>
</section>

{/* features */}
<section className='py-16 px-6'>
  <h2 className='text-3xl font-bold text-center'>why choose our callege</h2>
  
  <div className='max-w6xl mx-auto grid md:grid-cols-3 gap-6 mt-10'>
  
  <Callage_card
  title="experience facylty"
  descripition="leaarn from experienced teacher from our institute"
  />

  <Callage_card
   title="Modern campus"
   descripition="our classroom provide modern classroom and lab"
   />

   <Callage_card
    title="Carreer support"
    descripition="we help student develope skills for their future careers"
   />


  </div>

</section>


<section className='bg-gray-100 py-16 px-6'>
  <h2 className='text-3xl font-bold text-center'>popular courses</h2>
  <div className='max=w-6xl mx-auto md:grid-cols-3 gap mt-10 '>
    <Callage_card
    title="bsc scomputer science"
    descripition="learn programming and database and achive something amazing  !"

    />
    <Callage_card
    title="b-tech"
    descripition="it is provide extreme level of enviroment of coding"
    />

    <Callage_card
      title="b-com"
      descripition="thiscourse define the businese management and accoutancy"
    />
  </div>

</section>
      
    </div>
  )
}

export default Home
