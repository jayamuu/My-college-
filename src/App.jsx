
import React from 'react'
import Navbar from './Component/Navbar'
import Fotter from './Component/Fotter'
import Callage_card from './Component/Callage_card'
import Home from './Pages/Home'
import About from './Pages/About'
import Courses from './Pages/Courses'
import Faculty from './Pages/Faculty'
import Admission from './Pages/Admission'
import Contact from './Pages/Contact'
import { Route, Routes } from 'react-router-dom'



const App = () => {
  return (
    <div>


      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Course' element={<Courses />} />
        <Route path='/Faculty' element={<Faculty />} />
        <Route path='/Contact' element={<Contact />} />
        </Routes >

        <Admission />
        <Fotter />



    </div>
  )
}

export default App;
