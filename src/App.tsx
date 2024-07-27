import React from 'react'
import Navbar from './components/Navbar'
import MainInfo from './components/MainInfo'
import HowDoesWorks from './components/HowDoesWorks'

const App = () => {
  return (
    <div className='bg-gradient-to-t to-[#11253d] via-[#0f1729] from-[#0f1729] h-full'>
      <Navbar/>
      <MainInfo/>
      <HowDoesWorks/>
    </div>
  )
}

export default App